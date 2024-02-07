// 1. Print all even numbers from 0 – 10
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

// 2. Print a table containing multiplication tables
// Let’s start with the tables that many of us had to memorize in school. Can you print a table that contains all the answers to the multiplication tables from 1 through 10?
// Like Challenge #1, can you create an efficient solution that you could easily expand should you need the 12 times table?

// let result = " x\t 1\t 2\t 3\t 4\t 5\t 6\t 7\t 8\t 9\t10 "
let result = "x\t1\t2\t3\t4\t5\t6\t7\t8\t9\t10\t11\t12"
for (let i = 1; i <= 12; i++) {
    result += `\n${i < 12 ? '' + i : i}`
    for (let j = 1; j <= 12; j++) {
        result += `\t${i * j >= 12 ? i*j : '' + i*j}`
    }
}
console.log(result)