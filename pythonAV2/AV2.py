import random
numeros = [] # Criamos uma lista vazia
for i in range(60): # Depois adicionamos os 60 números do sorteio
    numeros.append(i+1)
print('Lista de números: ',numeros)
random.shuffle(numeros) # Embaralha os números
print('\nLista embaralhada: ',numeros)
print('\nResultado: ', sorted(numeros[0:6]))# Por fim pegamos os últimos 6 números