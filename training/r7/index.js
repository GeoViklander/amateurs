function button() {
  var $button = document.querySelector('[data-button]')
  var input = document.querySelector('[data-input]')
 
  $button.addEventListener('click', () => {
    console.log(input.value.replace(/['"]+/g, ''))
    });
  };

button()
