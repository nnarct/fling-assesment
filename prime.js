/**
 * Checks if a given number is prime.
 *
 * @param {number} n - The number to check for primality.
 * @returns {boolean} - Returns true if the number is prime, false otherwise.
 */
const isPrime = (n) => {
  if (n === 0 || n === 1) {
    return false; // 0 and 1 are not prime numbers
  }

  for (let i = n; i > 1; i--) {
    if (n % i === 0 && i !== n) {
      return false; // If n is divisible by i and i is not n itself, n is not prime
    }
  }

  return true; // If no divisor is found, n is prime
};

// Driver code
const primes = [];

// Find prime numbers from 0 to 999
for (let i = 0; i < 1000; i++) {
  if (isPrime(i)) primes.push(i);
}

console.log(primes);

module.exports = { isPrime };
