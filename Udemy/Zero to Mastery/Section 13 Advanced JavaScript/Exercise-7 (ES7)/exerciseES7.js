// Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];
// * answer: false
console.log(dragons.includes("John"));

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];
const includesJohn = dragons.filter((name) => name.includes("John"));
console.log(includesJohn);

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const getPower100 = (number) => number ** 100;
console.log(getPower100(2));

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
console.log(getPower100(10000)); // returns infinity

//* answer: 2^53  max limit
