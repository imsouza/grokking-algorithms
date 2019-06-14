function sum(list) {
  let total = 0;
  let size = list.length;
  
  for (i = 0; i < size; i++) {
    total += list[i];
  }
  
  return total;
}

console.log(sum([1, 2, 4, 5]));    // 12

