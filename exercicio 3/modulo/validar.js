const validarTabuada = function(tabI, tabF){
    if(tabI == '' || tabF == '')
        return false

    else if(isNaN(tabI) || isNaN(tabF))
        return false

    else if(tabI < 2 || tabF > 100)
        return false

    else
        return true
}




const validarMultiplicador = function(numeroInicial, numeroFinal){
    if(numeroInicial == '' || numeroFinal == '')
        return false

    else if(isNaN(numeroInicial) || isNaN(numeroFinal))
        return false

    else if(numeroInicial < 1 || numeroFinal > 50)
        return false

    else
        return true
}

module.exports = {
    validarTabuada,
    validarMultiplicador
}