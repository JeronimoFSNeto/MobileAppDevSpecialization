const palavra = "Ifpi";

for (let i = 0; i < palavra.length * 2 - 1; i++) {
  let linha = "";

  if (i < palavra.length) {
    linha = palavra.slice(0, i + 1);
  } else {
    const reversedIndex = palavra.length * 2 - 2 - i;
    linha = palavra.slice(0, reversedIndex + 1);
  }

  console.log(linha);
}
