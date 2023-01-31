

function dayOne() {
  const container = document.createElement("div");
  var numeroUm = 1
  var stringUm = '1'
  var numeroTrinta = 30
  var stringTrinta = '30'
  var numeroDez = 10
  var stringDez = '10'

  if (numeroUm == stringUm && numeroTrinta == stringTrinta && numeroDez == stringDez){
    return `<span> As variáveis tem o mesmo valor, mas tipos diferentes </span>`
  } else {
    return `As variáveis não tem o mesmo valor'`
  }
}


