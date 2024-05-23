// DATE : 21-05-2024

//Ans 1.

let birthdate = new Date("December 20 2001");
console.log(birthdate.toLocaleDateString()); // 20/12/2001

//Ans 2.

let time = new Date();
console.log(time.toLocaleTimeString()); // 6:40:45 pm

//Ans 3.

let date = new Date();
let birthyear = 2001;
let currentyear = date.getFullYear();
let age = currentyear - birthyear;
console.log(age); // 23

//Ans 4.

// The push() method is used to add new elements to the end of an array, the method changes the length of an array and returns the new length.

//Ans 5.

// The pop() method removes the last element of an array, the method changes the length of the original array and also it returns the removed element.

//Ans 6.

// let fruits = ["apple", "banana", "mango"];
// fruits.push("orange");
// console.log(fruits); // [ 'apple', 'banana', 'mango', 'orange' ]

//Ans 7.

let numbers = [1, 2, 3, 4, 5];
numbers.pop(); // The pop method will remove the last element of the given array that is 5.
console.log(numbers); // [ 1, 2, 3, 4 ]

//Ans 8.

let colors = ["red", "green", "blue"];
colors.push("yellow"); // The push method adds the new element yellow to the end of the given array.
colors.pop(); // And later the pop method removes the last element yellow from the new array.
console.log(colors); // [ 'red', 'green', 'blue' ]

//Ans 9.

let color = ["red", "green", "blue"];
color.push("brown", "black", "white"); // To add multiple elements to the end of an array in one push call just mention them one after another within double quotes separated by a (,)
console.log(color); // [ 'red', 'green', 'blue', 'brown', 'black', 'white' ]

//Ans 10.

let stack = [];
stack.push(1); // 1 is added to the stack
stack.push(2); // 2 is added to the stack
stack.push(3); // 3 is added to the stack
stack.pop(); // 3 is removed from the stack
stack.pop(); // 2 is removed from the stack
console.log(stack); // [ 1 ]

//Ans 11.

let letters = ["a", "b"];
letters.push("c", "d"); // c and d are added to the given array
let lastLetter = letters.pop(); // d is removed from the array and is stored to the variable named lastLetter
console.log(letters); // [ 'a', 'b', 'c' ]
console.log(lastLetter); // d

//Ans 12.

let letter = ["a", "b"];
letter.push("c", "d");
console.log(letter.length); //4    // By using length method we can check the length of the array after push & pop.
letter.pop();
console.log(letter.length); //3

//Ans 13.

let myArray = [10, 20, 30];
myArray.push(40); // 40 is first added
console.log(myArray.pop()); // 40 will be printed in the console and then it will be removed.
console.log(myArray); // [ 10, 20, 30 ]

console.log(
  "----------------------------------------------------------------------------------"
);
// DATE : 22-05-2024

//Ans 1 .
let Numbers = [1, 20, 12, 4];
Numbers.push(5);
console.log(Numbers); // [ 1, 20, 12, 4, 5 ]
Numbers.splice(0, 1);
console.log(Numbers);

//Ans 2 .

let array1 = ["Apple", "Mango ", "Orange"];
let array2 = ["Grapes", "Cherry", "Coconut", "Mango"];
let Fruits = array1.concat(array2);
console.log(Fruits); // ["Apple" , "Mango " , "Orange" , "Grapes" , "Cherry" , "Coconut" , "Mango"]
Fruits.splice(1, 2);
console.log(Fruits); // [ 'Apple', 'Grapes', 'Cherry', 'Coconut', 'Mango' ]
