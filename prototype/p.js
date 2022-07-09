console.log("Hari Bol")

// prototype is an extra empty object present inside function by default to add extra key value pair if needed

function chant(){
    console.log("Hare Krishan Hare Krishna");
}

chant();

console.log(chant.prototype); // this is prototype
 // we can set property of prototype

 chant.prototype.hare = "krsan";
 chant.prototype.radha = "rani";
 chant.prototype.sing = function(){
    return " jai jai radha raman hari bol";
 }

 console.log(chant.prototype);
 console.log(chant.prototype.sing());

 // =============================================================================================

//  function hello(){
//     console.log("Hello world");
// }

// const hello = 0;

const hello = [1,2,3,4];

if(hello.prototype) console.log("prototype is present");
else console.log("prototype is not present");


