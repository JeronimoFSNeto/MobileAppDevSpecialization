let lerValor = require('prompt-sync')();

console.log("Digite uma frase:");
const frase = lerValor();

let contadorEspacos = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] === ' ') {
        contadorEspacos++;
    }
}

console.log("Número de espaços em branco na frase: " + contadorEspacos);
