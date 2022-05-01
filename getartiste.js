let divArtiste = document.getElementById("listArtiste");
let divMusique = document.createElement("div");


let artiste = null;
let musique = null;
let id = null;

async function getArtiste() {
  try {
    const artisteList = await axios.get('https://webdev.fedorageek.org/api/artistes/list')
    const musiqueList = await axios.get('https://webdev.fedorageek.org/api/musique/list')
    //  console.log(response.data)
     for (const listArt of artisteList.data)  {
     console.log(artisteList.data);

       artiste = listArt.nom
       id = listArt.id
      

    
       divArtiste.innerHTML += `
        <li class="item">
          <input type="radio" id="`+id+`" name="basic_carousel" value="first" checked="checked"/>
          <label class="label_one" for="one">`+artiste+`</label>
          <div class="content content_one">
            <span class="picto"></span>
            <p>fourth</p>

            <div class="container">
              <div class="card">
                <h3 class="title">Card 1</h3>
                <div class="bar">
                  <div class="emptybar"></div>
                  <div class="filledbar"></div>
                </div>
              </div>
          </div>
        </li>   
  `
    }

    for (const listMus of musiqueList.data) {
      console.log(musiqueList.data);

       musique = listMus.nom
       id = listMus.id
      

    
       divMusique.innerHTML += `
       <div class="content content_one">
       <span class="picto"></span>
       <p></p>

       <div class="container">
         <div class="card">
           <h3 class="title">Card 1</h3>
           <div class="bar">
             <div class="emptybar"></div>
             <div class="filledbar"></div>
           </div>
         </div>
         <div class="card">
           <h3 class="title">Card 1</h3>
           <div class="bar">
             <div class="emptybar"></div>
             <div class="filledbar"></div>
           </div>
         </div>
       </div>
     </div>  
  `
    }

  } catch (error) {
    console.log(error);
  }
}

await getArtiste();

