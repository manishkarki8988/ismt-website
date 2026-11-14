document.querySelectorAll('.year').forEach((year) => {
  year.textContent = new Date().getFullYear();
});

document.querySelectorAll('.site-header').forEach((header) => {
  const toggle = header.querySelector('.menu-toggle');
  const nav = header.querySelector('.primary-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }));
});

document.querySelectorAll('[data-enquiry-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.querySelector('.form-message').textContent = 'Thanks — your enquiry has been received. We’ll be in touch soon.';
    form.reset();
  });
});
