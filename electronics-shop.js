'use strict';

/* Hackerrank Problem: Electronics Shop.
 *
 * Return total price after spending near max within budget of s.
 * Each item will be bought once and in pairs.
 *
 * */

function getMoneySpent(keyboards, drives, budget) {
	let totalPrice = -1;

	for (let i = 0; i < keyboards.length; i++) {
		for (let j = 0; j < drives.length; j++) {
			let sum = keyboards[i] + drives[j];

			if (sum <= budget && sum > totalPrice) {
				totalPrice = sum;
			}
		}
	}

	console.log(totalPrice);
	return totalPrice;
}

getMoneySpent([3,1], [5,2,8], 10);
