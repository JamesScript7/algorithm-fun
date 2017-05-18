function myReplace(str, before, after) {
  var newStr = str.split(" ");

  for (var i = 0; i < newStr.length; i++) {
    if (newStr[i] === before) {
      if (before[0] == before[0].toUpperCase()) {
        newStr[i] = after.charAt(0).toUpperCase() + after.slice(1);
      } else if (before[0] == before[0].toLowerCase()) {
        newStr[i] = after;
      }
    }
  }

  str = newStr.join(" ");
  console.log(str);
  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
