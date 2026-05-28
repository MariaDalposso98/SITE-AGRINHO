
// ============================================
// DADOS DA APLICAÇÃO
// Edite estes arrays para modificar o conteúdo dinâmico
// ============================================

const aboutData = [
    {
        id: 1,
        title: 'Missão',
        description: 'Transformar a agricultura brasileira através de práticas sustentáveis que aumentam a produtividade enquanto preservam os recursos naturais para as próximas gerações.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
        imageAlt: 'Plantação sustentável com tecnologia'
    },
    {
        id: 2,
        title: 'Visão',
        description: 'Ser referência em agricultura sustentável na América Latina, provando que é possível produzir alimentos em larga escala sem comprometer o meio ambiente.',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
        imageAlt: 'Campo agrícola com drone de monitoramento'
    },
    {
        id: 3,
        title: 'Valores',
        description: 'Inovação, responsabilidade ambiental, compromisso com o produtor rural e transparência em todas as nossas ações e recomendações técnicas.',
        image: 'https://images.unsplash.com/photo-1592986607441-19c0f3fc9c3f?w=600&h=400&fit=crop',
        imageAlt: 'Agricultor analisando plantação'
    }
];

const practicesData = [
    {
        id: 'tab1',
        title: 'Agricultura Regenerativa',
        icon: '🌱',
        content: {
            title: 'Restaurando a Saúde do Solo',
            description: 'A agricultura regenerativa vai além da sustentabilidade: ela recupera ecossistemas degradados, aumentando a biodiversidade e capturando carbono da atmosfera.',
            benefits: [
                'Aumento de até 30% na matéria orgânica do solo',
                'Redução de 50% no uso de fertilizantes químicos',
                'Maior retenção de água no solo',
                'Aumento da biodiversidade local'
            ],
            image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=800&h=600&fit=crop',
            imageAlt: 'Solo saudável com agricultura regenerativa'
        }
    },
    {
        id: 'tab2',
        title: 'Irrigação Inteligente',
        icon: '💧',
        content: {
            title: 'Economia de Água com Tecnologia',
            description: 'Sistemas modernos de irrigação por gotejamento e sensores IoT que monitoram a umidade do solo em tempo real, reduzindo o consumo de água em até 60%.',
            benefits: [
                'Economia de até 60% no consumo de água',
                'Monitoramento em tempo real via smartphone',
                'Irrigação automatizada por setores',
                'Redução de custos operacionais'
            ],
            image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&h=600&fit=crop',
            imageAlt: 'Sistema de irrigação inteligente'
        }
    },
    {
        id: 'tab3',
        title: 'Energia Renovável',
        icon: '☀️',
        content: {
            title: 'Energia Limpa no Campo',
            description: 'Utilização de energia solar e biomassa para tornar as operações agrícolas autossuficientes e reduzir drasticamente a pegada de carbono.',
            benefits: [
                'Redução de 80% na conta de energia',
                'Sistemas híbridos solar-biomassa',
                'Payback em menos de 4 anos',
                'Créditos de energia excedente'
            ],
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
            imageAlt: 'Painéis solares em área rural'
        }
    },
    {
        id: 'tab4',
        title: 'Rotação de Culturas',
        icon: '🔄',
        content: {
            title: 'Diversidade que Enriquece',
            description: 'Alternância planejada de culturas que mantém a fertilidade do solo, reduz pragas naturalmente e aumenta a produtividade por hectare.',
            benefits: [
                'Redução de 70% na incidência de pragas',
                'Aumento da produtividade por hectare',
                'Melhoria da estrutura do solo',
                'Diversificação de renda'
            ],
            image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&h=600&fit=crop',
            imageAlt: 'Diferentes culturas em rotação'
        }
    }
];

const technologiesData = [
    {
        id: 1,
        title: 'Drones de Monitoramento',
        description: 'Drones equipados com câmeras multiespectrais que mapeiam a saúde das plantas, identificam pragas precocemente e otimizam a aplicação de insumos.',
        image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=600&h=400&fit=crop',
        imageAlt: 'Drone sobrevoando plantação',
        tag: 'Precisão'
    },
    {
        id: 2,
        title: 'Sensores IoT',
        description: 'Rede de sensores conectados que monitoram umidade, temperatura, nutrientes do solo e condições climáticas em tempo real, enviando dados para o seu smartphone.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
        imageAlt: 'Sensores IoT no campo',
        tag: 'Conectividade'
    },
    {
        id: 3,
        title: 'Big Data & IA',
        description: 'Algoritmos de inteligência artificial que analisam grandes volumes de dados para prever safras, otimizar plantio e reduzir perdas por fatores climáticos.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        imageAlt: 'Análise de dados agrícolas',
        tag: 'Inteligência'
    },
    {
        id: 4,
        title: 'Biotecnologia',
        description: 'Desenvolvimento de bioinsumos, controle biológico de pragas e melhoramento genético que reduz a necessidade de agrotóxicos em até 90%.',
        image: 'https://images.unsplash.com/photo-1535916517497-4e9b0afdb7bc?w=600&h=400&fit=crop',
        imageAlt: 'Laboratório de biotecnologia agrícola',
        tag: 'Inovação'
    }
];

