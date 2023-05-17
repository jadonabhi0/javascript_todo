console.log("Hari Bol");

class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    
    about(){
        return `${this.firstName} is ${this.age} years old`;
    }

    is18(){
        return this.age > 18;
    }

    sing(){
        return "hare krishna hare krishna "
    }
}

const user1 = new CreateUser("Abhishek", "jadon", "jadonabhi0@gmail.com", 15, "Amour");
const user2 = new CreateUser("Aman", "jadon", "jadonaman0@gmail.com", 14, "Amour");
const user3 = new CreateUser("Shikha", "jadon", "jadonshikha0@gmail.com", 18, "Amour");
const user4 = new CreateUser("Shailendra", "Singh", "shelendrasingh@gmail.com", 55, "Amour");
const user5 = new CreateUser("Lakshmi", "jadon", "jadonlaxmi0@gmail.com", 52, "Amour");


console.log(user1.about());
console.log(user1.is18());
console.log(user1.address);




class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    static classInfo(){
        console.log("This is Animal class");
    }

    eat(){
        console.log(`${this.name} is eating`);
    }

    isCute(){
        return true;
    }
    
}


const dog = new Animal("tom",3);
console.log(dog.age);
dog.eat();
Animal.classInfo();


class Dog extends Animal{
    
    constructor(name, age, speed){
        super();
        this.name = name;
        this.age = age;
        this.speed = speed;
    }

    eat(){
        console.log(`${this.name} is eating chicken `);
    }

    isCute(){
        return true;
    }

     isSuperCute(){
        return 1 <= this.age;
     }

     run(){
        console.log(`${this.name} is running at ${this.speed} kmph`);
     }
}


const tommy = new Dog("tommy", 2, 55);
console.log(tommy);
console.log(tommy.isCute());
tommy.run();
tommy.eat();



class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // getter method
    get getFullName(){
        console.log(this.firstName+" "+this.lastName);
    }

    set setFullName(fullName){
        const a = fullName.split(" ");
        this.firstName = a[0];
        this.lastName = a[1];
    }

    // setter method
    set  setFirstName(name){
        this.firstName = name;
    }

    set setLatName(lastName){
        this.lastName = lastName;
    }

}

const person1 = new Person("Abhishek", "JAdon", 21);
person1.setFirstName = "Aman";
person1.getFullName
person1.setLatName = "Jadon";
person1.fullName;
person1.setFullName = "shikha Jadon";
person1.getFullName
