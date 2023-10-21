let lerValor = require('prompt-sync')();

console.log("Digite o nome completo:");
const nomeCompleto = lerValor();

const palavras = nomeCompleto.split(' ');

const sobrenome = palavras[palavras.length - 1];

console.log("O sobrenome é: " + sobrenome);
