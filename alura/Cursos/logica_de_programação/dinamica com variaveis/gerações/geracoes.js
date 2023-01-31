
function mostrarTexto (frase) {
	return `
		<span>${frase}</span>
	`
}
	var idadeMedia = 28;
	var anoAtual = 2022;
	var anoChegada = 1500;
	var resultado = (anoAtual - anoChegada) / idadeMedia
	var resulArredondado = Math.round(resultado)

	document.body.innerHTML = mostrarTexto (`Se passaram ${resulArredondado} gerações`);
	