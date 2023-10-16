let lerValor = require('prompt-sync')();

var arrayNotas = [];

for (var i = 0; i < 10; i++) {
  console.log("Digite a nota do aluno " + (i + 1) + ":");
  var nota = parseFloat(lerValor());
  arrayNotas.push(nota);
}

console.log("Notas maiores que 5.0:");
for (var i = 0; i < 10; i++) {
    if (arrayNotas[i] > 5.0) {
        console.log("Aluno " + (i + 1) + ": " + arrayNotas[i]);
    }
}
