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
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  for(let index = 0; index < decemberDaysList.length; index += 1){
      let criaItem = decemberDaysList[index];
      
      let seleciona = document.querySelector('#days');
      let listDays = document.createElement('li');
      let incrementa = seleciona.appendChild(listDays)

        listDays.innerText = criaItem;
  }