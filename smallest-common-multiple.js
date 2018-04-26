'use strict';

/* Bonfire Problem: Smallest Common Multiple.
 *
 * Basically find the smallest common multiple
 * from the given range.
 *
 * */

function smallestCommons(arr) {
	let
		start,
		end,
		range = [],
		count = 1;

	arr[0] < arr[1]
		? (start = arr[0], end = arr[1])
		: (start = arr[1], end = arr[0]);

	for (let i = start; i <= end; i++) {
		range.push(i);
	}

	for (let j = 0; j < range.length; j++) {
		let num = range[range.length - 1] * count;

		while (num % range[j] !== 0) {
			count++;
			num = range[range.length - 1] * count;
			j = 0;
		}

		if (range[j] === range[range.length - 1]) {
			console.log(num);
			return num;
		}
	}
}

smallestCommons([5,1]);
