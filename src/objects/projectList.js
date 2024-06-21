import { Project } from "./project";

class projectList {
    constructor() {
        this.projects = projects;
    }

    addProjectToProjectList(project) {
        this.projects.push(project)
    }

    addDefaultProject(defaultProject) {
        this.projects.push(defaultProject);
    }
}

export {projectList};