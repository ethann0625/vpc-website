const root = document.documentElement;
const toggleButton = document.getElementById("theme-toggle");
const buttonLabel = document.getElementById("theme-toggle-label");

function updateButton(theme) {
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");
  if (theme == "light") {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    buttonLabel.textContent = "Light";
  } else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
    buttonLabel.textContent = "Dark";
  }
}

// Load from storage when DOM loads
let currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  root.setAttribute("data-theme", currentTheme);
}
updateButton(currentTheme);

// Theme button event listener
toggleButton.addEventListener("click", () => {
  currentTheme =
    root.getAttribute("data-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const newTheme = currentTheme === "dark" ? "light" : "dark";
  updateButton(newTheme);
  localStorage.setItem("theme", newTheme);
  root.setAttribute("data-theme", newTheme);
});
