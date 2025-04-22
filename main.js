/*
04/21/25
Creating and Using Objects - 2 Practice: Create a calculator

Scenario: You are building a calculator for an online math game. The
calculator must include functionality to perform the following:
● Absolute Value Calculation: Given any number, return its absolute
value.
● Power Calculation: Calculate and return the value of a base raised to
a specific power.
● Square Root Finder: Calculate the square root of a number.
● Maximum and Minimum Finder: From a given set of numbers,
determine the largest and smallest values.
● Random Number Generator: Generate a random integer within a
specified range.
● Custom Rounding: Round a number to a specified number of decimal
places.
Step-by-Step Tasks:
1. Write a function for each operation listed above using the Math
module.
2. Test each function with sample inputs to ensure it works as intended.
3. Combine the individual functions into a single "calculator" program
where the user can select an operation and input the required values.
4. Test the calculator by performing the following:
● Find the absolute value of -45.67.
● Raise 5 to the power of 3.
● Calculate the square root of 144.
● Determine the largest and smallest values from [3, 78, -12,
0.5, 27].
● Generate a random number between 1 and 50.
● Round 23.67891 to 2 decimal places
*/

const calculator = {
    absoluteValue: function (num) {
        return Math.abs(num);
    },
    power: function (base, exponent) {
        return Math.pow(base, exponent);
    },
    squareRoot: function (num) {
        return Math.sqrt(num);
    },
    maxMin: function (numbers) {
        return {
            max: Math.max(...numbers),
            min: Math.min(...numbers)
        };
    },
    randomNum: function (max, min = 0) {
        let randNum = Math.random();
        return randNum * (max - min) + min;
        // ALTERNATE SOLUTION: return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    customRound: function (num, dec) {
        let factor = 10 ** dec;
        return Math.round(num * factor) / factor; // round first then factor
        // ALTERNATE SOLUTION: return Number(num.toFixed(dec));
    },
}

// Test functions
console.log("Absolute Value of -45.67:  ", calculator.absoluteValue(-45.67)); // 45.67
console.log("5 raised to the power of 3:  ", calculator.power(5, 3)); // 125
console.log("Square root of 144:  ", calculator.squareRoot(144)); // 12
console.log("Max and Min from [3, 78, -12, 0.5, 27]:  ", calculator.maxMin([3, 78, -12, 0.5, 27])); // { max: 78, min: -12 }
console.log("Random number between 1 and 50:  ", calculator.randomNum(1, 50)); // Random number between 1 and 50
console.log("23.67891 rounded to 2 decimal places:  ", calculator.customRound(23.67891, 2)); // 23.68
