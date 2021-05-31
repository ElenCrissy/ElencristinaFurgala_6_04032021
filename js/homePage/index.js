fetch('../data.json')
.then(response => response.json())
.then(data => {
  addMediaDescription(data);
  const photographers = data.photographers;
  
  const header = document.querySelector('.header-index');
  const mainTitle = document.querySelector('.main-title');
  const sectionHomepage = document.querySelector('#section-homepage');

  window.onload = () => {
    const photographerList = new PhotographerList(sectionHomepage, photographers);
    const headerContent = new Header(header, photographerList);
    headerContent.createHeader();
    mainTitle.appendChild(document.createTextNode('Nos photographes'));
    photographerList.displayRelevantCards();
  };
})
.catch(err => {
  console.log(`Fetch problem: ${err.message}`);
});

function addMediaDescription (data) {
  const medias = data.media;
  medias.forEach(media => {
    media.description = 'lorem ipsum dolor sit amet';
  });
  return data;
}