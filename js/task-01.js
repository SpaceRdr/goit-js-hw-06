

const catgrItem = document.querySelectorAll("#categories > li.item");

const itemCount = catgrItem.length;
console.log(`Number of categories: ${ itemCount } `);

catgrItem.forEach(category => {
  const catName = category.querySelector("h2").textContent;
  const catElements = category.querySelectorAll("li").length;
  console.log(`Category: ${catName}`);
  console.log(`Elements: ${catElements}`);
});
