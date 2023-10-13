function conversaoParaSegundos(horas, minutos, segundos){
  const tempoEmSegundos = horas * 3600 + minutos * 60 + segundos ;

  return tempoEmSegundos;
} 

const horas = 10;
const minutos = 45;
const segundos = 33;

const tempoEmSegundos = conversaoParaSegundos(horas, minutos, segundos);

console.log(`${horas} horas, ${minutos} minutos e ${segundos} segundos são equivalentes a ${tempoEmSegundos} segundos.`
  );