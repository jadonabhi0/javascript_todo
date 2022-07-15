console.log("Hari bol");

function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`
}


const button = document.querySelector("button");
const background = document.querySelector("main");
const currentColor = document.querySelector(".current-color");
// console.log(button)
button.addEventListener("click", function(){
    background.style.backgroundColor = randomColorGenerator();
    currentColor.textContent = randomColorGenerator();
})