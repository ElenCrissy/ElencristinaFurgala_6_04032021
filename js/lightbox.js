class Lightbox {
    constructor(selector) {
        this.selector = selector;
    }

    createLightbox() {
        const lightbox = document.createElement('div');
        const lightboxModal = document.createElement('div');
        const lightboxCloseBtn = document.createElement('span');
        const navLeft = document.createElement('i');
        const lightboxContent = document.createElement('div');
        const navRight = document.createElement('i');
        const lightboxMedias = document.querySelectorAll('.lightbox-media');

        lightbox.classList.add('lightbox');
        lightboxModal.classList.add('lightbox-modal');
        lightboxCloseBtn.classList.add('lightbox-close-btn');
        navLeft.classList.add('nav-left', 'fas', 'fa-chevron-left');
        lightboxContent.classList.add('lightbox-content');
        navRight.classList.add('nav-right', 'fas', 'fa-chevron-right');

        lightbox.appendChild(lightboxModal);
        lightboxModal.append(lightboxCloseBtn, navLeft, lightboxContent, navRight);
        this.selector.appendChild(lightbox);

        lightboxCloseBtn.addEventListener('click', this.closeLightbox);
        // pas compris bind mais ça marche !  
        navRight.addEventListener('click', this.next.bind(null, lightboxMedias));
        navLeft.addEventListener('click', this.previous.bind(null, lightboxMedias));
    }

    generateLightboxMedias(sortedArray) {
        const lightboxContent = document.querySelector('.lightbox-content');
        const lightboxContentMedia = document.createElement('div');
        lightboxContentMedia.classList.add('lightbox-content-media');

        while (lightboxContent.firstChild) {
            lightboxContent.removeChild(lightboxContent.firstChild);
        }

        const lightboxMedias = sortedArray.map(this.createLightboxMedia);

        lightboxMedias.forEach(lightboxMedia => lightboxContentMedia.appendChild(lightboxMedia));
        lightboxContent.insertBefore(lightboxContentMedia, lightboxContent.children[2]);
    }

    createLightboxMedia(mediaData) {
        const lightboxMedia = MediaFactory.createMedia(mediaData).createLightboxDom();
        lightboxMedia.classList.add('lightbox-media');
        return lightboxMedia;
    }

    openLightbox(mediaId) {
        document.querySelector('.lightbox-modal').style.display = 'block';
        const lightboxMedias = document.querySelectorAll('.lightbox-media');
        lightboxMedias.forEach(lightboxMedia => {
            if(mediaId.toString() === lightboxMedia.dataset['mediaId']){
            lightboxMedia.classList.add('active');
            }
        });
    }

    closeLightbox() {
        document.querySelector('.lightbox-modal').style.display = "none";
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