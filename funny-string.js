'use strict';

/* Hackerrank Problem: Funny String.
 *
 * 
 * */

function funnyString(s) {
	let arr1 = [];

	for (let i = 0; i < s.length - 1; i++) {
		let num1 = s[i + 1].charCodeAt(0);
		let num2 = s[i].charCodeAt(0);

		if (num1 > num2) {
			arr1.push(s[i + 1].charCodeAt(0) - s[i].charCodeAt(0));
		} else {
			arr1.push(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0));
		}
	}

	if (arr1.join('') === arr1.reverse().join('')) {
		console.log('Funny');
		return 'Funny';
	} else {
		console.log('Not Funny');
		return 'Not Funny';
	}
}

funnyString('acxz');
