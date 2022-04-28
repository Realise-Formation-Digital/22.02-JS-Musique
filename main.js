// async function getArtist() {
//   try {
//     const response = await axios.get('webdev.fedorageek.org/api/aritst/list');
//     console.log("response",response);

//     let listArtist = document.getElementById
//   } catch (error) {
//     console.error(error);
//   }
// }
//  getArtist()

// ...

// const artist_URL = 'webdev.fedorageek.org/api/aritst/list';
// const music_URL = 'webdev.fedorageek.org/api/music/list';

// const getTodoItems = async () => {
//   try {
//     const response = await axios.get(`${artist_URL}/todos?_limit=5`);

//     const todoItems = response.data;

//     console.log(`GET: Here's the list of todos`, todoItems);

//     return todoItems;
//   } catch (errors) {
//     console.error(errors);
//   }
// };