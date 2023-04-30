function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute;

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        
    }

    if (numeroForMaiorQueOPermitido(numero)){
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale un numero
        enrtre ${menorValor} e ${maiorValor}</div> `
        
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número Secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O numero secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }else{
        elementoChute.innerHTML += `
        <div>O numero secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorQueOPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})