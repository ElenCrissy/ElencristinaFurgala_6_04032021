class Lightbox {
    constructor(listMedia) {
        this.listMedia = listMedia;
    }

    createLightbox() {
        const photographerPageMain = document.querySelector('.photographer-page_main');
        const lightboxModal = document.createElement('div');
        const lightboxContent = document.createElement('div');
        const lightboxCloseBtn = document.createElement('span');
        const navLeft = document.createElement('i');
        const lightboxMedias = this.listMedia.map(this.createLightboxMedia);
        const navRight = document.createElement('i');

        lightboxModal.classList.add('lightbox-modal');
        lightboxContent.classList.add('lightbox-content');
        lightboxCloseBtn.classList.add('lightbox-close-btn');
        navLeft.classList.add('nav-left', 'fas', 'fa-chevron-left');
        navRight.classList.add('nav-right', 'fas', 'fa-chevron-right');

        lightboxModal.appendChild(lightboxContent);
        lightboxContent.append(lightboxCloseBtn, navLeft);
        lightboxMedias.forEach(lightboxMedia => lightboxContent.appendChild(lightboxMedia));
        lightboxContent.append(navRight);
        photographerPageMain.appendChild(lightboxModal);

        lightboxCloseBtn.addEventListener('click', this.closeLightbox);
        // pas compris bind mais ça marche !  
        navRight.addEventListener('click', this.next.bind(null, lightboxMedias));
        navLeft.addEventListener('click', this.previous.bind(null, lightboxMedias));
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