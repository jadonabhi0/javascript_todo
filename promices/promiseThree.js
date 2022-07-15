
// promise and setTimeOut simultaneously

function myPromise(){
    return new Promise((resolve, reject) =>{
        const flag = false;
        setTimeout(()=>{{
            if(flag){
                resolve();
            }else{
                reject()
            }
        }}, 1000)
    })
}

myPromise()
    .then(()=>{console.log("resolved")})
    .catch(()=>{console.log("reject")})