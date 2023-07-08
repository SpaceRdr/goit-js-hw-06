const inptElem = document.getElementById("font-size-control");

const txtElem = document.getElementById("text");

inptElem.addEventListener("input", function () {
  txtElem.style.fontSize = inptElem.value + "px";
});