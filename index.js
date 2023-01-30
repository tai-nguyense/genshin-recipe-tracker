const menu = document.querySelector('#menu-icon');
const scrollTopBtn = document.querySelector('#scrollTopBtn');
const content = document.querySelector('#content');

menu.parentElement.addEventListener('click', function() {
    menu.classList.toggle("open-menu");
});
scrollTopBtn.addEventListener('click', function() {
    content.scrollTo(0, 0);
});