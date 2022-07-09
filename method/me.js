console.log("Hari Bol");

// method 
    /* function inside object */

const person = {
    firstName : "Abhishek",
    age  : 21,
    about : function(){console.log(`person name is ${this.firstName} and person age is ${this.age}`)},
    address : () => {console.log("Vill and post  Amour Nagla Jeevan")}
}

person.about();
person.address();


// this 

function myFunc(){
    "use strict"
    console.log(this);
}
myFunc();


// call function

function about (hobby, favSong) {
    console.log(this.firstName, this.age, hobby, favSong )
}

const user1 = {
    firstName : "Abhishek",
    age : 22,
}

const user2 = {
    firstName : "Aman",
    age : 19
}

// call method 

about.call(user1,"reading scriptures", "hare krishna");

// apply method

about.apply(user2,["reading scriptures", "hare krishna"]);

// bind method

const func = about.bind(user2, "reading scriptures", "hare krishna");
func();


// __proto__

const admin1 = {
    key1 : "value1",
    key2 : "value2"
}

const admin2 = Object.create(admin1);
    admin2.key3 = "value3"


console.log(admin2.key2);
console.log(admin2);
console.log(admin2.__proto__)

