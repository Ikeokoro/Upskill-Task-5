//Question 1
//Create afunction that will be able to convert figures from Fahrenheit to Celsius.
//Solution

function convertFahrenheitToCelsius(fahrenheit)
{
    const celsius = (fahrenheit - 32) * 5 /9;
    return celsius;
}

//Test
const fahrenheitTemp = 50;
const celsiusTemp = convertFahrenheitToCelsius(fahrenheitTemp);
console.log(celsiusTemp); // Result: 10

//Question 2
//Create a function that will calculate the average of numbers in an array.
//Solution

function calculateAverage(numbers)
{
    if (numbers. length ===0){
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers [i];
    }
    return sum / numbers.length;
}

// Test
const  numbers = [2, 4, 6, 8, 10];
const result = calculateAverage(numbers);
console.log(result); // Result: 6 

// Question 3
// Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.
// Solution

function isDivisible(n, x, y) {
    return (n% x === 0) && (n % y ===0);
}

// Test
console.log(isDivisible(20, 5, 10)); // Result: true
console.log(isDivisible(5, 2, 3)); // Result: false

// Question 4
// Create a function that will output the first 100 prime numbers.
// Solution

function getFirst100Primes() {
    const primes = [];
    let num = 2;
    while (primes.length < 100) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i ===0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}

// Question 5
// Create a function that will return a boolean specifying if a number is a prime number
// Solution

function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Test
console.log(isPrime(3)); //result: true
console.log(isPrime(4)); // result: false

// Question 6
// Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.
// Solution

function getPositiveNumbers(numbers) {
    const positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        }
    }
    return positiveNumbers;
}

// Test
const number = [-5, 10, 3, -2, 0, 8];
const positiveNumbers = getPositiveNumbers(number);
console.log(positiveNumbers); // Result: [10, 3, 8]

//Question 7
//Write a program that prints the numbers from 1 to 100. But for mmultiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".
// Solution
for (let i = 1; i <= 100; i++)
{
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