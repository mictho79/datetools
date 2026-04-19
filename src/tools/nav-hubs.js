// Main navigation + /tools/ and /articles/ hub pages (10 languages each).
// Keeps all nav-specific data isolated from build.js so the layouts only need
// to call 3 helpers: mainNavHTML, toolsHubData, articlesHubData.

const LANGS = ['en', 'fr', 'es', 'pt', 'de', 'it', 'pl', 'ja', 'ko', 'nl'];

// ── URL slugs for the 2 new hubs ──────────────────────────
const TOOLS_SLUGS = {
  en: 'tools',
  fr: 'fr/outils',
  es: 'es/herramientas',
  pt: 'pt/ferramentas',
  de: 'de/tools',
  it: 'it/strumenti',
  pl: 'pl/narzedzia',
  ja: 'ja/tools',
  ko: 'ko/dogu',
  nl: 'nl/tools',
};
const ARTICLES_SLUGS = {
  en: 'articles',
  fr: 'fr/articles',
  es: 'es/articulos',
  pt: 'pt/artigos',
  de: 'de/artikel',
  it: 'it/articoli',
  pl: 'pl/artykuly',
  ja: 'ja/kiji',
  ko: 'ko/gisa',
  nl: 'nl/artikelen',
};
const BIRTH_YEARS_SLUGS = {
  en: 'birth-years',
  fr: 'fr/annees-de-naissance',
  es: 'es/anos-de-nacimiento',
  pt: 'pt/anos-de-nascimento',
  de: 'de/geburtsjahre',
  it: 'it/anni-di-nascita',
  pl: 'pl/lata-urodzenia',
  ja: 'ja/umare-doshi',
  ko: 'ko/chulsaeng-yeondo',
  nl: 'nl/geboortejaren',
};
const ABOUT_SLUGS = {
  en: 'about', fr: 'fr/a-propos', es: 'es/acerca-de', pt: 'pt/sobre',
  de: 'de/ueber-uns', it: 'it/chi-siamo', pl: 'pl/o-nas',
  ja: 'ja/about', ko: 'ko/about', nl: 'nl/over-ons',
};

// ── Labels ────────────────────────────────────────────────
const NAV_LABELS = {
  en: { tools: 'Tools',        articles: 'Articles',   years: 'Years',        about: 'About',        menu: 'Menu',        close: 'Close' },
  fr: { tools: 'Outils',       articles: 'Articles',   years: 'Années',       about: 'À propos',     menu: 'Menu',        close: 'Fermer' },
  es: { tools: 'Herramientas', articles: 'Artículos',  years: 'Años',         about: 'Acerca de',    menu: 'Menú',        close: 'Cerrar' },
  pt: { tools: 'Ferramentas',  articles: 'Artigos',    years: 'Anos',         about: 'Sobre',        menu: 'Menu',        close: 'Fechar' },
  de: { tools: 'Tools',        articles: 'Artikel',    years: 'Jahre',        about: 'Über uns',     menu: 'Menü',        close: 'Schließen' },
  it: { tools: 'Strumenti',    articles: 'Articoli',   years: 'Anni',         about: 'Chi siamo',    menu: 'Menu',        close: 'Chiudi' },
  pl: { tools: 'Narzędzia',    articles: 'Artykuły',   years: 'Lata',         about: 'O nas',        menu: 'Menu',        close: 'Zamknij' },
  ja: { tools: 'ツール',       articles: '記事',       years: '年',           about: 'このサイトについて', menu: 'メニュー', close: '閉じる' },
  ko: { tools: '도구',         articles: '기사',       years: '연도',         about: '소개',         menu: '메뉴',        close: '닫기' },
  nl: { tools: 'Tools',        articles: 'Artikelen',  years: 'Jaren',        about: 'Over ons',     menu: 'Menu',        close: 'Sluiten' },
};

