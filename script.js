document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.section-theme-image');
  
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
          } else {
              entry.target.classList.remove('is-visible');
          }
      });
  });

  elements.forEach(element => {
      observer.observe(element);
  });
});
