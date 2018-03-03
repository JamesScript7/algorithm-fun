'use strict';

/* Hackerrank Problem: Divisible Sum Pairs.
 *
 * Return the number of pairs that are divisible by k.
 *
 * */

function divisibleSumPairs(n,k,ar) {
	let counter = 0;

	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) {
			
			if (i < j && (ar[i] + ar[j]) % k === 0) {
				counter++;
			}

		}
	}

	console.log(counter);
	return counter;
}

let n  = 6,
		k  = 3,
		ar = [1,3,2,6,1,2];

divisibleSumPairs(n, k, ar);
