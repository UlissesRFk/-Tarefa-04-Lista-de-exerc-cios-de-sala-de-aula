function calcularPrecoFinal(valorProduto, porcentagemDesconto){
    //let valorDoDesconto = (porcentagemDesconto/100 * valorProduto)
    let valorfinal = valorProduto -(porcentagemDesconto/100 * valorProduto);
    return valorfinal;
}

console.log(calcularPrecoFinal(100,10));