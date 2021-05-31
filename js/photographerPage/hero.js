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
        hero.setAttribute('tabindex', '0');
        heroInfo.classList.add('info');
        heroInfo.setAttribute('aria-label', 'info photographe');
        heroButton.classList.add('hero-button');
        heroImage.classList.add('hero-image');
        portrait.classList.add('portrait');
        name.classList.add('name');
        location.classList.add('location');
        tagline.classList.add('tagline');
        tagbox.classList.add('tagbox');
        tagbox.setAttribute('role', 'navigation');
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
            tag.setAttribute('aria-label', `trier par ${photographerTag}`);
            tag.setAttribute('role', 'button');
            tag.appendChild(document.createTextNode(`#${photographerTag}`));
            tag.setAttribute('tabindex', '0');
            tag.dataset['tagName'] = photographerTag;

            tagbox.appendChild(tag);

            tag.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                  this.selectHeroTag();
                }
              });
        });

        heroInfo.append(name, location, tagline, tagbox);
        heroButton.appendChild(contactButton);
        heroImage.appendChild(portrait);
        hero.append(heroInfo, heroButton, heroImage);
        this.selector.appendChild(hero);

        hero.focus();

        // ouverture formulaire
        contactButton.addEventListener('click', () => {
            let previousActiveElement;
            this.form.launchForm(previousActiveElement);
        });
        
        return contactButton;
    }
    
    selectHeroTag() {
        const heroTags = document.querySelectorAll('.tag');
        heroTags.forEach((heroTag) => {
            const heroTagContent = heroTag.dataset['tagName'];
            // au clic sur un tag de la navbar, classe active appliquée et cartes affichées
            // au deuxième clic, classe active retirée et toutes les cartes sont affichées
            heroTag.addEventListener('click', () => {
                if (!(heroTag.classList.contains('active'))) {
                    heroTags.forEach((otherHeroTags) => otherHeroTags.classList.remove('active'));
                    heroTag.classList.add('active');
                    const relevantMedias = this.getRelevantMedias(heroTagContent);
                    return this.gallery.displayMediaGallery(relevantMedias);
                } else {
                    heroTag.classList.remove('active');
                    const relevantMedias = this.getRelevantMedias();
                    return this.gallery.displayMediaGallery(relevantMedias);
                }
                
            });
        });
    }

    getRelevantMedias(filterTag) {
        if (filterTag === undefined) {
          return this.listMedia;
        }
        const filteredMedias = this.listMedia.filter((media) => {
            return media.tags.includes(filterTag);
        });
        return filteredMedias;
    }
}