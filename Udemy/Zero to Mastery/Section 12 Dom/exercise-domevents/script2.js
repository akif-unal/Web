const enterButton = document.getElementById("enter");
const userInput = document.getElementById("userinput");
const listItems = document.querySelector(".list-items");
const listItem = document.querySelectorAll("li");

function checkUserInput() {
  return userInput.value.length > 0 ? true : false;
}

function createLi(text) {
  let li = document.createElement("li");
  let textNode = document.createTextNode(text);
  li.appendChild(textNode);

  userInput.value = "";
  return li;
}

function createButton() {
  let button = document.createElement("button");
  let textButton = document.createTextNode("Delete");
  button.appendChild(textButton);

  return button;
}

function addListItem() {
  let div = document.createElement("div");
  div.classList.add("d-flex");

  let text = userInput.value;
  let li = createLi(text);
  let button = createButton();

  div.appendChild(li);
  div.appendChild(button);

  listItems.appendChild(div);
}

function removeListItem(event) {
  if (event.target.nodeName === "BUTTON") {
    let parent = event.target.parentElement;
    parent.remove();
  }
}

function addListItemAfterClick() {
  if (checkUserInput()) {
    addListItem();
  }
}

function addListItemAfterKeypress(event) {
  if (checkUserInput() && event.key === "Enter") {
    addListItem();
  }
}

function lineThrough(event) {
  if (event.target.nodeName === "LI") {
    event.target.classList.toggle("done");
  }
}

listItems.addEventListener("click", lineThrough);
listItems.addEventListener("click", removeListItem);

enterButton.addEventListener("click", addListItemAfterClick);

userInput.addEventListener("keydown", addListItemAfterKeypress);
