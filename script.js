// Sidebar toggle
const sidebar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menuIcon");

menuIcon.addEventListener("click", () => {
  const isActive = sidebar.classList.toggle("active");
  menuIcon.classList.toggle("active");
  sidebar.hidden = !isActive;
});

// Hero slider
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let directionForward = true;
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}
function nextSlide() {
  if (currentSlide === slides.length - 1) directionForward = false;
  else if (currentSlide === 0) directionForward = true;
  currentSlide += directionForward ? 1 : -1;
  showSlide(currentSlide);
}
function manualNext() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
function manualPrev() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}
nextBtn.addEventListener("click", manualNext);
prevBtn.addEventListener("click", manualPrev);

// Adjust animation line width
function updateLineWidths() {
  document.querySelectorAll(".heading-container").forEach(container => {
    const heading = container.querySelector(".section-heading");
    const line = container.querySelector(".line-animation");
    if (heading && line) {
      line.style.width = `${heading.offsetWidth}px`;
    }
  });
}
window.addEventListener("load", () => {
  showSlide(0);
  setInterval(nextSlide, 2000);
  updateLineWidths();
});
window.addEventListener("resize", updateLineWidths);

// Toggle hover list on click
const hoverTitle = document.querySelector(".hover-title");
const hoverList = document.getElementById("hoverList");
const toggleArrow = document.getElementById("toggleArrow");

hoverTitle.addEventListener("click", () => {
  hoverList.classList.toggle("show");
  toggleArrow.classList.toggle("rotate");
});

// Hover also shows the list
hoverTitle.addEventListener("mouseenter", () => {
  hoverList.classList.add("show");
});
hoverTitle.addEventListener("mouseleave", () => {
  if (!toggleArrow.classList.contains("rotate")) {
    hoverList.classList.remove("show");
  }
});
