// --- BASE DE DATOS LOCAL INICIAL (Datos Extramatriz de Catálogos) ---
let products = [
    { 
      id: 1, 
      title: 'Intenze Pre-Workout', 
      brand: 'ProScience', 
      price: 145000, 
      stock: 24,
      tags: ['Rendimiento', 'Fuerza'],
      desc: 'Complejo ergogénico avanzado con 200mg de Cafeína, 3g de Creatina HCl y 6g de Citrulina para maximizar la entrega de oxígeno celular.'
    },
    { 
      id: 2, 
      title: 'Melena de León', 
      brand: 'Ayaka / MS Naturals', 
      price: 99900, 
      stock: 15,
      tags: ['Nootrópico', 'Enfoque'],
      desc: 'Estimulador natural del factor de crecimiento nervioso (NGF). Optimiza la claridad mental, la memoria y la neurogénesis bajo estrés físico.'
    },
    { 
      id: 3, 
      title: 'Best Protein 2LB', 
      brand: 'ProScience', 
      price: 214900, 
      stock: 12,
      tags: ['Aislada', 'Masa Magra'],
      desc: 'Mezcla premium de Whey Protein Isolate y Caseína Micelar optimizada con 3g de Leucina. 0 grasa, 0 azúcar, 0 lactosa.'
    },
    { 
      id: 4, 
      title: 'Aranflox Fibra Líquida', 
      brand: 'Ayaka / MS Naturals', 
      price: 65000, 
      stock: 40,
      tags: ['Detox', 'Salud Gut'],
      desc: 'Fórmula rica en glucomanano de alta densidad. Produce saciedad biológica, reduce picos de glucosa y purifica la microbiota gastrointestinal.'
    }
];

const roles = ["ALTO RENDIMIENTO", "CIENCIA DEPORTIVA", "SALUD INTEGRAL", "BIOHACKING ÉLITE"];
let roleIndex = 0;

// --- 1. MOTOR DEL PRELOADER CINEMÁTICO ---
function initPreloader() {
    const loaderWord = document.getElementById('loader-word');
    const loaderCounter = document.getElementById('loader-counter');
    const loaderBar = document.getElementById('loader-bar');
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');

    // Animación inicial del texto interno del Loader
    gsap.to(loaderWord, { opacity: 1, duration: 0.5 });

    // Ciclo de palabras en el loader cada 900ms
    const words = ["OPTIMIZAR", "EVOLUCIONAR", "TRASCENDER"];
    let wordIdx = 0;
    const wordInterval = setInterval(() => {
        wordIdx = (wordIdx + 1) % words.length;
        gsap.to(loaderWord, { opacity: 0, y: -10, duration: 0.2, onComplete: () => {
            loaderWord.innerText = words[wordIdx];
            gsap.fromTo(loaderWord, { y: 10 }, { opacity: 1, y: 0, duration: 0.2 });
        }});
    }, 900);

    // Conteo numérico lineal 000 -> 100 usando requestAnimationFrame
    let startTimestamp = null;
    const duration = 2700;

    function step(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        const percentage = Math.min(Math.floor((progress / duration) * 100), 100);
        
        loaderCounter.innerText = String(percentage).padStart(3, '0');
        loaderBar.style.width = percentage + '%';

        if (progress < duration) {
            window.requestAnimationFrame(step);
        } else {
            // Fin de la carga
            clearInterval(wordInterval);
            setTimeout(() => {
                // Fade out del preloader y revelado del Hero con GSAP
                gsap.to(preloader, { opacity: 0, duration: 0.6, onComplete: () => {
                    preloader.style.display = 'none';
                    mainContent.classList.remove('hidden');
                    gsap.to(mainContent, { opacity: 1, duration: 0.4 });
                    initHeroAnimations();
                }});
            }, 300);
        }
    }
    window.requestAnimationFrame(step);
}

// --- 2. CONFIGURACIÓN DE VIDEO STREAMING (HLS) ---
function initVideoStreaming() {
    const videoSrc = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
    const heroVideo = document.getElementById('hero-video');
    const footerVideo = document.getElementById('footer-video');

    function setupHls(videoElement) {
        if (!videoElement) return;
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(videoElement);
        } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
            videoElement.src = videoSrc;
        }
    }
    setupHls(heroVideo);
    setupHls(footerVideo);
}

