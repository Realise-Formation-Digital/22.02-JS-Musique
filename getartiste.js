let divArtiste = document.getElementById("li");
let divMusique = document.getElementById("card")




async function getData() {
  try {

    /**
     * Requete (GET) pour chercher les element sur l'API  
     */
     
    const artisteList = await axios.get('https://webdev.fedorageek.org/api/artistes/list');
    const musiqueList = await axios.get('https://webdev.fedorageek.org/api/musique/list');
    const styleList = await axios.get('https://webdev.fedorageek.org/api/style/list')
      

    /**
     * Boucle FOR OF pour parcourir l'ARRAY artisteList.data et afficher les ARTISTE 
     * 
     * @data  [id, nom, groupe]
     * 
     */
     for (const artist of artisteList.data)  {
     console.log(artisteList.data);

    
       divArtiste.innerHTML += `
        <li class="item">
          <input type="radio" id="one" name="basic_carousel" value="first" checked="checked"/>
          <label class="label_${artist.id}" for="one">${artist.nom}</label>
        </li>`  
    }

   

    /**
     * Boucle FOR OF pour parcourir l'ARRAY musiqueList.data et afficher les MUSIQUE
     * 
     * @data[id, nom, url]
     * 
     */
    for (const music of musiqueList.data)  {
    console.log(musiqueList.data);
      
    
    divMusique.innerHTML += `
            
              <div class="card">
               <h3 class="title">${music.nom}</h3>
                <div class="bar">
                  <div class="emptybar"></div>
                  <div class="filledbar"></div>
                  <button type="button" class="btn btn-light">Watch ${music.nom}</button>
                  <p id"style"></p>
                </div>`
    }


    
    /**
     * Boucle FOR OF pour parcourir l'ARRAY styleList.data et afficher les STYLE
     * 
     *  @data [id, nom, type]
     * 
     */
  //   for (const style of styleList.data)  {
  //    console.log(styleList.data);
      
    
  //    divMusique.innerHTML += `<p>hello</p>`
            
             
  //  }
       




  } catch (error) {
    console.log(error);
  }
}

await getData();

