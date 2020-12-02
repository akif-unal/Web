const userinput = document.getElementById("userinput");
const button = document.getElementById("enter");
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
const deleteButtons = document.querySelectorAll('.d-flex button');

function lineThrough() {
  this.classList.toggle("done");
};

function deleteItemEvent() {
  this.parentNode.remove();
};

const inputLength = () => {
  return userinput.value.length;
};

const listItemEvent = () => {
  li.forEach(el => {
    el.addEventListener('click', lineThrough);
  });
};

const deleteButtonEvent = () => {
  deleteButtons.forEach(el =>
    el.addEventListener("click", deleteItemEvent)
  );
}

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
  li.addEventListener("click", lineThrough);
  div.appendChild(li);
};

const createButton = () => {
  const div = document.querySelector(".d-flex:last-child");
  const button = document.createElement("button");

  button.appendChild(document.createTextNode("Delete"));
  button.addEventListener("click", deleteItemEvent);
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

deleteButtonEvent();
listItemEvent();

button.addEventListener("click", addListAfterClick);

userinput.addEventListener("keypress", addListAfterKeypress);