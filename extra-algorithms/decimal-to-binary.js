function decimalToBinary(decNumber) {
  const stack = [];
  let number = decNumber;
  let rest;
  let binaryString = '';
  
  while (number > 0) {
    rest = Math.floor(number % 2);
    stack.push(rest);
    number = Math.floor(number / 2);
  }
  
  while (stack.length !== 0) {
    binaryString += stack.pop().toString();
  }
  
  return binaryString;
}

console.log(decimalToBinary(5));    // 101
console.log(decimalToBinary(10));   // 1010
console.log(decimalToBinary(100));  // 1100100

