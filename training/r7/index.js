function button() {
  var $button = document.querySelector('[data-button]')
  var input = document.querySelector('[data-input]')
 
  $button.addEventListener('click', () => {
    console.log(input.value.replace(/[“”]/g, '"'));
    });
  };

button()

//frase de exemplo
//"Estou" l'en'do “Orgulho e Preconceito” de Jane Austen.

//estudo
// https://www.wake-up-neo.com/pt/javascript/como-substituo-caracteres-especiais-pelo-regex-em-javascript/942438546/
//https://www.alura.com.br/artigos/javascript-replace-manipulando-strings-e-regex