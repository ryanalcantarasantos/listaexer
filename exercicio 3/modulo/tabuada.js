const calcularTabuada = function(numeroTabuada, numeroInicial, numeroFinal){

    let tabuda = Number(numeroTabuada)

    let inicial = Number(numeroInicial)

    let final = Number(numeroFinal)

    let resultado


    for(contador = inicial; contador <= final; contador++){
        resultado = tabuda * contador
        console.log(`${tabuda} X ${contador} = ${resultado}`)
    }
}




const criarTabuada = function(tabuadaInicial, tabuadaFinal, numeroInicial, numeroFinal){
    
    let tabI = Number(tabuadaInicial)
    let tabF = Number(tabuadaFinal)

    for(cont = tabI; cont <= tabF; cont++){
        console.log(`Tabuada do [${cont}] \n`)
        calcularTabuada(cont, numeroInicial, numeroFinal)
        console.log('')
    }

}




module.exports = {
    criarTabuada
}