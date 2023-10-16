var notas = [];

for (var i = 0; i < 80; i++) {
    var nota = Math.random() * 10; // Gera uma nota aleatória entre 0 e 10
    notas.push(nota);
}

var somaNotas = 0;
for (var i = 0; i < 80; i++) {
    somaNotas += notas[i];
}
var mediaTurma = somaNotas / 80;

console.log("Notas dos Alunos:");
for (var i = 0; i < 80; i++) {
    console.log("Aluno " + (i + 1) + ": " + notas[i].toFixed(2)); // Arredonda a nota para 2 casas decimais
}

console.log("Média da Turma: " + mediaTurma.toFixed(2)); // Arredonda a média para 2 casas decimais
