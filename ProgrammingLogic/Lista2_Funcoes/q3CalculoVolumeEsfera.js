function calcularVolumeEsfera(raio) {
  
  if (raio <= 0) {
    return "O raio deve ser um número positivo.";
  }

    const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);

  return volume;
}

lerValor = require("prompt-sync")();

console.log("Informe o valor do raio para que seja calculado o volume da esfera: ")
const raio = parseInt(lerValor());

const volumeDaEsfera = calcularVolumeEsfera(raio);
console.log(`O volume da esfera com raio ${raio} é: ${volumeDaEsfera.toFixed(2)}`);
