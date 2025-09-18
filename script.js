let current = 0;
const images = document.querySelectorAll('.carousel img');

function showSlide(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  current = (current + 1) % images.length;
  showSlide(current);
}

setInterval(nextSlide, 3000); // cambia cada 3 segundos

// Mostrar la primera imagen al cargar
showSlide(current);
