// ── Flip cards on click (toggle flipped class) ──
document.querySelectorAll('.el-flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

// ── Intersection Observer for reveal animations ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.timeline-item, .el-flip-wrap').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 0.1 + 's';
  observer.observe(el);
});

// ── Active nav dot on scroll ──
const sections = document.querySelectorAll('section[id]');
const dots = document.querySelectorAll('.nav-dot');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      dots.forEach(d => d.classList.remove('active'));
      const active = document.querySelector(`.nav-dot[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
