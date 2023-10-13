let lerValor = require('prompt-sync')();

function calcularParcelas(valorCompra, numeroParcelas) {
  let valorParcela = Math.floor(valorCompra / numeroParcelas);

  let resto = valorCompra % numeroParcelas;

  let parcelas = [];

  for (let i = 0; i < numeroParcelas; i++) {
    parcelas.push(valorParcela);
  }

  for (let i = 0; i < resto; i++) {
    parcelas[i]++;
  }

  return parcelas;
}
console.log("Informe o valor da compra R$ ")
var valorCompra = parseInt(lerValor());

console.log("Informe a quantidade de parcelas: ")
var numeroParcelas = parseInt(lerValor());

var parcelas = calcularParcelas(valorCompra, numeroParcelas);

console.log("Parcelas:", parcelas);
