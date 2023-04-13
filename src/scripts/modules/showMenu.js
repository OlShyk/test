export default function showSidebar() {
  const button = document.querySelector('.header__button');
  const menu = document.querySelector('.header__navigation');

  button.addEventListener('click', () => {
    menu.classList.add('header__navigation--open');
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.header__button')) {
      menu.classList.remove('header__navigation--open');
    }
  });
}
