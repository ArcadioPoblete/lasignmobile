const btnMobile = document.getElementById('menu-mobile');
const closeMenu = document.getElementById('close-menu');
const menu = document.getElementById('menu');

btnMobile.addEventListener('click', () => {
    menu.classList.remove('close');
});
closeMenu.addEventListener('click', () => {
    menu.classList.add('close');
});