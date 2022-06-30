function creeper (){
  const tela = document.querySelector('canvas');
  const pincel = tela.getContext('2d');

  pincel.fillStyle = 'darkgreen';
  pincel.fillRect(200, 50, 350, 300);

  //olhos
  pincel.fillStyle = 'black';
  pincel.fillRect(250, 100, 90, 90);
  pincel.fillRect(400, 100, 90, 90);

  //nariz
  pincel.fillRect(340, 200, 70, 100);

  //boca
  pincel.fillRect(300, 210, 40, 110);
  pincel.fillRect(400, 210, 40, 110);
}
creeper()