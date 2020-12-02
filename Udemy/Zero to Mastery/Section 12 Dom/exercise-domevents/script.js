const userinput = document.getElementById("userinput");
const button = document.getElementById("enter");
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
const deleteButtons = document.querySelectorAll('.d-flex button');

const lineThrough = (ev) => {
	ev.target.classList.toggle("done");
};

const deleteItemEvent = (ev) => {
	if (ev.target.tagName === "BUTTON") {
		ev.target.parentNode.remove();
	}
};

const inputLength = () => {
	return userinput.value.length;
};


const createDiv = () => {
	const div = document.createElement("div");

	div.classList.add("d-flex");
	ul.appendChild(div);
};

const createLi = () => {
	const div = document.querySelector("ul").lastElementChild;
	const li = document.createElement("li");

	li.appendChild(document.createTextNode(userinput.value));
	userinput.value = "";
	// li.addEventListener("click", lineThrough);
	div.appendChild(li);
};

const createButton = () => {
	const div = document.querySelector(".d-flex:last-child");
	const button = document.createElement("button");

	button.appendChild(document.createTextNode("Delete"));
	// button.addEventListener("click", deleteItemEvent);
	div.appendChild(button);
};

const createListElement = () => {
	createDiv();
	createLi();
	createButton();
};

const addListAfterClick = () => {
	if (inputLength() > 0) {
		createListElement();
	}
};

const addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.key === "Enter") {
		createListElement();
	}
};

ul.addEventListener('click', lineThrough);
ul.addEventListener('click', deleteItemEvent);

button.addEventListener("click", addListAfterClick);
userinput.addEventListener("keypress", addListAfterKeypress);