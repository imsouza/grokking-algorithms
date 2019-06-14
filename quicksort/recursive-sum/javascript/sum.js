function sum(list) {
  if (list.length == 0) {
    return 0;
  } else {
    var newArray = list.slice(1, list.length);
    return list[0] + sum(newArray);
  }
}

console.log(sum([1, 3, 5, 4, 6, 5]));    // 24

