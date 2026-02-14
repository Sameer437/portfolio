const elements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

elements.forEach((el, i) => {
  el.style.transitionDelay = `${i * 90}ms`;
  observer.observe(el);
});

document.getElementById('year').textContent = String(new Date().getFullYear());
