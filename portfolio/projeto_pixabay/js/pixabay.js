
//consumo da api
const searchImages = async (text) => { //função assincrona
  const key = '29060196-a50e24d86e9b726039610eaa5';
  const url = `https://pixabay.com/api/?key=${key}&q=${text}`;
  const response = await fetch(url); //http
  return response.json();
};

//renderizando na tela

createCard = ({webformatURL, pageURL}) => {
  const card = document.createElement('div');
  card.classList.add('card-container')
  card.innerHTML = `
    <a href="${pageURL}" class= "card-image" target="_blank">
      <img src='${webformatURL}'>
    </a>
      `
  return card;
};

loadGallery = async (text) => {
  const container = document.querySelector('[data-container-gallery]')
  const {hits} = await searchImages (text); //desestruturação --- hits tras o array com as imagens disponiveis (hits aparece atraves do json)
  const cards = hits.map(createCard); //map pega um item por vez do array trazido pelo hits
  container.replaceChildren(...cards); //espalha o array de divs

};

handleKeypress = ({key, target}) => { //destruction
  if (key == 'Enter') {
      loadGallery(target.value);
  }
};

document.querySelector('[data-search-input]')
        .addEventListener('keypress', handleKeypress);