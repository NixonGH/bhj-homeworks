document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('tasks__form');
    const taskInput = document.getElementById('task__input');
    const taskList = document.getElementById('tasks__list');

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const task = createTask(taskText);
            taskList.appendChild(task);
            taskInput.value = '';
        }
    });

    function createTask(text) {
        const task = document.createElement('div');
        task.className = 'task';

        const title = document.createElement('div');
        title.className = 'task__title';
        title.textContent = text;

        const removeBtn = document.createElement('a');
        removeBtn.href = '#';
        removeBtn.className = 'task__remove';
        removeBtn.innerHTML = '&times;';

        removeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            task.remove();
        });

        task.appendChild(title);
        task.appendChild(removeBtn);

        return task;
    }
});
