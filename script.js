
const sectionsList = document.querySelectorAll('.section');
const sections = document.getElementById("sections");




for(const section of sectionsList){
  let button = document.createElement("span");
  button.textContent = section.id.replace("-"," ");
  sections.appendChild(button);
}
