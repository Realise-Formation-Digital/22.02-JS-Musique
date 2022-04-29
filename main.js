
// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
    try {
      const response = await axios.get('https://webdev.fedorageek.org/api/musique/list');
      //console.log(response);

        let listDiv = document.getElementById('listMusic')

      for (let music of response.data){
          console.log(music)

            // crée un nouvel élément div
            var newDiv = document.createElement("div");
            // et lui donne un peu de contenu
            var newContent = document.createTextNode(music.nom);
            // ajoute le nœud texte au nouveau div créé
            newDiv.appendChild(newContent);

            // ajoute le nouvel élément créé et son contenu dans le DOM
            document.body.insertBefore(newDiv, listDiv);


            // crée un nouvel élément div
            var newDiv = document.createElement("div");
            // et lui donne un peu de contenu
            var newContent = document.createTextNode(music.album);
            // ajoute le nœud texte au nouveau div créé
            newDiv.appendChild(newContent);

            // ajoute le nouvel élément créé et son contenu dans le DOM
            document.body.insertBefore(newDiv, listDiv);


            // // crée un nouvel élément div
            // var newDiv = document.createElement("div");
            // // et lui donne un peu de contenu
            // var newContent = document.createTextNode(music.url);
            // // ajoute le nœud texte au nouveau div créé
            // newDiv.appendChild(newContent);

            // // ajoute le nouvel élément créé et son contenu dans le DOM
            // document.body.insertBefore(newDiv, listDiv);

      }




    } catch (error) {
      console.error(error);
    }
  }

  await getUser()