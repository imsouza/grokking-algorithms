function josephusProblem(n, k) {
  if (n === 1) {
    return 1;
  } else {
    return (josephusProblem(n - 1, k) + k - 1) % n + 1; 
  }
}

console.log(josephusProblem(100, 7));    // 50
console.log(josephusProblem(14, 2));     // 13

