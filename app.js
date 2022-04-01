// for loops

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


// password validator

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



// playing cards

// function pick(arr) {
//     const idx = Math.floor(Math.random() * arr.length);
//     return arr[idx];



//     function getCard() {
//         const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A'];
//     }
//     const suits = ['heart', 'spade', 'club', 'diamond'];

//     return { value: pick(values), suit: pick(suits) };
// }


// ARRAY METHODS



// forEach method

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

// now converting abouve funtion into arrow function

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

// another example

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


// array.find methods

// let movies = [
//     'Peaky Blinders', 'The Inglorious Bastard', 'The Thor'
// ]

// const movie = movies.find(movie => {
//     return movie.includes('The')
// })


// const movie2 = movies.includes(movie2 => {

//     return movie2.indexOf('T') === 0;
// }

// )


// const books = [{

//     title: 'The Rational Optimist',
//     author: ['Matt Ridley'],
//     rating: 4.3,

//     title: 'Atomic Habits',
//     author: ['James Clear'],
//     rating: 4.1

// }
// ]


// const bookR = books.find(b => b.rating > 4.1)


// search bar using filter

// const query = 'The';
// const result = books.filter(book => {
//     const title = book.title.toLowerCase();
//     return title.includes(query.toLowerCase())
// })


// some and every function

// const animals = ['dog', 'dat', 'dot', 'dak']


// const allLetters = animals.every(word => word.length === 3);

// const fewLetters = animals.some(word => word[0] === 'd');


// sort pt.2

// const price = [500, 40.5, 38.9, 21, 99, 121.3]

// const ascSort = price.sort((a, b) => a - b)


// books.sort((a, b) => a.rating - b.rating)



// reduce method

// const nums = [3, 4, 76, 34, 90, 33]

// const product = nums.reduce((a, b) => {
//     return a * b;
// })


// const grades = [87, 46, 78, 98, 93, 89]

// const maxGrade = grades.reduce((max, currVal) => {
//     if (currVal > max) return currVal;
//     return max;
// })



// const minGrade = grades.reduce((min, currVal) => {
//     if (currVal < min) return currVal;
//     return min;
// })

// deafult parameters syntax

// function multiply(a, b = 3) {
//     return a * b;
// }


// const greet = (person, greeting = 'Hi') => {
//     console.log(`${greeting},${person}!`)
// }


// spread

// function call

// function passBy(a, b, c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// const colors = ['orange', 'purple', 'yellow']

// passBy(...colors)


// spread array literals


// const namesG = ['ab', 'cd', 'ef']
// const namesF = ['gh', 'ij', 'kl']


// const allNames = [...namesF, ...namesG]


// spread object literals


// const catAni = {
//     leg: 3,
//     domestic: 'no',
//     cute: 'yes'
// }

// const dogAni = {
//     leg: 4,
//     domestic: 'yes',
//     cute: 'yes'
// }

// const aniMals = {...catAni, ...dogAni}


// destructuring (array)

// const runners = ['Yash', 'Harsh', 'Sumit', 'Rushi']

// const [first, , fourth] = runners

// destructuring objects

// const myProfile = {
//     name: 'Yash',
//     last: 'Gupta',
//     age: 23,
//     title: 'Mr.'
// }


// const newProfile = {
//     name: myName,
//     last: myLast
// } = myProfile;


// nested destructuring

// const runners = [{
//     first: 'Usain',
//     last: 'Bolt',
//     country: 'Jamaica'
// },

// {
//     first: 'Yohan',
//     last: 'Blake',
//     country: 'Jamaica'
// },

// {
//     first: 'Justin',
//     last: 'Gatlin',
//     country: 'USA'
// }]


// const [{ first: goldWinner }] = runners;

// destructuring parameters

// const topRunner = {
//     first: 'Usain',
//     last: 'Bolt',
//     country: 'Jamaica'
// }


// function nowPrint({ first, last, country }) {
//     console.log(`${first} ${last} from ${country
//         }`)
// }


// OBJECTS//

// object shorthand

// const getStats = (arr) => {
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     const sum = arr.reduce((sum, r) => sum + r);
//     const avg = sum / arr.length;
//     return {
//         min,
//         max,
//         sum,
//         avg
//     }
// }

// const array = [10, 90, 43, 51, 22, 39]

// const stats = getStats(array)



// computed properties

// const team = {
//     role1: 'host',
//     name1: 'Yash',
//     role2: 'host2',
//     name2: 'Krrish'
// }


// const addIt = (obj, k, v) => ({
//     ...obj, [k]: v,

// })

// const res = addIt(team, 'Who is more happy?', 'Me')



// adding function(methods) in an object


// const math = {
//     add: function (x,y){
//         return x+y;
//     },

//     divide:function(x,y){
//         return x/y;
//     }
// }


// shorthand for object function

// const auth = {
//     login() {
//         console.log('Welcome welcome welcome DOSTO')
//     },

//     logout: () => {
//         console.log('OK BYE TATA')

//     }
// }


// THIS KEYWORD


// const bioData = {
//     first: 'Yash',
//     last: 'Gupta',
//     nickname: 'Sonu',

//     fullName() {
//         console.log(this.first)
//     }
// }


// const myNames = {
//     names: ['Yash', 'Harsh', 'Sumit', 'Rushi'],
//     pickNames() {
//         const { names } = this;

//         const idx = Math.floor(Math.random() * names.length);

//         return names[idx]
//     },

//     start() {
//         this.timerId = setInterval(() => {
//             console.log(this.pickNames())
//         }, 1500)

//     },
//     stop() {
//         clearInterval(this.timerId)
//         console.log("Bas bas, bahot hua!!!")
//     }

// }




// CREATING A DECK OF CARDS MACHINE



// const myDeck = {
//     deck: [],
//     drawnCards: [],
//     suits: ['club', 'heart', 'diamond', 'spade'],
//     values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
//     iniDeck() {
//         const { suits, values, deck } = this;
//         for (let value of values.split(',')) {
//             for (let suit of suits) {
//                 deck.push({
//                     value, suit
//                 })
//             }
//         }
//     },

//     drawCard() {
//         const card = this.card.pop();
//         this.drawnCards.push(card);
//         return card;
//     }
// }





