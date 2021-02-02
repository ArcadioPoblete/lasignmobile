var btnmenu = document.getElementById('btn-menu');
var layout = document.querySelector('.layout-hide ');
var menu = document.querySelector('.container-nav-mobile');
var closeMenu = document.querySelector('.btn-close-menu');


btnmenu.addEventListener('click', () => {
    if (layout.classList.contains('d-none')) {

        layout.classList.remove('d-none');
        menu.classList.add('show-menu');

    } else {

        layout.classList.add('d-none');
        menu.classList.remove('show-menu');
    }
});

closeMenu.addEventListener('click', () => {

    if (!layout.classList.contains('d-none')) {

        layout.classList.add('d-none');
        menu.classList.remove('show-menu');

    } else {

        layout.classList.remove('d-none');
        menu.classList.add('show-menu');
    }

});