function binarySearch(list, item) {
  let lowerValue = 0,
      highestValue = list.length - 1;

  while (lowerValue <= highestValue) {
    let middle = Math.floor((lowerValue + highestValue) / 2);

    if (list[middle] === item) {
      return middle;
    } else if (list[middle] < item) {
      lowerValue = middle + 1;
    } else {
      highestValue = middle - 1;
    }
  }
  
  return null;
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(list, 11));    // null
console.log(binarySearch(list, 4));     // 3
console.log(binarySearch(list, 8));     // 7

