'use strict';

/* Bonfire Problem: Sum All Odd Fibonacci Numbers.
 *
 * Given positive integer, return sum of all odd Fibonacci numbers
 * that are less than or equal to num.
 *
 * */

const n = 75025;

function oddSum(num) {
	let total  = 2,
	    fibNum = [1,1];

	while (fibNum[fibNum.length - 1] <= num) {
		let fibCalc = fibNum[fibNum.length - 2] + fibNum[fibNum.length - 1];

		if (fibCalc <= num) {
			fibNum.push(fibCalc);
			if (fibCalc % 2 !== 0) {
				total += fibCalc;
			}
		} else {

			console.log(total);
			return total;
		}
	}

}

oddSum(n);
