function gerarCracha(nome, departamento, id){
    let mensagem = `[${id}] - ${nome}: ${departamento}`;
    return mensagem;
}

console.log(gerarCracha("Abaaaa", "Agronomia", 232));