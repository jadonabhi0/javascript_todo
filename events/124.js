console.log("Hare Bol");

const allButton = document.querySelectorAll(".my-buttons button");
// console.log(allButton);

for(let button of allButton){

    button.addEventListener("click", function(eventObject){
        console.log(eventObject.currentTarget)
    })
}