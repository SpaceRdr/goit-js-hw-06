const navRoot = document.querySelector('#categories');
// console.log(navRoot);
// console.log(navRoot.childNodes);
const navCategory = document.querySelector('.item');
console.dir(navCategory.childNodes);
console.log(navCategory.childNodes);
console.log(navCategory.childNodes[1].textContent);
console.log(navCategory.childNodes[3]);
const elemList = navCategory.childNodes[3];
console.log(elemList.childNodes);
for (let index = 0; index < elemList.childNodes.length; index++) {
   if(elemList.childNodes[index].nodeName !== "#text")
      console.log(elemList.childNodes[index].nodeName);
   
}
// const elemH2 = navCategory.firstChild;
// console.log(elemH2.nodeName);
// const elemList = navCategory.firstChild.nextSibling;
// console.log(elemList);

// 
// console.log(navCategory.innerText);
// element.querySelectorAll(selector);  .textContent
