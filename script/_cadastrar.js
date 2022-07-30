class Cadastrar extends Simulador{
    constructor(){
        super()
        this.body = document.querySelector('.main-article-cadastro');
        this.campoNome = document.querySelector('#nome');
        this.campoID = document.querySelector('#id');
        this.candidatosCadastrados = [];
    };
    criaCandidatos(nome, id, votos = 0){
        for(let item of this.candidatosCadastrados){
            if(item.nome === nome){
                this.popup(`Já existe um candidato com o nome ${nome}`, 'background-color: red')
                return false;
            }else if(item.id === id){
                this.popup(`Já existe um candidato com o id ${id}`, 'background-color: red')
                return false;
            }
        };
        return{
            nome:nome, 
            id:id, 
            votos:votos
        };
    };
    adicionaCandidatos(nome, id){
        if(nome && id){
            const candidato = this.criaCandidatos(nome, id);
            if(candidato != false) {
                this.candidatosCadastrados.push(candidato);
                this.popup(`${nome}, ID: ${id} cadastrado com sucesso.`, 'background-color: green')
            }
        }else{
            this.popup('Verifique os dados do candidato!', 'background-color: red')
        }
    };
    adicionaEvento(evento, class1,){
        this.body.addEventListener(evento, e=>{
            e.preventDefault();
            if(e.target.classList.contains(class1)){
                this.adicionaCandidatos(this.campoNome.value, this.campoID.value)
                this.campoNome.value = "";
                this.campoID.value = "";
            }
        })
    };
}

const cadastrar = new Cadastrar();
cadastrar.adicionaEvento('click', 'cadastro-btn-submit');
