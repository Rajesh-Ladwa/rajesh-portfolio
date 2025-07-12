// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Reveal animation on scroll
const revealElements = document.querySelectorAll('.job, .project, .skills li');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Optional: visibility animation class (you can style this in CSS)
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
    .visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }

    .job, .project, .skills li {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.6s ease;
    }
  `;
  document.head.appendChild(style);
});
