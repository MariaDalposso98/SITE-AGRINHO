
/* ==========================================================================
   1. GESTÃO DE DADOS (Renderização Dinâmica)
   ========================================================================== */
const dadosSolucoes = [
    {
        titulo: "Sensores IoT",
        descricao: "Monitoramento de umidade, nutrientes e temperatura do solo em tempo real."
    },
    {
        titulo: "IA Preditiva",
        descricao: "Algoritmos que prevêem pragas e otimizam a colheita reduzindo insumos."
    },
    {
        titulo: "Drones de Precisão",
        descricao: "Mapeamento aéreo térmico e aplicação localizada de biofertilizantes."
    }
];

function renderizarCards() {
    const container = document.getElementById('grid-solucoes');
    if (!container) return;

    container.innerHTML = dadosSolucoes.map(solucao => `
        <article class="card">
            <h3>${solucao.titulo}</h3>
            <p>${solucao.descricao}</p>
        </article>
    `).join('');
}

/* ==========================================================================
   2. ACESSIBILIDADE: FONTE & CONTRASTE
   ========================================================================== */
let tamanhoFonteAtual = 100; // Percentual da fonte base

function inicializarAcessibilidade() {
    const btnContraste = document.getElementById('btn-contraste');
    const btnAumentar = document.getElementById('btn-aumentar');
    const btnDiminuir = document.getElementById('btn-diminuir');

    // Chaveador de Contraste
    btnContraste?.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
        // Boa prática UX: Notificar o estado para leitores de tela se necessário
        const ativo = document.body.classList.contains('high-contrast');
        btnContraste.setAttribute('aria-pressed', ativo);
    });

    // Controle de Tamanho de Fonte
    btnAumentar?.addEventListener('click', () => {
        if(tamanhoFonteAtual < 140) { // Limite máximo seguro por quebra de layout
            tamanhoFonteAtual += 10;
            document.documentElement.style.fontSize = `${tamanhoFonteAtual}%`;
        }
    });

    btnDiminuir?.addEventListener('click', () => {
        if(tamanhoFonteAtual > 80) { // Limite mínimo
            tamanhoFonteAtual -= 10;
            document.documentElement.style.fontSize = `${tamanhoFonteAtual}%`;
        }
    });
}

/* ==========================================================================
   3. COMPONENTES: ACORDEÃO (Expandables)
   ========================================================================== */
function inicializarAcordeao() {
    const headers = document.querySelectorAll('.acordeao-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const painel = document.getElementById(header.getAttribute
