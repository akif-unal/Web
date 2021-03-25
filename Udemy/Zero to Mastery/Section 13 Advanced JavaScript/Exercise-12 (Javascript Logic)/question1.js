//! Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
//! make a function that organizes these into individual array that is ordered.
//* For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
"use strict";
const test = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

function sortArray(array) {
  return array.sort((a, b) => a - b);
}

function answer(array) {
  sortArray(array);

  const new_arr = [];

  array.reduce((r, current_item) => {
    if (current_item !== r) {
      new_arr.push([]);
    }
    new_arr[new_arr.length - 1].push(current_item);

    return current_item;
  }, undefined);

  return new_arr;
}

console.log(answer(test));
