'use strict';

/* Bonfire Problem: Unite Unique
 *
 * Return an array with unique values but in order of
 * the arguments given.
 *
 * */

function uniteUnique(arr) {
  let obj = {};
  let unique = [];

  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (obj[arguments[i][j]] === undefined) {
        obj[arguments[i][j]] = 0;
        unique.push(arguments[i][j]);
      }
    }
  }

  console.log(unique);
  return unique;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
