// Faça cinco programas, um para cada operação aritmética básica. 
// Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. 
// Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 50;
const b = 2;

//1° adição
console.log(a+b);
//2° subtração
console.log(a-b);
//3° multiplicação
console.log(a*b);
//4̣°divisão
console.log(a/b);
//5° módulo
console.log(a%b);

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const numeroUm = 25;
const numeroDois = 35;

if(numeroUm > numeroDois){
    console.log(numeroUm," é o maior !")
}else {
    console.log(numeroDois," é o maior !")
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const numberOne = 35;
const numberTwo = 12;
const numberThree = 65;

if(numberOne > numberTwo & numberOne > numberThree){
    console.log(numberOne," é o maior!");
}else if (numberTwo> numberOne & numberTwo > numberThree){
    console.log(numberTwo," é o maior!");
}else{
    console.log(numberThree," é o maior!");
}

// Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo,
//  e caso não seja nem positivo e nem negativo retorne "zero".
let acess;
const email = "email@email.com";
const senha = "12348";
const usuarioEmail = "email@email.com";
const usuarioSenha = "1234";

if(usuarioEmail === email & usuarioSenha === senha){
    acess = true;
}if(acess === true){
    console.log("positive");
}else{console.log("negative");
}
// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let trianguloA = 25;
let trianguloB = 35;
let trianguloC = 555;
let resultadoTringualo;

if(trianguloA + trianguloB + trianguloC === 180){
    console.log("angulos triângulos válidos")
}else{
    console.log("angulos triângulos inválidos")
}

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let bishop ="bishop";
const movimentoBishop = 'diagonals';
let clickMoviment = "bishop";
let movimentConvert = clickMoviment.toLowerCase();


if (movimentConvert === "bishop"){
    console.log(movimentoBishop)
}else{
    console.log("movimento inválido");
}

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. 
// Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota;

if(nota >= 90 & nota < 100){
    console.log("nota A")
}else if(nota >= 80 & nota < 90){
    console.log("nota B")
}else if(nota >= 70 & nota < 80){
        console.log("nota C")
}else if(nota >= 60 & nota < 70){
        console.log("Nota D")
}else if(nota >= 50 & nota < 60){
        console.log("nota E");
}else if (nota >= 0 & nota < 50){
    console.log("nota F");
}else{
    console.log("número fora da nossa base de dados")
}




// 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, 
// ele retorna false.

const retornoUm = 53;
const retornoDois = 13;
const retornoTres = 35;

if(retornoUm%2 === 0 || retornoDois%2 === 0 || retornoTres%2 === 0 ){
    console.log(true)
}else{
    console.log(false);
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar.
//  Caso contrário, ele retorna false.

if(retornoUm%2 != 0 || retornoDois%2 != 0 || retornoTres%2 != 0 ){
    console.log(true)
}else{
    console.log(false);
}




// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda.
// A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte 
// do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

let custoProduto = 255.25;
let impostoSobreOcusto = custoProduto *(20/100);
let valorVenda = 400;
let quantidadeVendida = 1000;
let valorCustoTotal = custoProduto + impostoSobreOcusto;
let valorVendaFinal = valorVenda - valorCustoTotal;

let vendaFinal = (valorVendaFinal * quantidadeVendida);

console.log(vendaFinal);

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, 
// dado um salário bruto, calcule o líquido a ser recebido.

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)



// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// 
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salarioBruto = 3000;
let salarioInss;
let salarioIr;
let salarioFinal;

let inssMin = salarioBruto *(8/100);
let inssMedia = salarioBruto *(9/100);
let inssEspecial = salarioBruto *(11/100);
let inssMax = 570.88;

let irMin = salarioBruto *(7.5/100) + 142.80;
let irMedia = salarioBruto *(15/100) + 354.80;
let irEspecial = salarioBruto *(22.5/100) + 636.13;
let irMax = salarioBruto *(27.5/100) + 869.36;


if(salarioBruto >= 0 & salarioBruto <= 1556.95 ){
    salarioInss = salarioBruto - inssMin;
}

else if(salarioBruto >= 1556.95 & salarioBruto <= 2594.92){
    salarioInss = salarioBruto-inssMedia;
}
else if(salarioBruto >= 2594.93 & salarioBruto <= 5189.82){
    salarioInss = salarioBruto-inssEspecial;
}

else{
    salarioInss = salarioBruto-inssMax;
}
//imposto de renda

if(salarioBruto >=1903.99 & salarioBruto <= 2826.65){
    salarioFinal = salarioInss - irMin;
    let salarioFormatado = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(salarioFinal);
    console.log("Salário bruto mensal é: ",salarioFormatado,"Já descontado todos os impostos !")
}else if(salarioBruto >=2826.66 & salarioBruto <= 3751.05 ){
    salarioFinal = salarioInss - irMedia;
    let salarioFormatado = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(salarioFinal);
    console.log("Salário bruto mensal é: ",salarioFormatado,"Já descontado todos os impostos !")
}else if(salarioBruto >= 3751.06 & salarioBruto <= 4664.68){
    salarioFinal = salarioInss - irEspecial;
    let salarioFormatado = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(salarioFinal);
    console.log("Salário bruto mensal é: ",salarioFormatado,"Já descontado todos os impostos !")
}else if(salarioBruto > 4664.68){
    salarioFinal = salarioInss - irMax
    let salarioFormatado = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(salarioFinal);
    console.log("Salário bruto mensal é: ",salarioFormatado,"Já descontado todos os impostos !")
}


// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.



