document.addEventListener("DOMContentLoaded", () => {
  const settingsButton = document.getElementById("settings-menu-button");
  const settingsContainer = document.getElementById("settings-container");

  settingsButton.addEventListener("click", () => {
    if (settingsContainer.style.display) {
      settingsContainer.style.display =
        settingsContainer.style.display == "none" ? "block" : "none";
    } else {
      settingsContainer.style.display = "block";
    }
  });
});
