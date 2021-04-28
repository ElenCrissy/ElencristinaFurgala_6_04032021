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
const mediaArr = parsedData.media;
const urlParams = new URLSearchParams(window.location.search);
const paramId = urlParams.get('id');
const photographerPageMain = document.querySelector('.photographer-page_main');  

const relevantPhotographer = photographers.find(photographer => {
const photographerIdString = photographer.id.toString();
return photographerIdString === paramId;
});

function createContactButton() {
  const contactButton = document.createElement('input');
  contactButton.type = 'button';
  contactButton.value = 'Contactez-moi';
  contactButton.classList.add('btn-contact');
  // contactButton.addEventListener('click', displayForm);
    // const modal = document.querySelector('.background');
    // modal.style.display = 'block';
  // });
  return contactButton;
}

function createHero(photographer) {
  // Je crée les éléments DOM
  const hero = document.createElement('div');
  const heroInfo = document.createElement('div');
  const heroButton = document.createElement('div');
  const heroImage = document.createElement('div');
  const portrait = document.createElement('img');
  const name = document.createElement('h1');
  const location = document.createElement('div');
  const tagline = document.createElement('div');
  const tagbox = document.createElement('div');
  const button = createContactButton();

  hero.classList.add('hero');
  heroInfo.classList.add('info');
  heroButton.classList.add('hero-button');
  heroImage.classList.add('hero-image');
  portrait.classList.add('portrait');
  name.classList.add('name');
  location.classList.add('location');
  tagline.classList.add('tagline');
  tagbox.classList.add('tagbox');

  // J'insère les données
  portrait.src = `images/Sample_Photos/Photographers_ID_Photos/${photographer.portrait}`;
  name.appendChild(document.createTextNode(photographer.name));
  location.appendChild(document.createTextNode(`${photographer.city}, ${photographer.country}`));
  tagline.appendChild(document.createTextNode(photographer.tagline));

  // Je crée les tags
  const photographerTags = photographer.tags;
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
  heroButton.appendChild(button);
  heroImage.appendChild(portrait);
  hero.append(heroInfo, heroButton, heroImage);
  photographerPageMain.appendChild(hero);
  return button;
}

function getRelevantMedias(urlId) {
  const relevantMedias = mediaArr.filter(media => media.photographerId.toString() === urlId);
  return relevantMedias;
}

const createDropdownMenu = () => {
  const mediaSelection = document.createElement('div');
  const orderBy = document.createElement('label');
  const dropdown = document.createElement('div');
  const dropdownTrigger = document.createElement('div');
  const dropdownToggle = document.createElement('button');
  const arrow = document.createElement('div');
  const dropdownMenu = document.createElement('ul');
  const optionPopularity = document.createElement('li');
  const optionDate = document.createElement('li');
  const optionTitle = document.createElement('li');

  mediaSelection.classList.add('media-selection');
  orderBy.classList.add('orderby');
  dropdown.classList.add('dropdown');
  dropdownTrigger.classList.add('dropdown-trigger');
  dropdownToggle.classList.add('dropdown-toggle');
  arrow.classList.add('arrow');
  dropdownMenu.classList.add('dropdown-menu');
  optionPopularity.classList.add('option');
  optionDate.classList.add('option');
  optionTitle.classList.add('option');

  orderBy.appendChild(document.createTextNode('Trier par'));
  optionPopularity.appendChild(document.createTextNode('Popularité'));
  optionDate.appendChild(document.createTextNode('Date'));
  optionTitle.appendChild(document.createTextNode('Titre'));

  dropdownTrigger.append(dropdownToggle, arrow);
  dropdownMenu.append(optionPopularity, optionDate, optionTitle);
  dropdown.append(dropdownTrigger,dropdownMenu);
  mediaSelection.append(orderBy, dropdown);
  photographerPageMain.appendChild(mediaSelection);
  
  dropdownToggle.textContent = "Popularité";

  displayDropDownMenu();
}

