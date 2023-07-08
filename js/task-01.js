

const catgrItem = document.querySelectorAll("#categories > li.item");
console.log(catgrItem);

const itemsCount = catgrItem.length;
console.log(`Number of categories: ${ itemCount } `);

catgrItem.forEach(category => {
  const catName = category.querySelector("h2").textContent;
  const catElements = category.querySelectorAll("li").length;
  console.log(`Category: ${catName}`);
  console.log(`Elements: ${catElements}`);
});
