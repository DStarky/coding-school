export const modalLogic = () => {

  const firstModal = document.querySelector('.modal-1');
  const secondModal = document.querySelector('.modal-2');
  const thirdModal = document.querySelector('.modal-3');
  const body = document.querySelector('body');
  const modals = document.querySelectorAll('.modal');
  const backdrop = document.querySelector('.backdrop');
  const closeButtons = document.querySelectorAll('.test__close-button');

  const startTestButton = document.getElementById('to-2-modal');
  const answerButton = document.getElementById('to-3-modal');
  const finishButton = document.getElementById('finish');


  // Открытие первого модального окна
  const closeModalHandler = () => {
    modals.forEach(modal => modal.classList.remove('modal-open'));

    backdrop.classList.remove('change');
    body.style.overflow = 'auto';
  }

  const openFirstModalHandler = () => {


    if (firstModal) {
      firstModal.classList.add('modal-open');
      backdrop.classList.add('change');
      body.style.overflow = 'hidden';
      isModalOpen = true;
    }
  }

  // Логика закрытия модального окна по клику вне зоны
  backdrop.addEventListener('click', closeModalHandler);
  
  // И по клику на крестик
  closeButtons.forEach(button => button.addEventListener('click', closeModalHandler));

  // Получаем все кнопки, которые открывают стартовое модальное окно
  const buttonsForStartTest = document.querySelectorAll('.start-test-button');

  // Если они есть, Вешаем на них прослушиватель событий для открытия первого модального окна
  if (buttonsForStartTest) {
    buttonsForStartTest.forEach(button => button.addEventListener('click', openFirstModalHandler))
  }

  startTestButton.addEventListener('click', () => {
    firstModal.classList.remove('modal-open');
    secondModal.classList.add('modal-open');
  })

  answerButton.addEventListener('click', () => {
    secondModal.classList.remove('modal-open');
    thirdModal.classList.add('modal-open');
  })

  finishButton.addEventListener('click', closeModalHandler);

} 