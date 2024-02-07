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

var result = 'x';
// First number in the problem (example: n X 1,2,3,etc)
for (var n = 0; n < 13; n++) {

// Second number in the problem (example: 1,2,3,etc x n)
    for (var m = 0; m < 13; m++) {

        if(n == 0 && m > 0){
          result += '[' + m + ']';
        } 
        else if(m == 0 && n>0){
          result += '[' + n + '] ';
        } 
        else if(n>0 && m>0){
        result += (n*m) + ' ';
        }
    }
    result += '\n'
}

console.log(result);