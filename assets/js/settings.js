const settingsButton = document.getElementById("settings-menu-button");
const settingsContainer = document.getElementById("settings-container");

// Click button
settingsButton.addEventListener("click", () => {
  if (settingsContainer.classList.contains("hidden")) {
    settingsContainer.classList.remove("hidden");
  } else {
    settingsContainer.classList.add("hidden");
  }
});

// Close menu by clicking elsewhere
document.addEventListener("click", (event) => {
  const inMenu = settingsContainer.contains(event.target);
  const inButton = settingsButton.contains(event.target);

  if (!inMenu && !inButton) {
    settingsContainer.classList.add("hidden");
  }
});

// Close menu by pressing escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    settingsContainer.classList.add("hidden");
  }
});
