class Gallery{
    constructor(photographer, listMedia, selector, lightbox) {
        this.photographer = photographer;
        this.listMedia = listMedia;
        this.selector = selector;
        this.lightbox = lightbox;
    }

    createGallery() {
        const gallery = document.createElement('div');
        gallery.classList.add('gallery');
        gallery.setAttribute('tabindex', '0');
        this.selector.appendChild(gallery);
    }

    createMediaCard(mediaData) {
        const media = MediaFactory.createMedia(mediaData).createGalleryDom();
        media.classList.add('media-card');
        media.dataset['mediaId'] = mediaData.id;

        return media;
    }

    displayMediaGallery(mediaArray) {
        const gallery = document.querySelector('.gallery');
        const mediaGallery = document.createElement('div');
        const mediaCards = mediaArray.map(this.createMediaCard);
        mediaGallery.classList.add('media-gallery');
        while (gallery.firstChild) {
            gallery.removeChild(gallery.firstChild);
        }
        gallery.appendChild(mediaGallery);
        mediaCards.forEach(mediaCard => {
            mediaGallery.appendChild(mediaCard);
        }); 
    
        // ouverture de la lightbox affichant le média sur lequel on a cliqué
        mediaCards.forEach(mediaCard => {
            const mediaCardFirstChild = mediaCard.firstChild;
            const mediaCardId = mediaCard.getAttribute('data-media-id');

            mediaCardFirstChild.addEventListener('click', () => {
                this.lightbox.openLightbox(mediaCardId);
            });

            mediaCardFirstChild.addEventListener('keydown', (e) => {
                if(e.key === 'Enter') {
                  this.lightbox.openLightbox(mediaCardId);
                }
            });
        });
        
        this.createBottomBox();

        return gallery;
    }

    createBottomBox() {
        const photographerPageMain = document.querySelector('.photographer-page_main');
        const mediasLikes = [];
        this.listMedia.forEach(media => {
            mediasLikes.push(media.likes);
        });
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const bottomBox = document.createElement('div');
        const rating = document.createElement('div');
        const pricePerDay = document.createElement('div');
        const heart = document.createElement('i');

        bottomBox.classList.add('bottom-box');
        rating.classList.add('rating');
        pricePerDay.classList.add('price-per-day');
        heart.classList.add('fas', 'fa-heart');

        rating.innerHTML = mediasLikes.reduce(reducer) + ' <i class="fas fa-heart"></i>';
        pricePerDay.appendChild(document.createTextNode(`${this.photographer.price}€/jour`));

        bottomBox.append(rating, pricePerDay);
        photographerPageMain.appendChild(bottomBox);
        return bottomBox;
    }
}