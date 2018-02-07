'use strict';

/* Bonfire Problem: Drop it.
 *
 * Drop the element of an array (first argument), starting from
 * the front, until the predicate (second argument) returns true.
 *
 * */

const arr = [1,2,3,4];
const boolFunc = (n) => { return n > 5 };

function dropElements(arr, func) {
	let res = [];

	for (let i = 0; i < arr.length; i++) {
		if ( func(arr[i]) ) {
			res = arr.slice(i);

			console.log(res);
			return res;
		}
	}

	console.log(res);
	return res;
}

dropElements(arr, boolFunc);
