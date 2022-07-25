
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [54, 4, 34, 198, 70, 8, 100, 2, 354, 274];

// for(num of numbers){
//     console.log(num)
// }
// // Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// console.log("====================================================================================================================================");
// console.log("=============== Para o segundo exercício, some todos os valores contidos no array e imprima o resultado ============================");
// console.log("====================================================================================================================================");

// let resultado = 0;

// for(i = 0; i < numbers.length; i += 1){
//     resultado += numbers[i];
// }
// console.log(resultado);
// // Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// console.log("====================================================================================================================================");
// console.log("=============== Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array ============================");
// console.log("====================================================================================================================================");

// let resultadoAritmetico = 0;

// for(i = 0; i < numbers.length; i += 1){
//     resultadoAritmetico += numbers[i]/numbers.length;
// } console.log(resultadoAritmetico);


// // Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". 
// // Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// console.log("====================================================================================================================================");
// console.log("Para o quarto exercicio use o mesmo código acima, caso o valor seja maior que 20 imprima uma mensagem, caso não, imprima outra mensagem");
// console.log("====================================================================================================================================");

// if (resultadoAritmetico > 20){
//     console.log("valor maior que 20")
// }else {
//     console.log("valor menor que 20")
// }

// // 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// console.log("====================================================================================================================================");
// console.log("================Para o quinto exercicio Utilizando for, descubra qual o maior valor contido no array e imprima-o ==================");
// console.log("====================================================================================================================================");

// let comparador = 0;
// let comparadorDois = 0;
// let comparadorAlfa = false;
// let comparadorBeta = false;
// let resultando = 0;

// for(i = 0; i < numbers.length; i += 1 ){

//     comparador = numbers[i];

//     comparadorAlfa = comparador > comparadorDois;
//     comparadorBeta = comparador > resultando;
//     if(comparadorAlfa === true & comparadorBeta === true ){
//         resultando = comparador;
//     }
//     comparadorDois = numbers[i];
// }
// console.log(resultando)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// let resultadosImpares = 0;
// let endImpares = 0;

// for(let i = 0; i < numbers.length; i+=1){
//     resultadosImpares = numbers[i]
//     if(resultadosImpares%2 != 0){
//         endImpares += 1;
//     }
// }
// console.log(endImpares);

// if(endImpares === 0){
//     console.log("nenhum valor ímpar encontrado");
// }

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// let conOne = 0;
// let conTwo = 0;
// let conValid = false;
// let conValidation = false;
// let contResult = 30000;

// for(let i = 0; i < numbers.length; i += 1){
//     conOne = numbers[i];
//     conValid = conOne < conTwo;
//     conValidation = conOne < contResult;
//     if(conValid === true && conValidation === true){
//         contResult = conOne;
//     }

//     conTwo = numbers[i]
// } 
// console.log(contResult);


// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let doZeroAoCem = [];

for(let i = 1; i <= 25; i+=1 ){
    doZeroAoCem.push(i);
}console.log(doZeroAoCem)

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
let zeroDivido = [];

for(let i = 0; i < doZeroAoCem.length; i += 1){
    zeroDivido.push(doZeroAoCem[i]/2);
}console.log(zeroDivido)