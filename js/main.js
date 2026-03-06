if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-80px 0px -60% 0px' });

  document.querySelectorAll('section[id], header[id]').forEach((section) => {
    observer.observe(section);
  });
});
