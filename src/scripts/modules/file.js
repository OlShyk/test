export default function file() {
  const input = document.querySelector('#file');
  const button = document.querySelector('.file__button');
  const wrapper = document.querySelector('.file');

  button.addEventListener('focus', function () {
    input.focus();
    wrapper.classList.add('file--focus');
  });

  input.addEventListener('change', function () {
    button.classList.add('file__button--chosen');
    button.textContent = input.value.replace('C:\\fakepath\\', '');
  });
}
