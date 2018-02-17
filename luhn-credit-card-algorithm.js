'use strict';

/* Harvard CS50 Exercise:
 *
 * Implement a program that determines whether a provided credit card
 * number is valid according to Luhn's algorithm.
 *
 * AMEX       = 15-digits long and (st === 34 || st === 37)
 * MASTERCARD = 15-digits long and (st >= 51 && st <= 55)
 * VISA       = [13 || 16]-digits long and (st === 4)
 *
 * http://www.getcreditcardnumbers.com
 *
 * AMEX        378282246310005
 * MASTERCARD  5121513992302120
 * VISA        4485745162376822
 *
 * */

// Card number must be acquired through a prompt.
//const cardNumberPrompt = parseInt(prompt("Number: "));

// Calculates checksum and returns a BOOLEAN.
function isCardValid(cardNumber, sum = 0) {

	if (cardNumber <= 0) {
		
		console.log(`End: ${sum}`);
		return sum ? sum % 10 === 0 : false;
	
	} else if (!isNaN(cardNumber)) {
		let numProduct = Math.floor(((cardNumber / 10) % 10)) * 2;

		sum += cardNumber % 10;
		sum += Math.floor(numProduct / 10) + (numProduct % 10);

		return isCardValid(Math.floor(cardNumber / 100), sum);

	} else {
		return 0;
	}
}

isCardValid(378282246310005);

// Returns card-type: AMEX, MASTERCARD, VISA, or INVALID.
function validate(cardNumber) {
	// Work on switch case

	console.log(cardNumber);
}

//validate(378282246310005);
