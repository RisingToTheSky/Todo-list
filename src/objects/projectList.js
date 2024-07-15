class ProjectList {
    constructor() {
        this.projects = [];
    }

    addProjectToProjectList(project) {
        this.projects.push(project)
    }

    addDefaultProject(defaultProject) {
        this.projects.push(defaultProject);
    }
}

export {ProjectList};