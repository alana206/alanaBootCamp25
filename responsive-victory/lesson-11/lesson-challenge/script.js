// Write a function called fizzBuzz that accepts no arguments.
// The goal is to print all numbers from 1 to 100 with the following conditions:
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// If the number is divisible only by 3, print "Fizz".
// If the number is divisible only by 5, print "Buzz".
// Otherwise, print the number itself.

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();
