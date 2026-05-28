
// ============================================
// DADOS — Edite aqui os conteúdos
// ============================================
const aboutData = [
    {
        title: 'Missão',
        text: 'Transformar a agricultura brasileira com práticas sustentáveis que aliam produtividade e respeito ao meio ambiente.',
        img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
        alt: 'Plantação sustentável'
    },
    {
        title: 'Visão',
        text: 'Ser referência em inovação sustentável no agronegócio latino-americano, gerando valor para o produtor e para o planeta.',
        img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
        alt: 'Drone sobrevoando lavoura'
    },
    {
        title: 'Valores',
        text: 'Inovação, responsabilidade ambiental, ética e compromisso com resultados concretos para o produtor rural.',
        img: 'https://images.unsplash.com/photo-1592986607441-19c0f3fc9c3f?w=600&h=400&fit=crop',
        alt: 'Agricultor no campo'
    }
];

const practicesData = [
    {
        id: 'tab1',
        label: 'Agricultura Regenerativa',
        title: 'Restaurando o solo',
        desc: 'Técnicas que recuperam a saúde do solo, aumentam a biodiversidade e capturam carbono.',
        benefits: ['+30% matéria orgânica', 'Redução de insumos químicos', 'Mais retenção de água'],
        img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=800&h=600&fit=crop',
        alt: 'Solo regenerativo'
    },
    {
        id: 'tab2',
        label: 'Irrigação Inteligente',
        title: 'Uso eficiente da água',
        desc: 'Sensores e gotejamento que reduzem o consumo em até 60% e aumentam a precisão.',
        benefits: ['Economia de 60% de água', 'Monitoramento remoto', 'Menor custo operacional'],
        img: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&h=600&fit=crop',
        alt: 'Irrigação inteligente'
    },
    {
        id: 'tab3',
        label: 'Energia Renovável',
        title: 'Autossuficiência energética',
        desc: 'Placas solares e biomassa reduzem a pegada de carbono e os custos com energia.',
        benefits: ['Redução de 80% na conta', 'Sistemas híbridos', 'Retorno em 4 anos'],
        img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
        alt: 'Painéis solares rurais'
    }
];

const technologiesData = [
    {
        title: 'Drones de precisão',
        desc: 'Mapeamento aéreo para identificar pragas, falhas de plantio e otimizar aplicações.',
        img: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=600&h=400&fit=crop',
        alt: 'Drone agrícola'
    },
    {
        title: 'IoT no campo',
        desc: 'Sensores que monitoram umidade, temperatura e nutrientes em tempo real.',
        img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
        alt: 'Sensor IoT'
    },
    {
        title: 'Big Data e IA',
        desc: 'Análise preditiva para tomada de decisão e redução de perdas.',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        alt: 'Análise de dados'
    },
    {
        title: 'Biotecnologia',
        desc: 'Bioinsumos e controle biológico que reduzem defensivos em até 90%.',
        img: 'https://images.unsplash.com/photo-1535916517497-4e9b0afdb7bc?w=600&h=400&fit=crop',
        alt: 'Laboratório agrícola'
    }
];

const testimonialsData = [
    {
        text: 'A Agro Forte nos ajudou a economizar água e aumentar a produtividade em 35%.',
        author: 'João Silva',
        role: 'Produtor Rural – MG'
    },
    {
        text: 'Conseguimos a certificação internacional e hoje exportamos com valor agregado.',
        author: 'Maria Santos',
        role: 'Agricultora – PR'
    },
    {
        text: 'A tecnologia de ponta fez toda diferença na gestão da nossa fazenda.',
        author: 'Carlos Oliveira',
        role: 'Engenheiro Agrônomo – SP'
    }
];

const faqData = [
    {
        q: 'O que é agricultura sustentável?',
        a: 'É um modelo que equilibra produtividade, preservação ambiental e viabilidade econômica, garantindo recursos para as próximas gerações.'
    },
    {
        q: 'Em quanto tempo vejo resultados?',
        a: 'As primeiras melhorias aparecem em 6 meses; o retorno total do investimento ocorre entre 2 e 4 anos.'
    },
    {
        q: 'É mais caro produzir de forma sustentável?',
        a: 'O investimento inicial é compensado pela redução de custos com água, energia e insumos, além do acesso a mercados premium.'
    }
];

