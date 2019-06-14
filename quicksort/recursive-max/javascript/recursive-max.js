function highestValue(list) {
  if (list.length == 0) {
    return 0;
  }
  
  let newArray = list.slice(1, list.length);
  let max = highestValue(newArray);
  
  if (list[0] > max) {
    max = list[0];
  }
  
  return max;
}

console.log(highestValue([1, 3, 5, 4, 6, 5]))   // 6

