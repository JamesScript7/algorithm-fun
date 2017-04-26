(function(){
  var QuickSort = function(inputArr) {
    var
      len = inputArr.length,
      left = [],
      right = [],
      pivot;

    if (len === 0) {
      return inputArr;
    }

    pivot = inputArr[0];

    for (var i = 1; i < len; i++) {
      if (inputArr[i] <= pivot) {
        left.push(inputArr[i]);
      } else {
        right.push(inputArr[i]);
      }
    }

    left = QuickSort(left);
    right = QuickSort(right);

    return left.concat(pivot, right);

  };

  var myArray = [5,3,1,6,8,9,2,4,7];
  QuickSort(myArray);

})
