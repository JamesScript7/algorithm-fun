var arr = [2,5,6,4,2,6,8,9,8,9,9,3];
var n = arr.length;
var maxNum = 0;
var candleCount = 0;
var maxArr = [];

// var sortedArr = arr.sort((a,b) => a - b);
// console.log(sortedArr);

for (var i = 0; i < n; i++) {
  if (arr[i] > maxNum) {
    maxNum = arr[i];
  }
}
maxArr.push(maxNum);

for (var j = 0; j < n; j++) {
  if (arr[j] === maxNum) {
    candleCount++;
  }
}

// They only wanted the total number of the tallest candle
console.log(candleCount);
console.log(maxArr);
