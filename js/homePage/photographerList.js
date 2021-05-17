class PhotographerList{
    constructor(selector, photographers){
        this.selector = selector;
        this.photographers = photographers;
    }

    getRelevantPhotographers(filterTag) {
        if (filterTag === undefined) {
          return this.photographers;
        }
        const filteredPhotographers = this.photographers.filter((photographer) => photographer.tags.includes(filterTag));
        return filteredPhotographers;
    }

    displayRelevantCards(selectedTag) {
        const relevantPhotographers = this.getRelevantPhotographers(selectedTag);
        // nettoyage de l'élément parent
        while (this.selector.firstChild) {
            this.selector.removeChild(this.selector.firstChild);
        }
        relevantPhotographers.forEach((relevantPhotographer) => {
            const card = this.createCard(relevantPhotographer);
            this.selector.appendChild(card);
        });
    }

    createCard(photographer) {
      const { id } = photographer;
      const card = document.createElement('div');
      const cardLink = document.createElement('a');
      const portrait = document.createElement('img');
      const cardH2 = document.createElement('h2');
      const cardInfo = document.createElement('div');
      const location = document.createElement('div');
      const tagline = document.createElement('div');
      const price = document.createElement('div');
      const tagbox = document.createElement('div');
    
      card.classList.add('card');
      cardLink.classList.add('card-link');
      portrait.classList.add('portrait');
      cardH2.classList.add('name');
      cardInfo.classList.add('info');
      cardInfo.setAttribute('aria-label', 'info photographe');
      location.classList.add('location');
      tagline.classList.add('tagline');
      price.classList.add('price');
      tagbox.classList.add('tagbox');
    
      cardLink.setAttribute('href', `./photographer-page.html?id=${id}`);
      cardLink.setAttribute('aria-label', `${photographer.name}`);
    
      portrait.setAttribute('alt', `${photographer.name}`);
      portrait.src = `images/Sample_Photos/Photographers_ID_Photos/${photographer.portrait}`;
      cardH2.appendChild(document.createTextNode(photographer.name));
      location.appendChild(document.createTextNode(`${photographer.city}, ${photographer.country}`));
      tagline.appendChild(document.createTextNode(photographer.tagline));
      price.appendChild(document.createTextNode(`${photographer.price}€/jour`));
    
      card.appendChild(cardLink);
      cardLink.append(portrait, cardH2);
      card.appendChild(cardInfo);
    
      // tags
      const photographerTags = photographer.tags;
      photographerTags.forEach((photographerTag) => {
        const tag = document.createElement('a');
        tag.classList.add('tag');
        const tagContent = document.createTextNode(`#${photographerTag}`);
        tag.appendChild(tagContent);
        tagbox.appendChild(tag);
        tag.setAttribute('tabindex', '0');

    
        // contenu du tag pour les lecteurs d'écran
        const spanCard = document.createElement('span');
        const spanCardContent = document.createTextNode(`${photographerTag}`);
        spanCard.classList.add('sr-only');
        spanCard.appendChild(spanCardContent);
        tag.appendChild(spanCard);
      });
    
      cardInfo.append(location, tagline, price, tagbox);
    
      // interaction tags
      const cardTags = document.querySelectorAll('.class .tag');
      console.log(cardTags)


      // à revoir
      cardTags.forEach((cardTag) => {
        cardTag.addEventListener('click', () => {
          if (!(cardTag.classList.contains('active'))) {
            cardTags.forEach((otherCardTags) => otherCardTags.classList.remove('active'));
            cardTag.classList.add('active');
            const spandiv = cardTag.querySelector('span');
            const spanText = spandiv.innerText;
            return this.displayRelevantCardsFromCardTag(spanText);
          } else {
            cardTag.classList.remove('active');
            console.log('hello')
            return this.displayRelevantCardsFromCardTag(undefined);
          }
        });
      });
    
      return card;
    }

    displayRelevantCardsFromCardTag(selectedCardTag) {
        const relevantPhotographers = this.getRelevantPhotographers(selectedCardTag);
        // nettoyage de l'élément parent
        while (this.selector.firstChild) {
          this.selector.removeChild(this.selector.firstChild);
        }
        relevantPhotographers.forEach((relevantPhotographer) => {
          const card = this.createCard(relevantPhotographer);
          this.selector.appendChild(card);
        });
      }
}