
// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
    try {
      const response = await axios.get('https://webdev.fedorageek.org/api/musique/list');
      //console.log(response);

        let listDiv = document.getElementById('listBeer')

      for (let beer of response.data){
          console.log(beer)

            // crée un nouvel élément div
            var newDiv = document.createElement("div");
            // et lui donne un peu de contenu
            var newContent = document.createTextNode(beer.nom);
            // ajoute le nœud texte au nouveau div créé
            newDiv.appendChild(newContent);

            // ajoute le nouvel élément créé et son contenu dans le DOM
            document.body.insertBefore(newDiv, listDiv);


      }




    } catch (error) {
      console.error(error);
    }
  }

  await getUser()