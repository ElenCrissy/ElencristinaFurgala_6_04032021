const url = 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json';
let myResponse;
fetch(url)
  .then((response) => {
    myResponse = response.json();
    console.log(myResponse);
    // appeler init(myResponse)
  })
  .catch((err) => console.log(`Fetch problem: ${err.message}`));

//   créer function init réponse