const numbersData = [
    { value: 500, suffix: '+', label: 'Produtores Atendidos' },
    { value: 40, suffix: '%', label: 'Redução de Água' },
    { value: 98, suffix: '%', label: 'Satisfação' },
    { value: 1200, suffix: ' ha', label: 'Área Sustentável' }
];

const testimonialsData = [
    {
        id: 1,
        text: "A Agro Forte transformou nossa propriedade. Hoje produzimos 40% mais usando 60% menos água. O retorno do investimento veio em apenas 18 meses.",
        author: "João Silva",
        role: "Produtor Rural - MG",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
        imageAlt: "Foto de João Silva"
    },
    {
        id: 2,
        text: "Implementar as práticas sustentáveis foi a melhor decisão da minha carreira. Nossa produtividade aumentou e conseguimos certificação internacional.",
        author: "Maria Santos",
        role: "Agricultora - PR",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
        imageAlt: "Foto de Maria Santos"
    },
    {
        id: 3,
        text: "O equilíbrio entre produção e natureza é possível. A tecnologia fez toda diferença e hoje somos referência na região em agricultura sustentável.",
        author: "Carlos Oliveira",
        role: "Engenheiro Agrônomo - SP",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
        imageAlt: "Foto de Carlos Oliveira"
    },
    {
        id: 4,
        text: "Finalmente encontramos um modelo que respeita o meio ambiente e gera lucro. Nossa cooperativa já tem 200 famílias beneficiadas.",
        author: "Ana Costa",
        role: "Presidente Cooperativa - BA",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
        imageAlt: "Foto de Ana Costa"
    }
];

const faqData = [
    {
        id: 'faq1',
        question: 'O que é agricultura sustentável e por que ela é importante?',
        answer: 'A agricultura sustentável é um modelo de produção que busca atender às necessidades atuais de alimentos sem comprometer a capacidade das gerações futuras. Ela integra três pilares fundamentais: viabilidade econômica, responsabilidade social e preservação ambiental. É importante porque enfrenta desafios globais como mudanças climáticas, escassez de água e perda de biodiversidade, garantindo segurança alimentar a longo prazo.'
    },
    {
        id: 'faq2',
        question: 'Quanto tempo leva para ver resultados com práticas sustentáveis?',
        answer: 'Os primeiros resultados podem ser observados já nos primeiros 6 meses, com melhorias na estrutura do solo e redução de custos com insumos. Em 12 a 18 meses, a maioria dos produtores relata aumento significativo na produtividade (20-40%) e redução nos custos operacionais. O retorno total do investimento geralmente ocorre entre 2 e 4 anos, dependendo da tecnologia implementada.'
    },
    {
        id: 'faq3',
        question: 'É mais caro produzir de forma sustentável?',
        answer: 'O investimento inicial pode ser maior devido à aquisição de tecnologias e adequação de processos. No entanto, a médio e longo prazo, os custos operacionais reduzem significativamente: economia de até 60% em água, 50% em fertilizantes e 40% em defensivos. Além disso, produtos sustentáveis frequentemente alcançam preços premium no mercado, aumentando a margem de lucro.'
    },
    {
        id: 'faq4',
        question: 'Quais certificações podemos obter com a Agro Forte?',
        answer: 'Trabalhamos com as principais certificações nacionais e internacionais: Rainforest Alliance, Fair Trade, Orgânico Brasil, GlobalG.A.P. e Bonsucro. Nossa equipe técnica orienta todo o processo de adequação às normas, documentação necessária e auditorias, tornando o processo simples e eficiente para o produtor.'
    },
    {
        id: 'faq5',
        question: 'Como a tecnologia ajuda na agricultura sustentável?',
        answer: 'A tecnologia é fundamental para a agricultura sustentável moderna. Drones e satélites fazem monitoramento preciso das lavouras, sensores IoT gerenciam irrigação em tempo real, inteligência artificial prevê pragas e otimiza colheitas, e blockchain garante rastreabilidade total da produção. Essas ferramentas permitem produzir mais usando menos recursos naturais.'
    }
];

