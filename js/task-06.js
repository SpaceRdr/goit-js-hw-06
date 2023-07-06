const txtInput = document.querySelector("#validation-input");
// const txtInputLength = document.querySelector('[data-length="6"]');
console.log(txtInput);
console.dir(txtInput);

const txtInputLength = txtInput.getAttribute("data-length");
console.log(txtInputLength);

function validatorInp () {
   console.log('Length ', txtInput.value.length);
 if (txtInput.value.length < txtInputLength)
   {console.log('Error');
   let style = window.getComputedStyle(txtInput);
   console.log('style ', style);
   // txtInput.id = 'validation-input.invalid';
   }
   else
   {console.log('Right');
   let style = window.getComputedStyle(txtInput);
   console.log('style ', style);
   // txtInput.id = 'validation-input.valid';
   }
}

txtInput.addEventListener('blur', validatorInp);
// console.log();