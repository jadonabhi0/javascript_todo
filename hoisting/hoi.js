console.log("Hari Bol");

// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.



// Variables defined with let and const are hoisted to the top of the block, but not initialized.

// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

// Using a let variable before it is declared will result in a ReferenceError.

// The variable is in a "temporal dead zone" from the start of the block until it is declared:

// Using a const variable before it is declared, is a syntax errror, so the code will simply not run.




console.log(myFunc);


let myFunc = function(){
    console.log("Chant and be happy");
}
console.log(myFunc);



console.log(chant);
function chant(){
    console.log("Hare Krishna");
}