function createTaskDialog() {
    const body = document.querySelector("body");
    const dialog = document.createElement("dialog");
    const form = document.createElement("form");
    const h3 = document.createElement("h3");
    const priorities = document.createElement("select");
    const titleElement = document.createElement("input");
    const descriptionElement = document.createElement("input");
    const dueDateElement = document.createElement("input");
    const priorityElementLow = document.createElement("option");
    const priorityElementMedium = document.createElement("option");
    const priorityElementHigh = document.createElement("option");
    const addTaskButton = document.createElement("button");

    titleElement.type = "text";
    titleElement.maxLength = "20";
    titleElement.placeholder = "Title";
    titleElement.id = "taskTitle";

    descriptionElement.type = "text";
    descriptionElement.id = "taskDescription";
    descriptionElement.placeholder = "Description";

    dueDateElement.type = "date";
    dueDateElement.min = new Date().toISOString().split("T")[0];
    dueDateElement.name = "date";
    dueDateElement.id = "taskDueDate";

    priorities.id = "taskPriority";
    priorityElementLow.id = "priority";
    priorityElementMedium.id = "priority";
    priorityElementHigh.id = "priority";

    priorityElementLow.name = "priority";
    priorityElementMedium.name = "priority";
    priorityElementHigh.name = "priority";

    priorityElementLow.value = "LOW";
    priorityElementMedium.value = "MEDIUM";
    priorityElementHigh.value = "HIGH";

    priorityElementLow.textContent = "LOW";
    priorityElementMedium.textContent = "MEDIUM";
    priorityElementHigh.textContent = "HIGH";
    
    priorities.appendChild(priorityElementLow);
    priorities.appendChild(priorityElementMedium);
    priorities.appendChild(priorityElementHigh);

    addTaskButton.textContent = "Add Task";
    addTaskButton.classList.add("submitTask");
    h3.textContent = "Task";

    addTaskButton.type = "submit";

    dialog.classList.add("taskDialog");
    dialog.classList.add("hidden");
    priorities.classList.add("priorities");
    form.action = "#";
    form.method = "dialog";
    form.id = "Task-Form";

    dialog.appendChild(form);
    form.appendChild(h3);
    form.appendChild(titleElement);
    form.appendChild(descriptionElement);
    form.appendChild(dueDateElement);

    form.appendChild(priorities);
    form.appendChild(addTaskButton);
    body.appendChild(dialog);
}

export {createTaskDialog};