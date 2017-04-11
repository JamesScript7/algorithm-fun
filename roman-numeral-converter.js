'use strict';

function convertToRoman(num) {
  let
    numStr = num.toString(),
    arr = [],
    res = "",
    result,
    romanNum = {
      one: "I",
      five: "V",
      ten: "X",
      fifty: "L"
    };

  for (var i = 0; i < numStr.length; i++) {
    arr.unshift(numStr[i]);
  }

  if (arr[0]) {
    for (let j = 0; j < arr[0]; j++) {
    res += romanNum.one;
    }

    arr[0] = res;
    res = "";
  }

  if (arr[1]) {
    for (let k = 0; k < arr[1]; k++) {
      res += romanNum.ten;
    }

    arr[1] = res;
    res = "";
  }

  console.log(arr.reverse);
  return result;
}

convertToRoman(36);
