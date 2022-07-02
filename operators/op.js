// operators type

// undefined
let fname;
console.log(typeof fname);

fname = "hare";
console.log(typeof fname);

const c1 = 9; // const type is must to assign


//null
let v1 = null;
console.log(v1, typeof v1); // it is null, but is a type of bug in js

v1 = 90;
console.log(v1, typeof v1);


// BigInt --> introduce in 2020
let num = BigInt(32342345435398570983427571349807509);
let num2 = 123n;
let num3 = 89;
console.log(typeof num, typeof num2);

// console.log(num3+num2) throw error due to diff data type


// boolean and comparison op

let a1 = 5;
let a2 = 7;

console.log(a1 > a2);
console.log(a1 < a2);

// == vs ===

let a3 = "4";
let a4 = 4;
console.log(a3 == a4); // check only value not data type
console.log(a3 === a4);


// != vs !==
console.log(a3 != a4); // check only value not data type
console.log(a3 !== a4);

// ternary operators
// ---> the ops has the tendency to return something
let age = 4;
let drink = age >= 5 ? "coffee" : "milk";
console.log(drink);


// and vs or

let firstName = "Abhishek";
let ag = 12;

if(firstName[0] === "A" && ag > 18){
    console.log("ok! go")
}else{
    console.log("don't go")
}