function encontrarIndices(vetor, numero) {
  var indices = [];

  for (var i = 0; i < vetor.length; i++) {
      if (vetor[i] === numero) {
          indices.push(i);
      }
  }

  if (indices.length > 0) {
      console.log("O número " + numero + " aparece nos seguintes índices: " + indices.join(', '));
  } else {
      console.log("O número " + numero + " não foi encontrado no vetor.");
  }
}


var vetorExemplo = [1, 2, 3, 4, 2, 5, 2, 6];
encontrarIndices(vetorExemplo, 2);
