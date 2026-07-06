const root = document.documentElement;
const themeToggleButton = document.getElementById("theme-toggle");
const themeButtonLabel = document.getElementById("theme-toggle-label");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

function updateThemeButton(theme) {
  if (!theme) return;
  if (theme === "dark") {
    themeButtonLabel.textContent = "Dark";
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  } else {
    themeButtonLabel.textContent = "Light";
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }
}

// Load from storage when DOM loads
let currentTheme =
  localStorage.getItem("theme") ??
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

root.setAttribute("data-theme", currentTheme);
updateThemeButton(currentTheme);

// Theme button event listener
themeToggleButton.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", currentTheme);
  root.setAttribute("data-theme", currentTheme);
  updateThemeButton(currentTheme);
});
