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

// Reverses a string
// Splits the string into an array of characters, reverses the array,
// then joins it back into a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Test case
console.log(isEven(4));               // true
console.log(largestOfThree(3, 7, 5)); // 7
console.log(reverseString('hello'));  // 'olleh'