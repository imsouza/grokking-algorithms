const bubbleSort = (array) => {
  let swapped = true;

  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

console.log(bubbleSort([7, 4, 5, 2, 1, 0]));    // [ 0, 1, 2, 4, 5, 7 ]

