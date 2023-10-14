import './src/styles/style.scss'
import { toggleMenu } from './src/scripts/toggleMenu';
import { closeMenu } from './src/scripts/closeMenu';

const menu = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
const entryButton = document.querySelector('.header__button');



menu.addEventListener('click', () => {
  toggleMenu(menu, navigation, entryButton)
})

document.addEventListener('click', function (event) {
  if (!(navigation.contains(event.target) || menu.contains(event.target))) {
    closeMenu(menu, navigation, entryButton);
  } else if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON' && navigation.contains(event.target)) {
    closeMenu(menu, navigation, entryButton);
  }
});