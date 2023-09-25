let lerValor = require('prompt-sync')();

console.log("Informe o primeiro número: ")
var numero1  = parseFloat(lerValor());

console.log("Informe o segundo número: ")
var numero2  = parseFloat(lerValor());

console.log(`O número menor é: `+ Math.ceil(numero1, numero2));