// ============================================
// RENDERIZAÇÕES
// ============================================
function renderAboutCards() {
    const grid = document.getElementById('about-grid');
    aboutData.forEach(card => {
        const article = document.createElement('article');
        article.className = 'about-card animate-reveal';
        article.innerHTML = `
            <img src="${card.image}" alt="${card.imageAlt}" class="about-card-img" loading="lazy">
            <div class="about-card-content">
                <h3>${card.title}</h3>
                <p>${card.description}</p>
            </div>
        `;
        grid.appendChild(article);
    });
}

function renderTabs() {
    const nav = document.getElementById('tabs-nav');
    const content = document.getElementById('tabs-content');
    
    practicesData.forEach((tab, index) => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        btn.setAttribute('aria-controls', `panel-${tab.id}`);
        btn.id = `tab-${tab.id}`;
        btn.innerHTML = `<span aria-hidden="true">${tab.icon}</span> ${tab.title}`;
        btn.addEventListener('click', () => switchTab(index));
        nav.appendChild(btn);
        
        const panel = document.createElement('div');
        panel.className = `tab-panel ${index === 0 ? 'active' : ''}`;
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', `tab-${tab.id}`);
        panel.id = `panel-${tab.id}`;
        panel.innerHTML = `
            <div class="tab-panel-content">
                <div class="tab-panel-text">
                    <h3>${tab.content.title}</h3>
                    <p>${tab.content.description}</p>
                    <ul>${tab.content.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
                </div>
                <img src="${tab.content.image}" alt="${tab.content.imageAlt}" class="tab-panel-img" loading="lazy">
            </div>
        `;
        content.appendChild(panel);
    });
}

function switchTab(index) {
    document.querySelectorAll('.tab-btn').forEach((btn, i) => {
        const isActive = i === index;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive);
    });
    document.querySelectorAll('.tab-panel').forEach((panel, i) => {
        panel.classList.toggle('active', i === index);
    });
}

