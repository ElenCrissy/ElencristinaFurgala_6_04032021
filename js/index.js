// function fetchData() {
//   fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json')
// }

// fetchData();
// const fetchData = () => {
//   const source = '../data.json';
//   fetch(source)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// };

// fetchData();

// const myInit = { method: 'GET',
//   mode: 'cors',
//   cache: 'default' };

// fetch('../data.json', myInit)
// .then((response) => response.json())
// .catch((err) => console.log(`Fetch problem: ${err.message}`));

// fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json')
//   .then((response) => response.json())
//   .catch((err) => console.log(`Fetch problem: ${err.message}`));

const jsonData = `{"photographers": [
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
      "name": "Nabeel Brandford",
      "id": 527,
      "city": "Mexico City",
      "country": "Mexico",
      "tags": ["travel", "portrait"],
      "tagline": "Toujours aller de l'avant",
      "price": 350,
      "portrait": "NabeelBrandford.jpg"
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
  ],
  "media": [
    {
      "id": 342550,
      "photographerId": 82,
      "image": "Fashion_Yellow_Beach.jpg",
      "tags": ["fashion"],
      "likes": 62,
      "date": "2011-12-08",
      "price": 55
    },
    {
      "id": 8520927,
      "photographerId": 82,
      "image": "Fashion_Urban_Jungle.jpg",
      "tags": ["fashion"],
      "likes": 11,
      "date": "2011-11-06",
      "price": 55
    },
    {
      "id": 9025895,
      "photographerId": 82,
      "image": "Fashion_Pattern_on_Pattern.jpg",
      "tags": ["fashion"],
      "likes": 72,
      "date": "2013-08-12",
      "price": 55
    },
    {
      "id": 9275938,
      "photographerId": 82,
      "image": "Event-_eddingGazebo.jpg",
      "tags": ["events"],
      "likes": 69,
      "date": "2018-02-22",
      "price": 55
    },
    {
      "id": 2053494,
      "photographerId": 82,
      "image": "Event_Sparklers.jpg",
      "tags": ["events"],
      "likes": 2,
      "date": "2020-05-25",
      "price": 55
    },
    {
      "id": 7324238,
      "photographerId": 82,
      "image": "Event_18thAnniversary.jpg",
      "tags": ["events"],
      "likes": 33,
      "date": "2019-06-12",
      "price": 55
    },
    {
      "id": 8328953,
      "photographerId": 82,
      "video": "Art_Wooden_Horse_Sculpture.mp4",
      "tags": ["art"],
      "likes": 24,
      "date": "2011-12-08",
      "price": 100
    },
    {
      "id": 7502053,
      "photographerId": 82,
      "image": "Art_Triangle_Man.jpg",
      "tags": ["art"],
      "likes": 88,
      "date": "2007-05-07",
      "price": 55
    },
    {
      "id": 8523492,
      "photographerId": 82,
      "image": "Art_Purple_light.jpg",
      "tags": ["art"],
      "likes": 24,
      "date": "2018-05-05",
      "price": 55
    },
    {
      "id": 75902334,
      "photographerId": 82,
      "image": "Art_Mine.jpg",
      "tags": ["art"],
      "likes": 75,
      "date": "2019-11-25",
      "price": 55
    },
  
    {
      "id": 73852953,
      "photographerId": 925,
      "image": "Sport_2000_with_8.jpg",
      "tags": ["sport"],
      "likes": 52,
      "date": "2013-02-30",
      "price": 70
    },
    {
      "id": 92758372,
      "photographerId": 925,
      "image": "Fashion_Wings.jpg",
      "tags": ["fashion"],
      "likes": 58,
      "date": "2018-07-17",
      "price": 70
    },
    {
      "id": 32958383,
      "photographerId": 925,
      "image": "Fashion_Melody_Red_on_Stripes.jpg",
      "tags": ["fashion"],
      "likes": 11,
      "date": "2019-08-12",
      "price": 70
    },
    {
      "id": 928587383,
      "photographerId": 925,
      "image": "Event_VentureConference.jpg",
      "tags": ["events"],
      "likes": 2,
      "date": "2019-01-02",
      "price": 70
    },
    {
      "id": 725639493,
      "photographerId": 925,
      "image": "Event_ProductPitchjpg",
      "tags": ["events"],
      "likes": 3,
      "date": "2019-05-20",
      "price": 70
    },
    {
      "id": 23394384,
      "photographerId": 925,
      "image": "Event_KeyboardCheck.jpg",
      "tags": ["events"],
      "likes": 52,
      "date": "2019-07-18",
      "price": 70
    },
    {
      "id": 87367293,
      "photographerId": 925,
      "image": "Event_Emcee.jpg",
      "tags": ["events"],
      "likes": 23,
      "date": "2018-02-22",
      "price": 70
    },
    {
      "id": 593834784,
      "photographerId": 925,
      "image": "Animals_Majesty.jpg",
      "tags": ["animals"],
      "likes": 52,
      "date": "2017-03-13",
      "price": 70
    },
    {
      "id": 83958935,
      "photographerId": 925,
      "video": "Animals_Puppiness.mp4",
      "tags": ["animals"],
      "likes": 52,
      "date": "2016-06-12",
      "price": 70
    },
  
    {
      "id": 394583434,
      "photographerId": 527,
      "video": "Travel_Rock_Mountains.mp4",
      "tags": ["travel"],
      "likes": 23,
      "date": "2017-03-18",
      "price": 45
    },
    {
      "id": 343423425,
      "photographerId": 527,
      "image": "Travel_Outdoor_Baths.jpg",
      "tags": ["travel"],
      "likes": 101,
      "date": "2017-04-03",
      "price": 45
    },
    {
      "id": 73434243,
      "photographerId": 527,
      "image": "Travel_Road_into_Hill.jpg",
      "tags": ["travel"],
      "likes": 99,
      "date": "2018-04-30",
      "price": 45
    },
    {
      "id": 23425523,
      "photographerId": 527,
      "image": "Travel_Bridge_into_Forest.jpg",
      "tags": ["travel"],
      "likes": 34,
      "date": "2016-04-05",
      "price": 45
    },
    {
      "id": 23134513,
      "photographerId": 527,
      "image": "Travel_Boat_Wanderer.jpg",
      "tags": ["travel"],
      "likes": 23,
      "date": "2017-03-18",
      "price": 45
    },
    {
      "id": 92352352,
      "photographerId": 527,
      "image": "Portrait_Sunkissed.jpg",
      "tags": ["portrait"],
      "likes": 66,
      "date": "2018-05-24",
      "price": 45
    },
    {
      "id": 34513453,
      "photographerId": 527,
      "image": "Portrait_Shaw.jpg",
      "tags": ["portait"],
      "likes": 52,
      "date": "2017-04-21",
      "price": 45
    },
    {
      "id": 23523533,
      "photographerId": 527,
      "image": "Portrait_Alexandra.jpg",
      "tags": ["portait"],
      "likes": 95,
      "date": "2018-11-02",
      "price": 45
    },
    {
      "id": 525834234,
      "photographerId": 527,
      "image": "Portrait_AfternoonBreak.jpg",
      "tags": ["portait"],
      "likes": 25,
      "date": "2019-01-02",
      "price": 45
    },
  
    {
      "id": 623534343,
      "photographerId": 243,
      "image": "Travel_Lonesome.jpg",
      "tags": ["travel"],
      "likes": 88,
      "date": "2019-02-03",
      "price": 45
    },
    {
      "id": 625025343,
      "photographerId": 243,
      "image": "Travel_HillsideColor.jpg",
      "tags": ["travel"],
      "likes": 85,
      "date": "2019-04-03",
      "price": 45
    },
    {
      "id": 2525345343,
      "photographerId": 243,
      "image": "Portrait_Wednesday.jpg",
      "tags": ["portait"],
      "likes": 34,
      "date": "2019-04-07",
      "price": 45
    },
    {
      "id": 2523434634,
      "photographerId": 243,
      "image": "Portrait_Nora.jpg",
      "tags": ["portait"],
      "likes": 63,
      "date": "2019-04-07",
      "price": 45
    },
    {
      "id": 398847109,
      "photographerId": 243,
      "image": "Portrait_Background.jpg",
      "tags": ["portait"],
      "likes": 55,
      "date": "2019-06-20",
      "price": 45
    },
    {
      "id": 2534342,
      "photographerId": 243,
      "image": "Event_SeasideWedding.jpg",
      "tags": ["events"],
      "likes": 25,
      "date": "2019-06-21",
      "price": 45
    },
    {
      "id": 65235234,
      "photographerId": 243,
      "image": "Event_PintoWedding.jpg",
      "tags": ["events"],
      "likes": 52,
      "date": "2019-06-25",
      "price": 45
    },
    {
      "id": 23523434,
      "photographerId": 243,
      "image": "Event_BenevidesWedding.jpg",
      "tags": ["events"],
      "likes": 77,
      "date": "2019-06-28",
      "price": 45
    },
    {
      "id": 5234343,
      "photographerId": 243,
      "video": "Animals_Wild_Horses_in_the_mountains.mp4",
      "tags": ["animals"],
      "likes": 142,
      "date": "2019-08-23",
      "price": 60
    },
    {
      "id": 95234343,
      "photographerId": 243,
      "image": "Animals_Rainbow.jpg.jpg",
      "tags": ["animals"],
      "likes": 59,
      "date": "2019-07-02",
      "price": 60
    },
  
    {
      "id": 52343416,
      "photographerId": 195,
      "image": "Travel_Tower.jpg",
      "tags": ["travel"],
      "likes": 25,
      "date": "2019-04-03",
      "price": 60
    },
    {
      "id": 2523434,
      "photographerId": 195,
      "image": "Travel_SunsetonCanals.jpg",
      "tags": ["travel"],
      "likes": 53,
      "date": "2019-05-06",
      "price": 60
    },
    {
      "id": 95293534,
      "photographerId": 195,
      "image": "Travel_OpenMountain.jpg",
      "tags": ["travel"],
      "likes": 33,
      "date": "2019-05-12",
      "price": 60
    },
    {
      "id": 356234343,
      "photographerId": 195,
      "image": "Travel_Bike_and_Stair.jpg",
      "tags": ["travel"],
      "likes": 53,
      "date": "2019-06-20",
      "price": 60
    },
    {
      "id": 235234343,
      "photographerId": 195,
      "image": "Travel_Adventure_Door.jpg",
      "tags": ["travel"],
      "likes": 63,
      "date": "2019-06-26",
      "price": 60
    },
    {
      "id": 6234234343,
      "photographerId": 195,
      "image": "Architecture_Contrast.jpg",
      "tags": ["architecture"],
      "likes": 52,
      "date": "2019-06-30",
      "price": 60
    },
    {
      "id": 6525666253,
      "photographerId": 195,
      "image": "Architecture_On_a_hill.jpg",
      "tags": ["architecture"],
      "likes": 63,
      "date": "2019-07-20",
      "price": 60
    },
    {
      "id": 98252523433,
      "photographerId": 195,
      "image": "Architecture_Dome.jpg",
      "tags": ["architecture"],
      "likes": 88,
      "date": "2020-01-05",
      "price": 60
    },
    {
      "id": 9259398453,
      "photographerId": 195,
      "video": "Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4",
      "tags": ["architecture"],
      "likes": 57,
      "date": "2020-01-20",
      "price": 65
    },
    {
      "id": 3523523534,
      "photographerId": 195,
      "image": "Architecture_Corner_Room.jpg",
      "tags": ["architecture"],
      "likes": 54,
      "date": "2020-05-05",
      "price": 60
    },
  
    {
      "id": 952343423,
      "photographerId": 930,
      "video": "Sport_Tricks_in_the_air.mp4",
      "tags": ["sport"],
      "likes": 150,
      "date": "2018-02-30",
      "price": 70
    },
    {
      "id": 235234343,
      "photographerId": 930,
      "image": "Sport_Next_Hold.jpg",
      "tags": ["sport"],
      "likes": 101,
      "date": "2018-03-05",
      "price": 65
    },
    {
      "id": 235343222,
      "photographerId": 930,
      "image": "sport_water_tunnel.jpg",
      "tags": ["sport"],
      "likes": 103,
      "date": "2018-03-10",
      "price": 70
    },
    {
      "id": 7775342343,
      "photographerId": 930,
      "image": "Sport_Sky_Cross.jpg",
      "tags": ["sport"],
      "likes": 77,
      "date": "2018-04-16",
      "price": 50
    },
    {
      "id": 9253445784,
      "photographerId": 930,
      "image": "Sport_Race_End.jpg",
      "tags": ["sport"],
      "likes": 88,
      "date": "2018-04-22",
      "price": 65
    },
    {
      "id": 22299394,
      "photographerId": 930,
      "image": "Sport_Jump.jpg",
      "tags": ["sport"],
      "likes": 95,
      "date": "2018-04-27",
      "price": 70
    },
    {
      "id": 3452342633,
      "photographerId": 930,
      "image": "Architecture_White_Light.jpg",
      "tags": ["architecture"],
      "likes": 52,
      "date": "2018-05-03",
      "price": 75
    },
    {
      "id": 939234243,
      "photographerId": 930,
      "image": "Architecture_Water_on_Modern.jpg",
      "tags": ["architecture"],
      "likes": 55,
      "date": "2018-05-10",
      "price": 72
    },
    {
      "id": 222959233,
      "photographerId": 930,
      "image": "Architecture_Horseshoe.jpg",
      "tags": ["architecture"],
      "likes": 85,
      "date": "2018-05-15",
      "price": 71
    },
    {
      "id": 965933434,
      "photographerId": 930,
      "image": "Architecture_Cross_Bar.jpg",
      "tags": ["architecture"],
      "likes": 66,
      "date": "2018-05-20",
      "price": 58
    },
    {
      "id": 777723343,
      "photographerId": 930,
      "image": "Architecture_Connected_Curves.jpg",
      "tags": ["architecture"],
      "likes": 79,
      "date": "2018-05-21",
      "price": 80
    }
  ]
  }`;
