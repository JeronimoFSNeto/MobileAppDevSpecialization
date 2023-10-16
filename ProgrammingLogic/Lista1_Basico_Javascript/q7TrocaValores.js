// Questão 7 - Escreva um programa que receba como entrada dois números inteiros. 
// Os números devem ser armazenados nas variáveis A e B. O algoritmo deve efetuar a troca 
// dos valores de forma que a variável A passe a ter o valor da variável B e que a variável B 
// passe a ter o valor da variável A. Ao final, o algoritmo deve imprimir os valores trocados.

let lerValor = require('prompt-sync')();

console.log("TROCANDO VALORES!!!")
console.log("Informe o valor de A:")
let valorA = parseInt(lerValor());

console.log("Informe o valor de B:")
let valorB = parseInt(lerValor());

var t = valorA;
valorA = valorB;
valorB = t;

console.log(`Valor A: ${valorA} \n Valor B: ${valorB}`);
