console.log("Hari Bol");

console.log('Script start !!!!!!!!!!!!!!');
const allButton = document.querySelectorAll(".my-buttons button");
// console.log(allButton);

for(let button of allButton){
    var num = 0;
    button.addEventListener("click", function(eventObject){
        for(let i = 0 ; i < 100000000 ; i++){num+=i}
        console.log("value of num ", num);
        console.log(this.textContent);
        button.style.backgroundColor = "red";
    })
    
}
var num = 0;
for(let i = 0 ; i < 10000000 ; i++){num+=i}
console.log("Script end !!!!!!!!!!!!!!!!");