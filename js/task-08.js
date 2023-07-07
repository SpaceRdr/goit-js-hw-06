
const form = document.querySelector(".login-form");

function manualInpSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password }
  } = event.currentTarg;
  console.log('event ', event);

  if (login.value === "" || password.value === "") 
      {
         alert("Please fill in all the fields!");
         return console.log("Please fill in all the fields!");
      }
  console.log(`Login: ${login.value}, Password: 
                     ${password.value}`);
  event.currentTarg.reset();
};

form.addEventListener("submit", manualInpSubmit);
