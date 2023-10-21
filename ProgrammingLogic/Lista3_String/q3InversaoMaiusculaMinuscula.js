let lerValor = require('prompt-sync')();

console.log("Digite um texto em letras maiúsculas:");
const textoMaiusculas = lerValor();

const textoMinusculas = textoMaiusculas.toLowerCase();
console.log("Texto em letras minúsculas: " + textoMinusculas);

console.log("Agora, digite um texto em letras minúsculas:");
const textoMinusculasUsuario = lerValor();

const textoMaiusculasUsuario = textoMinusculasUsuario.toUpperCase();
console.log("Texto em letras maiúsculas: " + textoMaiusculasUsuario);
