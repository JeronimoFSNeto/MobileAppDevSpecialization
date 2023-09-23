// Questão 10 - Escreva um programa que receba um número com quatro dígitos e
// imprima o primeiro e último digito.

let lerValor = require('prompt-sync')();

console.log("IMPRIMINDO O PRIMEIRO E ÚLTIMO DIGITO DIGITADO!!!")
console.log("Informe um número com 4 dígitos: ")
let valorProduto = parseFloat(lerValor());

primeiroNumero =  parseInt(valorProduto / 1000);
ultimoNumero = valorProduto % 10;

console.log(`Primeiro número: ${primeiroNumero} \nÚltimo número: ${ultimoNumero}`);