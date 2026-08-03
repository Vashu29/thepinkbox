// mobile nav
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // swatch price filter
  const swatches = document.querySelectorAll('.swatch');
  const panels = document.querySelectorAll('.price-panel');
  swatches.forEach(sw => {
    sw.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      sw.classList.add('active');
      document.getElementById('panel-' + sw.dataset.target).classList.add('active');
    });
  });

  // booking form (front-end only demo)
  document.getElementById('bookingForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you! Your appointment request has been noted. We will call you shortly to confirm.\n\nFor faster booking, call us directly at 94109 23142.');
    this.reset();
  });

  // header shadow on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 20 ? '0 8px 24px -14px rgba(43,20,32,0.25)' : 'none';
  });