// Year Events — "What Happened in YEAR" pages
// Generates one static page per year (1905–2025) × 3 languages = 363 pages

const EVENTS    = require('../data/events.json');
const EVENTS_FR = require('../data/events_fr.json');
const EVENTS_ES = require('../data/events_es.json');
const EVENTS_PT = require('../data/events_pt.json');
const EVENTS_DE = require('../data/events_de.json');
const EVENTS_IT = require('../data/events_it.json');
const EVENTS_PL = require('../data/events_pl.json');

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
      { q: 'What major events happened in {year}?', a: 'Major world events of {year} include: {events}.' },
      { q: 'What was the #1 song in {year}?', a: 'The most iconic song of {year} was {music}.' },
      { q: 'What was the top film in {year}?', a: 'The standout film of {year} was {film}.' },
      { q: 'What did things cost in {year}?', a: 'In {year}, a loaf of bread cost {bread}, gasoline was {gas}, and the average house was {house}.' },
      { q: 'What technology milestone happened in {year}?', a: '{tech}' },
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
      { q: 'Quels grands événements ont eu lieu en {year} ?', a: 'Les principaux événements mondiaux de {year} incluent : {events}.' },
      { q: 'Quel était le tube n°1 en {year} ?', a: 'Le tube incontournable de {year} était {music}.' },
      { q: 'Quel était le film phare de {year} ?', a: 'Le film marquant de {year} était {film}.' },
      { q: 'Combien coûtaient les choses en {year} ?', a: 'En {year}, le pain coûtait {bread}, l\'essence {gas} et la maison moyenne {house}.' },
      { q: 'Quelle innovation technologique a marqué {year} ?', a: '{tech}' },
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
      { q: '¿Qué grandes eventos ocurrieron en {year}?', a: 'Los principales eventos mundiales de {year} incluyen: {events}.' },
      { q: '¿Cuál era la canción #1 en {year}?', a: 'La canción más icónica de {year} fue {music}.' },
      { q: '¿Cuál fue la película más destacada de {year}?', a: 'La película más destacada de {year} fue {film}.' },
      { q: '¿Cuánto costaban las cosas en {year}?', a: 'En {year}, el pan costaba {bread}, la gasolina {gas} y la casa promedio {house}.' },
      { q: '¿Qué hito tecnológico marcó {year}?', a: '{tech}' },
    ],
    bornInCtaTpl:  '¿Naciste en {year}? Descubre tu edad exacta →',
    bornInHrefTpl: '/es/nacido-en-{year}/',
  },
  pt: {
    titleTpl:    'O que aconteceu em {year}? Eventos, Música, Filmes | DateCalc',
    metaDescTpl: 'Descubra os principais acontecimentos de {year}: eventos históricos, músicas, filmes e preços. Retrospectiva completa de {year}.',
    kicker:      'Restrospectiva do Ano',
    headlineTpl: 'O que<br>aconteceu em<br><em>{year}?</em>',
    subheadTpl:  'Principais eventos, cultura e curiosidades de {year}',
    wTitle:      'O Mundo em {year}',
    wLblEvents:  'Eventos',
    wLblMusic:   'Música',
    wLblFilm:    'Filme',
    wLblTech:    'Tecnologia',
    wLblPrices:  'Preços',
    wLblBread:   'Pão',
    wLblGas:     'Gasolina',
    wLblHouse:   'Casa',
    seoH2aTpl:   'Quais foram os principais eventos de {year}?',
    seoP1Tpl:    '{year} foi um ano de importantes eventos mundiais que moldaram a história. De convulsões políticas a marcos culturais, o ano deixou uma marca duradoura na sociedade. As paradas musicais, as telas de cinema e o panorama tecnológico de {year} refletem o caráter único dessa época. Os preços de produtos cotidianos como pão, gasolina e casas oferecem um retrato vívido do clima econômico da época.',
    seoH2bTpl:   'Por que {year} é historicamente significativo?',
    seoP2Tpl:    'Cada ano carrega seus próprios momentos marcantes e referências culturais. {year} contribuiu com capítulos únicos para a história dos séculos XX e XXI. Quer você tenha vivido {year} ou esteja pesquisando sobre ele, os eventos, a arte, a tecnologia e os custos cotidianos daquele ano pintam um quadro rico da vida na época.',
    faqTitle:    'Perguntas frequentes',
    faqsTpl: [
      { q: 'Quais foram os principais eventos de {year}?', a: 'Os principais eventos mundiais de {year} incluem: {events}.' },
      { q: 'Qual música era hit em {year}?', a: 'Um dos grandes sucessos musicais de {year} foi: {music}.' },
      { q: 'Qual filme foi destaque em {year}?', a: 'Um dos filmes mais marcantes de {year} foi: {film}.' },
      { q: 'Quanto custavam as coisas em {year}?', a: 'Em {year}, o preço do pão era aproximadamente {bread}, a gasolina {gas} e uma casa {house} (valores em dólares americanos).' },
      { q: 'Nascido em {year}, quantos anos tenho em 2026?', a: 'Se você nasceu em {year}, tem {age} ou {age1} anos em 2026. Clique no link acima para calcular sua idade exata.' },
    ],
    bornInCtaTpl:  'Nascido em {year}? Calcule sua idade exata →',
    bornInHrefTpl: '/pt/nascido-em-{year}/',
    source: null,
  },
  de: {
    titleTpl:    'Was geschah {year}? Ereignisse, Musik, Filme | DateCalc',
    metaDescTpl: 'Entdecke die wichtigsten Ereignisse von {year}: historische Ereignisse, Musik, Filme und Preise. Vollständiger Jahresrückblick {year}.',
    kicker:      'Jahresrückblick',
    headlineTpl: 'Was geschah<br>im Jahr<br><em>{year}?</em>',
    subheadTpl:  'Wichtige Ereignisse, Kultur und Wissenswertes aus {year}',
    wTitle:      'Die Welt im Jahr {year}',
    wLblEvents:  'Ereignisse',
    wLblMusic:   'Musik',
    wLblFilm:    'Film',
    wLblTech:    'Technologie',
    wLblPrices:  'Preise',
    wLblBread:   'Brot',
    wLblGas:     'Benzin',
    wLblHouse:   'Haus',
    seoH2aTpl:   'Was waren die wichtigsten Ereignisse von {year}?',
    seoP1Tpl:    '{year} war ein Jahr bedeutender Weltereignisse, die die Geschichte geprägt haben. Von politischen Umwälzungen bis zu kulturellen Meilensteinen hinterließ das Jahr einen dauerhaften Eindruck in der Gesellschaft. Die Musikcharts, Kinoleinwände und die technologische Landschaft von {year} spiegeln den einzigartigen Charakter dieser Epoche wider.',
    seoH2bTpl:   'Warum ist {year} historisch bedeutsam?',
    seoP2Tpl:    'Jedes Jahr trägt seine eigenen prägenden Momente und kulturellen Orientierungspunkte. {year} trug einzigartige Kapitel zur Geschichte des 20. und 21. Jahrhunderts bei. Ob du {year} erlebt hast oder darüber forschst – die Ereignisse, Kunst, Technologie und alltäglichen Kosten dieses Jahres zeichnen ein reiches Bild des damaligen Lebens.',
    faqTitle:    'Häufig gestellte Fragen',
    faqsTpl: [
      { q: 'Was waren die wichtigsten Ereignisse von {year}?', a: 'Zu den wichtigsten Weltereignissen von {year} gehören: {events}.' },
      { q: 'Welche Musik war 1 {year} beliebt?', a: 'Ein großer Musikhit des Jahres {year} war: {music}.' },
      { q: 'Welcher Film war {year} ein Highlight?', a: 'Einer der bedeutendsten Filme von {year} war: {film}.' },
      { q: 'Was kosteten Dinge im Jahr {year}?', a: 'Im Jahr {year} kostete Brot ungefähr {bread}, Benzin {gas} und ein Haus {house} (Preise in US-Dollar).' },
      { q: '{year} geboren, wie alt bin ich 2026?', a: 'Wenn du {year} geboren wurdest, bist du 2026 {age} oder {age1} Jahre alt. Klicke oben auf den Link, um dein genaues Alter zu berechnen.' },
    ],
    bornInCtaTpl:  '{year} geboren? Berechne dein genaues Alter →',
    bornInHrefTpl: '/de/geboren-in-{year}/',
    source: null,
  },
  it: {
    titleTpl:    'Cosa è successo nel {year}? Eventi, Musica, Film | DateCalc',
    metaDescTpl: 'Scopri i principali avvenimenti del {year}: eventi storici, musica, film e prezzi. Retrospettiva completa del {year}.',
    kicker:      'Retrospettiva dell\'Anno',
    headlineTpl: 'Cosa è<br>successo nel<br><em>{year}?</em>',
    subheadTpl:  'Principali eventi, cultura e curiosità del {year}',
    wTitle:      'Il Mondo nel {year}',
    wLblEvents:  'Eventi',
    wLblMusic:   'Musica',
    wLblFilm:    'Film',
    wLblTech:    'Tecnologia',
    wLblPrices:  'Prezzi',
    wLblBread:   'Pane',
    wLblGas:     'Benzina',
    wLblHouse:   'Casa',
    seoH2aTpl:   'Quali furono i principali eventi del {year}?',
    seoP1Tpl:    'Il {year} fu un anno di importanti eventi mondiali che hanno plasmato la storia. Da sconvolgimenti politici a traguardi culturali, l\'anno ha lasciato un segno duraturo nella società. Le classifiche musicali, gli schermi cinematografici e il panorama tecnologico del {year} riflettono il carattere unico di quell\'epoca.',
    seoH2bTpl:   'Perché il {year} è storicamente significativo?',
    seoP2Tpl:    'Ogni anno porta i propri momenti definitori e punti di riferimento culturali. Il {year} ha contribuito con capitoli unici alla storia del XX e XXI secolo. Che tu abbia vissuto il {year} o lo stia ricercando, gli eventi, l\'arte, la tecnologia e i costi quotidiani di quell\'anno dipingono un quadro ricco della vita dell\'epoca.',
    faqTitle:    'Domande frequenti',
    faqsTpl: [
      { q: 'Quali furono i principali eventi del {year}?', a: 'I principali eventi mondiali del {year} includono: {events}.' },
      { q: 'Quale musica era di tendenza nel {year}?', a: 'Uno dei grandi successi musicali del {year} fu: {music}.' },
      { q: 'Quale film fu il più importante nel {year}?', a: 'Uno dei film più significativi del {year} fu: {film}.' },
      { q: 'Quanto costavano le cose nel {year}?', a: 'Nel {year}, il prezzo del pane era circa {bread}, la benzina {gas} e una casa {house} (prezzi in dollari americani).' },
      { q: 'Nato nel {year}, quanti anni ho nel 2026?', a: 'Se sei nato nel {year}, hai {age} o {age1} anni nel 2026. Clicca il link sopra per calcolare la tua età esatta.' },
    ],
    bornInCtaTpl:  'Nato nel {year}? Calcola la tua età esatta →',
    bornInHrefTpl: '/it/nato-nel-{year}/',
    source: null,
  },
  pl: {
    titleTpl:    'Co się wydarzyło w {year}? Wydarzenia, Muzyka, Filmy | DateCalc',
    metaDescTpl: 'Odkryj najważniejsze wydarzenia z {year}: historia, muzyka, filmy i ceny. Pełne podsumowanie roku {year}.',
    kicker:      'Podsumowanie Roku',
    headlineTpl: 'Co się<br>wydarzyło<br><em>w {year}?</em>',
    subheadTpl:  'Najważniejsze wydarzenia, kultura i ciekawostki z {year}',
    wTitle:      'Świat w {year} roku',
    wLblEvents:  'Wydarzenia',
    wLblMusic:   'Muzyka',
    wLblFilm:    'Film',
    wLblTech:    'Technologia',
    wLblPrices:  'Ceny',
    wLblBread:   'Chleb',
    wLblGas:     'Benzyna',
    wLblHouse:   'Dom',
    seoH2aTpl:   'Jakie były najważniejsze wydarzenia w {year}?',
    seoP1Tpl:    '{year} był rokiem ważnych wydarzeń światowych, które ukształtowały historię. Od politycznych przewrotów po kulturowe kamienie milowe, rok ten pozostawił trwały ślad w społeczeństwie. Listy przebojów, ekrany kinowe i technologiczny krajobraz roku {year} odzwierciedlają unikalny charakter tej epoki.',
    seoH2bTpl:   'Dlaczego {year} jest historycznie znaczący?',
    seoP2Tpl:    'Każdy rok niesie ze sobą własne przełomowe momenty i kulturowe punkty odniesienia. {year} wniósł unikalne rozdziały do historii XX i XXI wieku. Niezależnie od tego, czy przeżyłeś {year}, czy go badasz, wydarzenia, sztuka, technologia i codzienne koszty tamtego roku tworzą bogaty obraz ówczesnego życia.',
    faqTitle:    'Często zadawane pytania',
    faqsTpl: [
      { q: 'Jakie były najważniejsze wydarzenia w {year}?', a: 'Najważniejsze światowe wydarzenia z {year} to: {events}.' },
      { q: 'Jaka muzyka była popularna w {year}?', a: 'Jednym z wielkich hitów muzycznych z {year} był: {music}.' },
      { q: 'Który film był hitem w {year}?', a: 'Jednym z najważniejszych filmów z {year} był: {film}.' },
      { q: 'Ile kosztowały rzeczy w {year}?', a: 'W {year} roku cena chleba wynosiła około {bread}, benzyny {gas}, a domu {house} (ceny w dolarach amerykańskich).' },
      { q: 'Urodzony w {year}, ile mam lat w 2026?', a: 'Jeśli urodziłeś się w {year}, masz {age} lub {age1} lat w 2026. Kliknij powyższy link, aby obliczyć swój dokładny wiek.' },
    ],
    bornInCtaTpl:  'Urodzony w {year}? Oblicz swój dokładny wiek →',
    bornInHrefTpl: '/pl/urodzony-w-{year}/',
    source: null,
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
  const evSrc = lang === 'fr' ? EVENTS_FR : lang === 'es' ? EVENTS_ES : lang === 'pt' ? EVENTS_PT : lang === 'de' ? EVENTS_DE : lang === 'it' ? EVENTS_IT : lang === 'pl' ? EVENTS_PL : EVENTS;
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
      pt: `pt/o-que-aconteceu-em-${y}`,
      de: `de/was-geschah-${y}`,
      it: `it/cosa-e-successo-nel-${y}`,
      pl: `pl/co-sie-wydarzylo-w-${y}`,
    },
  })),

  render(pageId, lang) {
    const t    = T[lang];
    const year = parseInt(pageId.replace('what-happened-in-', ''), 10);
    const vars = { year };

    // Gather real event data for FAQs and SEO text
    const evSrc = lang === 'fr' ? EVENTS_FR : lang === 'es' ? EVENTS_ES : lang === 'pt' ? EVENTS_PT : lang === 'de' ? EVENTS_DE : lang === 'it' ? EVENTS_IT : lang === 'pl' ? EVENTS_PL : EVENTS;
    const ev    = evSrc[String(year)] || EVENTS[String(year)];
    const evEn  = EVENTS[String(year)];
    let allEvents = [];
    if (ev && ev.periods) {
      ['1','2','3'].forEach(p => { if (ev.periods[p]) allEvents = allEvents.concat(ev.periods[p]); });
    } else if (evEn && evEn.periods) {
      ['1','2','3'].forEach(p => { if (evEn.periods[p]) allEvents = allEvents.concat(evEn.periods[p]); });
    }
    const dataVars = {
      year,
      events: allEvents.slice(0, 4).join('; '),
      music:  evEn ? (evEn.music || '') : '',
      film:   evEn ? (evEn.film  || '') : '',
      tech:   (ev && ev.tech) ? ev.tech : (evEn ? (evEn.tech || '') : ''),
      bread:  evEn && evEn.prices ? evEn.prices.bread : '',
      gas:    evEn && evEn.prices ? evEn.prices.gas   : '',
      house:  evEn && evEn.prices ? evEn.prices.house : '',
    };

    const title      = tpl(t.titleTpl,    dataVars);
    const metaDesc   = tpl(t.metaDescTpl, dataVars);
    const headlineHtml = tpl(t.headlineTpl, dataVars);
    const subheadHtml  = tpl(t.subheadTpl,  dataVars);
    const seoH2a     = tpl(t.seoH2aTpl,  dataVars);
    const seoP1      = tpl(t.seoP1Tpl,   dataVars);
    const seoH2b     = tpl(t.seoH2bTpl,  dataVars);
    const seoP2      = tpl(t.seoP2Tpl,   dataVars);
    const faqs       = t.faqsTpl.map(f => tplDeep(f, dataVars));

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
