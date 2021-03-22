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

var photographers = parseJSONPhotographers.photographers;

for (let i = 0; i < photographers.length; i += 1) {
  var portraitData = photographers[i].portrait;
  var nameData = photographers[i].name;
  var locationData = `${photographers[i].city}, ${photographers[i].country}`;
  var taglineData = photographers[i].tagline;
  var priceData = photographers[i].price + '€/jour';
  var tagsData = photographers[i].tags;
}

// Créer éléments DOM
var section = document.querySelector('section');
var hero = document.createElement('div');
hero.classList.add('hero');

var heroLink = document.createElement('a'); // aria-label
heroLink.classList.add('hero-link');
var portrait = document.createElement('img');
portrait.classList.add('portrait');
var heroH2 = document.createElement('h2');
heroH2.classList.add('name');

var heroInfo = document.createElement('div');
heroInfo.classList.add('hero-info');
var location1 = document.createElement('div');
location1.classList.add('hero-info__location');
var slogan = document.createElement('div');
slogan.classList.add('hero-info__slogan');
var price = document.createElement('div');
price.classList.add('hero-info__price');
var tagbox = document.createElement('div');
tagbox.classList.add('hero-info__tagbox');
var tag = document.createElement('div');
tag.classList.add('tag');

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

function createHero(parseJSONPhotographers) {
  for (let i = 0; i < photographers.length; i += 1) {
    heroH2.innerHTML = nameData;
    location1.innerHTML = locationData;
    slogan.innerHTML = taglineData;
    price.innerHTML = priceData;
    tagbox.innerHTML = tagsData;
  }
  console.log(heroH2, location1);
}

document.addEventListener('DOMContentLoaded', createHero);

// Attacher noeuds DOM au document principal
hero.appendChild(heroLink);
heroLink.append(portrait, heroH2);
hero.appendChild(heroInfo);
heroInfo.append(location1, slogan, price, tagbox);
tagbox.appendChild(tag);

section.appendChild(hero);

// Event - clic sur tag de la barre de navigation
// si un tag est actif/cliqué
// alors le reste display none
function tagFilter() {
  if()
}

// Event - clic sur vignette => page profil
function pageProfile() {
  window.location = 'photographer-page.html';
}
heroLink.addEventListener('click', pageProfile);

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