// ============================================
// RENDERIZAÇÕES
// ============================================
function renderAbout() {
    const grid = document.getElementById('about-grid');
    aboutData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'about-card animate-reveal';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.alt}" class="about-card-img" loading="lazy">
            <div class="about-card-body">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderTabs() {
    const nav = document.getElementById('tabs-nav');
    const content = document.getElementById('tabs-content');
    practicesData.forEach((tab, i) => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${i === 0 ? 'active' : ''}`;
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', i === 0);
        btn.textContent = tab.label;
        btn.addEventListener('click', () => switchTab(i));
        nav.appendChild(btn);

        const panel = document.createElement('div');
        panel.className = `tab-panel ${i === 0 ? 'active' : ''}`;
        panel.setAttribute('role', 'tabpanel');
        panel.innerHTML = `
            <div class="tab-panel-content">
                <div class="tab-panel-text">
                    <h3>${tab.title}</h3>
                    <p>${tab.desc}</p>
                    <ul>${tab.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
                </div>
                <img src="${tab.img}" alt="${tab.alt}" class="tab-panel-img" loading="lazy">
            </div>
        `;
        content.appendChild(panel);
    });
}

function switchTab(index) {
    document.querySelectorAll('.tab-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
        btn.setAttribute('aria-selected', i === index);
    });
    document.querySelectorAll('.tab-panel').forEach((panel, i) => {
        panel.classList.toggle('active', i === index);
    });
}

function renderTechnologies() {
    const grid = document.getElementById('tech-grid');
    technologiesData.forEach(tech => {
        const card = document.createElement('div');
        card.className = 'tech-card animate-reveal';
        card.innerHTML = `
            <img src="${tech.img}" alt="${tech.alt}" class="tech-card-img" loading="lazy">
            <div class="tech-card-body">
                <h3>${tech.title}</h3>
                <p>${tech.desc}</p>
                <span class="tech-meta">Saiba mais →</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderCarousel() {
    const track = document.getElementById('carousel-track');
    const dotsContainer = document.getElementById('carousel-dots');
    testimonialsData.forEach((t, i) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-item';
        slide.innerHTML = `<blockquote>“${t.text}”</blockquote>
                           <div class="carousel-author">${t.author}</div>
                           <div class="carousel-role">${t.role}</div>`;
        track.appendChild(slide);

        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Depoimento ${i+1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });
    initCarousel();
}

let current = 0;
function goToSlide(i) {
    const slides = document.querySelectorAll('.carousel-item');
    if (!slides.length) return;
    if (i < 0) i = slides.length - 1;
    if (i >= slides.length) i = 0;
    current = i;
    slides.forEach(s => s.style.transform = `translateX(-${current * 100}%)`);
    document.querySelectorAll('.carousel-dot').forEach((d, idx) => d.classList.toggle('active', idx === current));
}
function initCarousel() {
    document.querySelector('.carousel-btn.prev').addEventListener('click', () => goToSlide(current - 1));
    document.querySelector('.carousel-btn.next').addEventListener('click', () => goToSlide(current + 1));
    setInterval(() => goToSlide(current + 1), 6000);
}

function renderAccordion() {
    const acc = document.getElementById('accordion');
    faqData.forEach(f => {
        const item = document.createElement('div');
        item.className = 'accordion-item';
        item.innerHTML = `
            <button class="accordion-header" aria-expanded="false">
                <span>${f.q}</span>
                <span class="accordion-icon">+</span>
            </button>
            <div class="accordion-content"><div class="accordion-content-inner">${f.a}</div></div>
        `;
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        header.addEventListener('click', () => {
            const isOpen = header.getAttribute('aria-expanded') === 'true';
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.setAttribute('aria-expanded', 'false');
                h.nextElementSibling.classList.remove('active');
                h.querySelector('.accordion-icon').textContent = '+';
            });
            if (!isOpen) {
                header.setAttribute('aria-expanded', 'true');
                content.classList.add('active');
                header.querySelector('.accordion-icon').textContent = '×';
            }
        });
        acc.appendChild(item);
    });
}

// ============================================
// ACESSIBILIDADE
// ============================================
let fontSize = 100;
function changeFontSize(delta) {
    fontSize = Math.min(Math.max(fontSize + delta, 80), 150);
    document.documentElement.style.fontSize = `${fontSize}%`;
    localStorage.setItem('fontSize', fontSize);
}
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
    localStorage.setItem('highContrast', document.body.classList.contains('high-contrast'));
}

// ============================================
// SCROLL REVEAL
// ============================================
function initReveal() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('revealed');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.15 });
    document.querySelectorAll('.animate-reveal').forEach(el => obs.observe(el));
}

// ============================================
// BACK TO TOP
// ============================================
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.nav-menu');
    btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !open);
        menu.classList.toggle('active');
    });
    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            menu.classList.remove('active');
            btn.setAttribute('aria-expanded', 'false');
        });
    });
}

// ============================================
// FORMULÁRIO
// ============================================
function initForm() {
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('button');
        btn.textContent = 'Mensagem enviada!';
        btn.disabled = true;
        setTimeout(() => {
            btn.textContent = 'Enviar mensagem';
            btn.disabled = false;
            form.reset();
        }, 3000);
    });
}

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderAbout();
    renderTabs();
    renderTechnologies();
    renderCarousel();
    renderAccordion();
    initReveal();
    initBackToTop();
    initMobileMenu();
    initForm();

    document.getElementById('font-increase').addEventListener('click', () => changeFontSize(10));
    document.getElementById('font-decrease').addEventListener('click', () => changeFontSize(-10));
    document.getElementById('contrast-toggle').addEventListener('click', toggleContrast);

    const savedFont = localStorage.getItem('fontSize');
    if (savedFont) {
        fontSize = parseInt(savedFont);
        document.documentElement.style.fontSize = `${fontSize}%`;
    }
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
    }
});
