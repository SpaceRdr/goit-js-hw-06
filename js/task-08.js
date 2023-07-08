

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
