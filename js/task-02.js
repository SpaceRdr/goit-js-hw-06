const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const insItem =[ingredients.length ];
console.log(insItem);
const editList = document.querySelector("#ingredients");
console.log(editList);

insItem[0] = document.createElement("li");
console.log(insItem[0]);
insItem.textContent = ingredients[0];

editList.append(insItem);
console.log(editList);