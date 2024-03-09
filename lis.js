/**
 * Finds the Longest Increasing Subsequence (LIS) from the given array of numbers,
 * assuming there is only one possible LIS with the maximum length for the given array.
 *
 * @param {number[]} num - The array of numbers to find the LIS from.
 * @returns {number[]} - An array containing the Longest Increasing Subsequence.
 */
const lis = (num) => {
  let answer = []; // Initialize array to store the LIS

  for (let i = 0; i < num.length; i++) {
    const array = [num[i]]; // Initialize array with current number as the starting element

    for (let j = i + 1; j < num.length; j++) {
      if (array[array.length - 1] < num[j]) {
        array.push(num[j]); // If next number is greater, add it to the array
      }
    }

    if (array.length > answer.length) {
      answer = [...array]; // Update answer if current LIS is longer
    }

    // Assume only one possible answer, so no need to continue the loop once found
    if (answer.length === num.length - i) {
      break;
    }
  }

  return answer;
};

// Driver code
console.log(lis([10, 22, 9, 33, 21, 50, 41, 60])); // [ 10, 22, 33, 50, 60 ]
console.log(lis([10, 9, 2, 5, 3, 7, 101, 18])); // [ 2, 5, 7, 101 ]
console.log(lis([0, 1, 0, 3, 2, 3])); // [ 0, 1, 3 ]
console.log(lis([7, 7, 7, 7, 7, 7, 7])); // [7]

module.exports = { lis };
