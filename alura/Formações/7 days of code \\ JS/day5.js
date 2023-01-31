
var frutas = [];
var laticinios = [];
var doces = [];
var congelados = [];
var item = "";
var categoria = "";

function fruits() {
  item = prompt("Quais comidas você deseja inserir?");
  categoria = prompt("Em qual categoria essas comidas se encaixam                                                                                                                                          : 'frutas', 'laticínios', 'doces' ou 'congelados'?");
  if(categoria === 'frutas'){
      frutas.push(item);
  } else if (categoria === 'laticínios'){
      laticinios.push(item);
  } else if (categoria === 'doces'){
      doces.push(item);
  } else if (categoria === 'congelados'){
      congelados.push(item);
  } else {
      alert("Essa categoria não foi pré-definida.")
  }

  return `<span> Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados} </span>`
}

document.body.innerHTML = fruits()