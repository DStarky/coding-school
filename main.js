import './src/styles/style.scss'
import { toggleMenu } from './src/scripts/toggleMenu';
import { closeMenu } from './src/scripts/closeMenu';
import { gridLastChild } from './src/scripts/gridLastChild';
import { playVideo } from './src/scripts/playVideo';

const menu = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
const entryButton = document.querySelector('.header__button');



menu.addEventListener('click', () => {
  toggleMenu(menu, navigation, entryButton)
})

document.addEventListener('click', function (event) {
  const { target } = event;

  if (!(navigation.contains(target) || menu.contains(target))) {
    closeMenu(menu, navigation, entryButton);
  } else if (target.tagName === 'A' || target.tagName === 'BUTTON' && navigation.contains(target)) {
    closeMenu(menu, navigation, entryButton);
  }
});


gridLastChild();
playVideo();