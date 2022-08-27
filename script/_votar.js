class Votar extends Cadastrar{
    constructor(){
        super()
        this.body = document.querySelector('.main-article-votar');
        this.botaoVotar = document.querySelector('.btn-votar');
        this.candidatoEscolhido = document.querySelector('.id-escolhido')
        this.candidatos = cadastrar.candidatosCadastrados;
    };
    realizaVotacao(){
        if(this.candidatos.length > 1){
            for(let elemento of this.candidatos){
                if(elemento.id === this.candidatoEscolhido.value){
                    elemento.votos ++
                    this.popup(`1 voto para ${elemento.nome}`, 'background-color: green')
                }
            }
            return;
        }
        this.popup('Só é possível votar com dois candidatos cadastrados...', "background-color: red")
    };

    adicionaEvento(evento, class1,){
        this.body.addEventListener(evento, e=>{
            e.preventDefault();
            if(e.target.classList.contains(class1)){
                this.realizaVotacao()
            }
        })
    };
    
}

const votar = new Votar();
votar.adicionaEvento('click', 'btn-votar');