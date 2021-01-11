function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    var section = document.getElementById("sec")

    if (fano.value.length == 0 || fano.value > ano){
        alert("[ERRO 001] verifique os dados inseridos, e tente novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        
        if (fsex[0].checked) {
            genero = "homem"
            document.body.style.background = "#7377b4"
            section.style.background = "#515596"
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute("src", "imagens/Menino.png")
                res.innerHTML = `Detectamos uma criança com ${idade} anos`
                res.appendChild(img)
            } else if (idade <= 20) {
                //jovem
                img.setAttribute("src", "imagens/jovemH.png")
                res.innerHTML = `Detectamos um jovem com ${idade} anos`
                res.appendChild(img)
            } else if (idade <= 35) {
                //jovemadulto
                img.setAttribute("src", "imagens/jovemadulto.png")
                res.innerHTML = `Detectamos um jovem adulto com ${idade} anos`
                res.appendChild(img)
            } else if (idade <= 65) {
                //adulto
                img.setAttribute("src", "imagens/Homem.png")
                res.innerHTML = `Detectamos um adulto com ${idade} anos`
                res.appendChild(img)
            } else {
                //senhor
                img.setAttribute("src", "imagens/Senhor.png")
                res.innerHTML = `Detectamos um senhor com ${idade} anos`
                res.appendChild(img)
            }

        } else if (fsex[1].checked) {
            genero = "Mulher"
            section.style.background = '#e56ee5'
            document.body.style.background = '#f3a5f3'
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute("src", "imagens/Menina.png")
                res.innerHTML = `Detectamos uma criança com ${idade} anos`
                res.appendChild(img)
            } else if (idade <= 20) {
                //jovem
                img.setAttribute("src", "imagens/jovemM.png")
                res.innerHTML = `Detectamos uma jovem com ${idade} anos`
                res.appendChild(img)
            } else if (idade <= 35) {
                //jovemadulta
                img.setAttribute("src", "imagens/jovemadulta.png")
                res.innerHTML = `Detectamos uma jovem adulta com ${idade} anos`
                res.appendChild(img)
            } else if (idade <= 65) {
                //adulta
                img.setAttribute("src", "imagens/Mulher.png")
                res.innerHTML = `Detectamos uma mulher com ${idade} anos`
                res.appendChild(img)
            } else {
                //senhora
                img.setAttribute("src", "imagens/idosa.png")
                res.innerHTML = `Detectamos uma senhora com ${idade} anos`
                res.appendChild(img)
            }
        }
        res.style.textAlign = "center"
        //res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        //res.appendChild(img)
        
    }

}