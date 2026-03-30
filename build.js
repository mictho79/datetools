const fs = require('fs');
const path = require('path');

const tools = [
  require('./src/tools/age'),
  require('./src/tools/days-between'),
  require('./src/tools/date-calc'),
  require('./src/tools/week-number'),
  require('./src/tools/what-day'),
  require('./src/tools/christmas'),
  require('./src/tools/holiday-countdown'),
  require('./src/tools/dog-age'),
  require('./src/tools/cat-age'),
  require('./src/tools/baby-age'),
  require('./src/tools/chronological-age'),
  require('./src/tools/countdown-timer'),
  require('./src/tools/business-days'),
  require('./src/tools/time-zone'),
  require('./src/tools/born-in'),
  require('./src/tools/week-number-year'),
];

const LANGS = ['en', 'fr', 'es'];
const DIST = path.join(__dirname, 'dist');

// ── TOOL NAV ──────────────────────────────────────────────
const NAV = {
  en: [
    { cat: 'Age', items: [
      { label: 'Age Calculator', href: '/age-calculator/' },
      { label: 'Chronological Age', href: '/chronological-age-calculator/' },
      { label: 'Baby Age', href: '/baby-age-calculator/' },
      { label: 'Dog Age', href: '/dog-age-calculator/' },
      { label: 'Cat Age', href: '/cat-age-calculator/' },
    ]},
    { cat: 'Dates', items: [
      { label: 'Days Between Dates', href: '/days-between-dates/' },
      { label: 'Date Calculator', href: '/date-calculator/' },
      { label: 'What Day Is It', href: '/what-day-is-it-today/' },
      { label: 'Week Number', href: '/week-number/' },
      { label: 'Business Days', href: '/business-days-calculator/' },
    ]},
    { cat: 'Countdowns', items: [
      { label: 'Christmas', href: '/days-until-christmas/' },
      { label: 'New Year', href: '/days-until-new-year/' },
      { label: 'Halloween', href: '/days-until-halloween/' },
      { label: 'Easter', href: '/days-until-easter/' },
      { label: 'Countdown Timer', href: '/countdown-timer/' },
    ]},
    { cat: 'World', items: [
      { label: 'Time Zone Converter', href: '/time-zone-converter/' },
    ]},
    { cat: 'Born In', items: [
      { label: 'Born in 1990', href: '/born-in-1990/' },
      { label: 'Born in 1980', href: '/born-in-1980/' },
      { label: 'Born in 2000', href: '/born-in-2000/' },
    ]},
    { cat: 'Calendars', items: [
      { label: 'Week Numbers 2025', href: '/week-number/2025/' },
      { label: 'Week Numbers 2026', href: '/week-number/2026/' },
      { label: 'Week Numbers 2027', href: '/week-number/2027/' },
    ]},
  ],
  fr: [
    { cat: 'Âge', items: [
      { label: 'Calculateur d\'âge', href: '/fr/calculateur-age/' },
      { label: 'Âge chronologique', href: '/fr/age-chronologique/' },
      { label: 'Âge bébé', href: '/fr/calculateur-age-bebe/' },
      { label: 'Âge du chien', href: '/fr/calculateur-age-chien/' },
      { label: 'Âge du chat', href: '/fr/calculateur-age-chat/' },
    ]},
    { cat: 'Dates', items: [
      { label: 'Jours entre deux dates', href: '/fr/jours-entre-deux-dates/' },
      { label: 'Calculateur de date', href: '/fr/calculateur-date/' },
      { label: 'Quel jour sommes-nous', href: '/fr/quel-jour-sommes-nous/' },
      { label: 'Numéro de semaine', href: '/fr/numero-semaine/' },
      { label: 'Jours ouvrables', href: '/fr/calculateur-jours-ouvrables/' },
    ]},
    { cat: 'Comptes', items: [
      { label: 'Avant Noël', href: '/fr/jours-avant-noel/' },
      { label: 'Avant Nouvel An', href: '/fr/jours-avant-nouvel-an/' },
      { label: 'Avant Halloween', href: '/fr/jours-avant-halloween/' },
      { label: 'Avant Pâques', href: '/fr/jours-avant-paques/' },
      { label: 'Compte à rebours', href: '/fr/compte-a-rebours/' },
    ]},
    { cat: 'Monde', items: [
      { label: 'Fuseaux horaires', href: '/fr/convertisseur-fuseaux-horaires/' },
    ]},
    { cat: 'Né en', items: [
      { label: 'Né en 1990', href: '/fr/ne-en-1990/' },
      { label: 'Né en 1980', href: '/fr/ne-en-1980/' },
      { label: 'Né en 2000', href: '/fr/ne-en-2000/' },
    ]},
    { cat: 'Calendriers', items: [
      { label: 'Semaines 2025', href: '/fr/numero-semaine/2025/' },
      { label: 'Semaines 2026', href: '/fr/numero-semaine/2026/' },
      { label: 'Semaines 2027', href: '/fr/numero-semaine/2027/' },
    ]},
  ],
  es: [
    { cat: 'Edad', items: [
      { label: 'Calculadora de edad', href: '/es/calculadora-edad/' },
      { label: 'Edad cronológica', href: '/es/edad-cronologica/' },
      { label: 'Edad del bebé', href: '/es/calculadora-edad-bebe/' },
      { label: 'Edad del perro', href: '/es/calculadora-edad-perro/' },
      { label: 'Edad del gato', href: '/es/calculadora-edad-gato/' },
    ]},
    { cat: 'Fechas', items: [
      { label: 'Días entre fechas', href: '/es/dias-entre-fechas/' },
      { label: 'Calculadora de fechas', href: '/es/calculadora-fechas/' },
      { label: '¿Qué día es hoy?', href: '/es/que-dia-es-hoy/' },
      { label: 'Número de semana', href: '/es/numero-semana/' },
      { label: 'Días hábiles', href: '/es/calculadora-dias-habiles/' },
    ]},
    { cat: 'Cuentas', items: [
      { label: 'Navidad', href: '/es/dias-para-navidad/' },
      { label: 'Año Nuevo', href: '/es/dias-para-ano-nuevo/' },
      { label: 'Halloween', href: '/es/dias-para-halloween/' },
      { label: 'Pascua', href: '/es/dias-para-pascua/' },
      { label: 'Cuenta regresiva', href: '/es/cuenta-regresiva/' },
    ]},
    { cat: 'Mundo', items: [
      { label: 'Zona horaria', href: '/es/conversor-zona-horaria/' },
    ]},
    { cat: 'Nacido en', items: [
      { label: 'Nacido en 1990', href: '/es/nacido-en-1990/' },
      { label: 'Nacido en 1980', href: '/es/nacido-en-1980/' },
      { label: 'Nacido en 2000', href: '/es/nacido-en-2000/' },
    ]},
    { cat: 'Calendarios', items: [
      { label: 'Semanas 2025', href: '/es/numero-semana/2025/' },
      { label: 'Semanas 2026', href: '/es/numero-semana/2026/' },
      { label: 'Semanas 2027', href: '/es/numero-semana/2027/' },
    ]},
  ],
};

