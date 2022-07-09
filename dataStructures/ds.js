console.log("Hari Bol");

// SET



const set = new Set([1,2,3,4]);
console.log(set);

// set is iterable
// no duplicate element
// no index-based access


set.add(3);
set.add(8);
set.add(9);
set.add(50);
console.log(set);

console.log(set.has(1));


for(let val of set){
    console.log(val);
}


// MAP data structure

/*

map is iterable
stores key value pair

*/ 

// object literals
    // keys -> string always
    // keys -> symbol
const obj = {
    1 : "one",
    [1] :"array",
    "three" : 3

}

const person = new Map();

person.set("firstName" , "Abhishek");
person.set("age",22);
person.set("village", "amour");
person.set(7,"dob")

console.log(person);

console.log(person.get("firstName"))
console.log(person.keys())
console.log(person.values());

for(let key of person.keys()){
    console.log(key, typeof key)
}

for(let [key, value] of person){
    console.log(key, value);
}


// optional chaining

const user = {
    firstName : "Abhishek",
    address : {houseNumber : 4567}
}

console.log(user?.firstName);
console.log(user?.address?.houseNumber); // ? checks that property exist or not