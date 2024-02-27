const input = document.querySelector("input");
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const container = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    let containerSize = 30 + i * 10;
    container.insertAdjacentHTML(
      "beforeend", `<div style='width: ${containerSize}px; height: ${containerSize}px; background-color: ${getRandomHexColor()};'></div>`);
  }
  input.value = "";
}

create.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue >= 1 && inputValue <= 100) {
    container.innerHTML = "";
    createBoxes(inputValue);
  } 
});

function destroyBoxes() {
  container.innerHTML = "";
}

destroy.addEventListener("click", () => {
  destroyBoxes();
});


