const validacao = require('./modulo/validar')

const calcularFatorial = require('./modulo/calculo')


const readline = require('readline')
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})




entradaDeDados.question('Qual é o numero?: ', function(fatorial){
    let numFatorial = Number(fatorial)



    const validacaoDeFatorial = validacao.validacaoDeFatorial(numFatorial)



    if(validacaoDeFatorial){
        let resultado = calcularFatorial.calculoDeFatorial(numFatorial)
        console.log(`O fatorial de ${numFatorial} é ${resultado}`)
        entradaDeDados.close()

    }else{

        console.log('erro')

    }

    
})