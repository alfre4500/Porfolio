window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const primeraparte = document.querySelector(".primeraparte");
  const unoa = document.querySelector(".unoa");
  const dosa = document.querySelector(".dosa");

  // Efecto parallax para los elementos
  if (primeraparte.getBoundingClientRect().bottom > 0) {
    unoa.style.transform = `translateY(${scrolled * 0.3}px)`;
    dosa.style.transform = `translateY(${scrolled * 0.2}px)`;
    primeraparte.style.opacity = 1 - scrolled * 0.002;
  }
});
// Añade esto a tu archivo index.js
const themeBtn = document.querySelector(".theme-btn");
const body = document.body;

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  // Opcional: guardar la preferencia del usuario
  const isDark = body.classList.contains("dark-theme");
  localStorage.setItem("darkTheme", isDark);
});

// Comprobar si hay una preferencia guardada
const savedTheme = localStorage.getItem("darkTheme");
if (savedTheme === "true") {
  body.classList.add("dark-theme");
}
// Seleccionar el loader
const loader = document.querySelector('.socket');
const content = document.querySelector('main');

// Ocultar el contenido principal inicialmente
content.style.display = 'none';

// Función para mostrar el loader
function showLoader() {
    loader.classList.remove('hidden');
}

// Función para ocultar el loader
function hideLoader() {
    loader.classList.add('hidden');
}

// Esperar a que todo el contenido se cargue
window.addEventListener('load', function() {
    // Simular un tiempo de carga mínimo (1.5 segundos)
    setTimeout(() => {
        hideLoader();
        content.style.display = 'flex';
        
        // Añadir una transición suave para el contenido
        content.style.opacity = 0;
        content.style.transition = 'opacity 0.5s ease-in';
        
        requestAnimationFrame(() => {
            content.style.opacity = 1;
        });
    }, 1500);
});
