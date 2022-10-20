
function tanqueJetta() {
  const tanque = 40
  const caminhoAlcool = 300
  const caminhoGasolina = 480

  const consumoAlcool = caminhoAlcool/tanque
  const consumoGasolina = caminhoGasolina/tanque

  return `
    <span> 
      o Jetta percorre 300km consumindo ${consumoAlcool} de alcool, já com gasolina percorre 480km consumindo ${consumoGasolina} de gasolina.
    </span>
  `
}

document.body.innerHTML = tanqueJetta()
