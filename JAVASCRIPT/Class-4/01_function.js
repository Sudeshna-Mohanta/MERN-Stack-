//Function :

//Function is a reusable block of code to perform a particular task.
//Function can take arguments, can return values and can be reused throughout the program.

//syntax :
//function functionName(parameters){
// code...
//}

function greeting() {
  // console.log("Hey welcome!!");
}
greeting(); //function invokation

// passing parameters  / arguments

function welcome(name) {
  // console.log(`Hey welcome ${name}`);
}
welcome("Sudeshna"); //function call

// how to add return value

function addition(num1, num2) {
  return num1 + num2;
}
let result = addition(2, 3);
// console.log(result);

//arrow function :

let arrow = () => {
  // console.log("Hey arrow function");
};
arrow();

let multiply = (num1, num2) => {
  return num1 * num2;
};
let output = multiply(2, 3);
// console.log(output);

//Higher order function :
// A function that takes another function as an argument or returns a function as a result.

//using array method :

// anonymous function :
// () => {}
//function () {}
// map :
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// make every element double
// let double = array.map((num) => num * 2);
// for(let i =0; i<array.length ; i++){
//   array[i] = array[i] * 2;
// }
// console.log(array);

//using higher order function

let double = array.map((element, index) => {
  return element * 2;
});
console.log(double);

//filtre method :

// find out the odd no

let odd = array.filter((el) => {
  return el % 2 !== 0;
});
// console.log(odd);

// reduce method :
// find out the sum of all the elements
let sum = array.reduce((total, el) => {
  return total + el;
}, 0);
console.log(sum); // 0 + 1 + 2 + 3 + 4 ...// 45

//foreach method :

let answer = array.forEach((el, i) => {
  console.log(el, i);
});
// console.log(answer);

// Re - use of function

// custom function

let evenOddFunction = (num) => {
  if (num % 2 !== 0) {
    return `odd number ${num}`;
  } else {
    return `even number ${num}`;
  }
};

//reuse function

for (let i = 0; i < array.length; i++) {
  console.log(evenOddFunction(array[i]));
}
