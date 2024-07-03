const main = document.getElementById("main");
const h3 = document.createElement("h3");
main.appendChild(h3);
h3.textContent = "Today";

function generateProjectTitle(projectButton) {
    h3.textContent = projectButton.textContent;
}


export {generateProjectTitle};