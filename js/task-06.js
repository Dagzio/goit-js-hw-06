const inputEl = document.querySelector("#validation-input");
const inputLength = document.querySelector('input[data-length="6"]');


inputEl.addEventListener('blur', onInputBlur);


function onInputBlur() {

    inputEl.classList.add("invalid");

    if (inputEl.value.length == inputLength.dataset.length) {
        
        
        inputEl.classList.replace("invalid", "valid");
        
    }
};