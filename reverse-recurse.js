// Example One

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

// Example Two

var str = "doggo";

//using recursive:

var result = [];

function recurse(x) {
  if (x.length <= 0) {
    return;
  } else {
    result.push(str[x - 1]);
    return x - ( recurse(x - 1) );
  }
}

recurse(str);