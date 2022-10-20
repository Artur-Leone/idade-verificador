//Monitoria Git

function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formul_ano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formul_ano.value.length ==0 || Number(formul_ano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formul_ano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            if (idade >=0 && idade <10) {
                //Criança
                gênero = 'Criança do sexo Masculino'
                img.setAttribute('src', './imagens/criançaM.jpg')
            }else if (idade <=22){
                // jovem
                gênero = 'Jovem do sexo Masculino'
                img.setAttribute('src', './imagens/jovemM.jpg')
            }else if (idade < 50){
                // adulto
                gênero = 'Adulto do sexo Masculino'
                img.setAttribute('src', './imagens/adultoM.jpg')
            }else {
                //idoso
                gênero = 'Idoso '
                img.setAttribute('src', './imagens/idoso.jpg')
            }

        } else if (fsex[1].checked) {
            if(idade >=0 && idade <10){
                // criança
                gênero = 'Criança do sexo Feminino'
                img.setAttribute('src', './imagens/criançaF.jpg')
            }else if (idade <= 22){
                // jovem
                gênero = 'Jovem do sexo Feminino' 
                img.setAttribute('src', './imagens/jovemF.jpg')
            }else if (idade < 50) {
                // adulto
                gênero = 'Adulto do sexo Feminino'
                img.setAttribute('src', './imagens/adultoF.jpg')
            }else {
                //idoso
                gênero = ' Idosa'
                img.setAttribute('src', './imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML =`Detectamos ${gênero} com ${idade} anos.` 
        res.appendChild(img)
    }  
}