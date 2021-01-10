const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const containerRef = document.querySelector('#ingredients');

for (let name in ingredients) {
  const titleRef = document.createElement('li');
  titleRef.textContent = ingredients[name];
  containerRef.appendChild(titleRef);
}
