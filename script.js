// Carrousel simple avec transition douce toutes les 20s
const images = document.querySelectorAll('.gallery.slider img');
let current = 0;

// Fonction pour changer l'image active
function changeImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}

// Démarrer l'animation automatiquement
setInterval(changeImage, 20000); // 20 secondes

// Optional: Permettre navigation clavier (droite/gauche)
document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowRight') {
    changeImage();
  }
  else if(e.key === 'ArrowLeft') {
    images[current].classList.remove('active');
    current = (current - 1 + images.length) % images.length;
    images[current].classList.add('active');
  }
});
