import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";



//Cliente 1
const cliente1 = new Cliente();
cliente1.nome = "Márcio";
cliente1.sobrenome = "Reis"
cliente1.cpf = 11122233309;
cliente1.rg = 343455672;
cliente1.cep = 93005900;
cliente1.endereco = "Est. São João, 100";
cliente1.bairro = "Sto. Amaro"
cliente1.cidade = "São Paulo"
cliente1.estado = "SP"

//Conta Corrente Cliente 1
const contaCorrenteMarcio = new ContaCorrente();

contaCorrenteMarcio.banco = 1005;
contaCorrenteMarcio.agencia = 1001;
contaCorrenteMarcio.digito = 9;
contaCorrenteMarcio.cliente = cliente1;

const valorSacado = contaCorrenteMarcio.sacar(50);
contaCorrenteMarcio.depositar(500);




//Cliente 2
const cliente2 = new Cliente();
cliente2.nome = "Joice";
cliente2.sobrenome = "Silva"
cliente2.cpf = 114422309309;
cliente2.rg = 14334455672;
cliente2.cep = 193453000;
cliente2.endereco = "Av. Paulista, 15";
cliente2.bairro = "Consoloção"
cliente2.cidade = "São Paulo"
cliente2.estado = "SP"

//Conta Corrente Cliente 2
const conta2 = new ContaCorrente();
conta2.banco = 10011;
conta2.agencia = 1018;
conta2.digito = 7;
conta2.cliente = cliente2;


let valor = 200;
contaCorrenteMarcio.transferir(valor, conta2);

console.log(cliente2);




