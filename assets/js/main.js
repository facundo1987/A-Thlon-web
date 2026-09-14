const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-menu');

menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}));

const whatsappNumber = '59892724782'; // Reemplazar por el número real, sin + ni espacios.
document.querySelectorAll('.js-whatsapp').forEach((link) => {
  const service = link.dataset.service || 'una consulta';
  const message = link.dataset.message || `Hola, vi la web de A-THLON y quisiera información sobre ${service}.`;
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener';
});

document.getElementById('year').textContent = new Date().getFullYear();

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
} else {
  document.querySelectorAll('.reveal').forEach((item) => item.classList.add('visible'));
}

// Mantiene una única etiqueta visible en cada biografía.
document.querySelectorAll('.bio-more').forEach((details) => {
  details.addEventListener('toggle', () => {
    details.querySelector('summary').textContent = details.open ? 'Ver menos' : 'Ver más';
  });
});
