

const form = document.querySelector(".login-form");

function manualInpSubmit(elem) {
    elem.preventDefault();
    const formElement = elem.currentTarget.elements;
    const email = formElement.email.value;
    const password = formElement.password.value;
    if (email === "" || password === "") {
        return alert("Please fill in all the fields!");
    }
    const formsData = {
        email,
        password,
    };
    console.log(formsData);
    elem.currentTarget.reset();
}

form.addEventListener("submit", manualInpSubmit);

// const form = document.querySelector(".login-form");

// function manualInpSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password }
//   } = event.currentTarget;
//   console.log('event ', event.currentTarget);

//   if (email.value === "" || password.value === "") 
//       {
//          alert("Please fill in all the fields!");
//          return ;
//          //console.log("Please fill in all the fields!");
//       }

//    const outSubmitObj {
//       email,
//       password,

//    }
//   console.log(`Login: ${email.value}, Password: 
//                      ${password.value}`);
//   event.currentTarget.reset();
// };

// form.addEventListener("submit", manualInpSubmit);
