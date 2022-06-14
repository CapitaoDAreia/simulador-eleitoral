/*
    VARIABLES
    
*/

const nomeCandidato = document.querySelectorAll('.form-cadastro > input');
const botoesCadastro = document.querySelectorAll('.form-buttons > button');
const articleCadastro = document.querySelector('.main-article-cadastro');





/*
    FUNÇÕES

*/






/*
    LISTENERS

*/

//LISTENER ARTICLE CADASTRO
articleCadastro.addEventListener('click', e => {
    if(e.target.innerText === 'SUBMETER'){
        e.preventDefault()
        
    }
})
