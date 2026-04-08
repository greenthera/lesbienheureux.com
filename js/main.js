/* =========================================
   LES BIENHEUREUX - Main JavaScript
   ========================================= */

'use strict';

/* === TRANSLATIONS === */
const i18n = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_brands: 'Our Brands',
    nav_facilities: 'Facilities',
    nav_contact: 'Contact',
    nav_legal: 'Legal',
    hero_eyebrow: 'Established 2015 · France',
    hero_title: 'Welcome to LES BIENHEUREUX!',
    hero_subtitle: 'Brewers, distillers, blenders and maturers of joy',
    hero_btn_discover: 'Discover Our Story',
    hero_btn_brands: 'Our Brands',
    about_subtitle: 'Who We Are',
    about_title: 'A French Company Driven by Excellence',
    about_p1: 'LES BIENHEUREUX — the fortunate — is a French company that grows at the tremendous pace of 40% per annum. Established by Jean MOUEIX and Alexandre SIRECH in 2014 to participate in a French reindustrialisation scheme respectful of people and environment, the company exclusively designs, produces and markets its own brands.',
    about_highlight: 'Its strategy is to anticipate and create promising categories before assuming their leadership.',
    about_p2: "The company's main assets are: a leading position in French whisky and Costa Rican rum, a stable family shareholding structure, high-quality expertise acknowledged by the record number of gold medals in the sector, cutting-edge production facilities in France and Costa Rica (10% of sales in R&D), a small, passionate, and agile team.",
    stat1_n: '+40%',
    stat1_l: 'Annual Growth',
    stat2_n: '10%',
    stat2_l: 'Revenue in R&D',
    stat3_n: '#1',
    stat3_l: 'French Whisky',
    founders_subtitle: 'Our Founders',
    founders_title: 'Visionaries Who Redefined French Spirits',
    founders_p1: 'Launched in 2015 by Alexandre Sirech (former C.E.O. of HAVANA CLUB) and Jean Moueix (owner of PETRUS), LES BIENHEUREUX revolutionized the spirits market by innovating through excellence.',
    founders_p2: "In practical terms, our research and development team works with black glasses and only finalizes a product when it stands above its best competitors in a blind tasting. This uncompromising method made BELLEVOYE the leader in French whiskies and EL PASADOR DE ORO the most awarded rum.",
    founders_p3: "Encouraged by this initial success, the company now invests 10% of its turnover in research and development to keep its momentum going (+86% average annual growth rate over the 5 past years). The company produces its brands in its own facilities in Cognac (France) and Central America.",
    founder1_name: 'Alexandre Sirech',
    founder1_role: 'Co-Founder & CEO — Former CEO of Havana Club',
    founder2_name: 'Jean Moueix',
    founder2_role: 'Co-Founder — Owner of Château Pétrus',
    values_subtitle: 'Our Philosophy',
    values_title: "We Don't Follow Markets.\nWe Create Them.",
    values_lead: '"Its strategy is to anticipate and create promising categories before assuming their leadership."',
    val1_title: 'Blind Tasting Excellence',
    val1_desc: 'Every product is finalized only when it beats its best competitors in a blind tasting using Verrenoir black glasses. No bias, no compromise — ever.',
    val2_title: '10% into Innovation',
    val2_desc: 'We reinvest 10% of our annual turnover in research & development — building tomorrow\'s category leaders before the market even knows they exist.',
    val3_title: 'Ethical by Design',
    val3_desc: 'All staff on permanent contracts, net minimum wage of €2,000/month. Suppliers treated as partners. French roots, no subsidies. Sustainability in every decision.',
    values_manifesto: 'Founded on ethics, aesthetics and excellence — LES BIENHEUREUX proves that a company can grow fast, win globally, and do it right.',
    brands_subtitle: 'Portfolio',
    brands_title: 'Our Exceptional Brands',
    brands_desc: 'From French single malts to Costa Rican rum, each brand is created through our unique blind-tasting excellence methodology.',
    facilities_subtitle: 'Production',
    facilities_title: 'World-Class Facilities',
    facilities_p1: 'Invested in our own distillery in Bercloux, Charente, and a brewery, our facilities represent the pinnacle of artisanal production at scale.',
    facilities_p2: 'From the historic 1974 Charentais copper pot stills to our state-of-the-art blending laboratories, every detail is crafted for excellence.',
    facilities_items: [
      'Own distillery in Bercloux, Cognac region (France)',
      'Own brewery for guaranteed eaux-de-vie quality',
      'Production facilities in Costa Rica and Central America',
      'Four different stills for maximum distillate complexity',
      'Blind tasting lab using Verrenoir black glasses',
      '10% of turnover reinvested in R&D annually'
    ],
    awards_subtitle: 'Recognition',
    awards_title: 'The Most Awarded Spirits Company',
    contact_subtitle: 'Get In Touch',
    contact_title: 'Contact Us',
    contact_p: 'Whether you are a distributor, retailer, or press representative, we would be delighted to hear from you.',
    contact_address: '10, avenue de la Grande Armée, 75017 PARIS, France',
    contact_phone: '+33 5 56 88 32 92',
    contact_email: 'contact@lesbienheureux.com',
    form_title: 'Send a Message',
    form_name: 'Full Name',
    form_email: 'Email Address',
    form_subject: 'Subject',
    form_message: 'Message',
    form_submit: 'Send Message',
    footer_desc: 'The French company revolutionizing the spirits market through innovation, excellence, and ethical production since 2015.',
    footer_brands: 'Our Brands',
    footer_company: 'Company',
    footer_legal: 'Legal Notice',
    footer_about: 'About Us',
    footer_contact: 'Contact',
    footer_rights: '© 2015 – 2025 LES BIENHEUREUX. All rights reserved.',
    footer_dev: 'Designed and Developed by',
    age_gate_title: 'Age Verification',
    age_gate_text: 'You must be of legal drinking age in your country to enter this site.',
    age_gate_yes: 'Yes, I am of legal age',
    age_gate_no: 'No, exit',
    age_gate_warning: 'ALCOHOL ABUSE IS DANGEROUS FOR YOUR HEALTH. DRINK RESPONSIBLY.',
    alcohol_warning: 'ALCOHOL ABUSE IS DANGEROUS FOR YOUR HEALTH. DRINK RESPONSIBLY.',
    discover_more: 'Discover More',
    visit_site: 'Visit Official Website',
    buy_now: 'Buy Now',
    back_home: '← Back to Home',
    tasting_nose: 'Nose',
    tasting_palate: 'Palate',
    tasting_finish: 'Finish',
    awards_label: 'Awards'
  },
  fr: {
    nav_home: 'Accueil',
    nav_about: 'À propos',
    nav_brands: 'Nos Marques',
    nav_facilities: 'Production',
    nav_contact: 'Contact',
    nav_legal: 'Mentions Légales',
    hero_eyebrow: 'Fondée en 2015 · France',
    hero_title: 'Bienvenue chez LES BIENHEUREUX !',
    hero_subtitle: 'Brasseurs, distillateurs, assembleurs et éleveurs de bonheur',
    hero_btn_discover: 'Découvrir notre histoire',
    hero_btn_brands: 'Nos marques',
    about_subtitle: 'Qui sommes-nous',
    about_title: 'Une entreprise française animée par l\'excellence',
    about_p1: 'Trublion du marché des alcools en croissance exponentielle, la société LES BIENHEUREUX fait tout pour mériter son nom. Créée par Jean MOUEIX et Alexandre SIRECH en 2014 dans le but de participer à une réindustrialisation française respectueuse des hommes et de la nature, elle conçoit, produit et commercialise ses propres marques uniquement.',
    about_highlight: 'Sa stratégie est de pressentir puis de créer des catégories porteuses pour en prendre le leadership.',
    about_p2: 'Ses principaux atouts sont : le leadership du whisky français et du rhum costaricain, un actionnariat familial stable, un savoir-faire qualitatif reconnu par le record de médailles d\'or du secteur, des outils de production très innovants en France et au Costa Rica (10% du C.A. en R.&D.), un petit collectif passionné et agile.',
    stat1_n: '+40%',
    stat1_l: 'Croissance annuelle',
    stat2_n: '10%',
    stat2_l: 'Du CA en R&D',
    stat3_n: 'N°1',
    stat3_l: 'Whisky français',
    founders_subtitle: 'Nos fondateurs',
    founders_title: 'Des visionnaires qui ont réinventé les spiritueux français',
    founders_p1: 'Lancée en 2015 par Alexandre Sirech (ancien PDG de HAVANA CLUB) et Jean Moueix (propriétaire de PETRUS), LES BIENHEUREUX a révolutionné le marché des spiritueux en innovant par l\'excellence.',
    founders_p2: 'Concrètement, notre équipe de recherche et développement travaille avec des verres noirs et ne finalise un produit que lorsqu\'il surpasse ses meilleurs concurrents lors d\'une dégustation à l\'aveugle. Cette méthode sans compromis a fait de BELLEVOYE le leader des whiskies français et d\'EL PASADOR DE ORO le rhum le plus médaillé.',
    founders_p3: 'Encouragée par ce premier succès, la société investit désormais 10% de son chiffre d\'affaires en recherche et développement pour maintenir son élan (+86% de taux de croissance annuel moyen sur les 5 dernières années). La société produit ses marques dans ses propres installations à Cognac (France) et en Amérique centrale.',
    founder1_name: 'Alexandre Sirech',
    founder1_role: 'Co-fondateur & PDG — Ancien PDG de Havana Club',
    founder2_name: 'Jean Moueix',
    founder2_role: 'Co-fondateur — Propriétaire du Château Pétrus',
    values_subtitle: 'Notre philosophie',
    values_title: "Nous ne suivons pas les marchés.\nNous les créons.",
    values_lead: '« Sa stratégie est de pressentir et de créer des catégories porteuses pour en prendre le leadership. »',
    val1_title: 'Excellence par la dégustation à l\'aveugle',
    val1_desc: 'Chaque produit n\'est finalisé que lorsqu\'il surpasse ses meilleurs concurrents lors d\'une dégustation à l\'aveugle avec des verres noirs Verrenoir. Sans biais, sans compromis.',
    val2_title: '10% en innovation',
    val2_desc: 'Nous réinvestissons 10% de notre chiffre d\'affaires annuel en R&D — en construisant les leaders de catégorie de demain avant même que le marché ne les connaisse.',
    val3_title: 'Éthique par conception',
    val3_desc: 'Tous les salariés en CDI, salaire minimum net de 2 000 €/mois. Fournisseurs traités comme des partenaires. Racines françaises, sans subventions. Durabilité dans chaque décision.',
    values_manifesto: 'Fondée sur l\'éthique, l\'esthétique et l\'excellence — LES BIENHEUREUX prouve qu\'une entreprise peut croître rapidement, gagner à l\'international, et le faire bien.',
    brands_subtitle: 'Portefeuille',
    brands_title: 'Nos marques d\'exception',
    brands_desc: 'Des single malts français aux rhums costaricains, chaque marque est créée grâce à notre méthode unique d\'excellence par dégustation à l\'aveugle.',
    facilities_subtitle: 'Production',
    facilities_title: 'Des installations de classe mondiale',
    facilities_p1: 'Investis dans notre propre distillerie à Bercloux, en Charente, et une brasserie, nos installations représentent le summum de la production artisanale à grande échelle.',
    facilities_p2: 'Des alambics en cuivre charentais historiques de 1974 à nos laboratoires d\'assemblage à la pointe de la technologie, chaque détail est conçu pour l\'excellence.',
    facilities_items: [
      'Propre distillerie à Bercloux, région de Cognac (France)',
      'Propre brasserie pour garantir la qualité des eaux-de-vie',
      'Installations de production au Costa Rica et en Amérique centrale',
      'Quatre alambics différents pour une complexité maximale des distillats',
      'Laboratoire de dégustation à l\'aveugle utilisant les verres noirs Verrenoir',
      '10% du chiffre d\'affaires réinvesti annuellement en R&D'
    ],
    awards_subtitle: 'Reconnaissance',
    awards_title: 'La société de spiritueux la plus primée',
    contact_subtitle: 'Nous contacter',
    contact_title: 'Contactez-nous',
    contact_p: 'Que vous soyez distributeur, détaillant ou représentant de la presse, nous serons ravis de vous entendre.',
    contact_address: '10, avenue de la Grande Armée, 75017 PARIS, France',
    contact_phone: '+33 5 56 88 32 92',
    contact_email: 'contact@lesbienheureux.com',
    form_title: 'Envoyer un message',
    form_name: 'Nom complet',
    form_email: 'Adresse e-mail',
    form_subject: 'Sujet',
    form_message: 'Message',
    form_submit: 'Envoyer',
    footer_desc: 'La société française qui révolutionne le marché des spiritueux par l\'innovation, l\'excellence et une production éthique depuis 2015.',
    footer_brands: 'Nos marques',
    footer_company: 'Société',
    footer_legal: 'Mentions légales',
    footer_about: 'À propos',
    footer_contact: 'Contact',
    footer_rights: '© 2015 – 2025 LES BIENHEUREUX. Tous droits réservés.',
    footer_dev: 'Conçu et Développé par',
    age_gate_title: 'Vérification d\'âge',
    age_gate_text: 'Vous devez avoir l\'âge légal pour consommer de l\'alcool dans votre pays pour accéder à ce site.',
    age_gate_yes: 'Oui, j\'ai l\'âge légal',
    age_gate_no: 'Non, quitter',
    age_gate_warning: 'L\'ABUS D\'ALCOOL EST DANGEREUX POUR LA SANTÉ. CONSOMMEZ AVEC MODÉRATION.',
    alcohol_warning: 'L\'ABUS D\'ALCOOL EST DANGEREUX POUR LA SANTÉ. CONSOMMEZ AVEC MODÉRATION.',
    discover_more: 'En savoir plus',
    visit_site: 'Visiter le site officiel',
    buy_now: 'Acheter',
    back_home: '← Retour à l\'accueil',
    tasting_nose: 'Nez',
    tasting_palate: 'Bouche',
    tasting_finish: 'Finale',
    awards_label: 'Récompenses'
  },
  es: {
    nav_home: 'Inicio',
    nav_about: 'Nosotros',
    nav_brands: 'Nuestras Marcas',
    nav_facilities: 'Instalaciones',
    nav_contact: 'Contacto',
    nav_legal: 'Aviso Legal',
    hero_eyebrow: 'Fundada en 2015 · Francia',
    hero_title: '¡Bienvenido a LES BIENHEUREUX!',
    hero_subtitle: 'Cerveceros, destiladores, ensambladores y maduradores de alegría',
    hero_btn_discover: 'Descubrir nuestra historia',
    hero_btn_brands: 'Nuestras marcas',
    about_subtitle: 'Quiénes somos',
    about_title: 'Una empresa francesa impulsada por la excelencia',
    about_p1: 'LES BIENHEUREUX — los afortunados — es una empresa francesa que crece al impresionante ritmo del 40% anual. Fundada por Jean MOUEIX y Alexandre SIRECH en 2014 para participar en un programa de reindustrialización francesa respetuoso con las personas y el medio ambiente, la empresa diseña, produce y comercializa exclusivamente sus propias marcas.',
    about_highlight: 'Su estrategia es anticipar y crear categorías prometedoras antes de asumir su liderazgo.',
    about_p2: 'Los principales activos de la empresa son: una posición de liderazgo en el whisky francés y el ron costarricense, una estructura de accionariado familiar estable, experiencia de alta calidad reconocida por el número récord de medallas de oro en el sector, instalaciones de producción de vanguardia en Francia y Costa Rica (10% de las ventas en I+D), un equipo pequeño, apasionado y ágil.',
    stat1_n: '+40%',
    stat1_l: 'Crecimiento anual',
    stat2_n: '10%',
    stat2_l: 'En I+D',
    stat3_n: 'N°1',
    stat3_l: 'Whisky francés',
    founders_subtitle: 'Nuestros fundadores',
    founders_title: 'Visionarios que redefinieron los espirituosos franceses',
    founders_p1: 'Lanzada en 2015 por Alexandre Sirech (ex CEO de HAVANA CLUB) y Jean Moueix (propietario de PETRUS), LES BIENHEUREUX revolucionó el mercado de los espirituosos innovando a través de la excelencia.',
    founders_p2: 'En términos prácticos, nuestro equipo de I+D trabaja con vasos negros y solo finaliza un producto cuando supera a sus mejores competidores en una cata ciega. Este método sin concesiones convirtió a BELLEVOYE en el líder de los whiskies franceses y a EL PASADOR DE ORO en el ron más premiado.',
    founders_p3: 'Animada por este éxito inicial, la empresa invierte ahora el 10% de su facturación en I+D para mantener su impulso (+86% de tasa de crecimiento anual media durante los 5 últimos años). La empresa produce sus marcas en sus propias instalaciones en Cognac (Francia) y América Central.',
    founder1_name: 'Alexandre Sirech',
    founder1_role: 'Cofundador y CEO — Ex CEO de Havana Club',
    founder2_name: 'Jean Moueix',
    founder2_role: 'Cofundador — Propietario del Château Pétrus',
    values_subtitle: 'Nuestra filosofía',
    values_title: "No seguimos los mercados.\nLos creamos.",
    values_lead: '"Su estrategia es anticipar y crear categorías prometedoras para asumir su liderazgo."',
    val1_title: 'Excelencia en la cata ciega',
    val1_desc: 'Cada producto se finaliza solo cuando supera a sus mejores competidores en una cata ciega con vasos negros Verrenoir. Sin sesgos, sin compromisos.',
    val2_title: '10% en innovación',
    val2_desc: 'Reinvertimos el 10% de nuestra facturación anual en I+D — construyendo los líderes de categoría del mañana antes de que el mercado los conozca.',
    val3_title: 'Ética por diseño',
    val3_desc: 'Todo el personal con contratos indefinidos, salario mínimo neto de 2.000 €/mes. Proveedores tratados como socios. Raíces francesas, sin subvenciones.',
    values_manifesto: 'Fundada en ética, estética y excelencia — LES BIENHEUREUX demuestra que una empresa puede crecer rápido, ganar globalmente, y hacerlo bien.',
    brands_subtitle: 'Portafolio',
    brands_title: 'Nuestras marcas excepcionales',
    brands_desc: 'Desde maltas simples francesas hasta ron costarricense, cada marca se crea a través de nuestra exclusiva metodología de cata ciega.',
    facilities_subtitle: 'Producción',
    facilities_title: 'Instalaciones de clase mundial',
    facilities_p1: 'Con nuestra propia destilería en Bercloux, región de Cognac, y una cervecería, nuestras instalaciones representan la cúspide de la producción artesanal a escala.',
    facilities_p2: 'Desde los históricos alambiques de cobre charenteses de 1974 hasta nuestros laboratorios de mezcla de última generación, cada detalle está elaborado para la excelencia.',
    facilities_items: [
      'Propia destilería en Bercloux, región de Cognac (Francia)',
      'Propia cervecería para garantizar la calidad de los aguardientes',
      'Instalaciones de producción en Costa Rica y América Central',
      'Cuatro alambiques diferentes para máxima complejidad de destilados',
      'Laboratorio de cata ciega utilizando vasos negros Verrenoir',
      '10% de la facturación reinvertida anualmente en I+D'
    ],
    awards_subtitle: 'Reconocimiento',
    awards_title: 'La empresa de espirituosos más premiada',
    contact_subtitle: 'Ponerse en contacto',
    contact_title: 'Contáctenos',
    contact_p: 'Ya sea distribuidor, minorista o representante de prensa, estaremos encantados de escucharle.',
    contact_address: '10, avenue de la Grande Armée, 75017 PARIS, Francia',
    contact_phone: '+33 5 56 88 32 92',
    contact_email: 'contact@lesbienheureux.com',
    form_title: 'Enviar un mensaje',
    form_name: 'Nombre completo',
    form_email: 'Correo electrónico',
    form_subject: 'Asunto',
    form_message: 'Mensaje',
    form_submit: 'Enviar mensaje',
    footer_desc: 'La empresa francesa que revoluciona el mercado de espirituosos a través de la innovación, la excelencia y la producción ética desde 2015.',
    footer_brands: 'Nuestras marcas',
    footer_company: 'Empresa',
    footer_legal: 'Aviso legal',
    footer_about: 'Sobre nosotros',
    footer_contact: 'Contacto',
    footer_rights: '© 2015 – 2025 LES BIENHEUREUX. Todos los derechos reservados.',
    footer_dev: 'Diseñado y Desarrollado por',
    age_gate_title: 'Verificación de edad',
    age_gate_text: 'Debes tener la edad legal para consumir alcohol en tu país para acceder a este sitio.',
    age_gate_yes: 'Sí, tengo la edad legal',
    age_gate_no: 'No, salir',
    age_gate_warning: 'EL ABUSO DE ALCOHOL ES PELIGROSO PARA LA SALUD. BEBA CON MODERACIÓN.',
    alcohol_warning: 'EL ABUSO DE ALCOHOL ES PELIGROSO PARA LA SALUD. BEBA CON MODERACIÓN.',
    discover_more: 'Descubrir más',
    visit_site: 'Visitar el sitio oficial',
    buy_now: 'Comprar',
    back_home: '← Volver al inicio',
    tasting_nose: 'Nariz',
    tasting_palate: 'Paladar',
    tasting_finish: 'Final',
    awards_label: 'Premios'
  }
};

