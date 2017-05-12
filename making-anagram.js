function main(input) {
  var a = input[0].split("");
  var b = input[1].split("");
  var obj = {};

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

  var keys = Object.keys(obj);

  var lenA = a.length - keys.length;
  var lenB = b.length - keys.length;

  console.log(lenA + lenB);
}


main(['abc','cde']);
