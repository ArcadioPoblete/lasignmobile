const qryButtons = document.querySelectorAll('.list-mobile__button--main');
const bttnMenu = document.getElementById('menu-mobile');
const menuMobile = document.getElementById('menuMobile');
const closeMenu = document.getElementById('button-close');


bttnMenu.addEventListener('click', () => {
    menuMobile.classList.remove('close-mobile');
});

closeMenu.addEventListener('click', () => {
    menuMobile.classList.add('close-mobile');
});


qryButtons.forEach((item) => {
    item.addEventListener('click', () => {
        var submenu = document.getElementById(item.dataset.button);
    
        if (submenu.dataset.submenu == 'false') {
            submenu.dataset.submenu = 'true';
        } else {
            submenu.dataset.submenu = 'false';
        }

        if (submenu.dataset.submenu == 'true') {
                submenu.classList.remove('close__submenu');
        } else {
                submenu.classList.add('close__submenu');
        }

    });
});