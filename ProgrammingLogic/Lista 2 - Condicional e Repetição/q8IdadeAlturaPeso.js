let pessoasAcimaDe50 = 0;
let somaAlturasIdade10a20 = 0;
let pessoasComPesoAbaixoDe40 = 0;
let totalPessoas = 25;

for (let i = 1; i <= totalPessoas; i++) {
  const idade = Math.floor(Math.random() * 80) + 1; // Idade entre 1 e 80 anos
  const altura = Math.random() * 0.5 + 1.5; // Altura entre 1.5 e 2.0 metros
  const peso = Math.random() * 60 + 10; // Peso entre 40 e 100 quilos

  if (idade > 50) {
    pessoasAcimaDe50++;
  }

  if (idade >= 10 && idade <= 20) {
    somaAlturasIdade10a20 += altura;
  }

  if (peso < 40) {
    pessoasComPesoAbaixoDe40++;
  }

  console.log(`Pessoa ${i}: Idade: ${idade} anos, Altura: ${altura.toFixed(2)} metros, Peso: ${peso.toFixed(2)} quilos`);
}

const mediaAlturasIdade10a20 = somaAlturasIdade10a20 / totalPessoas;
const percentualPesoAbaixoDe40 = (pessoasComPesoAbaixoDe40 / totalPessoas) * 100;

console.log(`a. Pessoas com idade superior a 50 anos: ${pessoasAcimaDe50}`);
console.log(`b. Média das alturas das pessoas com idade entre 10 e 20 anos: ${mediaAlturasIdade10a20.toFixed(2)} metros`);
console.log(`c. Percentual de pessoas com peso inferior a 40 quilos: ${percentualPesoAbaixoDe40.toFixed(2)}%`);