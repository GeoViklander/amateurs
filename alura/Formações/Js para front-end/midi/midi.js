
function tocaSom (idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

function buttons () {
  const $buttons = document.querySelectorAll('.tecla');

  for (let index = 0; index < $buttons.length; index++) {
  
    const tecla = $buttons[index];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; 
  
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
  }
}

buttons()