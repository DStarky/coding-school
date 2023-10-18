export const playVideo = () => {
  const button = document.querySelector('.video__button');
  const text = document.querySelector('.video__text');
  const backdrop = document.querySelector('.video__backdrop');
  const video = document.querySelector('.video__video');

  button.addEventListener('click', () => {
    video.style.display = 'block';
    button.style.display = 'none';
    backdrop.style.display = 'none';
    text.style.display = 'none';
  })

}