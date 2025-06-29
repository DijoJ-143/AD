// Toggle sidebar menu
const sidebar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menuIcon");

menuIcon.addEventListener("click", () => {
  const isActive = sidebar.classList.toggle("active");
  menuIcon.classList.toggle("active");

  menuIcon.setAttribute("aria-expanded", isActive);
  sidebar.hidden = !isActive;
});

// Hero Slider Logic
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let directionForward = true;

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

// Show a specific slide based on index
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// Auto sliding: every 2 seconds, forward or backward
function nextSlide() {
  if (currentSlide === slides.length - 1) {
    directionForward = false;
  } else if (currentSlide === 0) {
    directionForward = true;
  }
  currentSlide += directionForward ? 1 : -1;
  showSlide(currentSlide);
}

// Manual slide to next (on right arrow click)
function manualNext() {
  currentSlide = (currentSlide + 1) % slides.length;
  directionForward = true;
  showSlide(currentSlide);
}

// Manual slide to previous (on left arrow click)
function manualPrev() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  directionForward = false;
  showSlide(currentSlide);
}

// Attach events to arrows
nextBtn.addEventListener("click", manualNext);
prevBtn.addEventListener("click", manualPrev);

// Initialize slider on page load
window.addEventListener("load", () => {
  showSlide(0); // Show first slide initially
  setInterval(nextSlide, 2000); // Auto-slide every 2 seconds
});
