function encontrarPrimeiroNegativo(colecao) {
  for (let i = 0; i < colecao.length; i++) {
      if (colecao[i] < 0) {
          console.log("O primeiro número negativo está no índice " + i);
          return; 
      }
  }
  console.log("Não foi encontrado nenhum número negativo na coleção.");
}

var colecaoExemplo = [3, 5, -2, 8, 1, -4, 6];
encontrarPrimeiroNegativo(colecaoExemplo);
