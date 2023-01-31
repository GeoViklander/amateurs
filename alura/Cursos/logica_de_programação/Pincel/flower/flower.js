function drawCircle(x, y, raio, cor) {
    const tela = document.querySelector('canvas');
    const pincel = tela.getContext('2d');
    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2*3.14);
    pincel.fill();
}

drawCircle(300,200,10, 'yellow')
drawCircle(320,200,10, 'white')
drawCircle(300,220,10, 'white')
drawCircle(280,200,10, 'white')
drawCircle(300,180,10, 'white')




