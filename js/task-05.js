const txtInput = document.querySelector('#name-input');
const txtOutput = document.querySelector('#name-output');
console.log(txtInput);
console.log(txtOutput);


const hendInput = () => {
   if (txtInput.value === "")
      txtOutput.textContent = "Anonymous";
      else
      txtOutput.textContent = txtInput.value;
}

txtInput.addEventListener("input", hendInput); 

// console.log();