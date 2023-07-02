const navRoot = document.querySelector('#categories');
console.log(navRoot);
console.log(navRoot.childNodes.length);
const navCategory = document.querySelector('.item');
const elemH2 = navCategory.firstChild;
console.log(elemH2.nodeType);
const elemList = navCategory.firstChild.nextSibling;
console.log(elemList);

// console.dir(navCategory);
// console.log(navCategory.innerText);
// element.querySelectorAll(selector);  .textContent
