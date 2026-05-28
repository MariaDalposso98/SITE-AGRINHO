
/* =========================================
   CARDS DINÂMICOS
========================================= */

const benefits = [

  {
    title: "Preservação Ambiental",
    text: "Redução de impactos ambientais e proteção da biodiversidade."
  },

  {
    title: "Tecnologia no Campo",
    text: "Uso de inovação para aumentar a produtividade."
  },

  {
    title: "Economia Sustentável",
    text: "Produção eficiente com responsabilidade ambiental."
  }

];

const cardsContainer = document.getElementById("cards-container");

benefits.forEach(item => {

  const card = document.createElement("article");

  card.classList.add("card");

  card.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  `;

  cardsContainer.appendChild(card);

});

/* =========================================
   CARROSSEL
========================================= */

const images = [

  "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200",

  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200",

  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200"

];

let currentImage = 0;

const carouselImage = document.getElementById("carousel-image");

function showImage(index) {

  carouselImage.src = images[index];
}

showImage(currentImage);

document.getElementById("next")
.addEventListener("click", () => {

  currentImage++;

  if(currentImage >= images.length) {

    currentImage = 0;
  }

  showImage(currentImage);

});

document.getElementById("prev")
.addEventListener("click", () => {

  currentImage--;

  if(currentImage < 0) {

    currentImage = images.length - 1;
  }

  showImage(currentImage);

});

/* =========================================
   FAQ DINÂMICO
========================================= */

const faqs = [

  {
    question: "O que é agricultura sustentável?",
    answer: "É uma prática que busca produzir alimentos preservando os recursos naturais."
  },

  {
    question: "Qual a importância da sustentabilidade?",
    answer: "Garantir recursos para as futuras gerações."
  }

];

const faqContainer = document.getElementById("faq-container");

faqs.forEach(item => {

  const faq = document.createElement("div");

  faq.classList.add("accordion-item");

  faq.innerHTML = `

    <button class="accordion-header">
      ${item.question}
    </button>

    <div class="accordion-content">
      <p>${item.answer}</p>
    </div>
  `;

  faqContainer.appendChild(faq);

});

/* =========================================
   ACORDEÃO
========================================= */

const accordionHeaders =
document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(button => {

  button.addEventListener("click", () => {

    const content =
    button.nextElementSibling;

    if(content.style.display === "block") {

      content.style.display = "none";

    } else {

      content.style.display = "block";
    }

  });

});

/* =========================================
   ACESSIBILIDADE
========================================= */

let fontSize = 16;

document.getElementById("increase-font")
.addEventListener("click", () => {

  fontSize += 1;

  document.documentElement.style.fontSize =
  fontSize + "px";
});

document.getElementById("decrease-font")
.addEventListener("click", () => {

  fontSize -= 1;

  document.documentElement.style.fontSize =
  fontSize + "px";
});

/* =========================================
   ALTO CONTRASTE
========================================= */

document.getElementById("contrast-btn")
.addEventListener("click", () => {

  document.body.classList.toggle("high-contrast");
});

/* =========================================
   SCROLL REVEAL
========================================= */

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

  const trigger =
  window.innerHeight * 0.85;

  reveals.forEach(section => {

    const sectionTop =
    section.getBoundingClientRect().top;

    if(sectionTop < trigger) {

      section.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealSections);

revealSections();
