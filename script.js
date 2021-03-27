// INDEX
// Récupérer données
const JSONPhotographers = `{"photographers": [
  {
    "name": "Mimi Keel",
    "id": 243,
    "city": "London",
    "country": "UK",
    "tags": ["portrait", "events", "travel", "animals"],
    "tagline": "Voir le beau dans le quotidien",
    "price": 400,
    "portrait": "MimiKeel.jpg"
  },
  {
    "name": "Ellie-Rose Wilkens",
    "id": 930,
    "city": "Paris",
    "country": "France",
    "tags": ["sports", "architecture"],
    "tagline": "Capturer des compositions complexes",
    "price": 250,
    "portrait": "EllieRoseWilkens.jpg"
  },
  {
    "name": "Tracy Galindo",
    "id": 82,
    "city": "Montreal",
    "country": "Canada",
    "tags": ["art", "fashion", "events"],
    "tagline": "Photographe freelance",
    "price": 500,
    "portrait": "TracyGalindo.jpg"
  },
  {
    "name": "Nabeel Bradford",
    "id": 527,
    "city": "Mexico City",
    "country": "Mexico",
    "tags": ["travel", "portrait"],
    "tagline": "Toujours aller de l'avant",
    "price": 350,
    "portrait": "NabeelBradford.jpg"
  },
  {
    "name": "Rhode Dubois",
    "id": 925,
    "city": "Barcelona",
    "country": "Spain",
    "tags": ["sport", "fashion", "events", "animals"],
    "tagline": "Je crée des souvenirs",
    "price": 275,
    "portrait": "RhodeDubois.jpg"
  },
  {
    "name": "Marcel Nikolic",
    "id": 195,
    "city": "Berlin",
    "country": "Germany",
    "tags": ["travel", "architecture"],
    "tagline": "Toujours à la recherche de LA photo",
    "price": 300,
    "portrait": "MarcelNikolic.jpg"
  }
]}`;

// Parser les données
const dataPhotographers = JSON.parse(JSONPhotographers);

// Récupérer données pertinentes

// Créer éléments DOM

// Insérer les données
const section = document.querySelector('section');

function createCard() {
  const { photographers } = dataPhotographers;

  for (let i = 0; i < photographers.length; i += 1) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardLink = document.createElement('a'); // aria-label
    cardLink.classList.add('card-link');

    const portrait = document.createElement('img');
    portrait.classList.add('portrait');

    const cardH2 = document.createElement('h2');
    cardH2.classList.add('name');

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    const location1 = document.createElement('div');
    location1.classList.add('card-info__location');

    const slogan = document.createElement('div');
    slogan.classList.add('card-info__slogan');

    const price = document.createElement('div');
    price.classList.add('card-info__price');

    const tagBox = document.createElement('div');
    tagBox.classList.add('card-info__tagbox');

    const cardTag = document.createElement('div');
    cardTag.classList.add('tag');
    const portraitData = photographers[i].portrait;
    const nameData = photographers[i].name;
    // const nameContent = document.createTextNode('nameData');
    const locationData = `${photographers[i].city}, ${photographers[i].country}`;
    const taglineData = photographers[i].tagline;
    const priceData = `${photographers[i].price}€/jour`;
    const tagsData = photographers[i].tags;

    portrait.src = 'images/Sample_Photos/Photographers_ID_Photos/' + `${portraitData}`;
    cardH2.textContent = nameData;
    location1.textContent = locationData;
    slogan.textContent = taglineData;
    price.textContent = priceData;

    for (let j = 0; j < tagsData.length; j += 1) {
      cardTag.textContent = `#${tagsData[j]}`;
      tagBox.textContent = cardTag;
    }

    // Attacher noeuds DOM au document principal
    card.appendChild(cardLink);
    cardLink.append(portrait, cardH2);
    card.appendChild(cardInfo);
    cardInfo.append(location1, slogan, price, tagBox);
    tagBox.appendChild(cardTag);
    section.appendChild(card);
  }
}

// Event - clic navigation tag

function getRelevantData(navTag) {
  if (navTag === undefined) {
    return dataPhotographers.photographers;
  }
  dataPhotographers.photographers.filters();
  const relevantData = [];
  for (let i = 0; i < dataPhotographers.photographers.length; i += 1) {
    const photographer = dataPhotographers.photographers[i];
    if (photographer.tags.includes(navTag)) {
      relevantData.push(photographer);
    }
  }
  return relevantData;
}

window.onload = () => {
  createCard();
};

const navigationItem = document.createElement('div');
navigationItem.classList.add('navigation-item');
navigationItem.addEventListener('click', getRelevantData);

// Event - clic sur vignette => page profil
function navigateToPageProfile() {
  window.location = 'photographer-page.html';
}
// cardLink non défini
cardLink.addEventListener('click', navigateToPageProfile);

// PAGE PROFIL
/* function navigateToIndex() {
  window.location = 'index.html';
}
??.addEventListener('click', navigateToIndex); */

// Média

// Event like

// Total clichés ajouté au profil

// Tri des médias

// Event - Ouverture lightbox

// Event - Fermeture lightbox

// Navigation lightbox via flèches et clavier

// Form - Ouverture modale

// Form - Bouton envoi form => résultat dans console
