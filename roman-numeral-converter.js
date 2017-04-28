'use strict';

function convertToRoman(num) {
  let
    arr = num.toString().split("").reverse(),
    romanArr = [],
    romanNum = {
      one: "I",
      five: "V",
      ten: "X",
      fifty: "L",
      hundred: "C",
      fiveHundred: "D",
      thousand: "M"
    },
    res = "";

  // I, II, III, "IV", V, VI, VII, VIII, IX, and X.
  // Add function that handles 4 and 9.
  // if multiple of 5?

  // Ones place
  if (arr[0]) {
    for (let j = 0; j < arr[0]; j++) {
    res += romanNum.one;
    }

    romanArr[0] = res;
    res = "";
  }
  // Tenths place
  if (arr[1]) {
    for (let k = 0; k < arr[1]; k++) {
      res += romanNum.ten;
    }

    romanArr[1] = res;
    res = "";
  }

  // Hundreths place

  // Thousandsths place

  console.log(arr);
  console.log(romanArr);
  // return res;
}

convertToRoman(36);
