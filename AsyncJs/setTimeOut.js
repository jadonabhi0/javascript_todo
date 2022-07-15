console.log("Hari bol");


//Async javascript
console.log("script start");

for(let i = 0 ; i < 10 ; i++){
    console.log(i);
};

function hello(){
    console.log("inside setTimeOut")
}

// this function is provided by browser, it stops the execution of callback function
// for at least time
let id = setTimeout(hello, 1000); 

console.log("clear time out ");

clearTimeout(id); // this function stop the execution of callback fn



// setInterval(()=>{console.log("setTimeInterval")}, 0);


console.log("script end");