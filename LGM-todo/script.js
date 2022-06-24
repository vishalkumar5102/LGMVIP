const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (todoInput.value === "") {
        alert("Type Your Task");
    }
    else {
        const newTodoText = todoInput.value;
        const newLi = document.createElement("li");
        const newInnerHtml = `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Complete</button>
        <button class="todo-btn remove">Delete</button>
    </div>`;
        newLi.innerHTML = newInnerHtml;
        todoList.append(newLi);
    }
    todoInput.value = "";
})

todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if (e.target.classList.contains("done")) {
        const lispan = e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration = "line-through";
    }
})


