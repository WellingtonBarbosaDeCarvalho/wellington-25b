function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
    
    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
      
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  //   Crie um calendário dinamicamente.
  // O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro.
  //  Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
  function diasDoMes (){let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  for(let index = 0; index < decemberDaysList.length; index += 1){
      let criaItem = decemberDaysList[index];

      let seleciona = document.querySelector('#days');
      let listDays = document.createElement('li');
      let incrementa = seleciona.appendChild(listDays)
      listDays.innerText = criaItem;


  }}
  diasDoMes();

//   Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"


function feriados(){
let achaContainer = document.querySelector('.buttons-container');
let criaButton = document.createElement('button');
let incrementaButton = achaContainer.appendChild(criaButton);
incrementaButton.innerText="Feriados";
incrementaButton.classList.add('btn-holiday');}
feriados();
document.querySelectorAll('li')[15].classList.add('holiday')
document.querySelectorAll('li')[21].classList.add('holiday')
document.querySelectorAll('li')[24].classList.add('holiday')
document.querySelectorAll('li')[33].classList.add('holiday')

function displayHolidays() {
    let getHolidayButton = document.querySelector('.btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    });
  }

  displayHolidays();

  function createFridayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton); //adiciona o botão como filho do container de botões
  }
createFridayButton('Sexta-Feira');
//classe Sexta
let encontraSexta = document.querySelectorAll('li');
let pegaSextou = [];
for(let iTwo = 14; iTwo < encontraSexta.length; iTwo += 7){
    pegaSextou = encontraSexta[iTwo];
    pegaSextou.classList.add('friday')
}


let decemberFridays = [ 4, 11, 18, 25 ];

function displayFridays(fridaysArray) {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/';
  
    getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
          //caso o texto não tenha sido substituído, ao clicar no botão ele será substituido pelo novo texto;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
          //caso o texto já tenha sido substituído, ao clicar no botão ele volta ao texto padrão.
        }
      }
    });
  }

displayFridays(decemberFridays);

// function clickFeriado(){
//     let encontraHoliday = document.querySelectorAll('.holiday');
//     for(let index = 0; index < encontraHoliday.length; index += 1){
//         let holidays = encontraHoliday[index];
//         holidays.style.backgroundColor= 'rgb(105,105,105)';
//         holidays.style.color='white';
//     }
    
// }
// console.log(clickFeriado());

window.onload = function(){
    // let feriado = document.querySelector('.btn-holiday');
    // feriado.addEventListener('click', clickFeriado);
    // let sextou = document.querySelector('.buttonSexta');
    // sextou.addEventListener('click', mudaSexta);
    
      //  exercicio 6 evento de target na lista de dias 
    let pegaNovo = document.querySelector('#days');
    let pegaNovoNovo = pegaNovo.querySelectorAll('li')
        for(let iTwo = 0; iTwo < pegaNovoNovo.length; iTwo += 1  ){
            let recebePegaNovoNovo = pegaNovoNovo[iTwo]

            recebePegaNovoNovo.addEventListener('mouseenter', function(){
            recebePegaNovoNovo.style.transition='0.3s'; 
            // recebePegaNovoNovo.style.padding='20px';
            // recebePegaNovoNovo.style.webkitTextStrokeWidth='2px';
            recebePegaNovoNovo.style.webkitTextStrokeColor='red';
            recebePegaNovoNovo.style.webkitMaskComposite='20px';
            recebePegaNovoNovo.style.fontSize="85px";})
        
            recebePegaNovoNovo.addEventListener('mouseleave', function(){
            recebePegaNovoNovo.style.transition='0.9s';
            recebePegaNovoNovo.style.padding='0px';
            recebePegaNovoNovo.style.webkitTextStrokeWidth='0px';
            recebePegaNovoNovo.style.webkitTextStrokeColor='black';
            recebePegaNovoNovo.style.webkitMaskComposite='0px';
            recebePegaNovoNovo.style.fontSize="25px";
            }
            )
        }
        /// exercicio 7 implementar evento no botão adicionar 
        let encontraAdd = document.querySelector('#btn-add');
        encontraAdd.addEventListener('click', adicionaTarefa);
        // encontraAdd.addEventListener('click', adcDiv('red'));
    //     let encontraDiv = document.querySelector('.task');
    //     encontraDiv.addEventListener('click', function(){
    //         encontraDiv.classList.remove('task');
    //         encontraDiv.classList.add('task-selected');
    //     })
    }



// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
// function criaSexta(){
// let encontraSexta = document.querySelector('.buttons-container')
// let criaSexta = document.createElement('button');
// let incrementaSexta = encontraSexta.appendChild(criaSexta);
// incrementaSexta.innerText="Sexta-feira";     
// incrementaSexta.classList.add('buttonSexta')
// }
// criaSexta()

// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. 
// Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras
// function mudaSexta () {let encontraDias = document.querySelectorAll('li');
// for(let indexTwo = 14; indexTwo < encontraDias.length; indexTwo += 7){
//     let pegaSexta = encontraDias[indexTwo];
//     pegaSexta.classList.add('sexta-feira');
//     pegaSexta.style.backgroundColor='rgb(124,252,0)';
//     pegaSexta.style.color='white';
// }}

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, 
// o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
//


// Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa 
// (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
const elementoTask = document.querySelector('.task-list');
const elementoInput = document.querySelector('input');
const elementoButton = document.querySelector('#btn-add');
// console.log(elementoInput);
// console.log(elementoTask);
// console.log(elementoButton);


let tarefas = [];
let pegaPega = [];
// console.log(tarefas);
function mostraTarefas(){
    for ( tarefa of tarefas)
    {       //adiciona span 
        const elementoTarefa = document.createElement('span');
        const adicionaSpan = elementoTask.appendChild(elementoTarefa);
        //cria ul
        const encontraUl = document.querySelector('span');
        const criaUl = document.createElement('ul');
        adicionaSpan.appendChild(criaUl)
        //cria Li
        const pegaUl = encontraUl.querySelector('ul');
        const criaLi = document.createElement('li');
        const textoTarefa = document.createTextNode(tarefa);
        // elementoTarefa.style.float='left';
        elementoTarefa.style.alignContent='left';

        criaLi.appendChild(textoTarefa);
        criaUl.appendChild(criaLi);
    }
}



function adicionaTarefa (){
    const textoTarefa = elementoInput.value;
    tarefas.push(textoTarefa);
    mostraTarefas()
}
//Implemente uma função que adicione uma legenda com cor para a tarefa.
//Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.
//O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function criaDiv (cor){
    let selecionaDiv = document.querySelector('.my-tasks');
    let createDiv = document.createElement('div');
    let incrementaDiv = selecionaDiv.appendChild(createDiv)
    createDiv.style.backgroundColor=cor;
    createDiv.style.fontWeight='85px';
    createDiv.style.borderRadius='50%';
    createDiv.style.backgroundColor='red';
    let textoDiv = document.createTextNode('Projeto One: ');
    selecionaDiv.appendChild(textoDiv);
    selecionaDiv.appendChild(createDiv);
    createDiv.classList.add('task');
    
}
criaDiv ('red');

// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, 
// ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  }
  setTaskClass();

  function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
        event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
      } else if (eventTargetColor === taskColor) {
        event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
      }
    });
  }

  setDayColor()