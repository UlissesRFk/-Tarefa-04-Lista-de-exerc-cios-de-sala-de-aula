const produto = 
    {
        nome: "Macaxeira",
        preco: 33.43,
        emEstoque: true,

    calcularTotalEstoque(quantidadeDesejada){
    let precoFinal = this.preco * quantidadeDesejada;
    return precoFinal.toFixed(2);
    }
};
const total =  produto.calcularTotalEstoque(3);
console.log(`O valor do produto é: ${produto.preco} \n Valor total: ${total}` );

