const calcularImpar = function(num1, num2){

    console.log('Lista NUM par: ')

    let contImpar = 0

    for (let cont = num1; cont <= num2; cont++){

        if (cont % 2 != 0){

            console.log(cont)

            contImpar++

        }
    }

    console.log(`Lista NUM impar: ${contImpar} \n`)

}






const calcularPar = function(num1, num2){

    console.log('Lista NUM par: \n')

    let contPar = 0

    for (let cont = num1; cont <= num2; cont++){

        if (cont % 2 === 0){

            console.log(cont)

            contPar++

        }

    }

    console.log(`Quant NUM par: ${contPar} \n`)

}







module.exports = {
    calcularImpar, 
    calcularPar
}