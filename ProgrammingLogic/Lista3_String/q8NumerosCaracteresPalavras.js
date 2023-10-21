let lerValor = require('prompt-sync')();

console.log("Digite um texto:");
const texto = lerValor();

const numeroCaracteres = texto.length;

const palavras = texto.split(/\s+/); 
const numeroPalavras = palavras.length;

console.log("Número de caracteres: " + numeroCaracteres);
console.log("Número de palavras: " + numeroPalavras);
