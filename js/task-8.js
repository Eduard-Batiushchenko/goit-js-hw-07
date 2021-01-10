let amount;

const boxContainerRef = document.querySelector('#boxes');
const createBoxesRef = document.querySelector('button[data-action="render"]');
const destroyBoxesRef = document.querySelector('button[data-action="destroy"]');
const amountRef = document.querySelector('#controls > input');

amountRef.addEventListener('change', getNumber);
createBoxesRef.addEventListener('click', handleRender);
destroyBoxesRef.addEventListener('click', hendkeDestroy);

function getNumber(event) {
  const inputValue = event.target.value;
  amount = Number(inputValue);
}

function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createBoxes(amount) {
  let divSize = 30;
  for (let i = 0; i < amount; i += 1) {
    let div = document.createElement('div');
    div.style.height = `${divSize}px`;
    div.style.width = `${divSize}px`;
    div.style.backgroundColor = randomColor();
    divSize += 10;
    boxContainerRef.appendChild(div);
  }
}

function handleRender() {
  createBoxes(amount);
}

function hendkeDestroy() {
  boxContainerRef.textContent = '';
  amountRef.value = '';
  amount = '';
}
