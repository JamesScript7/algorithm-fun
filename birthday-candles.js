// Colleen is turning x years old! She has
// candles of various heights on her cake,
// and candle x has height x. Because the taller
// candles tower over the shorter ones, Colleen
// can only blow out the tallest candles.
//
// Given the x for each individual candle,
// find and print the number of candles she
// can successfully blow out.
//
// Input Format
//
// The first line contains a single integer, ,
// denoting the number of candles on the cake.
// The second line contains  space-separated
// integers, where each integer  describes the height of candle .
//
// 4
//
// 1 2 3 2 3
//
// answer: 2

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


console.log(candleCount);
console.log(maxArr);
