const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const insItem =[6];
console.log(insItem);
const editList = document.querySelector("#ingredients");
console.log(editList);

ingredients.forEach(function(elem, ind) {  
  insItem[ind] = document.createElement("li");
  console.log(insItem[ind]);
  insItem[ind].textContent = elem;
  // ingredients[ind]
  editList.append(insItem[ind]);

});
console.log(editList);