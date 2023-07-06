const txtInput = document.querySelector('name-input');
const txtOutput = document.querySelector('name-output');

txtInput.addEventListener('input', hendInput);

function hendInput() {
   if (txtInput.value === '')
      txtOutput.textContent = 'Anonymous';
      else
      txtOutput.textContent = txtInput.value;
}