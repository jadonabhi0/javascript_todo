const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode);
// console.log(htmlElementNode.childNodes); //NodeList(3) [head, text, body]

// child relationship
const headNode = htmlElementNode.childNodes[0];
console.log(headNode);

// parent relationship
// console.log(headNode.parentNode)

const textNode = htmlElementNode.childNodes[1];
console.log(textNode);


const bodyNode = htmlElementNode.childNodes[2];
console.log(bodyNode);


// sibling relationships

// console.log(headNode.nextSibling.textContent)

console.log(headNode.childNodes);



// Exercise 

// access h1 and change the parent color

const h1 = document.querySelector("h1");
const h1parent = h1.parentNode;
// console.log(parent)
h1parent.style.border = "2px solid red";
h1parent.style.backgroundColor = "#efefef";
h1parent.style.padding = "20px";

const bodyParent = h1parent.parentNode;
bodyParent.style.backgroundColor = "cyan";