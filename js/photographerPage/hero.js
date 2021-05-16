class Hero{
    constructor(photographer, selector, form, listMedia, gallery){
        this.photographer = photographer;
        this.selector = selector;
        this.form = form;
        this.listMedia = listMedia;
        this.gallery = gallery;
    }

    createDomHero() {
        const hero = document.createElement('div');
        const heroInfo = document.createElement('div');
        const heroButton = document.createElement('div');
        const heroImage = document.createElement('div');
        const portrait = document.createElement('img');
        const name = document.createElement('h1');
        const location = document.createElement('div');
        const tagline = document.createElement('div');
        const tagbox = document.createElement('div');
        const contactButton = document.createElement('input');
  
        hero.classList.add('hero');
        heroInfo.classList.add('info');
        heroInfo.setAttribute('aria-label', 'info photographe');
        heroButton.classList.add('hero-button');
        heroImage.classList.add('hero-image');
        portrait.classList.add('portrait');
        name.classList.add('name');
        location.classList.add('location');
        tagline.classList.add('tagline');
        tagbox.classList.add('tagbox');
        contactButton.classList.add('btn-contact');
        contactButton.type = 'button';
        contactButton.value = 'Contactez-moi';

        portrait.src = `images/Sample_Photos/Photographers_ID_Photos/${this.photographer.portrait}`;
        name.appendChild(document.createTextNode(this.photographer.name));
        location.appendChild(document.createTextNode(`${this.photographer.city}, ${this.photographer.country}`));
        tagline.appendChild(document.createTextNode(this.photographer.tagline));

        const photographerTags = this.photographer.tags;
        photographerTags.forEach((photographerTag) => {
            const tag = document.createElement('div');
            tag.classList.add('tag');
            const tagContent = document.createTextNode(`#${photographerTag}`);
            tag.appendChild(tagContent);
            tagbox.appendChild(tag);
            tag.setAttribute('tabindex', '0');


            // contenu pour les lecteurs d'écran
            const span = document.createElement('span');
            const spanContent = document.createTextNode(`${photographerTag}`);
            span.classList.add('sr-only');
            span.appendChild(spanContent);
            tag.appendChild(span);

            tag.dataset['tagName'] = span.innerText;
        });

        heroInfo.append(name, location, tagline, tagbox);
        heroButton.appendChild(contactButton);
        heroImage.appendChild(portrait);
        hero.append(heroInfo, heroButton, heroImage);
        this.selector.appendChild(hero);

        // ouverture formulaire
        contactButton.addEventListener('click', () => {
            this.form.launchForm();
        });
        
        return contactButton;
    }
    
    selectHeroTag() {
        const heroTags = document.querySelectorAll('.tag');
        heroTags.forEach((heroTag) => {
            const heroTagContent = heroTag.dataset['tagName'];
            // au clic sur un tag de la navbar, classe active appliquée et cartes affichées
            heroTag.addEventListener('click', () => {
            heroTags.forEach((otherHeroTags) => otherHeroTags.classList.remove('active'));
            heroTag.classList.add('active');
            const relevantMedias = this.getRelevantMedias(heroTagContent);
            console.log(relevantMedias);
            return this.gallery.displayMediaGallery(relevantMedias);
            });
        });
    }

    getRelevantMedias(filterTag) {
        if (filterTag === undefined) {
          return this.listMedia;
        }
        const filteredMedias = this.listMedia.filter((media) => {
            return media.tags.includes(filterTag)
        });
        return filteredMedias;
    }
}