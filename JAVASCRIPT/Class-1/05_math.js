//Math

// let num1 = 100;
// let num2 = 50;

// let result = num1 + num2;
// console.log(result);
// console.log(Math.abs(-result));  //expected output : -150
// console.log(Math.abs(-20));   //-20

// console.log(Math.round(5.3));
// console.log(Math.ceil(5.1)); // ceil value : 6
// console.log(Math.floor(5.1)); // floor value : 5

// console.log(Math.min(4 , 2 , 1 , 8 , 9)); //min value
// console.log(Math.max(5 , 100 , 2 , 8 , 7)); // max value

//How to generate a random number?

// console.log(Math.random()); //random number
// console.log(Math.floor(Math.random() * 10 + 1));

// In a optimize way
// let min = 1;
// let max = 20;
// let random = console.log(Math.floor(Math.random() * (max - min + 1))) + min;

// //todo generate number between 10 and 50

let min = 10;
let max = 50;
let random2 = console.log(Math.floor(Math.random() * (max - min + 1))) + min;

let result = "";
result = result + random2;
console.log(result);
