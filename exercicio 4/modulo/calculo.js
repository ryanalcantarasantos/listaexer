const calculoDeFatorial = function(num){

    let numero = Number(num)

    let fator = 1



    for (cont = 1; cont <= numero; cont++) {
        fator *= cont;
    }

    return fator
}



module.exports = {
    calculoDeFatorial
}