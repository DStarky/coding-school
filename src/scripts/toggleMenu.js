export function toggleMenu(button, menu, entry, backdrop) {
  button.classList.toggle('change');
  menu.classList.toggle('change');
  entry.classList.toggle('change');
  backdrop.classList.toggle('change');
}