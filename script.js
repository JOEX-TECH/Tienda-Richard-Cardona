(() => {
  "use strict";

  const STORAGE_KEY = "rc345_store_v1";
  const DEFAULT_LANG = "es";
  const DEFAULT_VISIBLE = 18;
  const SECRET_COMMAND = "RICHARD345";

  const CATEGORY_LIST = [
    "proteinas",
    "creatinas",
    "pre entrenos",
    "aminoacidos",
    "vitaminas",
    "wellness",
    "detox",
    "skincare",
    "capilar",
    "rendimiento",
    "recuperacion",
    "salud hormonal",
    "enfoque mental",
    "energia",
    "inmunidad",
    "relajacion",
    "sueno",
    "accesorios",
    "premium",
    "nuevos productos",
    "mas vendidos",
    "ofertas",
    "productos destacados",
    "salud femenina",
    "salud masculina"
  ];

  const SUPLEMEDEFIT_SEED = [
    { name: "LEGACY", priceCop: 585000, category: "creatinas", source: "suplemedefit" },
    { name: "INTENZE", priceCop: 130000, category: "proteinas", source: "suplemedefit" },
    { name: "BEST PROTEIN 4LB", priceCop: 145000, category: "proteinas", source: "suplemedefit" },
    { name: "BEST VEGAN 2LB", priceCop: 214900, category: "proteinas", source: "suplemedefit" },
    { name: "SMART GAINER 3LB", priceCop: 590000, category: "proteinas", source: "suplemedefit" },
    { name: "ARMY", priceCop: 598900, category: "aminoacidos", source: "suplemedefit" },
    { name: "BEST WHEY 2LB - 5LB", priceCop: 0, category: "proteinas", source: "suplemedefit" },
    { name: "SHIELD", priceCop: 570000, category: "wellness", source: "suplemedefit" },
    { name: "OMEGA 3", priceCop: 160000, category: "vitaminas", source: "suplemedefit" },
    { name: "SMART GAINER 2LB", priceCop: 350000, category: "proteinas", source: "suplemedefit" },
    { name: "CREATINA CREAPURE 3003", priceCop: 130000, category: "creatinas", source: "suplemedefit" },
    { name: "IMN 'SOLATE 2LB", priceCop: 150000, category: "proteinas", source: "suplemedefit" },
    { name: "ISO WHEY 5LB VAINILLA PROX", priceCop: 129900, category: "proteinas", source: "suplemedefit" },
    { name: "IMN ISOLATE", priceCop: 150000, category: "proteinas", source: "suplemedefit" },
    { name: "BCAAS", priceCop: 19900, category: "proteinas", source: "suplemedefit" },
    { name: "THE WHEY OF GAIN 6LB", priceCop: 109900, category: "proteinas", source: "suplemedefit" },
    { name: "GO VEGAN 2LB", priceCop: 159900, category: "proteinas", source: "suplemedefit" },
    { name: "VITAMINAS DEL COMPLEJO B", priceCop: 554900, category: "vitaminas", source: "suplemedefit" },
    { name: "PUMP NOX EDGE", priceCop: 115500, category: "pre entrenos", source: "suplemedefit" },
    { name: "SMART STACK", priceCop: 583000, category: "aminoacidos", source: "suplemedefit" },
    { name: "SMART BURNER", priceCop: 598900, category: "aminoacidos", source: "suplemedefit" },
    { name: "GLUTAMINA SMART (GL SMART)", priceCop: 15500, category: "aminoacidos", source: "suplemedefit" },
    { name: "WHEY PURE ILB 15 SERVICIOS", priceCop: 140000, category: "proteinas", source: "suplemedefit" },
    { name: "MASS EVOLUTION 4LB & 7LB", priceCop: 547500, category: "proteinas", source: "suplemedefit" },
    { name: "MASS EVOLUTION IOLB", priceCop: 583000, category: "proteinas", source: "suplemedefit" },
    { name: "WHEY PURE 2LB", priceCop: 121000, category: "proteinas", source: "suplemedefit" },
    { name: "WHEY PURE 5LB", priceCop: 176500, category: "proteinas", source: "suplemedefit" },
    { name: "PROTON WHEY 2LB", priceCop: 590000, category: "proteinas", source: "suplemedefit" },
    { name: "ELECTRON 600G", priceCop: 115000, category: "wellness", source: "suplemedefit" },
    { name: "PROTON WHEY 4LB", priceCop: 130000, category: "proteinas", source: "suplemedefit" },
    { name: "PROTON GAINER 6LB", priceCop: 347000, category: "proteinas", source: "suplemedefit" },
    { name: "PRO CLASSIC 2LB", priceCop: 50000, category: "proteinas", source: "suplemedefit" },
    { name: "PRO CLASSIC 3LB", priceCop: 140000, category: "proteinas", source: "suplemedefit" },
    { name: "NUTRA VEGAN PROTEIN", priceCop: 575000, category: "proteinas", source: "suplemedefit" },
    { name: "MEGAPLEX CREATINE POWER IOLB", priceCop: 565000, category: "proteinas", source: "suplemedefit" },
    { name: "PRO SACHETS", priceCop: 599900, category: "wellness", source: "suplemedefit" },
    { name: "MEGA CARBS", priceCop: 580000, category: "aminoacidos", source: "suplemedefit" },
    { name: "KING PROTEIN", priceCop: 172500, category: "proteinas", source: "suplemedefit" },
    { name: "WHEY PLATINUM", priceCop: 357500, category: "proteinas", source: "suplemedefit" },
    { name: "CREA BOLIC 300G", priceCop: 549000, category: "wellness", source: "suplemedefit" },
    { name: "PRO BCAA", priceCop: 589900, category: "aminoacidos", source: "suplemedefit" },
    { name: "HYDROXYCUT", priceCop: 125000, category: "wellness", source: "suplemedefit" },
    { name: "PLATINUM MULTIVITAMIN", priceCop: 595000, category: "aminoacidos", source: "suplemedefit" },
    { name: "PLATINUM 100% CAFEINNE", priceCop: 139000, category: "pre entrenos", source: "suplemedefit" },
    { name: "CELL TECH CREACTOR", priceCop: 143000, category: "creatinas", source: "suplemedefit" },
    { name: "NITRO TECH WHEY GOLD 5LB", priceCop: 199000, category: "proteinas", source: "suplemedefit" },
    { name: "MICRONIZED CREATINE ON", priceCop: 90000, category: "creatinas", source: "suplemedefit" },
    { name: "WHEY GOLD STANDARD", priceCop: 142000, category: "proteinas", source: "suplemedefit" },
    { name: "SERIOUS MASS 6LB", priceCop: 140000, category: "proteinas", source: "suplemedefit" },
    { name: "OPTI MEN / OPTI WOMEN / CREATINE / SERIOUS MASS", priceCop: 90000, category: "proteinas", source: "suplemedefit" },
    { name: "OMEGA 3 MACROBLENDS", priceCop: 130000, category: "vitaminas", source: "suplemedefit" },
    { name: "BEAST BITES", priceCop: 599000, category: "creatinas", source: "suplemedefit" },
    { name: "AMINO X 30 SERVINGS", priceCop: 575000, category: "aminoacidos", source: "suplemedefit" },
    { name: "AMINO X 70 SERVINGS", priceCop: 0, category: "aminoacidos", source: "suplemedefit" },
    { name: "PSYCHOTIC TRADICIONAL", priceCop: 150000, category: "creatinas", source: "suplemedefit" },
    { name: "NITRIC OXIDE", priceCop: 195000, category: "pre entrenos", source: "suplemedefit" },
    { name: "LIPODRENE", priceCop: 556000, category: "wellness", source: "suplemedefit" },
    { name: "LIV 52", priceCop: 165000, category: "proteinas", source: "suplemedefit" },
    { name: "APOYO METABOLISMO", priceCop: 556000, category: "wellness", source: "suplemedefit" },
    { name: "SHILAJIT", priceCop: 0, category: "wellness", source: "suplemedefit" },
    { name: "POTENCIADOR ES SEXUALES K.L.G 180", priceCop: 560000, category: "vitaminas", source: "suplemedefit" },
    { name: "TESTO ULTRA", priceCop: 54500, category: "salud hormonal", source: "suplemedefit" },
    { name: "ASHWAGHANDA", priceCop: 580000, category: "vitaminas", source: "suplemedefit" },
    { name: "MAGNESIO COMPLEX", priceCop: 555000, category: "vitaminas", source: "suplemedefit" },
    { name: "CITRATO DE MAGNESIO", priceCop: 585000, category: "pre entrenos", source: "suplemedefit" },
    { name: "COLAGENO & BIOTINA EN GOMITAS", priceCop: 564000, category: "vitaminas", source: "suplemedefit" },
    { name: "OMEGA 3 FISH OIL", priceCop: 570000, category: "wellness", source: "suplemedefit" },
    { name: "YOHIMBINE", priceCop: 95000, category: "creatinas", source: "suplemedefit" },
    { name: "ASHWAGANDHA", priceCop: 95000, category: "vitaminas", source: "suplemedefit" },
    { name: "THERMOGEN", priceCop: 0, category: "wellness", source: "suplemedefit" },
    { name: "MULTI CORE", priceCop: 0, category: "aminoacidos", source: "suplemedefit" },
    { name: "TESTO RAGE", priceCop: 0, category: "pre entrenos", source: "suplemedefit" },
    { name: "LEAN XT", priceCop: 200000, category: "wellness", source: "suplemedefit" },
    { name: "RADICALE XT", priceCop: 200000, category: "salud hormonal", source: "suplemedefit" },
    { name: "OXA", priceCop: 165000, category: "salud hormonal", source: "suplemedefit" },
    { name: "YOHIMBINE HCL", priceCop: 0, category: "creatinas", source: "suplemedefit" },
    { name: "LGD XT", priceCop: 200000, category: "wellness", source: "suplemedefit" },
    { name: "OXAVAR", priceCop: 39000, category: "salud hormonal", source: "suplemedefit" },
    { name: "OXA CUT", priceCop: 139000, category: "salud hormonal", source: "suplemedefit" },
    { name: "WIANABOL", priceCop: 39000, category: "wellness", source: "suplemedefit" },
    { name: "CLEMBUNAL", priceCop: 540000, category: "salud hormonal", source: "suplemedefit" },
    { name: "GROWTH HORMONE ENHACED ATHLETE", priceCop: 215000, category: "salud hormonal", source: "suplemedefit" },
    { name: "CARDERINE", priceCop: 39000, category: "wellness", source: "suplemedefit" },
    { name: "OSTARINA", priceCop: 39000, category: "wellness", source: "suplemedefit" },
    { name: "LIGANDROL", priceCop: 39000, category: "salud hormonal", source: "suplemedefit" },
    { name: "DIANABOL", priceCop: 100000, category: "wellness", source: "suplemedefit" },
    { name: "IBUTAMOREN ADN PHARMA", priceCop: 140000, category: "salud hormonal", source: "suplemedefit" },
    { name: "TESTOLONE", priceCop: 140000, category: "salud hormonal", source: "suplemedefit" },
    { name: "PROVIRON", priceCop: 55000, category: "salud hormonal", source: "suplemedefit" },
    { name: "TAMOXIFENO", priceCop: 30000, category: "wellness", source: "suplemedefit" }
  ];

  const AYAKA_MS_MANUAL = [
    { name: "MELENA DE LEON", priceCop: 99900, category: "enfoque mental", source: "ayaka-ms" },
    { name: "ROSYL", priceCop: 26800, category: "enfoque mental", source: "ayaka-ms" },
    { name: "OMEGA FISH OIL OMEGA 3", priceCop: 49900, category: "vitaminas", source: "ayaka-ms" },
    { name: "LOFI", priceCop: 27000, category: "sueno", source: "ayaka-ms" },
    { name: "DETOX ARANFLOX", priceCop: 59900, category: "detox", source: "ayaka-ms" },
    { name: "ARANFLOX ALOE VERA", priceCop: 32200, category: "detox", source: "ayaka-ms" },
    { name: "AMAZON FRUITS", priceCop: 32800, category: "detox", source: "ayaka-ms" },
    { name: "TRIFAR", priceCop: 26800, category: "detox", source: "ayaka-ms" },
    { name: "ARANFLOX FIBRA LIQUIDA", priceCop: 65000, category: "detox", source: "ayaka-ms" },
    { name: "HEPYCOL", priceCop: 31900, category: "detox", source: "ayaka-ms" },
    { name: "ARTR COLAGENO", priceCop: 59900, category: "recuperacion", source: "ayaka-ms" },
    { name: "VEOVIT", priceCop: 49900, category: "recuperacion", source: "ayaka-ms" },
    { name: "ARTR COLAGENO SACHETS X30", priceCop: 72000, category: "recuperacion", source: "ayaka-ms" },
    { name: "V-SHON", priceCop: 30000, category: "recuperacion", source: "ayaka-ms" },
    { name: "CANNABIS ARTR GEL", priceCop: 45000, category: "recuperacion", source: "ayaka-ms" },
    { name: "MALU", priceCop: 84900, category: "salud femenina", source: "ayaka-ms" },
    { name: "FSX MALTEADA", priceCop: 40000, category: "energia", source: "ayaka-ms" },
    { name: "FSX LIQUIDO", priceCop: 49900, category: "energia", source: "ayaka-ms" },
    { name: "EXL 25", priceCop: 39900, category: "salud masculina", source: "ayaka-ms" },
    { name: "UNICELL MORINGA", priceCop: 26400, category: "inmunidad", source: "ayaka-ms" },
    { name: "UNICELL VAINILLA", priceCop: 73900, category: "wellness", source: "ayaka-ms" },
    { name: "TUSILIX", priceCop: 25900, category: "inmunidad", source: "ayaka-ms" },
    { name: "YINFER", priceCop: 26800, category: "enfoque mental", source: "ayaka-ms" },
    { name: "RITEM LINIMENTO DEPORTIVO", priceCop: 33000, category: "recuperacion", source: "ayaka-ms" },
    { name: "PROTECTOR SOLAR FPS 50 CON COLOR AYAKA", priceCop: 109900, category: "skincare", source: "ayaka-ms" },
    { name: "PROTECTOR SOLAR FPS 50 AYAKA", priceCop: 115800, category: "skincare", source: "ayaka-ms" },
    { name: "LIMPIADOR FACIAL PEPINO", priceCop: 29900, category: "skincare", source: "ayaka-ms" },
    { name: "LIMPIADOR FACIAL ROSAS", priceCop: 29900, category: "skincare", source: "ayaka-ms" },
    { name: "SERUM FACIAL TALENTOSA", priceCop: 35000, category: "skincare", source: "ayaka-ms" },
    { name: "SERUM FACIAL EMPODERADA", priceCop: 35000, category: "skincare", source: "ayaka-ms" },
    { name: "SERUM FACIAL SILICIO ORGANICO", priceCop: 54000, category: "skincare", source: "ayaka-ms" },
    { name: "TONICO FACIAL AGUA DE ROSAS", priceCop: 29900, category: "skincare", source: "ayaka-ms" },
    { name: "AYAKA BODY", priceCop: 40700, category: "skincare", source: "ayaka-ms" },
    { name: "ACEITE BRONCEADOR", priceCop: 33000, category: "skincare", source: "ayaka-ms" },
    { name: "AYAKA COLAGENO SIN MALTODEXTRINA", priceCop: 84755, category: "wellness", source: "ayaka-ms" },
    { name: "SHAMPOO ACLARADOR", priceCop: 29900, category: "capilar", source: "ayaka-ms" },
    { name: "TRATAMIENTO TERMOPROTECTOR", priceCop: 40900, category: "capilar", source: "ayaka-ms" },
    { name: "TRATAMIENTO RENOVACION EXTREMA", priceCop: 42900, category: "capilar", source: "ayaka-ms" },
    { name: "COSMETIQUERA AYAKA", priceCop: 30000, category: "accesorios", source: "ayaka-ms" },
    { name: "BOLSO AYAKA", priceCop: 18000, category: "accesorios", source: "ayaka-ms" }
  ];

  const FALLBACK_FAQS = [
    { q: "¿Cómo sé cuál proteína elegir?", a: "Depende de tu objetivo: aisladas para definición y digestión ligera, blends para uso diario y gainers para subir masa/calorías." },
    { q: "¿Cuándo tomar creatina?", a: "La constancia es más importante que la hora. Puedes tomarla a diario antes o después de entrenar junto con buena hidratación." },
    { q: "¿Los productos son originales?", a: "Sí. El catálogo se construyó con referencias reales de marcas presentes en los documentos oficiales compartidos." },
    { q: "¿Hacen envíos nacionales?", a: "Sí, realizamos envíos a todo Colombia con guía y seguimiento." },
    { q: "¿Qué método de pago manejan?", a: "Wompi, Nequi y Bancolombia, con flujo de checkout premium y confirmación de pedido." },
    { q: "¿Puedo pagar contra entrega?", a: "Se puede habilitar para zonas específicas, sujeto a validación logística." },
    { q: "¿Cómo uso pre entrenos de forma segura?", a: "Empieza con media dosis para evaluar tolerancia y evita combinarlos con exceso de cafeína adicional." },
    { q: "¿Qué suplemento recomiendan para subir masa?", a: "Combinación típica: proteína + creatina + superávit calórico + entrenamiento progresivo." },
    { q: "¿Qué suplemento recomiendan para definir?", a: "Proteína alta pureza, control calórico, buen descanso y estrategia individual de cardio/fuerza." },
    { q: "¿Las vitaminas se pueden combinar?", a: "Sí, pero conviene revisar dosis para no duplicar micronutrientes y ajustar según historial clínico." },
    { q: "¿Tienen línea para salud femenina?", a: "Sí, incluyendo opciones de bienestar hormonal, colágeno, energía y cuidado integral." },
    { q: "¿Tienen línea para salud masculina?", a: "Sí, con categorías enfocadas en rendimiento, energía y soporte hormonal." },
    { q: "¿Cómo sé si un producto me cayó bien?", a: "Evalúa digestión, energía, descanso y desempeño 2-4 semanas. Si hay molestias, suspende y consulta." },
    { q: "¿Puedo mezclar suplementos en el mismo batido?", a: "En la mayoría de casos sí, siempre respetando dosis y compatibilidades básicas de etiqueta." },
    { q: "¿Qué pasa si no entreno todos los días?", a: "Igual puedes sostener suplementos base, ajustando expectativas y enfoque nutricional." },
    { q: "¿Manejan asesoría personalizada?", a: "Sí, el asesor virtual y el equipo humano pueden orientar según objetivo y presupuesto." },
    { q: "¿Puedo ver recomendaciones por objetivo?", a: "Sí, usa el chatbot para pedir planes por recomposición, fuerza, resistencia o recuperación." },
    { q: "¿Tienen productos naturales y skincare?", a: "Sí, el catálogo integra wellness natural, cuidado facial y línea capilar." },
    { q: "¿Qué hago si tomo medicación?", a: "Consulta con tu médico antes de combinar suplementos, especialmente si hay diagnóstico previo." },
    { q: "¿Cómo garantizan stock actualizado?", a: "El panel admin permite editar inventario y sincronizar cambios para mantener disponibilidad real." }
  ];

  const FALLBACK_REVIEWS = [
    { name: "Camila R.", city: "Bogotá", result: "Perdí 4% grasa", rating: 5, text: "La asesoría fue brutal. Elegí stack para definición y me cambió el rendimiento.", photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=200&q=80" },
    { name: "Jhon F.", city: "Medellín", result: "Subí 3 kg limpios", rating: 5, text: "Proteína + creatina + plan preciso. Excelente atención.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" },
    { name: "Andrea V.", city: "Cali", result: "Más energía diaria", rating: 5, text: "La línea wellness me ayudó con enfoque y sueño.", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80" },
    { name: "Sebastián L.", city: "Barranquilla", result: "Mejor recuperación", rating: 4.9, text: "Antes terminaba destruido. Ahora recupero más rápido.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" },
    { name: "Laura M.", city: "Bucaramanga", result: "Rutina sostenible", rating: 5, text: "No es solo vender: realmente te orientan por objetivo.", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" },
    { name: "David A.", city: "Pereira", result: "Mejor fuerza", rating: 4.8, text: "Pre entreno y creatina top. Muy buena relación calidad-precio.", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80" }
  ];

  const I18N = {
    es: {
      "common.skip": "Saltar al catálogo",
      "brand.slogan": "Fuerza de élite. Bienestar de lujo.",
      "nav.catalogo": "Catálogo",
      "nav.categorias": "Categorías",
      "nav.resenas": "Reseñas",
      "nav.faqs": "FAQs",
      "hero.eyebrow": "PLATAFORMA PREMIUM FITNESS & WELLNESS",
      "hero.title": "Diseñada para rendir al nivel de una marca multimillonaria.",
      "hero.description": "Suplementos de alto impacto, wellness avanzado y asesoría inteligente para transformar resultados con una experiencia cinematográfica.",
      "hero.ctaShop": "Comprar ahora",
      "hero.ctaAdvisor": "Hablar con asesor",
      "hero.statClients": "Clientes satisfechos",
      "hero.statProducts": "Productos premium",
      "hero.statLanguages": "Idiomas en vivo",
      "hero.badgeTitle": "Slogan Oficial",
      "categories.eyebrow": "CATEGORÍAS AVANZADAS",
      "categories.title": "Colecciones diseñadas para objetivos reales",
      "catalog.eyebrow": "CATÁLOGO 2026",
      "catalog.title": "Suplementos, wellness y naturales en un solo ecosistema",
      "catalog.searchPlaceholder": "Buscar producto, ingrediente o objetivo...",
      "catalog.all": "Todas las categorías",
      "catalog.featured": "Destacados",
      "catalog.priceAsc": "Precio: menor a mayor",
      "catalog.priceDesc": "Precio: mayor a menor",
      "catalog.ratingDesc": "Mejor rating",
      "catalog.loadMore": "Cargar más productos",
      "reviews.eyebrow": "PRUEBA SOCIAL EN MOVIMIENTO",
      "reviews.title": "Reseñas reales de transformación y rendimiento",
      "gallery.eyebrow": "RESULTADOS",
      "gallery.title": "Energía, enfoque y composición corporal en evolución",
      "gallery.card1Title": "Cambio de composición",
      "gallery.card1Desc": "8 semanas de protocolo inteligente.",
      "gallery.card2Title": "Recuperación premium",
      "gallery.card2Desc": "Más rendimiento con menos fatiga.",
      "gallery.card3Title": "Enfoque total",
      "gallery.card3Desc": "Nutrición + disciplina + estrategia.",
      "calc.eyebrow": "HERRAMIENTAS IA FITNESS",
      "calc.title": "Calculadoras de apoyo para decisiones rápidas",
      "calc.bmiTitle": "Calculadora IMC",
      "calc.caloriesTitle": "Calculadora Calorías",
      "calc.weight": "Peso (kg)",
      "calc.height": "Altura (m)",
      "calc.heightCm": "Altura (cm)",
      "calc.age": "Edad",
      "calc.calculate": "Calcular",
      "calc.male": "Hombre",
      "calc.female": "Mujer",
      "faq.eyebrow": "CENTRO DE CONFIANZA",
      "faq.title": "Preguntas frecuentes completas",
      "cart.title": "Tu carrito",
      "cart.subtotal": "Subtotal",
      "cart.checkout": "Ir a checkout",
      "checkout.title": "Checkout premium",
      "checkout.couponLabel": "Cupón",
      "checkout.applyCoupon": "Aplicar",
      "checkout.payMethods": "Métodos de pago",
      "checkout.summary": "Resumen",
      "checkout.subtotal": "Subtotal",
      "checkout.discount": "Descuento",
      "checkout.total": "Total",
      "admin.title": "Sección de comandos (Privada)",
      "admin.subtitle": "Atajo secreto: Ctrl + Shift + 3 o escribe RICHARD345",
      "admin.storeConfig": "Configuración de tienda",
      "admin.heroText": "Texto hero",
      "admin.saveContent": "Guardar contenido",
      "admin.integrations": "Integraciones",
      "admin.saveIntegrations": "Guardar integraciones",
      "admin.products": "Gestión de productos",
      "admin.saveProduct": "Guardar producto",
      "admin.newProduct": "Nuevo",
      "admin.contentBlocks": "FAQs, reseñas y banners",
      "admin.saveFaqReviews": "Guardar FAQs y reseñas",
      "chat.header": "Hola, soy el asesor virtual de JOEX",
      "music.title": "Modo entrenamiento"
    },
    en: {
      "common.skip": "Skip to catalog",
      "brand.slogan": "Elite strength. Luxury wellness.",
      "nav.catalogo": "Catalog",
      "nav.categorias": "Categories",
      "nav.resenas": "Reviews",
      "nav.faqs": "FAQs",
      "hero.eyebrow": "PREMIUM FITNESS & WELLNESS PLATFORM",
      "hero.title": "Built to perform like a multimillion-dollar brand.",
      "hero.description": "High-impact supplements, advanced wellness, and smart guidance in a cinematic shopping experience.",
      "hero.ctaShop": "Shop now",
      "hero.ctaAdvisor": "Talk to advisor",
      "hero.statClients": "Satisfied clients",
      "hero.statProducts": "Premium products",
      "hero.statLanguages": "Live languages",
      "hero.badgeTitle": "Official Slogan",
      "categories.eyebrow": "ADVANCED CATEGORIES",
      "categories.title": "Collections designed for real goals",
      "catalog.eyebrow": "CATALOG 2026",
      "catalog.title": "Supplements, wellness, and natural products in one ecosystem",
      "catalog.searchPlaceholder": "Search product, ingredient or goal...",
      "catalog.all": "All categories",
      "catalog.featured": "Featured",
      "catalog.priceAsc": "Price: low to high",
      "catalog.priceDesc": "Price: high to low",
      "catalog.ratingDesc": "Top rated",
      "catalog.loadMore": "Load more products",
      "reviews.eyebrow": "SOCIAL PROOF IN MOTION",
      "reviews.title": "Real transformation and performance reviews",
      "gallery.eyebrow": "RESULTS",
      "gallery.title": "Energy, focus, and body composition in progress",
      "gallery.card1Title": "Body recomposition",
      "gallery.card1Desc": "8-week smart protocol.",
      "gallery.card2Title": "Premium recovery",
      "gallery.card2Desc": "More performance with less fatigue.",
      "gallery.card3Title": "Total focus",
      "gallery.card3Desc": "Nutrition + discipline + strategy.",
      "calc.eyebrow": "FITNESS AI TOOLS",
      "calc.title": "Quick decision support calculators",
      "calc.bmiTitle": "BMI Calculator",
      "calc.caloriesTitle": "Calories Calculator",
      "calc.weight": "Weight (kg)",
      "calc.height": "Height (m)",
      "calc.heightCm": "Height (cm)",
      "calc.age": "Age",
      "calc.calculate": "Calculate",
      "calc.male": "Male",
      "calc.female": "Female",
      "faq.eyebrow": "TRUST CENTER",
      "faq.title": "Complete frequently asked questions",
      "cart.title": "Your cart",
      "cart.subtotal": "Subtotal",
      "cart.checkout": "Checkout",
      "checkout.title": "Premium checkout",
      "checkout.couponLabel": "Coupon",
      "checkout.applyCoupon": "Apply",
      "checkout.payMethods": "Payment methods",
      "checkout.summary": "Summary",
      "checkout.subtotal": "Subtotal",
      "checkout.discount": "Discount",
      "checkout.total": "Total",
      "admin.title": "Command section (Private)",
      "admin.subtitle": "Secret shortcut: Ctrl + Shift + 3 or type RICHARD345",
      "admin.storeConfig": "Store settings",
      "admin.heroText": "Hero text",
      "admin.saveContent": "Save content",
      "admin.integrations": "Integrations",
      "admin.saveIntegrations": "Save integrations",
      "admin.products": "Products management",
      "admin.saveProduct": "Save product",
      "admin.newProduct": "New",
      "admin.contentBlocks": "FAQs, reviews and banners",
      "admin.saveFaqReviews": "Save FAQs and reviews",
      "chat.header": "Hi, I'm JOEX virtual advisor",
      "music.title": "Training mode"
    },
    pt: {},
    fr: {},
    it: {}
  };

  const FALLBACK_LANG_CHAIN = {
    pt: "en",
    fr: "en",
    it: "en"
  };

  const state = {
    lang: DEFAULT_LANG,
    products: [],
    filteredProducts: [],
    visibleCount: DEFAULT_VISIBLE,
    activeCategory: "all",
    cart: [],
    wishlist: [],
    coupon: null,
    faqs: [],
    reviews: [],
    content: {
      slogan: "Tu siguiente nivel empieza hoy.",
      heroText: ""
    },
    settings: {
      supabaseUrl: "",
      supabaseKey: "",
      openAiKey: "",
      geminiKey: "",
      wompiLink: ""
    },
    chatMemory: [],
    musicPlaying: false,
    typedSecret: "",
    activeProvider: "auto"
  };

  const refs = {};

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    cacheRefs();
    hydrateState();
    applyTranslations();
    renderCategories();
    populateCategoryFilter();
    applyFilters();
    renderReviews();
    renderFaqs();
    renderCart();
    updateCheckoutSummary();
    refreshAdminForms();
    bindEvents();
    setupRevealObserver();
    setupTiltCards();
    setupMagneticButtons();
    setupParallax();
    animateCounters();
    maybeSyncFromSupabase();
    refs.year.textContent = new Date().getFullYear();
    refs.dynamicSlogan.textContent = state.content.slogan;
    if (state.content.heroText) {
      const heroDesc = document.querySelector(".hero-description");
      heroDesc.textContent = state.content.heroText;
    }
  }

  function cacheRefs() {
    refs.languageSwitcher = document.getElementById("languageSwitcher");
    refs.searchInput = document.getElementById("searchInput");
    refs.categoryFilter = document.getElementById("categoryFilter");
    refs.sortFilter = document.getElementById("sortFilter");
    refs.productGrid = document.getElementById("productGrid");
    refs.loadMoreBtn = document.getElementById("loadMoreBtn");
    refs.categoryChips = document.getElementById("categoryChips");
    refs.cartToggle = document.getElementById("cartToggle");
    refs.wishlistToggle = document.getElementById("wishlistToggle");
    refs.cartCount = document.getElementById("cartCount");
    refs.wishlistCount = document.getElementById("wishlistCount");
    refs.miniCart = document.getElementById("miniCart");
    refs.closeCart = document.getElementById("closeCart");
    refs.cartItems = document.getElementById("cartItems");
    refs.cartSubtotal = document.getElementById("cartSubtotal");
    refs.goCheckout = document.getElementById("goCheckout");
    refs.checkoutModal = document.getElementById("checkoutModal");
    refs.quickViewModal = document.getElementById("quickViewModal");
    refs.quickViewContent = document.getElementById("quickViewContent");
    refs.couponInput = document.getElementById("couponInput");
    refs.applyCouponBtn = document.getElementById("applyCouponBtn");
    refs.checkoutSubtotal = document.getElementById("checkoutSubtotal");
    refs.checkoutDiscount = document.getElementById("checkoutDiscount");
    refs.checkoutTotal = document.getElementById("checkoutTotal");
    refs.payWompiBtn = document.getElementById("payWompiBtn");
    refs.payNequiBtn = document.getElementById("payNequiBtn");
    refs.payBancolombiaBtn = document.getElementById("payBancolombiaBtn");
    refs.paymentMessage = document.getElementById("paymentMessage");
    refs.chatToggle = document.getElementById("chatToggle");
    refs.chatPanel = document.getElementById("chatPanel");
    refs.chatClose = document.getElementById("chatClose");
    refs.chatMessages = document.getElementById("chatMessages");
    refs.chatForm = document.getElementById("chatForm");
    refs.chatInput = document.getElementById("chatInput");
    refs.chatProvider = document.getElementById("chatProvider");
    refs.musicPlayBtn = document.getElementById("musicPlayBtn");
    refs.musicVolume = document.getElementById("musicVolume");
    refs.youtubePlayer = document.getElementById("youtubePlayer");
    refs.bmiForm = document.getElementById("bmiForm");
    refs.bmiResult = document.getElementById("bmiResult");
    refs.calorieForm = document.getElementById("calorieForm");
    refs.calorieResult = document.getElementById("calorieResult");
    refs.faqList = document.getElementById("faqList");
    refs.reviewsTrackA = document.getElementById("reviewsTrackA");
    refs.reviewsTrackB = document.getElementById("reviewsTrackB");
    refs.adminModal = document.getElementById("adminModal");
    refs.sloganInput = document.getElementById("sloganInput");
    refs.heroTextInput = document.getElementById("heroTextInput");
    refs.saveContentBtn = document.getElementById("saveContentBtn");
    refs.supabaseUrlInput = document.getElementById("supabaseUrlInput");
    refs.supabaseKeyInput = document.getElementById("supabaseKeyInput");
    refs.openAiKeyInput = document.getElementById("openAiKeyInput");
    refs.geminiKeyInput = document.getElementById("geminiKeyInput");
    refs.wompiLinkInput = document.getElementById("wompiLinkInput");
    refs.saveIntegrationsBtn = document.getElementById("saveIntegrationsBtn");
    refs.adminProductForm = document.getElementById("adminProductForm");
    refs.adminProductList = document.getElementById("adminProductList");
    refs.adminProductId = document.getElementById("adminProductId");
    refs.adminProductName = document.getElementById("adminProductName");
    refs.adminProductPrice = document.getElementById("adminProductPrice");
    refs.adminProductCategory = document.getElementById("adminProductCategory");
    refs.adminProductStock = document.getElementById("adminProductStock");
    refs.adminProductImage = document.getElementById("adminProductImage");
    refs.adminProductVideo = document.getElementById("adminProductVideo");
    refs.adminProductDescription = document.getElementById("adminProductDescription");
    refs.adminResetFormBtn = document.getElementById("adminResetFormBtn");
    refs.dynamicSlogan = document.getElementById("dynamicSlogan");
    refs.year = document.getElementById("year");
    refs.faqJsonInput = document.getElementById("faqJsonInput");
    refs.reviewJsonInput = document.getElementById("reviewJsonInput");
    refs.saveKnowledgeBtn = document.getElementById("saveKnowledgeBtn");
  }

  function hydrateState() {
    const saved = safeParse(localStorage.getItem(STORAGE_KEY)) || {};
    state.lang = saved.lang || localStorage.getItem("rc345_lang") || DEFAULT_LANG;
    state.settings = { ...state.settings, ...(saved.settings || {}) };
    state.content = { ...state.content, ...(saved.content || {}) };
    state.faqs = Array.isArray(saved.faqs) && saved.faqs.length ? saved.faqs : [...FALLBACK_FAQS];
    state.reviews = Array.isArray(saved.reviews) && saved.reviews.length ? saved.reviews : [...FALLBACK_REVIEWS];
    state.cart = Array.isArray(saved.cart) ? saved.cart : [];
    state.wishlist = Array.isArray(saved.wishlist) ? saved.wishlist : [];
    state.activeProvider = saved.activeProvider || "auto";
    const baseProducts = [...SUPLEMEDEFIT_SEED, ...AYAKA_MS_MANUAL].map(normalizeProduct);
    state.products = Array.isArray(saved.products) && saved.products.length ? saved.products : baseProducts;
    refs.languageSwitcher.value = state.lang;
    refs.chatProvider.value = state.activeProvider;
    persistState();
  }

  function normalizeProduct(seed, index) {
    const id = `${slugify(seed.source)}-${slugify(seed.name)}-${index + 1}`;
    const normalizedCategory = ensureCategory(seed.category);
    const autoPrice = seed.priceCop > 0 ? seed.priceCop : 79000 + (index % 7) * 12000;
    const stock = 8 + (index % 37);
    const rating = Number((4.4 + (index % 6) * 0.1).toFixed(1));
    const reviews = 14 + index * 3;
    const upper = seed.name.toUpperCase();
    const ingredientHint = guessIngredientHint(upper, normalizedCategory);
    return {
      id,
      source: seed.source,
      name: seed.name,
      description: `Producto real del catálogo ${seed.source.toUpperCase()}. Fórmula enfocada en ${normalizedCategory}, calidad premium y enfoque de rendimiento.`,
      benefits: [
        "Soporte de rendimiento y adherencia",
        "Calidad de catálogo oficial 2026",
        "Acompañamiento estratégico para resultados"
      ],
      priceCop: autoPrice,
      category: normalizedCategory,
      stock,
      tags: [normalizedCategory, "premium", seed.source],
      rating,
      reviews,
      howToUse: "Usar según etiqueta y objetivo, respetando dosis recomendada por fabricante.",
      purpose: "Apoyar metas de fuerza, recomposición corporal o bienestar funcional.",
      whenToTake: upper.includes("PRE") ? "30 minutos antes de entrenar." : "Según etiqueta, preferiblemente en horario constante.",
      recommendations: "Combinar con alimentación estructurada, hidratación y descanso.",
      warnings: "No exceder dosis. Consultar profesional de salud en embarazo, lactancia o patologías.",
      featuredIngredients: [ingredientHint],
      image: buildProductImage(seed.name, normalizedCategory),
      video: ""
    };
  }

  function buildProductImage(name, category) {
    const keyword = encodeURIComponent(`${category} ${name}`.replace(/\s+/g, ","));
    return `https://source.unsplash.com/900x700/?fitness,${keyword}`;
  }

  function guessIngredientHint(upperName, category) {
    if (upperName.includes("CREAT")) return "Creatina de soporte ergogénico";
    if (upperName.includes("WHEY") || upperName.includes("PROTE")) return "Proteína de alto valor biológico";
    if (upperName.includes("OMEGA")) return "Ácidos grasos esenciales";
    if (upperName.includes("COLAG")) return "Colágeno hidrolizado";
    if (upperName.includes("MAGNES")) return "Complejos minerales";
    if (category === "skincare") return "Extractos naturales para cuidado dérmico";
    return "Ingredientes destacados según ficha de catálogo";
  }

  function bindEvents() {
    refs.languageSwitcher.addEventListener("change", () => {
      state.lang = refs.languageSwitcher.value;
      localStorage.setItem("rc345_lang", state.lang);
      applyTranslations();
      applyFilters();
      renderFaqs();
      renderReviews();
    });

    refs.searchInput.addEventListener("input", () => {
      state.visibleCount = DEFAULT_VISIBLE;
      applyFilters();
    });

    refs.categoryFilter.addEventListener("change", () => {
      state.activeCategory = refs.categoryFilter.value;
      state.visibleCount = DEFAULT_VISIBLE;
      updateActiveChip();
      applyFilters();
    });

    refs.sortFilter.addEventListener("change", () => {
      state.visibleCount = DEFAULT_VISIBLE;
      applyFilters();
    });

    refs.loadMoreBtn.addEventListener("click", () => {
      state.visibleCount += 12;
      renderProducts();
    });

    refs.cartToggle.addEventListener("click", () => toggleCart(true));
    refs.wishlistToggle.addEventListener("click", openWishlistQuickView);
    refs.closeCart.addEventListener("click", () => toggleCart(false));
    refs.goCheckout.addEventListener("click", () => openModal("checkoutModal"));
    refs.applyCouponBtn.addEventListener("click", applyCoupon);
    refs.payWompiBtn.addEventListener("click", handleWompiPayment);
    refs.payNequiBtn.addEventListener("click", () => setPaymentMessage("Nequi: realiza transferencia al número de la tienda y envía comprobante."));
    refs.payBancolombiaBtn.addEventListener("click", () => setPaymentMessage("Bancolombia: usa transferencia a cuenta y comparte soporte para confirmar pedido."));

    refs.productGrid.addEventListener("click", handleProductGridActions);
    refs.cartItems.addEventListener("click", handleCartActions);
    refs.quickViewContent.addEventListener("click", handleQuickViewActions);
    document.querySelectorAll("[data-close-modal]").forEach((btn) => {
      btn.addEventListener("click", (event) => closeModal(event.currentTarget.getAttribute("data-close-modal")));
    });
    document.querySelectorAll("[data-scroll-target]").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const target = document.querySelector(event.currentTarget.getAttribute("data-scroll-target"));
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    refs.chatToggle.addEventListener("click", () => toggleChat(true));
    refs.chatClose.addEventListener("click", () => toggleChat(false));
    refs.chatForm.addEventListener("submit", handleChatSubmit);
    refs.chatProvider.addEventListener("change", () => {
      state.activeProvider = refs.chatProvider.value;
    });

    refs.musicPlayBtn.addEventListener("click", toggleMusicPlayback);
    refs.musicVolume.addEventListener("input", onMusicVolumeChange);
    document.addEventListener("click", warmupAutoplay, { once: true });

    refs.bmiForm.addEventListener("submit", handleBmiCalc);
    refs.calorieForm.addEventListener("submit", handleCaloriesCalc);
    refs.faqList.addEventListener("click", handleFaqToggle);

    refs.saveContentBtn.addEventListener("click", saveAdminContent);
    refs.saveIntegrationsBtn.addEventListener("click", saveAdminIntegrations);
    refs.adminProductForm.addEventListener("submit", saveAdminProduct);
    refs.adminResetFormBtn.addEventListener("click", resetAdminProductForm);
    refs.adminProductList.addEventListener("click", handleAdminProductActions);
    refs.saveKnowledgeBtn.addEventListener("click", saveKnowledgeBlocks);

    window.addEventListener("keydown", handleSecretAccess);
    window.addEventListener("mousemove", trackCursorGlow);
  }

  function applyFilters() {
    const query = refs.searchInput.value.trim().toLowerCase();
    const category = state.activeCategory || "all";
    const sort = refs.sortFilter.value;
    const filtered = state.products.filter((item) => {
      const text = `${item.name} ${item.description} ${item.tags.join(" ")} ${item.category}`.toLowerCase();
      const matchQuery = !query || text.includes(query);
      const matchCategory = category === "all" || item.category === category;
      return matchQuery && matchCategory;
    });
    state.filteredProducts = sortProducts(filtered, sort);
    renderProducts();
  }

  function sortProducts(list, sort) {
    const clone = [...list];
    if (sort === "priceAsc") return clone.sort((a, b) => a.priceCop - b.priceCop);
    if (sort === "priceDesc") return clone.sort((a, b) => b.priceCop - a.priceCop);
    if (sort === "ratingDesc") return clone.sort((a, b) => b.rating - a.rating);
    return clone.sort((a, b) => b.reviews - a.reviews);
  }

  function renderProducts() {
    const visibleItems = state.filteredProducts.slice(0, state.visibleCount);
    refs.productGrid.innerHTML = visibleItems.map((item) => renderProductCard(item)).join("");
    refs.loadMoreBtn.style.display = state.filteredProducts.length > state.visibleCount ? "inline-flex" : "none";
    setupTiltCards();
  }

  function renderProductCard(product) {
    const inWishlist = state.wishlist.includes(product.id);
    const shortDesc = truncateText(product.description, 115);
    return `
      <article class="product-card reveal visible tilt-card" data-id="${product.id}">
        <div class="product-image">
          <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" decoding="async">
          <span class="product-badge">${escapeHtml(categoryLabel(product.category))}</span>
        </div>
        <div class="product-content">
          <h3>${escapeHtml(product.name)}</h3>
          <p class="muted">${escapeHtml(shortDesc)}</p>
          <div class="product-meta">
            <span>⭐ ${product.rating} (${product.reviews})</span>
            <span>${product.stock} stock</span>
          </div>
          <strong class="price">${formatCop(product.priceCop)}</strong>
          <div class="product-actions">
            <button class="btn btn-primary magnetic" data-action="add-cart" data-id="${product.id}" type="button">Agregar</button>
            <button class="btn btn-glass magnetic" data-action="quick-view" data-id="${product.id}" type="button">Vista</button>
            <button class="icon-btn" data-action="toggle-wishlist" data-id="${product.id}" type="button">${inWishlist ? "♥" : "♡"}</button>
          </div>
        </div>
      </article>
    `;
  }

  function handleProductGridActions(event) {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const action = button.dataset.action;
    const productId = button.dataset.id;
    if (!productId) return;
    if (action === "add-cart") addToCart(productId);
    if (action === "quick-view") openQuickView(productId);
    if (action === "toggle-wishlist") toggleWishlist(productId);
  }

  function openQuickView(productId) {
    const item = state.products.find((p) => p.id === productId);
    if (!item) return;
    refs.quickViewContent.innerHTML = `
      <div class="checkout-layout">
        <section>
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy" decoding="async" style="border-radius:16px; border:1px solid var(--line); max-height:320px; width:100%; object-fit:cover;">
          ${item.video ? `<video src="${escapeHtml(item.video)}" controls style="margin-top:.7rem; width:100%; border-radius:14px; border:1px solid var(--line);"></video>` : ""}
          <p class="muted" style="margin-top:.8rem">${escapeHtml(item.description)}</p>
        </section>
        <aside>
          <h3>${escapeHtml(item.name)}</h3>
          <p><strong>${formatCop(item.priceCop)}</strong></p>
          <p><strong>Categoría:</strong> ${escapeHtml(categoryLabel(item.category))}</p>
          <p><strong>Rating:</strong> ⭐ ${item.rating} (${item.reviews})</p>
          <p><strong>Ingredientes destacados:</strong> ${escapeHtml(item.featuredIngredients.join(", "))}</p>
          <p><strong>Cómo consumir:</strong> ${escapeHtml(item.howToUse)}</p>
          <p><strong>Para qué sirve:</strong> ${escapeHtml(item.purpose)}</p>
          <p><strong>Cuándo tomarlo:</strong> ${escapeHtml(item.whenToTake)}</p>
          <p><strong>Recomendaciones:</strong> ${escapeHtml(item.recommendations)}</p>
          <p><strong>Advertencias:</strong> ${escapeHtml(item.warnings)}</p>
          <button class="btn btn-primary magnetic" data-action="quick-add" data-id="${item.id}" type="button">Agregar al carrito</button>
        </aside>
      </div>
    `;
    openModal("quickViewModal");
  }

  function handleQuickViewActions(event) {
    const button = event.target.closest("[data-action='quick-add']");
    if (!button) return;
    addToCart(button.dataset.id);
    closeModal("quickViewModal");
  }

  function addToCart(productId, qty = 1) {
    const found = state.cart.find((line) => line.id === productId);
    if (found) {
      found.qty += qty;
    } else {
      state.cart.push({ id: productId, qty });
    }
    persistState();
    renderCart();
    notify("Producto agregado al carrito");
  }

  function removeFromCart(productId) {
    state.cart = state.cart.filter((line) => line.id !== productId);
    persistState();
    renderCart();
  }

  function handleCartActions(event) {
    const button = event.target.closest("[data-remove-cart]");
    if (!button) return;
    removeFromCart(button.dataset.removeCart);
  }

  function toggleWishlist(productId) {
    if (state.wishlist.includes(productId)) {
      state.wishlist = state.wishlist.filter((id) => id !== productId);
    } else {
      state.wishlist.push(productId);
    }
    persistState();
    renderProducts();
    updateHeaderCounts();
  }

  function renderCart() {
    const lines = state.cart.map((line) => {
      const product = state.products.find((p) => p.id === line.id);
      if (!product) return null;
      return {
        id: product.id,
        name: product.name,
        image: product.image,
        qty: line.qty,
        priceCop: product.priceCop
      };
    }).filter(Boolean);

    if (!lines.length) {
      refs.cartItems.innerHTML = `<p class="muted">Tu carrito está vacío.</p>`;
    } else {
      refs.cartItems.innerHTML = lines.map((line) => `
        <article class="cart-row">
          <img src="${escapeHtml(line.image)}" alt="${escapeHtml(line.name)}" loading="lazy" decoding="async">
          <div>
            <h4>${escapeHtml(line.name)}</h4>
            <p>${line.qty} x ${formatCop(line.priceCop)}</p>
          </div>
          <button class="icon-btn" data-remove-cart="${line.id}" aria-label="Eliminar">✕</button>
        </article>
      `).join("");
    }

    updateHeaderCounts();
    updateCheckoutSummary();
  }

  function openWishlistQuickView() {
    const items = state.products.filter((item) => state.wishlist.includes(item.id));
    if (!items.length) {
      notify("Tu wishlist esta vacia", "warn");
      return;
    }
    refs.quickViewContent.innerHTML = `
      <h3>Wishlist premium</h3>
      <div class="admin-product-list">
        ${items.map((item) => `
          <article class="admin-product-item">
            <div>
              <strong>${escapeHtml(item.name)}</strong>
              <small>${formatCop(item.priceCop)} · ${escapeHtml(categoryLabel(item.category))}</small>
            </div>
            <button class="btn btn-primary magnetic" data-action="quick-add" data-id="${item.id}" type="button">Agregar</button>
          </article>
        `).join("")}
      </div>
    `;
    openModal("quickViewModal");
  }

  function calculateSubtotal() {
    return state.cart.reduce((sum, line) => {
      const product = state.products.find((p) => p.id === line.id);
      if (!product) return sum;
      return sum + product.priceCop * line.qty;
    }, 0);
  }

  function updateHeaderCounts() {
    const count = state.cart.reduce((acc, line) => acc + line.qty, 0);
    refs.cartCount.textContent = String(count);
    refs.wishlistCount.textContent = String(state.wishlist.length);
    refs.cartSubtotal.textContent = formatCop(calculateSubtotal());
  }

  function updateCheckoutSummary() {
    const subtotal = calculateSubtotal();
    const discount = state.coupon ? Math.round(subtotal * state.coupon.percent) : 0;
    const total = Math.max(0, subtotal - discount);
    refs.checkoutSubtotal.textContent = formatCop(subtotal);
    refs.checkoutDiscount.textContent = `-${formatCop(discount)}`;
    refs.checkoutTotal.textContent = formatCop(total);
  }

  function applyCoupon() {
    const code = refs.couponInput.value.trim().toUpperCase();
    const coupons = {
      JOEX10: 0.1,
      RC345: 0.15,
      PREMIUM5: 0.05
    };
    if (!code || !coupons[code]) {
      state.coupon = null;
      notify("Cupón no válido", "warn");
    } else {
      state.coupon = { code, percent: coupons[code] };
      notify(`Cupón ${code} aplicado`);
    }
    updateCheckoutSummary();
    persistState();
  }

  function handleWompiPayment() {
    if (!state.cart.length) {
      setPaymentMessage("Agrega productos al carrito antes de pagar.");
      return;
    }
    if (state.settings.wompiLink) {
      window.open(state.settings.wompiLink, "_blank", "noopener");
      setPaymentMessage("Redirigiendo a Wompi...");
    } else {
      setPaymentMessage("Configura tu link de Wompi en la Sección de comandos.");
    }
  }

  function setPaymentMessage(text) {
    refs.paymentMessage.textContent = text;
  }

  function toggleCart(forceOpen) {
    const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : !refs.miniCart.classList.contains("open");
    refs.miniCart.classList.toggle("open", shouldOpen);
    refs.miniCart.setAttribute("aria-hidden", String(!shouldOpen));
  }

  function openModal(id) {
    const modal = document.getElementById(id);
    modal?.classList.add("open");
    modal?.setAttribute("aria-hidden", "false");
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    modal?.classList.remove("open");
    modal?.setAttribute("aria-hidden", "true");
  }

  function toggleChat(forceOpen) {
    const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : !refs.chatPanel.classList.contains("open");
    refs.chatPanel.classList.toggle("open", shouldOpen);
    refs.chatPanel.setAttribute("aria-hidden", String(!shouldOpen));
    if (shouldOpen && !refs.chatMessages.children.length) {
      appendChatBubble("bot", translate("chat.header"));
    }
  }

  async function handleChatSubmit(event) {
    event.preventDefault();
    const prompt = refs.chatInput.value.trim();
    if (!prompt) return;
    refs.chatInput.value = "";
    appendChatBubble("user", prompt);
    state.chatMemory.push({ role: "user", content: prompt });
    state.chatMemory = state.chatMemory.slice(-12);
    const response = await getChatResponse(prompt);
    state.chatMemory.push({ role: "assistant", content: response });
    state.chatMemory = state.chatMemory.slice(-12);
    appendBotTyping(response);
  }

  async function getChatResponse(prompt) {
    const provider = refs.chatProvider.value;
    if ((provider === "openai" || provider === "auto") && state.settings.openAiKey) {
      try {
        return await askOpenAi(prompt);
      } catch (error) {
        console.warn("OpenAI fallback", error);
      }
    }
    if ((provider === "gemini" || provider === "auto") && state.settings.geminiKey) {
      try {
        return await askGemini(prompt);
      } catch (error) {
        console.warn("Gemini fallback", error);
      }
    }
    return localAdvisor(prompt);
  }

  async function askOpenAi(prompt) {
    const contextTurns = state.chatMemory.slice(-8).map((turn) => ({
      role: turn.role,
      content: turn.content
    }));
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.settings.openAiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: [{
          role: "system",
          content: "Eres asesor fitness premium de TIENDA RICHARD CARDONA 345. Responde claro, humano y util."
        },
        ...contextTurns,
        {
          role: "user",
          content: prompt
        }]
      })
    });
    if (!response.ok) throw new Error(`OpenAI ${response.status}`);
    const data = await response.json();
    const text = data?.output_text || data?.output?.[0]?.content?.[0]?.text || "";
    return text || localAdvisor(prompt);
  }

  async function askGemini(prompt) {
    const context = state.chatMemory
      .slice(-6)
      .map((turn) => `${turn.role === "user" ? "Cliente" : "Asesor"}: ${turn.content}`)
      .join("\n");
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(state.settings.geminiKey)}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: `Eres asesor premium de TIENDA RICHARD CARDONA 345.\n${context}\nCliente: ${prompt}` }] }]
      })
    });
    if (!response.ok) throw new Error(`Gemini ${response.status}`);
    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    return text || localAdvisor(prompt);
  }

  function localAdvisor(prompt) {
    const lower = prompt.toLowerCase();
    if (lower.includes("creatina")) {
      const picks = pickByCategory("creatinas", 3);
      return `Para creatina, te recomiendo empezar por: ${picks.join(", ")}. Tómala diariamente y prioriza hidratación constante.`;
    }
    if (lower.includes("definir") || lower.includes("grasa")) {
      const picks = findProductsByWords(["LIPODRENE", "SMART BURNER", "LEAN XT"], 3);
      return `Para definición podemos trabajar un stack con ${picks.join(", ")} + déficit calórico progresivo + fuerza.`;
    }
    if (lower.includes("masa") || lower.includes("subir")) {
      const picks = pickByCategory("proteinas", 3);
      return `Para masa muscular: ${picks.join(", ")} con entrenamiento progresivo y superávit calórico controlado.`;
    }
    if (lower.includes("sue") || lower.includes("estres")) {
      const picks = findProductsByWords(["LOFI", "MELENA DE LEON", "ASHWAGANDHA"], 3);
      return `Para descanso y enfoque puedes revisar ${picks.join(", ")} y ajustar hábitos de sueño.`;
    }
    return "Te ayudo encantado. Cuéntame tu objetivo exacto (definir, ganar masa, mejorar energía o recuperación) y te propongo un plan de suplementos.";
  }

  function appendChatBubble(role, text) {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${role}`;
    bubble.textContent = text;
    refs.chatMessages.appendChild(bubble);
    refs.chatMessages.scrollTop = refs.chatMessages.scrollHeight;
  }

  function appendBotTyping(text) {
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble bot";
    refs.chatMessages.appendChild(bubble);
    let index = 0;
    const tick = () => {
      index += 1;
      bubble.textContent = text.slice(0, index);
      refs.chatMessages.scrollTop = refs.chatMessages.scrollHeight;
      if (index < text.length) {
        requestAnimationFrame(tick);
      }
    };
    tick();
  }

  function handleBmiCalc(event) {
    event.preventDefault();
    const weight = Number(document.getElementById("bmiWeight").value);
    const height = Number(document.getElementById("bmiHeight").value);
    if (!weight || !height) return;
    const bmi = weight / (height * height);
    refs.bmiResult.textContent = `IMC: ${bmi.toFixed(1)}`;
  }

  function handleCaloriesCalc(event) {
    event.preventDefault();
    const age = Number(document.getElementById("calAge").value);
    const weight = Number(document.getElementById("calWeight").value);
    const height = Number(document.getElementById("calHeight").value);
    const sex = document.getElementById("calSex").value;
    if (!age || !weight || !height) return;
    const base = sex === "m"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;
    refs.calorieResult.textContent = `Calorías estimadas mantenimiento: ${Math.round(base * 1.55)} kcal/día`;
  }

  function renderFaqs() {
    refs.faqList.innerHTML = state.faqs.map((faq, idx) => `
      <article class="faq-item">
        <button class="faq-question" type="button" data-faq-index="${idx}">
          <span>${escapeHtml(faq.q)}</span>
          <span>+</span>
        </button>
        <div class="faq-answer">
          <p>${escapeHtml(faq.a)}</p>
        </div>
      </article>
    `).join("");
  }

  function handleFaqToggle(event) {
    const trigger = event.target.closest("[data-faq-index]");
    if (!trigger) return;
    const item = trigger.closest(".faq-item");
    item?.classList.toggle("open");
  }

  function renderReviews() {
    const doubled = [...state.reviews, ...state.reviews];
    refs.reviewsTrackA.innerHTML = doubled.map(renderReviewCard).join("");
    refs.reviewsTrackB.innerHTML = [...doubled].reverse().map(renderReviewCard).join("");
  }

  function renderReviewCard(review) {
    return `
      <article class="review-card">
        <img src="${escapeHtml(review.photo)}" alt="${escapeHtml(review.name)}" loading="lazy" decoding="async">
        <div>
          <strong>${escapeHtml(review.name)} · ${escapeHtml(review.city)}</strong>
          <small>⭐ ${review.rating} · ${escapeHtml(review.result)}</small>
          <p>${escapeHtml(review.text)}</p>
        </div>
      </article>
    `;
  }

  function renderCategories() {
    refs.categoryChips.innerHTML = CATEGORY_LIST.map((cat) => `
      <button type="button" class="chip ${state.activeCategory === cat ? "active" : ""}" data-chip-category="${cat}">
        ${escapeHtml(categoryLabel(cat))}
      </button>
    `).join("");
    refs.categoryChips.addEventListener("click", (event) => {
      const chip = event.target.closest("[data-chip-category]");
      if (!chip) return;
      state.activeCategory = chip.dataset.chipCategory;
      refs.categoryFilter.value = state.activeCategory;
      state.visibleCount = DEFAULT_VISIBLE;
      updateActiveChip();
      applyFilters();
    });
  }

  function populateCategoryFilter() {
    const selected = refs.categoryFilter.value;
    const options = [`<option value="all">${translate("catalog.all")}</option>`];
    CATEGORY_LIST.forEach((cat) => {
      options.push(`<option value="${cat}">${escapeHtml(categoryLabel(cat))}</option>`);
    });
    refs.categoryFilter.innerHTML = options.join("");
    refs.categoryFilter.value = selected || "all";
  }

  function updateActiveChip() {
    refs.categoryChips.querySelectorAll(".chip").forEach((chip) => {
      chip.classList.toggle("active", chip.dataset.chipCategory === state.activeCategory);
    });
  }

  function applyTranslations() {
    document.documentElement.lang = state.lang;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = translate(node.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.setAttribute("placeholder", translate(node.getAttribute("data-i18n-placeholder")));
    });
    refs.categoryChips.querySelectorAll("[data-chip-category]").forEach((chip) => {
      chip.textContent = categoryLabel(chip.dataset.chipCategory);
    });
    populateCategoryFilter();
  }

  function translate(key) {
    const primary = I18N[state.lang] || {};
    const fallbackLang = FALLBACK_LANG_CHAIN[state.lang];
    const fallback = fallbackLang ? I18N[fallbackLang] || {} : I18N.es;
    return primary[key] || fallback[key] || I18N.es[key] || key;
  }

  function categoryLabel(category) {
    const map = {
      es: {
        proteinas: "Proteínas",
        creatinas: "Creatinas",
        "pre entrenos": "Pre entrenos",
        aminoacidos: "Aminoácidos",
        vitaminas: "Vitaminas",
        wellness: "Wellness",
        detox: "Detox",
        skincare: "Skincare",
        capilar: "Capilar",
        rendimiento: "Rendimiento",
        recuperacion: "Recuperación",
        "salud hormonal": "Salud hormonal",
        "enfoque mental": "Enfoque mental",
        energia: "Energía",
        inmunidad: "Inmunidad",
        relajacion: "Relajación",
        sueno: "Sueño",
        accesorios: "Accesorios",
        premium: "Premium",
        "nuevos productos": "Nuevos productos",
        "mas vendidos": "Más vendidos",
        ofertas: "Ofertas",
        "productos destacados": "Productos destacados",
        "salud femenina": "Salud femenina",
        "salud masculina": "Salud masculina"
      },
      en: {
        proteinas: "Proteins",
        creatinas: "Creatines",
        "pre entrenos": "Pre-workouts",
        aminoacidos: "Amino acids",
        vitaminas: "Vitamins",
        wellness: "Wellness",
        detox: "Detox",
        skincare: "Skincare",
        capilar: "Hair care",
        rendimiento: "Performance",
        recuperacion: "Recovery",
        "salud hormonal": "Hormonal health",
        "enfoque mental": "Mental focus",
        energia: "Energy",
        inmunidad: "Immunity",
        relajacion: "Relaxation",
        sueno: "Sleep",
        accesorios: "Accessories",
        premium: "Premium",
        "nuevos productos": "New products",
        "mas vendidos": "Best sellers",
        ofertas: "Deals",
        "productos destacados": "Featured products",
        "salud femenina": "Women's health",
        "salud masculina": "Men's health"
      }
    };
    const currentMap = map[state.lang] || map.en;
    return currentMap[category] || category;
  }

  function ensureCategory(raw) {
    const normalized = normalizeText(String(raw || "wellness"));
    const found = CATEGORY_LIST.find((cat) => normalizeText(cat) === normalized);
    return found || "wellness";
  }

  function handleSecretAccess(event) {
    if (event.ctrlKey && event.shiftKey && event.key === "3") {
      openModal("adminModal");
      return;
    }
    if (event.key.length === 1) {
      state.typedSecret += event.key.toUpperCase();
      state.typedSecret = state.typedSecret.slice(-SECRET_COMMAND.length);
      if (state.typedSecret === SECRET_COMMAND) {
        openModal("adminModal");
        state.typedSecret = "";
      }
    }
  }

  function saveAdminContent() {
    state.content.slogan = refs.sloganInput.value.trim() || state.content.slogan;
    state.content.heroText = refs.heroTextInput.value.trim();
    refs.dynamicSlogan.textContent = state.content.slogan;
    if (state.content.heroText) {
      document.querySelector(".hero-description").textContent = state.content.heroText;
    }
    persistState();
    maybeUpsertCloudContent();
    notify("Contenido principal actualizado");
  }

  function saveAdminIntegrations() {
    state.settings.supabaseUrl = refs.supabaseUrlInput.value.trim();
    state.settings.supabaseKey = refs.supabaseKeyInput.value.trim();
    state.settings.openAiKey = refs.openAiKeyInput.value.trim();
    state.settings.geminiKey = refs.geminiKeyInput.value.trim();
    state.settings.wompiLink = refs.wompiLinkInput.value.trim();
    persistState();
    notify("Integraciones guardadas");
  }

  function saveAdminProduct(event) {
    event.preventDefault();
    const id = refs.adminProductId.value.trim();
    const payload = {
      id: id || `admin-${slugify(refs.adminProductName.value)}-${Date.now()}`,
      name: refs.adminProductName.value.trim(),
      priceCop: Number(refs.adminProductPrice.value || 0),
      category: ensureCategory(refs.adminProductCategory.value),
      stock: Number(refs.adminProductStock.value || 0),
      image: refs.adminProductImage.value.trim() || buildProductImage(refs.adminProductName.value, refs.adminProductCategory.value),
      video: refs.adminProductVideo.value.trim(),
      description: refs.adminProductDescription.value.trim() || "Producto agregado desde sección de comandos.",
      source: "admin",
      benefits: ["Personalizable desde panel admin", "Sin dependencia de programador", "Actualización inmediata en catálogo"],
      tags: ["admin", "catalogo"],
      rating: 4.9,
      reviews: 1,
      howToUse: "Definir en panel admin según etiqueta real.",
      purpose: "Configurado por administrador.",
      whenToTake: "Según objetivo personalizado.",
      recommendations: "Mantener ficha técnica actualizada.",
      warnings: "No exceder dosis recomendada.",
      featuredIngredients: ["Editable en panel admin"]
    };

    if (!payload.name) return;

    const existingIndex = state.products.findIndex((p) => p.id === payload.id);
    if (existingIndex >= 0) {
      state.products[existingIndex] = { ...state.products[existingIndex], ...payload };
    } else {
      state.products.unshift(payload);
    }

    persistState();
    maybeUpsertCloudProduct(payload);
    applyFilters();
    renderAdminProductList();
    resetAdminProductForm();
    notify("Producto guardado");
  }

  function resetAdminProductForm() {
    refs.adminProductForm.reset();
    refs.adminProductId.value = "";
    refs.adminProductCategory.value = "wellness";
    refs.adminProductStock.value = "10";
  }

  function renderAdminProductList() {
    refs.adminProductList.innerHTML = state.products.slice(0, 80).map((product) => `
      <article class="admin-product-item">
        <div>
          <strong>${escapeHtml(product.name)}</strong>
          <small>${escapeHtml(product.category)} · ${formatCop(product.priceCop)} · stock ${product.stock}</small>
        </div>
        <div>
          <button class="icon-btn" data-admin-edit="${product.id}" type="button">✎</button>
          <button class="icon-btn" data-admin-delete="${product.id}" type="button">🗑</button>
        </div>
      </article>
    `).join("");
  }

  function handleAdminProductActions(event) {
    const editButton = event.target.closest("[data-admin-edit]");
    const deleteButton = event.target.closest("[data-admin-delete]");
    if (editButton) {
      const product = state.products.find((p) => p.id === editButton.dataset.adminEdit);
      if (!product) return;
      refs.adminProductId.value = product.id;
      refs.adminProductName.value = product.name;
      refs.adminProductPrice.value = product.priceCop;
      refs.adminProductCategory.value = product.category;
      refs.adminProductStock.value = product.stock || 0;
      refs.adminProductImage.value = product.image || "";
      refs.adminProductVideo.value = product.video || "";
      refs.adminProductDescription.value = product.description || "";
      return;
    }
    if (deleteButton) {
      const id = deleteButton.dataset.adminDelete;
      state.products = state.products.filter((p) => p.id !== id);
      state.cart = state.cart.filter((line) => line.id !== id);
      state.wishlist = state.wishlist.filter((item) => item !== id);
      persistState();
      maybeDeleteCloudProduct(id);
      applyFilters();
      renderCart();
      renderAdminProductList();
      notify("Producto eliminado", "warn");
    }
  }

  function saveKnowledgeBlocks() {
    const parsedFaqs = safeParse(refs.faqJsonInput.value);
    const parsedReviews = safeParse(refs.reviewJsonInput.value);
    if (Array.isArray(parsedFaqs) && parsedFaqs.length) {
      state.faqs = parsedFaqs.filter((item) => item?.q && item?.a);
    }
    if (Array.isArray(parsedReviews) && parsedReviews.length) {
      state.reviews = parsedReviews.filter((item) => item?.name && item?.text).map((review) => ({
        rating: review.rating || 5,
        city: review.city || "Colombia",
        result: review.result || "Resultado premium",
        photo: review.photo || FALLBACK_REVIEWS[0].photo,
        ...review
      }));
    }
    persistState();
    maybeUpsertCloudContent();
    renderFaqs();
    renderReviews();
    notify("FAQs y reseñas actualizadas");
  }

  function refreshAdminForms() {
    refs.sloganInput.value = state.content.slogan;
    refs.heroTextInput.value = state.content.heroText;
    refs.supabaseUrlInput.value = state.settings.supabaseUrl;
    refs.supabaseKeyInput.value = state.settings.supabaseKey;
    refs.openAiKeyInput.value = state.settings.openAiKey;
    refs.geminiKeyInput.value = state.settings.geminiKey;
    refs.wompiLinkInput.value = state.settings.wompiLink;
    refs.faqJsonInput.value = JSON.stringify(state.faqs, null, 2);
    refs.reviewJsonInput.value = JSON.stringify(state.reviews, null, 2);
    renderAdminProductList();
  }

  async function maybeSyncFromSupabase() {
    if (!state.settings.supabaseUrl || !state.settings.supabaseKey) return;
    try {
      const cloudProducts = await supabaseRequest("products?select=*");
      if (Array.isArray(cloudProducts) && cloudProducts.length) {
        state.products = cloudProducts.map((item) => ({
          ...normalizeProduct({ name: item.name, priceCop: item.priceCop, category: item.category, source: item.source || "supabase" }, 0),
          ...item
        }));
        persistState();
        applyFilters();
        renderAdminProductList();
        notify("Catálogo sincronizado desde Supabase");
      }
      const cloudContent = await supabaseRequest("store_content?select=*&id=eq.main");
      if (Array.isArray(cloudContent) && cloudContent[0]) {
        const entry = cloudContent[0];
        if (entry.content && typeof entry.content === "object") {
          state.content = { ...state.content, ...entry.content };
          refs.dynamicSlogan.textContent = state.content.slogan || refs.dynamicSlogan.textContent;
          if (state.content.heroText) document.querySelector(".hero-description").textContent = state.content.heroText;
        }
        if (Array.isArray(entry.faqs) && entry.faqs.length) state.faqs = entry.faqs;
        if (Array.isArray(entry.reviews) && entry.reviews.length) state.reviews = entry.reviews;
        persistState();
        renderFaqs();
        renderReviews();
        refreshAdminForms();
      }
    } catch (error) {
      console.warn("Supabase sync error", error);
    }
  }

  async function maybeUpsertCloudProduct(product) {
    if (!state.settings.supabaseUrl || !state.settings.supabaseKey) return;
    try {
      await supabaseRequest("products?on_conflict=id", {
        method: "POST",
        headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
        body: JSON.stringify([product])
      });
    } catch (error) {
      console.warn("Supabase upsert error", error);
    }
  }

  async function maybeDeleteCloudProduct(id) {
    if (!state.settings.supabaseUrl || !state.settings.supabaseKey) return;
    try {
      await supabaseRequest(`products?id=eq.${encodeURIComponent(id)}`, { method: "DELETE" });
    } catch (error) {
      console.warn("Supabase delete error", error);
    }
  }

  async function maybeUpsertCloudContent() {
    if (!state.settings.supabaseUrl || !state.settings.supabaseKey) return;
    try {
      await supabaseRequest("store_content?on_conflict=id", {
        method: "POST",
        headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
        body: JSON.stringify([{
          id: "main",
          content: state.content,
          faqs: state.faqs,
          reviews: state.reviews,
          updatedAt: new Date().toISOString()
        }])
      });
    } catch (error) {
      console.warn("Supabase content sync error", error);
    }
  }

  async function supabaseRequest(path, options = {}) {
    const base = state.settings.supabaseUrl.replace(/\/+$/, "");
    const url = `${base}/rest/v1/${path}`;
    const headers = {
      apikey: state.settings.supabaseKey,
      Authorization: `Bearer ${state.settings.supabaseKey}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    };
    const response = await fetch(url, {
      method: options.method || "GET",
      headers,
      body: options.body
    });
    if (!response.ok) {
      throw new Error(`Supabase ${response.status}`);
    }
    if (response.status === 204) return null;
    return response.json();
  }

  function persistState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      lang: state.lang,
      products: state.products,
      cart: state.cart,
      wishlist: state.wishlist,
      coupon: state.coupon,
      faqs: state.faqs,
      reviews: state.reviews,
        content: state.content,
        settings: state.settings,
        activeProvider: state.activeProvider
      }));
  }

  function setupRevealObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  function animateCounters() {
    document.querySelectorAll("[data-counter]").forEach((node) => {
      const target = Number(node.getAttribute("data-counter") || 0);
      let start = 0;
      const duration = 1400;
      const startTime = performance.now();
      const step = (now) => {
        const progress = Math.min(1, (now - startTime) / duration);
        start = Math.round(target * progress);
        node.textContent = formatCompactCounter(start);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  function setupTiltCards() {
    document.querySelectorAll(".tilt-card").forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1000px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  function setupMagneticButtons() {
    document.querySelectorAll(".magnetic").forEach((button) => {
      button.addEventListener("mousemove", (event) => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
      });
      button.addEventListener("mouseleave", () => {
        button.style.transform = "";
      });
    });
  }

  function setupParallax() {
    const heroImage = document.querySelector(".hero-card img");
    if (!heroImage) return;
    window.addEventListener("scroll", () => {
      const offset = Math.min(24, window.scrollY * 0.04);
      heroImage.style.transform = `translateY(${offset}px) scale(1.04)`;
    }, { passive: true });
  }

  function trackCursorGlow(event) {
    document.body.style.setProperty("--cursor-x", `${event.clientX}px`);
    document.body.style.setProperty("--cursor-y", `${event.clientY}px`);
  }

  function toggleMusicPlayback() {
    state.musicPlaying = !state.musicPlaying;
    if (state.musicPlaying) {
      sendYouTubeCommand("playVideo");
      sendYouTubeCommand("unMute");
      refs.musicPlayBtn.textContent = "⏸";
    } else {
      sendYouTubeCommand("pauseVideo");
      refs.musicPlayBtn.textContent = "▶";
    }
  }

  function onMusicVolumeChange() {
    const volume = Number(refs.musicVolume.value);
    sendYouTubeCommand("setVolume", [volume]);
    if (volume > 0) sendYouTubeCommand("unMute");
  }

  function warmupAutoplay() {
    sendYouTubeCommand("playVideo");
    sendYouTubeCommand("mute");
    sendYouTubeCommand("setVolume", [Number(refs.musicVolume.value)]);
  }

  function sendYouTubeCommand(func, args = []) {
    refs.youtubePlayer?.contentWindow?.postMessage(JSON.stringify({
      event: "command",
      func,
      args
    }), "*");
  }

  function pickByCategory(category, count) {
    const pool = state.products.filter((item) => item.category === category).slice(0, count);
    return pool.map((item) => item.name);
  }

  function findProductsByWords(words, count) {
    const unique = [];
    words.forEach((word) => {
      const found = state.products.find((item) => item.name.toUpperCase().includes(word));
      if (found && !unique.includes(found.name)) unique.push(found.name);
    });
    return unique.slice(0, count);
  }

  function notify(message, type = "ok") {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.top = "1rem";
    toast.style.right = "1rem";
    toast.style.padding = "0.72rem 0.9rem";
    toast.style.borderRadius = "10px";
    toast.style.zIndex = "120";
    toast.style.background = type === "warn" ? "rgba(255, 200, 87, 0.2)" : "rgba(47, 230, 168, 0.2)";
    toast.style.border = type === "warn" ? "1px solid rgba(255,200,87,.5)" : "1px solid rgba(47,230,168,.5)";
    toast.style.backdropFilter = "blur(8px)";
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2100);
  }

  function safeParse(value) {
    try {
      return JSON.parse(value);
    } catch (_) {
      return null;
    }
  }

  function normalizeText(value) {
    return value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function slugify(value) {
    return normalizeText(value).replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  function truncateText(text, max) {
    if (text.length <= max) return text;
    return `${text.slice(0, max - 1)}...`;
  }

  function escapeHtml(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function formatCop(value) {
    return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(value || 0);
  }

  function formatCompactCounter(value) {
    if (value >= 1000) return `${Math.floor(value / 1000)}k+`;
    return String(value);
  }
})();
