function gerar (){

    var txtnumero = document.querySelector('#numero')
    var resultado = document.querySelector('#lista')

    if(txtnumero.value == ""){
        alert ('Por favor ! Digite um numero !!')
    }else{
        var tabuada = Number(txtnumero.value)
        resultado.innerHTML = ''
        for (contador = 1; contador <= 10; contador++){
            var calculo = contador * tabuada
            resultado.innerHTML += `<option>${contador} x ${tabuada} = ${calculo}</option>`
        }
    }
}