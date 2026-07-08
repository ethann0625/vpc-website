const burgerMenuButton = document.getElementById("hamburger-menu-button");
const burgerMenuButtonContainer = document.getElementById("hamburger");
const burgerMenuContentContainer = document.getElementById("hamburger-menu");
const navbarQuickLinkContainer = document.getElementById("nav-element-container");

const query = window.matchMedia("(width <= 768px)");

function updateNavElementVisibility(query) {
  if (query.matches) {
    navbarQuickLinkContainer.classList.add("hidden");
    burgerMenuButtonContainer.classList.remove("hidden");
  } else {
    navbarQuickLinkContainer.classList.remove("hidden");
    burgerMenuButtonContainer.classList.add("hidden");
  }
}

updateNavElementVisibility(query);
query.addEventListener("change", updateNavElementVisibility);

burgerMenuButton.addEventListener("click", () => {
  burgerMenuContentContainer.classList.toggle("hidden");
});
