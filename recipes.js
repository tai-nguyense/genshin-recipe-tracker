const menu = document.querySelector('#menu-icon');
const scrollTopBtn = document.querySelector('#scrollTopBtn');
const content = document.querySelector('#content');
const deck = document.querySelector('#deck');

menu.parentElement.addEventListener('click', function() {
    menu.classList.toggle("open-menu");
});
scrollTopBtn.addEventListener('click', function() {
    content.scrollTo(0, 0);
});

for (let i = 0; i < 10; i++) {
    const newCardSlot = document.createElement('div');
    newCardSlot.className = 'col';

    const newCard = document.createElement('div');
    newCard.className = 'card';

    const newCardPic = document.createElement('img');
    newCardPic.className = 'card-img-top';
    newCardPic.src = 'recipe-img-test.png';
    newCardPic.alt = 'Recipe Image';

    const newCardInfo = document.createElement('div');
    newCardInfo.className = 'card-body';
    const newCardTitle = document.createElement('h5');
    newCardTitle.className = 'card-title';
    newCardTitle.textContent = i;
    const newCardDesc = document.createElement('p');
    newCardDesc.className = 'card-text';
    newCardDesc.textContent = 'Description';

    newCardSlot.appendChild(newCard);

    newCard.appendChild(newCardPic);

    newCard.appendChild(newCardTitle);
    newCard.appendChild(newCardDesc);

    deck.appendChild(newCardSlot);
}