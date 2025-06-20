document.addEventListener("DOMContentLoaded", function () {
  // ==========================
  // TOGGLE MENU LATERAL
  // ==========================
  function toggleMenu() {
    const menu = document.getElementById("menuLateral");
    const corpo = document.body;

    menu.classList.toggle("aberto");
    corpo.classList.toggle("com-menu-aberto");
  }

  window.toggleMenu = toggleMenu; // Deixa acessível ao HTML (onclick)

  // Fecha menu ao clicar em um item
  document.querySelectorAll(".menu-lateral a").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("menuLateral").classList.remove("aberto");
      document.body.classList.remove("com-menu-aberto");
    });
  });

  // ==========================
  // MODAL DE IMAGEM (GALERIA)
  // ==========================
  const imagensGaleria = document.querySelectorAll('.galeria-img');
  const modal = document.getElementById('modalImagem');
  const imagemModal = document.getElementById('imagemAmpliada');
  const fecharBtn = document.getElementById('fecharModal');

  imagensGaleria.forEach(img => {
    img.addEventListener('click', () => {
      imagemModal.src = img.src;
      modal.style.display = 'flex';
    });
  });

  if (fecharBtn) {
    fecharBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  // ==========================
  // GALERIA COM SETAS
  // ==========================
  const galeria = document.getElementById('galeria');
  const btnEsquerda = document.querySelector('.galeria-btn.esquerda');
  const btnDireita = document.querySelector('.galeria-btn.direita');
  const scrollAmount = 300;

  if (btnEsquerda && galeria) {
    btnEsquerda.addEventListener('click', () => {
      galeria.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }

  if (btnDireita && galeria) {
    btnDireita.addEventListener('click', () => {
      galeria.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  // ==========================
  // ANIMAÇÃO DAS IMAGENS (PAINEL ONDAS)
  // ==========================
  const imagensOnda = document.querySelectorAll('.onda-img');

  imagensOnda.forEach(img => img.classList.add('onda-animada'));

  setTimeout(() => {
    imagensOnda.forEach(img => img.classList.remove('onda-animada'));
  }, 30000); // 30 segundos
});
