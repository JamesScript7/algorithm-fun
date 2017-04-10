'use strict';

function convertToRoman(num) {
  let
    numStr = num.toString(),
    result = "",
    arr = [];

  for (var i = numStr.length; i > 0; i--) {
    arr.unshift(numStr[i - 1]);
  }

  return result;
}

convertToRoman(36);
