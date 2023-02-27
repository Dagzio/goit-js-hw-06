const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = "16px";
inputEl.value = inputEl["min"];

inputEl.addEventListener('input', onInputRange);


function onInputRange() {

    textEl.style.fontSize = inputEl.value+"px";

}