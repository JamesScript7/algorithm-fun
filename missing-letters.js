function fearNotLetter(str) {
  var start = str.charCodeAt(0);

  for (var i = 1; i < str.length; i++) {
    if ((str.charCodeAt(i) - start) > 1) {
      var charNum = str.charCodeAt(i);
      var charCode = String.fromCharCode(charNum - 1);

      console.log(charCode);
      return charCode;
    } else {
      start = str.charCodeAt(i);
    }
  }

  return undefined;
}

fearNotLetter("abce");
