//Object :

// A collection of properties , where each property is defined as a key-value pair.
//Each property has a key and a value.
//The value can be a string , number , boolean , array , objects or function.

//Syntax :

//Traditional method :
/*let student = {
  name: "Raj",
  age: 18,
  city: "Baripada",
  marks: [80, 93, 87],
  isMarried: false,
  address: { pin: 757001, po: "KNF" },
}; */

// Creating objects :

//1. Using object literal :

let student = {
  name: "Raj",
  age: 18,
  city: "Baripada",
  marks: [80, 93, 87],
  isMarried: false,
  address: { pin: 757001, po: "KNF" },
};

// console.log(student);

// Constructor Function :
let newStudent = new Object();
newStudent.name = "Raj";
newStudent.age = 18;
newStudent.city = "Baripada";
newStudent.marks = [80, 93, 87];
newStudent.isMarried = false;
newStudent.address = { pin: 757001, po: "KNF" };
// console.log(newStudent);

//Accessing objects :
console.log(student.name); // dot notation
console.log(student["name"]); //bracket notation
console.log(student["marks"]);
