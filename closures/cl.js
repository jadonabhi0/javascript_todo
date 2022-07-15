console.log("Hari Bol");

// In JavaScript, a closure is a function that references variables in the outer scope from 
// its inner scope. The closure preserves the outer scope inside its inner scope.

// Closure means that an inner function always has access to the vars and parameters of its outer
//  function, even after the outer function has returned.


// Example 1
function outerFunction(firstName){
    let lastName = "Jadon";
    function innerFunction(){
        console.log(firstName, lastName);
    }

    return innerFunction;

}

// here the outer function is returning innerFunction and the innerFunction is being returned
// with the lexical environment of outerFunction.

// i.e -> return (innerFunction + firstName + lastName)


const ans = outerFunction("Abhishek");
ans();


// Example 2

function myFunction(power){
    return function(number){
        return number ** power;
    }

}

const square = myFunction(2);
const jawab = square(5);
console.log(jawab);



function myFun(){
    let count = 0;
    return function(){
        if(count < 1){
            console.log("Hey i am called !");
            count++;
        }else{
            console.log("Main ek bar call ho chuka hun ");
        }
    }
}

const uttar = myFun();
uttar();
uttar();
uttar();
