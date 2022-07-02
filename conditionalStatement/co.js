// if else condition

// can vote or not
let age = 14;
if(age >= 18){
    console.log("you can vote");
}else{
    console.log("wait for some time");
}

// even or odd
let num = 34;
if(num%2 == 0){
    console.log(`${num} is even`);
}else{
    console.log(`${num} is odd`);
}

// truthy and falsy
    // some falsy values
    // --> null
    // --> ""
    // --> undefined
    // --> false
    // --> 0

    // truthy values
    // --> "abs"
    // --> 1 || -1
    // --> true
    // --> ...etc

let fname = 1;
if(fname){
    console.log(fname);
}else{
    console.log("this is false");
}


// nested if else
    // if
    // else if
    // else if
    // else if
    // else

let temp = +prompt("Enter Temperature");

if(temp < 0){
    console.log("Extremely cold outside");
}else if(temp <= 15){
    console.log("It is cold outside");
}else if(temp <= 25){
    console.log("Weather is ok! outside");
}else if(temp <= 35){
    console.log("Let's go for a walk");
}else if(temp <= 45){
    console.log("turn on AC");
}else{
    console.log("Extremely hot outside");
}