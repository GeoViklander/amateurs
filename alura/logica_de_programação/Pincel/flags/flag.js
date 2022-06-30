function brazilFlag () {
  const tela = document.querySelector('canvas');
  const pincel = tela.getContext('2d');
  pincel.fillStyle = 'darkgreen';
  pincel.fillRect(0,0, 600, 400);
  
  pincel.fillStyle = 'yellow';
  pincel.beginPath();
  pincel.moveTo(300,20);
  pincel.lineTo(20,200);
  pincel.lineTo(300,380);
  pincel.lineTo(580, 200)
  pincel.fill();
  
  pincel.fillStyle = 'darkblue';
  pincel.beginPath();
  pincel.arc(300,200,100, 0, 2*3.14);
  
  pincel.fill();
}

brazilFlag()