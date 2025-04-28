
const sectionsList = document.querySelectorAll('.section');
const sectionsBar = document.getElementById("sectionsBar");




for(const section of sectionsList){
  let button = document.createElement("span");
  button.textContent = section.id.replace("-"," ");
  sectionsBar.appendChild(button);
}
