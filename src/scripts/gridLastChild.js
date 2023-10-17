export const gridLastChild = () => {
  const cardsContainer = document.querySelector('.cards__list');
  const cards = cardsContainer.querySelectorAll('.cards__item');

  if (cards.length % 2 !== 0) {
    cards[cards.length - 1].classList.add('full-width');
  }
}