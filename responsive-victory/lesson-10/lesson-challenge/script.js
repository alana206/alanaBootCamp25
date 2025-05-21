// Global vs Local Scope
// Write a function that declares a variable inside the function and another variable outside the function. Call the function and try to access both variables inside and outside the function. Observe the behavior and explain what happened.

function myname() {
    let name = "alana";

    console.log(name)
    
}
// console.log(name)
myname()

// Odd or Even
// Write a function that determines whether a number is odd or even.

function evenOrOdd(number) {
    return number % 2 === 0 ? "even" : "odd";
}
console.log(evenOrOdd(1568))

function calculateTotal(price, taxRate) {
    let tax = price * taxRate;
    return tax + price ;
};

console.log(calculateTotal(22,.08));