const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

function drawCircle(evento) {

  const x = evento.pageX - tela.offsetLeft;
  const y = evento.pageY - tela.offsetTop;
  var raio = 10;
  
  if (evento.shiftKey && evento.ctrlKey) {

    alert('Só aperte uma tecla por vez, por favor!');
//aumentar
} else if(evento.shiftKey) {
    raio = raio + 20;
//diminui 
} else if(evento.ctrlKey) {
    raio = raio - 10;

}
  
  pincel.fillStyle = 'red';
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * 3.14);
  pincel.fill();
}

tela.onclick = drawCircle


