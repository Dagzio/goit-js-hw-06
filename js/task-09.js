const changeColor = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const colorName = document.querySelector(".color");

changeColor.addEventListener('click', onClickButton);

function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClickButton() {

  bodyEl.style.backgroundColor = getRandomHexColor();

  colorName.textContent = bodyEl.style.backgroundColor;
  
};