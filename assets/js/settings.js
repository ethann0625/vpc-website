const settingsButton = document.getElementById("settings-menu-button");
const settingsContainer = document.getElementById("settings-container");
const test = document.getElementById("test");

settingsButton.addEventListener("click", (event) => {
  event.stopPropagation();
  settingsContainer.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  const inMenu = settingsContainer.contains(event.target);
  const inButton = settingsButton.contains(event.target);

  if (!inMenu && !inButton) {
    settingsContainer.classList.add("hidden");
  }
});
