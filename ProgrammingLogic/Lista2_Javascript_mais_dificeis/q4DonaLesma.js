function diasParaLesmaSubir(altura, subida, descida){
  console.log(" *** DONA LESMA SUBINDO UM MURO *** ");
  let dias = 0;
  let alturaAtual = 0;

  while(alturaAtual < altura){
    alturaAtual += subida;

    if(alturaAtual >= altura){
      dias++;
      break;
    }

    alturaAtual -= descida;
    dias++;
  }   

  return dias;
}

var altura = 10000;
var subida = 100;
var descida = 50;

var resultado = diasParaLesmaSubir(altura, subida, descida);

console.log(resultado)