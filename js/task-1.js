const catListRel = document.querySelectorAll('#categories .item');
console.log(`В списке ${catListRel.length} категории`);
catListRel.forEach((elem, i) => {
  const h2Text = document.querySelectorAll(`.item h2`);
  const liCount = document.querySelectorAll('.item ul');
  console.log(`Категория: ${h2Text[i].textContent}`);
  console.log(`Количество элементов: ${liCount[i].children.length}`);
});
