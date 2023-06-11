// Menú hamburgesa
const menuIcon = document.querySelectorAll('.menu__icon');
const nav      = document.querySelector('#nav'); 

// Función de abrir
const menuAppear = ()=>{
    nav.classList.toggle('nav__links--header-active');
};

// invocación de la función
menuIcon.forEach( (i)=>{
    i.addEventListener('click', menuAppear);
});