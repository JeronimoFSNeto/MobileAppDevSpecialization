let lerValor = require('prompt-sync')();

console.log(" *** INVERTENDO A ORDEM DO NÚMERO DIGITADO *** ");
console.log("Informe um número inteiro de 4 dígitos: ");

let numeroInteiro =  (lerValor());

if(numeroInteiro.length !== 4) {
  console.log("Este número não tem 4 digitos.")
}
  var numeroInvertido = numeroInteiro.split("").reverse().join("");
  
console.log(`Número invertido: ${numeroInvertido}`)
