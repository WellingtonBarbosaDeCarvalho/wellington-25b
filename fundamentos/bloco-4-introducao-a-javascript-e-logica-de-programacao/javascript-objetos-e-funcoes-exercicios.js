let infoTwo = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Fours Color Comic #178",
  nota: 'O último MacPatinhas'
};
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//   1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

// function boasVindas(n){
//   let retorno = info.personagem;
//   let mensagem = retorno + " Bem-vinda(o) a matrix !"
//   return mensagem
// }
// console.log(boasVindas());

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. 

// function insereObjeto (n){
//   n.recorrente = 'Sim'
//   ;
//   for (let objecto in info)
//   {return n}
//   ;
// }

// console.log(insereObjeto(info))
// console.log(insereObjeto(infoTwo))

//- Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// let object = {
//   saida: 'monotonia',
//   id: 36021,
//   email: 'brócolis@comQueijo.com',
// }
// function retornaChaves (all){
//   for(let key in info){
//     console.log(key);
//   }
// }
// retornaChaves()
// console.log(retornaChaves(object))
// console.log(retornaChaves(info))


//Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

function valorChave (arr){
  for(let index in arr){
  console.log(arr[index])
}
}



// imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
// essa function tem que passar pelo objeto um e trazer a chave e seu primeiro valor 
// depois ela deve pegar somente o valor da chave de outro objeto e colocar ao lado do valor 
// do primeiro objeto,



// function doisValores(m){
//   for(let indexTwo in m){
//     let obj = {indexTwo}
//   }
// }
// console.log(doisValores(infoTwo))


//Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: 
//"O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log("O livro favorito de "+leitor.nome+" "+leitor.sobrenome+" se chama "+ leitor.livrosFavoritos)