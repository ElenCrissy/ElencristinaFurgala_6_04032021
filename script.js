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
// Récupérer données pertinentes

// Créer éléments DOM
const section = document.querySelector('section');
const hero = section.createElement('div');
section.appendChild(hero).classList.add('hero');

const heroLink = document.createElement('a');
hero.appendChild(a).classList.add('hero-link');
const photoProfile = heroLink.createElement('img');
//photoProfile.src = '';
heroLink.appendChild(photoProfile);
const heroH2 = document.createElement('h2');
heroLink.appendChild(heroH2);

const heroInfo = document.createElement('div');
hero.appendChild(heroInfo).classList.add('hero-info');

const location = document.createElement('div').classList.add('hero-info__location');
const slogan = document.createElement('div').classList.add('hero-info__slogan');
const price = document.createElement('div').classList.add('hero-info__price');
const tagbox = document.createElement('div').classList.add('hero-info__tagbox');
heroInfo.appendChild(location, slogan, price, tagbox);

// Insérer les données
// Attacher noeud DOM au document principal

class Card {
  constructor(photo, name, location, slogan, price, tagbox) {
    this.photo = photo;
    this.name = name;
    this.location = location;
    this.slogan = slogan;
    this.price = price;
    this.tagbox = tagbox;
  }
}

const photographersCard = new Card('MimiKeel', 'mimi', 'paris', 'un deux trois', 13, '#sport');

const parseJSON = JSON.parse(JSONPhotographers);
for (let i = 0; i < 6; i++) {
  console.log(parseJSON.photographers[i]);
}

// Event - clic sur tag de la barre de navigation

// Event - clic sur vignette => page profil

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
