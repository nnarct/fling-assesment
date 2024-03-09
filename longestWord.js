/**
 * Recursive function for checking if the given text can be constructed by concatenating
 * some of the strings from the provided dictionary.
 *
 * @param {string} text - The text to be checked.
 * @param {string[]} dictionary - An array of strings containing possible words.
 * @returns {number} - Returns 1 if the text can be segmented using the dictionary,
 *                    otherwise returns 0.
 */
const segment = (text, dictionary) => {
  if (text.length === 0) {
    return 1; // Base case: If text is empty, it means it's segmented successfully.
  }
  for (let i = 1; i <= text.length; i++) {
    const word = text.substr(0, i);
    if (dictionary.includes(word) && segment(text.substr(i), dictionary)) {
      return true; // Found a valid word, continue checking the rest recursively.
    }
  }
  return false; // No valid segmentation found.
};

/**
 * Finds the longest concatenated word(s) from the given array.
 *
 * @param {string[]} array - An array of strings to search for concatenated words.
 * @returns {string[]} - An array containing the longest concatenated word(s).
 */
const longestConcatWord = (array) => {
  
  array.sort((a, b) => b.length - a.length);

  // Filter the array to find words that can be concatenated using the remaining words.
  array = array.filter((word, index) => {
    const dict = array.slice(index + 1);
    return segment(word, dict);
  });

  // Find the length of the longest concatenated word(s).
  const maxLength = array[0].length;

  // Return the words from the filtered array that have the maximum length.
  return array.filter((word) => word.length === maxLength);
};

// Driver code

const testCase = [
  "cat",
  "cats",
  "catsdogcats",
  "dog",
  "dogcatsdog",
  "hippopotamuses",
  "rat",
  "ratcatdogcat",
];

console.log(longestConcatWord(testCase));

module.exports = { longestConcatWord };
