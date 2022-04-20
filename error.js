let menu = document.querySelector('.menu-icon');
let navigationmenu = document.querySelector('.menu');

menu.onclick = () => {
    navigationmenu.classList.toggle('active');
    menu.classList.toggle('move');
}