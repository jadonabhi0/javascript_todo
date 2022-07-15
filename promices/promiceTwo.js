


// function returning promise
function ricePromise(){
    const bucket = ["rice", "vegetables", "salt", "water", "tomato", "potato"];
    return new Promise((resolve, reject) =>{
        if(bucket.includes("salt") && bucket.includes("rice") && bucket.includes("vegetables")){
            resolve("fried rice")
        }else{
            reject(new Error("something missing from bucket"));
        }
    })
}

ricePromise().then((myFriedRice)=>{console.log("let's enjoy", myFriedRice);
}).catch((error)=>{console.log("Something is missing form bucket")})


