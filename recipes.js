const menu = document.querySelector('#menu-icon');
const scrollTopBtn = document.querySelector('#scrollTopBtn');
const content = document.querySelector('#content');
const search = document.querySelector("#search");
const searchBox = document.querySelector("#searchBox");
const searchBtn = document.querySelector("#searchBtn");
const cards = document.querySelectorAll(".card");

menu.parentElement.addEventListener('click', function() {
    menu.classList.toggle("open-menu");
});
scrollTopBtn.addEventListener('click', function() {
    content.scrollTo(0, 0);
});

//filter cards
searchBox.addEventListener('input', function() {
    let searchValue = searchBox.value.toLowerCase();
    for (let i = 0; i < cards.length; i++) {
        let cardTitle = cards[i].textContent.toLowerCase();
        if (cardTitle.includes(searchValue)) {
            cards[i].classList.remove('d-none');
        } else {
            cards[i].classList.add('d-none');
        }
    }
})