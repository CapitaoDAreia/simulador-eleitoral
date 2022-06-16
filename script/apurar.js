
/*
    FUNÇÕES

*/


/*
    LISTENERS

*/
//LISTENER MAIN APURAR
botaoApurar.addEventListener('click', ()=>{    
    const maisVotado = candidatosCadastrados.reduce((multiplicador, obj)=>{
        if(multiplicador.votos > obj.votos) return multiplicador
        return obj
    })
    console.log(maisVotado)
    resultado.innerText = `${maisVotado.nome} foi o candidato com mais votos, a saber ${maisVotado.votos}`
})