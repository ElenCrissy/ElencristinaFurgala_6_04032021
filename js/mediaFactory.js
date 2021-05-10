class MediaFactory {
    static createMedia(mediaData) {
      if (mediaData.hasOwnProperty('image')) return new Image(mediaData.image, mediaData.photographerId, mediaData.price, mediaData.likes, mediaData.id);
      else if (mediaData.hasOwnProperty('video')) return new Video(mediaData.video, mediaData.photographerId, mediaData.price, mediaData.likes, mediaData.id);
    };
  }
  
  class Video {
    constructor(fileName, photographerId, price, likes, id) {
      this.fileName = fileName;
      this.photographerId = photographerId;
      this.price = price;
      this.likes = likes;
      this.titleContent = this.fileName.slice(0, this.fileName.length-4).replaceAll('_', ' ');
      this.id = id;
    }
  
    // Création élément DOM média de la galerie
    createGalleryDom() {
      const cardVideo = document.createElement('div');
      const mediaVideo = document.createElement('video');
      const mediaVideoSrc = document.createElement('source');
      const mediaCardInfo = document.createElement('div');
      const mediaCardInfoText = document.createElement('div');
      const mediaCardInfoHeart = document.createElement('div');
      const title = document.createElement('div');
      const price = document.createElement('div');
      
      mediaVideo.classList.add('media-video');
      mediaCardInfo.classList.add('media-card_info');
      mediaCardInfoText.classList.add('media-card_info__text');
      mediaCardInfoHeart.classList.add('media-card_info__heart');
      title.classList.add('title');
      price.classList.add('price');
  
      title.appendChild(document.createTextNode(`${this.titleContent}`));
      price.appendChild(document.createTextNode(`${this.price}€`));
      mediaVideoSrc.src = `images/Sample_Photos/${this.photographerId}/${this.fileName}`;
      mediaCardInfoHeart.innerHTML = `${this.likes} <i class="fas fa-heart"></i>`;
      mediaCardInfoHeart.addEventListener('click', () => {
        mediaCardInfoHeart.innerHTML = `${this.likes + 1} <i class="fas fa-heart"></i>`;
      })
  
      mediaVideo.appendChild(mediaVideoSrc);
      mediaCardInfo.appendChild(mediaCardInfoText);
      mediaCardInfoText.append(title, price);
      mediaCardInfo.appendChild(mediaCardInfoHeart);
  
      cardVideo.append(mediaVideo, mediaCardInfo);
  
      mediaVideo.addEventListener('click', () => {
        const lightbox = new Lightbox;
        lightbox.openLightbox(this.id);
      });
  
      return cardVideo;
    };
  
    // Création élément DOM média de la lightbox
    createLightboxDom() {
      const lightboxMedia = document.createElement('div');
      const mediaContent = document.createElement('video');
      const mediaSrc = document.createElement('source');
      const mediaCaption = document.createElement('div');
  
      lightboxMedia.classList.add('lightbox-media');
      mediaContent.classList.add('media-content');
      mediaCaption.classList.add('media-caption');
  
      mediaSrc.src = `images/Sample_Photos/${this.photographerId}/${this.fileName}`;
      mediaContent.addEventListener('click', () => {
        mediaContent.play();
      }, false);
      mediaCaption.appendChild(document.createTextNode(`${this.titleContent}`));
      mediaContent.appendChild(mediaSrc);
      lightboxMedia.append(mediaContent, mediaCaption);
  
      lightboxMedia.dataset['mediaId'] = this.id;
  
      return lightboxMedia;
    }
  }
  
  class Image {
    constructor(fileName, photographerId, price, likes, id) {
      this.fileName = fileName;
      this.photographerId = photographerId;
      this.price = price;
      this.likes = likes;
      this.titleContent = this.fileName.slice(0, this.fileName.length-4).replaceAll('_', ' ');
      this.id = id;
    }
  
    // Création élément DOM média de la galerie
    createGalleryDom() {
      const cardImage = document.createElement('div');
      const mediaImage = document.createElement('img');
      const mediaCardInfo = document.createElement('div');
      const mediaCardInfoText = document.createElement('div');
      const mediaCardInfoHeart = document.createElement('div');
      const title = document.createElement('div');
      const price = document.createElement('div');
      const src = `images/Sample_Photos/${this.photographerId}/${this.fileName}`;
  
      mediaCardInfo.classList.add('media-card_info');
      mediaCardInfoText.classList.add('media-card_info__text');
      mediaCardInfoHeart.classList.add('media-card_info__heart');
      title.classList.add('title');
      price.classList.add('price');
  
      title.appendChild(document.createTextNode(`${this.titleContent}`));
      price.appendChild(document.createTextNode(`${this.price}€`));
      mediaImage.src = src;
      mediaCardInfoHeart.innerHTML = `${this.likes} <i class="fas fa-heart"></i>`;
      mediaCardInfoHeart.addEventListener('click', () => {
        mediaCardInfoHeart.innerHTML = `${this.likes + 1} <i class="fas fa-heart"></i>`;
      })
  
      mediaCardInfo.appendChild(mediaCardInfoText);
      mediaCardInfoText.append(title, price);
      mediaCardInfo.appendChild(mediaCardInfoHeart);
  
      cardImage.append(mediaImage, mediaCardInfo);
  
      mediaImage.addEventListener('click', () => {
        const lightbox = new Lightbox();
        lightbox.openLightbox(this.id);
      });
  
      return cardImage;
    }
  
    // Création élément DOM média de la lightbox
    createLightboxDom() {
      const lightboxMedia = document.createElement('div');
      const mediaContent = document.createElement('img');
      const mediaCaption = document.createElement('div');
  
      lightboxMedia.classList.add('lightbox-media');
      mediaContent.classList.add('media-content');
      mediaCaption.classList.add('media-caption');
  
      mediaContent.src = `images/Sample_Photos/${this.photographerId}/${this.fileName}`;
      mediaCaption.appendChild(document.createTextNode(`${this.titleContent}`));
      lightboxMedia.append(mediaContent, mediaCaption);
  
      lightboxMedia.dataset['mediaId'] = this.id;
  
      return lightboxMedia;
    }
  }