function displayDropDownMenu() {
  const dropdownTrigger = document.querySelector('.dropdown-trigger');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const arrow = document.querySelector('.arrow');
  const options = document.querySelectorAll('.option');
  
  const openDropdownMenu = () => {
    const menuDropDown = document.querySelector('.dropdown-menu');
    arrow.classList.toggle('active');
    if (menuDropDown.style.display === "none") {
      menuDropDown.style.display = "block";
    } else {
      menuDropDown.style.display = "none";
    }
    options.forEach(option => {
      if (dropdownToggle.textContent === option.textContent) {
        option.style.display = "none";
      }
    });
  }
  dropdownTrigger.addEventListener('mouseover', openDropdownMenu);  

  options.forEach(option => {
    option.addEventListener('click', () => {
      dropdownToggle.textContent = option.textContent;
      options.forEach(otherOptions => otherOptions.style.display = 'block');
      option.style.display = 'none';
      let toggleContent = dropdownToggle.textContent;
      const relevantMedias = getRelevantMedias(paramId);
      sortRelevantMedias(toggleContent, relevantMedias);
      displayRelevantMediaCardsAfterSort(relevantMedias);
    })
  });
};


function sortRelevantMedias(dropdownContent, relevantMediasArray) {
    if (dropdownContent === undefined) {
    return relevantMediasArray;
  } else if (dropdownContent === 'Popularité') {
    return relevantMediasArray.sort(function (a, b) {
      return b.likes - a.likes;
    });
  } else if (dropdownContent === 'Date') {
    return relevantMediasArray.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  } else if (dropdownContent === 'Titre') {
    return relevantMediasArray.sort(function (a, b) {
      const titreA = a.image || a.video;
      const titreB = b.image || b.video;
      if(titreA < titreB) {
        return -1;
      }
      if(titreA > titreB) {
        return 1;
      }
      return 0; 
    })
  }
}

function displayRelevantMediaCardsAfterSort(sortedMedias){
  const gallery = document.querySelector('.gallery');
  const mediaGalleryAfterSort = document.createElement('div');
  mediaGalleryAfterSort.classList.add('media-gallery');
  const mediaCards = sortedMedias.map(createMediaCard);
  while (gallery.firstChild) {
    gallery.removeChild(gallery.firstChild);
  }
  mediaCards.forEach(mediaCard => mediaGalleryAfterSort.appendChild(mediaCard));
  gallery.appendChild(mediaGalleryAfterSort);
  console.log(gallery.firstChild);
}

class MediaFactory {
  static createMedia(mediaData) {
    if (mediaData.hasOwnProperty('image')) return new Image(mediaData.image, mediaData.photographerId, mediaData.price, mediaData.likes);
    else if (mediaData.hasOwnProperty('video')) return new Video(mediaData.video, mediaData.photographerId, mediaData.price, mediaData.likes);
  };
}

class Video {
  constructor(fileName, photographerId, price, likes) {
    this.fileName = fileName;
    this.photographerId = photographerId;
    this.price = price;
    this.likes = likes;
    this.titleContent = this.fileName.slice(0, this.fileName.length-4).replaceAll('_', ' ');
  }

