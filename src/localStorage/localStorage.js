function saveToStorage(projectList) {
    localStorage.setItem("projectList", JSON.stringify(projectList));
}

function getDataFromStorage(item) {
    const array = JSON.parse(localStorage.getItem(item));
    return array;
}

export {saveToStorage};
export {getDataFromStorage};