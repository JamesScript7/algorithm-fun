
function translatePigLatin(str) {
  word = str.toLowerCase();
  var firstChar = word[0];
  var vowels = ['a','e','i','o','u'];
  var firstPart = [];
  // I can get rid of secondPart array
  var secondPart = [];
  var res = [];
  
  for(var i = 0; i < word.length; i++) {

    for(var j = 0; j < vowels.length; j++) {
      if (word[0] === vowels[j]) {
        res.push(word);
        res.push('way');
        
        return res.join('');
        
      } else if (word[i] === vowels[j]) {
        secondPart.push(word.slice(i));
        i = word.length;
        break;
      }
    }
    
    if(typeof word[i] !== 'undefined') {
      firstPart.push(word[i]);
    }
  
  }
  
  var combined = res.concat(secondPart, firstPart, 'ay');
  
  console.log(combined.join(''));
  return combined.join('');
}

translatePigLatin("glove");
