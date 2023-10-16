// Questão 4 - Escreva um programa que calcule o salário líquido 
// de um professor.  Os dados fornecidos são: valor da hora aula, 
// número de aulas dadas no mês e percentual de desconto do INSS.
var lerValor = require('prompt-sync')();

console.log("CALCULANDO SALÁRIO LIQUIDO DO PROFESSOR!!!");

console.log("Informe o valor da hora aula R$:");
var n1 = parseFloat(lerValor());

console.log("Informe o número de aulas dadas no mês: ");
var n2 = parseFloat(lerValor());

var salarioBruto = n1 * n2;
/*
Hoje, o desconto do INSS varia entre 7% e 14%. Quem recebe acima de 
R$7.507,49 paga a mesma alíquota máxima de 14%, independentemente do 
salário bruto.
*/

if(salarioBruto > 7507){
   percentual = 0.14;
}else{
   percentual = 0.07;
}
console.log(`Percentual de desconto do INSS:  ${percentual}% \n`);
let salarioLiquido = salarioBruto - (salarioBruto * percentual) ;
console.log(`O salário liquido do professor R$${salarioLiquido}`);



