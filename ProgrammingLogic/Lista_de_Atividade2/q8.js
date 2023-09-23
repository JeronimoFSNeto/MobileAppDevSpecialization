// Questão 8 - Escreva um programa que calcule o volume de uma lata de óleo, utilizando a seguinte fórmula: 
// volume = 3.14 * R² * altura 

let lerValor = require('prompt-sync')();

console.log("CALCULANDO VOLUME DE UMA LATA DE OLEO!!!")
console.log("Informe o raio:")
let raio = parseFloat(lerValor());

console.log("Informe a altura: ")
let altura = parseFloat(lerValor());

var volume = 3.14 * (raio * raio) * altura;

console.log(`Volume da lata de Oleo: ${volume} metros cúbicos(m³)`);
