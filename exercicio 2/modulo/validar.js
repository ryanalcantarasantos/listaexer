const validarNome = function(validarNome1, validarNome2, validarNome3, validarNome4){

    if(validarNome1 == '' || validarNome2 == '' || validarNome3 == '' || validarNome4 == '')
        return false
    else if(!isNaN(validarNome1) || !isNaN(validarNome2)|| !isNaN (validarNome3) || !isNaN(validarNome4))
        return false
    else
        return true
}





const validarGenero = function(genero){

    let gen = genero.toLowerCase() 
    if(gen == 'masculino' || gen == 'feminino')
        return true
    else
        return false
}






const validarNota = function(validarN1, validarN2, validarN3, validarN4){

    if(validarN1 == '' || validarN2 == '' || validarN3 == '' || validarN4 == '')
        return false
    else if (isNaN(validarN1) || isNaN(validarN2) || isNaN(validarN3) || isNaN(validarN4))
        return false
    else if (
        validarN1 > 100 || validarN1 < 0 ||
        validarN2 > 100 || validarN2 < 0 ||
        validarN3 > 100 || validarN3 < 0 ||
        validarN4 > 100 || validarN4 < 0
    )
        return false
    else
        return true
        
}






const definirStatusAluno = function(media){

    if(media >= 70)
        return 'Aprovado'
    else if(media >= 50)
        return 'Recuperação'
    else
        return 'Reprovado'
}

const StatusComExame = function(mediaComExame){

    if(mediaComExame >= 60)
        return 'Aprovado'
    else 
        return 'Reprovado'
}







module.exports = {
    validarNome,
    validarGenero,
    validarNota,
    definirStatusAluno,
    StatusComExame
}