document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Load tasks from local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to save tasks to local storage
    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Function to render tasks
    const renderTasks = () => {
        todoList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${task}</span>
                <button class="delete-button" data-index="${index}">Delete</button>
            `;
            todoList.appendChild(li);
        });
    };

    // Initial render
    renderTasks();

    // Event listener for adding tasks
    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            tasks.push(taskText);
            saveTasks();
            renderTasks();
            todoInput.value = '';
        }
    });

    // Event listener for deleting tasks
    todoList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-button')) {
            const index = event.target.getAttribute('data-index');
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        }
    });
});
