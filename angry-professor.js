'use strict';

/* Hackerrank Problem: Angry Professor.
 *
 * k being the number of students needed to be present before
 * class time which is 0. Return YES for class to be cancelled
 * if number of students fall below the requirements and NO otherwise.
 *
 * */

function angryProfessor(k,a) {
	var counter = 0;
	for (var i = 0; i < a.length; i++) {
		if (a[i] <= 0) {
			counter++;
		}
	}
	// class is cancelled or else it's not.
	if (counter <= k) {
		console.log('YES');
	} else {
		console.log('NO');
	}
}

angryProfessor(3, [-1,-3,4,2]);
