function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const spanText = document.querySelector(".color");

const handleClick = (event) => {
  spanText.textContent = getRandomHexColor();
  document.body.style.backgroundColor = spanText.textContent;
};

button.addEventListener("click", handleClick);
