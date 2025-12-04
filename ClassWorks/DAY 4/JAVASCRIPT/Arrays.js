const fruits=['apple','banana','orange','mango'];

// Accessing values
console.log(fruits[0]); // Output: apple
console.log(fruits[2]); // Output: orange

// Modifying values
fruits[1] = 'grape';
console.log(fruits); // Output: ['apple', 'grape', 'orange', 'mango']


// Adding values
fruits.push('kiwi');
console.log(fruits); // Output: ['apple', 'grape', 'orange', 'mango', 'kiwi']

// Adding value at the beginning
fruits.unshift('banana');
console.log(fruits); // Output: ['banana', 'apple', 'grape', 'orange', 'mango', 'kiwi']

// Removing values
fruits.pop();
console.log(fruits); // Output: ['apple', 'grape', 'orange', 'mango']

// Removing value from the beginning
fruits.shift();
console.log(fruits); // Output: ['apple', 'grape', 'orange', 'mango']

// Array length
console.log(fruits.length); // Output: 4        

const numbers = [10, 20, 30, 40, 50];

// Using for loop to iterate through the array
for (let i = 0; i < numbers.length; i++) {
    console.log("Number at index " + i + ": " + numbers[i]);
}

// Using for...of loop to iterate through the array
for (const num of numbers) {
    console.log("Number: " + num);
}   

// Using forEach method to iterate through the array
numbers.forEach((num, index) => {
    console.log("Number at index " + index + ": " + num);
});

// Using map method to create a new array with each element doubled
// mapping used to create new array by performing operation on each element //high order function
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers: " + doubledNumbers); // Output: [20, 40, 60, 80, 100] 

// Using filter method to create a new array with numbers greater than 25
// filtering used to create new array by applying condition on each element
const filteredNumbers = numbers.filter(num => num > 25);
console.log("Filtered Numbers (greater than 25): " + filteredNumbers); // Output: [30, 40, 50]

// Using reduce method to calculate the sum of all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of Numbers: " + sum); // Output: 150

// Finding the index of a specific value
const index = numbers.indexOf(30);
console.log("Index of 30: " + index); // Output: 2

// Finding the last index of a specific value
const lastIndex = numbers.lastIndexOf(20);
console.log("Last Index of 20: " + lastIndex); // Output: 1

// Checking if an array includes a specific value
const includes40 = numbers.includes(40);
console.log("Array includes 40: " + includes40); // Output: true

//finding the first number greater than 25  //high order function
const firstGreaterThan25 = numbers.find(num => num > 25);
console.log("First number greater than 25: " + firstGreaterThan25); // Output: 30

// Sorting the array in ascending order
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log("Sorted Numbers (Ascending): " + sortedNumbers); // Output: [10, 20, 30, 40, 50]

// Reversing the array
const reversedNumbers = [...numbers].reverse();
console.log("Reversed Numbers: " + reversedNumbers); // Output: [50, 40, 30, 20, 10]

// Finding the maximum value in the array
const maxNumber = Math.max(...numbers);
console.log("Maximum Number: " + maxNumber); // Output: 50

// Finding the minimum value in the array
const minNumber = Math.min(...numbers);
console.log("Minimum Number: " + minNumber); // Output: 10  


// Concatenating two arrays
const moreNumbers = [60, 70, 80];
const combinedNumbers = numbers.concat(moreNumbers);
console.log("Combined Numbers: " + combinedNumbers); // Output: [10, 20, 30, 40, 50, 60, 70, 80]

// Slicing the array
const slicedNumbers = combinedNumbers.slice(2, 5);
const negativeSlicedNumbers = combinedNumbers.slice(-5, -2);
console.log("Negative Sliced Numbers (index -5 to -2): " + negativeSlicedNumbers); // Output: [40, 50, 60]
console.log("Sliced Numbers (index 2 to 4): " + slicedNumbers); // Output: [30, 40, 50]



// Splicing the array (removing 2 elements from index 3 and adding 100, 200)
const splicedNumbers = [...combinedNumbers];
splicedNumbers.splice(3, 2, 100, 200);
console.log("Spliced Numbers: " + splicedNumbers); // Output: [10, 20, 30, 100, 200, 60, 70, 80]


let numbersArray = [5, 10, 15, 20, 25];
//even numbers
let evenNumbers = numbersArray.filter(num => num % 2 === 0);
console.log("Even Numbers: " + evenNumbers); // Output: [10, 20]

//odd numbers
let oddNumbers = numbersArray.filter(num => num % 2 !== 0);
console.log("Odd Numbers: " + oddNumbers); // Output: [5, 15, 25]

// Sum of all numbers using reduce
let totalSum = numbersArray.reduce((acc, curr) => acc + curr, 0);
console.log("Total Sum: " + totalSum); // Output: 75

let names=["Alice", "Bob", "Charlie", "David"];
let longNames=names.filter(name=>name.length>3);
console.log("Names with more than 3 characters: " + longNames); // Output: ['Alice', 'Charlie', 'David']

let longname=names.find(name=>name.length>3);
console.log("First name with more than 3 characters: " + longname); // Output: 'Alice'  


let prices=[100,200,300,400,500];
const addedTax=prices.map(price=>price+100);
console.log("Prices after adding 10% tax: " + addedTax); // Output: [200, 300, 400, 500, 600]

let persons = [ "John", "Jane", "Doe", "Smith" ];
const addmr=persons.map(person => "Mr. " + person);
console.log("Names with Mr. prefix: " + addmr); // Output: ['Mr. John', 'Mr. Jane', 'Mr. Doe', 'Mr. Smith']







