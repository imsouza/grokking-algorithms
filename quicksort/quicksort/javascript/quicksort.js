function quicksort(array) {
  if (array.length < 2) {
    return array;
  } else {
    let pivot = array[0];
    
    let minSubArray = array.slice(1).filter(function(i) {
      return i <= pivot;
    });
    
    let maxSubArray = array.slice(1).filter(function(i) {
      return i > pivot;
    });
    
    return quicksort(minSubArray).concat([pivot], quicksort(maxSubArray));
  }
}

console.log(quicksort([11, 20, 5, 2]));   // [2, 5, 11, 20]