// --- 3. ANIMACIONES ENTRADA DEL HERO (GSAP) ---
function initHeroAnimations() {
    gsap.to("#hero-eyebrow", { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
    gsap.to("#hero-title", { opacity: 1, y: 0, duration: 1.2, delay: 0.1, ease: "power3.out" });
    gsap.to("#hero-role-container", { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" });
    gsap.to("#hero-desc", { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" });
    gsap.to("#hero-ctas", { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power3.out" });

    // Cambios dinámicos en el texto de roles
    setInterval(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        const roleSpan = document.getElementById('hero-role');
        gsap.to(roleSpan, { opacity: 0, y: -5, duration: 0.2, onComplete: () => {
            roleSpan.innerText = roles[roleIndex];
            gsap.fromTo(roleSpan, { y: 5 }, { opacity: 1, y: 0, duration: 0.2 });
        }});
    }, 2200);
}

// --- 4. RENDERIZADO DINÁMICO DEL BENTO GRID ---
function formatCurrency(val) {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val);
}

function renderBentoGrid() {
    const grid = document.getElementById('bento-grid');
    grid.innerHTML = ''; // Limpiar

    products.forEach((product, idx) => {
        const isLarge = idx === 0 || idx === 3;
        const colSpan = isLarge ? 'md:col-span-7' : 'md:col-span-5';
        
        const card = document.createElement('div');
        card.className = `${colSpan} bg-surface border border-stroke rounded-3xl p-8 flex flex-col justify-between relative group hover:border-white/20 transition-all cursor-pointer min-h-[340px]`;
        
        // Estructura interna usando strings literales
        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start">
                    <span class="text-[10px] uppercase font-bold tracking-widest text-muted border border-stroke px-2 py-0.5 rounded-md">${product.brand}</span>
                    <span class="text-xs font-mono text-muted">STOCK: ${product.stock}U</span>
                </div>
                <h3 class="text-2xl md:text-3xl font-display italic mt-4 text-text-primary tracking-wide">${product.title}</h3>
                <p class="text-xs text-muted mt-2 font-light line-clamp-2 leading-relaxed">${product.desc}</p>
            </div>
            <div class="flex justify-between items-end mt-8 pt-6 border-t border-stroke/40">
                <div class="flex gap-1.5">
                    ${product.tags.map(t => `<span class="text-[9px] uppercase tracking-wider font-semibold bg-stroke px-2.5 py-1 rounded-full text-text-primary/90">${t}</span>`).join('')}
                </div>
                <div class="text-lg md:text-xl font-mono text-right text-text-primary">${formatCurrency(product.price)}</div>
            </div>
        `;

        // Evento para abrir modal detallado
        card.addEventListener('click', () => openProductModal(product));
        grid.appendChild(card);
    });
}

// --- 5. MODALES CONTROLLER ---
function openProductModal(product) {
    document.getElementById('modal-brand').innerText = product.brand;
    document.getElementById('modal-title').innerText = product.title;
    document.getElementById('modal-price').innerText = formatCurrency(product.price);
    document.getElementById('modal-desc').innerText = product.desc;
    document.getElementById('modal-stock').innerText = `${product.stock} UNIDADES`;

    const modal = document.getElementById('product-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => modal.style.opacity = '1', 50);
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    }, 300);
}

function toggleAdminModal(open) {
    const modal = document.getElementById('admin-modal');
    if (open) {
        renderAdminControlList();
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => modal.style.opacity = '1', 50);
    } else {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
            renderBentoGrid(); // Re-renderizar catálogo con nuevos datos
        }, 300);
    }
}

// Renderizar la lista editable dentro del panel administrativo
function renderAdminControlList() {
    const container = document.getElementById('admin-product-list');
    container.innerHTML = '';

    products.forEach(p => {
        const row = document.createElement('div');
        row.className = "grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-bg/40 border border-stroke p-4 rounded-xl text-xs";
        row.innerHTML = `
            <div class="md:col-span-4">
                <div class="font-bold text-text-primary">${p.title}</div>
                <div class="text-[10px] text-muted uppercase mt-0.5">${p.brand}</div>
            </div>
            <div class="md:col-span-4 flex items-center gap-2">
                <span class="text-muted text-[10px]">PRECIO:</span>
                <input type="number" value="${p.price}" onblur="updateProductData(${p.id}, 'price', this.value)" class="bg-surface border border-stroke rounded px-2 py-1.5 w-full text-white focus:outline-none">
            </div>
            <div class="md:col-span-4 flex items-center gap-2">
                <span class="text-muted text-[10px]">STOCK:</span>
                <input type="number" value="${p.stock}" onblur="updateProductData(${p.id}, 'stock', this.value)" class="bg-surface border border-stroke rounded px-2 py-1.5 w-full text-white focus:outline-none">
            </div>
        `;
        container.appendChild(row);
    });
}

function updateProductData(id, field, value) {
    products = products.map(p => p.id === id ? { ...p, [field]: Number(value) } : p);
}

// --- 6. MOTOR INTELIGENTE DE PROTOCOLOS ---
const weightInput = document.getElementById('weight-input');
if (weightInput) {
    weightInput.addEventListener('input', (e) => {
        document.getElementById('weight-label').innerText = `Masa Corporal Actual: ${e.target.value} KG`;
    });
}

function generateProtocol() {
    const weight = document.getElementById('weight-input').value;
    const goal = document.getElementById('goal-input').value;
    const output = document.getElementById('protocol-output');
    
    let stack = "";
    if (goal === 'performance') {
        stack = `PROTOCOLADO RECOMENDADO:\n• Pre-Entreno: Consumir 1 scoop de Intenze Pre-Workout 30 minutos antes de la sesión biomecánica.\n• Post-Entreno: 1 scoop de Best Protein disuelto en 300ml de agua para acelerar la síntesis proteica de tus ${weight}kg de masa corporal.`;
    } else if (goal === 'wellness') {
        stack = `PROTOCOLADO RECOMENDADO:\n• Enfoque Celular: 1 dosis de Melena de León en ayunas junto a tu café para inducir neuroprotección.\n• Regulación Digestiva: 1 toma de Aranflox Fibra Líquida antes del almuerzo para controlar las respuestas glucémicas.`;
    } else {
        stack = `PROTOCOLADO RECOMENDADO:\n• Recomposición Avanzada: Stack unificado de Best Protein (Post-entreno) acoplado a Melena de León para mantener el enfoque cognitivo y mitigar el cortisol durante el déficit calórico de tus ${weight}kg.`;
    }
    
    output.innerText = stack;
}

// --- ENTRADA EN CALIENTE AL CARGAR LA PÁGINA ---
window.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initVideoStreaming();
    renderBentoGrid();
});
