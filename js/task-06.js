const txtInput = document.querySelector("#validation-input");
// const txtInputLength = document.querySelector('[data-length="6"]');
console.log(txtInput);
console.dir(txtInput);

const txtInputLength = txtInput.getAttribute("data-length");
console.log(txtInputLength);

function validatorInp () {
   console.log('Length ', txtInput.textContent.length);
 if (txtInput.value.length < txtInputLength)
   {console.log('Error');}
   else
   {console.log('Right');}
}

txtInput.addEventListener('blur', validatorInp);
// console.log();