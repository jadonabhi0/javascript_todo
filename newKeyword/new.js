console.log("Hari bol");


// new Keyword
function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}


createUser.prototype.about = function(){
    console.log(this.firstName,this.age);
}

const user1 = new createUser("Abhishek", 20);
// create empty object {} this
// return this
// Object.create(createUser.prototype) // set default

console.log(user1);

user1.about();
