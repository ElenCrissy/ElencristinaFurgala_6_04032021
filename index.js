const url = 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json';
// let myResponse;
// fetch(url, {
//   mode: "no-cors",
// })
//   .then((response) => myResponse = response.json())
//   .catch((err) => console.log(`Fetch problem: ${err.message}`))
// //   créer function init réponse


// const myInit = { method: 'GET',
//   mode: 'no-cors',
//   cache: 'default',
//   headers : {
//     'Content-Type': 'application/json'
//   },
// };

fetch('../data.json')
.then(response => response.json())
.then(data => {
  console.log(data)
})
.catch((err) => {
  console.log(`Fetch problem: ${err.message}`)
})
