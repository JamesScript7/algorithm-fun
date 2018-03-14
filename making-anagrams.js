'use strict';

/* Hackerrank Problem: Making Anagrams.
 *
 * Return the number of characters that you need to get rid
 * of to make both arrays an anagram.
 *
 * */

function makingAnagrams(s1,s2) {
	let arr1 = s1.split(''),
	arr2 = s2.split(''),
	anagram = [];

	for (let i = 0; i < arr1.length; i++) {
		let match = false;

		for (let j = 0; j < arr2.length; j++) {
			
			if (arr1[i] === arr2[j]) {
				match = true;
				anagram.push(arr2.splice(j,1));
				anagram.push(arr1.splice(i,1));
				i = 0;
				j = 0;
			}
		}
	}

	console.log((s1.length + s2.length) - anagram.length);
}

makingAnagrams('fcrxzwscanmligyxyvym','jxwtrhvujlmrpdoqbisbwhmgpmeoke');
