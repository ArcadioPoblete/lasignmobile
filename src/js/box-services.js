const buttons = document.querySelectorAll('.btn-service');


if (buttons) {
    buttons.forEach(item => {
        item.addEventListener('mouseover', () => {
            var boxId = item.dataset.box;
            const box = document.getElementById(boxId);
    
            box.classList.remove('img-service');
           
        });
    
    
        item.addEventListener('mouseout', () => {
            var boxId = item.dataset.box;
            const box = document.getElementById(boxId);
    
            box.classList.add('img-service');
           
        });
    });
} 






