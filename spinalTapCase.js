'use strict';

/* Bonfire Problem: Spinal Tap Case.
 *
 * Convert a string to spinal case.
 * Spinal case is all-lowercase-words-joined-by-dashes.
 *
 * */

function spinalCase(str) {
	// Maybe not the most readable?
	//let cleaned = str.split(/(?<=[a-z])(?=[A-Z])|\s|-|_/g).join('-').toLowerCase();
	
	function joiner(match, offset, string) {
	  return offset > 0 ? '-' : '';
	}

  // This can definitely be rewritten.
	let prep = str.split(/(?<=[a-z])(?=[A-Z])|\s|-|_/g);
	let split = prep.map( el => el.toLowerCase() );
	let result = split.join(' ').replace(/(?<=[a-z])(?=[A-Z])|\s|-|_/g, joiner);

	console.log(result);
	return result;
}

spinalCase('This_Is-SpinalTap yay');
