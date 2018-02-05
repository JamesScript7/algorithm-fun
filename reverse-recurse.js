'use strict';

const str = 'doggo';

function recurse(x,arr) {
	let len    = x.length,
	    result = arr;

  if (len <= 0) {
		console.log(result.join(''));
		return result.join('');
  } else {
		result.push(x[len - 1]);
		x = x.split('').splice(0, (len - 1)).join('');
		return recurse(x, result);
  }
}

recurse(str, []);
