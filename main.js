class ContaBancaria {
    //Acionei um constructor,com as informaçoes pedidas 
    constructor(numero,titular,saldoInicial = 0){
        this.numero;
        this.titular;
        this.saldoInicial; 
        this.historicoTransacoes = [];
    }
    //criando o metódo depositar
    depositar(valor){
        this.saldoInicial =+ valor
        }
        
        depositar(depositar){
            this.saldo += valor
        }

        sacar(valor){
            if(this.saldo -= valor){
                consle.log("Saque": =- valor);
                else
            }
        }
}

const minhaConta = new ContaBancaria(158, "Jemissom Santos", 35);