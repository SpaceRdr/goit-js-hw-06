const txtInput = document.querySelector("#validation-input");

const txtInputLength = Number(txtInput.getAttribute("data-length"));

function validatorInp() {
  if (txtInput.value.length !== txtInputLength) {
    txtInput.classList.remove("valid");
    txtInput.classList.add("invalid");
  } else {
    txtInput.classList.remove("invalid");
    txtInput.classList.add("valid");
  }
}

txtInput.addEventListener("blur", validatorInp);
