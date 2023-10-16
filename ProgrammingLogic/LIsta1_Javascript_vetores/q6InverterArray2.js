let lerValor = require('prompt-sync')();
  
var quantidade = parseInt(lerValor("Quantos números você deseja inserir? "));

var numeros = [];

for (var i = 0; i < quantidade; i++) {
    console.log("Digite o " + (i + 1) + "º número:");
    var numero = parseFloat(lerValor());
    numeros.push(numero);
}

console.log("Array original: " + numeros);

numeros = numeros.reverse();

console.log("Array invertido: " + numeros);
