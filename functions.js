// Checks whether a given number is even
// Returns true if divisible by 2 with no remainder, false otherwise
function isEven(num) {
  return num % 2 === 0;
}

// Test case
console.log(isEven(4));               // true
// Checks whether a given number is even
// Returns true if divisible by 2 with no remainder, false otherwise
function isEven(num) {
  return num % 2 === 0;
}

// Takes three numbers and returns the largest one
// Uses Math.max so it works no matter the order, and handles ties correctly
function largestOfThree(a, b, c) {
  return Math.max(a, b, c);
}

// Test case
console.log(isEven(4));               // true
console.log(largestOfThree(3, 7, 5)); // 7