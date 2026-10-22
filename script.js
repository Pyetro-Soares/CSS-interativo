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

botao.addEventListener("click", trocaDeTema())

function trocaDeTema(){
    if(temaEscuro == false ){
        let escuro1 = document.querySelectorAll('.escuro1')
        let escuro2 = document.querySelectorAll('.escuro2')
        let escuro3 = document.querySelectorAll('.escuro3')
        let escuro4 = document.querySelectorAll('.escuro4')
        let escuro5 = document.querySelectorAll('.escuro5')

        escuro1.classList.replace('escuro1', 'claro1')
        escuro2.classList.replace('escuro2', 'claro2')
        escuro3.classList.replace('escuro3', 'claro3')
        escuro4.classList.replace('escuro4', 'claro4')
        escuro5.classList.replace('escuro5', 'claro5')
    }else{}   
}
