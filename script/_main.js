/*
    MAIN - Inicia o simulador, efetua a troca de display.
*/
class Simulador{
    constructor(){
        this.main = document.querySelectorAll('.main > article');
        this.popupWindow = document.querySelector('.popup');
    };
    abreCadastro(){
        this.main[2].classList.add('ocultar-article');
        this.main[1].classList.add('ocultar-article');
        this.main[0].classList.remove('ocultar-article'); //Tela de cadastro
    };
    abreVotar(){
        this.main[2].classList.add('ocultar-article');
        this.main[0].classList.add('ocultar-article');
        this.main[1].classList.remove('ocultar-article'); //Tela de votação
    };
    abreApurar(){
        this.main[1].classList.add('ocultar-article');
        this.main[0].classList.add('ocultar-article');
        this.main[2].classList.remove('ocultar-article'); //Tela de apuração
    };
    popup(texto, cordefundo){
        this.popupWindow.innerText = texto;
        this.popupWindow.classList.add('dinamic-popup')
        this.popupWindow.setAttribute("style", cordefundo)
        setTimeout(() =>{
            this.popupWindow.classList.remove('dinamic-popup')
        }, 2000)
    };
    adicionaEvento(evento, class1, class2, class3){
        document.addEventListener(arguments[0], e=>{
            const event = e.target;
            // console.log(arguments)
            if(event.classList.contains(class1)) this.abreCadastro();
            if(event.classList.contains(class2)) this.abreVotar();
            if(event.classList.contains(class3)) this.abreApurar(); 
        })
    };
}
const simulador = new Simulador();
simulador.adicionaEvento('click', 'main-btn-cadastrar', 'main-btn-votar', 'main-btn-apurar');


