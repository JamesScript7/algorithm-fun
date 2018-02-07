'use strict';

/* Bonfire Problem: Finders Keepers.
 *
 * Create a function that looks through an array (first arg)
 * and returns the first element in the array that passes a
 * truth test (second arg).
 *
 * */

const arr      = [1,2,3,4],
			boolFunc = (num) => { return num % 2 === 0 };

function findElement(arr, func) {
	const num = arr.filter( (el) => { return func(el); });

	console.log(num[0]);
	return num[0];
}

findElement(arr, boolFunc);
