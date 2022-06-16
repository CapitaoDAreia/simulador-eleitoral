
/*
    FUNÇÕES

*/


/*
    LISTENERS

*/

//LISTENER MAIN VOTAR
botaoVotar.addEventListener('click', e =>{
    if(campoVotacaoId.value.length === 2){
        if(candidatosCadastrados.length > 0){
            for(let i of candidatosCadastrados){
                if(i.id === campoVotacaoId.value){
                    i.votos ++;
                    console.log(i.votos, 'votos para', i.nome)
                    popup(`Um voto para ${i.nome}`, 'background-color: green')
                    campoVotacaoId.value = '';
                    campoVotacaoId.focus()
                    return;
                }else{
                    popup('Candidato inexistente', 'background-color: #810505')
                }
            }
        }else{
            popup('Não há candidatos para votar!', 'background-color: #810505')
        }
    }else{
        popup('Digite um ID válido!', 'background-color: #810505')
    }
    
})