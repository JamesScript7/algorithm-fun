'use strict';

/* Bonfire Problem: Sum All Primes.
 *
 * Sum all the prime numbers up to and including the provided number.
 *
 * One shortcut is to test the num up the square root instead of
 * iterating the entirety of num!
 * */

'use strict';

// Finds out if an integer is a prime number and returns a boolean value.
function isPrime(num) {
	let start = 2;
		while (start <= Math.sqrt(num)) {
			if (num % start++ < 1) return false;
		}
	return true;
}

function primeSum(num) {
	let total = 0;
	
	for (let i = 0; i <= num; i++) {
		if (isPrime(i) && i !== 1) {
			total += i;
		}
	}

	console.log(total);
	return total;
}

const n = 977;
primeSum(n);
