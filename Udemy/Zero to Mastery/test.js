// const testObject = {
//   selam: "akif",
//   test: function () {
//     console.log(this);
//     function testInside() {
//       return console.log(this);
//     }
//     return testInside;
//   },
// };

// console.log(testObject.test()());
// const

// var user = {
//   this: this,
//   name: 'Tyler',
//   age: 28,
//   handle: '@tylermcginnis',
//   greet: function () {
//     console.log('Hello! My name is ', this.name);
//     const arrowTest = () => {
//       console.log("arrow this:", this);
//     }
//     function test() {
//     return console.log("normal this: ", this);
//     }
//     return arrowTest;
//   }
// };

// console.log(user.this);

// user.greet()();

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/todos",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json())))
  .then((results) => {
    for (const result of results) {
      console.log(result);
    }
  })
  .catch((error) => console.log("error", error));

console.log("test", te);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then(console.log);

(async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
})();

fetchUsers();

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

// const getData = async function () {
//   const [users, posts, albums] = await Promise.all(
//     urls.map((url) => fetch(url).then((resp) => resp.json()))
//   );
//   console.log("users", users);
//   console.log("posta", posts);
//   console.log("albums", albums);
// };

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(async (url) => {
      return (await fetch(url)).json();
    })
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

const firstObject = {
  monkey: 12,
  akif: "ünal",
  age: 26,
};

const { monkey, ...rest } = firstObject;

console.log(rest);

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

Promise.all([promise1, promise2]).then((data) => console.log("all: ", data));

Promise.allSettled([promise1, promise2]).then((data) =>
  console.log("allSettled: ", data)
);

const testObject = {
  age: 21,
  name: 1,
  surName: 2,
};

let test1 = 123;
const test = { test1, ...testObject };
console.log(test);
test1 = 543;
console.log(test);
