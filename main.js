import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import './src/styles/style.scss'
import { toggleMenu } from './src/scripts/toggleMenu';
import { closeMenu } from './src/scripts/closeMenu';
import { gridLastChild } from './src/scripts/gridLastChild';
import { playVideo } from './src/scripts/playVideo';

const menu = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
const entryButton = document.querySelector('.header__button');
const backdrop = document.querySelector('.backdrop');



menu.addEventListener('click', () => {
  toggleMenu(menu, navigation, entryButton, backdrop)
})

document.addEventListener('click', function (event) {
  const { target } = event;

  if (!(navigation.contains(target) || menu.contains(target))) {
    closeMenu(menu, navigation, entryButton, backdrop);
  } else if (target.tagName === 'A' || target.tagName === 'BUTTON' && navigation.contains(target)) {
    closeMenu(menu, navigation, entryButton, backdrop);
  }
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

gridLastChild();
playVideo();