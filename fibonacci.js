/**
 * Generates the Fibonacci sequence up to the specified length.
 *
 * @param {number} n - The length of the Fibonacci sequence to generate.
 * @returns {number[]} - An array containing the Fibonacci sequence.
 */
const fibonacci = (n) => {
  // Handle special cases where n is 0, 1, or 2
  if (n == 0) return [];
  if (n == 1) return [0];
  if (n == 2) return [0, 1];

  // Initialize array with first two elements of the Fibonacci sequence
  const result = [0, 1];

  // Generate the Fibonacci sequence up to the specified length
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]); // Add the sum of the previous two elements to the array
  }

  // Return the generated Fibonacci sequence
  return result;
};

// Driver Code

// console.log(fibonacci(0)); // output []
// console.log(fibonacci(1)); // output [ 0 ]
// console.log(fibonacci(2)); // output [ 0, 1 ]
// console.log(fibonacci(5)); // output [ 0, 1, 1, 2, 3 ]
// console.log(fibonacci(10)); // output [ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34 ]
// console.log(fibonacci(15)); // output [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]

module.exports = { fibonacci };
