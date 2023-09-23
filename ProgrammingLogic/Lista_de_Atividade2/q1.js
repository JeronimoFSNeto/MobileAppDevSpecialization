// 1.	Escreva um programa que receba um número inteiro como entrada e
// imprima o sucessor e antecessor desse número.

let lerValor = require('prompt-sync')();
console.log("Digite um número inteiro: ");

let valor1 = lerValor();
valor1 = parseInt(valor1)
let sucessor = valor1 + 1;
let antecessor = valor1 - 1;
console.log(`Valor digitado: ${valor1} \n Sucesso: ${sucessor} \n Antecessor: ${antecessor}`)