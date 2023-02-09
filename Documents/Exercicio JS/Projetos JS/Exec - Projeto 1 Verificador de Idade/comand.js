var verificar = document.querySelector("#ver")

verificar.addEventListener("click", resultado)

function resultado(){
    var nasc = document.querySelector("#nasc")
    var data = new Date()
    var anoatual = data.getFullYear()
    var div = document.querySelector("#resultado")
    

    var idade = anoatual - nasc.value
        //Realizada a opreção para saber a idade

    var masc = document.querySelector('#mas').checked
    var femi = document.querySelector('#fem').checked

    if (idade < 0 || idade == "" || masc == false && femi == false){
        alert("Dados incorretos ! Verifique e tente novamente")
    }else{

        var fundo = document.querySelector('#principal')
        var txt1 = document.querySelector('#txt1')
        var divfoto = document.querySelector('#foto')
        var imagem = document.querySelector("#image")

        fundo.style.height = '550px'
        divfoto.style.display = 'block'
        txt1.style.display = 'none'
        div.innerHTML = (`<p>Detectamos Homem com ${idade} anos !`)
        if(masc == true){
            
            if(idade > 18 && idade <= 30){
                imagem.src = 'jovem.jpg'
            }else if(idade > 30 && idade<=50){
                //var imagem = document.querySelector('#image')
                imagem.src = 'homem.jpg'
            }else if (idade >= 12 && idade <=18){
                //var imagem = document.querySelector('#image')
                imagem.src = 'adolescente.jpg'
            }else if (idade > 50){
                //var imagem = document.querySelector('#image')
                imagem.src = 'idoso.jpg'
            }else if(idade >= 4 && idade<= 11){
                //var imagem = document.querySelector('#image')
                imagem.src = 'criança.jpg'
            }else { 
                //var imagem = document.querySelector('#image')
                imagem.src = 'bebe.jpg'
            }
        }else{
            div.innerHTML = (`<p>Detectamos Mulher com ${idade} anos !`)
            if (idade >= 4 && idade <= 11){
                //var imagem = document.querySelector('#image')
                imagem.src = 'Mulher/criança.jpg'
            }else if (idade > 11 && idade < 18){
                //var imagem = document.querySelector('#image')
                imagem.src = 'Mulher/adolescente.jpg'
            }else if (idade >= 18 && idade <30 ){
                //var imagem = document.querySelector('#image')
                imagem.src = 'Mulher/jovem.jpg'
            }else if (idade >= 30 && idade <=49 ){
                //var imagem = document.querySelector('#image')
                imagem.src = 'Mulher/mulher.jpg'
            }else if(idade > 50){
                //var imagem = document.querySelector('#image')
                imagem.src = 'Mulher/idosa.png'
            }else{
                //var imagem = document.querySelector('#image')
                imagem.src = 'Mulher/bebe.jpg'
            }
        }
    }
}


