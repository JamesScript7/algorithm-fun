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

  // I, II, III, "IV", V, VI, VII, VIII, "IX", and X.

  // 1. Add function that handles the fours and the nines in any
  // numerical place.

  // 2. Using modulo could help?

  console.log(0 % 5);
  console.log(1 % 5);
  console.log(2 % 5);
  console.log(3 % 5);
  console.log(4 % 5);
  console.log(5 % 5);
  console.log(6 % 5);
  console.log(7 % 5);
  console.log(8 % 5);
  console.log(9 % 5);
  console.log(10 % 5);

  function handler(array) {
    // ones
    for (let j = 0; j < array[0]; j++) {
      if (array[0] < 5) {

        // maybe this can be a universal function!
        if (array[0] % 5 === 4) {
          res = romanNum.one + romanNum.five;
        } else if (array[0] % 5 === 0) {
          res = romanNum.five;
        }

      } else if (array[0] > 5) {
        res = romanNum.five;
        res += romanNum.one;
      }


    }

    romanArr[0] = res;
    res = "";

  }

  handler(arr);

  // Tenths place
  // if (arr[1]) {
  //   for (let k = 0; k < arr[1]; k++) {
  //     res += romanNum.ten;
  //   }
  //
  //   romanArr[1] = res;
  //   res = "";
  // }

  // Hundreths place

  // Thousandsths place


  console.log(romanArr);
  // return res;
}

convertToRoman(7);
