const main = document.getElementById("main");
const taskContainer = document.createElement("div");
taskContainer.classList.add("taskContainer");
const h3 = document.createElement("h3");
main.appendChild(h3);
main.appendChild(taskContainer);
h3.textContent = "Today";

function generateProjectTitle(projectButton) {
    h3.textContent = projectButton.textContent;
}

function generateTasks(activeProject) {
    taskContainer.textContent = "";
    activeProject.tasks.forEach(task => {
        const taskCard = document.createElement("div");
        taskCard.classList.add("task");
        taskContainer.appendChild(taskCard);

        const completeTaskButton = document.createElement("button");
        completeTaskButton.textContent = "✔";
        completeTaskButton.classList.add("complete");
        taskCard.appendChild(completeTaskButton);

        completeTaskButton.addEventListener("click", () =>{
            activeProject.setTaskAsComplete(task.uniqueId);
            taskCard.remove();
        })

        const priorityButton = document.createElement("button");
        priorityButton.classList.add("priority");
        taskCard.appendChild(priorityButton);

        const taskTitle = document.createElement("p");
        taskTitle.textContent = task.title;
        taskCard.appendChild(taskTitle);

        const taskDueDate = document.createElement("p");
        taskDueDate.textContent = task.dueDate;
        taskCard.appendChild(taskDueDate);

        const editTask = document.createElement("button");
        editTask.textContent = "edit";
        editTask.classList.add("edit");
        taskCard.appendChild(editTask);
    });
}

export {generateProjectTitle};
export {generateTasks};