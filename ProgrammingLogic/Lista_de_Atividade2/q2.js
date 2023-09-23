// Escreva um programa que receba dois números reais, 
// calcule a média aritmética entre os números e imprima o resultado.
var lerValor = require('prompt-sync')();

console.log("Digite dois números reais!!!")
console.log("O primeiro número: ")

var n1 = parseFloat(lerValor());
var n2 = parseFloat(lerValor());
// console.log(n1,n2)
var media = (n1 + n2) / 2;

console.log(`A média aritmética de ${n1} e ${n2} é: ${media}`)


