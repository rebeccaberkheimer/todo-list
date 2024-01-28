function handleSubmit(event) {
    event.preventDefault();
    const taskList = document.getElementById('taskList');
    const taskInput = document.getElementById('task');
    const task = taskInput.value;
    const newTask = document.createElement('li');
    const check = document.createElement('input');
    check.type = 'checkbox';
    const label = document.createElement('label');
    label.textContent = task;
    newTask.append(label);
    newTask.appendChild(check);
    check.addEventListener('change', function() {
        if(this.checked) {
            newTask.classList.add('completed');
        } else {
            newTask.classList.remove('completed');
        }
    });
    taskList.appendChild(newTask);
    taskInput.value='';
}

function handleClear(event) {
    const taskList = document.getElementById('taskList');
    const completedTasks = taskList.querySelectorAll('li.completed');
    completedTasks.forEach(task => {
        task.remove();
    }); 
}
   
const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);
const clear = document.getElementById('clearCompleted');
clear.addEventListener('click', handleClear);
