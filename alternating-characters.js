'use strict';

/* Hackerrank problem: Alternating Characters.
 *
 * The characters must alternative and there must be no repeating
 * characters. Return the number of characters that need to be
 * taken out to satisfy the condition.
 *
 * */

function alternatingCharacters(s) {
	let arr      = s.split(''),
	    deletion = 0,
		  current  = '';

	for (let i = 0; i < arr.length; i++) {
		current = arr[i];

		if (current === arr[i - 1]) {
			deletion++;
		}
	}

	console.log(deletion);
}

alternatingCharacters('AAABBB');
