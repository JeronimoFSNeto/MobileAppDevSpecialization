let lerValor = require('prompt-sync')();

console.log("Digite um número para calcular a tabuada:");
var numero = parseInt(lerValor());

console.log(`Tabuada do ${numero}:`);

for (let i = 1; i <= 10; i++) {
  var resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}
