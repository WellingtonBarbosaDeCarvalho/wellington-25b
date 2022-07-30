    //   🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
    function adicionaH1()
    {
    let container = document.querySelector('body'); 
    let criaElemento = document.createElement('h1');
    let incrementaElemento = container.appendChild(criaElemento);
    let edit = document.querySelector('h1').innerText = "DESPERTE SEU DOM";
    return edit;
    }
    adicionaH1()

    // Adicione a tag main com a classe main-content como filho da tag body;
    function criaTag ()
    {const body = document.body;
    const cria = document.createElement('main');
    body.appendChild(cria)
    document.querySelector('main').classList.add("main-content"); return cria;}

    criaTag()

    // 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
    function secTion (){const section = document.querySelector('.main-content');
    const sectionCreate = document.createElement('section');
    section.appendChild(sectionCreate)
    document.querySelector('section').classList.add('center-content')};
    secTion()
    // 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
    function paraGrafo (){const paragrafo = document.querySelector('.center-content');
    const paragrafoTexto = document.createElement('p');
    paragrafo.appendChild(paragrafoTexto);
    document.querySelector('p').innerText="VOCÊ CONHECE O FINAL DA FÁBULA ? PERGUNTA PRA LEBRE SOBRE A TARTARUGA, HISTÓRIA BEM FRENÉTICA."
    document.querySelector('p').style.color="white";
    return paragrafoTexto;}
    paraGrafo()
    // Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
    function lefT (){
    const leftContent = document.querySelector('.main-content');
    const leftCreate = document.createElement('section');
    leftContent.appendChild(leftCreate);
    document.getElementsByTagName('section')[1].classList.add('left-content')
    return leftCreate}
    lefT()
    // Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
    function righT (){
    const rightContent = document.querySelector('.main-content');
    const rightCreate = document.createElement('section');
    rightContent.appendChild(rightCreate);
    document.getElementsByTagName('section')[2].classList.add('right-content')
    return rightCreate;}
    righT()
    // Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image.
    //  Esse elemento deve ser filho do section criado no passo 5;
    function adcImg (){const indexImg = document.querySelector('.left-content');
    const imgCont = document.createElement('img');
   
    indexImg.appendChild(imgCont)
    document.querySelector('img').classList.add('small-image');
    document.querySelector('.small-image').src="https://picsum.photos/200";
    return imgCont;}
    adcImg()
    // Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. 
    // Essa lista deve ser filha do section criado no passo 6;
    
    function criaUl(li){
       const encontraUl = document.querySelector('.right-content');
       const creatUl = document.createElement('ul');
       encontraUl.appendChild(creatUl)
       let selecT = document.querySelector('ul')
       let arr = ["Um","dois","três","quatro","cinco","seis","sete","oito","nove","deZ"];
    for(let index = 0; index < arr.length; index += 1){
        let criaItem = arr[index];
        let criaLi = document.createElement('li');
        criaLi.innerText = criaItem;
    selecT.appendChild(criaLi)

    // console.log(criaLi)
    }
}
    criaUl()

    // Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

    function criah3(){
        const encontraH3 = document.querySelector('.main-content');
    const criaH3 = document.createElement('h3')
    let incrementoH3 = encontraH3.appendChild(criaH3);
    incrementoH3.innerText="Primeiro titulo";
    incrementoH3.classList.add('primeiro-titulo');
        const criah3Dois = document.querySelector('.main-content');
    const vamosLa = document.createElement('h3');
    let incrementaDois = criah3Dois.appendChild(vamosLa)
    incrementaDois.innerText="Segundo titulo";
    incrementaDois.classList.add('segundo-titulo')
        const encontraH3Tres = document.querySelector('.main-content');
    const criaH3Tres = document.createElement('h3');
    let incrementaTres = encontraH3Tres.appendChild(criaH3Tres);
    incrementaTres.innerText="Terceiro Titulo";
    }
    criah3()



  
    