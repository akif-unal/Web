const css = document.querySelector('h3');
const colorInput1 = document.querySelector('#color1');
const colorInput2 = document.querySelector('#color2');
const body = document.querySelector('body');
const randomButton = document.querySelector('.random-button');

// Print background color on load
// css.textContent =
// 	window.getComputedStyle(body).getPropertyValue('background-image') + ';';

const randomColor = () => {
	return Math.floor(Math.random() * 16777215).toString(16);
};

const setBgText = () => {
	css.textContent = document.body.style.backgroundImage + ';';
};

const setBgGradient = ev => {
	body.style.background = `linear-gradient(to right, ${colorInput1.value}, ${colorInput2.value})`;

	setBgText;
};

const setRandomBgColor = ev => {
	colorInput1.value = `#${randomColor()}`;
	colorInput2.value = `#${randomColor()}`;

	setBgGradient();
};

colorInput1.addEventListener('input', setBgGradient);

colorInput2.addEventListener('input', setBgGradient);

randomButton.addEventListener('click', setRandomBgColor);

document.addEventListener('DOMContentLoaded', setRandomBgColor);
