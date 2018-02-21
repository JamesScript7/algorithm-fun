'use strict';

/* Bonfire Problem: Everything Be True.
 *
 * Basically, if anything doesn't have a value of the second
 * parameter, then return false.
 *
 * */

// Possibly simplify even more?
function truthCheck(collection, pre) {
	let bool = true;

	collection.forEach((el) => {
		if (!el[pre]) { bool = false; }
	});

	console.log(bool);
	return bool;
}

// Should return true:
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// Should return false:
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");
