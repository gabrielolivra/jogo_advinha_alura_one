
let contador = 1;
let listaNumerosSorteados = []
mensagemInicial()

let subtitle = document.querySelector("h2")

let numeroAleatorio = gerarNumAleatorio()


function gerarNumAleatorio() {
    let numeroAleatorio = parseInt(Math.random() * 10 + 1)
    if (listaNumerosSorteados.length == 10) {
        listaNumerosSorteados = []
    }
    if (listaNumerosSorteados.includes(numeroAleatorio)) {

        return gerarNumAleatorio()
    }
    else {
        listaNumerosSorteados.push(numeroAleatorio)
        return numeroAleatorio
    }

}
function verificarChute() {
    const numeroDigito = document.querySelector('input').value

    if (numeroDigito == '') {

        exibirTextoNaTela("p", `Digite um valor no input`)

    }
    else {
        subtitle.innerHTML = `Quantidade de tentativas: ${contador}`

        if (numeroDigito == numeroAleatorio) {

            exibirTextoNaTela("p", `Parabens! voce acertou em ${contador} tentativas`)

            document.getElementById("reiniciar").removeAttribute('disabled')

        }
        else {
            limparCampo();

            if (numeroDigito > numeroAleatorio) {

                exibirTextoNaTela("p", "O numero que voce digitou e maior que o numero aleatorio")
                contador++
            }
            else {
                exibirTextoNaTela("p", "O numero que voce digitou é menor que o numero aleatorio!")
                contador++
            }

        }
    }
    console.log(listaNumerosSorteados)
}
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 })
}
function reset() {

    mensagemInicial();
    subtitle.innerHTML = ''
    limparCampo()
    numeroAleatorio = gerarNumAleatorio()
    contador = 1
    document.getElementById("reiniciar").setAttribute('disabled', true)

}
function limparCampo() {
    let inputValor = document.querySelector('input')
    inputValor.value = ''

}
function mensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do numero secreto")
    exibirTextoNaTela("p", "Escolha um numero de 1 a 10")
}