const parsedData = JSON.parse(jsonData);
const { photographers } = parsedData;
const navTags = document.querySelectorAll('.tag');

// Bouton de redirection vers main
// function createGoToMain() {
//   const body = document.querySelector('body');
//   const goToMain = document.createElement('a');
//   const goToMainContent = document.createTextNode('Passer au contenu');
//   goToMain.classList.add('go_to_main');
//   goToMain.setAttribute('href', '#index_main');

//   goToMain.appendChild(goToMainContent);
//   body.appendChild(goToMain);
//   return goToMain;
// }

// Renvoie les photographes pertinents
function getRelevantPhotographers(filterTag) {
  if (filterTag === undefined) {
    return photographers;
  }
  const filteredPhotographers = photographers.filter((photographer) => photographer.tags.includes(filterTag));
  return filteredPhotographers;
}

// Affiche cartes pertinentes depuis tag contenu dans cartes
function displayRelevantCardsFromCardTag(tagSelected) {
  const sectionHomePage = document.querySelector('#section-homepage');
  const relevantPhotographers = getRelevantPhotographers(tagSelected);
  while (sectionHomePage.firstChild) {
    sectionHomePage.removeChild(sectionHomePage.firstChild);
  }
  relevantPhotographers.forEach((relevantPhotographer) => {
    const card = createCard(relevantPhotographer);
    sectionHomePage.appendChild(card);
  });
}

