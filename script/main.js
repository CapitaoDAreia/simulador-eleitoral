/*
    VARIABLES

*/
const nomeCandidato = document.querySelectorAll('.form-cadastro > input');
const botoesCadastro = document.querySelectorAll('.form-buttons > button');
const articleCadastro = document.querySelector('.main-article-cadastro');
const articleVotar = document.querySelector('.main-article-votar');
const pageDinamicFooter = document.querySelector('#dinamic-footer');
const recebeCandidatos = document.querySelector('.candidatos');

let candidatosCadastrados = [];

/*
    FUNÇÕES

*/
//Cria um elemento
function criaElemento(nome, valor1, valor2){
    const novoElemento = document.createElement(nome);
    novoElemento.innerText = valor1;
    novoElemento.innerText += " ID: "
    novoElemento.innerText += valor2;
    novoElemento.classList.add('recebe-nome')
    return novoElemento;
}
function adicionaCandidatos(element){
    recebeCandidatos.appendChild(element)
}

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

//Realiza o cadastro de candidatos
function cadastrar(nome, id){
    return {nome:nome, id: id}
}


/*
    LISTENERS

*/
//LISTENER ARTICLE CADASTRO
articleCadastro.addEventListener('click', e => {
    if(e.target.innerText === 'SUBMETER'){
        e.preventDefault()

        if(nomeCandidato[0].value.length === 0 || nomeCandidato[1].value.length === 0){
            alert('É necessário preencher os dados.')
        }else {
            candidatosCadastrados.push(cadastrar(nomeCandidato[0].value, nomeCandidato[1].value))
            limpaCampos(nomeCandidato[0], nomeCandidato[1])
        }

    }
})

//LISTENER MAIN VOTAR
document.addEventListener('click', e => {
    if(e.target.classList.contains('main-btn-votar')){
        recebeCandidatos.innerHTML = "";
        for(let i of candidatosCadastrados){
            adicionaCandidatos(criaElemento('p', i.nome, i.id))
        }
    }
})

//LISTENER MAIN APURAR
document.addEventListener('click', e => {
    if(e.target.classList.contains('main-btn-apurar')){
        recebeCandidatos.innerHTML = "";
    }
})

//LISTENER MAIN CADASTRAR
document.addEventListener('click', e => {
    if(e.target.classList.contains('main-btn-cadastrar')){
        recebeCandidatos.innerHTML = "";
    }
})
