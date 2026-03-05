const readline = require ("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout     
})


entradaDeDados.question('Qual é o nome do aluno?: ', function(nomeA){
    let nomeAluno = nomeA
    
    
    
    entradaDeDados.question('Qual é o nome do professor?: ', function(nomeP){
        let nomeProfessor = nomeP
        
        
        
        entradaDeDados.question('Qual é o nome do curso?:', function(nomeC){
            let nomeCurso = nomeC 


            
            entradaDeDados.question('Qual é o nome da disciplina?:', function(nomeD){
                let nomeDisciplina = nomeC
                
                
                
                entradaDeDados.question('Qual é o genero do aluno ', function(genA){
                    let generoAluno = genA


                    entradaDeDados.question('Qual é o genero do professor', function(genP){
                        let generoProfessor = genP
                        
                        
                     
                            let calculos = require("./modulo/calculoMedia.js")


                            let media = calculos.mediaEscola(nota1, nota2, nota3, nota4)



                               if(media >= 50 || media <= 69){
                                entradaDeDados.question("digete a nota do exame: ", function(ex){
                                    let resultadoExame = ex 
                                    
                                    let exe = calculos.mediaExame(resultadoExame, media)

                                    if (exe >= 60) {
                                        console.log(`Aprovado no exame! Média final: ${exe.toFixed(2)}`);
                                    } else {
                                        console.log(`Reprovado no exame. Média final: ${exe.toFixed(2)}`);
                                    }
                                  })
                               }else{
                                    console.log(`Reprovado direto com média: ${media.toFixed(2)}`);
                               }  

                        
                    })                  
                })
            })
        })
    })                   
})





