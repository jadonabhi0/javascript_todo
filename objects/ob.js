console.log("Hare Krishna");

// objects are reference type
// array are good but not sufficient for real world data
// object store key value pairs

const person = {
    name : "Abhishek",
    age : 18,
    hobbies : "driving"
    };


console.log(person, typeof person);

// data accessing for object;
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);
console.log(person["age"]);

// adding key value pair
person.gender = "male";
person["status"] = "single";
console.log(person);

// use for in loop
for(let key in person){
    console.log(key,"--->",person[key]);
}
console.log(Object.keys(person)); // return array
console.log(Object.values(person));


// use for of loop
for(let key of Object.keys(person)){
    console.log(key,"--->",person[key]);
}


// computed properties
 const key1 = "object1";
 const key2 = "object2";

 const value1 = "item1";
 const value2 = "item2";


const obj = {
    // computed properties
    [key1] : value1,
    [key2] : value2,
    
}
console.log(obj);



// spread operator in array
   
const array1 = [1,2,3,4];
const array2 = [5,6,7,8];

const newArray = [...array1, ...array2];
console.log(newArray);
// spread operator works on iterable  
const array3 = [..."Abhishek jadon"];
console.log(array3);


// spread operator in objects

const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = {
    // duplicate keys will override
    key3 : "value3",
    key4 : "value4"
}

const newObj = {
    ...obj1,
    ...obj2,
    key5 : "value5"
}
console.log(newObj);


const abc = {
    ..."abcdefghijklmnopqrstuvwxyz"
};
console.log(abc);


// object destructuring

// objects in array

const users = [
    {userId : 1, firstName : "Abhishek", gender : "male"},
    {userId : 2, firstName : "Shikha", gender : "female"},
    {userId : 3, firstName : "Aman", gender : "male"}
]

console.log(users);
for(let user of users){
    console.log(user);
}

