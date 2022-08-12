básicamente a var pode escapar o seu escopo, e isso pode acarretar em problemas futuros, uma função segura o escopo de uma var, porém um for e uma condição if por exemplo já deixa o seu valor escapar, quando declara a var dentro do documento do nosso código
ela automáticamente vai para escopo global, não importando se você fez isso somente no final do seu código, ela volta ao topo e seu valor é declarado para o escopo global, podendo assim interferir de várias formas dentro do seu código, com ecma 6, uma boa prática é você utilizar o 'let & const', let tem a mesma função de uma var, porém dentro de funções de laços for ou até mesmo de condições
ela não deixa escapar do seu escopo, já a const tem a mesma função de uma let, porém com o detalhe de ser uma constante, imutável, 
detalhe importante é que se declarada uma const objeto como ' const obj = {nome: 'maria', idade: 25,}' pode-se alterar o seu valor por sua propriedade, obj.nome="João", interessante não é mesmo ?

agora vamos para o template literals

template literals nada mais é do que uma forma muito mais elegante para você concatenar as suas strings 
veja bem como nós tinhamos aprendido até aqui
const myName = 'Isabella';
console.log('Hello' + ' ' + myName + '!');
isso era bem trabalhoso de se fazer, e inclusive foi bem trabalhoso de se escrever apenas copiando, agora quando você for concaternar strings lembre-se do 'template literals' uma forma além de prática, também muito elegante de se concatenar strings veja no exemplo a seguir: 

const myName = 'Isabella';
console.log(`Welcome ${myName}!`);

veja bem como isso é uma obra divina disfarçada de aprendizado para todos os presentes... muito bom !
ela pede para nós usarmos o sinal de crases no inicio e no final da frase, e variáveis dentro de um ${...}. Você também pode adicionar uma expressão dentro das chaves, como ${a+b}. 
/ Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');



arrow functions

arrow functions nada mais é do que mais uma forma de simplificar as nossas vidas, siga os exemplos abaixo e entenda:
nós aprendemos que declarar funções é muito importante no JS, e separar bem essas funções é ainda mais importante, porém você deve ter se deparado ao usar o famoso VSCODE com seu código piscando vermelho em determinada função;
e oque isso quer dizer ? 
básicamente é o VSCODE te dizendo que sua função esta demasiada grande e que talvez porventura do destino você possa
simplificala um pouquinho;

antes faziamos : 

function sum (a, b) {
	return a+b
};

console.log(sum(10,25)) // 35

ou
function contaPalavras (e) {
	return e.split(' ').length
}

console.log(contaPalavras('Olá Trybers, como estão?')) // 4

