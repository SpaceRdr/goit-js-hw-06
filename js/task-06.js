const txtInput = document.querySelector("#validation-input");
// const txtInputLength = document.querySelector('[data-length="6"]');
console.log(txtInput);
console.dir(txtInput);

const txtInputLength = Number(txtInput.getAttribute("data-length"));
console.log(txtInputLength);

function validatorInp () {
   console.log('Length ', txtInput.value.length);
   console.log(typeof txtInput.value.length);
 if (txtInput.value.length === txtInputLength)
   {console.log('Error 4');
   txtInput.classList.remove("valid");
   txtInput.classList.add("invalid");
   // txtInput.id = 'validation-input.invalid';
   }
   else
   {console.log('Right 4');
   txtInput.classList.remove("invalid");
   txtInput.classList.add("valid");
   // txtInput.id = 'validation-input.valid';
   }
}

txtInput.addEventListener('blur', validatorInp);
// console.log();