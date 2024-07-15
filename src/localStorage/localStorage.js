function saveToStorage(projectList) {
    localStorage.setItem("projectList", JSON.stringify(projectList));
}

function getDataFromStorage() {
    return JSON.parse(localStorage.getItem("projectList")) || [];
}

export {saveToStorage};
export {getDataFromStorage};