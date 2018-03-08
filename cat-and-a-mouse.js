'use strict';

/* Hackerrank Problem: Cat and a Mouse.
 *
 * Return the nearest cat: 'Cat A' or 'Cat B'
 * from the 'Mouse C'. If they are at an equal
 * distance then return 'Mouse C'.
 *
 */

 function catAndMouse(x,y,z) {
	let catA = 0, catB = 0;

	if (x > z) {
		catA = x - z;
	} else if (x < z) {
		catA = z - x;
	}

	if (y > z) {
		catB = y - z;
	} else if (y < z) {
		catB = z - y;
	}

	if (catA === catB) {
		console.log('Mouse C');
		return 'Mouse C'
	} else if (catA < catB) {
		console.log('Cat A');
		return 'Cat A';
	} else {
		console.log('Cat B');
		return 'Cat B';
	}
 }

catAndMouse(1,3,2);
