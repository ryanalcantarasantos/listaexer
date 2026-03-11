const validar = require('./modulo/validar')

const calculo = require('./modulo/calculo')



const readline = require('readline')
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})





entradaDeDados.question('Qual é o numero inicial?: ', function(val1){
    let num1 = val1




    entradaDeDados.question('Qual é o numero final?: ', function(val2){
        let num2 = val2




        let valValor = validar.validarNumero(num1, num2)



        if(valValor){

            let calcularImpar = calculo.calcularImpar(num1, num2)
            let calcularPar = calculo.calcularPar(num1, num2)

        }else{

            console.log('erro')

        }

    })
})