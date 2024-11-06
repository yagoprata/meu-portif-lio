const button = document.querySelector("button");

button.addEventListener("mouseover", function () {
  button.style.transform = "scale(1.1)";
});

button.addEventListener("mouseout", function () {
  button.style.transform = "scale(1)";
});

const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
