const btn = document.querySelector(".btn-headline");
console.log(btn)


// not a good way
// btn.onclick = function(){
//     console.log("You clicked me !!")
// }

// good way

const myFunc = function(){
     console.log("You clicked me !!")
    console.log("value of this")
    console.log(this)
}


// btn.addEventListener("click",myFunc);

btn.addEventListener("click", ()=>{
    console.log("You clicked me !!")
    console.log("value of this")
    // here the value of this is one level up i.e from surrounding
    console.log(this)
})