/* === LANGUAGE MANAGER === */
let currentLang = localStorage.getItem('lb_lang') || 'en';

function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem('lb_lang', lang);
  document.documentElement.lang = lang;

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = i18n[lang][key];
      } else {
        el.textContent = i18n[lang][key];
      }
    }
  });

  // Update all [data-i18n-list] elements
  document.querySelectorAll('[data-i18n-list]').forEach(el => {
    const key = el.getAttribute('data-i18n-list');
    if (i18n[lang][key] && Array.isArray(i18n[lang][key])) {
      el.innerHTML = i18n[lang][key].map(item => `<li>${item}</li>`).join('');
    }
  });

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.querySelectorAll('.age-gate-lang button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* === AGE GATE === */
function initAgeGate() {
  const gate = document.getElementById('age-gate');
  if (!gate) return;

  if (sessionStorage.getItem('lb_age_verified') === 'true') {
    gate.classList.add('hidden');
    return;
  }

  const yesBtn = gate.querySelector('#age-yes');
  const noBtn = gate.querySelector('#age-no');

  if (yesBtn) {
    yesBtn.addEventListener('click', () => {
      sessionStorage.setItem('lb_age_verified', 'true');
      gate.style.opacity = '0';
      gate.style.transition = 'opacity 0.5s ease';
      setTimeout(() => gate.classList.add('hidden'), 500);
    });
  }
  if (noBtn) {
    noBtn.addEventListener('click', () => {
      window.location.href = 'https://www.who.int/health-topics/alcohol';
    });
  }
}

/* === NAVBAR === */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Mobile hamburger
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    // Close on link click (but not toggle buttons)
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
    // Collapsible brands section
    const brandsToggle = mobileMenu.querySelector('.nav-mobile-brands-toggle');
    const brandsPanel = mobileMenu.querySelector('.nav-mobile-brands');
    if (brandsToggle && brandsPanel) {
      brandsToggle.addEventListener('click', () => {
        brandsToggle.classList.toggle('open');
        brandsPanel.classList.toggle('open');
      });
    }
  }
  // Dynamic copyright year
  document.querySelectorAll('.footer-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

/* === BACK TO TOP === */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* === SCROLL ANIMATIONS === */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-up, .fade-in, .stagger').forEach(el => {
    observer.observe(el);
  });
}

