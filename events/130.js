const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newtodotext = todoInput.value;
    const newLi = document.createElement("li");
    const newliinnerhtml = `
    <span class="text">${newtodotext}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>
    `;
  newLi.innerHTML = newliinnerhtml;
  todoList.append(newLi);
  console.log(newLi);
    todoInput.value = "";
})


todoList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("remove")){
        // console.log("you want to remove something !!")
        const targetedli = e.target.parentNode.parentNode;
        targetedli.remove();
    }if(e.target.classList.contains("done")){
        const lispan = e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration = "line-through";
    }
})
