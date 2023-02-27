const inputEl = document.querySelector("#name-input");
const textEl = document.querySelector("#name-output");


inputEl.addEventListener('input', changingText);


function changingText() {
    textEl.textContent = "Anonymous";

    if (inputEl.value && inputEl.value !== " ") {
        
        textEl.textContent = inputEl.value;
        
    }
    
};

