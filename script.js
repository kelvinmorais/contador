var botao = window.document.querySelector('input#contar')
    botao.addEventListener('click', contar)

function contar(){ 
    let iniciof = window.document.querySelector('input#inicio'),
        inicio = Number(iniciof.value),
        fimf = window.document.querySelector('input#fim'),
        fim = Number(fimf.value),
        intervalof = window.document.querySelector('input#intervalo'),
        intervalo = Number(intervalof.value),
        res = window.document.querySelector("div#res")

    if (iniciof.value.length == 0 || fimf.value.length == 0 ){
        //window.alert('[ERRO] Os campos "inicío e fim" devem ser preenchidos para continuar!')
        res.innerText = 'Impossível contar! '
    } else {
        if(intervalof.value.length == 0 || intervalof.value == 0){
            intervalo = 1
        } 
        res.innerText = 'Contando: '
        if(iniciof.value < fimf.value){
            for(let c = inicio ; c < fim ; c += intervalo){
                res.innerHTML += `  ${c} \u{27A1}`
        }
    } else if (iniciof.value > fimf.value){
        for(let c = inicio ; c > fim ; c-= intervalo){
            res.innerHTML += `  ${c} \u{27A1}`
    }
    res.innerHTML += `\u{2705}`  
}
}
}
        
