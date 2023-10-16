let lerValor = require('prompt-sync')();

// Arrays para armazenar os nomes e notas dos alunos
var nomes = [];
var notas1 = [];
var notas2 = [];

// Loop para ler os nomes e notas dos 5 alunos
for (var i = 0; i < 5; i++) {
    console.log("Digite o nome do aluno " + (i + 1) + ":");
    var nome = lerValor();
    
    console.log("Digite a primeira nota do aluno " + nome + ":");
    var nota1 = parseFloat(lerValor());
    
    console.log("Digite a segunda nota do aluno " + nome + ":");
    var nota2 = parseFloat(lerValor());
    
    nomes.push(nome);
    notas1.push(nota1);
    notas2.push(nota2);
}

// Listagem com nome, notas e média de cada aluno
console.log("Listagem de Alunos e Médias:");
for (var i = 0; i < 5; i++) {
    var nome = nomes[i];
    var nota1 = notas1[i];
    var nota2 = notas2[i];
    var media = (nota1 + nota2) / 2;
    
    console.log("Aluno: " + nome);
    console.log("Nota 1: " + nota1);
    console.log("Nota 2: " + nota2);
    console.log("Média: " + media+"\n");
}
