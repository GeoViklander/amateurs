function button() {
  var $button = document.querySelector('[data-button]')
  var input = document.querySelector('[data-input]')
 
  $button.addEventListener('click', () => {
    console.log(input.value.replace(/[^a-zA-Z0-9_-]/g,''));
    });
  };

button()


//estudo
// https://www.wake-up-neo.com/pt/javascript/como-substituo-caracteres-especiais-pelo-regex-em-javascript/942438546/