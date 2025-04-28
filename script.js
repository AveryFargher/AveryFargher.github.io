
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

sectionButtons[0].style.color = var(--greyed-out)
let visibleSection = sectionsList[0];
visibleSection.style.display = "block";

sectionButtons.forEach((button, index) => {
  button.onclick = function(){
    visibleSection.style.display = "none";
    visibleSection = sectionsList[index];
    visibleSection.style.display = "block";}
});
