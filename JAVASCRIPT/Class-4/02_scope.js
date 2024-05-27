// Scope :

//The current context of execution where values and expressions are visible or can be referenced.

// global scope :

let globalVariable = "Hey I am global"; //global variable

function funScope() {
  //function scope
  let myProps = "It is mine";
  console.log(globalVariable);
  console.log(myProps);
}

console.log(globalVariable);
//  console.log(myProps);   // not defined
// let resultScope = funScope();   // we will store in a variable whenever we will return 
// console.log(resultScope); //undefined

//right way to write 
//funScope();

