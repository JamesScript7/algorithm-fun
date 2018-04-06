'use strict';

/* Hackerrank Problem: Beautiful Days at the Movies.
 *
 * Given a range of dates (i to j), find the difference of the
 * number reversed and if k divides evenly into it, it qualifies
 * as a beautiful day. Return the total count of beautiful days.
 *
 * */

function beautifulDays(i, j, k) {
	let
		counter = 0,
		difference;

	for (let h = i; h <= j; h++) {
		difference = Math.abs(h - (h.toString().split('').reverse().join('')));

		if (difference % k === 0)
			counter++;
	}

	console.log(counter);
	return counter;
}

beautifulDays(20,23,6);
