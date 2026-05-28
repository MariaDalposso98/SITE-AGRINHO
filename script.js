
// 1. GESTÃO DE DADOS (DATA LAYER)
const servicosData = [
    { title: "Gestão Hídrica", desc: "Sensores de umidade que economizam até 40% de água." },
    { title: "Análise de Solo", desc: "Relatórios químicos automatizados via nuvem." },
    { title: "Drone Scout", desc: "Vigilância aérea para identificação precoce de pragas." }
];

// 2. RENDERIZAÇÃO DINÂMICA
function renderCards() {
    const container = document.getElementById('cards-container');
    container.innerHTML = servicosData.map(item => `
        <article class="card">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        </article>
    `).join('');
}

// 3. ACESSIBILIDADE: CONTROLE DE FONTE
let currentFontSize = 16;
const body = document.body;

document.getElementById('increase-font').addEventListener('click', () => {
    currentFontSize += 2;
    body.style.fontSize = currentFontSize + 'px';
});

document.getElementById('decrease-font').addEventListener('click', () => {
    if(currentFontSize > 12) {
        currentFontSize -= 2;
        body.style.fontSize = currentFontSize + 'px';
    }
});

// 4. MODO ALTO CONTRASTE
document.getElementById('toggle-contrast').addEventListener('click', () => {
    body.classList.toggle('high-contrast');
});

// 5. ACORDEÃO (EXPANDABLES)
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isExpanded = header.getAttribute('aria-expanded') === 'true';
        
        header.setAttribute('aria-expanded', !isExpanded);
        content.classList.toggle('active');
    });
});

// 6. SCROLL REVEAL (VISÃO SISTÊMICA)
function reveal() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
}

// Inicialização
window.addEventListener('scroll', reveal);
window.onload = () => {
    renderCards();
    reveal();
};
