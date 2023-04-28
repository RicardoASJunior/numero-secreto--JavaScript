function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute;

    if (chuteForInvalido(numero)){
    elementoChute.innerHTML += '<div>Valor Inválido</div>'
    }

    if(numeroForMaiorQueOPermitido(numero)){

        elementoChute.innerHTML += `<div>Valor inválido: Fale un numero
        enrtre ${menorValor} e ${maiorValor}</div> `
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número Secreto era ${numeroSecreto}
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorQueOPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}