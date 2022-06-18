import { Todo } from "./../models/todo.js"
import { TodoList } from "./../models/todoList.js"

const todoList = new TodoList();

const getEle = (id) => document.getElementById(id);

const renderTask = () => {
    const content = todoList.arr.reduce((total, value) => {
        total += `
            <li class="d-flex">
                <p>${value.taskName}</p>
                <div class="buttons">
                    <span class="fas fa-trash remove" onclick="removeTask('${value.taskName}')"></span>
                    <span class="fas fa-check-circle complete onclick="completeTask('${value.taskName}')"></span>
                </div>
            </li>   
        `
        return total
    }, "");
    getEle("todo").innerHTML = content;
}

getEle("addItem").onclick = () => {
    const nameTask = getEle("newTask").value;
    if (nameTask == "") {
        alert("Please input an activity");
        return;
    }
    const task = new Todo(nameTask, "inProgress");
    todoList.addTask(task);
    renderTask();
    getEle("newTask").value = "";
}

window.removeTask = (task) => {
    todoList.deleteTask(task);
    renderTask();
}

window.completeTask = (task) => {

}
// tạo thêm arr complete