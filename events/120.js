// events

const btn = document.querySelector(".btn-headline");
console.log(btn)
// not a good way
// btn.onclick = function(){
//     console.log("You clicked me !!")
// }

// good way

btn.addEventListener("click", ()=>{console.log("You clicked me !!")})
