// 1. Print all even numbers from 0 – 10 *****COMPLETED*****
// Try to make the solution to this problem as efficiently as possible. Consider using loops that would allow you to type the fewest characters/commands. While you could simply print the even numbers, get creative and see how you could output them in a way that would work up to 10 or even up to 10,000 with little extra effort.

// ********** ONLY EVENS **********

// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const evens = []

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element % 2 === 0) {
//          evens.push(element);
// }
// }

// console.log(evens);

// 2. Print a table containing multiplication tables *****COMPLETED*****
// Let’s start with the tables that many of us had to memorize in school. Can you print a table that contains all the answers to the multiplication tables from 1 through 10?
// Like Challenge #1, can you create an efficient solution that you could easily expand should you need the 12 times table?

// let result = " x\t 1\t 2\t 3\t 4\t 5\t 6\t 7\t 8\t 9\t10 "
// let result = "x\t1\t2\t3\t4\t5\t6\t7\t8\t9\t10\t11\t12"
// for (let i = 1; i <= 12; i++) {
//     result += `\n${i < 12 ? '' + i : i}`
//     for (let j = 1; j <= 12; j++) {
//         result += `\t${i * j >= 12 ? i*j : '' + i*j}`
//     }
// }
// console.log(result)

// 3. Create a length converter function *****COMPLETED*****
// Creating a function is a skill that’ll be useful in many settings, and as you progress, you’ll be working on much more complicated functions than this one. But a function that converts units of measure can be pretty handy in multiple professions and industries.

// Let’s start with a conversion from kilometers to miles. The function should include the input in kilometers and return the answer in miles.


// taking kilometers input from the user
// const kilometers = "1.532"

// // conversion factor
// const factor = 0.621

// // calculate miles
// const miles = kilometers * factor

// console.log(`${kilometers} kilometers is equal to ${miles} miles.`);

// 4. Calculate the sum of numbers within an array
// You can create your own array of numbers but consider trying this problem with a few different sets to verify your solution. Have one array with negative and positive numbers and another with integers and decimals.

// You could also try using arrays of different lengths. If you’re feeling comfortable with this, try the slightly more challenging bonus challenge below.

// Bonus intermediate challenge: Create a function that can return the sum of a particular column or row number in a table.

// SOLUTION #1 USING A FOR LOOP
// Create an array
// const array = [-1, 2, 3, 4, 5, -6, 7, 8, 9.56, 10]

// // Create a variable for the sum and ititialize it
// let sum = 0;

// // iterate over each item in the array
// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
    
// }

// console.log(sum)

// SOLUTION #2 USING FOREACH METHOD
// Create an array
// const myNums = [1, 2, 3, 4, 5]

// // Create a variable for the sum and ititalize it
// let sum = 0

// // Calculate sum using forEach() method
// myNums.forEach(num => {
//     sum += num
// });

// console.log(sum)

// SOLUTION #3 USING REDUCE METHOD
// Create an array 
// const myNums = [1, 2, 3, 4, -5]

// // use reduce() method to find the sum
// var sum = myNums.reduce((acc, currentValue) => {
//     return acc + currentValue
// },0)

// console.log(sum)