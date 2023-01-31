function Ontecla () {
  const $tel = document.querySelector('input[type=tel]')
  const $teclas = document.querySelectorAll('input[type=button]')
    
    for (let index = 0; index < $teclas.length; index++) {
    
      const tecla = $teclas[index]
      const teclaVal = tecla.value

    
      tecla.onclick = function () {
        $tel.value+=teclaVal
      }
    }
  }
  
Ontecla()