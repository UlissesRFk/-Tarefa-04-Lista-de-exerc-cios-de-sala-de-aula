class ContaBancaria {
    constructor(titular){
        this.titular = titular;
        this.saldo = 0;
    }

    depositarValor(valorRecebido){
        this.saldo += valorRecebido;
    }

    sacar(valorRetirado){
        if(valorRetirado <= this.saldo){
            this.saldo -= valorRetirado;
        }else{
            console.log(`Saldo insuficiente para o saque de R$${valorRetirado} \nSeu saldo é de R$${this.saldo}`);
        }
    }
}

const minhaConta = new ContaBancaria("Prof. Wellington");
minhaConta.depositarValor(100);
minhaConta.sacar(150);