'use strict';

/* Largest Number in Multidimensional Arrays.
 *
 * Find the largest number in each array and return an array
 * of the largest number of each array.
 *
 * */


const numArr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

function largestOfFour(arr) {
  let newArr = [];
	
  for (let i = 0; i < arr.length; i++) {
    let maxNum = 0;

    for (let j = 0; j < arr[i].length; j++) {
  	  if ( arr[i][j] > maxNum ) {
  		  maxNum = arr[i][j];
  	  }
    newArr[i] = maxNum;
    }
  }

  console.log(newArr);
  return newArr;
}

largestOfFour(numArr);
