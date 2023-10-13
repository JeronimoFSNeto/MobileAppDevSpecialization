function ehPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  if (numero <= 3) {
    return true;
  }
  if (numero % 2 === 0 || numero % 3 === 0) {
    return false;
  }
  
  let divisor = 5;
  while (divisor * divisor <= numero) {
    if (numero % divisor === 0 || numero % (divisor + 2) === 0) {
      return false;
    }
    divisor += 6;
  }
  
  return true;
}


function mostrarPrimosAteN(n) {
  if (n < 2) {
    console.log("Não há números primos.");
    return;
  }
  
  console.log("Números primos de 1 até", n, ":");
  
  for (let i = 2; i <= n; i++) {
    if (ehPrimo(i)) {
      console.log(i);
    }
  }
}

const lerValor = require("prompt-sync")();

console.log("Informe um número positivo para saber se o mesmo é PRIMO ou não: ")
const n = parseInt(lerValor());

mostrarPrimosAteN(n);
