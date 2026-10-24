let caixa = document.querySelector('#caixa')

let altura = document.querySelector('#altura')

let borda = document.querySelector('#curvaturaBorda')

let inputMenssagem = document.querySelector('#menssagem')

let menssagem = document.querySelector('#textoDaMenssagem')

let cor = document.querySelector('#color')

borda.addEventListener("input", function(){
    caixa.style.borderRadius= `${borda.value}px`
})
altura.addEventListener("input", function(){
    caixa.style.height =`${altura.value}px`
})
inputMenssagem.addEventListener("input", function(e){
    menssagem.textContent = e.target.value
})
cor.addEventListener("input", function(event){
    caixa.style.backgroundColor = event.target.value
})
document.querySelector('#voltarCor').addEventListener("click", function(){
    caixa.style.backgroundColor = '#494947'
})

//daqui pra abixo é a mudança de temas e pode ficar bagunçado//

let botao = document.querySelector('#btn')

let temaEscuro = true

botao.addEventListener("click", trocaDeTema )

function trocaDeTema(){
    if(temaEscuro == true ){
        document.body.classList.toggle('claro')
        temaEscuro = false
    }else{
        document.body.classList.toggle('claro')
        temaEscuro = true
    }   
     console.log(temaEscuro)
}
