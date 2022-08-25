function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] números não foram declarados corretamente!')
        res.innerHTML = 'Impossível contar sem os números!'
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('Passo inválido! considerando PASSO 1')
            p = 1
        }

            //contagem crescente
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML +=  ` ${c} \u{27A1} `

            }
            //CONTAGEM DESCRESCENTE
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML +=  ` ${c} \u{27A1} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}