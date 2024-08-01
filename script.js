//pegar uma referência ao botão
let btGerarRobo = document.querySelector('button')

//adicionar um evento para criar a imagem
btGerarRobo.addEventListener('click', gerarRobo)

//quando ocorrer o evento click, o EventHandler vai 'ouvir' e 'tratar' esse evento: vai executar algum código
function gerarRobo(){
    const inputTxt = document.querySelector('#txString')
    const inputAlt = document.querySelector('#txAltura')
    const inputLar = document.querySelector('#txLargura')
    const valor = inputTxt.value
    const valorAlt = inputAlt.value
    const valorLar = inputLar.value
    let imgRobo = document.querySelector('img')
    imgRobo.src = 'https://robohash.org/'+valor+'?'+'size='+valorLar+'x'+valorAlt
}