// Crée carte photographe
function createCard(photographer) {
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
  location.classList.add('location');
  tagline.classList.add('tagline');
  price.classList.add('price');
  tagbox.classList.add('tagbox');

  cardLink.setAttribute('href', `./photographer-page.html?id=${id}`);
  cardLink.setAttribute('aria-label', `${photographer.name}`);

  portrait.src = `images/Sample_Photos/Photographers_ID_Photos/${photographer.portrait}`;
  cardH2.appendChild(document.createTextNode(photographer.name));
  location.appendChild(document.createTextNode(`${photographer.city}, ${photographer.country}`));
  tagline.appendChild(document.createTextNode(photographer.tagline));
  price.appendChild(document.createTextNode(`${photographer.price}€/jour`));

  card.appendChild(cardLink);
  cardLink.append(portrait, cardH2);
  card.appendChild(cardInfo);

  // Je crée les tags
  const photographerTags = photographer.tags;
  photographerTags.forEach((photographerTag) => {
    const tag = document.createElement('div');
    tag.classList.add('tag');
    const tagContent = document.createTextNode(`#${photographerTag}`);
    tag.appendChild(tagContent);
    tagbox.appendChild(tag);

    // J'indique le contenu du tag pour les lecteurs d'écran
    const spanCard = document.createElement('span');
    const spanCardContent = document.createTextNode(`${photographerTag}`);
    spanCard.classList.add('sr-only');
    spanCard.appendChild(spanCardContent);
    tag.appendChild(spanCard);
  });

  cardInfo.append(location, tagline, price, tagbox);

  const cardTags = card.querySelectorAll('.tag');
  cardTags.forEach((cardTag) => {
    cardTag.addEventListener('click', () => {
      cardTags.forEach((otherCardTags) => otherCardTags.classList.remove('active'));
      cardTag.classList.add('active');
      const spandiv = cardTag.querySelector('span');
      const spanText = spandiv.innerText;
      displayRelevantCardsFromCardTag(spanText);
    });
  });

  return card;
}

