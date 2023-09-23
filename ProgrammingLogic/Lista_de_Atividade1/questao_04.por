programa
{
	
	funcao inicio()
	{
		real valorHora, numeroHoras, percentualINSS, salarioBruto, salarioLiquido
		escreva("Calculando o sálario liquido.")
		escreva("\nInforme o valor da hora: ")
		leia(valorHora)
		escreva("Informe o número aulas:")
		leia(numeroHoras)
		escreva("Informe o percentual do INSS: ")
		leia(percentualINSS)
		salarioBruto = valorHora * numeroHoras
		salarioLiquido = salarioBruto - ((percentualINSS/100)*salarioBruto)
		escreva("O sálario liquido é: ", salarioLiquido)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 512; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */