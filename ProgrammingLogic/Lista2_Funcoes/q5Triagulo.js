function formaTriangulo(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function tipoTriangulo(a, b, c) {
  if (a === b && b === c) {
    return "Equilátero"; // Todos os lados são iguais
  } else if (a === b || a === c || b === c) {
    return "Isósceles"; // Dois lados são iguais
  } else {
    return "Escaleno"; // Todos os lados são diferentes
  }
}

function programaTriangulo(a, b, c) {
  if (formaTriangulo(a, b, c)) {
    const tipo = tipoTriangulo(a, b, c);
    console.log(`Os lados formam um triângulo ${tipo}.`);
  } else {
    console.log("Os lados não formam um triângulo.");
  }
}

lerValor = require("prompt-sync")();
console.log("Informe o comprimento do lado do triângulo: ");
const lado1 = parseInt(lerValor());

console.log("Informe o comprimento do lado do triângulo: ");
const lado2 = parseInt(lerValor());

console.log("Informe o comprimento do lado do triângulo: ");
const lado3 = parseInt(lerValor());

programaTriangulo(lado1, lado2, lado3);
