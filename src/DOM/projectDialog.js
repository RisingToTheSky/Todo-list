function createProjectDialog() {
    const body = document.querySelector("body");
    const dialog = document.createElement("dialog");
    const form = document.createElement("form");
    const h3 = document.createElement("h3");
    const titleElement = document.createElement("input");
    const addProjectButton = document.createElement("button");

    titleElement.type = "text";
    addProjectButton.type = "submit";

    dialog.classList.add("projectDialog");
    dialog.classList.add("hidden");
    form.action = "#";
    form.method = "dialog";
    form.id = "Project-Form";
    titleElement.id = "projectTitle";
    titleElement.placeholder = "Title";
    titleElement.maxLength = "20";

    addProjectButton.textContent = "Add Project";
    addProjectButton.classList.add("submitProject");
    h3.textContent = "Project";

    dialog.appendChild(form);
    form.appendChild(h3);
    form.appendChild(titleElement);
    form.appendChild(addProjectButton);
    body.appendChild(dialog);
}

export {createProjectDialog};