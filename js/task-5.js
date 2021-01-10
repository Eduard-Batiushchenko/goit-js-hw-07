const textRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

textRef.addEventListener('input', event => {
  nameRef.textContent = event.target.value;
  if (nameRef.textContent === '') {
    nameRef.textContent = 'незнакомец';
  }
});
