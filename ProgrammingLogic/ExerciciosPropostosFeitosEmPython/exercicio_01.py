# Inicializar um vetor vazio para armazenar as notas
notas = []

# Loop para ler as notas dos 10 alunos
for i in range(10):
    nota = float(input(f"Digite a nota do aluno {i + 1}: "))
    notas.append(nota)

# Exibir as notas maiores que 5.0
print("Notas maiores que 5.0:")
for nota in notas:
    if nota > 5.0:
        print(nota)
