class Project {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
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