// Year Events — "What Happened in YEAR" pages
// Generates one static page per year (1905–2025) × 3 languages = 363 pages

const EVENTS    = require('../data/events.json');
const EVENTS_FR = require('../data/events_fr.json');
const EVENTS_ES = require('../data/events_es.json');

const EVENT_YEARS = [];
for (let y = 1905; y <= 2025; y++) EVENT_YEARS.push(y);

const T = {
  en: {
    titleTpl:    'What Happened in {year}? Events, Music, Film & Tech | DateCalc.app',
    metaDescTpl: 'Discover what happened in {year}: major world events, #1 songs, top films, tech milestones, and everyday prices. A complete year in review for {year}.',
    kicker:      'Year in Review',
    headlineTpl: 'What Happened<br>in <em>{year}</em>?',
    subheadTpl:  'Major events, music, film, tech & prices from {year}',
    wTitle:      'The World in {year}',
    wLblEvents:  'Events',
    wLblMusic:   'Music',
    wLblFilm:    'Film',
    wLblTech:    'Tech',
    wLblPrices:  'Prices',
    wLblBread:   'Bread',
    wLblGas:     'Gas',
    wLblHouse:   'House',
    seoH2aTpl:   'What major events happened in {year}?',
    seoP1Tpl:    '{year} was a year of significant world events that shaped history. From political upheavals to cultural milestones, the year left a lasting mark on society. The music charts, cinema screens, and technological landscape of {year} reflect the era\'s unique character. Prices for everyday goods like bread, gasoline, and homes give a vivid snapshot of the economic climate of the time.',
    seoH2bTpl:   'Why is {year} historically significant?',
    seoP2Tpl:    'Each year carries its own defining moments and cultural touchstones. {year} contributed unique chapters to the story of the 20th and 21st centuries. Whether you lived through {year} or are researching it, the events, art, technology, and everyday costs of that year paint a rich picture of life at the time.',
    faqTitle:    'Frequently asked questions',
    faqsTpl: [
      { q: 'What major events happened in {year}?', a: 'Key world events of {year} include the milestones listed above. These ranged across politics, war, science, and culture, shaping the course of modern history.' },
      { q: 'What was the #1 song in {year}?', a: 'The top song of {year} is listed in the music row above. Popular music in {year} reflected the tastes and mood of the era.' },
      { q: 'What movies came out in {year}?', a: 'The standout film of {year} is shown in the film row above. Cinema in {year} captured the spirit of the times and influenced popular culture for years to come.' },
      { q: 'What did things cost in {year}?', a: 'In {year}, everyday prices included the figures shown in the prices row above for bread, gasoline, and the average house. These numbers illustrate how much purchasing power and the cost of living have changed over time.' },
      { q: 'What technology was new in {year}?', a: 'The tech highlight of {year} is described in the technology row above. Innovations from {year} often laid the groundwork for technologies we rely on today.' },
    ],
    bornInCtaTpl:  'Were you born in {year}? Find out your exact age →',
    bornInHrefTpl: '/born-in-{year}/',
  },
  fr: {
    titleTpl:    'Que s\'est-il passé en {year} ? Événements, musique, cinéma et tech | DateCalc.app',
    metaDescTpl: 'Découvrez ce qui s\'est passé en {year} : grands événements mondiaux, tubes musicaux, films phares, innovations technologiques et prix courants. Rétrospective complète de {year}.',
    kicker:      'Rétrospective',
    headlineTpl: 'Que s\'est-il<br>passé en <em>{year}</em> ?',
    subheadTpl:  'Événements majeurs, musique, cinéma, tech et prix de {year}',
    wTitle:      'Le monde en {year}',
    wLblEvents:  'Événements',
    wLblMusic:   'Musique',
    wLblFilm:    'Film',
    wLblTech:    'Tech',
    wLblPrices:  'Prix',
    wLblBread:   'Pain',
    wLblGas:     'Essence',
    wLblHouse:   'Maison',
    seoH2aTpl:   'Quels grands événements ont eu lieu en {year} ?',
    seoP1Tpl:    '{year} a été une année marquée par des événements mondiaux importants qui ont façonné l\'histoire. Des bouleversements politiques aux jalons culturels, l\'année a laissé une empreinte durable sur la société. Les charts musicaux, les salles de cinéma et le paysage technologique de {year} reflètent le caractère unique de cette époque. Les prix des produits courants comme le pain, l\'essence et les maisons donnent un aperçu vivant du climat économique de l\'époque.',
    seoH2bTpl:   'Pourquoi {year} est-elle historiquement significative ?',
    seoP2Tpl:    'Chaque année porte ses propres moments définissants et repères culturels. {year} a contribué à des chapitres uniques de l\'histoire des XX\u1d49 et XXI\u1d49 siècles. Que vous ayez vécu {year} ou que vous le recherchiez, les événements, l\'art, la technologie et les coûts quotidiens de cette année brossent un tableau riche de la vie de l\'époque.',
    faqTitle:    'Questions fréquentes',
    faqsTpl: [
      { q: 'Quels grands événements ont eu lieu en {year} ?', a: 'Les principaux événements mondiaux de {year} comprennent les jalons listés ci-dessus, couvrant la politique, les conflits, la science et la culture.' },
      { q: 'Quel était le tube n°1 en {year} ?', a: 'Le tube de {year} est indiqué dans la ligne musique ci-dessus. La musique populaire de {year} reflétait les goûts et l\'ambiance de l\'époque.' },
      { q: 'Quels films sont sortis en {year} ?', a: 'Le film phare de {year} est affiché dans la ligne cinéma ci-dessus. Le cinéma de {year} a capturé l\'esprit du temps.' },
      { q: 'Combien coûtaient les choses en {year} ?', a: 'En {year}, les prix courants comprenaient les chiffres indiqués ci-dessus pour le pain, l\'essence et la maison moyenne. Ces données illustrent l\'évolution du pouvoir d\'achat.' },
      { q: 'Quelles technologies sont apparues en {year} ?', a: 'L\'innovation technologique phare de {year} est décrite dans la ligne tech ci-dessus. Ces innovations ont souvent posé les bases des technologies d\'aujourd\'hui.' },
    ],
    bornInCtaTpl:  'Êtes-vous né en {year} ? Calculez votre âge exact →',
    bornInHrefTpl: '/fr/ne-en-{year}/',
  },
  es: {
    titleTpl:    '¿Qué pasó en {year}? Eventos, música, cine y tecnología | DateCalc.app',
    metaDescTpl: 'Descubre qué pasó en {year}: grandes eventos mundiales, canciones #1, películas destacadas, avances tecnológicos y precios de la época. Resumen completo de {year}.',
    kicker:      'Resumen del año',
    headlineTpl: '¿Qué pasó<br>en <em>{year}</em>?',
    subheadTpl:  'Eventos, música, cine, tecnología y precios de {year}',
    wTitle:      'El mundo en {year}',
    wLblEvents:  'Eventos',
    wLblMusic:   'Música',
    wLblFilm:    'Película',
    wLblTech:    'Tecnología',
    wLblPrices:  'Precios',
    wLblBread:   'Pan',
    wLblGas:     'Gasolina',
    wLblHouse:   'Casa',
    seoH2aTpl:   '¿Qué grandes eventos ocurrieron en {year}?',
    seoP1Tpl:    '{year} fue un año de importantes eventos mundiales que moldearon la historia. Desde convulsiones políticas hasta hitos culturales, el año dejó una huella duradera en la sociedad. Las listas de éxitos musicales, las pantallas de cine y el panorama tecnológico de {year} reflejan el carácter único de esa época. Los precios de productos cotidianos como el pan, la gasolina y las casas ofrecen una imagen vívida del clima económico de entonces.',
    seoH2bTpl:   '¿Por qué {year} es históricamente significativo?',
    seoP2Tpl:    'Cada año lleva sus propios momentos definitorios y referencias culturales. {year} aportó capítulos únicos a la historia de los siglos XX y XXI. Ya sea que hayas vivido {year} o lo estés investigando, los eventos, el arte, la tecnología y los costos cotidianos de ese año pintan un cuadro rico de la vida de la época.',
    faqTitle:    'Preguntas frecuentes',
    faqsTpl: [
      { q: '¿Qué grandes eventos ocurrieron en {year}?', a: 'Los principales eventos mundiales de {year} incluyen los hitos listados arriba, abarcando política, conflictos, ciencia y cultura.' },
      { q: '¿Cuál era la canción #1 en {year}?', a: 'La canción más popular de {year} se indica en la fila de música de arriba. La música popular de {year} reflejaba los gustos y el ánimo de la época.' },
      { q: '¿Qué películas se estrenaron en {year}?', a: 'La película destacada de {year} se muestra en la fila de cine de arriba. El cine de {year} capturó el espíritu de los tiempos.' },
      { q: '¿Cuánto costaban las cosas en {year}?', a: 'En {year}, los precios cotidianos incluían las cifras mostradas arriba para el pan, la gasolina y la casa promedio. Estas cifras ilustran cómo han cambiado el poder adquisitivo y el costo de vida.' },
      { q: '¿Qué tecnología era nueva en {year}?', a: 'El avance tecnológico destacado de {year} se describe en la fila de tecnología de arriba. Las innovaciones de {year} a menudo sentaron las bases de las tecnologías que usamos hoy.' },
    ],
    bornInCtaTpl:  '¿Naciste en {year}? Descubre tu edad exacta →',
    bornInHrefTpl: '/es/nacido-en-{year}/',
  },
};

