function openForm() {
    document.getElementById("taskForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("taskForm").style.display = "none";
}

function addTask(event) {
    event.preventDefault();

    const taskInput = document.getElementById("task");
    const task = taskInput.value;

    if (task) {
        const taskList = document.getElementById("tasks");
        const listItem = document.createElement("li");
        listItem.textContent = task;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        taskInput.value = "";
        closeForm();
        const taskCard = document.querySelector('.task-card');
        if (!taskCard) {
            const newCard = document.createElement('div');
            newCard.classList.add('card', 'task-card');
            newCard.style.width = '18rem';
            newCard.style.marginLeft = '20px';
            newCard.innerHTML = `
                <h3>Your Tasks:</h3>
                <ul id="tasks"></ul>
            `;
            document.querySelector('.card').parentNode.appendChild(newCard);
        }
    } else {
        alert("Please enter a task.");
    }
}