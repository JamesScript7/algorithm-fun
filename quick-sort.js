'use strict';

/* Quick Sort.
 *
 * Is it really quick sort...?
 *
 * */

var quickSort = function(inputArr) {
  let
    len = inputArr.length,
    left = [],
    right = [],
    pivot;

  if (len === 0) {
    return inputArr;
  }

  pivot = inputArr[0];

  for (let i = 1; i < len; i++) {
    if (inputArr[i] <= pivot) {
      left.push(inputArr[i]);
    } else {
      right.push(inputArr[i]);
    }
  }

  left = quickSort(left);
  right = quickSort(right);

	console.log(left.concat(pivot, right));
  return left.concat(pivot, right);
};

const myArray = [5,3,1,6,8,9,2,4,7];

quickSort(myArray);
