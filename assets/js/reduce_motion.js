const reduceMotionButton = document.getElementById("motion-toggle");
const reduceMotionButtonLabel = document.getElementById("motion-toggle-label");
const backgroundTile = document.getElementById("bg-svg");
const motionOnIcon = document.getElementById("motion-on-icon");
const motionOffIcon = document.getElementById("motion-off-icon");

function updateReduceMotionButton(reduceMotionEnabled) {
  if (reduceMotionEnabled === null) return;
  if (reduceMotionEnabled) {
    // Reduce motion is disabled
    reduceMotionButtonLabel.textContent = "On";
    motionOnIcon.classList.add("hidden");
    motionOffIcon.classList.remove("hidden");
  } else {
    // Reduce motion is enabled
    reduceMotionButtonLabel.textContent = "Off";
    motionOnIcon.classList.remove("hidden");
    motionOffIcon.classList.add("hidden");
  }
}

// Initialize value & update button
const storedReduceMotionEnabled = localStorage.getItem("reduceMotionEnabled");
let reduceMotionEnabled =
  storedReduceMotionEnabled !== null
    ? storedReduceMotionEnabled === "true"
    : window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.documentElement.classList.toggle("reduced-motion", reduceMotionEnabled);
updateReduceMotionButton(reduceMotionEnabled);

// Event listener
reduceMotionButton.addEventListener("click", (event) => {
  reduceMotionEnabled = !reduceMotionEnabled;
  if (reduceMotionEnabled) {
    backgroundTile.pauseAnimations();
  } else {
    backgroundTile.unpauseAnimations();
  }
  updateReduceMotionButton(reduceMotionEnabled);
  document.documentElement.classList.toggle("reduced-motion", reduceMotionEnabled);
  localStorage.setItem("reduceMotionEnabled", reduceMotionEnabled);
});
