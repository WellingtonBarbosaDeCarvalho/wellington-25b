// // 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// // primeiro eu tenho que definir um laço que corra do 1
// // fazer uma variavel para receber o resultado 
// // criar uma condição para ignorar o zero
// //


function fatorial(){
    let resultado = 1;
    for(let i = 1; i <= 10; i += 1){
        resultado = resultado * i
}
console.log(resultado)
};
fatorial();

//2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, 
// a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, 
// depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// declaro uma variavel com a palavra desejada.
// criar uma variavel para receber os valores invertidos
// crio um laço for para percorrer do index 0 ao length.
// retorno quer dizer console log 

let palavra = 'xablau';
let palavraInvertida = [];

function invertePalavra(palavra,palavraInvertida)
{
    for(let i = palavra.length -1; i >= 0; i-=1){
    let intersessor = palavra[i];
    palavraInvertida.push(intersessor);
}    console.log(palavraInvertida);
}
invertePalavra(palavra,palavraInvertida)

///Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. 
// Considere o número de caracteres de cada palavra.

//baby steps
//criar uma array para receber a maior palavra e outra array para receber a menor palavra
//percorrer com o laço for pela 'array'
//criar uma estrutura de comparação: se a primeira palavra, for maior que a segunda
//cria uma variavel resultado para receber o retorno da comparação
//
let array = ['java', 'javascript', 'python', 'html', 'css'];

let primeiraPalavra = '';
let segundaPalavra = '';
let validaPalavra = false;
let validaDoisPalavra = false;
let resultadoCompara = '';
function palavraMaior ()

{for(let i = 0; i < array.length; i += 1){
    primeiraPalavra = array[i];
    validaPalavra = primeiraPalavra.length > segundaPalavra.length;
    validaDoisPalavra = primeiraPalavra.length > resultadoCompara.length;

    if(validaPalavra === true){
        resultadoCompara = primeiraPalavra;
    }

    segundaPalavra = array[i];
}
    console.log("---> ", resultadoCompara )
};
palavraMaior()



// encontrar números primos, tenho uma lógica porém depois tento seguir por ela

// function numerosPrimos(numero)
// {
// for(let i = 2; i <= numero; i += 1){
//     let numero = 50;
//     for(let contador = 2; contador < i; contador += 1){
//         let primo = true;
//     if(numero%contador === 0){
//         primo = false;
//         break;
//     }
//     if(primo){
//         console.log(numero)
//     }
// }
// }
// }