import { Task } from "../objects/task";
import { Project } from "../objects/project";
import { ProjectList} from "../objects/projectList";
import { createProjectDialog } from "./projectDialog";
import { createTaskDialog } from "./taskDialog";
import { generateProjectTitle } from "./projectsPage";
import { generateTasks } from "./projectsPage";
import { createEditDialog } from "./editDialog";
import { format } from "date-fns";
import { saveToStorage } from "../localStorage/localStorage";

const main = document.getElementById("main");
const sidebar = document.querySelector(".sidebar");    
const projectContainer = document.createElement("div");
projectContainer.classList.add("projectContainer");
let projectList = new ProjectList();


function createDefaultProject() {
    let title = "Today";
    let defaultProject = new Project(title);
    projectList.addDefaultProject(defaultProject);

    const defaultProjectButton = document.createElement("button");
    defaultProjectButton.textContent = defaultProject.title;
    defaultProjectButton.classList.add("project", "active");
    projectContainer.appendChild(defaultProjectButton);
}

function createTask() {
    let taskTitle = document.getElementById("taskTitle").value;
    let taskDescription = document.getElementById("taskDescription").value;
    let taskDueDate = document.getElementById("taskDueDate").value;
    let taskPriority = document.getElementsByName("priority").checked;

    let activeProjectTitle = document.querySelector(".project.active").textContent;
    let activeProject = projectList.projects.find(project => project.title === activeProjectTitle);

    if (activeProjectTitle === "Today") {
        let task = new Task(taskTitle, taskDescription, taskPriority);
        activeProject.addTaskToProject(task);
        generateTasks(activeProject);
        saveToStorage(projectList);
    } else {
        const date = format(taskDueDate, "dd-MM-yyyy");
        let task = new Task(taskTitle, taskDescription, date, taskPriority);
        activeProject.addTaskToProject(task);
        generateTasks(activeProject);
        saveToStorage(projectList);
    }
}

function createProject() {
    let projectTitle = document.getElementById("projectTitle").value;
    let project = new Project(projectTitle);
    projectList.addProjectToProjectList(project);
    saveToStorage(projectList);
    let projectButton = document.createElement("button");
    projectButton.textContent = projectTitle;
    projectButton.classList.add("project");
    projectContainer.appendChild(projectButton);
    console.log(projectList);
}

function initialPage() {
    const addTask = document.createElement("button");
    addTask.textContent = "Add Task";
    addTask.classList.add("addTask");
    main.appendChild(addTask);

    const projects = document.createElement("button");
    projects.textContent = "Projects";
    sidebar.appendChild(projects);

    sidebar.appendChild(projectContainer);

    const addProject = document.createElement("button");
    addProject.textContent = "Add Project";
    addProject.classList.add("addProject");
    sidebar.appendChild(addProject);


    createDefaultProject();
    createProjectDialog();
    createTaskDialog();
    createEditDialog();
    
    projectContainer.addEventListener("click" , () => {
        const projectButtons = document.querySelectorAll(".project");
        projectButtons.forEach(project => {
            project.addEventListener("click", () => {
                const current = document.querySelector('.project.active');
                current.classList.remove('active');
                project.classList.add('active');
                generateProjectTitle(project);
                let activeProjectTitle = document.querySelector(".project.active").textContent;
                let activeProject = projectList.projects.find(project => project.title === activeProjectTitle);

                generateTasks(activeProject);
            });
        });
    });

    const projectDialog = document.querySelector(".projectDialog");

    addProject.addEventListener("click", () => {
        projectDialog.classList.remove("hidden");
        projectDialog.showModal();
    });

    const submitProject = document.querySelector(".submitProject");
    submitProject.addEventListener("click", () => {
        createProject();
        projectDialog.classList.add("hidden");
    });

    const taskDialog = document.querySelector(".taskDialog");

    addTask.addEventListener("click", () => {
        taskDialog.classList.remove("hidden");
        taskDialog.showModal();
    });

    const submitTask = document.querySelector(".submitTask");

    submitTask.addEventListener("click", () => {
        createTask();
        taskDialog.classList.add("hidden");
    });
}


export {initialPage};
export default projectList;