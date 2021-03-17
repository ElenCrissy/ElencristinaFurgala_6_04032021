// JSON
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

// Elements DOM
const carte = document.getElementsByClassName('carte');
const carteLien = document.getElementsByClassName('carte__lien');
const photoProfil = document.getElementsByClassName('photo-profil');
const nom = document.querySelector('.nom');
const carteInfo = document.getElementsByClassName('carte__info');
const localisation = document.getElementsByClassName('localisation');
const slogan = document.querySelector('.slogan');
const prix = document.getElementsByClassName('prix');
const tagbox = document.getElementsByClassName('tagbox');

// INDEX
// Hero photographe
// Récupérer données
// Parser les données
// Récupérer données pertinentes
// Créer éléments DOM
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

console.log(photographersCard);

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
