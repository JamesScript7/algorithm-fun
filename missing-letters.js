'use strict';

/* Missing letters.
 *
 * Find the missing letter from the alphabet set.
 *
 */

function fearNotLetter(str) {
  let start = str.charCodeAt(0);

  for (let i = 1; i < str.length; i++) {
    if ((str.charCodeAt(i) - start) > 1) {
      const charNum = str.charCodeAt(i);
      const charCode = String.fromCharCode(charNum - 1);

      console.log(charCode);
      return charCode;
    } else {
      start = str.charCodeAt(i);
    }
  }

  return undefined;
}

fearNotLetter('abce');
