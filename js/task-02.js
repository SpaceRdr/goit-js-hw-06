const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const insItem =[6];
const editList = document.querySelector("#ingredients");


ingredients.forEach(function(elem, ind) {  
  insItem[ind] = document.createElement("li");
  
  insItem[ind].textContent = elem;
  insItem[ind].className = 'item';
});
editList.append(...insItem);
