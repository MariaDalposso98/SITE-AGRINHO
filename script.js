
// ============================================
// DADOS DA APLICAÇÃO
// Edite estes arrays para modificar o conteúdo dinâmico
// ============================================

// Dados dos Cards "Sobre"
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

// Dados das Tabs de Práticas Sustentáveis
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

// Dados das Tecnologias
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

// Dados do Carrossel de Depoimentos
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

// Dados do Accordion FAQ
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
// FUNÇÕES DE RENDERIZAÇÃO
// ============================================

// Renderizar Cards Sobre
function renderAboutCards() {
    const aboutGrid = document.getElementById('about-grid');
    
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
        aboutGrid.appendChild(article);
    });
}

// Renderizar Tabs
function renderTabs() {
    const tabsNav = document.getElementById('tabs-nav');
    const tabsContent = document.getElementById('tabs-content');
    
    practicesData.forEach((tab, index) => {
        // Criar botão da tab
        const tabBtn = document.createElement('button');
        tabBtn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
        tabBtn.setAttribute('role', 'tab');
        tabBtn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        tabBtn.setAttribute('aria-controls', `panel-${tab.id}`);
        tabBtn.id = `tab-${tab.id}`;
        tabBtn.innerHTML = `<span aria-hidden="true">${tab.icon}</span> ${tab.title}`;
        tabBtn.addEventListener('click', () => switchTab(index));
        tabsNav.appendChild(tabBtn);
        
        // Criar painel da tab
        const tabPanel = document.createElement('div');
        tabPanel.className = `tab-panel ${index === 0 ? 'active' : ''}`;
        tabPanel.setAttribute('role', 'tabpanel');
        tabPanel.setAttribute('aria-labelledby', `tab-${tab.id}`);
        tabPanel.id = `panel-${tab.id}`;
        tabPanel.innerHTML = `
            <div class="tab-panel-content">
                <div class="tab-panel-text">
                    <h3>${tab.content.title}</h3>
                    <p>${tab.content.description}</p>
                    <ul>
                        ${tab.content.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
                <img src="${tab.content.image}" alt="${tab.content.imageAlt}" class="tab-panel-img" loading="lazy">
            </div>
        `;
        tabsContent.appendChild(tabPanel);
    });
}

// Switch Tab
function switchTab(index) {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabBtns.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
        btn.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });
    
    tabPanels.forEach((panel, i) => {
        panel.classList.toggle('active', i === index);
    });
}