// Affiche cartes pertinentes
function displayRelevantCards(selectedTag) {
  const sectionHomePage = document.querySelector('#section-homepage');
  const relevantPhotographers = getRelevantPhotographers(selectedTag);
  // Suppression des cartes présentes
  while (sectionHomePage.firstChild) {
    sectionHomePage.removeChild(sectionHomePage.firstChild);
  }
  relevantPhotographers.forEach((relevantPhotographer) => {
    const card = createCard(relevantPhotographer);
    sectionHomePage.appendChild(card);
  });
}

// Interaction barre de navigation
navTags.forEach((navTag) => {
  // Je veux récupérer le contenu du navTag
  const navTagText = navTag.innerText;
  // Je veux récupérer le contenu à partir de l'index 1
  const navTagWord = navTagText.slice(1);
  // J'indique le contenu du tag pour les lecteurs d'écran
  const span = document.createElement('span');
  const spanContent = document.createTextNode(`${navTagWord}`);
  span.classList.add('sr-only');
  span.appendChild(spanContent);
  navTag.appendChild(span);
  // Au clic sur un navTag, je lui ajoute une classe "active" et que je retire la classe
  // "active" des autres navTag
  navTag.addEventListener('click', () => {
    navTags.forEach((otherNavTags) => otherNavTags.classList.remove('active'));
    navTag.classList.add('active');
    // J'affiche les cartes pertinentes
    displayRelevantCards(navTagWord);
  });
});

window.onload = () => {
  displayRelevantCards();
};