'use strict';

/* Hackerrank Problem: The Hurdle Race.
 *
 * Given the maximum height the athelete can jump (k),
 * How many magic beverage(s), that increases the jump height
 * by one, should the athelete consume to be able to jump
 * the hurdles?
 *
 * */

function hurdleRace(k, height) {
	let magicBeverage = 0;

	for (let i = 0; i < height.length; i++) {
		if (k < height[i]) {

			if (magicBeverage < height[i] - k) {
				magicBeverage = height[i] - k;
			}

		}
	}

	console.log(magicBeverage);
	return magicBeverage;
}

hurdleRace(4, [1,6,3,5,2]);
