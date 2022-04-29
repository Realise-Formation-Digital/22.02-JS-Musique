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
let nameB = ""
let imageB = ""
let id = ""
async function getMusique() {
  try {
    const response = await axios.get('https://webdev.fedorageek.org/api/musique/list')
    console.log(response.data)
    // console.log(response.data[0].name)
    //   insertText(response.data[0].name, response.data[0].tagline, response.data[0].image_url)
    for (const element of response.data) {
      nameB = element.nom
      id = element.id
      imageB = element.url


      liste.innerHTML += `<li>
  
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=#`+ nameB + `>
  `+ nameB + `
</button>


<div class="modal fade" id=`+ nameB + ` tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">`+ nameB + `</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <`+ id + `>
      `+ imageB + `
      </div>
      <div class="modal-footer">

        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </li>`
    }

  } catch (error) {
    console.log(error);
  }
}

await getMusique()