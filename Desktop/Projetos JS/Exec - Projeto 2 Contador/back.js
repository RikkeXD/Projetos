function contar (){
    var txtinicio = document.querySelector('#inicio')
    var txtfim = document.querySelector('#fim')
    var txtpassos = document.querySelector('#passo')
    var txtresultado = document.querySelector('#resultado')

    //Validando os campos vazios
    if (txtinicio.value == "" || txtfim.value == "" || txtpassos.value == ""){
        txtresultado.innerHTML = "Impossivel contar !"
    }else{

        //Coletando os valores dos input e convertendo em Number
        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        var passos = Number (txtpassos.value)
        var contador = inicio
        txtresultado.innerHTML = ""

        if (passos <= 0 ){
                alert (`Passo invalido! Considerando PASSO 1`)
                passos = 1
        }
        
        //Realizando o laço de repetição e mostrando para o usuario
        if (inicio < fim){
            while (contador <= fim){
                txtresultado.innerHTML += `${contador} &#128073`
                contador = contador + passos
            }
        }else{
            while (contador >= fim){
                txtresultado.innerHTML += `${contador} &#128073`
                contador = contador - passos
            }
        
        }
        txtresultado.innerHTML += `	&#127987`
}
}