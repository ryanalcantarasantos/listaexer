const readline = require ("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout     
})

entradaDeDados.question('Qual é o nome do aluno?:', function(nomeAluno){
    let nomeA = nomeAluno

    entradaDeDados.question('Qual é o nome do professor:', function(nomeProfessor){
        let nomeP = nomeProfessor

        entradaDeDados.question('Qual é o genero do aluno?:', function(GeneroAluno){
            let genA = GeneroAluno

            entradaDeDados.question('Qual é o genero do professor?:', function(GeneroProfessor){
                let genP = GeneroProfessor

                entradaDeDados.question('Qual é o nome do curso?:', function(nomeCurso){
                    let nomeC = nomeCurso

                    entradaDeDados.question('Qual é o nome da disciplina?:', function(nomeDisciplina){
                        let nomeD = nomeDisciplina

                        entradaDeDados.question('Qual é a nota 1?:', function(nota1){
                            let n1 = nota1

                            entradaDeDados.question('Qual é a nota 2?:', function(nota2){
                                let n2 = nota2

                                entradaDeDados.question('Qual é o valor da nota 3?:', function(nota3){
                                    let n3 = nota3

                                    entradaDeDados.question('Qual é o valor da nota 4?:', function(nota4){
                                        let n4 = nota4
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