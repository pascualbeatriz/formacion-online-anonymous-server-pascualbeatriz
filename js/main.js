'use strict';


let collapsible = document.querySelector('.page__header');
// collapsible.classList.add('page__header-open');
const buttonMenu = document.querySelector('.nav-trigger');
const navMenu = document.querySelector('.nav');
const buttonCloseMenu = document.querySelector('.nav-close');


function openNav (){
  console.log('yay');
  const buttonAct = event.currentTarget.parentElement;
  buttonAct.classList.toggle('page__header-open');

  if (buttonAct.classList.contains('page__header')) {
    buttonAct.parentElement.classList.remove('page__header-open');
  }else{
    buttonAct.parentElement.classList.add('page__header-open');
  }
}

function closeNav () {
  // const buttonClose = event.currentTarget;
  document.getElementsByClassName('nav').innerHTML = '';
  navMenu.remove();
  console.log('hay');  
}






// option1
// function openNav (event) {
//     event.preventDefault();
//     if (window.getComputedStyle(menu).display === 'block') {
//       menu.style.display = 'none';
//     } else {
//       menu.style.display = 'block';
//     }
// }

buttonMenu.addEventListener('click', openNav);
buttonCloseMenu.addEventListener('click', closeNav);
