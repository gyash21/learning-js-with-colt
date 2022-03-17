//for loops

// let myStudents = [
//     {
//         firstName: 'Nerva',
//         marksScored: 96
//     },

//     {
//         firstName: 'Trajan',
//         marksScored: 97
//     }
//     ,
//     {
//         firstName: 'Aurelius',
//         marksScored: 100
//     }

// ];

// for (i = 0; i <= myStudents.length - 1; i++) {
//     let students = myStudents[i];
//     console.log(
//         `${students.firstName} has scored ${students.marksScored} marks`
//     );
// }

// const word = 'stressed';
// let reverseWord = '';

// for (let i = word.length - 1; i >= 0; i--) {
//     reverseWord += word[i];

// }
// console.log(reverseWord);



// let myStudents = [
//     {
//         firstName: 'Nerva',
//         marksScored: 96
//     },

//     {
//         firstName: 'Trajan',
//         marksScored: 97
//     }
//     ,
//     {
//         firstName: 'Aurelius',
//         marksScored: 100
//     }

// ];


// let total = 0;
// for (let i = 0; i < myStudents.length; i++) {
//     let students = myStudents[i];
//     total += students.marksScored;
// }

// console.log(total / myStudents.length);


// let gameBoard = [
//     [2, 4, 64, 7],
//     [8, 90, 9, 83],
//     [65, 5, 27, 18]
// ]
//     ;

// let totalScore = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//     let row = gameBoard[i];
//     for (let j = 0; j < row.length; j++) {
//         totalScore += row[j];
//     }

// }

// Writing a Function

// Create a dice

// function rollDice() {
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(`Your dice gave ${roll}`)
// }


// function greet(nick) {
//     console.log(`Hi, ${nick}`)
// }


//password validator

// function isValidPassword(password, username) {
//     if (password.length < 8 && password.indexOf(' ') !== -1 && password.indexOf(username) !== -1) {
//         return true;
//     }

//     return false;

// }


// average of array

// function avg(nums) {
//     let total = 0;

//     // loop over each parameter
//     for (let val of nums) {
//         total += val;
//     }

//     return total / nums.length;
// }

// lets check for a pangram

// function isPangram(str) {
//     let lowerCase = str.toLowerCase();
//     for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//         if (lowerCase.indexOf(char) === -1) {
//             return false;
//         }
//     }
//     return true;
// }



//playing cards

// function pick(arr) {
//     const idx = Math.floor(Math.random() * arr.length);
//     return arr[idx];



//     function getCard() {
//         const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A'];
//     }
//     const suits = ['heart', 'spade', 'club', 'diamond'];

//     return { value: pick(values), suit: pick(suits) };
// }


//ARRAY METHODS



//forEach method

// const num = [19, 20, 21, 22, 23];

// num.forEach(function (n) {
//     console.log(n * 3);
// })


// function doubleIt(n) {
//     console.log(n * 2);

// }

// num.forEach(doubleIt);

// num.forEach(function (n, idx) {
//     console.log(n, idx)
// })

// map method

// const nums = [20, 21, 22, 23];
// const abbr = ['ttyl', 'ttk', 'byol'];


// const doubleIt = nums.map(function (n) {
//     return n * 2;
// })


// const numD = nums.map(function (n) {
//     return {
//         value: n,
//         isEven: n % 2 === 0
//     }
// })


// const abb = abbr.map(function (a) {
//     return a.toUpperCase().split("").join(".");
// })



// ARROW FUNCTIONS

// const square = function (x) {
//     return x * x;
// }

//now converting abouve funtion into arrow function

// const square = (x) => {
//     return x * x;
// }


// const isEven = (num) => {
//     return num % 2 === 0;
// }

// const multiply = (x, y) => {
//     return x * y;
// }

// trying out implicit arrow functions


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const doubles = nums.map(function (n) {
//     return n * 2;
// })

// const doubles1 = nums.map(n => {
//     return n * 2;
// })


// const doubles2 = nums.map(n => n * 2)

//another example

// const parityList = nums.map(function (n) {
//     if (n % 2 === 0) return 'even';
//     return 'odd';
// })

// const parityList = nums.map((n) => {
//     if (n % 2 === 0) return 'even';
//     return 'odd';
// })

// we can write implicit using ternary

// const isParity = nums.map((n) =>
//     n % 2 === 0 ? 'even' : 'odd');
