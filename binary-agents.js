'use script';

// Return an English translated sentence of the passed binary string.

const binary = '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111';

function binaryAgent(str) {
  const binArr  = str.split(' '),
        res     = [];
	let decrypted = '';

  for (let i = 0; i < binArr.length; i++) {
    res.push(String.fromCharCode(parseInt(binArr[i],2)));
  }

  // TIP: This is how to turn a character into binary!
  // console.log("q".charCodeAt(0).toString(2));

	decrypted = res.join('');
	console.log(decrypted);
	return decrypted;
}

binaryAgent(binary);
