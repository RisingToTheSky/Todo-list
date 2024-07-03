function createTaskDialog() {
    const body = document.querySelector("body");
    const dialog = document.createElement("dialog");
    const form = document.createElement("form");
    const h3 = document.createElement("h3");
    const titleElement = document.createElement("input");
    const descriptionElement = document.createElement("input");
    const dueDateElement = document.createElement("input");
    const priorityElement = document.createElement("input");
    const addTaskButton = document.createElement("button");

    titleElement.type = "text";
    descriptionElement.type = "text";
    dueDateElement.type = "date";
    addTaskButton.type = "submit";
    priorityElement.type = "radio";

    dialog.classList.add("taskDialog");
    form.action = "#";
    form.method = "dialog";
    form.id = "Task-Form";
    titleElement.id = "taskTitle";
    titleElement.placeholder = "Title";
    descriptionElement.id = "taskDescription";
    descriptionElement.placeholder = "Description";
    dueDateElement.id = "taskDueDate";
    dueDateElement.placeholder = "12-12-2024";
    priorityElement.id = "priority";

    addTaskButton.textContent = "Add Task";
    addTaskButton.classList.add("submitTask");
    h3.textContent = "Task";

    dialog.appendChild(form);
    form.appendChild(h3);
    form.appendChild(titleElement);
    form.appendChild(descriptionElement);
    form.appendChild(dueDateElement);
    form.appendChild(priorityElement);
    form.appendChild(addTaskButton);
    body.appendChild(dialog);
}

export {createTaskDialog};