// Helper: replace {token} placeholders in a string
function tpl(str, vars) {
  return str.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : '{' + k + '}'));
}

// Helper: deep-replace tokens in an object/array/string tree
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

// Build the world events HTML block (reuses same CSS classes as born-in.js)
function buildWorldBlock(year, t, lang) {
  const evSrc = lang === 'fr' ? EVENTS_FR : lang === 'es' ? EVENTS_ES : EVENTS;
  const ev    = evSrc[String(year)] || EVENTS[String(year)]; // translated, fallback to EN
  const evEn  = EVENTS[String(year)];                         // always EN for music/film/prices
  if (!evEn) return '';

  // Collect world events from all 3 periods (from translated source)
  let worldEvents = [];
  if (ev && ev.periods) {
    ['1', '2', '3'].forEach(p => {
      if (ev.periods[p]) worldEvents = worldEvents.concat(ev.periods[p]);
    });
  } else if (evEn.periods) {
    ['1', '2', '3'].forEach(p => {
      if (evEn.periods[p]) worldEvents = worldEvents.concat(evEn.periods[p]);
    });
  } else if (evEn.world) {
    worldEvents = evEn.world;
  }

  const techText = (ev && ev.tech) ? ev.tech : (evEn.tech || '');

  const wTitle = tpl(t.wTitle, { year });
  const rows = [
    ['🌍', t.wLblEvents, worldEvents.join(' · ')],
    ['🎵', t.wLblMusic,  evEn.music  || ''],
    ['🎬', t.wLblFilm,   evEn.film   || ''],
    ['💻', t.wLblTech,   techText],
    ['🛒', t.wLblPrices,
      t.wLblBread + ' ' + (evEn.prices ? evEn.prices.bread : '') +
      ' · ' + t.wLblGas + ' ' + (evEn.prices ? evEn.prices.gas : '') +
      ' · ' + t.wLblHouse + ' ' + (evEn.prices ? evEn.prices.house : ''),
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
  pages: EVENT_YEARS.map(y => ({
    id: `what-happened-in-${y}`,
    slugs: {
      en: `what-happened-in-${y}`,
      fr: `fr/que-s-est-il-passe-en-${y}`,
      es: `es/que-paso-en-${y}`,
    },
  })),

  render(pageId, lang) {
    const t    = T[lang];
    const year = parseInt(pageId.replace('what-happened-in-', ''), 10);
    const vars = { year };

    const title      = tpl(t.titleTpl,    vars);
    const metaDesc   = tpl(t.metaDescTpl, vars);
    const headlineHtml = tpl(t.headlineTpl, vars);
    const subheadHtml  = tpl(t.subheadTpl,  vars);
    const seoH2a     = tpl(t.seoH2aTpl,  vars);
    const seoP1      = tpl(t.seoP1Tpl,   vars);
    const seoH2b     = tpl(t.seoH2bTpl,  vars);
    const seoP2      = tpl(t.seoP2Tpl,   vars);
    const faqs       = t.faqsTpl.map(f => tplDeep(f, vars));

    const headlineBlock = `  <div class="headline-block">
    <div class="kicker">${t.kicker}</div>
    <h1 class="headline">${headlineHtml}</h1>
    <p class="subhead">${subheadHtml}</p>
  </div>`;

    const formGrid = '';

    // World events block
    const worldBlock = buildWorldBlock(year, t, lang);

    // Optional CTA to born-in page (only for years 1930–2024)
    let ctaBlock = '';
    if (year >= 1930 && year <= 2024) {
      const ctaHref = tpl(t.bornInHrefTpl, vars);
      const ctaText = tpl(t.bornInCtaTpl,  vars);
      ctaBlock = `    <div style="text-align:center;margin:1.2rem 0 .5rem">
      <a href="${ctaHref}" class="calc-btn" style="display:inline-block;text-decoration:none">${ctaText}</a>
    </div>`;
    }

    const resultsSection = `  <div class="results-section auto-show" id="results">
    ${worldBlock}
${ctaBlock}
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

    const source = {
      url:   `https://en.wikipedia.org/wiki/${year}`,
      label: `Wikipedia \u2013 ${year}`,
    };

    return {
      title,
      metaDesc,
      headlineBlock,
      formGrid,
      resultsSection,
      seoBlock,
      script: '',
      faqs,
      source,
    };
  },
};
