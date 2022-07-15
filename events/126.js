console.log("Hari Bol");

const allButton = document.querySelectorAll(".my-buttons button");


for(let button of allButton){
    button.style.margin = "10px";
    button.addEventListener("click",function(){
        button.style.backgroundColor = "yellow"
        button.style.padding = "5px";
        button.style.fontWeight = "700";
        button.style.color = "#000455"
        button.style.borderRadius = "15px"
        button.style.padding = "10px"
        button.style.border = "1px solid green"

    })
}