// console.log("hello")

let name = "Abhishek";

// 0 1 2 3 4 5 6 7 
// a b h i s h e k


// access the char
console.log(name[2]);

// length 
console.log(name.length);

let fname = "Abishek";

// remove space from end and beginning, and return new string
let n = fname.trim();
console.log(n)

// to upper case
var s = fname.toUpperCase(s);

var s = fname.toLowerCase(fname);
console.log(s);


// slice  [start idx, end idx]
console.log(fname.slice(0,2)); // exclude end idx

// string to integer conversion 
let str = "34";
let str2 = "89";
console.log(typeof str)

// 1 -->
console.log(+str + +str2)
// 2 -->
console.log(Number(str) + Number(str2));

// Integer to String 

 
 let num1 = 1;
 let num2 = 2;
// 1 -->
 console.log(typeof num1, typeof (num1+""));

 // 2 --> 
 console.log(String(num1));


// string  concatenation

let name1 = "Abhishek";
let name2 = "Jadon";

console.log(name1+" "+name2);

let aboutme = `Hare Krishna My name is ${name1 +" "+ name2},my age is 20 years`;
console.log(aboutme);