  createDom() {
    const cardVideo = document.createElement('div');
    const mediaVideo = document.createElement('video');
    const mediaVideoSrc = document.createElement('source');
    const mediaCardInfo = document.createElement('div');
    const mediaCardInfoText = document.createElement('div');
    const mediaCardInfoHeart = document.createElement('div');
    const title = document.createElement('div');
    const price = document.createElement('div');
    
    mediaVideo.classList.add('media-video');
    mediaCardInfo.classList.add('media-card_info');
    mediaCardInfoText.classList.add('media-card_info__text');
    mediaCardInfoHeart.classList.add('media-card_info__heart');
    title.classList.add('title');
    price.classList.add('price');

    title.appendChild(document.createTextNode(`${this.titleContent}`));
    price.appendChild(document.createTextNode(`${this.price}€`));
    //HELP
    mediaVideoSrc.src = `images/Sample_Photos/${this.photographerId}/${this.fileName}`;
    mediaCardInfoHeart.innerHTML = `${this.likes} <i class="fas fa-heart"></i>`;
    mediaCardInfoHeart.addEventListener('click', () => {
      mediaCardInfoHeart.innerHTML = `${this.likes + 1} <i class="fas fa-heart"></i>`;
    })

    mediaVideo.appendChild(mediaVideoSrc);
    mediaCardInfo.appendChild(mediaCardInfoText);
    mediaCardInfoText.append(title, price);
    mediaCardInfo.appendChild(mediaCardInfoHeart);

    cardVideo.append(mediaVideo, mediaCardInfo);

    return cardVideo;
  };
}

class Image {
  constructor(fileName, photographerId, price, likes) {
    this.fileName = fileName;
    this.photographerId = photographerId;
    this.price = price;
    this.likes = likes;
    this.titleContent = this.fileName.slice(0, this.fileName.length-4).replaceAll('_', ' ');
  }

  createDom() {
    const cardImage = document.createElement('div');
    const mediaImage = document.createElement('img');
    const mediaCardInfo = document.createElement('div');
    const mediaCardInfoText = document.createElement('div');
    const mediaCardInfoHeart = document.createElement('div');
    const title = document.createElement('div');
    const price = document.createElement('div');

    mediaCardInfo.classList.add('media-card_info');
    mediaCardInfoText.classList.add('media-card_info__text');
    mediaCardInfoHeart.classList.add('media-card_info__heart');
    title.classList.add('title');
    price.classList.add('price');

    title.appendChild(document.createTextNode(`${this.titleContent}`));
    price.appendChild(document.createTextNode(`${this.price}€`));
    mediaImage.src = `images/Sample_Photos/${this.photographerId}/${this.fileName}`;
    mediaCardInfoHeart.innerHTML = `${this.likes} <i class="fas fa-heart"></i>`;
    mediaCardInfoHeart.addEventListener('click', () => {
      mediaCardInfoHeart.innerHTML = `${this.likes + 1} <i class="fas fa-heart"></i>`;
    })

    mediaCardInfo.appendChild(mediaCardInfoText);
    mediaCardInfoText.append(title, price);
    mediaCardInfo.appendChild(mediaCardInfoHeart);

    cardImage.append(mediaImage, mediaCardInfo);

    return cardImage;
  }
}

function createMediaCard(mediaData) {
  const media = MediaFactory.createMedia(mediaData).createDom();
  media.classList.add('media-card');
  return media;
}

function createGallery() {
  const gallery = document.createElement('div');
  gallery.classList.add('gallery');
  photographerPageMain.appendChild(gallery);
  displayMediaGallery();
}

function displayMediaGallery(sortedMediasArray) {
  const mediaGallery = document.createElement('div');
  const gallery = document.querySelector('.gallery');
  mediaGallery.classList.add('media-gallery');
  gallery.appendChild(mediaGallery);
  if (sortedMediasArray === undefined) {
    const relevantMedias = getRelevantMedias(paramId);
    const mediaCards = relevantMedias.map(createMediaCard);
    mediaCards.forEach(mediaCard => mediaGallery.appendChild(mediaCard));
  } else {
    while (gallery.firstChild) {
      gallery.removeChild(gallery.firstChild);
    }
    const mediaCards = sortedMediasArray.map(createMediaCard);
    mediaCards.forEach(mediaCard => mediaGallery.appendChild(mediaCard));
  }
  const mediaCard = document.querySelectorAll('.media-card');
  return mediaCard;
}

window.onload = () => {
  createHero(relevantPhotographer);
  createDropdownMenu();
  createGallery();
};