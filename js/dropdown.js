class Dropdown {
    constructor(listMedia, selector, gallery, lightbox) {
        this.listMedia = listMedia;
        this.selector = selector;
        this.gallery = gallery;
        this.lightbox = lightbox;
    }

    createDropdownMenu() {
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
        const options = [optionPopularity, optionDate, optionTitle];

        mediaSelection.classList.add('media-selection');
        orderBy.classList.add('orderby');
        dropdown.classList.add('dropdown');
        dropdownTrigger.classList.add('dropdown-trigger');
        dropdownToggle.classList.add('dropdown-toggle');
        arrow.classList.add('arrow');
        dropdownMenu.classList.add('dropdown-menu');
        optionPopularity.classList.add('option', 'option-popularity');
        optionDate.classList.add('option', 'option-date');
        optionTitle.classList.add('option', 'option-title');
        
        orderBy.appendChild(document.createTextNode('Trier par'));
        optionPopularity.appendChild(document.createTextNode('Popularité'));
        optionDate.appendChild(document.createTextNode('Date'));
        optionTitle.appendChild(document.createTextNode('Titre'));

        dropdownTrigger.append(dropdownToggle, arrow);
        dropdownMenu.append(optionPopularity, optionDate, optionTitle);
        dropdown.append(dropdownTrigger,dropdownMenu);
        mediaSelection.append(orderBy, dropdown);
        this.selector.appendChild(mediaSelection);
        
        dropdownToggle.textContent = "Popularité";
        // const toggleContent = dropdownToggle.textContent;
        
        dropdownTrigger.addEventListener('mouseover', this.openDropdownMenu);  

        options.forEach(option => {
            option.addEventListener('click', () => {
                dropdownToggle.textContent = option.textContent;
                const toggleContentAfterSelection = dropdownToggle.textContent;
                options.forEach(otherOptions => otherOptions.style.display = 'block');
                option.style.display = 'none';
                return this.sortGallery(toggleContentAfterSelection);
            })
        }); 
    }

    initializeDropdownMenu() {
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        const toggleContent = dropdownToggle.textContent;
        const sortedRelevantMediasPopularity = this.sortRelevantMedias(toggleContent, this.listMedia);
        this.gallery.displayMediaGallery(sortedRelevantMediasPopularity);
        this.lightbox.generateLightboxMedias(sortedRelevantMediasPopularity);
    }

    openDropdownMenu() {
        const optionPopularity = document.querySelector('.option-popularity');
        const optionDate = document.querySelector('.option-date');
        const optionTitle = document.querySelector('.option-title');
        const menuDropDown = document.querySelector('.dropdown-menu');
        const arrow = document.querySelector('.arrow');
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        const options = [optionPopularity, optionDate, optionTitle];

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

    sortGallery(sortCategory) {
        const sortedRelevantMedias = this.sortRelevantMedias(sortCategory, this.listMedia);
        this.gallery.displayMediaGallery(sortedRelevantMedias); 
        this.lightbox.generateLightboxMedias(sortedRelevantMedias);
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
}