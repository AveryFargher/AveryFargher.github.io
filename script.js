function setupTabs(listSelector, barId) {
  const list = document.querySelectorAll(listSelector);
  const bar = document.getElementById(barId);
  let buttons = [];

  list.forEach(item => {
    let button = document.createElement("span");
    button.textContent = item.id.replace(/-/g, " ");
    bar.appendChild(button);
    buttons.push(button);
    item.style.display = "none";
  });

  let visibleItem = list[0];
  let pressedButton = buttons[0];
  visibleItem.style.display = "block";
  pressedButton.style.color = "grey";

  buttons.forEach((button, index) => {
    button.onclick = function() {
      visibleItem.style.display = "none";
      pressedButton.style.color = "black";
      visibleItem = list[index];
      pressedButton = list[index];
      visibleItem.style.display = "block";
      pressedButton.style.color = "grey";
    };
  });
}

// Set up each tab group
setupTabs('.section', 'sectionsBar');
setupTabs('.project', 'projectsBar');
setupTabs('.interest', 'interestsBar');
