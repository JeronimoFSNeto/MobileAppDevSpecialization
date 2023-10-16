let lerValor = require('prompt-sync')();

var arrayNotas = [];
var arrayNomes = [];

for (var i = 0; i < 5; i++) {
  console.log("Digite o nome do aluno " + (i + 1) + ":");  
  var nome = (lerValor());
console.log(nome)
  console.log("Digite a nota do aluno " + (i + 1) + ":");
  var nota = parseFloat(lerValor());
  
  arrayNomes.push(nome);
  arrayNotas.push(nota);

}

console.log("Nomes dos alunos com notas maiores que 5.0:");
for (var i = 0; i < 5; i++) {
    if (arrayNotas[i] > 5.0) {
        console.log("Aluno: " + arrayNomes[i]);
    }
}
