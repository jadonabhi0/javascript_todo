console.log("Hare Krishna");

// INTRODUCTION TO ARRAYS

// ---> ordered collection of element
// ---> arrays are of reference (object) type in js

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
array.push("Chetany Maha Prabhu");
console.log(array);

array.pop();
console.log(array);

array.unshift("Hari das");
console.log(array);

array.shift();
console.log(array);


// primitive vs reference data type


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


