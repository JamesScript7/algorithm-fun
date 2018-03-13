'use strict';

/* Hackerrank Problem: Pangrams.
 *
 * Determine if the sentence is a pangram, contains all the
 * letters of the alphabet, and return if it is a pangram or not.
 * 
 * */

function isPangram(input) {
	let arr      = input.split(''),
			alphabet = {},
			size     = 0;

	for (let i = 0; i < arr.length; i++) {
		let letter = arr[i].toLowerCase();

		if (alphabet[letter] === undefined && letter.match(/[a-z]/ig)) {
			alphabet[letter] = letter;
		}
	}

	for (let key in alphabet) {
		size++;
	}

	console.log(size === 26 ? 'pangram' : 'not pangram');
}

const sentence = 'We promptly judged antique ivory buckles for the next prize';

isPangram(sentence);
