// De-structure :

// Destructuring is a process to extract the value of an array and objects and to re-assign them into a new variable.
// It is a shorthand way to extract the values of array and object .

let array = ["abc" , "def" ,"xyz" , "mno"];
// let [name1,name2,name3,name4] = array; // destructure
// console.log(array);  
// console.log(name1,name2,name3,name4);
// console.log(name1 = "cvb");
// console.log(array[0] = name1);
// console.log(array);


//skipping elements:

// let [, , name3 , name4] = array;
// console.log(name3 , name4);

//rest operator :
// let [name1 , name2 , ...rest] = array;
// console.log(name1);
// console.log(rest);

//destructure the object 


let student = {
  name: "Raj",
  age: 18,
  city: "Baripada",
  marks: [80, 93, 87],
  isMarried: false,
  address: { pin: 757001, po: "KNF" },
};

// let {name,age,city} = student;
// console.log(name , age, city);

let {name , age , ...rest} = student;
console.log(name , age , rest);




