let somaPares = 0;
let somaImpares = 0;

for (let i = 0; i < 10; i++) {
  const numero = Math.floor(Math.random() * 100); // Gera números inteiros aleatórios entre 0 e 99

  if (numero % 2 === 0) {
    somaPares += numero;
  } else {
    somaImpares += numero;
  }

  console.log(`Número ${i + 1}: ${numero}`);
}

console.log(`Soma dos números pares: ${somaPares}`);
console.log(`Soma dos números ímpares: ${somaImpares}`);
