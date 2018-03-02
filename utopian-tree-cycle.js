'use strict';

/* Hackerrank Problem: Utopian Tree
 *
 * Each spring, it doubles in height.
 * Each summer its height increases by 1.
 *
 * */

function utopianTree(cycle) {
	let spring = 2;
	let height = 1;

	for (let i = 1; i <= cycle; i++) {
		if (i % 2 === 0) {
			height++;
		} else {
			height *= spring;
		}
	}

	console.log(height);
	return height;
}

utopianTree(4);
