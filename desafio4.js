function acontece(arrAlunos, qtdMinima) {
    var alunosPontuais = 0;
    for (var aluno of arrAlunos) {
        if (aluno <= 0)
            alunosPontuais++;
    }

    return alunosPontuais >= qtdMinima;
}

function aberturas(arrAlunosDias, qtdMinima){
    var arrDiasComAulas = [];
    for (var alunosDia of arrAlunosDias) {
        arrDiasComAulas.push(acontece(alunosDia, qtdMinima));
    }

    return arrDiasComAulas;
}

// 0 = aluno pontual, -1 = aluno adiantado, 1 = aluno atrasado
var arrDiasComAulas = aberturas(
    [
        [0, 0, 0],   //Dia 1
        [-1, 0, -1], //Dia 2
        [1, 1, 1]    //Dia 3
    ], 2 //Mínimo de alunos para contecer uma aula
);

console.log(arrDiasComAulas);