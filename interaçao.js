
function Verificar() {

    var data = new Date()
    var dia = data.getDate()
    var mes = data.getMonth()+1
    var ano = data.getFullYear()
    var formul_dia = document.getElementById('txtdia')
    var formul_mes = document.getElementById('txtmes')
    var formul_ano = document.getElementById('txtano')
    
    var res = document.getElementById('res');
    
    if(formul_dia.value <= 0 || formul_dia.value > 31){
        window.alert('[ERRO] Verifique os dados e tente novamente.!')
    }
    else if(formul_mes.value <=0 || formul_mes.value > 12){
        window.alert('[ERRO] Verifique os dados e tente novamente.!')
    }
    else if (formul_ano.value == 0 || Number(formul_ano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.!')
    } 
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formul_ano.value)

        if(Number(formul_mes.value) > mes){
            idade = idade-1
            //Filtro do mês
        }
        else if(Number(formul_mes.value == mes)){

            if(Number(formul_dia.value) > dia){
                idade = idade -1
                //Filtro do dia
            }
        }
        var gênero = ''

        var img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {

            if (idade >= 0 && idade < 10) {
                //Criança
                gênero = 'Criança do sexo Masculino'
                img.setAttribute('src', './imagens/criançaM.jpg')
            }
            else if (idade <= 22) {
                // jovem
                gênero = 'Jovem do sexo Masculino'
                img.setAttribute('src', './imagens/jovemM.jpg')
            }
            else if (idade < 50) {
                // adulto
                gênero = 'Adulto do sexo Masculino'
                img.setAttribute('src', './imagens/adultoM.jpg')
            }
            else {
                //idoso
                gênero = 'Idoso '
                img.setAttribute('src', './imagens/idoso.jpg')
            }

        }
        else if (fsex[1].checked) {

            if (idade >= 0 && idade < 10) {
                // criança
                gênero = 'Criança do sexo Feminino'
                img.setAttribute('src', './imagens/criançaF.jpg')
            }
            else if (idade <= 22) {
                // jovem
                gênero = 'Jovem do sexo Feminino'
                img.setAttribute('src', './imagens/jovemF.jpg')
            }
            else if (idade < 50) {
                // adulto
                gênero = 'Adulto do sexo Feminino'
                img.setAttribute('src', './imagens/adultoF.jpg')
            }
            else {
                //idoso
                gênero = ' Idosa'
                img.setAttribute('src', './imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}