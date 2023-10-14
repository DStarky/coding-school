import './src/styles/style.scss'
import { toggleMenu } from './src/scripts/menu';

const menu = document.querySelector('.menu');


menu.addEventListener('click', () => {
  toggleMenu(menu)
})