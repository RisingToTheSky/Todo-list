class Project {
    constructor(title) {
        this.title = title;
        this.uniqueId = Date.now();
        this.tasks = [];
    }

    addTaskToProject(task) {
        this.tasks.push(task);
    }

    setTaskAsComplete(uniqueId) {
        this.tasks = this.tasks.filter(Task => Task.uniqueId !== uniqueId);
    }
}

export {Project};