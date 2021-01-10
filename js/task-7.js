const sizeControlRef = document.querySelector('#font-size-control');
const textSizeRef = document.querySelector('#text');

sizeControlRef.value = 16;

sizeControlRef.addEventListener('input', () => {
  let amount = `${sizeControlRef.value}px`;
  textSizeRef.style.fontSize = amount;
});
