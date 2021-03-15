const optionsMaq = document.querySelectorAll('.options');
const selectText = document.querySelectorAll('.select__text');

optionsMaq.forEach((item) => {
    item.addEventListener('click', () => {
        selectText.forEach((text) => {
            
            const option = item.dataset.option;
            const select = text.dataset.select;

            if (option == select) {
                text.innerHTML = item.innerHTML;
            } else {  
                text.innerHTML = text.innerHTML;
            }   
        });

    })
});