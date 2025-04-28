
const sectionsList = document.querySelectorAll('.section');
const sectionsBar = document.getElementById("sectionsBar");
let sectionButtons = [];



for(const section of sectionsList){
  let button = document.createElement("span");
  button.textContent = section.id.replace("-"," ");
  sectionsBar.appendChild(button);
  sectionButtons.push(button);
  section.style.display = "none"
}

let visibleSection = sectionsList[0];
visibleSection.style.display = "block";

sectionButtons.forEach((button, index) => {
  button.onclick = function(){
    visibleSection.style.display = "none";
    visibleSection = sectionsList[index];
    visibleSection.style.display = "block";}
});


const projectsList = document.querySelectorAll('.project');
const projectsBar = document.getElementById("projectsBar");
let projectButtons = [];



for(const project of projectsList){
  let button = document.createElement("span");
  button.textContent = project.id.replace("-"," ");
  projectsBar.appendChild(button);
  projectButtons.push(button);
  project.style.display = "none"
}

let visibleProject = projectsList[0];
visibleProject.style.display = "block";

projectButtons.forEach((button, index) => {
  button.onclick = function(){
    visibleProject.style.display = "none";
    visibleProject = projectsList[index];
    visibleProject.style.display = "block";}
});
