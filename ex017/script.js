function calcular() {
    var n1 = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    if (txtnum.value.length == 0) {
        alert('Por favor coloque um número valido!')
    } else {
        let n = Number(txtnum.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }



    
}