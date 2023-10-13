// Função para simular um lançamento de dado
function lancarDado() {
  return Math.floor(Math.random() * 6) + 1; // Gera um número aleatório de 1 a 6
}

function simularLancamentos() {
  const frequencia = [0, 0, 0, 0, 0, 0]; // Inicializa um array para contar a frequência de cada número

  for (let i = 0; i < 1000000; i++) {
    const resultado = lancarDado(); // Lança o dado
    frequencia[resultado - 1]++; // Incrementa a frequência do número obtido
  }

  return frequencia;
}

function mostrarFrequencia(frequencia) {
  for (let i = 0; i < frequencia.length; i++) {
    const numero = i + 1;
    const frequenciaNumero = frequencia[i];
    console.log(`Número ${numero}: ${frequenciaNumero} vezes`);
  }
}

// Simula 1 milhão de lançamentos de dados e mostra a frequência
const resultadoDaSimulacao = simularLancamentos();
mostrarFrequencia(resultadoDaSimulacao);
