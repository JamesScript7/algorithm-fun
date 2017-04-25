// Example One
'use strict';

var str = "doggo";

//using recursive:

let x = str.length;

var result = [];

function recurse(x) {
  console.log(result);
  if (x <= 0) {
    return result;
  } else {
    result.push(str[x - 1]);
    return x - ( recurse(x - 1) );
  }
}

recurse(x);
