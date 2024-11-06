document.querySelectorAll("main img").forEach((image) => {
  image.addEventListener("mouseenter", () => {
    image.style.transform = "scale(1.05)";
    image.style.transition = "transform 0.3s";
  });
  image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
  });
});

const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
