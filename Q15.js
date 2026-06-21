class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    obterDescricao(){
        return `Este carro é um ${this.marca}, ${this.modelo} e ano ${this.ano}`;
    }
}

const carro1 = new Carro("Honda", "Civic", 2023);
console.log(carro1.obterDescricao());