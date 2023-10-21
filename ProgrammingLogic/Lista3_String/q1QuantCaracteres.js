let lerValor = require('prompt-sync')();

console.log("Digite um texto: ");
const texto = lerValor();

console.log(`O texto "${texto}" possui ${texto.length} caracteres.`);