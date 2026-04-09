
// Efeito de mudança na Navbar ao rolar
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#081c15';
        nav.style.padding = '10px 0';
    } else {
        nav.style.backgroundColor = '#1b4332';
        nav.style.padding = '20px 0';
    }
});

// Animação simples de entrada dos cards
const cards = document.querySelectorAll('.card');
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});
