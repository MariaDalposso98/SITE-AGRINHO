
// ============================================
// DADOS DA APLICAÇÃO
// Edite estes arrays para modificar o conteúdo dinâmico
// ============================================

// Dados das Tabs de Práticas
const practicesData = [
    {
        id: 'tab1',
        title: 'Agricultura Regenerativa',
        content: 'Práticas que restauram a saúde do solo, aumentam a biodiversidade e capturam carbono da atmosfera.',
        icon: '🌾'
    },
    {
        id: 'tab2',
        title: 'Irrigação Inteligente',
        content: 'Sistemas de irrigação por gotejamento e sensores IoT que reduzem o consumo de água em até 60%.',
        icon: '💧'
    },
    {
        id: 'tab3',
        title: 'Energia Renovável',
        content: 'Utilização de energia solar e biomassa para tornar as operações agrícolas autossuficientes.',
        icon: '☀️'
    },
    {
        id: 'tab4',
        title: 'Rotação de Culturas',
        content: 'Alternância planejada de culturas que mantém a fertilidade do solo e reduz pragas naturalmente.',
        icon: '🔄'
    }
];

// Dados do Carrossel de Depoimentos
const testimonialsData = [
    {
        id: 1,
        text: "A Agro Forte transformou nossa propriedade. Hoje produzimos mais com menos impacto ambiental.",
        author: "João Silva",
        role: "Agricultor - MG"
    },
    {
        id: 2,
        text: "Implementar práticas sustentáveis foi a melhor decisão. Nossa produtividade aumentou 40%.",
        author: "Maria Santos",
        role: "Produtora Rural - PR"
    },
    {
        id: 3,
        text: "O equilíbrio entre produção e natureza é possível. A tecnologia fez toda diferença.",
        author: "Carlos Oliveira",
        role: "Engenheiro Agrônomo - SP"
    },
    {
        id: 4,
        text: "Finalmente encontramos um modelo que respeita o meio ambiente e gera lucro.",
        author: "Ana Costa",
        role: "Cooperativa Verde - BA"
    }
];

// Dados do Accordion FAQ
const faqData = [
    {
        id: 'faq1',
        question: 'O que é agricultura sustentável?',
        answer: 'É um modelo de produção que atende às necessidades atuais sem comprometer as gerações futuras, equilibrando produtividade, preservação ambiental e responsabilidade social.'
    },
    {
        id: 'faq2',
        question: 'Quanto tempo leva para ver resultados?',
        answer: 'Os primeiros resultados podem ser observados em 6 a 12 meses, com melhorias significativas na saúde do solo e redução de custos operacionais.'
    },
    {
        id: 'faq3',
        question: 'É mais caro produzir de forma sustentável?',
        answer: 'Inicialmente pode haver investimento em tecnologia, mas a longo prazo os custos reduzem significativamente com menor uso de insumos químicos e água.'
    }
];

// ============================================
// FUNÇÕES DE RENDERIZAÇÃO
// ============================================

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
        tabBtn.textContent = `${tab.icon} ${tab.title}`;
        tabBtn.addEventListener('click', () => switchTab(index));
        tabsNav.appendChild(tabBtn);
        
        // Criar painel da tab
        const tabPanel = document.createElement('div');
        tabPanel.className = `tab-panel ${index === 0 ? 'active' : ''}`;
        tabPanel.setAttribute('role', 'tabpanel');
        tabPanel.setAttribute('aria-labelledby', `tab-${tab.id}`);
        tabPanel.id = `panel-${tab.id}`;
        tabPanel.innerHTML = `<p>${tab.content}</p>`;
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
            <p>"${testimonial.text}"</p>
            <div class="author">${testimonial.author}</div>
            <div>${testimonial.role}</div>
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

function goToSlide(index) {
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
    
    // Suporte a touch
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
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
        header.innerHTML = `${item.question} <span aria-hidden="true">+</span>`;
        
        const content = document.createElement('div');
        content.className = 'accordion-content';
        content.setAttribute('role', 'region');
        content.setAttribute('aria-labelledby', `header-${item.id}`);
        content.id = `content-${item.id}`;
        content.innerHTML = `<p>${item.answer}</p>`;
        
        header.addEventListener('click', () => toggleAccordion(header, content));
        
        accordionItem.appendChild(header);
        accordionItem.appendChild(content);
        accordion.appendChild(accordionItem);
    });
}

function toggleAccordion(header, content) {
    const isExpanded = header.getAttribute('aria-expanded') === 'true';
    
    header.setAttribute('aria-expanded', !isExpanded);
    content.classList.toggle('active');
    header.querySelector('span').textContent = isExpanded ? '+' : '−';
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
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
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
        submitBtn.textContent = '✓ Mensagem Enviada!';
        submitBtn.style.background = '#4CAF50';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            form.reset();
        }, 3000);
    });
}

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar componentes dinâmicos
    renderTabs();
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
    
    console.log('Agro Forte - Site inicializado com sucesso!');
});
