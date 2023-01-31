function imc (altura,peso) {
 var imc = peso / (altura * altura)
 return imc
}

function promp() {
 var peso = prompt("Informe seu peso");
 var altura = prompt("Informe sua altura");

 var total = imc(peso, altura)

 return `
 <span>${total}</span>
`
}

document.body.innerHTML = promp()