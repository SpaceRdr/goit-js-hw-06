
const form = document.querySelector(".login-form");

function manualInpSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  console.log('event ', event.currentTarget);

  if (email.value === "" || password.value === "") 
      {
         alert("Please fill in all the fields!");
         return console.log("Please fill in all the fields!");
      }
  console.log(`Login: ${email.value}, Password: 
                     ${password.value}`);
  event.currentTarget.reset();
};

form.addEventListener("submit", manualInpSubmit);
