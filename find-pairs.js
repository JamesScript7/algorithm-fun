'use strict';

function findPairs(n) {
	let collection = {},
			pairs = 0;

	for (let i = 0; i < n.length; i++) {
		if (collection[n[i]] === undefined) {
			collection[n[i]] = n[i];
			collection[n[i]] = 0;
			collection[n[i]]++;
		} else {
			collection[n[i]]++;

			if (collection[n[i]] !== 0 && collection[n[i]] % 2 === 0) {
				pairs++;
				collection[n[i]] - 2;
			}
		}
	}

	console.log(pairs);
	return pairs;
}

const socks = ['blue', 'red', 'red', 'blue', 'blue', 'green', 'yellow', 'blue', 'red'];

findPairs(socks);
