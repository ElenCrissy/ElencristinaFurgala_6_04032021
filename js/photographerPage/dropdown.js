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
        dropdown.setAttribute('role', 'menuBar');

        dropdownTrigger.classList.add('dropdown-trigger');
        dropdownToggle.classList.add('dropdown-toggle');
        dropdownToggle.setAttribute('aria-haspopup', 'true');
        dropdownToggle.setAttribute('aria-expanded', 'false');

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
        
        // au survol, les options apparaissent
        dropdownTrigger.addEventListener('mouseover', this.openDropdownMenu);  

        options.forEach(option => {
            // au clic sur une option, son contenu apparaît dans le trigger et elle disparaît de la liste
            // les autres apparaissent
            // la galerie est triée en fonction du contenu du trigger
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
        // galerie triée par défaut en fonction de la popularité
        // lightbox aussi
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

        dropdownToggle.setAttribute('aria-expanded', 'true');
        arrow.classList.toggle('active');

        if (menuDropDown.style.display === "none") {
            menuDropDown.style.display = "block";
        } else {
            menuDropDown.style.display = "none";
        }

        options.forEach(option => {
            // l'option correspondant au trigger n'apparaît pas
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

    // fonction de tri des médias
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