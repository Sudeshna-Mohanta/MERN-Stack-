// declare a variable

//Numbers

let num = 100;
console.log(num); //to print the output

let Num = 50;
console.log(Num);

// (space is not allowed while declaraing variables.)
//let second num = 1000;

let second_num = 1000; //snakeCase
console.log(second_num);

let secondNum = 1000; //camelCase
console.log(secondNum);

let decimal_num = 15.35;
console.log(decimal_num);

console.log(typeof decimal_num);

//Task :
//1 . Declare a variable and assign a value to it.

let name = "Sudeshna";
console.log(name);

//2 . Declare different variables of numbers and assign different values to perform mathematical operations.

// eg addition , subtraction , multiplication , division and modulus.

// let num1 = 12;
// let num2 = 13;
// let addition = num1 + num2 ;
// console.log(addition);

// 1.

let a = 10;
let b = 20;
let addition = a + b;
console.log(addition);

// 2.

let c = 5;
let d = 3;
let subtraction = c - d;
console.log(subtraction);

// 3.

let e = 2;
let f = 4;
let multiplication = e * f;
console.log(multiplication);

// 4.

let g = 50;
let h = 5;
let division = g / h;
console.log(division);

// 5.

let i = 11;
let j = 2;
let modulus = i % j;
console.log(modulus);

// 6.

let k = 5;
let l = 2;
let exponent = k ** l;
console.log(exponent);

// 7.

let m = 2;
let increment = ++m;
console.log(increment);

// 8.

let n = 10;
let decrement = --n;
console.log(decrement);

//String :

//String is a collection of characters.
//String should be in "..."

let Name = "Sudeshna";
console.log("My name is : ", Name);

//using backtick `` :
console.log(`My name is ${Name}`);

console.log(typeof Name);

//Fun Fact:

let numbers = "1000"; // let,var,const(keyword) , =(assign operator) , "1000"(value)
let strings = 1000;

console.log(typeof numbers); //string
console.log(typeof strings); // number

//BigInt :

//BigInt is a new data type in Javascript that can  represent integers of any size. Used to store integers that are too large or too small.

let BigInt = 100000000000000;
console.log(BigInt);

// Null :

let result = null; //Null  : void / empty;
console.log(typeof result);

// Undefined :

// let value = undefined;
let value; //nothing is assigned.
console.log(value);
console.log(typeof value);

//Boolean :

let isMarried = false;
console.log(typeof isMarried);
console.log(!isMarried);

// Symbol :

//Symbol is a data type in JS to produce unique key values and it's introduced in ES6.

let symbol1 = Symbol("abc"); //different value
let symbol2 = Symbol("def"); //different value
console.log(symbol1 === symbol2); //false

console.log(symbol1.description);
console.log(symbol2.description);

// Nan :

// Nan is a data type in JS that reperesnts a non-numeric value. Used to represent values that are not numbers such as 1 , 2 , 3 etc.

let num_value1 = 100;
let num_value2 = "150";

console.log(num_value1 + num_value2); // 100150

let output = 0 / 0;
console.log(output); //Nan(Not a number)
