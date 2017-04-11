'use strict';

function convertToRoman(num) {
  let
    arr = num.toString().split("").reverse(),
    romanNum = {
      one: "I",
      five: "V",
      ten: "X",
      fifty: "L"
    },
    res = "";

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

  console.log(arr);
  // return res;
}

convertToRoman(36);
