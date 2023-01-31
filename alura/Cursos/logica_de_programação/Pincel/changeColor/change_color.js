
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

var color = ['blue', 'red', 'green']
var indexColor = 0; 

function drawCircle(evento) {
  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;
  pincel.fillStyle = color[indexColor];
  pincel.beginPath();
  pincel.arc(x, y, 10, 0, 2 * 3.14);
  pincel.fill();
}

tela.onclick = drawCircle;

function changeColor() {

    indexColor++;

    if(indexColor >= color.length) {
        indexColor = 0; // volta para a primeira cor
    }

    return false; 
}

tela.oncontextmenu = changeColor;
