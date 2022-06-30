console.log (" === BLOG.JS ====");

//var char = "valor"; --> variavel armazena um unico valor
//var char = ["valor", "valor"]; --> variavel armazena varios valores

var fotos = [ "foto1.jpg", "foto2.jpeg","foto3.jpg", "foto4.png", "foto5.jpeg"];
var textos = ["Slogan 1", "Slogan 2", "Slogan 3", "Slogan 4", "Slogan 5"];

var posicao = 0;
function proxima() {
  if(posicao == fotos.length-1) {
    posicao = 0;
  } else {
    posicao++;
  }
  return posicao;
}



function atualizar(pos) {
  document.querySelector(".highlight__image").src = "img/" + fotos[pos];
  document.querySelector(".highlight__title").textContent = textos[pos];
  document.querySelectorAll(".highlight__bullets .activer")[pos].classList.remove("active");
  document.querySelectorAll(".highlight__bullets a")[pos].classList.add("active");
  
}

//rehgistra função de tempos em tempos
var controle = setInterval(function rotacionarDestaque() { 
  atualizar(proxima()); 
}, 3000);

//mapeando um comportamento do usuario
document.querySelector(".highlight__bullets a").onclick = function trocaDestaque(event) {
   // console.log("Trocar o destaque..", event.target.dataset.pos);
    clearInterval(controle);
    atualizar(event.target.dataset.pos)
}