// Renderizar Tecnologias
function renderTechnologies() {
    const techGrid = document.getElementById('tech-grid');
    
    technologiesData.forEach(tech => {
        const article = document.createElement('article');
        article.className = 'tech-card animate-reveal';
        article.innerHTML = `
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
        techGrid.appendChild(article);
    });
}

// Renderizar Carrossel
function renderCarousel() {
    const carouselContainer = document.getElementById('carousel-container');
    const carouselDots = document.getElementById('carousel-dots');
    
    testimonialsData.forEach((testimonial, index) => {
        // Criar item do carrossel
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        carouselItem.setAttribute('role', 'group');
        carouselItem.setAttribute('aria-roledescription', 'slide');
        carouselItem.setAttribute('aria-label', `Depoimento ${index + 1} de ${testimonialsData.length}`);
        carouselItem.innerHTML = `
            <div class="carousel-item-content">
                <img src="${testimonial.image}" alt="${testimonial.imageAlt}" class="carousel-item-img" loading="lazy">
                <div class="carousel-item-text">
                    <p>"${testimonial.text}"</p>
                    <div class="author">${testimonial.author}</div>
                    <div class="role">${testimonial.role}</div>
                </div>
            </div>
        `;
        carouselContainer.appendChild(carouselItem);
        
        // Criar dot de navegação
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Ir para depoimento ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        carouselDots.appendChild(dot);
    });
    
    initializeCarousel();
}

// Lógica do Carrossel
let currentSlide = 0;
let slideInterval;
let isTransitioning = false;

function goToSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;
    
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    currentSlide = index;
    
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
    
    setTimeout(() => {
        isTransitioning = false;
    }, 500);
}

function initializeCarousel() {
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    
    // Auto-play do carrossel
    startAutoPlay();
    
    // Parar auto-play quando hover
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
    carousel.addEventListener('focusin', stopAutoPlay);
    carousel.addEventListener('focusout', startAutoPlay);
    
    // Suporte a touch e teclado
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
        if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            goToSlide(currentSlide + 1);
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            goToSlide(currentSlide - 1);
        }
    }
}

function startAutoPlay() {
    stopAutoPlay();
    slideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);
}

function stopAutoPlay() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
}

// Renderizar Accordion
function renderAccordion() {
    const accordion = document.getElementById('accordion');
    
    faqData.forEach((item) => {
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';
        accordionItem.setAttribute('role', 'listitem');
        
        const header = document.createElement('button');
        header.className = 'accordion-header';
        header.setAttribute('aria-expanded', 'false');
        header.setAttribute('aria-controls', `content-${item.id}`);
        header.id = `header-${item.id}`;
        header.innerHTML = `
            <span>${item.question}</span>
            <span class="accordion-icon" aria-hidden="true">+</span>
        `;
        
        const content = document.createElement('div');
        content.className = 'accordion-content';
        content.setAttribute('role', 'region');
        content.setAttribute('aria-labelledby', `header-${item.id}`);
        content.id = `content-${item.id}`;
        content.innerHTML = `<div class="accordion-content-inner"><p>${item.answer}</p></div>`;
        
        header.addEventListener('click', () => toggleAccordion(header, content));
        
        accordionItem.appendChild(header);
        accordionItem.appendChild(content);
        accordion.appendChild(accordionItem);
    });
}

function toggleAccordion(header, content) {
    const isExpanded = header.getAttribute('aria-expanded') === 'true';
    
    // Fechar todos os outros
    document.querySelectorAll('.accordion-header').forEach(h => {
        if (h !== header) {
            h.setAttribute('aria-expanded', 'false');
            h.nextElementSibling.classList.remove('active');
            h.querySelector('.accordion-icon').textContent = '+';
        }
    });
    
    header.setAttribute('aria-expanded', !isExpanded);
    content.classList.toggle('active');
    header.querySelector('.accordion-icon').textContent = isExpanded ? '+' : '×';
}

// ============================================
// FUNÇÕES DE ACESSIBILIDADE
// ============================================

// Controle de tamanho de fonte
let currentFontSize = 100;

function changeFontSize(delta) {
    currentFontSize = Math.min(Math.max(currentFontSize + delta, 80), 150);
    document.documentElement.style.fontSize = `${currentFontSize}%`;
    localStorage.setItem('fontSize', currentFontSize);
    announceFontSize();
}

function announceFontSize() {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-9999px';
    announcement.textContent = `Tamanho da fonte: ${currentFontSize}%`;
    document.body.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
}

// Alternar alto contraste
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
    const isHighContrast = document.body.classList.contains('high-contrast');
    localStorage.setItem('highContrast', isHighContrast);
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.animate-reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll, {passive: true});
    window.addEventListener('load', revealOnScroll);
    revealOnScroll(); // Verificar elementos já visíveis
}

// ============================================
// MENU MOBILE
// ============================================
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });
}

// ============================================
// FORMULÁRIO DE CONTATO
// ============================================
function initContactForm() {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        
        // Feedback visual
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Mensagem Enviada com Sucesso!';
        submitBtn.style.background = '#4CAF50';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
            form.reset();
        }, 3000);
    });
}

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚜 Agro Forte - Inicializando site...');
    
    // Renderizar componentes dinâmicos
    renderAboutCards();
    renderTabs();
    renderTechnologies();
    renderCarousel();
    renderAccordion();
    
    // Inicializar funcionalidades
    initScrollReveal();
    initMobileMenu();
    initContactForm();
    
    // Restaurar preferências do localStorage
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        currentFontSize = parseInt(savedFontSize);
        document.documentElement.style.fontSize = `${currentFontSize}%`;
    }
    
    const savedContrast = localStorage.getItem('highContrast');
    if (savedContrast === 'true') {
        document.body.classList.add('high-contrast');
    }
    
    // Configurar controles de acessibilidade
    document.getElementById('font-increase').addEventListener('click', () => changeFontSize(10));
    document.getElementById('font-decrease').addEventListener('click', () => changeFontSize(-10));
    document.getElementById('contrast-toggle').addEventListener('click', toggleContrast);
    
    console.log('✅ Agro Forte - Site inicializado com sucesso!');
    console.log('📊 Componentes renderizados:');
    console.log('  - Cards Sobre: ' + aboutData.length);
    console.log('  - Tabs de Práticas: ' + practicesData.length);
    console.log('  - Tecnologias: ' + technologiesData.length);
    console.log('  - Depoimentos: ' + testimonialsData.length);
    console.log('  - FAQ: ' + faqData.length);
});

// Service Worker para melhor performance (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Implementação futura de cache para imagens
        console.log('📦 Service Worker pronto para implementação');
    });
}
