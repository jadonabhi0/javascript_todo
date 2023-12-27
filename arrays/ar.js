console.log("Hare Krishna");

// INTRODUCTION TO ARRAYS

// ---> ordered collection of element
// ---> arrays are of reference (object) type in js
console.log("------------------------------------");
// array creation
let array = ["Hare", "Krishna", "Radha", "Rani"];
console.log(array);
console.log(array[0]);

let nums = [1,2,3,4,5,"Hari", null, undefined, "", [1,2,3]];
console.log(nums);
console.log(Array.isArray(nums)); // return true or false

// object literals
let a = {};
console.log(typeof a);
console.log(Array.isArray(a));

// array methods
console.log("------------------------------------");
array.push("Chetany Maha Prabhu");
console.log(array);

array.pop();
console.log(array);

array.unshift("Hari das");
console.log(array);

array.shift();
console.log(array);


// primitive vs reference data type
console.log("------------------------------------");

//--> primitive
let num1 = 9;
let num2 = num1;
console.log("value of num1 is ",num1);
console.log("value of num2 is ",num2);

// --> reference
let ar1 = ["one", "two"];
let ar2 = ar1;
ar1.push("Three");
console.log("array1", ar1);
console.log("array2",ar2);
console.log(ar1 === ar2);

// clone array
console.log("------------------------------------");
let array1 = ["Ram", "Lakshman", "Sita"];

// --> 1
let array2 = array1.slice(0);
// --> 2
let array3 = [].concat(array1);

// --> 3 using spread operator
let array4 = [...array1];


// for loop in array
console.log("------------------------------------");
for(let i = 0 ; i < array.length ; i++){
    console.log(array[i]);
}

console.log("------------------------------------");

for(let item of array){
    console.log(item.toUpperCase());
}

// array destructuring
console.log("------------------------------------");
const myarray = ["item1", "item2","item3", "item4"];
let[var1,,, var2] = myarray;
console.log(var1);
console.log(var2);
