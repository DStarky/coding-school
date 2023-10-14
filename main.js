import './src/styles/style.scss'
import { toggleMenu } from './src/scripts/toggleMenu';

const menu = document.querySelector('.menu');


menu.addEventListener('click', () => {
  toggleMenu(menu)
})