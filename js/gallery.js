class Gallery{
    constructor(photographer, listMedia) {
        this.photographer = photographer;
        this.listMedia = listMedia;
    }

    createDropdownMenu() {
        const photographerPageMain = document.querySelector('.photographer-page_main');
        const mediaSelection = document.createElement('div');
        const orderBy = document.createElement('label');
        const dropdown = document.createElement('div');
        const dropdownTrigger = document.createElement('div');
        const dropdownToggle = document.createElement('button');
        const arrow = document.createElement('div');
        const dropdownMenu = document.createElement('ul');
        const optionPopularity = document.createElement('li');
        const optionDate = document.createElement('li');
        const optionTitle = document.createElement('li');

        mediaSelection.classList.add('media-selection');
        orderBy.classList.add('orderby');
        dropdown.classList.add('dropdown');
        dropdownTrigger.classList.add('dropdown-trigger');
        dropdownToggle.classList.add('dropdown-toggle');
        arrow.classList.add('arrow');
        dropdownMenu.classList.add('dropdown-menu');
        optionPopularity.classList.add('option');
        optionDate.classList.add('option');
        optionTitle.classList.add('option');

        orderBy.appendChild(document.createTextNode('Trier par'));
        optionPopularity.appendChild(document.createTextNode('Popularité'));
        optionDate.appendChild(document.createTextNode('Date'));
        optionTitle.appendChild(document.createTextNode('Titre'));

        dropdownTrigger.append(dropdownToggle, arrow);
        dropdownMenu.append(optionPopularity, optionDate, optionTitle);
        dropdown.append(dropdownTrigger,dropdownMenu);
        mediaSelection.append(orderBy, dropdown);
        photographerPageMain.appendChild(mediaSelection);
        
        dropdownToggle.textContent = "Popularité";

        this.displayDropDownMenu();
    }

    displayDropDownMenu() {
        const dropdownTrigger = document.querySelector('.dropdown-trigger');
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        const arrow = document.querySelector('.arrow');
        const options = document.querySelectorAll('.option');
        
        const openDropdownMenu = () => {
            const menuDropDown = document.querySelector('.dropdown-menu');
            arrow.classList.toggle('active');
            if (menuDropDown.style.display === "none") {
            menuDropDown.style.display = "block";
            } else {
            menuDropDown.style.display = "none";
            }
            options.forEach(option => {
            if (dropdownToggle.textContent === option.textContent) {
                option.style.display = "none";
            }
            });
        }
        dropdownTrigger.addEventListener('mouseover', openDropdownMenu);  

        // Je sais pas où mettre cette fonction
        this.createGallery();

        options.forEach(option => {
            option.addEventListener('click', () => {
            dropdownToggle.textContent = option.textContent;
            options.forEach(otherOptions => otherOptions.style.display = 'block');
            option.style.display = 'none';
            // let toggleContent = dropdownToggle.textContent;
            // const sortedRelevantMedias = this.sortRelevantMedias(toggleContent, this.listMedia);
            // this.displayMediaGallery(sortedRelevantMedias); 
            })
        });

        const toggleContent = dropdownToggle.textContent;
        const sortedRelevantMedias = this.sortRelevantMedias(toggleContent, this.listMedia);
        
        this.displayMediaGallery(sortedRelevantMedias); 
    }

    sortRelevantMedias(dropdownContent, relevantMediasArray) {
        if (dropdownContent === 'Popularité') {
          return relevantMediasArray.sort(function (a, b) {
            return b.likes - a.likes;
          });
        } else if (dropdownContent === 'Date') {
        return relevantMediasArray.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        } else if (dropdownContent === 'Titre') {
        return relevantMediasArray.sort(function (a, b) {
            const titreA = a.image || a.video;
            const titreB = b.image || b.video;
            if(titreA < titreB) {
            return -1;
            }
            if(titreA > titreB) {
            return 1;
            }
            return 0; 
            })
        }
    }

    createGallery() {
        const photographerPageMain = document.querySelector('.photographer-page_main');
        const gallery = document.createElement('div');
        gallery.classList.add('gallery');
        photographerPageMain.appendChild(gallery);
        // this.listMedia.sort(function (a, b) {
        //     return b.likes - a.likes;
        // })
        // this.displayMediaGallery();
    }

    createMediaCard(mediaData) {
        const media = MediaFactory.createMedia(mediaData).createGalleryDom();
        media.classList.add('media-card');
        media.dataset['mediaId'] = mediaData.id;
        return media;
    }

    displayMediaGallery(array) {
        const gallery = document.querySelector('.gallery');
        const mediaGallery = document.createElement('div');
        const mediaCards = array.map(this.createMediaCard);
        mediaGallery.classList.add('media-gallery');
        while (gallery.firstChild) {
            gallery.removeChild(gallery.firstChild);
        }
        gallery.appendChild(mediaGallery);
        mediaCards.forEach(mediaCard => {
            mediaGallery.appendChild(mediaCard);
        }); 
        const lightbox = new Lightbox(array);
        lightbox.createLightbox();
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