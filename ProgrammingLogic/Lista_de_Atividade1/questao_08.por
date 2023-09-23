programa
{
	inclua biblioteca Matematica --> mat

	funcao inicio()
	{	
		real raio, altura, volume
		escreva("Caluclando o volume de uma lata de óleo\n")
		escreva("Informe o R(raio): ")
		leia(raio)
		escreva("Informe a altura: ") 
		leia(altura)
		volume = 3.14 *  mat.potencia(raio, 2.0) *  altura
		escreva("O volume da lata é ",volume, " m³")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 0; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */