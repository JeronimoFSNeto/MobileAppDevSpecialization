let lerValor = require('prompt-sync')();

console.log("Entre o número:");
const numero = lerValor();

const digitosPorExtenso = {
    "0": "zero",
    "1": "um",
    "2": "dois",
    "3": "três",
    "4": "quatro",
    "5": "cinco",
    "6": "seis",
    "7": "sete",
    "8": "oito",
    "9": "nove"
};

const numeroStr = numero.toString();

const digitosEmExtenso = numeroStr.split('').map(digito => digitosPorExtenso[digito]);

console.log("Resultado: " + digitosEmExtenso.join(', '));
