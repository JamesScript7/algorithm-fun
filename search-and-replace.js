'use strict';

/* Bonfire Problem: Search.
 *
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third arguement is what you will be replacing the second argument
 * with (after).
 *
 * */

function myReplace(str, before, after) {
  let newStr = str.split(" ");

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === before) {
      if (before[0] == before[0].toUpperCase()) {
        newStr[i] = after.charAt(0).toUpperCase() + after.slice(1);
      } else if (before[0] == before[0].toLowerCase()) {
        newStr[i] = after;
      }
    }
  }

  str = newStr.join(" ");
  console.log(str);
  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
