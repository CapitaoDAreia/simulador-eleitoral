class Cadastrar extends Simulador{
    constructor(){
        super()
        this.body = document.querySelector('.main-article-cadastro');
        this.campoNome = document.querySelector('#nome');
        this.campoID = document.querySelector('#id');
        this.candidatosCadastrados = [];
    };
    verificaSeCandidatoExiste(nome, id){
        for(let item of this.candidatosCadastrados){
            if(item.nome === nome){
                this.popup(`Já existe um candidato com o nome ${nome}`, 'background-color: red')
                return true;
            }else if(item.id === id){
                this.popup(`Já existe um candidato com o id ${id}`, 'background-color: red')
                return true;
            }
        };
        return false
    };
    criaCandidatos(nome, id, votos = 0){
        if(this.verificaSeCandidatoExiste(nome, id) === false){
            return{
                nome:nome, 
                id:id, 
                votos:votos
            }
        }
        return false;
    };
    adicionaCandidatos(nome, id){
        //A validação dos dados deverá ser efetuada posteriormente, por outro método
        if(nome && id && id.length === 2 && (typeof nome === 'string')){
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
