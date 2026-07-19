import './style.css'

// Add simple scroll reveal animations
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const revealSection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15, // Trigger when 15% of section is visible
  });

  sections.forEach((section) => {
    // Exclude hero section from initial hidden state so it shows immediately on load
    if (section.id !== 'hero') {
      section.style.opacity = 0;
      section.style.transform = "translateY(40px)";
      section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
      sectionObserver.observe(section);
    }
  });
});
