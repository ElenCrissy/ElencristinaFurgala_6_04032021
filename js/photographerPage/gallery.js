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
            const mediaCardLikes = mediaCard.getAttribute('data-media-likes');
            const mediaLastChild = mediaCard.lastChild;
            this.addLike(mediaLastChild, mediaCardLikes);

            mediaCardFirstChild.addEventListener('click', () => {
                this.lightbox.openLightbox(mediaCardId);
            });

            mediaCardFirstChild.addEventListener('keydown', (e) => {
                if(e.key === 'Enter') {
                  this.lightbox.openLightbox(mediaCardId);
                }
            });
        });
        
        return gallery;
    }

    addLike(selectedMediaInfo, likes) {
        const likeBlock = selectedMediaInfo.lastChild;
        const likesNumber = Number(likes);
        likeBlock.addEventListener('click', () => {
            const newLikes = likesNumber + 1;
            likeBlock.innerHTML = `${newLikes} <i class="fas fa-heart"></i>`;

            const rating = document.querySelector('.rating');
            let counter = rating.innerHTML;
            this.updateBottomBox(counter);

            return newLikes;
        });
    }

    createBottomBox() {
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

        const totalLikes = mediasLikes.reduce(reducer);
        rating.innerHTML = totalLikes;
        pricePerDay.appendChild(document.createTextNode(`${this.photographer.price}€/jour`));

        bottomBox.append(rating, heart, pricePerDay);
        this.selector.appendChild(bottomBox);

        bottomBox.dataset['totalLikes'] = totalLikes;

        return bottomBox;
    }

    updateBottomBox(counter) {
        const rating = document.querySelector('.rating');
        rating.innerHTML = counter++;
        console.log(counter);
    }
}