console.log("Hare Krishna");

// use function keyword to declare function

//function deceleration
function chantHareKrishna(){
    console.log(
        "hare krishna hare krishna",
        "krishna krishna hare hare",
        "hare ram hare ram",
        "ram ram hare hare"
    )
    console.log("chant and be happy.......");
}
chantHareKrishna();


function addTwoNum(a,b){
    return a+b;
}
console.log(addTwoNum(5,6));


function isEvenOrOdd(a){
    return a % 2 == 0;
}
console.log(isEvenOrOdd(9));

function find(array, target){
    let c = 0;
    for(let i of array){
        c++;
        if(i == target) return c++;
    }
    return -1;
}

console.log(find([1,2,3,4,5,8,1,3,2],40));



// function expression
const sumThreeNum = function(a, b, c){
    return a+b+c;
}
console.log(sumThreeNum(1,2,3));



// arrow function

const findFromLast = (a, target) => {
    let c = 0;
    for(let i = a.length-1; i >= 0 ; i--){
        if(a[i] == target) return i;
    }
    return -1;
}

console.log(findFromLast([1,2,3,4,5,6],56));


// hoisting 

hello();

function hello(){
    console.log("Hello");
}


// nested function

const app = () => {
    console.log("inside app");

    const addTwo = function(a,b){
        return a+b;
    }
    console.log(addTwo(9,6));

    const isEven = num => num % 2 == 0;
    console.log(isEven(9));
}

app();


// lexical scope

// default parameters

function addTwo_(a=0,b=0){
    return a+b;
}
console.log(addTwo_(4,7));


// rest parameters

function myFunc(a, b, ...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is `,c); // return array
}
myFunc(1,2,3,4,5)


const addAll = (...numbers) => {
    let sum = 0;
    for(let val of numbers){
        sum += val;
    }
    console.log(sum);
}
addAll(1,2,3,4,5,6,7,8,9,10);


// PARAMETER DESTRUCTURING
const obj = {
    firstName : "Abhishek",
    lastName : "Jadon"
}
// traditional way
function printDetails(obj){
    console.log(obj.firstName);
    console.log(obj.lastName);
}
printDetails(obj);

// new 

function printDetails_({firstName, lastName, age}){
    console.log(firstName);
    console.log(lastName);
    console.log(age);
}

printDetails_(obj);


// callback function

function myFunc2(){
    console.log("inside func 2");
}

function callback_(callback){
    // console.log(callback);
    callback();
}

callback_(myFunc2);


// function returning function

function hello(){
    return "Hello world";
}

function myFUnc3(){

    function hello2(){
        return "hello world";
    }
    // return hello2;

    return function(){
        return "hello world";
    }
}


const ans = myFUnc3();
console.log(ans());
