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
  if (typeof modalData === 'undefined') return;
  const item = modalData[key];
  if (!item) return;

  document.getElementById('modal-category').textContent = item.category || "";
  document.getElementById('modal-title').textContent = item.title || "";
  document.getElementById('modal-body').innerHTML = item.body || "";

  const videoContainer = document.getElementById('modal-video-container');
  const videoElem = document.getElementById('modal-video');
  const videoSrc = document.getElementById('modal-video-src');
  const iframeElem = document.getElementById('modal-iframe');
  
  const imageContainer = document.getElementById('modal-image-container');
  const imageElem = document.getElementById('modal-image');

  const galleryContainer = document.getElementById('modal-gallery-container');
  const galleryGrid = document.getElementById('modal-gallery-grid');

  // Resetear vistas
  if (videoElem) {
    videoElem.pause();
    videoElem.classList.add('hidden');
  }
  if (iframeElem) {
    iframeElem.src = "";
    iframeElem.classList.add('hidden');
  }
  if (videoContainer) videoContainer.classList.add('hidden');
  if (imageContainer) imageContainer.classList.add('hidden');
  if (galleryContainer) galleryContainer.classList.add('hidden');
  if (galleryGrid) galleryGrid.innerHTML = "";

  // 1. Mostrar Video si existe
  if (item.video && item.video.trim() !== "") {
    videoContainer.classList.remove('hidden');
    if (item.video.includes('youtube.com') || item.video.includes('youtu.be')) {
      iframeElem.src = item.video;
      iframeElem.classList.remove('hidden');
    } else {
      videoSrc.src = item.video;
      videoElem.load();
      videoElem.classList.remove('hidden');
    }
  }

  // 2. Mostrar Imagen individual si existe
  if (item.image && item.image.trim() !== "") {
    if (imageContainer && imageElem) {
      imageElem.src = item.image;
      imageContainer.classList.remove('hidden');
    }
  }

  // 3. Mostrar Galería de Fotos si existe
  if (item.gallery && Array.isArray(item.gallery) && item.gallery.length > 0) {
    galleryContainer.classList.remove('hidden');
    item.gallery.forEach(imgUrl => {
      const img = document.createElement('img');
      img.src = imgUrl;
      img.alt = item.title;
      img.className = "w-full h-32 object-cover rounded-xl border border-blush-200 hover:scale-[1.02] transition-transform duration-300 shadow-sm";
      galleryGrid.appendChild(img);
    });
  }

  document.getElementById('detail-modal').classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('detail-modal');
  if (modal) modal.classList.add('hidden');

  const videoElem = document.getElementById('modal-video');
  if (videoElem) videoElem.pause();

  const iframeElem = document.getElementById('modal-iframe');
  if (iframeElem) iframeElem.src = "";

  const imageElem = document.getElementById('modal-image');
  if (imageElem) imageElem.src = "";

  const galleryGrid = document.getElementById('modal-gallery-grid');
  if (galleryGrid) galleryGrid.innerHTML = "";
}

// Cerrar modal al presionar Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});