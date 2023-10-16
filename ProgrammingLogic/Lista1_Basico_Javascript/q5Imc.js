// Questão 5 - IMC
// Onde precisamos inserir peso e altura

var lerValor = require('prompt-sync')();

console.log("CALCULANDO IMC!!!");

console.log("Informe o peso:");
var n1 = parseFloat(lerValor());

console.log("Informe sua altura em centimentros: ");
var n2 = parseFloat(lerValor());

var imc = n1 /n2 * n2;

console.log(`IMC: ${imc}`);



