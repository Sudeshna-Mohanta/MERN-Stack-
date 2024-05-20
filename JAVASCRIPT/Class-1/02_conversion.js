let num1 = 100;
let num2 = 200;
console.log("Num1", num1); //tranditional method
console.log("Num2", num2);
console.log(typeof num1);

// Using Backticks
console.log(`Num1 : ${num1}  Num2 : ${num2}`);

// Number to String Conversion

let conversion_num1 = String(num1);
console.log(typeof conversion_num1);

//String to Number Conversion

let conversion_num2 = Number(conversion_num1);
console.log(typeof conversion_num2); //number

let con_num1 = "100";
let con_num2 = "200";

console.log(typeof con_num1);  //string
console.log(typeof con_num2);  //string


// Without using constructor function we can convert

console.log(typeof +con_num1);  //number
console.log(typeof +con_num2);  //number




