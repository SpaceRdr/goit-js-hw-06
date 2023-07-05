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

insItem[0] = document.createElement("li");
console.log(insItem[0]);
insItem[0].textContent = ingredients[0];

editList.append(insItem[0]);
console.log(editList);