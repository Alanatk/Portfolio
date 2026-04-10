<<<<<<< HEAD
// Initialize icons
lucide.createIcons();

// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Contact form modal
const form = document.getElementById("contactForm");
const modal = document.getElementById("messageModal");
const closeModal = document.getElementById("closeModal");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.classList.remove("hidden");
  form.reset();
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const root = document.documentElement;

themeToggle.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  root.setAttribute("data-theme", newTheme);
  themeIcon.setAttribute("data-lucide", newTheme === "light" ? "moon" : "sun");
  lucide.createIcons();
});
=======
// Initialize icons
lucide.createIcons();

// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Contact form modal
const form = document.getElementById("contactForm");
const modal = document.getElementById("messageModal");
const closeModal = document.getElementById("closeModal");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.classList.remove("hidden");
  form.reset();
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const root = document.documentElement;

themeToggle.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  root.setAttribute("data-theme", newTheme);
  themeIcon.setAttribute("data-lucide", newTheme === "light" ? "moon" : "sun");
  lucide.createIcons();
});
>>>>>>> 6eaf5a1 (Initial portfolio upload)
