'use strict';

function bubbleSort(arr) {
	let n = arr.length - 2;

	for (let j = 0; j < n; j++) {
		for (let i = 0; i <= n; i++) {
			let swapped = false;
		
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i + 1];

				arr[i + 1] = arr[i];
				arr[i] = temp;
				swapped = true;
			}

			if (i === n && swapped === false) {
				console.log('Sort completed early!');
				return arr;
			}

			// console.log(i);
		}

		// console.log(arr);
		n--;
	}

	// console.log(arr);
	return arr;
}

const arr = [3,7,1,6,2,8,4,9,5];
const sortedArr = [1,2,3,4,5,6,7,8,9];

bubbleSort(arr);
