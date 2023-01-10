const area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");
var linguagem = "";
if (area === "Front-End"){
    linguagem = prompt("Você quer aprender React ou Vue?");
}
else if (area === "Back-End"){
    linguagem = prompt("Você quer aprender C# ou Java?");
}
else {
    alert("Você não inseriu uma área válida!");
}

const perg = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
if (perg == 1){
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
}
else if (perg == 2){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
else {
    alert("Você não inseriu um valor válido!");
}

var msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'sim' em caso positivo.");
while (msg === "sim"){
    var novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
}