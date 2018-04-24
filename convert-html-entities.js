'use strict';

/* Bonfire Problem: Convert HTML Entities
 *
 * Basically replace &, <, >, ", ' characters so that, for
 * example < doesn't get converted into a tag in HTML.
 *
 * */

function convertHTML(str) {
	let newStr = [];
	let obj = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&apos;'
	};

	for (let char in str) {
		if (!str[char].match(/[a-z|\s]/i)) {
			
			for (let key in obj) {
				if (str[char] === key) {
					newStr.push(str[char].replace(/&|<|>|"|'/, obj[key]));
				}
			}

		} else {
			newStr.push(str[char]);
		}
	}

	console.log(newStr.join(''));
	return newStr.join('');
}

convertHTML('Dolce & Gabbana');
