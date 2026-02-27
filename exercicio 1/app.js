const readline = require ("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout     
})

entradaDeDados.question('Qual o seu peso?', function(kg){
    let valorPeso = kg

    entradaDeDados.question('Qual é a sua altura?', function(metro){
        let valorAltura = metro

        let resultado = require ("./modulo/calculo.js")

        let calculoImc = resultado.calcularImc(valorAltura, valorPeso)

        if(calculoImc)
            console.log(' O seu Imc é ' + calculoImc)
        else{
            entradaDeDados.close()
            return false
            
            
        }
            

         
            


    })

})