// get and set attribute


const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://w3school.com");
console.log(link.getAttribute("href").slice(1));

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));

