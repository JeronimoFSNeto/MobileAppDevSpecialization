let lerValor = require('prompt-sync')();

var numeros = [];

for (var i = 0; i < 3; i++) {
    console.log("Digite o " + (i + 1) + "º número:");
    var numero = parseFloat(lerValor());
    numeros.push(numero);
}

console.log("Array original: " + numeros);

numeros = numeros.reverse();

console.log("Array invertido: " + numeros);
