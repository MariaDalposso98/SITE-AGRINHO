
// Inicializa os ícones do Lucide
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    animateStats();
});

// Função simples para simular cliques nos botões
function handleAction(type) {
    if(type === 'saiba-mais') {
        alert("Redirecionando para nossas políticas de ESG e sustentabilidade!");
    } else {
        alert("Iniciando tour virtual pela fazenda tecnológica...");
    }
}

// Animação de contagem para as estatísticas
function animateStats() {
    const stats = [
        { id: 'counter-co2', end: 45, suffix: '%' },
        { id: 'counter-prod', end: 30, suffix: '%' }
    ];

    stats.forEach(stat => {
        let start = 0;
        const duration = 2000; // 2 segundos
        const obj = document.getElementById(stat.id);
        const increment = stat.end / (duration / 16); // ~60fps

        const timer = setInterval(() => {
            start += increment;
            if (start >= stat.end) {
                obj.innerText = stat.end + stat.suffix;
                clearInterval(timer);
            } else {
                obj.innerText = Math.floor(start) + stat.suffix;
            }
        }, 16);
    });
}
