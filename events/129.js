// event delegation


const grandParent = document.querySelector(".grandparent");

grandParent.addEventListener("click", (e) =>{
    console.log(e.target.textContent);
});