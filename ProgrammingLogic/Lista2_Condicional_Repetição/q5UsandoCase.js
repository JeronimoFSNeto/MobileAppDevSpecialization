let lerValor = require('prompt-sync')();

function calcularMedia(numero1, numero2) {
  return (numero1 + numero2) / 2;
}

function calcularDiferenca(numero1, numero2) {
  return Math.abs(numero1 - numero2);
}

function calcularProduto(numero1, numero2) {
  return numero1 * numero2;
}

function calcularDivisao(numero1, numero2) {
  if (numero2 !== 0) {
    return numero1 / numero2;
  } else {
    return "Divisão por zero não é permitida.";
  }
}

console.log("Digite o primeiro número:");
var numero1 = parseFloat(lerValor());

console.log("Digite o segundo número:");
var numero2 = parseFloat(lerValor());

console.log("Escolha uma operação:\n1 - Média\n2 - Diferença\n3 - Produto\n4 - Divisão");
var escolha = parseInt(lerValor());

let resultado;

switch (escolha) {
  case 1:
    resultado = calcularMedia(numero1, numero2);
    console.log(`A média entre ${numero1} e ${numero2} é: ${resultado}`);
    break;
  case 2:
    resultado = calcularDiferenca(numero1, numero2);
    console.log(`A diferença entre o maior e o menor número é: ${resultado}`);
    break;
  case 3:
    resultado = calcularProduto(numero1, numero2);
    console.log(`O produto entre ${numero1} e ${numero2} é: ${resultado}`);
    break;
  case 4:
    resultado = calcularDivisao(numero1, numero2);
    console.log(`A divisão de ${numero1} pelo ${numero2} é: ${resultado}`);
    break;
  default:
    console.log("Escolha inválida.");
}
