const calcularMedia = function(nota1, nota2, nota3, nota4){

   let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

   return media
}



const calcularExame = function(exame, media){
   
    let notaComExame = Number(media) + Number(exame)

    return notaComExame
}




module.exports = {
    calcularMedia,
    calcularExame

}