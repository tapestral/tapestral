// Toggle mobile nav
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Update year in footer
document.getElementById("year").textContent = new Date().getFullYear();
