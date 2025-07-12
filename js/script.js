//Def de variables generales 
const navMobile = document.querySelector('.navMobile');


// Este script adds a slim class to the header, login icon, and logo image when the user scrolls down the page.
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  const loginIcon = document.querySelector('.header__loginIcon');
  const logoImg = document.querySelector('.header__logo');

  if (window.scrollY > 50) {
    header.classList.add('slim');
    loginIcon.classList.add('slim');
    logoImg.classList.add('slim');
    navMobile.classList.add('slim');
    
} else {
    header.classList.remove('slim');
    loginIcon.classList.remove('slim');
    logoImg.classList.remove('slim');
    navMobile.classList.remove('slim');
  }
});


// este script abre y cierra el menú hamb
const hamburgerBtn = document.querySelector('.header__navButton');
const hamburgerNavBtn = document.querySelector('.navMobile__navButton');

hamburgerBtn.addEventListener('click', () => {
  navMobile.classList.toggle('navMobile--open'); //definida al inicio
});
hamburgerNavBtn.addEventListener('click', () => {
  navMobile.classList.toggle('navMobile--open');
});
