const myForm = document.querySelector(".login-form");


myForm.addEventListener('submit', onSubmitForm);



function alertForm() {
    const message = "Ви заповнили не всі поля";
        alert(message);
};

function onSubmitForm(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const formInfo = {
        email,
        password

    };

    if (email ==='' || password ==='') {
        alertForm();
    } else {
        console.log(formInfo);
        event.currentTarget.reset();
    };

    
    
};