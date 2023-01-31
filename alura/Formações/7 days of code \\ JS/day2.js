function infos() {
  const nome = prompt("Qual o seu nome?");
  const idade = prompt("Quantos anos você tem?");
  const linguagem = prompt("Qual linguagem de programação você está estudando?");
  const msg = `<span> Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}</span>`;
  const gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 - SIM ou 2 - NÃO`);
  
  const el = document.createElement("div");

  el.innerHTML += msg;
  
  if (gosta === 1) {
    return  `<span> Muito bom! Continue estudando e você terá muito sucesso </span>`;
  } 
  if (gosta === 2) {
    return  `<span> "Ahh que pena... Já tentou aprender outras linguagens?`;
  }
    
  return el
}

document.body.appendChild(infos())
