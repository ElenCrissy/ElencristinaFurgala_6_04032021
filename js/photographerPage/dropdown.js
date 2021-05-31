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
        const dropdown = document.createElement('nav');
        const dropdownTrigger = document.createElement('div');
        const dropdownToggle = document.createElement('button');
        const arrow = document.createElement('div');
        const dropdownMenu = document.createElement('ul');
        const listItemPopularity = document.createElement('li');
        const optionPopularity = document.createElement('button');
        const listItemDate = document.createElement('li');
        const optionDate = document.createElement('button');
        const listItemTitle = document.createElement('li');
        const optionTitle = document.createElement('button');
        const options = [optionPopularity, optionDate, optionTitle];

        mediaSelection.classList.add('media-selection');
        mediaSelection.setAttribute('tabindex', '0');
        orderBy.classList.add('orderby');
        orderBy.setAttribute('id', 'orderby');

        dropdown.classList.add('dropdown');
        dropdown.setAttribute('role', 'menuBar');

        dropdownTrigger.classList.add('dropdown-trigger');

        dropdownToggle.classList.add('dropdown-toggle');
        dropdownToggle.setAttribute('aria-haspopup', 'listbox');
        dropdownToggle.setAttribute('aria-expanded', 'false');
        dropdownToggle.setAttribute('role', 'button');

        arrow.classList.add('arrow');

        dropdownMenu.classList.add('dropdown-menu');
        dropdownMenu.setAttribute('role', 'listbox');
        dropdownMenu.setAttribute('aria-labelledbyid', 'orderby');

        optionPopularity.classList.add('option', 'option-popularity');
        optionPopularity.setAttribute('id', 'popularity');
        optionPopularity.setAttribute('aria-label', 'trier par popularité');
        optionDate.classList.add('option', 'option-date');
        optionDate.setAttribute('id', 'date');
        optionDate.setAttribute('aria-label', 'trier par date');
        optionTitle.classList.add('option', 'option-title');
        optionTitle.setAttribute('id', 'title');
        optionTitle.setAttribute('aria-label', 'trier par titre');
        
        orderBy.appendChild(document.createTextNode('Trier par'));
        optionPopularity.appendChild(document.createTextNode('Popularité'));
        optionDate.appendChild(document.createTextNode('Date'));
        optionTitle.appendChild(document.createTextNode('Titre'));

        dropdownTrigger.append(dropdownToggle, arrow);
        listItemPopularity.appendChild(optionPopularity);
        listItemDate.appendChild(optionDate);
        listItemTitle.appendChild(optionTitle);
        dropdownMenu.append(listItemPopularity, listItemDate, listItemTitle);
        dropdown.append(dropdownTrigger,dropdownMenu);
        mediaSelection.append(orderBy, dropdown);
        this.selector.appendChild(mediaSelection);
        
        dropdownToggle.textContent = "Popularité";
        
        // au clic, les options apparaissent
        dropdownToggle.addEventListener('click', () => this.openDropdownMenu());

        options.forEach(option => {
            // au clic sur une option, son contenu apparaît dans le trigger et elle disparaît de la liste
            // les autres apparaissent
            // la galerie est triée en fonction du contenu du trigger
            option.addEventListener('click', () => {
                this.selectOption(options, option);
            });
            option.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    this.selectOption(options, option);
                }
            });
        });
    }

    selectOption(options, option) {
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        const optionId = option.getAttribute('id');
        dropdownToggle.setAttribute('aria-activedescendant', `${optionId}`);
        dropdownToggle.textContent = option.textContent;
        const toggleContentAfterSelection = dropdownToggle.textContent;
        options.forEach(otherOptions => otherOptions.style.display = 'block');
        option.style.display = 'none';
        return this.sortGallery(toggleContentAfterSelection);
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

        if (menuDropDown.style.display === 'none') {
            menuDropDown.style.display = 'block';
        } else {
            menuDropDown.style.display = 'none';
        }

        options.forEach(option => {
            // l'option correspondant au trigger n'apparaît pas
            if (dropdownToggle.textContent === option.textContent) {
                option.style.display = 'none';
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
            });
        }
    }
}