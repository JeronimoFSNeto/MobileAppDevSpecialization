const lerValor = require("prompt-sync")();

function converterPara12Horas(horas, minutos) {
  let periodo = "A.M.";
  
  if (horas >= 12) {
    periodo = "P.M.";
    if (horas > 12) {
      horas -= 12;
    }
  }
  
  return `${horas}:${minutos} ${periodo}`;
}

function mostrarResultado(horas24, minutos) {
  const resultado = converterPara12Horas(horas24, minutos);
  console.log(`Resultado: ${resultado}`);
}


function programaConversao() {
  let continuar = true;
  
  while (continuar) {
    console.log("Digite a hora (formato 24 horas)");
    const horas24 = parseInt(lerValor());
    console.log("Digite os minutos:");
    const minutos = parseInt(lerValor());
    
    if (isNaN(horas24) || isNaN(minutos) || horas24 < 0 || horas24 > 23 || minutos < 0 || minutos > 59) {
      console.log("Entrada inválida. Certifique-se de inserir valores válidos.");
    } else {
      mostrarResultado(horas24, minutos);
    }
    console.log("Deseja fazer outra conversão? (S/N)");
    const resposta = lerValor().toUpperCase();
    continuar = resposta === "S"; 
  }
}

programaConversao();
