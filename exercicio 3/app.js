const validar = require('./modulo/validar')

const tabuada = require('./modulo/tabuada')



const readline = require ("readline")
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout     
})



entradaDeDados.question('Qual é o multiplicador inicial?:', function(multiplicador1){
    let multiplicadorInicial = multiplicador1





    entradaDeDados.question('Qual é o multiplicador final?:', function(multiplicador2){
        let multiplicadorFinal = multiplicador2




        
        entradaDeDados.question('Qual é a tabuada inicial?:', function(tabuada1){
            let tabuadaInicial = tabuada1





            
            entradaDeDados.question('Qual é a tabuada final?', function(tabuada2){
                let tabuadaFinal = tabuada2





                const validarMult = validar.validarMultiplicador(multiplicadorInicial, multiplicadorFinal)
                const validarTab = validar.validarTabuada(tabuadaInicial, tabuadaFinal)





                if(validarTab){
                    if(validarMult){
                        tabuada.criarTabuada(multiplicadorInicial, multiplicadorFinal, tabuadaInicial, tabuadaFinal)
                        entradaDeDados.close()
                    }else{
                        console.log('erro')
                        entradaDeDados.close()
                    }
                }else{
                    console.log('erro')
                    entradaDeDados.close()
                }
            })
        })
    })
})