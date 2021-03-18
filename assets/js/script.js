window.onload = () => {

    // Toggle Menu
    let menu = document.querySelector('.menu-mobile');
    let toggle = document.querySelector('.toggle');
    let close = document.querySelector('.close');

    menu.style.display = 'none';

    toggle.addEventListener('click', show);
    close.addEventListener('click', hide);

    function show() {
        menu.style.display = 'flex';
        menu.style.left = '0';
    }

    function hide() {
        menu.style.left = '100%';
    }
}