window.onload = () => {
const menuPrimary = document.querySelector('.headroom');

const options = {
    offset: {
        up: 50,
        down: 100
    },
    classes: {
        initial : "headroom",
        unpinned : "headroom--unpinned",
        pinned : "headroom--pinned",
        top : "headroom--top",
    }
}


const headroom = new Headroom(menuPrimary);

headroom.init();

}