const FOOTER = {
  en: 'Free online date &amp; time calculators',
  fr: 'Calculateurs de date et d\'heure gratuits en ligne',
  es: 'Calculadoras de fecha y hora gratuitas en línea',
};

const MASTHEAD_LABEL = {
  en: 'Free date calculator',
  fr: 'Calculateur de dates gratuit',
  es: 'Calculadora de fechas gratuita',
};

const DATE_LOCALE = { en: 'en-US', fr: 'fr-FR', es: 'es-ES' };
const HOME_HREF = { en: '/', fr: '/fr/calculateur-age/', es: '/es/calculadora-edad/' };
const BUILD_YEAR = new Date().getFullYear();

// ── LAYOUT ────────────────────────────────────────────────
function renderLayout(data, lang) {
  const { title, metaDesc, canonical, hreflang, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs, source } = data;

  const sourceBlock = source ? `
  <div class="source-block">
    <span class="source-lbl">Source</span>
    <a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a>
  </div>` : '';

  // Schema.org FAQPage
  const faqSchema = faqs && faqs.length ? `
<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
}, null, 2)}
</script>` : '';

  // Schema.org WebApplication
  const appSchema = `
<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": title.split(' –')[0].split(' |')[0],
  "description": metaDesc,
  "url": `https://datecalc.app${canonical}`,
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "browserRequirements": "Requires JavaScript",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
}, null, 2)}
</script>`;

  const langBtns = LANGS.map(l => {
    const href = hreflang[l];
    const active = l === lang ? ' active' : '';
    return `  <a href="${href}" class="lang-btn${active}">${l.toUpperCase()}</a>`;
  }).join('\n');

  // Fix H1 crawl bug: ensure space before <br> so Google doesn't concat words
  const fixedHeadlineBlock = headlineBlock.replace(/([^\s])<br>/g, '$1 <br>');

  const navLinks = NAV[lang].map(group => {
    const links = group.items.map((item, i) => {
      const active = item.href === canonical ? ' aria-current="page"' : '';
      const sep = i < group.items.length - 1 ? '<span class="nav-sep">·</span>' : '';
      return `<a href="${item.href}"${active}>${item.label}</a>${sep}`;
    }).join('');
    return `    <div class="nav-group"><span class="nav-cat">${group.cat}</span><div class="nav-links">${links}</div></div>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="robots" content="index, follow">
