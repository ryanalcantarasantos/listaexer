const validarNomes = function(nomeAluno, nomeProfessor, nomeCurso, nomeDisciplina){
    const campos = [nomeAluno, nomeProfessor, nomeCurso, nomeDisciplina]

    return campos.every(campo => 
        typeof campo === 'string' && campo.trim() !== ''
    )
}

const validarGenero = function(GeneroAluno, GeneroProfessor){
    const opcoesValidas = ['masculino', 'feminino']

    
    const alunoOk = typeof GeneroAluno === 'string' && 
                    opcoesValidas.includes(GeneroAluno.toLowerCase().trim())

    
    const professorOk = typeof GeneroProfessor === 'string' && 
                        opcoesValidas.includes(GeneroProfessor.toLowerCase().trim())

    return alunoOk && professorOk
}

module.exports ={
    validarNomes,
    validarGenero
}