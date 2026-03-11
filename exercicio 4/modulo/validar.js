const validacaoDeFatorial = function(fatorial){

    if(fatorial == '' || isNaN(fatorial))

        return false

    else if(fatorial <= 1)

        return false

    else

        return true  
}

module.exports = {
    validacaoDeFatorial
}