// Control flow statement :

// Conditional statement :
// Statements that perform different actions based on different conditions used to make decision in code.

//Types :
//1. If Statement :
//2. Else-If Statement :
//3. Else Statement :
//4. Switch Statement :
//5. Ternary Operator :

//If Statement :

//syntax :
// if (condition) {

// }

// let age = 25;   //declare a variable
// if (age >= 18) {
//   console.log("You are an adult");
// }

//Else Statement :

// let age = 17;   //declare a variable
// if (age >= 18) {
//   console.log("You are an adult");
// }
// else {
//   console.log("You are not an adult");
// }

// If-Else Statement

// let age = 18;   //declare a variable
// if (age > 18) {
//   console.log("You are an adult");
// }
// else if(age == 18){
//   console.log("You are 18");
// } else {
//   console.log("You are not an adult");
// }

// Switch statement :
//syntax :

// let day = 0; // declare a variable
// switch (
//   day //day is the variable
// ) {
//   case 1:
//     console.log("Today is Monday");
//     break; // break won't allow further execution.
//   case 2:
//     console.log("Today is Tuesday");
//     break;
//   case 3:
//     console.log("Today is Wednesday");
//     break;
//   case 4:
//     console.log("Today is Thursday");
//     break;
//   case 5:
//     console.log("Today is Friday");
//     break;
//   case 6:
//     console.log("Today is Saturday");
//     break;
//   case 7:
//     console.log("Today is Sunday");
//     break;

//   default: // if none of the given cases match
//     console.log("Invalid Day");
//     break;
// }

//Ternary operator :
//syntax : ?

let age = 19;
age >= 18
  ? console.log("You are an adult ")
  : console.log("You are not an adult");
