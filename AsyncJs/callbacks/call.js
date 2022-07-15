
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const ten = document.querySelector(".ten");
const eleven = document.querySelector(".eleven");
const twelve = document.querySelector(".twelve");



// callback hell


//  setTimeout(()=>{
//     one.textContent = "One";
//     one.style.color = "violet";
//     setTimeout(()=>{
//         two.textContent = "Two";
//         two.style.color = "indigo";
//         setTimeout(()=>{
//             three.textContent = "Three";
//             three.style.color = "blue";
//             setTimeout(()=>{
//                 four.textContent = "Four";
//                 four.style.color = "green";
//                 setTimeout(()=>{
//                     five.textContent = "five";
//                     five.style.color = "yellow";
//                     setTimeout(()=>{
//                         six.textContent = "Six";
//                         six.style.color = "orange";
//                         setTimeout(()=>{
//                             seven.textContent = "Seven";
//                             seven.style.color = "red";
//                          },1000)
//                      },1000)
//                  },1000)
//              },1000)
//          },1000)
//      },1000)
//  },1000)


// pyramid of Doom


function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
    // console.log(element)
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback();
            }
        }else{
            if(onFailureCallback){
                onFailureCallback();
            }
        }
        
    },time)
}


changeText(one, "one", "violet", 1000, ()=>{
    changeText(two, "two", "indigo", 1000, ()=>{
        changeText(three, "three", "blue", 1000, ()=>{
            changeText(four, "four", "green", 1000, ()=>{
                changeText(five, "five", "yellow", 1000, ()=>{
                    changeText(six, "six", "orange", 1000, ()=>{
                        changeText(seven, "seven", "red", 1000, ()=>{
                            changeText(eight, "eight", "violet", 1000, ()=>{
                                changeText(nine, "nine", "cyan", 1000, ()=>{
                                    changeText(ten, "ten", "purple", 1000, ()=>{
                                        changeText(eleven, "eleven", "maroon", 1000, ()=>{
                                            changeText(twelve, "twelve", "grey", 1000, ()=>{
                                            }, ()=>{console.log("heading doesn't exist")}) 
                                        }, ()=>{console.log("heading doesn't exist")}) 
                                    }, ()=>{console.log("heading doesn't exist")}) 
                                }, ()=>{console.log("heading doesn't exist")})  
                            }, ()=>{console.log("heading doesn't exist")})  
                        }, ()=>{console.log("heading doesn't exist")})  
                    }, ()=>{console.log("heading doesn't exist")})  
                }, ()=>{console.log("heading doesn't exist")})  
            }, ()=>{console.log("heading doesn't exist")})  
        }, ()=>{console.log("heading doesn't exist")})  
    }, ()=>{console.log("heading doesn't exist")})
}, ()=>{console.log("heading doesn't exist")})

