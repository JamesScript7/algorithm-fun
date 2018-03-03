'use strict';

/* Hackerrank Problem: Drawing Book.
 *
 * Find the shortest number of page turns, either from
 * the front or from the back of the book.
 *
 * n = number of pages
 * p = page to turn to
 *
 * */

function pages(n,p) {
	let fromStart = 0,
			fromEnd   = 0;

	for (let i = 0; i < n; i++) {
		if (i === p) {
			i = n;
		} else {
			if (i !== 0 && i % 2 !== 0) {
				fromStart++;
			}
		}
	}

	for (let j = n; j >= 0; j--) {
		if (j === p) {
			j = 0;
		} else {
			if (j % 2 === 0) {
				fromEnd++;
			}
		}
	}

	if (fromStart > fromEnd) {
		console.log(fromEnd);
		return fromEnd;
	} else {
		console.log(fromStart);
		return fromStart;
	}
}

pages(6,2);
