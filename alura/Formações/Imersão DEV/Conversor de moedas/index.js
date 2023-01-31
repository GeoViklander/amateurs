function insertValue() {
  document.getElementById("meu-input-dolar").onkeypress = function(e) {
  var valorEmDolar = document.getElementById("meu-input-dolar").value;
  var inputReal = document.getElementById("meu-input-real");
  var cotacaoDolar = 5.07
  var valorEmReal = valorEmDolar * cotacaoDolar;
    if (e.keyCode == 13) {
        valorEmReal = valorEmReal.toFixed(2)
        inputReal.value+=valorEmReal
        e.preventDefault();
    }
  }
}

insertValue()