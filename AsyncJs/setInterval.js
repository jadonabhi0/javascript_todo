
const body = document.body;
const id = setInterval(()=>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
},100)

const button = document.querySelector(".btn");
button.addEventListener("click", ()=>{
    clearInterval(id);
    button.textContent = body.style.backgroundColor;
})