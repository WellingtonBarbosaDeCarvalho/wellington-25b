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
    console.log(numberOne," é o maior!")
}else if (numberTwo> numberOne & numberTwo > numberThree){
    console.log(numberTwo," é o maior!")
}else{
    console.log(numberThree," é o maior!");
}

