class Simulador{
    constructor(){
        this.body = document.querySelector('.all-content');
        this.popup = document.querySelector('.popup');
        this.buttonCadastro = document.querySelectorAll('.main-btn-cadastrar');
    }

    abreCadastro(){
        this.adicionaEvento(this.buttonCadastro, 'click');
    }

    adicionaEvento(){
        document.addEventListener('click', e=>{
            const event = e.target;
            console.log(event)
            
        })
    }

    iniciaSimulador(){
        this.adicionaEvento();
    }
}

const simulador = new Simulador();
simulador.iniciaSimulador();
console.log(document)

