async function getMusic() {
    try {
      const response = await axios.get('https://webdev.fedorageek.org/api/artistemusique/list');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
}
  
await getMusic()