import Headroom from 'headroom.js';

window.onload = () => {
    const menu = document.getElementById('header');
    const headroom = new Headroom(menu, {
        offset: 0,
        classes: {
            initial : "headroom",
            pinned : "headroom--pinned",
            unpinned : "headroom--unpinned",
            top : "headroom--top"
        }
    });

    headroom.init();

};