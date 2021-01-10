const inputRef = document.querySelector('#validation-input');
const inputLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', () => {
  if (inputRef.value.length === inputLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
});
