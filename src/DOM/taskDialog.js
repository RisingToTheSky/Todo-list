function createTaskDialog() {
    const body = document.querySelector("body");
    const dialog = document.createElement("dialog");
    const form = document.createElement("form");
    const h3 = document.createElement("h3");
    const low = document.createElement("p");
    const medium = document.createElement("p");
    const high = document.createElement("p");
    const container1 = document.createElement("div");
    const container2 = document.createElement("div");
    const container3 = document.createElement("div");
    const titleElement = document.createElement("input");
    const descriptionElement = document.createElement("input");
    const dueDateElement = document.createElement("input");
    const priorities = document.createElement("div");
    const priorityElementLow = document.createElement("button");
    const priorityElementMedium = document.createElement("button");
    const priorityElementHigh = document.createElement("button");
    const addTaskButton = document.createElement("button");

    titleElement.type = "text";
    titleElement.maxLength = "20";
    descriptionElement.type = "text";
    dueDateElement.type = "date";
    dueDateElement.setAttribute("min", new Date().toISOString().split("T")[0]);
    addTaskButton.type = "submit";

    dialog.classList.add("taskDialog");
    dialog.classList.add("hidden");
    priorities.classList.add("priorities");
    form.action = "#";
    form.method = "dialog";
    form.id = "Task-Form";
    titleElement.id = "taskTitle";
    titleElement.placeholder = "Title";
    descriptionElement.id = "taskDescription";
    descriptionElement.placeholder = "Description";
    dueDateElement.id = "taskDueDate";
    
    priorityElementLow.id = "priorityLow";
    priorityElementMedium.id = "priorityMedium";
    priorityElementHigh.id = "priorityHigh";

    priorityElementLow.name = "priority";
    priorityElementMedium.name = "priority";
    priorityElementHigh.name = "priority";

    low.textContent = "(LOW)";
    medium.textContent = "(MEDIUM)";
    high.textContent = "(HIGH)";

    addTaskButton.textContent = "Add Task";
    addTaskButton.classList.add("submitTask");
    h3.textContent = "Task";

    dialog.appendChild(form);
    form.appendChild(h3);
    form.appendChild(titleElement);
    form.appendChild(descriptionElement);
    form.appendChild(dueDateElement);
    priorities.appendChild(container1);
    priorities.appendChild(container2);
    priorities.appendChild(container3);
    container1.appendChild(priorityElementLow);
    container1.appendChild(low);
    container2.appendChild(priorityElementMedium);
    container2.appendChild(medium);
    container3.appendChild(priorityElementHigh);
    container3.appendChild(high);

    form.appendChild(priorities);
    form.appendChild(addTaskButton);
    body.appendChild(dialog);
}

export {createTaskDialog};