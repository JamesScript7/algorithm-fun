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

// Calculates checksum and RETURNS AN OBJECT.
function cardChecker(cardNumber, sum = 0, length = 0) {

	if (cardNumber <= 0) {
		
		return {
			valid: sum ? sum % 10 === 0 : false,
			length
		}

	} else if (typeof cardNumber === 'number' && !isNaN(cardNumber)) {

		let numberProduct = cardNumber % 10 * 2;

		if (length % 2) {
			sum += Math.floor(numberProduct / 10) + (numberProduct % 10);
		} else {
			sum += cardNumber % 10;
		}

		return cardChecker(Math.floor(cardNumber / 10), sum, length + 1);

	} else {

		return 0;

	}
}

//isCardValid(378282246310005);

// Returns card-type: AMEX, MASTERCARD, VISA, or INVALID.
function validate(cardNumber) {
	const card = cardChecker(cardNumber);
	let cardtype = 'INVALID';

	if (card.valid) {
		let start = Math.floor(cardNumber / Math.pow(10, card.length - 2));

		if (/^4/.test(start)) {
			start = Math.floor(start / 10);
		}

		if (start === 34 || start === 37 && card.length === 15) {
			cardtype = 'AMEX';
		} else if ((start >= 51 && start <= 55) && card.length === 16) {
			cardtype = 'MASTERCARD';
		} else if (start === 4 && (card.length === 13 || card.length === 16)) {
			cardtype = 'VISA';
		}
	}

	console.log(`Card-type: ${cardtype}`);
	return `Card-type: ${cardtype}`;
}

validate(4485745162376822);
