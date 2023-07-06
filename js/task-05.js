const txtInput = document.querySelector('#name-input');
const txtOutput = document.querySelector('#name-output');
console.log(txtInput);
console.log(txtOutput);

txtInput.addEventListener("input", hendInput); 

const hendInput = () => {
   if (txtInput.value === "")
      txtOutput.textContent = "Anonymous";
      else
      txtOutput.textContent = txtInput.value;
}


// console.log();