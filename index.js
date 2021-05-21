
// //   créer function init réponse

fetch('../data.json')
.then(response => response.json())
// .then(data => {
//   console.log(data)
// })
.then(function(myData) {
  const Dataaaaa = myData.photographers;
  console.log(Dataaaaa)
})
.catch((err) => {
  console.log(`Fetch problem: ${err.message}`)
})