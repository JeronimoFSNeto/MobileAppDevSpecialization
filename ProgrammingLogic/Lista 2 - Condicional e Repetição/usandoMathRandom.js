// Gerando um número aleatório entre dois valores
// Este exemplo retorna um número entre dois valores definidos. 
// O valor retornado será maior ou igual a min, e menor que max.

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}