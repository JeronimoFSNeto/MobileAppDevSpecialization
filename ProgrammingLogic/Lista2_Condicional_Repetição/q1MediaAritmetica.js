let lerValor = require('prompt-sync')();

function calcularMedia(nota1, nota2, nota3, nota4){
 
  return (nota1 +  nota2 + nota3 + nota4 ) / 4;
}

function situacaoAluno(media){
  if(media>=7){
    return "APROVADO";
  }else{
    return "REPROVADO";
  }
}

console.log("Informe a primeira nota: ");
var nota1 = parseFloat(lerValor());

console.log("Informe a segunda nota: ");
var nota2 = parseFloat(lerValor());

  console.log("Informe a terceira nota: ");
var nota3 = parseFloat(lerValor());

  console.log("Informe a quarta nota: ");
var nota4 = parseFloat(lerValor());


var media = calcularMedia(nota1, nota2, nota3, nota4);

var situacao = situacaoAluno(media);

console.log(`Média: ${media.toFixed(2)}`);
console.log(`Situação: ${situacao}`);