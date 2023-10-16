// Questão 3 - Escreva um programa que calcule a área de um triângulo. 
var lerValor = require('prompt-sync')();

console.log("CALCULANDO A ÁRE DE UM TRIÂNGULO!!!")

console.log("Informe o valor de b: ")
var n1 = parseFloat(lerValor());

console.log("Informe o valor de h: ")
var n2 = parseFloat(lerValor());

var areaTriangulo = (n1 * n2) / 2

console.log(`A Área do Triângulo é: ${areaTriangulo}`)


