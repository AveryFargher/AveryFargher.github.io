function setupTabs(listSelector, barId) {
  const list = document.querySelectorAll(listSelector);
  const bar = document.getElementById(barId);
  let buttons = [];

  list.forEach(item => {
    let button = document.createElement("span");
    button.textContent = item.id.replace(/-/g, " ");
    button.classList.add('clickable');
    bar.appendChild(button);
    buttons.push(button);
    item.style.display = "none";
  });

  let visibleItem = list[0];
  let pressedButton = buttons[0];
  visibleItem.style.display = "block";
  pressedButton.classList.add('pressed');
  pressedButton.classList.remove('clickable');

  buttons.forEach((button, index) => {
    button.onclick = function() {
      visibleItem.style.display = "none";
      pressedButton.classList.remove('pressed');
      pressedButton.classList.add('clickable');
      visibleItem = list[index];
      pressedButton = button;
      visibleItem.style.display = "block";
      pressedButton.classList.add('pressed');
      pressedButton.classList.remove('clickable');
    };
  });
}


  
// Set up each tab group
setupTabs('.section', 'sectionsBar');
setupTabs('.project', 'projectsBar');
setupTabs('.interest', 'interestsBar');
