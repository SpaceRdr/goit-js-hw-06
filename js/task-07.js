const inptElem = document.getElementById("font-size-control");
console.log('inptElem ', inptElem);
console.dir('inptElem ', inptElem);
const txtElem = document.getElementById("text");
console.log('txtElem ', txtElem);
console.dir('txtElem ', txtElem);

inptElem.addEventListener("input", function () {
  txtElem.style.fontSize = inptElem.value + "px";
});