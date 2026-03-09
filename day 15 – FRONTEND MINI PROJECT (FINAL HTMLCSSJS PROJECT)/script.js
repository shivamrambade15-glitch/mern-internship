// ========== DOM ELEMENTS ==========
const contactForm = document.getElementById("contact-form");
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.getElementById("main-nav");
const yearSpan = document.getElementById("year");
const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleIcon = document.querySelector(".theme-toggle__icon");
const successEl = document.getElementById("contact-success");

// ========== THEME (localStorage) ==========
const THEME_KEY = "portfolio-theme";

function loadTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") {
    document.body.classList.toggle("light", saved === "light");
  }
  updateThemeIcon();
}

function toggleTheme() {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem(THEME_KEY, isLight ? "light" : "dark");
  updateThemeIcon();
}

function updateThemeIcon() {
  const isLight = document.body.classList.contains("light");
  themeToggleIcon.textContent = isLight ? "🌞" : "🌙";
}

// ========== NAV TOGGLE ==========
function initNavToggle() {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  // Close nav when clicking a link (on mobile)
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });
}

// ========== CONTACT FORM VALIDATION ==========
function clearErrors() {
  document
    .querySelectorAll(".error-message")
    .forEach((el) => (el.textContent = ""));
  successEl.textContent = "";
}

function setError(field, message) {
  const errorEl = document.querySelector(`[data-error-for="${field}"]`);
  if (errorEl) {
    errorEl.textContent = message;
  }
}

function validateContactForm(data) {
  clearErrors();
  let isValid = true;

  if (!data.name.trim()) {
    setError("name", "Name is required.");
    isValid = false;
  }

  if (!data.email.trim()) {
    setError("email", "Email is required.");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    setError("email", "Please enter a valid email.");
    isValid = false;
  }

  if (!data.message.trim()) {
    setError("message", "Message is required.");
    isValid = false;
  } else if (data.message.trim().length < 10) {
    setError("message", "Message should be at least 10 characters.");
    isValid = false;
  }

  return isValid;
}

function handleContactSubmit(event) {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const data = {
    name: formData.get("name") || "",
    email: formData.get("email") || "",
    message: formData.get("message") || "",
  };

  if (!validateContactForm(data)) {
    return;
  }

  // Simulate sending
  successEl.textContent = "Thank you! Your message has been sent (demo).";
  contactForm.reset();
}

// ========== SKILL BARS ANIMATION ==========
function initSkillBars() {
  const bars = document.querySelectorAll(".skill-bar");
  bars.forEach((bar) => {
    const level = bar.dataset.level || "0";
    // trigger animation on load
    requestAnimationFrame(() => {
      bar.style.width = `${level}%`;
    });
  });
}

// ========== INIT ==========
document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Theme
  loadTheme();
  themeToggleBtn.addEventListener("click", toggleTheme);

  // Nav
  initNavToggle();

  // Contact form
  contactForm.addEventListener("submit", handleContactSubmit);

  // Skills animation
  initSkillBars();
});