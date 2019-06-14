function findSmallestIndex(array) {
  let smallestElement = array[0];
  let smallestIndex = 0;
  let size = array.length;

  for (let i = 1; i < size; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort(array) {
  let sortedArray = [];
  let size = array.length;

  for (let i = 0; i < size; i++) {
    let smallestElement = findSmallestIndex(array);
    sortedArray.push(array.splice(smallestElement, 1)[0]);
  }

  return sortedArray;
}

let array = [5, 4, 3, 9, 8];

console.log(selectionSort(array));    // [2, 3, 4, 5, 6, 8, 9]

