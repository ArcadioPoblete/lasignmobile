const btnSelect = document.querySelectorAll('.btn-select');
const listSelect = document.querySelectorAll('.dawn-list');




btnSelect.forEach((item) => {
    listSelect.forEach((list) => {
        const button = item.dataset.select;
        const menu = list.dataset.list;

        item.addEventListener('click', () => {
            if(button == menu){
                    list.classList.add('showMenu');
            }
        });

    });
});