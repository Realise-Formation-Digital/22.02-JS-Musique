
// Declaration Variables liste/nameB/imageB/id 

let liste = document.getElementById("liste")
let nameB = null
let imageB = null
let id = null

// Fonction ASYNC getMusique 

async function getMusique() {
  // Try & Catch avec Const reponse AWAIT par AXIOS lien avec API
  try {
    const response = await axios.get('https://webdev.fedorageek.org/api/musique/list')
    console.log(response.data)
    // Boucle For Reponse DATA
    for (const element of response.data) {
      // Variables DATA nameB/id/imageB
      nameB = element.nom
      id = element.id
      imageB = element.url

      // Incrementation code HTML pour AFFICHAGE 
     liste.innerHTML += ` <div class="container"><li class="container-fluid">
  
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
      <`+id+ `>
      `+imageB + `
      <div class="plyr__video-embed container" id="player">
  <iframe class="container-fluid"
    src="https://www.youtube.com/embed/H3DGpINHX5Q"
    allowfullscreen
    allowtransparency
    allow="autoplay"
  ></iframe>
</div>
      </div>
      <div class="modal-footer">

        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </li></div>`
    }

  }catch (error){
    console.log(error);
  }
}
// AFFICHAGE Reponse Server
await getMusique()