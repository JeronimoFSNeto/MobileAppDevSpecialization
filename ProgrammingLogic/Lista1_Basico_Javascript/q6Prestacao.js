// Questão 6 - prestacao = valor(valor * (taxa/100)*tempo)

let lerValor = require('prompt-sync')();

console.log("CALCULANDO PRESTAÇÃO ATRASADA!!!");

console.log("Informe o valor da prestação: ");
var valorPrestacao = parseFloat(lerValor());

console.log("Informe a taxa de juros: ");
var taxa = parseFloat(lerValor());

console.log("Informe a quantidade de dias em atraso(em dias)");
var qtdAtraso = parseFloat(lerValor());

var valorAtualizado = valorPrestacao + (valorPrestacao * (taxa/100) * qtdAtraso);

console.log(`${valorAtualizado}`)