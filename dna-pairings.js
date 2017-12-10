/* pairings:
 *  A - T
 *  T - A
 *  C - G
 *  G - C
 *  pairElement("GCG"); should return:
 *  [["G","C"], ["C","G"], ["G","C"]]
 */

function pairElement(str) {
  let arr = str.split('');
  let paired = [];
  let letter = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'G' || arr[i] === 'C') {
      letter = arr[i] === 'G' ? 'C' : 'G';
      paired.push([arr[i],letter]);
    } else if (arr[i] === 'A' || arr[i] === 'T') {
      letter = arr[i] === 'A' ? 'T' : 'A';
      paired.push([arr[i],letter]);
    } else {
      return 'Enter a DNA protein!';
    }
  }

  console.log(paired);
  return paired;
}

pairElement("GCG");
