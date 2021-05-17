class Lightbox {
    constructor(selector, background) {
        this.selector = selector;
        this.background = background;
    }

    createLightbox() {
        const lightbox = document.createElement('div');
        const lightboxModal = document.createElement('div');
        const lightboxCloseBtn = document.createElement('span');
        const navLeft = document.createElement('i');
        const lightboxContent = document.createElement('div');
        const navRight = document.createElement('i');

        lightbox.classList.add('lightbox');
        lightbox.setAttribute('role', 'dialog');
        lightbox.setAttribute('aria-label', 'diaporama');
        lightbox.setAttribute('aria-hidden', 'true');
        lightbox.setAttribute('aria-modal', 'true');
        
        lightboxModal.classList.add('lightbox-modal');
        lightboxModal.setAttribute('aria-label', 'lightbox image agrandie');

        lightboxCloseBtn.classList.add('lightbox-close-btn');
        lightboxCloseBtn.setAttribute('aria-label', 'fermer lightbox');
        lightboxCloseBtn.setAttribute('tabindex', '0');

        navLeft.classList.add('nav-left', 'fas', 'fa-chevron-left');
        navLeft.setAttribute('aria-label', 'image précédente');

        lightboxContent.classList.add('lightbox-content');
        lightboxContent.setAttribute('tabindex', '0');
        lightboxContent.setAttribute('aria-label', 'naviguer avec flèches du clavier');


        navRight.classList.add('nav-right', 'fas', 'fa-chevron-right');
        navRight.setAttribute('aria-label', 'image suivante');

        lightbox.appendChild(lightboxModal);
        lightboxModal.append(lightboxCloseBtn, navLeft, lightboxContent, navRight);
        this.selector.appendChild(lightbox);

        lightboxCloseBtn.addEventListener('click', this.closeLightbox.bind(this));
        lightboxCloseBtn.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.closeLightbox();
            }
        });
        // accessibilité - fermeture lightbox
        window.addEventListener('keypress', (event) => {
            if (event.key === 'Escape') {
              this.closeLightbox();
            }
        });
    }

    generateLightboxMedias(sortedArray) {
        const lightboxContent = document.querySelector('.lightbox-content');
        const lightboxContentMedia = document.createElement('div');
        lightboxContentMedia.classList.add('lightbox-content-media');

        while (lightboxContent.firstChild) {
            lightboxContent.removeChild(lightboxContent.firstChild);
        }

        // pour chaque média, création d'un élément média de la lightbox
        const lightboxMedias = sortedArray.map(this.createLightboxMedia);

        lightboxMedias.forEach(lightboxMedia => lightboxContentMedia.appendChild(lightboxMedia));
        // médias positionnés entre les flèches de navigation
        lightboxContent.insertBefore(lightboxContentMedia, lightboxContent.children[2]);

        const navRight = document.querySelector('.nav-right');
        navRight.addEventListener('click', this.next.bind(null, lightboxMedias));
        const navLeft = document.querySelector('.nav-left');
        navLeft.addEventListener('click', this.previous.bind(null, lightboxMedias));

        // accessibilité - navigation lightbox
        lightboxContent.addEventListener('keypress', (event) => {
            if (event.key === 'ArrowLeft') {
                this.previous(lightboxMedias);
            } else if (event.key === 'ArrowRight') {
                this.next.bind(null, lightboxMedias);
            }
        });
    }

    createLightboxMedia(mediaData) {
        const lightboxMedia = MediaFactory.createMedia(mediaData).createLightboxDom();
        lightboxMedia.classList.add('lightbox-media');
        return lightboxMedia;
    }

    openLightbox(mediaId) {
        const lightbox = document.querySelector('.lightbox');
        lightbox.style.display = 'block';
        lightbox.setAttribute('aria-hidden', 'false');
        this.background.style.display = 'none';
        const lightboxMedias = document.querySelectorAll('.lightbox-media');
        // affichage du média lightbox qui correspond à la miniature sélectionnée dans la galerie
        lightboxMedias.forEach(lightboxMedia => {
            if(mediaId.toString() === lightboxMedia.dataset['mediaId']){
            lightboxMedia.classList.add('active');
            }
        });
    }

    closeLightbox() {
        const lightbox = document.querySelector('.lightbox');
        lightbox.style.display = "none";
        lightbox.setAttribute('aria-hidden', 'true');
        this.background.style.display = 'block';
        const lightboxMedias = document.querySelectorAll('.lightbox-media');
        lightboxMedias.forEach(lightboxMedia => {
            if(lightboxMedia.classList.contains('active')){
            lightboxMedia.classList.remove('active');
            }
        })
    }

    next(mediaArray) {
        for(let i = 0; i < mediaArray.length-1; i++) {
            if(mediaArray[i].classList.contains('active')) {
                mediaArray[i].classList.remove('active');
                const nextMedia = (i+=1);
                mediaArray[nextMedia].classList.add('active');
            }
          }
    }

    previous(mediaArray) {
        for(let i = 1; i < mediaArray.length; i++) {
            if(mediaArray[i].classList.contains('active')) {
                mediaArray[i].classList.remove('active');
              const previousMedia = (i-=1);
              mediaArray[previousMedia].classList.add('active');
            }
          }
    }
}