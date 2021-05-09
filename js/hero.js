class Hero{
    constructor(photographer){
        this.photographer = photographer;
    }

    createDomHero() {
        const photographerPageMain = document.querySelector('.photographer-page_main');
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

        // J'insère les données
        portrait.src = `images/Sample_Photos/Photographers_ID_Photos/${this.photographer.portrait}`;
        name.appendChild(document.createTextNode(this.photographer.name));
        location.appendChild(document.createTextNode(`${this.photographer.city}, ${this.photographer.country}`));
        tagline.appendChild(document.createTextNode(this.photographer.tagline));

        // Je crée les tags
        const photographerTags = this.photographer.tags;
        photographerTags.forEach((photographerTag) => {
            const tag = document.createElement('div');
            tag.classList.add('tag');
            const tagContent = document.createTextNode(`#${photographerTag}`);
            tag.appendChild(tagContent);
            tagbox.appendChild(tag);

            // J'indique le contenu du tag pour les lecteurs d'écran
            const span = document.createElement('span');
            const spanContent = document.createTextNode(`${photographerTag}`);
            span.classList.add('sr-only');
            span.appendChild(spanContent);
            tag.appendChild(span);
        });

        // J'attache aux noeuds DOM
        heroInfo.append(name, location, tagline, tagbox);
        heroButton.appendChild(contactButton);
        heroImage.appendChild(portrait);
        hero.append(heroInfo, heroButton, heroImage);
        photographerPageMain.appendChild(hero);

        // Au clic sur bouton, ouvre formulaire
        const form = new Form(`${this.photographer.name}`)
        form.createForm();
        contactButton.addEventListener('click', form.launchForm);
        
        return contactButton;
    }
}