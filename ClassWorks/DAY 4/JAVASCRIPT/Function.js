function greetdown(){
    console.log("Hello, welcome to the JavaScript function tutorial!");
}
greetdown();

greetup();

function greetup(){
    console.log("This is a function declaration example.");
}

//greetArrow(); // Uncommenting this line will cause an error

const greetArrow = () => {
    console.log("This is an arrow function example.");
};
greetArrow();

//Normal Function Expression
const greet=function(name){
    return "Hello, " + name + "!";
}

//Arrow Function Expression
const message = (name) => {
    return "Hello, " + name + "!";
};

console.log(greet("Alice"));
console.log(message("Bob"));

let funcExpression = function() {  //ananymous function expression
    console.log("This is a function expression example.");
};
funcExpression(); //call after declaration

let funcNamedExpression = function namedFunc() { //named function expression
    console.log("This is a named function expression example.");
};  
funcNamedExpression(); //call after declaration
// namedFunc(); // Uncommenting this line will cause an error


// Function with parameters and return value
function addNumbers(a, b) {
    return a + b;
}

let sum = addNumbers(5, 10);
console.log("Sum of 5 and 10 is: " + sum);

// Function expression with parameters
const multiplyNumbers = function(x, y) {
    return x * y;
};
let product = multiplyNumbers(4, 5);
console.log("Product of 4 and 5 is: " + product);

// Arrow function with parameters
const divideNumbers = (m, n) => {
    return m / n;
};
let quotient = divideNumbers(20, 4);
console.log("Quotient of 20 and 4 is: " + quotient);

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This is an Immediately Invoked Function Expression (IIFE).");
})();   

// Function demonstrating scope
function scopeExample() {
    var functionScoped = "I am function scoped";
    let blockScoped = "I am block scoped";  
    console.log(functionScoped); // Accessible here
    console.log(blockScoped);    // Accessible here 
    {
        let innerBlockScoped = "I am inner block scoped";
        console.log(innerBlockScoped); // Accessible here
    }   
    // console.log(innerBlockScoped); // Uncommenting this line will cause an error
}

scopeExample();
// console.log(functionScoped); // Uncommenting this line will cause an error
// console.log(blockScoped);    // Uncommenting this line will cause an error

// Function with default parameter
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greet(); // Uses default parameter
greet("Alice"); // Uses provided argument

// Call Back Function

function process(callback) {
    console.log("Processing...");
    callback();  // Call the callback function
}


function done() {
    console.log("Done!");
}

process(done); // Passing 'done' as a callback function

//higher-order function
function higherOrder(func) {
    console.log("Before calling the function.");
    func();
}   

function sayHi() {
    console.log("Hi from the higher-order function!");
}   

higherOrder(sayHi); // Passing 'sayHi' as an argument


