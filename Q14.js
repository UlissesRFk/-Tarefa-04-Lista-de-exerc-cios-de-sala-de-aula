let alunos = [
{ nome: "Tiago", nota: 8.5 },
{ nome: "Beatriz", nota: 9.0 },
{ nome: "Lucas", nota: 8.5 },
{ nome: "Jonas", nota: 7.5 },
{ nome: "Mario", nota: 9.5 },
{ nome: "Ulisses", nota: 10 }
];

function calcularMediaTurma(listaAlunos){
    let somaFinal = 0;
    listaAlunos.forEach(aluno => {
        somaFinal = aluno.nota + somaFinal;
        }
    )
    let media = somaFinal/listaAlunos.length;
    return media.toFixed(1);
}

console.log(calcularMediaTurma(alunos));