const css = document.querySelector('h3');
const colorInput1 = document.querySelector(".color1");
const colorInput2 = document.querySelector('.color2');
const body = document.querySelector("body");
const randomButton = document.querySelector('.random-button');

// Print background color on load
css.textContent = window.getComputedStyle(body).getPropertyValue("background-image") + ";";

const randomColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
}

const setGradient = (ev) => {
  body.style.background = `linear-gradient(to right,
    ${colorInput1.value}, ${colorInput2.value})`;

  css.textContent = body.style.backgroundImage + ";";
}

const setRandomBgColor = (ev) => {
  const randomColor1 = `#${randomColor()}`
  const randomColor2 = `#${randomColor()}`

  colorInput1.value = randomColor1;
  colorInput2.value = randomColor2;

  setGradient();
}

colorInput1.addEventListener('input', setGradient);

colorInput2.addEventListener('input', setGradient);

randomButton.addEventListener("click", setRandomBgColor);