function renderTechnologies() {
    const grid = document.getElementById('tech-grid');
    technologiesData.forEach(tech => {
        const card = document.createElement('article');
        card.className = 'tech-card animate-reveal';
        card.innerHTML = `
            <img src="${tech.image}" alt="${tech.imageAlt}" class="tech-card-img" loading="lazy">
            <div class="tech-card-content">
                <h3>${tech.title}</h3>
                <p>${tech.description}</p>
                <div class="tech-card-meta">
                    <span class="tech-tag">${tech.tag}</span>
                    <span>Saiba mais →</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderNumbers() {
    const grid = document.getElementById('numbers-grid');
    numbersData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'number-card animate-reveal';
        div.innerHTML = `
            <span class="number-value" data-target="${item.value}" data-suffix="${item.suffix}">0${item.suffix}</span>
            <span class="number-label">${item.label}</span>
        `;
        grid.appendChild(div);
    });
}

function renderCarousel() {
    const container = document.getElementById('carousel-container');
    const dots = document.getElementById('carousel-dots');
    
    testimonialsData.forEach((t, i) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.setAttribute('role', 'group');
        item.setAttribute('aria-roledescription', 'slide');
        item.setAttribute('aria-label', `Depoimento ${i+1} de ${testimonialsData.length}`);
        item.innerHTML = `
            <div class="carousel-item-content">
                <img src="${t.image}" alt="${t.imageAlt}" class="carousel-item-img" loading="lazy">
                <div class="carousel-item-text">
                    <p>"${t.text}"</p>
                    <div class="author">${t.author}</div>
                    <div class="role">${t.role}</div>
                </div>
            </div>
        `;
        container.appendChild(item);
        
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Ir para depoimento ${i+1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dots.appendChild(dot);
    });
    
    initCarousel();
}

let currentSlide = 0;
let slideInterval = null;
let isTransitioning = false;

function goToSlide(index) {
    if (isTransitioning) return;
    const slides = document.querySelectorAll('.carousel-item');
    if (!slides.length) return;
    
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    isTransitioning = true;
    currentSlide = index;
    
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
    
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
    
    setTimeout(() => { isTransitioning = false; }, 600);
}

function initCarousel() {
    const prev = document.querySelector('.carousel-btn.prev');
    const next = document.querySelector('.carousel-btn.next');
    if (prev) prev.addEventListener('click', () => goToSlide(currentSlide - 1));
    if (next) next.addEventListener('click', () => goToSlide(currentSlide + 1));
    
    startAutoPlay();
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
    carousel.addEventListener('focusin', stopAutoPlay);
    carousel.addEventListener('focusout', startAutoPlay);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
        if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
    });
}

function startAutoPlay() {
    stopAutoPlay();
    slideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
}
function stopAutoPlay() {
    if (slideInterval) clearInterval(slideInterval);
}

function renderAccordion() {
    const accordion = document.getElementById('accordion');
    faqData.forEach(item => {
        const wrapper = document.createElement('div');
        wrapper.className = 'accordion-item';
        wrapper.setAttribute('role', 'listitem');
        
        const header = document.createElement('button');
        header.className = 'accordion-header';
        header.setAttribute('aria-expanded', 'false');
        header.setAttribute('aria-controls', `content-${item.id}`);
        header.id = `header-${item.id}`;
        header.innerHTML = `<span>${item.question}</span><span class="accordion-icon" aria-hidden="true">+</span>`;
        
        const content = document.createElement('div');
        content.className = 'accordion-content';
        content.id = `content-${item.id}`;
        content.setAttribute('role', 'region');
        content.setAttribute('aria-labelledby', `header-${item.id}`);
        content.innerHTML = `<div class="accordion-content-inner"><p>${item.answer}</p></div>`;
        
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
        
        wrapper.appendChild(header);
        wrapper.appendChild(content);
        accordion.appendChild(wrapper);
    });
}

// ============================================
// CONTADORES ANIMADOS (Intersection Observer)
// ============================================
function animateCounters() {
    const counters = document.querySelectorAll('.number-value');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                const suffix = el.dataset.suffix;
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        el.textContent = Math.floor(current) + suffix;
                        requestAnimationFrame(updateCounter);
                    } else {
                        el.textContent = target + suffix;
                    }
                };
                updateCounter();
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// ============================================
// SCROLL REVEAL
// ============================================
function initScrollReveal() {
    const reveals = document.querySelectorAll('.animate-reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    
    reveals.forEach(el => observer.observe(el));
}

// ============================================
// PARALLAX DO HERO
// ============================================
function initParallax() {
    const bg = document.querySelector('.hero-bg');
    if (!bg) return;
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        bg.style.transform = `translateY(${scrolled * 0.4}px)`;
    }, { passive: true });
}

// ============================================
// BOTÃO VOLTAR AO TOPO
// ============================================
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 600) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// ACESSIBILIDADE
// ============================================
let currentFontSize = 100;
function changeFontSize(delta) {
    currentFontSize = Math.min(Math.max(currentFontSize + delta, 80), 150);
    document.documentElement.style.fontSize = `${currentFontSize}%`;
    localStorage.setItem('fontSize', currentFontSize);
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
    localStorage.setItem('highContrast', document.body.classList.contains('high-contrast'));
}

function initAccessibility() {
    document.getElementById('font-increase').addEventListener('click', () => changeFontSize(10));
    document.getElementById('font-decrease').addEventListener('click', () => changeFontSize(-10));
    document.getElementById('contrast-toggle').addEventListener('click', toggleContrast);
    
    const savedFont = localStorage.getItem('fontSize');
    if (savedFont) {
        currentFontSize = parseInt(savedFont);
        document.documentElement.style.fontSize = `${currentFontSize}%`;
    }
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
    }
}

// ============================================
// MENU MOBILE
// ============================================
function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.nav-menu');
    btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !expanded);
        menu.classList.toggle('active');
    });
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
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
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.submit-btn');
        const original = btn.textContent;
        btn.textContent = '✓ Mensagem Enviada!';
        btn.style.background = '#4CAF50';
        btn.disabled = true;
        setTimeout(() => {
            btn.textContent = original;
            btn.style.background = '';
            btn.disabled = false;
            form.reset();
        }, 3000);
    });
}

// ============================================
// INICIALIZAÇÃO GERAL
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderAboutCards();
    renderTabs();
    renderTechnologies();
    renderNumbers();
    renderCarousel();
    renderAccordion();
    
    initScrollReveal();
    initParallax();
    initBackToTop();
    animateCounters();
    initAccessibility();
    initMobileMenu();
    initForm();
    
    console.log('✅ Agro Forte - Site carregado com todas as melhorias.');
});
