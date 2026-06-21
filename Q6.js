function verificarAcesso(senhaDigitada, senhaCadastrada){
    let semEspaco1 = senhaDigitada.trim();
    let semEspaco2 = senhaCadastrada.trim();

    let minuscula1 = semEspaco1.toLowerCase();
    let minuscula2 = semEspaco2.toLowerCase();

    if(minuscula1 === minuscula2){
        return true;
    }else{
        return false;
    }
}

console.log(verificarAcesso("dhdhhhh","  Dhdhhhh  "));