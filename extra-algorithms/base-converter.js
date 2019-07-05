function baseConverter(decNumber, base) {
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const stack = [];
  let number = decNumber;
  let rest;
  let baseString = '';
  
  if (!(base >= 2 && base <= 36)) {
    return '';
  }
  
  while (number > 0) {
    rest = Math.floor(number % base);
    stack.push(rest);
    number = Math.floor(number / base);
  }
  
  while (stack.length !== 0) {
    baseString += digits[stack.pop()];
  }
  
  return baseString;
}

console.log(baseConverter(100001, 2));    // 11000011010100001
console.log(baseConverter(100101, 4));    // 120130011
console.log(baseConverter(110101, 16));   // 1AE15

