// var list = [
//   ["tiger", "cat", "bear", "bird"]
// ];

// console.log(list[0][2]);

const todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy"
];

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i], i);
}

todos.forEach(function (todo, i) {
  console.log(todo, i);
})