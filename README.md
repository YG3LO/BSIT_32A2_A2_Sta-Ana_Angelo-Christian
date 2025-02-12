# Dynamic To-Do List with Bootstrap 5 and JavaScript

## Objective:
To create a modern, interactive to-do list application using HTML, Bootstrap for styling, and vanilla JavaScript for DOM manipulation. This version includes **dark mode**, **task priority**, **due dates**, and **editing functionality**.

## Features Implemented:
✅ Add new tasks with **priority levels** (High, Medium, Low) and **due dates**.  
✅ **Edit** task details (due date and priority).  
✅ **Delete** tasks.  
✅ **Mark tasks as complete** with a visual indicator.  
✅ **Dark mode UI** with a sleek modern design.  
✅ **Tasks are displayed with priority and due date.**  
✅ Buttons are aligned **horizontally** with improved UI.  
✅ Add task button is positioned **on the right corner** and styled in **mustard color**.  

---

## Project Setup:

### 1. HTML Structure:
The to-do list is structured using Bootstrap for styling.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic To-Do List</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center">To-Do List</h1>
        <div class="input-group mb-3">
            <input type="text" id="taskInput" class="form-control" placeholder="Add a new task">
            <select id="priority" class="form-select">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <input type="date" id="dueDate" class="form-control">
            <button class="btn btn-warning" id="addTaskButton">Add Task</button>
        </div>
        <ul class="list-group" id="taskList"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### 2. JavaScript Functionality:
The script enables adding, editing, marking tasks as done, and deleting tasks.

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const priorityInput = document.getElementById('priority');
    const dueDateInput = document.getElementById('dueDate');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        const priority = priorityInput.value;
        const dueDate = dueDateInput.value;
        
        if (!taskText) return;
        
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = `
            <span>${taskText} (Priority: ${priority}, Due: ${dueDate})</span>
            <div>
                <button class="btn btn-sm btn-success">Done</button>
                <button class="btn btn-sm btn-success edit-button">Edit</button>
                <button class="btn btn-sm btn-danger delete-button">Delete</button>
            </div>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});
```

### 3. Modern Dark Mode Styling (`styles.css`)

```css
body {
    font-family: 'Poppins', sans-serif;
    background: #121212;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background: #1e1e1e;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 500px;
}

h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
}

.input-group input, .input-group select, .input-group button {
    height: 45px;
    font-size: 16px;
}

.list-group-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 10px;
    background: #2a2a2a;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    color: #fff;
}

.btn-warning {
    background: #ffcc00;
    color: black;
}

.btn-success {
    background: #28a745;
}

.btn-danger {
    background: #ff4d4d;
}

.btn:hover {
    opacity: 0.8;
}
```

---

## How to Run the Project:
1. Clone this repository:
   ```sh
   git clone https://github.com/YOUR_USERNAME/BSIT_SECTION_A2_LASTNAME_FIRSTNAME.git
   ```
2. Open `index.html` in a browser.
3. Add tasks, set priority and due dates, edit or delete tasks!

---

## Future Improvements:
- Store tasks in **localStorage** for persistence.
- Implement sorting based on priority or due date.
- Add filtering options (e.g., show only high-priority tasks).

---

### 📌 Submission Guidelines:
✅ Ensure your GitHub repository is named **BSIT_[SECTION]_A2_LASTNAME_FIRSTNAME**.  
✅ **Do NOT** submit as a ZIP file.  
✅ All project files should be inside a folder named `PRELIM_A2`.  

---



