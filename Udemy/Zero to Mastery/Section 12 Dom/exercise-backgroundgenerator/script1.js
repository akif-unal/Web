const body = document.querySelector("body");
const currentCss = document.querySelector("h3");
const colorInput1 = document.querySelector(".color1");
const colorInput2 = document.querySelector(".color2");
const randomButton = document.querySelector(".random-button");

function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function changeInputColors() {
  colorInput1.value = "#" + getRandomColor();
  colorInput2.value = "#" + getRandomColor();
}

function setBgText() {
  currentCss.textContent = body.style.backgroundImage + ";";
}

function setBgGradient() {
  document.body.style.backgroundImage = `linear-gradient(to right, ${colorInput1.value}, ${colorInput2.value})`;
  setBgText();
}

function changeBackground() {
  changeInputColors();
  setBgGradient();
  console.log("test onLoad");
}

colorInput1.addEventListener("input", setBgGradient);
colorInput2.addEventListener("input", setBgGradient);

randomButton.addEventListener("click", changeBackground);
// Randomize background color on load
document.addEventListener("DOMContentLoaded", changeBackground);
