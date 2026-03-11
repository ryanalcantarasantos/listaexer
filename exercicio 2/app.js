const calculo = require('./modulo/calculo')


const validar = require('./modulo/validar')




const readLine = require('readline')
const entradaDeDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})




entradaDeDados.question('Qual é o nome do aluno?: ', function(nomeA){
    let nomeAluno = nomeA



    entradaDeDados.question('Qual é o nome do professor?: ', function(nomeP){
        let nomeProfessor = nomeP




        entradaDeDados.question('Qual é o genero do aluno?: ', function(genA){
            let generoAluno = genA.toLowerCase()




            entradaDeDados.question('Qual é o genero do professor?: ', function(genP){
                let generoProfessor = genP.toLowerCase()




                entradaDeDados.question('Qual é o nome da disciplina?: ', function(nomeD){
                    let nomeDisciplina = nomeD




                    entradaDeDados.question('Qual é o nome do curso?: ', function(nomeC){
                        let nomeCurso = nomeC





                        entradaDeDados.question('Qual é a nota 1?: ', function(nota1){
                            let recebeN1 = Number(nota1)




                            entradaDeDados.question('Qual é a nota 2?: ', function(nota2){
                                let recebeN2 = Number(nota2)





                                entradaDeDados.question('Qual é a nota 3?: ', function(nota3){
                                    let recebeN3 = Number(nota3)





                                    entradaDeDados.question('Qual é a nota4?: ', function(nota4){
                                        let recebeN4 = Number(nota4)



                                        
                                        let nome = validar.validarNome(nomeAluno, nomeProfessor, nomeDisciplina, nomeCurso)
                                        let nota = validar.validarNota(recebeN1, recebeN2, recebeN3, recebeN4)
                                        let validarGenA = validar.validarGenero(generoAluno)
                                        let validarGenP = validar.validarGenero(generoProfessor)
                                        let media = calculo.calcularMedia(recebeN1, recebeN2, recebeN3, recebeN4)
                                        let statusAluno = validar.definirStatusAluno()


                                        

                                        
                                        if (nome) {
                                            if (validarGenA && validarGenP) {
                                                if (nota) {
                                                    if (generoAluno === 'masculino' && generoProfessor === 'masculino') {
                                                        console.log("O aluno foi [xxxxxxxxx] na disciplina [ xxxxxxxx ].\nCurso: xxxxxxxx\nProfessor: xxxxxxxx\nNotas do aluno: Nota1, Nota2, Nota3, Nota4, Nota do Exame\nMédia Final: xxxxxx")
                                                        entradaDeDados.close()
                                                    
                                                    } else if (genA === 'feminino' && genP === 'feminino') {
                                                        console.log("O aluno [ xxxxxx ] foi [xxxxxxxxxxx] na disciplina [ xxxxxxxx ].\nCurso: xxxxxxxx\nProfessor: xxxxxxxx\nNotas do aluno: Nota1, Nota2, Nota3, Nota4, Nota do Exame\nMédia Final: xxxxxx")
                                                        entradaDeDados.close()



                                                    } else if (genA === 'masculino' && genP === 'feminino') {
                                                        console.log("O aluno [ xxxxxx ] foi [xxxxxxxxxxxx] na disciplina [ xxxxxxxx ].\nCurso: xxxxxxxx\nProfessor: xxxxxxxx\nNotas do aluno: Nota1, Nota2, Nota3, Nota4, Nota do Exame\nMédia Final: xxxxxx")
                                                        entradaDeDados.close()



                                                    } else if (genA === 'feminino' && genP === 'xxxxxxxxxxxxx') {
                                                        console.log("O aluno [ xxxxxx ] foi [aprovado] na disciplina [ xxxxxxxx ].\nCurso: xxxxxxxx\nProfessor: xxxxxxxx\nNotas do aluno: Nota1, Nota2, Nota3, Nota4, Nota do Exame\nMédia Final: xxxxxx")
                                                        entradaDeDados.close()
                                                    }

                                                } else {
                                                    console.log('erro')
                                                    entradaDeDados.close()
                                                }
                                            } else {
                                                console.log('erro')
                                                entradaDeDados.close()
                                            }
                                        } else {
                                            console.log('erro')
                                            entradaDeDados.close()
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})