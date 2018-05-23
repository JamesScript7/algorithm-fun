'use strict';

/* Bonfire Problem: Validate US Telephone Numbers.
 *
 * Format should be:
 * With or without dashes or spaces
 * 555-555 5555
 *
 * With or without only number `1` prepended to it.
 * 1 555 5555555
 *
 * Only are code can have BOTH `(` and `)`
 * 1(555)5555555
 *
 * Length:
 * Can't be less than 10 or 11 with area code or 12/13 with `()`
 * */

function telephoneCheck(str) {
  if (str[0] === '-') return false;

  let rx = /[-*!?$&\s]|[A-Z]/ig;
  // All the junk except `(` and `)` removed.
  let newStr = str.replace(rx, '');

  if (newStr.match(/[()]/g) !== null) {
    if (newStr.match(/[()]/g).length < 2) {
      console.log('Too few parenthesis.');
      return false;
    }
  }

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === '(') {
      if ((i === 0 || i === 1) && newStr[i + 4] === ')') {
        // console.log('Good to proceed.');
      } else {
        console.log('Parenthesis not used correctly.');
        return false;
      }
    }
  }

  newStr = newStr.replace(/[()]/g, '');

  if (newStr.length > 11 || newStr.length < 10) {
    console.log('Invalid length.');
    return false;
  } else if (newStr.length === 11 && parseInt(newStr[0]) !== 1) {
    console.log('Invalid first digit');
    return false;
  } else {
    console.log('Everything looks good!');
    return true;
  }

}

telephoneCheck('(6505552368)'); // returns false
