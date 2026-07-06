const reduceMotionButton = document.getElementById("motion-toggle");
const reduceMotionButtonLabel = document.getElementById("motion-toggle-label");
const backgroundTile = document.getElementById("bg-svg");
const motionOnIcon = document.getElementById("motion-on-icon");
const motionOffIcon = document.getElementById("motion-off-icon");

function updateReduceMotionButton(enabled) {
  if (enabled === null) return;
  if (enabled) {
    // Reduce motion is enabled
    reduceMotionButtonLabel.textContent = "On";
    motionOnIcon.classList.add("hidden");
    motionOffIcon.classList.remove("hidden");
  } else {
    // Reduce motion is disabled
    reduceMotionButtonLabel.textContent = "Off";
    motionOnIcon.classList.remove("hidden");
    motionOffIcon.classList.add("hidden");
  }
}

function applyReducedMotion(enabled) {
  if (enabled) {
    backgroundTile.pauseAnimations();
  } else {
    backgroundTile.unpauseAnimations();
  }
  document.documentElement.classList.toggle("reduced-motion", reduceMotionEnabled);
}

// Initialize value & update button
const storedReduceMotionEnabled = localStorage.getItem("reduceMotion");
let reduceMotionEnabled =
  storedReduceMotionEnabled !== null
    ? storedReduceMotionEnabled === "true"
    : window.matchMedia("(prefers-reduced-motion: reduce)").matches;

applyReducedMotion(reduceMotionEnabled);
updateReduceMotionButton(reduceMotionEnabled);

// Event listener
reduceMotionButton.addEventListener("click", () => {
  reduceMotionEnabled = !reduceMotionEnabled;
  applyReducedMotion(reduceMotionEnabled);
  updateReduceMotionButton(reduceMotionEnabled);
  localStorage.setItem("reduceMotion", reduceMotionEnabled);
});
