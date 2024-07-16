import { Task } from "../objects/task";
import { Project } from "../objects/project";
import { ProjectList} from "../objects/projectList";
import { createProjectDialog } from "./projectDialog";
import { createTaskDialog } from "./taskDialog";
import { createEditDialog } from "./editDialog";
import { generateProjectTitle } from "./projectsPage";
import { generateTasks } from "./projectsPage";
import { format } from "date-fns";
import { saveToStorage } from "../localStorage/localStorage";
import { getDataFromStorage } from "../localStorage/localStorage";

const main = document.getElementById("main");
const sidebar = document.querySelector(".sidebar");    
const projectContainer = document.createElement("div");
projectContainer.classList.add("projectContainer");
let projectList = new ProjectList();

function loadProjects() {
    const storedData = getDataFromStorage();
    if (storedData) {
        projectList = Object.assign(new ProjectList(), storedData);
        projectList.projects = projectList.projects.map(projectData => {
            let project = Object.assign(new Project(), projectData);
            project.tasks = project.tasks.map(taskData => Object.assign(new Task(), taskData));
            return project;
        });

        projectList.projects.forEach(project => {
            let projectButton = document.createElement("button");
            projectButton.textContent = project.title;
            projectButton.classList.add("project");
            if (project.title === "The Odin Project") {
                projectButton.classList.add("active");
                generateTasks(project);
            }
            projectContainer.appendChild(projectButton);
        });

        let activeProject = projectList.projects.find(project => project.title === "Today");
        if (activeProject) {
            generateTasks(activeProject);
        }

        let defaultProject = projectList.projects.find(project => project.title === "The Odin Project");
        if (!defaultProject) {
            defaultProject = createDefaultProject();
        }

    } else {
        const defaultProject = createDefaultProject();
        generateTasks(defaultProject);
    }
}

function createDefaultProject() {
    let title = "The Odin Project";
    let defaultProject = new Project(title);
    projectList.addDefaultProject(defaultProject);

    const defaultProjectButton = document.createElement("button");
    defaultProjectButton.textContent = defaultProject.title;
    defaultProjectButton.classList.add("project", "active");
    projectContainer.appendChild(defaultProjectButton);
    saveToStorage(projectList);
}

function createTask() {
    let taskTitle = document.getElementById("taskTitle").value;
    let taskDescription = document.getElementById("taskDescription").value;
    let taskDueDate = document.getElementById("taskDueDate").value;
    let taskPriority = document.querySelector("#taskPriority").value;

    if (taskTitle === "" || taskDueDate === "" || taskPriority === "") {
        alert("You need to fill this in");
        return;
    }
    let activeProjectTitle = document.querySelector(".project.active").textContent;
    let activeProject = projectList.projects.find(project => project.title === activeProjectTitle);
    const date = format(taskDueDate, "dd-MM-yyyy");
    let task = new Task(taskTitle, taskDescription, date, taskPriority);
    activeProject.addTaskToProject(task);
    generateTasks(activeProject);
    saveToStorage(projectList);
}

function createProject() {
    let projectTitle = document.getElementById("projectTitle").value;
    if (projectTitle === "") {
        alert("Fill in a title!");
        return;
    }
    let project = new Project(projectTitle);
    projectList.addProjectToProjectList(project);
    saveToStorage(projectList);
    let projectButton = document.createElement("button");
    projectButton.classList.add("project");
    projectButton.textContent = projectTitle;
    projectContainer.appendChild(projectButton);
}

function initialPage() {
    const addTask = document.createElement("button");
    addTask.textContent = "+ Add Task";
    addTask.classList.add("addTask");
    main.appendChild(addTask);

    const projects = document.createElement("p");
    projects.classList.add("projects");
    projects.textContent = "Projects";
    sidebar.appendChild(projects);

    sidebar.appendChild(projectContainer);

    const addProject = document.createElement("button");
    addProject.textContent = "+ Add Project";
    addProject.classList.add("addProject");
    sidebar.appendChild(addProject);

    createProjectDialog();
    createTaskDialog();
    createEditDialog();
    loadProjects();
    
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