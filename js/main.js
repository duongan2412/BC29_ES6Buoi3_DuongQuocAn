import { Todo } from "./../models/todo.js"
import { TodoList } from "./../models/todoList.js"

const todoList = new TodoList();

const getEle = (id) => document.getElementById(id);

const renderTaskInProress = () => {
    const content = todoList.filterTaskInProgress().reduce((total, value) => {
        total += `
            <li class="d-flex">
                <p>${value.taskName}</p>
                <div class="buttons">
                    <span class="far fa-trash-alt remove" onclick="removeTask('${value.taskName}')"></span>
                    <span class="fas fa-check-circle complete" complete onclick="completeTask('${value.taskName}')"></span>
                </div>
            </li>   
        `
        return total
    }, "");
    getEle("todo").innerHTML = content;
}

const renderTaskComplete = () => {
    const content = todoList.filterTaskComp().reduce((total, value) => {
        total += `
            <li class="d-flex">
                <p>${value.taskName}</p>
                <div class="buttons">
                    <span class="far fa-trash-alt remove" onclick="removeTask('${value.taskName}')"></span>
                    <span class="fas fa-check-circle complete")"></span>
                </div>
            </li>   
        `
        return total
    }, "");
    getEle("completed").innerHTML = content;
}

getEle("addItem").onclick = () => {
    const nameTask = getEle("newTask").value;
    if (nameTask == "") {
        alert("Please input an activity");
        return;
    }
    const task = new Todo(nameTask, "inProgress");
    todoList.addTask(task);
    renderTaskInProress();
    renderTaskComplete();
    getEle("newTask").value = "";
}

window.removeTask = (task) => {
    todoList.deleteTask(task);
    renderTaskInProress();
    renderTaskComplete();
}

window.completeTask = (task) => {
    todoList.arr.forEach((ele) => {
        if (ele.taskName === task) {
            ele.status = "complete";
        }
    })
    renderTaskInProress();
    renderTaskComplete();
}


getEle("two").onclick = () => {
    todoList.sortTaskAsc();
    renderTaskInProress();
}

getEle("three").onclick = () => {
    todoList.sortTaskDec();
    renderTaskInProress();
}