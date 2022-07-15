console.log("Hari Bol");

const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// console.log(grandParent, parent, child);

// capturing events
child.addEventListener("click", () =>{console.log("capturing !!!!!!! child")}, true);
parent.addEventListener("click", () =>{console.log("capturing !!!!!!! parent")}, true);
grandParent.addEventListener("click", () =>{console.log("capturing !!!!!!! grandparent")}, true);
document.body.addEventListener("click", () =>{console.log("capturing !!!!!!! body")}, true);


child.addEventListener("click", () =>{console.log("bubble child")});
parent.addEventListener("click", () =>{console.log("bubble parent")});
grandParent.addEventListener("click", () =>{console.log("bubble grandparent")});
document.body.addEventListener("click", () =>{console.log("bubble body")});