<meta name="description" content="${metaDesc}">
<link rel="canonical" href="https://datecalc.app${canonical}">
<link rel="alternate" hreflang="en" href="https://datecalc.app${hreflang.en}">
<link rel="alternate" hreflang="fr" href="https://datecalc.app${hreflang.fr}">
<link rel="alternate" hreflang="es" href="https://datecalc.app${hreflang.es}">
<link rel="alternate" hreflang="x-default" href="https://datecalc.app${hreflang.en}">
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${metaDesc}">
<meta property="og:url" content="https://datecalc.app${canonical}">
<meta property="og:site_name" content="DateCalc.app">
<meta property="og:image" content="https://datecalc.app/og.png">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${metaDesc}">
<meta name="twitter:image" content="https://datecalc.app/og.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=Space+Mono:ital@0;1&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/style.css">
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="shortcut icon" href="/favicon.svg">
${faqSchema}${appSchema}
</head>
<body>

<noscript><div style="background:#c8392b;color:#fff;text-align:center;padding:.6rem;font-family:sans-serif;font-size:.9rem">This calculator requires JavaScript. Please enable it in your browser.</div></noscript>

<header>
<div class="masthead">
  <a href="${HOME_HREF[lang]}" class="masthead-brand">DateCalc<span>.</span>app</a>
  <div class="masthead-meta" id="todayMeta"></div>
</div>
</header>

<div class="lang-strip">
${langBtns}
</div>

<div class="page">

${fixedHeadlineBlock}

${formGrid}

${resultsSection}

  <nav aria-label="Tools">
  <div class="tool-nav">
${navLinks}
  </div>
  </nav>

<main>
${seoBlock}
${sourceBlock}
</main>
  <footer>© ${BUILD_YEAR} DateCalc.app — ${FOOTER[lang]}</footer>
</div>

