const palavra = "Ifpi";
const comprimento = palavra.length;

for (let i = 0; i < comprimento * 2 - 1; i++) {
  let linha = palavra.substr(0, Math.min(comprimento, i + 1));

  if (i >= comprimento) {
    const inverso = 2 * comprimento - i - 1;
    linha = palavra.substr(0, inverso);
  }

  console.log(linha);
}
