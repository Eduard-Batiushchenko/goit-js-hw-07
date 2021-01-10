let counterValue = 0;

let value = document.querySelector('#value');

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener('click', event => {
  counterValue += 1;
  value.innerHTML = counterValue;
});

decrementBtn.addEventListener('click', event => {
  counterValue -= 1;
  value.innerHTML = counterValue;
});
