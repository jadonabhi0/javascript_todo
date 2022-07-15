// add New html elements to top

const todoList  = document.querySelector(".todo-list");

// but this is not the good way to add html
todoList.innerHTML += "<li> New Todo </li>";

// good way

const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teacher Student");
// also do this
newTodoItem.textContent = "Teacher Student";
// todoList.append(newTodoItem);
// todoList.prepend(newTodoItem)
// todoList.before(newTodoItem);
// todoList.after(newTodoItem)

const todo1 = document.querySelector(".todo-list li");
// todo1.remove();
