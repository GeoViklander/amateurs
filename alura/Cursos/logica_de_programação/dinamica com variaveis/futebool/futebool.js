
function soma (vitorias, empates) {
	var resultado = vitorias * 3 + empates

	return resultado
}

function infos() {
	var time = prompt("Informe seu time")
	var vitorias = parseInt(prompt("Numeros de vitorias"))
	var empates = parseInt(prompt("Numeros de empates"))

	var total = soma(vitorias, empates)

	return `
	<span>Total de ponto do ${time} é de ${total}</span>
 `
}

document.body.innerHTML = infos()
