const validarNumero = function(num1, num2){

    if (num1 == '' || num2 == '')

        return false

    else if (isNaN(num1) || isNaN(num2))

        return false

    else if (num1 > num2)

        return false

    else if (num1 < 0 || num1 > 500 || num2 < 100 || num2 > 1000
        
    )
        return false

    else if (num1 == num2)

        return false

    else

        return true

}

module.exports = {
    validarNumero
}