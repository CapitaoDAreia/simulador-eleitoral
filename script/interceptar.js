//Interceptar carregamento de página em mobile
function interceptarTela(){
    if(window.screen.width <= 900){
        window.location.href = "mobile.html"
    }
}

