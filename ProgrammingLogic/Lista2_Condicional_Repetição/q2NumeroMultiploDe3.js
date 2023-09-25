let lerValor = require('prompt-sync')();

console.log("Informe um número: ")
var numero = parseFloat(lerValor());

if(numero % 3 === 0){
  console.log("Múltiplo de 3")
}else{
  console.log("Não é Múltiplo de 3")
}