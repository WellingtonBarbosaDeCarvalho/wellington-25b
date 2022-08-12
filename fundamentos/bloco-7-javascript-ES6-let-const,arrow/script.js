// 🚀 Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.
// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.
// Copie o código abaixo:

// function testingScope(escopo) {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);
  const nEscopo = escopo => {
    if (escopo) {
        ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        console.log(ifScope);
    } const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
  }
nEscopo(true);

// crie uma função que retorne um array em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (evento) => {
return evento.sort((a, b) => {
    if (a > b) return 1;
    if(a < b) return -1;
    return 0
    }
)
};

console.log(sortOddsAndEvens(oddsAndEvens)); // será necessário alterar essa linha 😉