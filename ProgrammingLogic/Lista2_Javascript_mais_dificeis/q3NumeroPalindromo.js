let lerValor = require('prompt-sync')();

console.log(" *** NÚMERO PALÍNDROMO - Número que é igual ao seu reverso *** ");
console.log("Informe um número: ");

let numeroInteiro =  (lerValor());

var array1 = [numeroInteiro];
console.log(array1)

var numeroInvertido = numeroInteiro.split("").reverse().join("");

var array2 = [numeroInvertido];
console.log(array2)

console.log(`${array1 === array2}`) 

let arrayType = typeof(array1);
console.log(arrayType); //"Object"

console.log(`${array1[0] === array2[0]}`) 
//https://www.freecodecamp.org/news/how-to-compare-arrays-in-javascript/

if(numeroInteiro === numeroInvertido){
  console.log(`O número ${numeroInteiro} é Palídromo`) 
}else{
  console.log(`O número ${numeroInteiro} não  é Palídromo`) 
}

