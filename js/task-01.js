const navRoot = document.querySelector("#categories");
// console.log(navRoot);

console.log(navRoot.childNodes);
// let numCatRoot = 0;
// for (let index = 0; index < navRoot.childNodes.length; index++) {
//   if (navRoot.childNodes[index].nodeName !== "#text") numCatRoot++;
// }
 
const navCategRoot = navRoot.getElementsByClassName('item');
console.log("Number of categories: ", navCategRoot);
console.log("Number of categories: ", 
   navRoot.getElementsByClassName('item').length);
// console.log("Number of categories: ", numCatRoot);

const navCategory = document.querySelector(".item");
//console.dir(navCategory.childNodes);
//console.log(navCategory.childNodes);
for (let ind = 0; ind < navCategRoot.length; ind++) {
   console.log("It's categories: ", navCategRoot[ind]);
   let nameSubCateg = navCategRoot[ind].getElementsByTagName('h2');
   console.log("First Child: ", nameSubCateg.textContent);
   let nodesSubCayeg = navCategRoot[ind].getElementsByTagName('ul');
   //console.log("Child Nodes: ", nodesSubCayeg.children.length);
}
// navCategRoot.forEach(el => {
//    console.log(el);
// });

   // console.log("Category: ", navCategory.childNodes[1].textContent);
   //console.log(navCategory.childNodes[3]);
   //const elemList = navCategory.childNodes[3];
   //console.log(elemList.childNodes);
   // for (let index = 0; index < elemList.childNodes.length; index++) {
//   if (elemList.childNodes[index].nodeName !== "#text")
//     console.log("Elements: ", elemList.childNodes[index].textContent);
   // }
// 
// const elemH2 = navCategory.firstChild;
// console.log(elemH2.nodeName);
// const elemList = navCategory.firstChild.nextSibling;
// console.log(elemList);

//
// console.log(navCategory.innerText);
// element.querySelectorAll(selector);  .textContent
