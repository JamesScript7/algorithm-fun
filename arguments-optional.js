'use strict';

/* Bonfire Problem: Arguments Optional.
 *
 * Very basic problem where if one argument is supplied
 * then return another function that'll take another number
 * to sum. (closure)
 *
 * If two arguments are given then proceed to return the sum
 * of the two.
 *
 * If the arguments given are not a valid number then return undefined.
 *
 */

function addTogether(num1, num2) {

	if (arguments.length < 2) {

		if (typeof num1 === 'number') {

			return function(num3) {

				if (typeof num3 === 'number') {

					console.log(num1 + num3);
					return num1 + num3;

				}
			}
		}
	} else if (typeof num1 === 'number' && typeof num2 === 'number') {

		console.log(num1 + num2);
		return num1 + num2;

	} else {

		console.log(undefined);
		return undefined;

	}
}

addTogether(2)(3);
