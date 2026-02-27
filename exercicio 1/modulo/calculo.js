const calcularImc = function(altura, peso){

    let valorAltura = Number(altura)
    let valorPeso = Number(peso)
    

    let imc = valorPeso / (valorAltura ** 2)

    console.log(imc.toFixed(2))
    

    if(imc < 18.5){
        console.log('Abaixo do peso')
    }else if(imc >= 18.5 && imc <= 24.9){
        console.log('Peso normal')
    }else if(imc >= 25.0 && imc <= 29.9){
        console.log('Acima do peso')
    }else if(imc >= 30.0 && imc <= 34.9){
        console.log('Obesidade I')
    }else if(imc >= 35.0 && imc <= 39.9){
        console.log('Obesidade II')
    }else{
        console.log('Obesidade III')

        return false
    }
    
 
  
}

module.exports = {
    calcularImc
}    