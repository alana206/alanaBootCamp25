// Challenge 1: Array Spread
// Combine two arrays using the spread operator.
// Input: [1, 2], [3, 4]
// Expected Output: [1, 2, 3, 4]
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined)

// Challenge 2: Object Spread
// Merge two or more objects into one.
// Input: { name: 'John' }, { age: 30 }
// Expected Output: { name: 'John', age: 30 }

// Challenge 3: Array Rest
// Write a function that accepts any number of arguments and returns them in an array.
// Input: 1, 2, 3
// Expected Output: [1, 2, 3]

// Challenge 4: Array Destructuring
// Use array destructuring to pull values into variables.
// Input: [1, 2, 3]
// Expected Output: 1, 2, 3 (log separately)

// Challenge 5: Object Destructuring
// Use object destructuring to extract properties.
// Input: { name: 'John', age: 30 }
// Expected Output: John, 30 (log separately)

// Challenge 6: Destructuring with Default Values
// Set fallback values when a property doesn’t exist.
// Input: { name: 'John' } (missing age)
// Expected Output: John, Unknown

// Challenge 7: Destructuring Function Parameters
// Write a function that destructures an object parameter.
// Input: { name: 'John', age: 30 }
// Expected Output: John, 30 (use destructuring in function)