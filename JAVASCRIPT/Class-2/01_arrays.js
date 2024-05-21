//Array

// An array in js is data structure to store multiple values of any type under a single name, including number , string , array and objects.
//An array is a collection of items stored at a contiguous memory location.
//An array is a zero-indexed meaning it starts from index 0.

//How to create an array

// let numArray = [1, 2, 3, 45, 10];
// console.log(numArray); //[1, 2, 3, 45, 10]
// console.log(typeof numArray); //array

let randomArray = ["abc", "def", "xyz", 20];
console.log(randomArray);

let num=100;
let chars = "abc";
let arr = [1,2,3,4,5];

let arrayStore = [num , chars , arr];
console.log(arrayStore);

// console.log(randomArray.length);
// console.log(randomArray[0]);


//in optimized way
// Print me the last value of randomArray
// console.log(randomArray[3]);
// console.log(randomArray[randomArray.length -1]);

//Modifying the element :

randomArray[1] = "Raj";
console.log(randomArray);

//Array methods :

//Push method :
//The push() method adds 1 or more element to the end of an array and returns the new length of the array.

let color = ["blue" , "black" , "brown" , "white"];
console.log(color);

color.push("lavender");
console.log(color);

//Pop method :
//The pop() method removes the last element from an array  and returns that element. This method changes the length of the array.

console.log(color.pop()); //lavender
console.log(color);
console.log(color.pop()); //white
console.log(color);