console.log("Hare Krishna");

// important array methods

const number = [4,3,6,17,8,9];

function multiplyBy2(number,index){
    console.log("index is : ",index," and number is : ", 2*number);
    console.log();
}




// for each method
number.forEach(multiplyBy2);

const users = [
    {firstName : "Abhsihek", age : 21},
    {firstName : "Aman", age : 21},
    {firstName : "Shikha", age : 21},
    {firstName : "Krsna", age : 21},
    {firstName : "Hari Narayan", age : 21}
]

users.forEach(function(user){ // anonymous method
    console.log(user.firstName,",age is : ",user.age);
})



// map method

function square(num){
    return num * num; // it is crucial to return something
}
// const squareNumber = number.map(square); // map function return a new array

const squareNumber = number.map( (num, index) =>{
    return `square is ${num*num} and index is ${index}`;
})

console.log(squareNumber);


const firstName = users.map( (user) =>{
    return user.firstName;
});

console.log(firstName);


// filter function

const isEven = function(num){
        return num % 2 === 0;
}

const evenNumbers = number.filter(isEven);
console.log(evenNumbers);


// reduce method

const num = [1,2,3,4,5];
const sum = num.reduce((accumulator, currentVal) =>{
    return accumulator + currentVal;
} )

console.log(sum);


// accumulator, currValue , return 
// 1            2           3
// 3            3           6
// 6            4           10
// 10           5           15

// we can also set initial value of accumulator


const userCart  =[
    {productId : 1, productName : "item1", price : 150},
    {productId : 2, productName : "item2", price : 145},
    {productId : 3, productName : "item3", price : 100},
    {productId : 4, productName : "item4", price : 75},
]

const total = userCart.reduce((totalPrice, currPrice) => {
    return totalPrice + currPrice.price;
},0)

console.log(total);


// SORT method

    // it mutate the original array

    // integer sorting 
number.sort((a,b) => {
    return a - b;
});
console.log(number);

    // string sorting 
const username = ["krishna","hari","das","amog"];
username.sort();
console.log(username);


    // object sorting
userCart.sort((a,b) =>{
    return a.price - b.price;
})

console.log(userCart);


// FIND method

const myArray = ["Krsna","Amog", "Radha", "Lila","prabhu"];

const isLength5 = function(string){
    return string.length === 5;
}

const ansArray = myArray.find(isLength5); // it return the first finding
console.log(ansArray);




const userDetails = [
    {userId : 1,firstName : "Abhsihek", age : 21},
    {userId : 2,firstName : "Aman", age : 21},
    {userId : 3,firstName : "Shikha", age : 21},
    {userId : 4,firstName : "Krsna", age : 21},
    {userId : 5,firstName : "Hari Narayan", age : 21}
]

const ans = userDetails.find((user) => {
    return user.userId === 5;
})
console.log(ans.firstName);


// EVERY method

    // return boolean
const numbers = [2,4,6,8];

const isAllEven = numbers.every((num) => {
    return num % 2 === 0;
})

console.log(isAllEven);


const isAllGreaterThan = userCart.every((price) => {
    return price.price < 200;
})

console.log(isAllGreaterThan);


// SOME method

const arrayOfNumbers = [1,2,3,4,5,6,6.7,8,9];

const isAnyOdd = arrayOfNumbers.some((num) => num % 2 !== 0);
console.log(isAnyOdd);


// FILL method 

const myArrayFill = new Array(5).fill(-1);
console.log(myArrayFill);

arrayOfNumbers.fill(0, 2, 4);
console.log(arrayOfNumbers);

// SPLICE method
    // used to insert or delete in b/w of array, it mutate the org array

    const spliceArray = [1,2,3,4,5,6,7,80];

    // delete
    spliceArray.splice(1, 3); // (start idx, delete Count, inserted Value)
    console.log(spliceArray);

    // insert
    spliceArray.splice(1,0,"inserted item");
    console.log(spliceArray);
    
    // insert and delete
    const deleteditem = spliceArray.splice(1,2,"new inserted item");
    console.log(spliceArray);
    console.log(deleteditem);



    // ITERABLE
    // jinpe hum for of loop laga shake, ex array and string

    const fName = "Abhishek";

    for(let char of fName)
        console.log(char);
    