<script>
(function(){
  var now = new Date();
  var opts = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
  document.getElementById('todayMeta').innerHTML =
    now.toLocaleDateString('${DATE_LOCALE[lang]}', opts) + '<br>${MASTHEAD_LABEL[lang]}';
})();
// Shared input guard: strip non-digits, truncate to max digit length, clamp to hi
function clamp(el, lo, hi) {
  var maxLen = String(hi).length;
  var s = el.value.replace(/\\D/g, '').slice(0, maxLen);
  var n = parseInt(s, 10);
  if (!isNaN(n) && n > hi) s = String(hi);
  el.value = s;
}
</script>
<script>
${script}
</script>
</body>
</html>`;
}

// ── HELPERS ───────────────────────────────────────────────
function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

function writePage(relPath, html) {
  const abs = path.join(DIST, relPath);
  ensureDir(path.dirname(abs));
  fs.writeFileSync(abs, html, 'utf8');
  console.log('  ✓', relPath);
}

// ── BUILD ─────────────────────────────────────────────────
// Clean dist (remove stale pages) then recreate
if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true });
ensureDir(DIST);
fs.copyFileSync(path.join(__dirname, 'src', 'style.css'), path.join(DIST, 'style.css'));
fs.copyFileSync(path.join(__dirname, 'src', 'favicon.svg'), path.join(DIST, 'favicon.svg'));
console.log('  ✓ /style.css');

let count = 0;

for (const tool of tools) {
  for (const page of tool.pages) {
    for (const lang of LANGS) {
      const slug = page.slugs[lang];           // e.g. "fr/calculateur-age"
      const canonical = `/${slug}/`;

      const data = tool.render(page.id, lang);
      data.canonical = canonical;
      data.hreflang = {
        en: `/${page.slugs.en}/`,
        fr: `/${page.slugs.fr}/`,
        es: `/${page.slugs.es}/`,
      };

      const html = renderLayout(data, lang);
      writePage(`${slug}/index.html`, html);
      count++;

      if (page.isHomepage && lang === 'en') {
        // Inject lang-detect snippet into homepage only
        const langDetect = `<script>
(function(){
  if(sessionStorage.getItem('lang-redirected')) return;
  sessionStorage.setItem('lang-redirected','1');
  var l=(navigator.language||navigator.userLanguage||'').toLowerCase();
  if(l.startsWith('fr')) window.location.replace('/fr/calculateur-age/');
  else if(l.startsWith('es')) window.location.replace('/es/calculadora-edad/');
})();
</script>`;
        writePage('index.html', html.replace('</head>', langDetect + '\n</head>'));
      }
    }
  }
}

console.log(`\nBuilt ${count} pages → dist/`);

// ── REDIRECTS ─────────────────────────────────────────────
const REDIRECTS = [
  { from: '/how-old-am-i/*',      to: '/age-calculator/' },
  { from: '/fr/quel-age-ai-je/*', to: '/fr/calculateur-age/' },
  { from: '/es/que-edad-tengo/*', to: '/es/calculadora-edad/' },
];

// Cloudflare Pages _redirects file (301)
const redirectsFile = REDIRECTS.map(r => `${r.from} ${r.to} 301`).join('\n') + '\n';
fs.writeFileSync(path.join(DIST, '_redirects'), redirectsFile, 'utf8');
console.log('  ✓ /_redirects');

// ── SITEMAP ───────────────────────────────────────────────
const allSlugs = [];
for (const tool of tools) {
  for (const page of tool.pages) {
    for (const lang of LANGS) {
      allSlugs.push(`/${page.slugs[lang]}/`);
    }
  }
}
allSlugs.push('/'); // homepage

const today = new Date().toISOString().split('T')[0];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allSlugs.map(s => `  <url>
    <loc>https://datecalc.app${s}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${s === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap, 'utf8');
console.log('  ✓ /sitemap.xml');

// ── ROBOTS.TXT ────────────────────────────────────────────
const robots = `User-agent: *\nAllow: /\nSitemap: https://datecalc.app/sitemap.xml\n`;
fs.writeFileSync(path.join(DIST, 'robots.txt'), robots, 'utf8');
console.log('  ✓ /robots.txt');
