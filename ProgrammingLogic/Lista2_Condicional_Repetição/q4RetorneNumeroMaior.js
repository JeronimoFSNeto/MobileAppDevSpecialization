let lerValor = require('prompt-sync')();

console.log("Informe o primeiro número: ")
var numero1  = parseFloat(lerValor());

console.log("Informe o segundo número: ")
var numero2  = parseFloat(lerValor());

console.log("Informe o terceiro número: ")
var numero3  = parseFloat(lerValor());

console.log(`O maior número é: `+ Math.max(numero1, numero2, numero3));