// ── Hub content (title/h1/intro/CTA label) ────────────────
const TOOLS_CONTENT = {
  en: { title: 'All Tools — DateCalc.app', h1: 'All Calculators', kicker: 'Tools index', intro: 'Every calculator on DateCalc.app, grouped by category. Around 265 individual tools across age, date math, countdowns, week numbers, business days, and time-zone conversion.', sectionTitle: 'By category' },
  fr: { title: 'Tous les outils — DateCalc.app', h1: 'Tous les calculateurs', kicker: 'Index des outils', intro: 'Tous les calculateurs de DateCalc.app, regroupés par catégorie. Environ 265 outils couvrant l\'âge, les calculs de dates, les comptes à rebours, les numéros de semaine, les jours ouvrés et la conversion de fuseau horaire.', sectionTitle: 'Par catégorie' },
  es: { title: 'Todas las herramientas — DateCalc.app', h1: 'Todas las calculadoras', kicker: 'Índice de herramientas', intro: 'Todas las calculadoras de DateCalc.app agrupadas por categoría. Alrededor de 265 herramientas que cubren edad, matemáticas de fechas, cuentas regresivas, números de semana, días hábiles y conversión de zona horaria.', sectionTitle: 'Por categoría' },
  pt: { title: 'Todas as ferramentas — DateCalc.app', h1: 'Todas as calculadoras', kicker: 'Índice de ferramentas', intro: 'Todas as calculadoras do DateCalc.app agrupadas por categoria. Cerca de 265 ferramentas cobrindo idade, matemática de datas, contagens regressivas, números de semana, dias úteis e conversão de fuso horário.', sectionTitle: 'Por categoria' },
  de: { title: 'Alle Tools — DateCalc.app', h1: 'Alle Rechner', kicker: 'Tool-Index', intro: 'Alle Rechner auf DateCalc.app, nach Kategorie gruppiert. Rund 265 Einzeltools für Alter, Datumsarithmetik, Countdowns, Wochennummern, Werktage und Zeitzonenkonvertierung.', sectionTitle: 'Nach Kategorie' },
  it: { title: 'Tutti gli strumenti — DateCalc.app', h1: 'Tutti i calcolatori', kicker: 'Indice degli strumenti', intro: 'Tutti i calcolatori di DateCalc.app raggruppati per categoria. Circa 265 strumenti che coprono età, aritmetica delle date, conto alla rovescia, numeri di settimana, giorni lavorativi e conversione fuso orario.', sectionTitle: 'Per categoria' },
  pl: { title: 'Wszystkie narzędzia — DateCalc.app', h1: 'Wszystkie kalkulatory', kicker: 'Indeks narzędzi', intro: 'Wszystkie kalkulatory na DateCalc.app pogrupowane według kategorii. Około 265 pojedynczych narzędzi obejmujących wiek, arytmetykę dat, odliczanie, numery tygodni, dni robocze i konwersję stref czasowych.', sectionTitle: 'Według kategorii' },
  ja: { title: 'すべてのツール — DateCalc.app', h1: 'すべての計算機', kicker: 'ツール一覧', intro: 'DateCalc.appのすべての計算機をカテゴリー別にまとめました。年齢、日付計算、カウントダウン、週番号、営業日、タイムゾーン変換を網羅する約265のツールがあります。', sectionTitle: 'カテゴリー別' },
  ko: { title: '모든 도구 — DateCalc.app', h1: '모든 계산기', kicker: '도구 인덱스', intro: 'DateCalc.app의 모든 계산기를 카테고리별로 정리했습니다. 나이, 날짜 계산, 카운트다운, 주 번호, 영업일, 시간대 변환을 아우르는 약 265개의 도구가 있습니다.', sectionTitle: '카테고리별' },
  nl: { title: 'Alle tools — DateCalc.app', h1: 'Alle calculators', kicker: 'Tool-index', intro: 'Alle calculators op DateCalc.app, gegroepeerd per categorie. Zo\'n 265 losse tools voor leeftijd, datumberekening, aftellen, weeknummers, werkdagen en tijdzone-conversie.', sectionTitle: 'Per categorie' },
};

