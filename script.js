window.addEventListener("load", function () {
  document.getElementById("imagem-eu").classList.add("animate");
});

window.addEventListener("load", function () {
  document.getElementById("imagem-eu").classList.add("animate");
  document.getElementById("texto-eu").classList.add("animate");
});

const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
