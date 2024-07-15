function createEditDialog() {
    const body = document.querySelector("body");
    const dialog = document.createElement("dialog");
    const form = document.createElement("form");
    const h3 = document.createElement("h3");
    const titleElement = document.createElement("input");
    const descriptionElement = document.createElement("input");
    const dueDateElement = document.createElement("input");
    const priorities = document.createElement("select");
    const priorityElementLow = document.createElement("option");
    const priorityElementMedium = document.createElement("option");
    const priorityElementHigh = document.createElement("option");
    const editTaskButton = document.createElement("button");

    titleElement.type = "text";
    titleElement.maxLength = "20";
    descriptionElement.type = "textarea";
    dueDateElement.type = "date";
    editTaskButton.type = "submit";

    dialog.classList.add("editDialog");
    dialog.classList.add("hidden");
    priorities.classList.add("priorities");
    form.action = "#";
    form.method = "dialog";
    form.id = "Edit-Task-Form";
    titleElement.id = "editTaskTitle";
    titleElement.placeholder = "Title";
    descriptionElement.id = "editTaskDescription";
    descriptionElement.placeholder = "Description";
    dueDateElement.id = "editTaskDueDate";
    dueDateElement.min = new Date().toISOString().split("T")[0];
    dueDateElement.name = "date";
    
    priorities.id = "editTaskPriority";
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
    editTaskButton.textContent = "Edit Task";
    editTaskButton.classList.add("editTask");
    h3.textContent = "Edit Task";

    dialog.appendChild(form);
    form.appendChild(h3);
    form.appendChild(titleElement);
    form.appendChild(descriptionElement);
    form.appendChild(dueDateElement);

    form.appendChild(priorities);
    priorities.appendChild(priorityElementLow);
    priorities.appendChild(priorityElementMedium);
    priorities.appendChild(priorityElementHigh);
    form.appendChild(editTaskButton);
    body.appendChild(dialog);
}

function changeEditDialog(task) {
    const editTaskTitle = document.getElementById("editTaskTitle");
    const editTaskDescription = document.getElementById("editTaskDescription");
    const editTaskDueDate = document.getElementById("editTaskDueDate");
    const priorities = document.querySelector("#editTaskPriority");
    editTaskTitle.value = task.title;
    editTaskDescription.value = task.description;
    editTaskDueDate.value = task.dueDate;
    priorities.value = task.priority;
}

export {createEditDialog};
export {changeEditDialog};