const ARTICLES_CONTENT = {
  en: { title: 'All Articles — DateCalc.app', h1: 'All Articles', kicker: 'Articles index', intro: 'Long-form articles and guides across age, calendar systems, week numbers, historical years, AI visibility, and more. Every piece is written by the DateCalc team and kept up to date across 10 languages.', sectionTitle: 'Browse by topic' },
  fr: { title: 'Tous les articles — DateCalc.app', h1: 'Tous les articles', kicker: 'Index des articles', intro: 'Articles de fond et guides sur l\'âge, les systèmes de calendrier, les numéros de semaine, les années historiques, la visibilité IA, et plus encore. Chaque article est rédigé par l\'équipe DateCalc et maintenu à jour dans 10 langues.', sectionTitle: 'Parcourir par thème' },
  es: { title: 'Todos los artículos — DateCalc.app', h1: 'Todos los artículos', kicker: 'Índice de artículos', intro: 'Artículos y guías de fondo sobre edad, sistemas de calendario, números de semana, años históricos, visibilidad en IA y más. Cada pieza está escrita por el equipo de DateCalc y mantenida al día en 10 idiomas.', sectionTitle: 'Por tema' },
  pt: { title: 'Todos os artigos — DateCalc.app', h1: 'Todos os artigos', kicker: 'Índice de artigos', intro: 'Artigos e guias aprofundados sobre idade, sistemas de calendário, números de semana, anos históricos, visibilidade em IA e muito mais. Cada peça é escrita pela equipe DateCalc e mantida atualizada em 10 idiomas.', sectionTitle: 'Por tema' },
  de: { title: 'Alle Artikel — DateCalc.app', h1: 'Alle Artikel', kicker: 'Artikel-Index', intro: 'Ausführliche Artikel und Leitfäden zu Alter, Kalendersystemen, Wochennummern, historischen Jahren, KI-Sichtbarkeit und mehr. Jedes Stück wird vom DateCalc-Team verfasst und in 10 Sprachen aktuell gehalten.', sectionTitle: 'Nach Thema' },
  it: { title: 'Tutti gli articoli — DateCalc.app', h1: 'Tutti gli articoli', kicker: 'Indice degli articoli', intro: 'Articoli approfonditi e guide su età, sistemi di calendario, numeri di settimana, anni storici, visibilità AI e altro ancora. Ogni pezzo è scritto dal team DateCalc e mantenuto aggiornato in 10 lingue.', sectionTitle: 'Per argomento' },
  pl: { title: 'Wszystkie artykuły — DateCalc.app', h1: 'Wszystkie artykuły', kicker: 'Indeks artykułów', intro: 'Długie artykuły i przewodniki dotyczące wieku, systemów kalendarzowych, numerów tygodni, lat historycznych, widoczności w AI i innych tematów. Każdy materiał pisze zespół DateCalc i utrzymuje aktualność w 10 językach.', sectionTitle: 'Według tematu' },
  ja: { title: 'すべての記事 — DateCalc.app', h1: 'すべての記事', kicker: '記事一覧', intro: '年齢、暦システム、週番号、歴史的な年、AI検索での可視性など、幅広いテーマの長文記事とガイドを掲載しています。DateCalcチームが執筆し、10言語で最新の状態を保っています。', sectionTitle: 'トピック別' },
  ko: { title: '모든 기사 — DateCalc.app', h1: '모든 기사', kicker: '기사 인덱스', intro: '나이, 달력 체계, 주 번호, 역사적 연도, AI 가시성 등을 다루는 장문의 기사와 가이드를 제공합니다. 모든 글은 DateCalc 팀이 작성하고 10개 언어로 최신 상태를 유지합니다.', sectionTitle: '주제별' },
  nl: { title: 'Alle artikelen — DateCalc.app', h1: 'Alle artikelen', kicker: 'Artikelen-index', intro: 'Lange artikelen en gidsen over leeftijd, kalendersystemen, weeknummers, historische jaren, AI-zichtbaarheid en meer. Elk stuk is geschreven door het DateCalc-team en wordt in 10 talen up-to-date gehouden.', sectionTitle: 'Per onderwerp' },
};

