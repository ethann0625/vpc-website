const settingsButton = document.getElementById("settings-menu-button");
const settingsContainer = document.getElementById("settings-container");

settingsButton.addEventListener("click", () => {
  if (settingsContainer.classList.contains("hidden")) {
    settingsContainer.classList.remove("hidden");
  } else {
    settingsContainer.classList.add("hidden");
  }
});

document.addEventListener("click", (event) => {
  const inMenu = settingsContainer.contains(event.target);
  const inButton = settingsButton.contains(event.target);

  if (!inMenu && !inButton) {
    settingsContainer.classList.add("hidden");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    settingsContainer.classList.add("hidden");
  }
});
