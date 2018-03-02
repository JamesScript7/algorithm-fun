'use strict';

/* Hackerrank Problem: Birthday Chocolate
 *
 * n = array length
 * s = array
 * d = sum of m consecutive integers
 * m = how many consecutive integers to iterate
 *
 * */

let n = 5,
		s = [1,2,1,3,2],
		d = 3,
		m = 2;

function solve(n,s,d,m) {
	let counter = 0;

	for (let i = 0; i <= n - 1; i++) {
		let sum = 0;

		for (let j = 0; j < m; j++) {
			sum += s[i + j];
		}

		if (d === sum) {
			counter++;
		}
	}

	console.log(counter);
	return counter;
}

solve(n,s,d,m);
