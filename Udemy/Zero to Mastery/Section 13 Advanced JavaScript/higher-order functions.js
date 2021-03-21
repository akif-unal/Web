"use strict";

const users = [
  {
    name: "Yazeed",
    age: 25,
  },
  {
    name: "Sam",
    age: 30,
  },
  {
    name: "Bill",
    age: 20,
  },
];

const userNames = users.map((user) => user.name);

const startsWithB = (string) => string.toLowerCase().startsWith("b");

const namesStartingWithB = users.filter((user) => startsWithB(user.name));

let total = 0;

const totalAge = users.reduce((total, user) => total + user.age, 0);

console.log(userNames);

console.log(namesStartingWithB);

console.log(totalAge);
