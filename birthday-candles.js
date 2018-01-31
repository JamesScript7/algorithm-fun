'use strict';

/* Hackerrank Problem: Birthday Cake Candles.
 *
 * Basically the algorithm returns the total number
 * of the largest integer in the array input.
 *
 * */

// A simple and short sorting function:
// var sortedArr = arr.sort((a,b) => a - b);
// console.log(sortedArr);

const arr = [2,5,6,4,2,6,8,9,8,9,9,3];

function largestCandleFinder(a) {
	let n           = a.length,
	    maxNum      = 0,
	    maxArr      = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
			maxArr = [];
			maxArr.push(maxNum);
    } else if (arr[i] === maxNum) {
			maxArr.push(maxNum);
		}
  }

	const msg = `Largest Number is ${maxNum} and there are ${maxArr.length} of them.`;

	console.log(msg);
	return msg;
}

largestCandleFinder(arr);
