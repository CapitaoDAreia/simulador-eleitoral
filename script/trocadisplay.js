/*
    VARIABLES

*/
const pageArticles = document.querySelectorAll('.main > article');

/*
    FUNÇÕES

*/


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