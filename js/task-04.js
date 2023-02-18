let counterValue = 0;

let counter = document.querySelector("#value");
const decrementButtonEl = document.querySelector('button[data-action="decrement"]');

const incrementButtonEl = document.querySelector('button[data-action="increment"]');


const decrease = decrementButtonEl.addEventListener('click', () => {
    counterValue -= 1;
    counter.textContent = counterValue;
});

const increase = incrementButtonEl.addEventListener('click', () => {
    counterValue += 1;
    counter.textContent = counterValue;
});



