let burger = document.getElementsByClassName('menu__box')[0];
let cards = document.getElementsByClassName('card');

function getClose() {
    burger.classList.toggle('hide');
    for(let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle('card-hide');
    }
}