document.querySelectorAll("#front, #back, #bd").forEach((section) => {
  section.addEventListener("mouseenter", () => {
    section.style.transform = "scale(1.05)";
    section.style.transition = "transform 0.3s";
  });
  section.addEventListener("mouseleave", () => {
    section.style.transform = "scale(1)";
  });
});

const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
