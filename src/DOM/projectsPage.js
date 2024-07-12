import { saveToStorage } from "../localStorage/localStorage";
import projectList from "./initialPage";
import { format } from "date-fns";
import { changeEditDialog } from "./editDialog";

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

function updateTask(task, title, dueDate) {
    let taskTitle = document.getElementById("editTaskTitle").value;
    let taskDescription = document.getElementById("editTaskDescription").value;
    let taskDueDate = document.getElementById("editTaskDueDate").value;
    let taskPriority = document.querySelector("#editTaskPriority").value;
    const date = format(taskDueDate, "dd-MM-yyyy");
    task.updateTask(taskTitle, taskDescription, date, taskPriority);
    title.textContent = taskTitle;
    dueDate.textContent = date;
    saveToStorage(projectList);
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
            localStorage.removeItem(task);
            saveToStorage(projectList);
            taskCard.remove();
        })

        const priorityButton = document.createElement("div");
        if (task.priority === "LOW") {
            priorityButton.style.backgroundColor = "green";
        } else if (task.priority === "MEDIUM") {
            priorityButton.style.backgroundColor = "orange";
        } else {
            priorityButton.style.backgroundColor = "red";
        }
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

        const editDialog = document.querySelector(".editDialog");
        editTask.addEventListener("click", () => {
            editTask.classList.add("editActive");
            changeEditDialog(task);
            editDialog.showModal();
            editDialog.classList.remove("hidden");
        })

        const submitEditedTask = document.querySelector(".editTask");
        submitEditedTask.addEventListener("click", () => {
            if (editTask.classList.contains("editActive")) {
                updateTask(task, taskTitle, taskDueDate, activeProject.title);
                if (task.priority === "LOW") {
                    priorityButton.style.backgroundColor = "green";
                } else if (task.priority === "MEDIUM") {
                    priorityButton.style.backgroundColor = "orange";
                } else {
                    priorityButton.style.backgroundColor = "red";
                }
                saveToStorage(projectList);
                editDialog.classList.add("hidden");
                editTask.classList.remove("editActive");
            }
        })
    });
}

export {generateProjectTitle};
export {generateTasks};