// ── Category labels for the /tools/ hub ───────────────────
// Mirrors the top-level categories already present in NAV in build.js.
// We re-declare them here instead of importing NAV to avoid a cycle.
const TOOL_CATEGORIES = {
  en: [
    { cat: 'Age',        ids: ['age-calculator', 'chronological-age-calculator', 'baby-age-calculator', 'dog-age-calculator', 'cat-age-calculator'] },
    { cat: 'Date math',  ids: ['days-between-dates', 'date-calculator', 'what-day-is-it-today', 'week-number', 'business-days-calculator'] },
    { cat: 'Countdowns', ids: ['days-until-christmas', 'days-until-new-year', 'days-until-halloween', 'days-until-easter', 'countdown-timer'] },
    { cat: 'World',      ids: ['time-zone-converter'] },
  ],
  fr: [
    { cat: 'Âge',        ids: ['fr/calculateur-age', 'fr/age-chronologique', 'fr/calculateur-age-bebe', 'fr/calculateur-age-chien', 'fr/calculateur-age-chat'] },
    { cat: 'Dates',      ids: ['fr/jours-entre-deux-dates', 'fr/calculateur-date', 'fr/quel-jour-sommes-nous', 'fr/numero-semaine', 'fr/calculateur-jours-ouvrables'] },
    { cat: 'Comptes à rebours', ids: ['fr/jours-avant-noel', 'fr/jours-avant-nouvel-an', 'fr/jours-avant-halloween', 'fr/jours-avant-paques', 'fr/minuteur-compte-a-rebours'] },
    { cat: 'Monde',      ids: ['fr/convertisseur-fuseau-horaire'] },
  ],
  es: [
    { cat: 'Edad',       ids: ['es/calculadora-edad', 'es/edad-cronologica', 'es/calculadora-edad-bebe', 'es/calculadora-edad-perro', 'es/calculadora-edad-gato'] },
    { cat: 'Fechas',     ids: ['es/dias-entre-fechas', 'es/calculadora-fecha', 'es/que-dia-es-hoy', 'es/numero-semana', 'es/calculadora-dias-habiles'] },
    { cat: 'Cuentas regresivas', ids: ['es/dias-para-navidad', 'es/dias-para-ano-nuevo', 'es/dias-para-halloween', 'es/dias-para-pascua', 'es/temporizador-cuenta-regresiva'] },
    { cat: 'Mundo',      ids: ['es/conversor-zona-horaria'] },
  ],
  pt: [
    { cat: 'Idade',      ids: ['pt/calculadora-de-idade', 'pt/idade-cronologica', 'pt/calculadora-idade-bebe', 'pt/calculadora-idade-cachorro', 'pt/calculadora-idade-gato'] },
    { cat: 'Datas',      ids: ['pt/dias-entre-datas', 'pt/calculadora-de-data', 'pt/que-dia-e-hoje', 'pt/numero-semana', 'pt/calculadora-dias-uteis'] },
    { cat: 'Contagens regressivas', ids: ['pt/dias-para-o-natal', 'pt/dias-para-ano-novo', 'pt/dias-para-o-halloween', 'pt/dias-para-a-pascoa', 'pt/temporizador-contagem-regressiva'] },
    { cat: 'Mundo',      ids: ['pt/conversor-fuso-horario'] },
  ],
  de: [
    { cat: 'Alter',      ids: ['de/altersrechner', 'de/chronologisches-alter', 'de/babyalter-rechner', 'de/hundealter-rechner', 'de/katzenalter-rechner'] },
    { cat: 'Daten',      ids: ['de/tage-zwischen-daten', 'de/datumsrechner', 'de/welcher-tag-ist-heute', 'de/kalenderwoche', 'de/werktage-rechner'] },
    { cat: 'Countdowns', ids: ['de/tage-bis-weihnachten', 'de/tage-bis-neujahr', 'de/tage-bis-halloween', 'de/tage-bis-ostern', 'de/countdown-timer'] },
    { cat: 'Welt',       ids: ['de/zeitzonen-umrechner'] },
  ],
  it: [
    { cat: 'Età',        ids: ['it/calcolo-eta', 'it/eta-cronologica', 'it/calcolatore-eta-neonato', 'it/calcolatore-eta-cane', 'it/calcolatore-eta-gatto'] },
    { cat: 'Date',       ids: ['it/giorni-tra-date', 'it/calcolatore-data', 'it/che-giorno-e-oggi', 'it/numero-settimana', 'it/calcolatore-giorni-lavorativi'] },
    { cat: 'Conto alla rovescia', ids: ['it/giorni-a-natale', 'it/giorni-a-capodanno', 'it/giorni-a-halloween', 'it/giorni-a-pasqua', 'it/timer-conto-alla-rovescia'] },
    { cat: 'Mondo',      ids: ['it/convertitore-fuso-orario'] },
  ],
  pl: [
    { cat: 'Wiek',       ids: ['pl/kalkulator-wieku', 'pl/wiek-chronologiczny', 'pl/wiek-niemowlecia', 'pl/wiek-psa', 'pl/wiek-kota'] },
    { cat: 'Daty',       ids: ['pl/dni-miedzy-datami', 'pl/kalkulator-daty', 'pl/jaki-dzis-dzien', 'pl/numer-tygodnia', 'pl/kalkulator-dni-roboczych'] },
    { cat: 'Odliczanie', ids: ['pl/ile-dni-do-bozego-narodzenia', 'pl/ile-dni-do-nowego-roku', 'pl/ile-dni-do-halloween', 'pl/ile-dni-do-wielkanocy', 'pl/minutnik-odliczania'] },
    { cat: 'Świat',      ids: ['pl/konwerter-stref-czasowych'] },
  ],
  ja: [
    { cat: '年齢',       ids: ['ja/nenrei-keisanki', 'ja/seikaku-na-nenrei-no-keisan-hoho', 'ja/akachan-nenrei', 'ja/inu-nenrei', 'ja/neko-nenrei'] },
    { cat: '日付',       ids: ['ja/hizuke-no-hi-su', 'ja/hizuke-keisanki', 'ja/kyo-wa-nan-yobi', 'ja/shu-bango', 'ja/eigyo-nissu-keisanki'] },
    { cat: 'カウントダウン', ids: ['ja/kurisumasu-made', 'ja/shinnen-made', 'ja/harowin-made', 'ja/fukkatsusai-made', 'ja/kauntodaun-taima'] },
    { cat: '世界',       ids: ['ja/taimu-zon-henkanki'] },
  ],
  ko: [
    { cat: '나이',       ids: ['ko/nai-gyesan-gi', 'ko/jeong-hwa-han-na-yi-gyesan-bang-beob', 'ko/agi-nai', 'ko/gae-nai', 'ko/goyang-i-nai'] },
    { cat: '날짜',       ids: ['ko/du-nal-jja-sa-i-il-su-gyesan', 'ko/nal-jja-gyesan-gi', 'ko/o-neul-eun-museun-yo-il', 'ko/ju-beonho', 'ko/yeong-eop-il-gyesan-gi'] },
    { cat: '카운트다운', ids: ['ko/keu-ri-seu-ma-seu-kkaji', 'ko/sae-hae-kkaji', 'ko/hallowin-kkaji', 'ko/buhwarjeol-kkaji', 'ko/kaunteu-daun-taimeo'] },
    { cat: '세계',       ids: ['ko/taim-jon-byeonhwangi'] },
  ],
  nl: [
    { cat: 'Leeftijd',   ids: ['nl/leeftijdscalculator', 'nl/chronologische-leeftijd', 'nl/baby-leeftijd', 'nl/hondenleeftijd', 'nl/kattenleeftijd'] },
    { cat: 'Data',       ids: ['nl/dagen-tussen-data', 'nl/datumcalculator', 'nl/welke-dag-is-het-vandaag', 'nl/weeknummer', 'nl/werkdagen-calculator'] },
    { cat: 'Aftellen',   ids: ['nl/dagen-tot-kerstmis', 'nl/dagen-tot-nieuwjaar', 'nl/dagen-tot-halloween', 'nl/dagen-tot-pasen', 'nl/aftelklok'] },
    { cat: 'Wereld',     ids: ['nl/tijdzone-converter'] },
  ],
};

