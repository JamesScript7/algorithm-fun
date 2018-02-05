'use strict';

function main(input) {
  const a = input[0].split('');
  const b = input[1].split('');
	let obj = {};

  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        if (!obj[a[i]]) {
          obj[a[i]] = 0;
          obj[a[i]]++;
        } else {
          obj[a[i]] += 1;
        }
      }
    }
  }

  const keys = Object.keys(obj);

  let lenA = a.length - keys.length;
  let lenB = b.length - keys.length;

	console.log(lenA + lenB);
	return lenA + lenB;
}


main(['abc','cde']);
