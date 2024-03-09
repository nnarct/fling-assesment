/**
 * Finds two numbers from the given array that add up to the given target number.
 *
 * @param {number[]} num - The array of numbers to search for pairs.
 * @param {number} k - The target sum.
 * @returns {number[]} - An array containing the two numbers that add up to the target sum.
 */
const addUp = (num, k) => {

  // Sort the array in ascending order to enable two-pointer approach
  num.sort((a, b) => a - b);
  
  // Initialize two pointers: left and right
  let left = 0; // Pointer to the beginning of the array
  let right = num.length - 1; // Pointer to the end of the array
  
  // Loop until the pointers meet or cross each other
  while (left < right) {

    const sum = num[left] + num[right]; // Calculate the sum of the numbers at the current pointers
    
    // If the sum equals the target number, return the pair
    if (sum === k) {
      return [num[left], num[right]];
    } else if (sum < k) { 
      left++; // If the sum is less than the target number, move the left pointer to the right
    } else { 
      right--; // If the sum is greater than the target number, move the right pointer to the left
    }
  }
  
  // If no pair is found, return null
  return null;
};

// Driver code
console.log(addUp([1, 8, 30, 40, 100], 31)); // output [1, 30]


module.exports = { addUp };
