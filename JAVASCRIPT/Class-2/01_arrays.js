//Array

// An array in js is data structure to store multiple values of any type under a single name, including number , string , array and objects.
//An array is a collection of items stored at a contiguous memory location.
//An array is a zero-indexed meaning it starts from index 0.

//How to create an array

// let numArray = [1, 2, 3, 45, 10];
// console.log(numArray); //[1, 2, 3, 45, 10]
// console.log(typeof numArray); //array

// let randomArray = ["abc", "def", "xyz", 20];
// console.log(randomArray);

// let num = 100;
// let chars = "abc";
// let arr = [1, 2, 3, 4, 5];

// let arrayStore = [num, chars, arr];
// console.log(arrayStore);

// console.log(randomArray.length);
// console.log(randomArray[0]);

//in optimized way
// Print me the last value of randomArray
// console.log(randomArray[3]);
// console.log(randomArray[randomArray.length -1]);

//Modifying the element :

// randomArray[1] = "Raj";
// console.log(randomArray);

//Array methods :

//Push method :
//The push() method adds 1 or more element to the end of an array and returns the new length of the array.

// let color = ["blue", "black", "brown", "white"];
// console.log(color);

// color.push("lavender");
// console.log(color);

//Pop method :
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

// console.log(color.pop()); //lavender
// console.log(color);
// console.log(color.pop()); //white
// console.log(color);

// Unshift method :
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of an array.

// let numbers = [10, 20, 30, 40];
// numbers.unshift(60);
// console.log(numbers);

//Shift method :
//The shift() method removes the first element from an array and returns that element. This method changes the length of an array.
// console.log(numbers.shift());
// console.log(numbers);

// Slice method :
//The slice() method extracts a part of an array and returns the extracted part in a new array.

// console.log(numbers.slice(1,3)); //  [ 20, 30 ]

//Splice method:
//The splice() method adds/removes items to/from an array, and returns the removed items.

// console.log(numbers.splice(0,4)); //start : the index from which you want to change the array
// end : the index till which you need to stop changing the array.
//deleteCount : The number till which you want to extract.

//Adding element using splice method
// numbers.splice(1 , 0 , 50 , 60);
// console.log(numbers);

//Replacing using splice method :
// numbers.splice(1 , 2 , 80 , 90);
// console.log(numbers);

//Concat method :
//The concat() method is used to merge two or more array. This method does not change the existing arrays , but returns a new array.

// let cars = ["Ferrari" , "bmw" , "audi" , "porsche" , "range-rover"];
// let vehicle = numbers.concat(cars);
// console.log(vehicle);

// console.log(Array.isArray(cars)); //to check the type

// console.log(Array.from("Sudeshna")); // to create an array

//Flat array method :
// The flat() method creates a new array with all the sub-arrays elements concatenated into it recursively upto the specified depth.

let mixedArray = [1, 2, 3, [4, 5, 6, 7], ["a", "b", "c"]];
// console.log(mixedArray);
// console.log(mixedArray.flat(Infinity));

//Array of method :
//The of() method creates a new Array instance from a variable number of arguments , regardless of number or type of the arguments.
let num1 = 100;
let num2 = 200;
let num3 = 300;

console.log(Array.of(num1, num2, num3)); //instance of an array
