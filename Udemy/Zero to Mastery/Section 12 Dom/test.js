let userInput = document.getElementById('userInput')
let add = document.getElementById('add')
let ul = document.querySelector('ul')
let del = document.querySelectorAll('.delete')
let inputLength = () => userInput.value.length

//Function for creating the List Item element, along with the "Del" button and appends it to the UL
let createListElement = () => {
  let li = document.createElement('LI')
  li.innerHTML = `${userInput.value} <button class='delete'>Del</button>`
  // li.appendChild(document.createTextNode(userInput.value)) Another way of adding the input text.
  ul.appendChild(li)
  userInput.value = ''
}

//Function which calls the createListElement function when clicked if the userInput has something in it.
let addListAfterClick = () => {
  if (inputLength() > 0) {
    createListElement()
  }
}

//Function which calls the createListElement function when pressing "enter" if the userInput has something in it.
let addListAfterKeypress = event => {
  if (inputLength() > 0 && event.keyCode === 13) {
    //can also use event.which
    createListElement()
  }
}

//Function that adds the "done" class to whatever element you click on. Will work with whatever element you add a listener to.
let strikethrough = () => {
  event.target.classList.toggle('done')
}

//Function that deletes the LI of whatever "Del" button you click on.
let deleteLI = () => {
  if (event.target.tagName == 'BUTTON') {
    event.target.parentNode.remove()
  }
}

//Event listener for mouse over/out to turn the pointer into a hand instead of a text field pointer. Just looks better.
ul.addEventListener('mouseover', () => {
  ul.classList.add('pointer')
})
ul.addEventListener('mouseout', () => {
  ul.classList.remove('pointer')
})

//Listen for click or keypress then call the function associated
add.addEventListener('click', addListAfterClick)
ul.addEventListener('click', deleteLI)
ul.addEventListener('click', strikethrough)

userInput.addEventListener('keypress', addListAfterKeypress)