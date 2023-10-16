// Questão 9 - Escreva um programa que calcule o desconto de um produto. 
// O novo valor deve possui um desconto de 12%.

let lerValor = require('prompt-sync')();

console.log("CALCULANDO DESCONTO DE UM PROTUDO (12%)!!!")
console.log("Informe o valor do produto R$:")
let valorProduto = parseFloat(lerValor());

valorProduto = valorProduto - (valorProduto * (12/100));

console.log(`O novo valor do produto com desconto é R$ ${valorProduto}`);