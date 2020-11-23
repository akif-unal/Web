// using this array,
const array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
array.shift();
console.log(array);
// 2. Sort the array in order.
array.sort();
console.log(array);
// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
console.log(array);

// 4. Remove "Apples" from the array.
array.splice(0, 1);
console.log(array);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
// you should have at the end: ["Kiwi", "Oranges", "Blueberries"]
array.reverse();
console.log(array);

// using this array
// access "Oranges".
const array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0]);