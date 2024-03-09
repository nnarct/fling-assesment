const { isPrime } = require("./prime.js");
const { longestConcatWord } = require("./longestWord.js");
const { lis } = require("./lis.js");
const { addUp } = require("./addUp.js");
const { fibonacci } = require("./fibonacci.js");

// 1. Write a function that takes a positive integer as input and returns True if it is a prime
// number, False otherwise.
// Test prime number 1 - 15
console.log("Prime : ")
for (let i = 1; i <= 15; i++) {
  console.log(i, ":", isPrime(i));
}

// 2. Write a function that takes a list of words as input and returns the longest word in the
// list that can be constructed by concatenating copies of shorter words in the list.
// Test - input :  ["cat", "cats", "catsdogcats", "dog", "dogcatsdog","hippopotamuses", "rat", "ratcatdogcat"]
//        output: ["ratcatdogcat"]
console.log("Longest Concat Word : ",
  longestConcatWord([
    "cat",
    "cats",
    "catsdogcats",
    "dog",
    "dogcatsdog",
    "hippopotamuses",
    "rat",
    "ratcatdogcat",
  ])
);

// 3. Given a list of integers, write a function that finds the longest increasing subsequence
// (LIS) in the list. The LIS is the longest subsequence of the list such that all elements in
// the subsequence are in increasing order.
// Test - input : [10, 22, 9, 33, 21, 50, 41, 60]
//      - output: [10, 22, 33, 50, 60]
console.log("LIS : ", lis([10, 22, 9, 33, 21, 50, 41, 60]));

// 4. Given an array of n numbers, find the two numbers that add up to a specific target value k.
// Test
console.log("add Up : ",addUp([33, 1, 47, 40, 5], 52)); // output [1, 30]


// 5. Can you give me a function for generating a Fibonacci number.
// Test - this function will return the Fibonacci sequence up to the specified length
console.log("Fibonacci : ", fibonacci(15))