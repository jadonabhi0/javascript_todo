console.log("Hare Krishna");

// loops

// while loop
var i = 0; 
while(i <= 9){
    console.log(i++);
}

// print sum 1-10 using while loop;

// 1 -->
var sum = 0;
var i = 1;
while(i <= 10){
    sum += i;
    i++;
}
console.log(sum);

// 2-->
var sum = 10*(10+1)/2;
console.log(sum);


// for loop
var sum = 0;
for(var i = 1 ; i <= 10 ; i++){
    sum += i;
}
console.log(sum);

// do while loop

let val = 1;
do{
    console.log(val++);
}while(val <= 10) // do while iterate one time more then all type of loops