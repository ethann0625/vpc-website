document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggleButton = document.getElementById("theme-toggle");

  toggleButton.addEventListener("click", () => {
    let currentTheme = root.getAttribute("data-theme");
    console.log(currentTheme);
    if (!currentTheme) {
      if (window.matchMedia) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          currentTheme = "dark";
        } else {
          currentTheme = "light";
        }
      } else {
        currentTheme = "light";
      }
    }
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
  });
});
