// Lógica
// 1 - Selecionar elementos que devem ser animados
// 2 - Definir a classe que é adicionada durante a animação
// 3 - Criar função de animação
// 3.1 - Verificar a distância entre a barra de scroll e o topo do site
// 3.2 - Verificar se a distância do 3.1 + Offset é maior do que a distância entre o elemento e o Topo da Página.
// 3.3 - Se verdadeiro adicionar classe de animação, remover se for falso.
// 4 - Ativar a função de animação toda vez que o usuário utilizar o Scroll
// 5 - Otimizar ativação
// Debounce do Lodash

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.scrollY + (window.innerHeight * 3) / 4;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

animeScroll();

if (target.length) {
  window.addEventListener('scroll', function () {
    animeScroll();
  });
}


const myObserver = new IntersectionObserver ( (entries) =>{
entries.forEach( (entry) =>{
  if(entry.isIntersecting){
    entry.target.classList.add('show')
  } else {
    entry.target.classList.remove('show')
  }
  
})

})

const elements = document.querySelectorAll('.hidden')

elements.forEach ( (element) => myObserver.observe(element))

document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.getElementById('toggleSwitch');

  toggleSwitch.addEventListener('change', function () {
    const body = document.body;
    const pretoTextElements = document.querySelectorAll('.preto');
    const Tcor1TextElements = document.querySelectorAll('.Tcor1');
    const Transicao1 = document.querySelectorAll('.Transiçãocor1');
    const Transicao2 = document.querySelectorAll('.Transiçãocor2');



    body.style.backgroundColor = this.checked ? '#333333' : '#D9D9D9';

    pretoTextElements.forEach(function (element) {
      element.style.color = toggleSwitch.checked ? 'white' : 'black' ;
    });

    Tcor1TextElements.forEach(function (element) {
      element.style.color = toggleSwitch.checked ? '#AFA5FC' : '#3A3757';
    });

    Transicao1.forEach(function (element) {
      element.style.color = toggleSwitch.checked ? '#AFA5FC' : '#392BFF';
    });

    Transicao2.forEach(function (element) {
      element.style.color = toggleSwitch.checked ? '#A3C4FF' : '#AFA5FC';
    });
  });
});
