console.log("hari bol");

// const btn1 = document.getElementById("1");
// btn1.addEventListener("click", function(){console.log("You clicked me !!")})

const allBtn = document.querySelectorAll("button");
// console.log(allBtn);

for(let i = 0 ; i < allBtn.length ; i++){
    allBtn[i].addEventListener("click", function(){console.log(`I am ${this.textContent}`)})
}