// Build a label from a slug — simple fallback: last path segment → Title Case
function labelFromSlug(slug) {
  const parts = slug.split('/');
  const last = parts[parts.length - 1];
  return last.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

// ── Main nav HTML (shared by every layout) ────────────────
function mainNavHTML(lang, currentPath) {
  const L = NAV_LABELS[lang];
  const toolsHref    = `/${TOOLS_SLUGS[lang]}/`;
  const articlesHref = `/${ARTICLES_SLUGS[lang]}/`;
  const yearsHref    = `/${BIRTH_YEARS_SLUGS[lang]}/`;
  const aboutHref    = `/${ABOUT_SLUGS[lang]}/`;
  const isActive = href => (currentPath === href ? ' aria-current="page"' : '');
  return `<nav class="main-nav" aria-label="Main">
  <div class="main-nav-inner">
    <a href="${toolsHref}"${isActive(toolsHref)}>${L.tools}</a>
    <a href="${articlesHref}"${isActive(articlesHref)}>${L.articles}</a>
    <a href="${yearsHref}"${isActive(yearsHref)}>${L.years}</a>
    <a href="${aboutHref}"${isActive(aboutHref)}>${L.about}</a>
  </div>
</nav>`;
}

// ── Hub page data for renderArticleLayout ─────────────────
function buildToolsHub(lang, nav) {
  const t = TOOLS_CONTENT[lang];
  const cats = TOOL_CATEGORIES[lang] || TOOL_CATEGORIES.en;
  const navGroupByLabel = nav && nav[lang] ? Object.fromEntries(nav[lang].map(g => [g.cat, g])) : {};
  const sectionsBody = cats.map(c => {
    const items = c.ids.map(slug => {
      const cleanSlug = slug.replace(/^\/+|\/+$/g, '');
      const href = cleanSlug === '' ? '/' : `/${cleanSlug}/`;
      // Try to find a nicer label via NAV (by href match); otherwise fallback to slug title case.
      let label = null;
      for (const g of (nav && nav[lang]) || []) {
        const found = (g.items || []).find(i => i.href === href);
        if (found) { label = found.label; break; }
      }
      return `<li><a href="${href}">${label || labelFromSlug(cleanSlug)}</a></li>`;
    }).join('');
    return `<section><h2>${c.cat}</h2><ul class="hub-list">${items}</ul></section>`;
  }).join('\n');

  // Return data shaped for renderArticleLayout
  const hreflang = {};
  for (const l of LANGS) hreflang[l] = `/${TOOLS_SLUGS[l]}/`;
  return {
    title: t.title,
    metaDesc: t.intro.slice(0, 160),
    canonical: `/${TOOLS_SLUGS[lang]}/`,
    hreflang,
    kicker: t.kicker,
    h1: t.h1,
    intro: `<p>${t.intro}</p>`,
    sections: [{ h2: t.sectionTitle, body: sectionsBody }],
    faqs: null, pillar: null, related: null,
  };
}

function buildArticlesHub(lang, articles, bornInSlugFn, eventSlugFn) {
  const t = ARTICLES_CONTENT[lang];
  const clusterTopicLabel = {
    en: { age: 'Age', born: 'Birth year', days: 'Date math', reference: 'Reference', ai: 'AI visibility', week: 'Week numbers', whatday: 'What day is it', christmas: 'Christmas' },
    fr: { age: 'Âge', born: 'Année de naissance', days: 'Dates', reference: 'Références', ai: 'Visibilité IA', week: 'Numéros de semaine', whatday: 'Quel jour', christmas: 'Noël' },
    es: { age: 'Edad', born: 'Año de nacimiento', days: 'Fechas', reference: 'Referencia', ai: 'Visibilidad en IA', week: 'Números de semana', whatday: 'Qué día es', christmas: 'Navidad' },
    pt: { age: 'Idade', born: 'Ano de nascimento', days: 'Datas', reference: 'Referência', ai: 'Visibilidade em IA', week: 'Números de semana', whatday: 'Que dia é', christmas: 'Natal' },
    de: { age: 'Alter', born: 'Geburtsjahr', days: 'Daten', reference: 'Referenz', ai: 'KI-Sichtbarkeit', week: 'Wochennummern', whatday: 'Welcher Tag', christmas: 'Weihnachten' },
    it: { age: 'Età', born: 'Anno di nascita', days: 'Date', reference: 'Riferimento', ai: 'Visibilità AI', week: 'Numeri di settimana', whatday: 'Che giorno è', christmas: 'Natale' },
    pl: { age: 'Wiek', born: 'Rok urodzenia', days: 'Daty', reference: 'Referencje', ai: 'Widoczność w AI', week: 'Numery tygodni', whatday: 'Jaki dzień', christmas: 'Boże Narodzenie' },
    ja: { age: '年齢', born: '生まれ年', days: '日付', reference: 'リファレンス', ai: 'AI可視性', week: '週番号', whatday: '曜日', christmas: 'クリスマス' },
    ko: { age: '나이', born: '출생 연도', days: '날짜', reference: '참고', ai: 'AI 가시성', week: '주 번호', whatday: '요일', christmas: '크리스마스' },
    nl: { age: 'Leeftijd', born: 'Geboortejaar', days: 'Datums', reference: 'Referentie', ai: 'AI-zichtbaarheid', week: 'Weeknummers', whatday: 'Welke dag', christmas: 'Kerstmis' },
  };
  const clusterFileToKey = {
    'src/articles/age-cluster.js':           'age',
    'src/articles/born-in-cluster.js':       'born',
    'src/articles/days-cluster.js':          'days',
    'src/articles/reference-cluster.js':     'reference',
    'src/articles/ai-visibility-cluster.js': 'ai',
    'src/articles/week-number-cluster.js':   'week',
    'src/articles/what-day-cluster.js':      'whatday',
    'src/articles/christmas-cluster.js':     'christmas',
  };
  const topicLabel = clusterTopicLabel[lang];

  // Group articles by cluster
  const byCluster = articles.map(cluster => {
    const key = clusterFileToKey[cluster.__sourceFile] || 'reference';
    const topicName = topicLabel[key] || key;
    const links = cluster.pages.map(page => {
      const slug = page.slugs[lang];
      if (!slug) return null;
      const href = `/${slug}/`;
      // Try to find h1 via render (we only need a label, not full render — use slug as fallback)
      return `<li><a href="${href}">${labelFromSlug(slug)}</a></li>`;
    }).filter(Boolean).join('');
    return links ? `<section><h2>${topicName}</h2><ul class="hub-list">${links}</ul></section>` : '';
  }).filter(Boolean).join('\n');

  const hreflang = {};
  for (const l of LANGS) hreflang[l] = `/${ARTICLES_SLUGS[l]}/`;
  return {
    title: t.title,
    metaDesc: t.intro.slice(0, 160),
    canonical: `/${ARTICLES_SLUGS[lang]}/`,
    hreflang,
    kicker: t.kicker,
    h1: t.h1,
    intro: `<p>${t.intro}</p>`,
    sections: [{ h2: t.sectionTitle, body: byCluster }],
    faqs: null, pillar: null, related: null,
  };
}

// Sitemap groups for the 2 new hubs (each = 10-lang cross-linked group)
function sitemapGroups() {
  const t = LANGS.map(l => ({ lang: l, path: `/${TOOLS_SLUGS[l]}/` }));
  const a = LANGS.map(l => ({ lang: l, path: `/${ARTICLES_SLUGS[l]}/` }));
  return [t, a];
}

// Minimal CSS for main nav — injected once into the head
const NAV_CSS = `
<style>
.main-nav{border-top:1px solid #ddd;border-bottom:1px solid #ddd;background:#fcfcfc}
.main-nav-inner{max-width:900px;margin:0 auto;padding:.55rem 1.5rem;display:flex;gap:1.4rem;flex-wrap:wrap;justify-content:center;font-family:'Space Mono',monospace;font-size:.86rem}
.main-nav a{color:#111;text-decoration:none;padding:.1rem 0;border-bottom:1px solid transparent;transition:border-color .12s,color .12s}
.main-nav a:hover{border-bottom-color:var(--accent);color:var(--accent)}
.main-nav a[aria-current="page"]{color:var(--accent);border-bottom-color:var(--accent);font-style:italic}
@media(max-width:600px){.main-nav-inner{gap:.9rem;font-size:.78rem;padding:.45rem .8rem}}
.hub-list{list-style:none;padding:0;margin:.5rem 0 1.2rem;display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:.3rem .8rem}
.hub-list li{border-bottom:1px dotted #e5e5e5;padding:.25rem 0}
.hub-list a{color:#111;text-decoration:none}
.hub-list a:hover{color:var(--accent)}
</style>`;

module.exports = {
  LANGS,
  TOOLS_SLUGS,
  ARTICLES_SLUGS,
  NAV_LABELS,
  mainNavHTML,
  buildToolsHub,
  buildArticlesHub,
  sitemapGroups,
  NAV_CSS,
};
