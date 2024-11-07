window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const primeraparte = document.querySelector('.primeraparte');
    const unoa = document.querySelector('.unoa');
    const dosa = document.querySelector('.dosa');
    
    // Efecto parallax para los elementos
    if (primeraparte.getBoundingClientRect().bottom > 0) {
        unoa.style.transform = `translateY(${scrolled * 0.3}px)`;
        dosa.style.transform = `translateY(${scrolled * 0.2}px)`;
        primeraparte.style.opacity = 1 - (scrolled * 0.002);
    }
});
// Añade esto a tu archivo index.js
const themeBtn = document.querySelector('.theme-btn');
const body = document.body;

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  // Opcional: guardar la preferencia del usuario
  const isDark = body.classList.contains('dark-theme');
  localStorage.setItem('darkTheme', isDark);
});

// Comprobar si hay una preferencia guardada
const savedTheme = localStorage.getItem('darkTheme');
if (savedTheme === 'true') {
  body.classList.add('dark-theme');
}