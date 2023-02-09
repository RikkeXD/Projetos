let lista = []

function adicionar (){
    let n = document.querySelector('#numero')
    let txtlista = document.querySelector('#valores')
    let resumo = document.querySelector('#resumo')

    let valor = Number(n.value)

    if (valor <= 0 || lista.indexOf(valor) != -1 || valor > 100){
        alert ('Numero Inválido ou já encontrado na Lista')
    }else{
        lista.push(valor)
        txtlista.innerHTML += `<option> Valor ${valor} adicionado. </option>`
        resumo.innerHTML = ""
    }
    numero.value = ""
    numero.focus()
}

function finalizar (){
    let resumo = document.querySelector('#resumo')
    resumo.innerHTML = ""
    //let ultimo = lista.length
    let soma = 0

    for (let pos in lista){
        soma = soma + lista[pos]
    }

    lista.sort((a, b) => a - b);
    
    resumo.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.`
    resumo.innerHTML += `<p>O maior valor informado foi ${lista[lista.length-1]}.</p>`
    resumo.innerHTML += `<p>O menor valor informado foi ${lista[0]}</p>`
    resumo.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    resumo.innerHTML += `<p>A média dos valores digitados é ${soma/lista.length}</p>`

}

let $numero = 10