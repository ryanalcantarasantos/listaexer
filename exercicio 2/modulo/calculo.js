function calcularMedia (n1, n2, n3, n4){

    let media

    let nota1 = n1

    let nota2 = n2

    let nota3 = n3

    let nota4 = n4


    
    media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4



    if(media >= 70){
        return media    
    }else if(media >= 50 && media <= 69){
        return media
    }else{ 
        return media
    }
     
}



function calcularExame(exame, media){
    let notaDoExame = exame
    let mediaSemExame = media 
    
    let mediaComExame = (Number(notaDoExame) + Number(mediaSemExame)) / 2;

    return mediaComExame
}




module.exports = {
    calcularMedia,
    calcularExame

}