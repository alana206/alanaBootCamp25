// Example template for Challenge 1
const firstName = prompt('Enter your first name:');
const nameLength = firstName.length;
alert(`Your name is ${firstName} and it has ${nameLength} letters.`);

const favoriteFood = prompt('Enter your favorite food:');
const favoriteColor = prompt('Enter your favorite color:');
const combinedString = `${favoriteColor} ${favoriteFood} `.toUpperCase();
alert(combinedString);

// Example template for Challenge 3
const kateString = prompt('Enter a string:');
const capitalizedString = kateString.charAt(0).toUpperCase() + kateString.slice(1);
alert(`Capitalized: ${capitalizedString}`);

// Example template for Challenge 4
const maxString = prompt('Enter a string:');
const containsWord = maxString.includes(('JavaScript') || maxString.includes('javascript') || maxString.includes('JAVASCRIPT') || maxString.includes('Javascript'));

alert(`Contains 'JavaScript': ${containsWord}`);

const maxString = prompt('Enter a string:');
const containsWord = maxString.includes('JavaScript') ||
                    maxString.includes('javascript') ||
                    maxString.includes('JAVASCRIPT') ||
                    maxString.includes('Javascript');
console.log(`Contains 'JavaScript': ${containsWord}`);