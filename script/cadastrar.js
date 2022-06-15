
/*
    FUNÇÕES

*/
//Realiza o cadastro de candidatos
function cadastrar(nome, id, votos=0){
    return {nome:nome, id: id, votos}
}
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
    //aqui vai o appendChild
}

/*
    LISTENERS

*/
//LISTENER ARTICLE CADASTRO
articleCadastro.addEventListener('click', e => {
    if(e.target.innerText === 'SUBMETER'){
        e.preventDefault()

        if(nomeCandidato[0].value.length === 0 || nomeCandidato[1].value.length === 0){
            popup('É necessário preencher os dados.', 'background-color: #810505')
        }else if(nomeCandidato[1].value.length !== 2){
            popup('O ID precisa ser composto por dois digitos', 'background-color: #810505')
        }else {
            candidatosCadastrados.push(cadastrar(nomeCandidato[0].value, nomeCandidato[1].value))
            popup(`O candidato ${nomeCandidato[0].value} foi cadastrado.`, 'background-color:green')
            limpaCampos(nomeCandidato[0], nomeCandidato[1])
        }

    }
})



//LISTENER MAIN CADASTRAR
document.addEventListener('click', e => {
    if(e.target.classList.contains('main-btn-cadastrar')){
        
    }
})