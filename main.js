let liste = document.getElementById("liste")

// (async () => {
//   try {
//      const response = await axios.get('https://api.punkapi.com/v2/beers/1')
// //   //     // console.log(response.data[0].image_url)
// //   //     // console.log(response.data[0].name)
// insertText(response.data[0].name, response.data[0].tagline, response.data[0].image_url)
// } catch (error) {
// console.log(error.response.body);
// }
//  })();

//   (async () => {
//       try {
//         const response = await axios.get('https://api.punkapi.com/v2/beers')
//       //   console.log(response)
//         // console.log(response.data[0].name)
//         //   insertText(response.data[0].name, response.data[0].tagline, response.data[0].image_url)
//         for (const element of response) {
//           console.log(data[element].name)}

//       } catch (error) {
//           console.log(error.response.body);
//       }
//     })();

//   function insertText(nameBeer, textBeer, imageBeer){
//       document.getElementById("name-beer").innerText = nameBeer
//       document.getElementById("beer-description").innerText = textBeer
//       document.getElementById("image-beer").innerHTML = imageEl
//       imageEl.innerHTML =   `<img src=${imageBeer}>
//       `

//   }

// async function getBeers() {
//   try {
//     const response = await axios.get('https://api.punkapi.com/v2/beers')
//     console.log(response)
//     // console.log(response.data[0].name)
//     //   insertText(response.data[0].name, response.data[0].tagline, response.data[0].image_url)
//     for (const element of response.data) {
//       console.log(element.name)
//       liste.innerHTML += "<li>"+element.name+"</li>"
//     }

//   } catch (error) {
//     console.log(error);
//   }
// }
let nameB = null
let imageB = null
let id = null
async function getArtiste() {
  try {
    const response = await axios.get('https://webdev.fedorageek.org/api/artistes/list')
    console.log(response.data)
    // console.log(response.data[0].name)
    //   insertText(response.data[0].name, response.data[0].tagline, response.data[0].image_url)
    for (const element of response.data) {

      nameB = element.nom
      id = element.id
      

    
     liste.innerHTML += ` <div>
     <div class="btn">
       <div class="number"><i class='fas fa-shield-alt' style='font-size:24px'></i></div>
       <div class="content">
         <link data-fancybox data-src="#" href="">
         <h2>Nom de l'artiste</h2>
         </link>
       </div>
     </div>
   </div>`
    }

  } catch (error) {
    console.log(error);
  }
}

await getMusique()