/* === HERO ANIMATION === */
function initHero() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  setTimeout(() => hero.classList.add('loaded'), 100);
}

/* === CONTACT FORM === */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = '✓ Sent!';
    btn.disabled = true;
    btn.style.background = '#28a745';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

/* === LIGHTBOX === */
function initLightbox() {
  // Create lightbox DOM
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.innerHTML = `
    <button id="lightbox-close" aria-label="Close">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <img id="lightbox-img" src="" alt="" />
  `;
  document.body.appendChild(lb);

  const lbImg = lb.querySelector('#lightbox-img');
  const lbClose = lb.querySelector('#lightbox-close');

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { lbImg.src = ''; }, 300);
  }

  // Auto-apply lightbox to product/edition images
  const autoZoomSelectors = [
    '.zoomable',
    '[data-lightbox]',
    '.edition-card-image img',
    '.brand-card-image img.brand-bottle',
    '.brand-product-grid img',
    '.brand-product-showcase img',
    '.brand-main-image',
    '.about-img-main',
    '.about-img-secondary',
    '.cellarmaster-img',
    '.brand-about img',
    '.brand-image-wrap img'
  ];
  document.querySelectorAll(autoZoomSelectors.join(',')).forEach(img => {
    img.classList.add('zoomable');
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });

  // Masonry gallery items — click opens lightbox via data-lightbox-src on parent
  document.querySelectorAll('.brand-gallery-masonry .gallery-item[data-lightbox-src]').forEach(item => {
    const src = item.getAttribute('data-lightbox-src');
    item.addEventListener('click', () => openLightbox(src, 'Product image'));
  });

  // Hero background image — add "View Image" button and make it openable
  const heroBg = document.querySelector('.brand-hero-bg[data-lightbox-src]');
  if (heroBg) {
    const src = heroBg.getAttribute('data-lightbox-src');
    // Add open button to hero
    const btn = document.createElement('button');
    btn.className = 'brand-hero-open-btn';
    btn.setAttribute('aria-label', 'View full image');
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg> View Image`;
    btn.addEventListener('click', () => openLightbox(src, 'Brand hero image'));
    heroBg.parentElement.appendChild(btn);

    // Also click on hero bg itself opens lightbox
    heroBg.addEventListener('click', () => openLightbox(src, 'Brand hero image'));
  }

  // Close on overlay click
  lb.addEventListener('click', (e) => {
    if (e.target === lb || e.target === lbClose || lbClose.contains(e.target)) {
      closeLightbox();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // Prevent close when clicking image itself
  lbImg.addEventListener('click', (e) => e.stopPropagation());
}

/* === INIT === */
document.addEventListener('DOMContentLoaded', () => {
  initAgeGate();
  initNavbar();
  initBackToTop();
  initScrollAnimations();
  initHero();
  initContactForm();
  initLightbox();

  // Language buttons
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Set initial language
  setLanguage(currentLang);
});
