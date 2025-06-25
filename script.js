document.addEventListener("DOMContentLoaded", () => {
  // --- Rolagem suave para as seções ---
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top:
              targetElement.offsetTop -
              document.querySelector("header").offsetHeight,
            behavior: "smooth",
          });
        }
      } else {
        window.location.href = targetId;
      }
    });
  });

  // --- Animação simples no botão de doação ---
  const btnDoarLarge = document.querySelector(".btn-doar-large");
  if (btnDoarLarge) {
    btnDoarLarge.addEventListener("mouseover", () => {
      btnDoarLarge.style.transform = "scale(1.05)";
    });
    btnDoarLarge.addEventListener("mouseout", () => {
      btnDoarLarge.style.transform = "scale(1)";
    });
  }

  // --- Lógica do Carrossel de Produtos ---
  const carouselContainer = document.querySelector(".carousel-container");
  const carouselSlides = document.querySelectorAll(".carousel-slide");
  const prevButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn");
  let currentIndex = 0;

  // Move o carrossel para um slide específico
  function goToSlide(index) {
    if (carouselContainer && carouselSlides.length > 0) {
      const offset = index * 100;
      carouselContainer.style.transform = `translateX(-${offset}%)`;
      currentIndex = index;
    }
  }

  // Avança para o próximo slide
  function nextSlide() {
    if (carouselSlides.length > 0) {
      const nextIndex = (currentIndex + 1) % carouselSlides.length;
      goToSlide(nextIndex);
    }
  }

  // Volta para o slide anterior
  function prevSlide() {
    if (carouselSlides.length > 0) {
      const prevIndex =
        (currentIndex - 1 + carouselSlides.length) % carouselSlides.length;
      goToSlide(prevIndex);
    }
  }

  // Event listeners dos botões do carrossel
  if (nextButton) nextButton.addEventListener("click", nextSlide);
  if (prevButton) prevButton.addEventListener("click", prevSlide);

  // Opcional: Rolagem automática do carrossel a cada 5 segundos
  // setInterval(nextSlide, 5000);

  // --- Lógica da Bilheteria - Mostrar/Ocultar Tabela de Preços ---
  const mostrarPrecosBtn = document.getElementById("mostrarPrecosBtn");
  const tabelaPrecos = document.getElementById("tabelaPrecos");

  if (mostrarPrecosBtn && tabelaPrecos) {
    mostrarPrecosBtn.addEventListener("click", () => {
      tabelaPrecos.classList.toggle("visible");
      mostrarPrecosBtn.textContent = tabelaPrecos.classList.contains("visible")
        ? "Ocultar Opções de Planos"
        : "Ver Opções de Planos";
    });
  }
});

// --- Lógica do Formulário de Contato - Validação Simples ---
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    alert("Formulário enviado com sucesso!");
    this.reset();
  });
}


