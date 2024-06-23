import { Project } from "../objects/project";
import { ProjectList} from "../objects/projectList";
import { createProjectDialog } from "./projectDialog";

const main = document.getElementById("main");
const sidebar = document.querySelector(".sidebar");
let projectList = new ProjectList();


function createDefaultProject() {
    let title = "Today";
    let description = "";
    let dueDate = new Date();
    let defaultProject = new Project(title, description, dueDate);
    projectList.addDefaultProject(defaultProject);
}

function createProject() {
    let projectTitle = document.getElementById("projectTitle").value;
    let projectsDescription = document.getElementById("projectDescription").value;
    let projectDueDate = document.getElementById("projectDueDate").value;

    let project = new Project(projectTitle, projectsDescription, projectDueDate);
    projectList.addProjectToProjectList(project);
}


function initialPage() {
    const addTask = document.createElement("button");
    addTask.textContent = "Add Task";
    addTask.classList.add("addTask");
    sidebar.appendChild(addTask);

    const addProject = document.createElement("button");
    addProject.textContent = "Add Project";
    addProject.classList.add("addProject");
    sidebar.appendChild(addProject);

    createDefaultProject();
    createProjectDialog();

    const projectDialog = document.querySelector(".projectDialog");

    addProject.addEventListener("click", () => {
        projectDialog.showModal();
    });

    const submitProject = document.querySelector(".submitProject");
    submitProject.addEventListener("click", createProject);
    console.log(projectList);
}

export {initialPage};