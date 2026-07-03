document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggleButton = document.getElementById("theme-toggle");

  function toggleIconVisibility(theme) {
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
    if (theme == "light") {
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
    } else {
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
    }
  }

  // Load from storage when DOM loads
  let currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    root.setAttribute("data-theme", currentTheme);
  }
  toggleIconVisibility(currentTheme);

  // Theme button event listener
  toggleButton.addEventListener("click", () => {
    currentTheme =
      root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    const newTheme = currentTheme === "dark" ? "light" : "dark";
    toggleIconVisibility(newTheme);
    localStorage.setItem("theme", newTheme);
    root.setAttribute("data-theme", newTheme);
  });
});
