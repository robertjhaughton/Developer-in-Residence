const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addButton = document.getElementById('addButton');

let tasks = [];

addButton.addEventListener('click', addTask);
taskList.addEventListener('click', toggleTask);
taskList.addEventListener('click', handleTaskClick)

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText != ''){
        tasks.push(taskText)
        renderTasks();
        taskInput.value = ""
    }
}

function toggleTask(e) {
    if(e.target.tagName === "LI") {
        const taskItem = e.target
        const taskIndex = Array.from(taskList.children).indexOf(e.target);
        taskItem.classList.toggle("completed"); //mark as complete or toggle the completed task
        tasks[taskIndex] = tasks[taskIndex].startsWith("✔") ? tasks[taskIndex].slice(2) : "✔ " + tasks[taskIndex]
        renderTasks()
    }
}

function handleTaskClick(e){
    if(e.target.classList.contains("remove")){
        const taskItem = e.target.parentElement;
        const taskItem2 = taskItem.parentElement;
        const taskIndex = Array.from(taskList.children).indexOf(taskItem2)
        tasks.splice(taskIndex, 1);
        renderTasks();
    }
}

function renderTasks(){
    taskList.innerHTML = ""

    tasks.forEach((taskText, index) => {
        const taskItem = document.createElement("li");
        taskItem.textContent = `${index + 1}. ${taskText}` //adds list number to task text

        if(taskText.startsWith("✔ ")) {
            taskItem.classList.add("completed");
        }

        const removeButton = document.createElement("button");
        removeButton.innerHTML = `<i class="fa fa-trash remove"></i>`
        removeButton.classList.add("remove")

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
    }) 
}

function completeTask(event){
    const task = event.target;
    task.classList.toggle('completed');
}

function deleteTask(event) {
    const task = event.target.parentElement;
    taskList.removeChild(task);
}
