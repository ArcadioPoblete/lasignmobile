const buttonDrop = document.querySelectorAll('.menu__item');
const options = document.querySelectorAll('.button-main__options');


buttonDrop.forEach((item) => {
    item.addEventListener('mouseover', () => {
        var dropButton = item.dataset.menu;

        options.forEach((menu) => {

            if (menu.id == dropButton) {
                document.getElementById(menu.id).classList.add('show');
            }
        });
    });

    item.addEventListener('mouseout', () => {
        var dropButton = item.dataset.menu;
        options.forEach((menu) => {
            if (menu.id == dropButton) {
                document.getElementById(menu.id).classList.remove('show');
            }
        });
    });
});

