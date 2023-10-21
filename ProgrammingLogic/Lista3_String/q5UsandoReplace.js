let lerValor = require('prompt-sync')();

// The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?

console.log("Digite uma frase:");
const frase = lerValor();

console.log("Digite a palavra a ser substituída na frase:");
const palavraOriginal = lerValor();

console.log("Digite a palavra de substituição:");
const palavraSubstituta = lerValor();

const novaFrase = frase.replace(palavraOriginal, palavraSubstituta);

console.log("Frase com a substituição: " + novaFrase);
