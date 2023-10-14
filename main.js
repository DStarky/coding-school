import './src/styles/style.scss'
import { toggleMenu } from './src/scripts/toggleMenu';

const menu = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');


menu.addEventListener('click', () => {
  toggleMenu(menu, navigation)
})