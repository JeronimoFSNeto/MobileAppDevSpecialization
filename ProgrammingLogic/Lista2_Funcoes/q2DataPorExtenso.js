function dataPorExtenso(dia, mes, ano) {
  const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];

  if (dia < 1 || dia > 31 || mes < 1 || mes > 12) {
    return "Data inválida";
  }

  const nomeMes = meses[mes - 1];
  const diaFormatado = dia < 10 ? `0${dia}` : dia;

  const dataExtenso = `${diaFormatado} de ${nomeMes} de ${ano}`;

  return dataExtenso;
}

const data = new Date();
const dia = String(data.getDate()).padStart(1, '0');
const mes = String(data.getMonth() + 1).padStart(2, '0');
const ano = data.getFullYear();

const dataAtual = dataPorExtenso(dia, mes, ano);
console.log(`Data: ${dia}/${mes}/${ano}, Imprimir: ${dataAtual}`); 
