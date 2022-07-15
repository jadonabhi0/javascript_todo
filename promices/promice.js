

console.log("script start");

// promise is the feature of browser
const bucket = ["rice", "vegetables", "salt", "water", "tomato", "potato"];

// produce promise
const friedRicePromise = new Promise((resolve, reject)=>{
    if(bucket.includes("salt") && bucket.includes("rice") && bucket.includes("vegetables")){
        resolve("fried rice")
    }else{
        reject(new Error("something missing from bucket"));
    }
})

// consume promise

// how to consume

friedRicePromise.then((myFriedRice)=>{
    console.log("let's eat", myFriedRice);    
}, 

// (error)=>{
//     console.log(error)
// }

).catch((error)=>{console.log(error)})

setTimeout(()=>{
    console.log("hello from setTime out")
},0)



for(let i = 0 ; i < 100 ; i++){
    console.log(i);
}

console.log("Script end");
