let lerValor = require('prompt-sync')();

var notas = [];

for (var i = 0; i < 80; i++) {
    console.log("Digite a nota do aluno " + (i + 1) + ":");
    var nota = parseFloat(lerValor());
    notas.push(nota);
}

var somaNotas = 0;
for (var i = 0; i < 80; i++) {
    somaNotas += notas[i];
}
var mediaTurma = somaNotas / 80;

console.log("Notas dos Alunos:");
for (var i = 0; i < 80; i++) {
    console.log("Aluno " + (i + 1) + ": " + notas[i]);
}

console.log("Média da Turma: " + mediaTurma);
