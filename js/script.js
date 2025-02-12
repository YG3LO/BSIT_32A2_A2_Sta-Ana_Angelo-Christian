document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    const prioritySelect = document.getElementById("priority");
    const dueDateInput = document.getElementById("dueDate");
    
    loadTasks();
    
    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const priority = prioritySelect.value;
        const dueDate = dueDateInput.value;
        
        if (taskText !== "") {
            addTask(taskText, priority, dueDate);
            taskInput.value = "";
            dueDateInput.value = "";
            saveTasks();
        }
    });
    
    function addTask(text, priority, dueDate) {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        
        const taskContent = document.createElement("span");
        taskContent.textContent = `${text} (Priority: ${priority}, Due: ${dueDate || "No due date"})`;
        li.appendChild(taskContent);
        
        const btnGroup = document.createElement("div");
        
        const editBtn = document.createElement("button");
        editBtn.classList.add("btn", "btn-warning", "btn-sm", "me-2");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", function () {
            const newText = prompt("Edit your task:", text);
            const newPriority = prompt("Edit priority (High, Medium, Low):", priority);
            const newDueDate = prompt("Edit due date (YYYY-MM-DD):", dueDate);
            
            if (newText) {
                taskContent.textContent = `${newText} (Priority: ${newPriority || priority}, Due: ${newDueDate || dueDate || "No due date"})`;
                saveTasks();
            }
        });
        btnGroup.appendChild(editBtn);
        
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn", "btn-danger", "btn-sm");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            li.remove();
            saveTasks();
        });
        btnGroup.appendChild(deleteBtn);
        
        li.appendChild(btnGroup);
        taskList.appendChild(li);
        saveTasks();
    }
    
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll("#taskList li span").forEach((span) => {
            tasks.push(span.textContent);
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        storedTasks.forEach((task) => {
            const match = task.match(/^(.*) \(Priority: (.*), Due: (.*)\)$/);
            if (match) {
                addTask(match[1], match[2], match[3] === "No due date" ? "" : match[3]);
            }
        });
    }
});
