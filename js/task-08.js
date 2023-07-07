
const form = document.querySelector(".login-form");

function manualInpSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarg;
  console.log('event ', event.currentTarg);

  if (email.value === "" || password.value === "") 
      {
         alert("Please fill in all the fields!");
         return console.log("Please fill in all the fields!");
      }
  console.log(`Login: ${email.value}, Password: 
                     ${password.value}`);
  event.currentTarg.reset();
};

form.addEventListener("submit", manualInpSubmit);
