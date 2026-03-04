const calcularMedia = function(nota1, nota2, nota3, nota4){

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

    return media

}





const statusDoAluno = function (media){
    let resultFinal = situacao
    if (media >= 70) {
        resultFinal = 'Aprovado'
    }else if(media >= 50) {
        resultFinal = 'Recuperação'
    }else{
        resultFinal = 'Reprovado'
    }
    
    return statusDoAluno

}


 



const calcularExame = function(exame, media){
    let notaExame = exame
    let mediaAnterior = media

    let mediaAtual = (Number(notaExame) + Number(mediaAnterior)) / 2

    return mediaAtual
}







module.exports ={
    calcularMedia,
    calcularExame
}