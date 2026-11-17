(() => {
  const button = document.getElementById('intro-open');
  const screen = document.getElementById('intro-screen');
  const page = document.querySelector('.page-shell');
  if (!button || !screen || !page) return;

  button.addEventListener('click', () => {
    if (document.body.classList.contains('heart-launch')) return;
    document.body.classList.add('heart-launch');
    button.disabled = true;

    window.setTimeout(() => {
      document.body.classList.remove('intro-locked', 'heart-launch');
      document.body.classList.add('intro-open');
      page.removeAttribute('aria-hidden');
      page.removeAttribute('inert');
      screen.setAttribute('aria-hidden', 'true');
    }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 650);
  });
})();
