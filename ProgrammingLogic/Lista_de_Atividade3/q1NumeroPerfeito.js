let lerValor = require('prompt-sync')();

console.log(" *** NÚMERO PERFEITO OU NÃO *** ");
console.log("Informe um número do tipo inteiro: ");

var numeroInteiro =  parseInt(lerValor());

// Um número perfeito é aquele que é igual a soma de seus divisores. 
//EXEMPLO1::: Número 6 ->>> 1 + 2 + 3 = 6; Então temos um número perfeito
//EXEMPLO2::: Número 8 ->>> 1 + 2 + 3 + 4 = 10; Não é número perfeito.

while(numeroInteiro <=0){ // Números negativos e zero não podem ser perfeitos
  console.log("Número invalido *** Informe um número do tipo inteiro:  ");
  var numeroInteiro =  parseInt(lerValor());
}

let somaDivisores = 0;

for(let i=1; i<numeroInteiro; i++){
  if(numeroInteiro % i === 0){
    somaDivisores += i;
  }
}

if(somaDivisores === numeroInteiro){
  console.log(`O ${numeroInteiro} é número perfeito `)
}else{
  console.log(`O ${numeroInteiro} não é número perfeito `)
}



