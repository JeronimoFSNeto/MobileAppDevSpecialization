programa
{
	
	funcao inicio()
	{
		real valor, valorAtualizado, taxa
		inteiro tempoDiasAtraso
		escreva("Calculando valor de prestação em Atraso\n")
		escreva("Informe o valor da prestação: ")
		leia(valor)
		escreva("Informe o juros caso pague em atraso: ")
		leia(taxa)
		escreva("Informe quantos dias em atraso: ")
		leia(tempoDiasAtraso)
		taxa = (taxa / 100)
		valorAtualizado = valor + (valor * taxa * tempoDiasAtraso)
		escreva("Valor da prestação R$ ",valor, " com a taxa de juros de ",taxa, "% e ", 
		tempoDiasAtraso, " em atrasos, total a pagar R$ ", valorAtualizado)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 591; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */