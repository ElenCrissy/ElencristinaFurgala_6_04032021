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
const parseJSONPhotographers = JSON.parse(JSONPhotographers);
// console.log(parseJSONPhotographers);

// Récupérer données pertinentes

const {photographers} = parseJSONPhotographers;

for (let i = 0; i < photographers.length; i += 1) {
  const infoPertinentes = `${photographers[i].name}
  ${photographers[i].city}, ${photographers[i].country}
  ${photographers[i].tagline}
  ${photographers[i].price}€/jour
  ${photographers[i].tags}`;
  console.log(infoPertinentes);
}

// Créer éléments DOM
const section = document.querySelector('section');
const hero = document.createElement('div').classList.add('hero');

const heroLink = document.createElement('a').classList.add('hero-link'); // aria-label
const portrait = document.createElement('img').classList.add('portrait');
const heroH2 = document.createElement('h2').classList.add('name');

const heroInfo = document.createElement('div').classList.add('hero-info');

const location1 = document.createElement('div').classList.add('hero-info__location');
const slogan = document.createElement('div').classList.add('hero-info__slogan');
const price = document.createElement('div').classList.add('hero-info__price');
const tagbox = document.createElement('div').classList.add('hero-info__tagbox');

// Insérer les données

/* class Hero {
  constructor(photo, name, location, slogan, price, tagbox) {
    this.photo = photo;
    this.name = name;
    this.location = location;
    this.slogan = slogan;
    this.price = price;
    this.tagbox = tagbox;
  }
} */

/* class Hero {
  constructor(heroLink, heroInfo) {
    // Déclaration propriétés
    this.heroLink = heroLink;
    this.heroInfo = heroInfo;

    // Déclaration méthodes
    this.createHeroLink = function createHeroLink() {
      this.portrait = portrait.setAttribute('src', 'parseJSONPhotographers.photographers[i].portrait');
      this.heroH2.innerHTML = parseJSONPhotographers.photographers[i].name;
    };
    this.createHeroInfo = function createHeroInfo() {
      this.location1.innerHTML = `${parseJSONPhotographers.photographers[i].city}${parseJSONPhotographers.photographers[i].country}`;
    };
    return { heroLink, heroInfo };
  }
} */

function showHero() {
  for (let i = 0; i < photographers.length; i += 1) {
    heroH2.textContent = photographers[i].name;
    return {location1};
  }
}
console.log(heroH2);

// pour chaque photographe, créer un hero

// Attacher noeuds DOM au document principal
section.appendChild(hero);
hero.appendChild(heroLink);
heroLink.append(portrait, heroH2);
hero.appendChild(heroInfo);
heroInfo.append(location1, slogan, price, tagbox);

// Event - clic sur tag de la barre de navigation
// si un tag est actif/cliqué
// alors le reste display none

// Event - clic sur vignette => page profil
heroLink.addEventListener('click', pageProfil);
function pageProfil() {
  window.location = 'photographer-page.html';
}

// PAGE PROFIL

// Média

// Event like

// Total clichés ajouté au profil

// Tri des médias

// Event - Ouverture lightbox

// Event - Fermeture lightbox

// Navigation lightbox via flèches et clavier

// Form - Ouverture modale

// Form - Bouton envoi form => résultat dans console
