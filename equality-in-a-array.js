'use strict';

/* Hackerrank Problem: Equality in a Array.
 *
 * Return the minimal number of elements needed to be deleted
 * in order to create an array of equal value elements.
 *
 * */

function equalizeArray(arr) {
	let obj     = {},
			max     = 0,
			largest = 0;

	for (let i = 0; i < arr.length; i++) {
		if (obj[arr[i]] === undefined) {
			obj[arr[i]] = 0;
			obj[arr[i]]++;
		} else {
			obj[arr[i]]++;
		}
	}

	for (let key in obj) {
		if (obj[key] > max) {
			max = obj[key];
			largest = key;
		}
	}

	let res = arr.filter(function(el) {
		return el !== parseInt(largest);
	});

	console.log(res.length);
	return res.length;
}

equalizeArray([96,96,45,52,73,44,51,96]);
