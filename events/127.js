// keypress event

console.log("Hari Bol");

const body = document.body;
body.addEventListener("keypress", (event)=>{
    console.log(event);
})

const mainButton = document.querySelector(".btn-headline");
// console.log(mainButton)

mainButton.addEventListener("mouseover", ()=>{console.log("mouseover event is occuring")});
mainButton.addEventListener("mouseleave", ()=>{console.log("mouseleave event is occuring")});