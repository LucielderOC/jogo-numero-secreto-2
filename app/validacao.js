function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }
    if (numeroForMaiorOuMrnorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menor-valor} e ${maior-valor}</div>`;
        return
    }
    if (numero === numeroSecreto) {
        document.body,innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-=jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa fa-arrow-down" aria-hidden="true"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa fa-arrow-up" aria-hidden="true"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMrnorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})