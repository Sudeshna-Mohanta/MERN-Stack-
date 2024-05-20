// String

let name1 = "Sudeshna";
let name2 = "Raj";
let name3 = "Mohanta";

let sentence = "They both are good";

// empty string "" " "
console.log(name1 + " " + name2 + " " + name3 + "\n" + sentence);

//charAt() : function
//It returns the character at the specified index in a string.

console.log(sentence.charAt(10));

//length

console.log(sentence.length); //18

let lengthCheck =
  "         Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fugiat.";
//console.log(lengthCheck.length); //78

// split()
// console.log(sentence.split(" "));

//toUpperCase
console.log(sentence.toUpperCase());

console.log(lengthCheck.trim());

//trimStart()

let gesture = "     Hello Everybody!";
console.log(gesture.trimStart());

//trimEnd()

let gesture2 = "Hello EveryBody!     ";
console.log(gesture2.trimEnd());

//toLowerCase()

let gesture3 = "HELLO EVERYBODY!";
console.log(gesture3.toLowerCase());

//substring()

let string = "Sudeshna";
console.log(string.substring(3));

console.log(string.substring(0, 6));

//substr()

let string2 = "Sudeshna";
console.log(string2.substr(2));

console.log(string2.substr(1, 3));

//startsWith()

let str1 = "Today is a rainy day";
console.log(str1.startsWith("Tod"));

console.log(str1.startsWith("Today", 5));

//endsWith()

let str8 = "Today is a rainy day";
console.log(str8.endsWith("day"));

//slice()

let str2 = "It was raining very heavily, but it has stopped now.";

console.log(str2.slice(29));

console.log(str2.slice(0, 15));

//replaceAll()

let str3 =
  "Sudeshna is very talkative and Sudeshna is very shy too at the same time";
console.log(str3.replaceAll("Sudeshna", "Abc"));

//replace()

let str4 = "It is raining";
console.log(str4.replace("is", "was"));

//repeat()

let mood = "Sad! ";
console.log(`I feel ${mood.repeat(3)}`);

//lastIndexOf()

let str5 = "It was raining very heavily";
let search = "heavily";
console.log(str5.lastIndexOf(search));

//indexOf()

let str6 = "It was raining very heavily";
let search2 = "raining";
console.log(str6.indexOf(search2));

//includes()

let str7 = "Hey! Wassup there?";
let search3 = "Wassup";
console.log(str7.includes("Wassup"));

//concat()

let str9 = "Hey!";
let str10 = "Wassup there?";
console.log(str9.concat(" ", str10));
