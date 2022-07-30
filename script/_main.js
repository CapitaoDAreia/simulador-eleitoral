/*
    MAIN - Inicia o simulador, efetua a troca de display.
*/
class Simulador{
    constructor(){
        this.main = document.querySelectorAll('.main > article');
    }
    abreCadastro(){
        this.main[2].classList.add('ocultar-article');
        this.main[1].classList.add('ocultar-article');
        this.main[0].classList.remove('ocultar-article'); //Tela de cadastro
    }
    abreVotar(){
        this.main[2].classList.add('ocultar-article');
        this.main[0].classList.add('ocultar-article');
        this.main[1].classList.remove('ocultar-article'); //Tela de votação
    }
    abreApurar(){
        this.main[1].classList.add('ocultar-article');
        this.main[0].classList.add('ocultar-article');
        this.main[2].classList.remove('ocultar-article'); //Tela de apuração
    }
    adicionaEvento(){
        document.addEventListener('click', e=>{
            const event = e.target;
            if(event.classList.contains('main-btn-cadastrar')) this.abreCadastro();
            if(event.classList.contains('main-btn-votar')) this.abreVotar();
            if(event.classList.contains('main-btn-apurar')) this.abreApurar(); 
        })
    }
    iniciaSimulador(){
        this.adicionaEvento();
    }
}
const simulador = new Simulador();
simulador.iniciaSimulador();


