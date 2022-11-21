let sorteados = []
let res =  document.getElementById('res')

function sortear(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

let resultado
while(sorteados.length < 6){
    // criar uma variável para receber o laço
    resultado = sortear(1,60)
    if(sorteados.indexOf(resultado) === -1){
        sorteados.push(resultado)
    }
    // condição para testar o indexOf
    // caso seja verdadeiro -> sorteados[] = sorteado
}

sorteados.sort(function(a,b){
    return a-b
})

for(let i=0; i<6; i++){
    res.innerHTML += (`<h2 class="sorteados">O ${i+1}° número sorteado é ${sorteados[i]}</h2>`)
}