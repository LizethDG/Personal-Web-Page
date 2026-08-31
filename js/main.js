document.addEventListener('DOMContentLoaded', () => {
  // Inicializar iconos de Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Inicializar animaciones de scroll
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 650,
      easing: 'ease-out-cubic',
      once: true,
      offset: 20,
    });
  }

  // Soporte de navegación fluida dentro del scroll de la columna derecha
  const mainColumn = document.querySelector('main');
  const sections = document.querySelectorAll('main section, aside');
  const navItems = document.querySelectorAll('.side-navbar .nav-item');

  if (mainColumn) {
    mainColumn.addEventListener('scroll', () => {
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (mainColumn.scrollTop >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });

      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSection}`) {
          item.classList.add('active');
        }
      });
    });
  }
});

// Lógica de Modales Dinámicos
function openDetail(key) {
  if (typeof detailData === 'undefined' || !detailData[key]) return;

  const item = detailData[key];

  document.getElementById("modal-category").innerText = item.category;
  document.getElementById("modal-title").innerText = item.title;
  document.getElementById("modal-body").innerHTML = item.body;

  const videoWrapper = document.getElementById("modal-video-container");
  const video = document.getElementById("modal-video");
  const videoSrc = document.getElementById("modal-video-src");

  if (item.video) {
    videoSrc.src = item.video;
    video.load();
    videoWrapper.classList.remove("hidden");
  } else {
    videoWrapper.classList.add("hidden");
    video.pause();
  }

  document.getElementById("detail-modal").classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("detail-modal");
  const video = document.getElementById("modal-video");

  if (video) {
    video.pause();
    video.currentTime = 0;
  }
  
  modal.classList.add("hidden");
}

// Cerrar modal al presionar Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});