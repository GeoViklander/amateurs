const numeroAdivinhacao = 7;
var chute = "";
var acertou = false;

for(var contador = 0; contador < 3; contador++){    
    chute = prompt("Tente adivinhar o número de 0 a 10:");
    if(chute == numeroAdivinhacao){
        alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
        acertou = true;
        break;
    }
    alert("Errado!");
}
if(!acertou){
  alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
}