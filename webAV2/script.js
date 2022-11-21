let sorteados = []
let res =  document.getElementById('res')

function sortear(){
    return Math.floor(Math.random(1)*60)
}

while(sorteados.length < 6){
    // criar uma variável para receber o laço
    let resultado = sortear()
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