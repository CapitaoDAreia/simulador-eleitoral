/*
    VARIABLES

*/
const nomeCandidato = document.querySelectorAll('.form-cadastro > input');
const botoesCadastro = document.querySelectorAll('.form-buttons > button');
const articleCadastro = document.querySelector('.main-article-cadastro');
const articleVotar = document.querySelector('.main-article-votar');
const pageDinamicFooter = document.querySelector('#dinamic-footer');
const pageArticles = document.querySelectorAll('.main > article');

let candidatosCadastrados = [];

/*
    FUNÇÕES

*/


//Relógio do Dinamic Footer
setInterval(() =>{
    let data =  new Date();
    let dataAtual = data.toLocaleTimeString('pt-BR');
    pageDinamicFooter.innerText = dataAtual;
}, 1000)

//Recebe campos de input e os limpa
function limpaCampos(){
    for(let i of arguments){
        i.value = "";    
    }
}

//Dispara o popup na janela
const popup = (texto) =>{

};


/*
    LISTENERS

*/
//LISTENER PARA TROCA DE DISPLAY - USando IIFE para disparar a funcionalidade
document.addEventListener('click', e =>{
    const eclass = e.target.classList.value;
    switch(eclass){
        case 'main-btn main-btn-cadastrar':
            (() =>{
                pageArticles[0].classList.remove('ocultar-article')
                
                pageArticles[1].classList.add('ocultar-article')
                pageArticles[2].classList.add('ocultar-article')
            })();
            break;
        case 'main-btn main-btn-votar':
            (() =>{
                pageArticles[1].classList.remove('ocultar-article')
                
                pageArticles[0].classList.add('ocultar-article')
                pageArticles[2].classList.add('ocultar-article')
            })();
            break;
        case 'main-btn main-btn-apurar':
            (() =>{
                pageArticles[2].classList.remove('ocultar-article')
                
                pageArticles[0].classList.add('ocultar-article')
                pageArticles[1].classList.add('ocultar-article')
            })();
            break;
    }
})
