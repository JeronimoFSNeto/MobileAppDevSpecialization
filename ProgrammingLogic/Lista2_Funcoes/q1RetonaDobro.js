//receber um parametro com um único inteiro e retornar o dobro
lerValor  = require("prompt-sync")();

function dobro(numeroInteiro){
  return numeroInteiro * 2;
}
console.log("Informe um número que seja inteiro: ");
let numeroInteiro = parseInt(lerValor());

const resultado = dobro(numeroInteiro);

console.log(resultado);