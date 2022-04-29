let liste = document.getElementById("liste")

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
      

    
     liste.innerHTML = `  <div class="accordion" id="liste">
     <ul>
       <li tabindex="`+id+`">
         <div>
           <div class="btn">
             <div class="number"><i class='fas fa-laptop' style='font-size:24px'></i></div>
             <div class="content">
               <a class="button" data-bs-toggle="collapse" href="#" role="button" aria-expanded="false" aria-controls="collapseExample">`+nameB+`</a>
             </div>
           </div>
         </div>
       </li>
     </ul>
   </div>`
    }

  } catch (error) {
    console.log(error);
  }
}

 getArtiste()