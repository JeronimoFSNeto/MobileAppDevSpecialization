let lerValor = require('prompt-sync')();

let somaAlturas = 0;
let contadorPessoasMaisDe50 = 0;

while (true) {
  const idade = parseInt(lerValor("Digite a idade da pessoa (ou um valor menor ou igual a zero para encerrar):"));

  if (idade <= 0) {
    break;
  }

  const altura = parseFloat(lerValor("Digite a altura da pessoa (em metros):"));

  if (idade > 50) {
    somaAlturas += altura;
    contadorPessoasMaisDe50++;
  }
}

let mediaAlturasMaisDe50 = 0;
if (contadorPessoasMaisDe50 > 0) {
  mediaAlturasMaisDe50 = somaAlturas / contadorPessoasMaisDe50;
}

console.log(`A média das alturas das pessoas com mais de 50 anos é: ${mediaAlturasMaisDe50.toFixed(2)} metros`);
