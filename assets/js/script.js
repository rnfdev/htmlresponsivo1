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

    let banner = document.querySelector('.banner');
    let viewWidth = window.innerWidth;

    if(viewWidth > 768) {
        banner.style.backgroundImage = "url('assets/img/bg-banner-desktop.png')";
    } else {
        banner.style.backgroundImage = "none";
    }
}

let viewWidth = window.innerWidth;
let banner = document.querySelector('.banner');
window.addEventListener('resize', function() {
    viewWidth = window.innerWidth;
    if(viewWidth > 768) {
        banner.style.backgroundImage = "url('assets/img/bg-banner-desktop.png')";
    } else {
        banner.style.backgroundImage = "none";
    }
});