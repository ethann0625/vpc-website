document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggleButton = document.getElementById("theme-toggle");

  // Load from storage when DOM loads
  let currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    root.setAttribute("data-theme", currentTheme);
  }

  // Theme button event listener
  toggleButton.addEventListener("click", () => {
    currentTheme =
      root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    root.setAttribute("data-theme", newTheme);
  });
});
