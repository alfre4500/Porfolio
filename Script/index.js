window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const primeraparte = document.querySelector(".primeraparte");
  const unoa = document.querySelector(".unoa");
  const dosa = document.querySelector(".dosa");

  // Efecto parallax para los elementos
  if (primeraparte.getBoundingClientRect().bottom > 0) {
    unoa.style.transform = `translateY(${scrolled * 0.1}px)`;
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
const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");
const hoverSign = document.querySelector(".hover-sign");

const videoList = [video1, video2, video3];
videoList.forEach(function (video) {
  video.addEventListener("mouseover", function () {
    video.play()
    hoverSign.classList.add("active")
  })
  video.addEventListener("mouseout", function () {
    video.pause()
    hoverSign.classList.remove("active")
  })
});
document.addEventListener('DOMContentLoaded', function() {
  const certificateCards = document.querySelectorAll('.certificate-card');
  const certificateModal = document.querySelector('.certificate-modal');
  const certificateModalImage = document.querySelector('.certificate-modal-image');
  const certificateModalClose = document.querySelector('.certificate-modal-close');

  certificateCards.forEach(card => {
      card.addEventListener('click', function() {
          const fullImagePath = this.getAttribute('data-full-image');
          certificateModalImage.src = fullImagePath;
          certificateModal.style.display = 'block';
      });
  });

  certificateModalClose.addEventListener('click', function() {
      certificateModal.style.display = 'none';
  });

  // Close modal if clicked outside the image
  certificateModal.addEventListener('click', function(event) {
      if (event.target === certificateModal) {
          certificateModal.style.display = 'none';
      }
  });
});