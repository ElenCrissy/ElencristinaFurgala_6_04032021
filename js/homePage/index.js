export default class Index {

  getData() {
    return fetch('data.json')
    .then(response => response.json())
    .then(data => {
      this.addMediaDescription(data);
      return data;
    })
    .catch(error => {
      console.log(`Fetch problem: ${error}`);
    });
  }
  
  addMediaDescription(data) {
    const medias = data.media;
    medias.forEach(media => {
      media.description = 'lorem ipsum dolor sit amet';
    });
    return data;
  }

  loadContent() {
    const dataPromise = this.getData();

    window.onload = () => {

      dataPromise.then(data => {
        const photographers = data.photographers;
        const header = document.querySelector('.header-index');
        const mainTitle = document.querySelector('.main-title');
        const sectionHomepage = document.querySelector('#section-homepage');
    
        const photographerList = new PhotographerList(sectionHomepage, photographers);
        const headerContent = new Header(header, photographerList);
        headerContent.createHeader();
        mainTitle.appendChild(document.createTextNode('Nos photographes'));
        photographerList.displayRelevantCards();
        sectionHomepage.setAttribute('tabindex', '5');
        sectionHomepage.setAttribute('aria-label', 'cartes des photographes');
      });
      
    };
  }
}


// const getData = () => {
//   return fetch('data.json')
//   .then(response => response.json())
//   .then(data => {
//     addMediaDescription(data);
//     return data;
//   })
//   .catch(error => {
//     console.log(`Fetch problem: ${error}`);
//   });
// };

// function addMediaDescription (data) {
//   const medias = data.media;
//   medias.forEach(media => {
//     media.description = 'lorem ipsum dolor sit amet';
//   });
//   return data;
// }

// const dataPromise = getData();

// window.onload = () => {
  
//   dataPromise.then(data => {
//     const photographers = data.photographers;
//     const header = document.querySelector('.header-index');
//     const mainTitle = document.querySelector('.main-title');
//     const sectionHomepage = document.querySelector('#section-homepage');

//     const photographerList = new PhotographerList(sectionHomepage, photographers);
//     const headerContent = new Header(header, photographerList);
//     headerContent.createHeader();
//     mainTitle.appendChild(document.createTextNode('Nos photographes'));
//     photographerList.displayRelevantCards();
//     sectionHomepage.setAttribute('tabindex', '5');
//     sectionHomepage.setAttribute('aria-label', 'cartes des photographes');
//   });
  
// };