let lerValor = require('prompt-sync')();

var numeros = [];

for (let i = 0; i < 5; i++) {
  console.log("Digite um número para calcular a tabuada:");
  var numero = parseFloat(lerValor());
  numeros.push(numero);  
}

for(let i =0; i< numeros.length; i++){
  var quadrado = numeros[i] * numeros[i];
  console.log(`O quandrado de ${numeros[i]} é: ${quadrado}`)
}


