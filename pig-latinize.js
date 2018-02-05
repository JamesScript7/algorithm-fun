'use strict';

function translatePigLatin(str) {
  let word = str.toLowerCase();
  let firstChar = word[0];
  let vowels = ['a','e','i','o','u'];
  let firstPart = [];
  // I can get rid of secondPart array
  let secondPart = [];
  let res = [];
  
  for (let i = 0; i < word.length; i++) {

    for (let j = 0; j < vowels.length; j++) {
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
    
    if (typeof word[i] !== 'undefined') {
      firstPart.push(word[i]);
    }
  
  }
  
  var combined = res.concat(secondPart, firstPart, 'ay');
  
  console.log(combined.join(''));
  return combined.join('');
}

translatePigLatin('glove');
