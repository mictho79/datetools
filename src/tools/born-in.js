// Born In — Age by Birth Year (1950–2020)
// Generates one static page per birth year × 3 languages = 213 pages

const EVENTS = require('../data/events.json');

const BIRTH_YEARS = [];
for (let y = 1950; y <= 2020; y++) BIRTH_YEARS.push(y);

const BUILD_YEAR = 2026; // current year at build time

const T = {
  en: {
    titleTpl: 'How Old Am I If I Was Born in {year}? Age in 2026 | DateCalc.app',
    metaDescTpl: 'Born in {year}? Find out how old you are in 2026. You are either {age} or {age1} years old depending on your birthday.',
    kicker: 'Age by Birth Year',
    headlineTpl: 'Born in<br><em>{year}</em>',
    subheadTpl: 'How old are you in 2026 if you were born in {year}?',
    resultsHeader: 'Your age in 2026',
    heroTpl: '{age} or {age1}',
    heroSuffix: 'years old',
    explainTpl: 'If you were born in {year}, you turn {age1} in 2026. Before your birthday you are still {age}.',
    exactCta: '→ Calculate your exact age',
    exactHref: '/age-calculator/',
    wTitle: 'The World in {year}',
    wLblEvents: 'Events', wLblMusic: 'Music', wLblFilm: 'Film', wLblTech: 'Tech', wLblPrices: 'Prices',
    wLblBread: 'Bread', wLblGas: 'Gas', wLblHouse: 'House',
    seoH2aTpl: 'How old am I if I was born in {year}?',
    seoP1Tpl: 'If you were born in {year}, you are {age} years old for most of 2026, turning {age1} once your birthday arrives. Your exact age depends on whether your birthday has already passed this year. Someone born on January 1, {year} turns {age1} on January 1, 2026, while someone born on December 31, {year} only turns {age1} on December 31, 2026. Use the age calculator above for your precise age down to the day. People born in {year} have lived through {lived} years of history and belong to the {gen} generation.',
    seoH2bTpl: 'What generation was born in {year}?',
    seoP2Tpl: 'People born in {year} belong to the {gen} generation. This generation grew up during a unique period in history and witnessed major changes in technology, culture, and society. Use the calculator above to find your exact chronological age in years, months, weeks, and days.',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'U.S. Social Security Administration – Life Expectancy Calculator' },
    faqsTpl: [
      { q: 'How old am I if I was born in {year}?', a: 'If you were born in {year}, you are {age} or {age1} years old in 2026. You turn {age1} on your birthday in 2026. Use the age calculator for your exact age to the day.' },
      { q: 'What day of the week was I born in {year}?', a: 'The day of the week depends on your specific birth date. Use the age calculator and enter your full date of birth to find out exactly which day of the week you were born.' },
      { q: 'How many days old am I if I was born in {year}?', a: 'Someone born on January 1, {year} has lived approximately {days} days as of January 1, 2026. Your exact number of days depends on your birth date. Enter your date of birth in the age calculator for the precise count.' },
      { q: 'What generation am I if I was born in {year}?', a: 'People born in {year} belong to the {gen} generation. Each generation is shaped by the historical events and cultural trends of their formative years.' },
    ],
    weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    genRanges: [{y:1928,n:'Silent Generation'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Generation X'},{y:1981,n:'Millennial'},{y:1997,n:'Generation Z'},{y:2013,n:'Generation Alpha'}],
  },
  fr: {
    titleTpl: 'Quel âge ai-je si je suis né en {year} ? Âge en 2026 | DateCalc.app',
    metaDescTpl: 'Né en {year} ? Découvrez votre âge en 2026. Vous avez {age} ou {age1} ans selon la date de votre anniversaire.',
    kicker: 'Âge par année de naissance',
    headlineTpl: 'Né en<br><em>{year}</em>',
    subheadTpl: 'Quel âge avez-vous en 2026 si vous êtes né en {year} ?',
    resultsHeader: 'Votre âge en 2026',
    heroTpl: '{age} ou {age1}',
    heroSuffix: 'ans',
    explainTpl: 'Si vous êtes né en {year}, vous avez {age1} ans en 2026. Avant votre anniversaire vous avez encore {age} ans.',
    exactCta: '→ Calculer votre âge exact',
    exactHref: '/fr/calculateur-age/',
    wTitle: 'Le monde en {year}',
    wLblEvents: 'Événements', wLblMusic: 'Musique', wLblFilm: 'Film', wLblTech: 'Tech', wLblPrices: 'Prix',
    wLblBread: 'Pain', wLblGas: 'Essence', wLblHouse: 'Maison',
    seoH2aTpl: 'Quel âge ai-je si je suis né en {year} ?',
    seoP1Tpl: 'Si vous êtes né en {year}, vous avez {age} ans pendant la majeure partie de 2026, et vous fêtez vos {age1} ans à votre anniversaire. Quelqu\'un né le 1er janvier {year} a {age1} ans dès le 1er janvier 2026, tandis que quelqu\'un né le 31 décembre {year} n\'a {age1} ans que le 31 décembre 2026. Utilisez le calculateur d\'âge pour votre âge précis au jour près. Les personnes nées en {year} appartiennent à la génération {gen}.',
    seoH2bTpl: 'Quelle génération est née en {year} ?',
    seoP2Tpl: 'Les personnes nées en {year} appartiennent à la génération {gen}. Cette génération a grandi pendant une période unique de l\'histoire et a été témoin de changements majeurs dans la technologie, la culture et la société.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'Administration de la Sécurité Sociale – Espérance de vie' },
    faqsTpl: [
      { q: 'Quel âge ai-je si je suis né en {year} ?', a: 'Si vous êtes né en {year}, vous avez {age} ou {age1} ans en 2026. Vous avez {age1} ans à partir de votre anniversaire en 2026.' },
      { q: 'Quel jour de la semaine suis-je né en {year} ?', a: 'Le jour de la semaine dépend de votre date de naissance exacte. Utilisez le calculateur d\'âge en entrant votre date de naissance complète.' },
      { q: 'Combien de jours ai-je si je suis né en {year} ?', a: 'Quelqu\'un né le 1er janvier {year} a vécu environ {days} jours au 1er janvier 2026. Entrez votre date de naissance dans le calculateur pour le décompte précis.' },
      { q: 'De quelle génération suis-je si je suis né en {year} ?', a: 'Les personnes nées en {year} appartiennent à la génération {gen}.' },
    ],
    weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    genRanges: [{y:1928,n:'Génération Silencieuse'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Génération X'},{y:1981,n:'Millénial'},{y:1997,n:'Génération Z'},{y:2013,n:'Génération Alpha'}],
  },
  es: {
    titleTpl: '¿Cuántos años tengo si nací en {year}? Edad en 2026 | DateCalc.app',
    metaDescTpl: '¿Naciste en {year}? Descubre tu edad en 2026. Tienes {age} o {age1} años según tu fecha de cumpleaños.',
    kicker: 'Edad por año de nacimiento',
    headlineTpl: 'Nacido en<br><em>{year}</em>',
    subheadTpl: '¿Cuántos años tienes en 2026 si naciste en {year}?',
    resultsHeader: 'Tu edad en 2026',
    heroTpl: '{age} o {age1}',
    heroSuffix: 'años',
    explainTpl: 'Si naciste en {year}, cumples {age1} años en 2026. Antes de tu cumpleaños aún tienes {age} años.',
    exactCta: '→ Calcular tu edad exacta',
    exactHref: '/es/calculadora-edad/',
    wTitle: 'El mundo en {year}',
    wLblEvents: 'Eventos', wLblMusic: 'Música', wLblFilm: 'Película', wLblTech: 'Tecnología', wLblPrices: 'Precios',
    wLblBread: 'Pan', wLblGas: 'Gasolina', wLblHouse: 'Casa',
    seoH2aTpl: '¿Cuántos años tengo si nací en {year}?',
    seoP1Tpl: 'Si naciste en {year}, tienes {age} años durante la mayor parte de 2026, cumpliendo {age1} años cuando llega tu cumpleaños. Alguien nacido el 1 de enero de {year} cumple {age1} años el 1 de enero de 2026, mientras que alguien nacido el 31 de diciembre de {year} solo cumple {age1} años el 31 de diciembre de 2026. Las personas nacidas en {year} pertenecen a la generación {gen}.',
    seoH2bTpl: '¿Qué generación nació en {year}?',
    seoP2Tpl: 'Las personas nacidas en {year} pertenecen a la generación {gen}. Esta generación creció durante un período único de la historia y fue testigo de grandes cambios en tecnología, cultura y sociedad.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'Administración del Seguro Social – Esperanza de vida' },
    faqsTpl: [
      { q: '¿Cuántos años tengo si nací en {year}?', a: 'Si naciste en {year}, tienes {age} o {age1} años en 2026. Cumples {age1} años en tu cumpleaños de 2026.' },
      { q: '¿Qué día de la semana nací en {year}?', a: 'El día de la semana depende de tu fecha de nacimiento exacta. Usa la calculadora de edad ingresando tu fecha completa.' },
      { q: '¿Cuántos días tengo si nací en {year}?', a: 'Alguien nacido el 1 de enero de {year} ha vivido aproximadamente {days} días al 1 de enero de 2026.' },
      { q: '¿De qué generación soy si nací en {year}?', a: 'Las personas nacidas en {year} pertenecen a la generación {gen}.' },
    ],
    weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
    genRanges: [{y:1928,n:'Generación Silenciosa'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Generación X'},{y:1981,n:'Millennial'},{y:1997,n:'Generación Z'},{y:2013,n:'Generación Alfa'}],
  },
};

// Helper: replace all template tokens in a string
function tpl(str, vars) {
  return str.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : '{' + k + '}'));
}

// Helper: replace all template tokens in every string leaf of an object/array
function tplDeep(val, vars) {
  if (typeof val === 'string') return tpl(val, vars);
  if (Array.isArray(val)) return val.map(item => tplDeep(item, vars));
  if (val && typeof val === 'object') {
    const out = {};
    for (const k of Object.keys(val)) out[k] = tplDeep(val[k], vars);
    return out;
  }
  return val;
}

// Helper: get generation name for a birth year
function getGen(year, genRanges) {
  for (let i = genRanges.length - 1; i >= 0; i--) {
    if (year >= genRanges[i].y) return genRanges[i].n;
  }
  return genRanges[0].n;
}

// Helper: build world events block HTML from EVENTS data
function buildWorldBlock(year, t) {
  const ev = EVENTS[String(year)];
  if (!ev) return '';

  // Collect all world events across all 3 periods
  let worldEvents = [];
  if (ev.periods) {
    ['1', '2', '3'].forEach(p => {
      if (ev.periods[p]) worldEvents = worldEvents.concat(ev.periods[p]);
    });
  } else if (ev.world) {
    worldEvents = ev.world;
  }

  const wTitle = tpl(t.wTitle, { year });
  const rows = [
    ['🌍', t.wLblEvents, worldEvents.join(' · ')],
    ['🎵', t.wLblMusic, ev.music || ''],
    ['🎬', t.wLblFilm, ev.film || ''],
    ['💻', t.wLblTech, ev.tech || ''],
    ['🛒', t.wLblPrices,
      t.wLblBread + ' ' + (ev.prices ? ev.prices.bread : '') +
      ' · ' + t.wLblGas + ' ' + (ev.prices ? ev.prices.gas : '') +
      ' · ' + t.wLblHouse + ' ' + (ev.prices ? ev.prices.house : ''),
    ],
  ];

  let html = `<div class="world-when">`;
  html += `<div class="world-when-title">${wTitle}</div>`;
  rows.forEach(r => {
    if (!r[2]) return; // skip empty rows
    html += `<div class="world-row"><span class="world-icon">${r[0]}</span><span class="world-lbl">${r[1]}</span><span class="world-val">${r[2]}</span></div>`;
  });
  html += `</div>`;
  return html;
}

module.exports = {
  pages: BIRTH_YEARS.map(y => ({
    id: `born-in-${y}`,
    slugs: {
      en: `born-in-${y}`,
      fr: `fr/ne-en-${y}`,
      es: `es/nacido-en-${y}`,
    },
  })),

  render(pageId, lang) {
    const t = T[lang];
    const year = parseInt(pageId.replace('born-in-', ''), 10);

    // Core age computations
    const age = BUILD_YEAR - year - 1;   // age before birthday in BUILD_YEAR
    const age1 = BUILD_YEAR - year;       // age after birthday in BUILD_YEAR
    const days = Math.floor((BUILD_YEAR - year) * 365.25);
    const lived = BUILD_YEAR - year;
    const gen = getGen(year, t.genRanges);

    // Token map used for all template substitutions
    const vars = { year, age, age1, days, lived, gen };

    // Resolve all template strings
    const title = tpl(t.titleTpl, vars);
    const metaDesc = tpl(t.metaDescTpl, vars);
    const headlineHtml = tpl(t.headlineTpl, vars);
    const subheadHtml = tpl(t.subheadTpl, vars);
    const heroText = tpl(t.heroTpl, vars);
    const explainText = tpl(t.explainTpl, vars);
    const seoH2a = tpl(t.seoH2aTpl, vars);
    const seoP1 = tpl(t.seoP1Tpl, vars);
    const seoH2b = tpl(t.seoH2bTpl, vars);
    const seoP2 = tpl(t.seoP2Tpl, vars);

    // Resolved FAQs
    const faqs = t.faqsTpl.map(f => tplDeep(f, vars));

    // World events block
    const worldBlock = buildWorldBlock(year, t);

    // Blocks
    const headlineBlock = `  <div class="headline-block">
    <div class="kicker">${t.kicker}</div>
    <h1 class="headline">${headlineHtml}</h1>
    <p class="subhead">${subheadHtml}</p>
  </div>`;

    // No form — results auto-show
    const formGrid = '';

    const resultsSection = `  <div class="results-section auto-show" id="results">
    <div class="results-header">${t.resultsHeader}</div>
    <div class="age-display">
      <span class="age-number">${heroText}</span>
      <span class="age-suffix">${t.heroSuffix}</span>
    </div>
    <p style="text-align:center;color:var(--muted);font-size:.9rem;margin:.5rem 0 1.5rem">${explainText}</p>
    <div style="text-align:center;margin-bottom:1rem">
      <a href="${t.exactHref}" class="calc-btn" style="display:inline-block;text-decoration:none">${t.exactCta}</a>
    </div>
    ${worldBlock}
  </div>`;

    const faqHTML = faqs.map(f =>
      `    <div class="faq-item"><h3>${f.q}</h3><p>${f.a}</p></div>`
    ).join('\n');

    const seoBlock = `  <div class="seo-block">
    <div><h2>${seoH2a}</h2><p>${seoP1}</p></div>
    <div><h2>${seoH2b}</h2><p>${seoP2}</p></div>
  </div>
  <div class="faq-block">
    <h2>${t.faqTitle}</h2>
${faqHTML}
  </div>`;

    // No interactive form — page is fully static
    const script = `
// No interactive form — page is fully static
`;

    return { title, metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs, source: t.source };
  },
};
