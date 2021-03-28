//! Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
//! make a function that organizes these into individual array that is ordered.
//* For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
//* Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
"use strict";
const test = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const test1 = [1, 1, 1, "2", "3", 2, 2, 3, 4];
console.log(`input1: ${test} \ninput2: ${test1}`);

function sortArray(array) {
  return array.sort((a, b) => a - b);
}

function answer(array) {
  sortArray(array);

  let new_arr = [];

  array.reduce((r, current_item) => {
    if (current_item !== r) {
      new_arr.push([]);
    }

    new_arr[new_arr.length - 1].push(current_item);
    return current_item;
  }, undefined);

  new_arr.forEach((element, index) => {
    if (element.length < 2) {
      if (typeof new_arr[index][0] === "number") {
        new_arr[index] = Number(element);
      } else if (typeof new_arr[index][0] === "string") {
        new_arr[index] = String(element);
      }
    }
  });

  return new_arr;
}

console.log("test1: ", answer(test1));
