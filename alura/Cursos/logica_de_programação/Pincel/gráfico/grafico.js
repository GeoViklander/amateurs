function desenhaRetangulo(x, y, largura, altura, cor) {
    const tela = document.querySelector('canvas');
    const pincel = tela.getContext('2d');

    pincel.fillStyle=cor;
    pincel.fillRect(x,y, largura, altura);
    pincel.strokeStyle='black';
    pincel.strokeRect(x,y, largura, altura);
}

function desenhaTexto(x , y, texto) {
    const tela = document.querySelector('canvas');
    const pincel = tela.getContext('2d');

    pincel.font='15px Georgia';
    pincel.fillStyle='black';
    pincel.fillText(texto, x, y);    
}

function desenhaBarra(x, y, serie, cores, texto) {

    desenhaTexto(x, y - 10, texto);

    const somaAltura = 0;
    for (const i = 0; i < serie.length; i++) {
        const altura = serie[i];
        desenhaRetangulo(x, y + somaAltura, 50, altura, cores[i]);
        somaAltura = somaAltura + altura;
    }
}

const cores = ['blue','green','yellow', 'red'];
const serie2015 = [50,25,20,5];
const serie2016 = [65,20,13,2];

desenhaBarra(50, 50, serie2015, cores, '2015');
desenhaBarra(150, 50, serie2016, cores, '2016');

//REFAZER PQ AINDA HÁ DIFICULDADE