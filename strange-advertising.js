'use strict';

/* Hackerrank Problem: Viral Advertising.
 * 
 * The advertising starts off with 5 people and only
 * half of it is effective and they share with 3 other
 * friends the next day.
 * 
 * Find how many people responded positively on the nth day.
 *
 * */

function viralAdvertising(n) {
	let people = 5;
	let total = 0;

	for (let i = 0; i < n; i++) {
		people = Math.floor(people / 2);
		total += people;
		people *= 3;
	}

	console.log(total);
	return total;
}

viralAdvertising(3);
