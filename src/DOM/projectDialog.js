import { Project } from "../objects/project";
import { projectList } from "../objects/projectList";


function createProjectDialog() {
    const body = document.querySelector("body");
    const dialog = document.createElement("dialog");
    const form = document.createElement("form");
    const h3 = document.createElement("h3");
    const titleElement = document.createElement("input");
    const descriptionElement = document.createElement("input");
    const dueDateElement = document.createElement("input");
    const addProjectButton = document.createElement("button");

    titleElement.type = "text";
    descriptionElement.type = "text";
    dueDateElement.type = "date";
    addProjectButton.type = "submit";

    dialog.classList.add("projectDialog");
    form.action = "#";
    form.method = "dialog";
    form.id = "Project-Form";
    titleElement.id = "projectTitle";
    descriptionElement.id = "projectDescription";
    dueDateElement.id = "projectDueDate";
    titleElement.ariaPlaceholder = "Title";
    descriptionElement.ariaPlaceholder = "Description";

    addProjectButton.textContent = "Add Project";
    addProjectButton.classList.add("submitProject");
    h3.textContent = "Project";

    dialog.appendChild(form);
    form.appendChild(h3);
    form.appendChild(titleElement);
    form.appendChild(descriptionElement);
    form.appendChild(dueDateElement);
    form.appendChild(addProjectButton);
    body.appendChild(dialog);
}

export {createProjectDialog};