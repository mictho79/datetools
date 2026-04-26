const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const tools = [
  require('./src/tools/homepage'),
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
  require('./src/tools/year-events'),
];

// ── ARTICLE CLUSTERS ──────────────────────────────────────
// Each cluster pairs its module with its source file path so the sitemap can
// read a per-cluster mtime for <lastmod>.
const ARTICLE_CLUSTER_FILES = [
  'src/articles/age-cluster.js',
  'src/articles/born-in-cluster.js',
  'src/articles/days-cluster.js',
  'src/articles/reference-cluster.js',
  'src/articles/ai-visibility-cluster.js',
  'src/articles/week-number-cluster.js',
  'src/articles/what-day-cluster.js',
  'src/articles/christmas-cluster.js',
];
const articles = ARTICLE_CLUSTER_FILES.map(f => {
  const mod = require('./' + f);
  mod.__sourceFile = f;
  return mod;
});

const LANGS = ['en', 'fr', 'es', 'pt', 'de', 'it', 'pl', 'ja', 'ko', 'nl'];
// Languages excluded from indexing after the April 2026 HCU-style demotion.
// Pages still build (so existing links don't 404), but they get noindex,
// are dropped from the sitemap, and removed from hreflang clusters.
const NOINDEX_LANGS = new Set(['ja', 'ko', 'nl']);
const INDEXABLE_LANGS = LANGS.filter(l => !NOINDEX_LANGS.has(l));
const DIST = path.join(__dirname, 'dist');

// Hub pages (birth-years, year-in-history) — see src/tools/hubs.js
const hubs = require('./src/tools/hubs');

// Main navigation + /tools/ and /articles/ hubs — see src/tools/nav-hubs.js
const navHubs = require('./src/tools/nav-hubs');

// Author pages (/authors/mike/) + article author signature + footer tagline
const authors = require('./src/tools/authors');

// Shareable age-card page (/my-age/?dob=YYYY-MM-DD)
const myAge = require('./src/tools/my-age');

// Default dates for Article JSON-LD (datePublished / dateModified).
// Individual cluster pages can override via data.datePublished / data.dateModified.
const ARTICLE_DEFAULT_PUBLISHED = '2026-04-01';
const ARTICLE_DEFAULT_MODIFIED  = new Date().toISOString().split('T')[0];

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
    { cat: 'Year in Review', items: [
      { label: 'What Happened in 2000', href: '/what-happened-in-2000/' },
      { label: 'What Happened in 1990', href: '/what-happened-in-1990/' },
      { label: 'What Happened in 1980', href: '/what-happened-in-1980/' },
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
    { cat: 'Rétrospective', items: [
      { label: 'Que s\'est-il passé en 2000', href: '/fr/que-s-est-il-passe-en-2000/' },
      { label: 'Que s\'est-il passé en 1990', href: '/fr/que-s-est-il-passe-en-1990/' },
      { label: 'Que s\'est-il passé en 1980', href: '/fr/que-s-est-il-passe-en-1980/' },
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
    { cat: 'Resumen del año', items: [
      { label: '¿Qué pasó en 2000?', href: '/es/que-paso-en-2000/' },
      { label: '¿Qué pasó en 1990?', href: '/es/que-paso-en-1990/' },
      { label: '¿Qué pasó en 1980?', href: '/es/que-paso-en-1980/' },
    ]},
    { cat: 'Calendarios', items: [
      { label: 'Semanas 2025', href: '/es/numero-semana/2025/' },
      { label: 'Semanas 2026', href: '/es/numero-semana/2026/' },
      { label: 'Semanas 2027', href: '/es/numero-semana/2027/' },
    ]},
  ],
  pt: [
    { cat: 'Idade', items: [
      { label: 'Calculadora de Idade', href: '/pt/calculadora-de-idade/' },
      { label: 'Idade Cronológica', href: '/pt/idade-cronologica/' },
      { label: 'Idade do Bebê', href: '/pt/calculadora-idade-bebe/' },
      { label: 'Idade do Cachorro', href: '/pt/calculadora-idade-cachorro/' },
      { label: 'Idade do Gato', href: '/pt/calculadora-idade-gato/' },
    ]},
    { cat: 'Datas', items: [
      { label: 'Dias Entre Datas', href: '/pt/dias-entre-datas/' },
      { label: 'Calculadora de Data', href: '/pt/calculadora-de-data/' },
      { label: 'Que Dia É Hoje', href: '/pt/que-dia-e-hoje/' },
      { label: 'Número da Semana', href: '/pt/numero-da-semana/' },
      { label: 'Dias Úteis', href: '/pt/calculadora-dias-uteis/' },
    ]},
    { cat: 'Contagens', items: [
      { label: 'Natal', href: '/pt/dias-para-o-natal/' },
      { label: 'Ano Novo', href: '/pt/dias-para-ano-novo/' },
      { label: 'Halloween', href: '/pt/dias-para-o-halloween/' },
      { label: 'Páscoa', href: '/pt/dias-para-a-pascoa/' },
      { label: 'Temporizador', href: '/pt/temporizador-regressivo/' },
    ]},
    { cat: 'Mundo', items: [
      { label: 'Fuso Horário', href: '/pt/conversor-fuso-horario/' },
    ]},
    { cat: 'Nascido em', items: [
      { label: 'Nascido em 1990', href: '/pt/nascido-em-1990/' },
      { label: 'Nascido em 1980', href: '/pt/nascido-em-1980/' },
      { label: 'Nascido em 2000', href: '/pt/nascido-em-2000/' },
    ]},
    { cat: 'Retrospectiva', items: [
      { label: 'O que aconteceu em 2000', href: '/pt/o-que-aconteceu-em-2000/' },
      { label: 'O que aconteceu em 1990', href: '/pt/o-que-aconteceu-em-1990/' },
      { label: 'O que aconteceu em 1980', href: '/pt/o-que-aconteceu-em-1980/' },
    ]},
    { cat: 'Calendários', items: [
      { label: 'Semanas 2025', href: '/pt/numero-da-semana/2025/' },
      { label: 'Semanas 2026', href: '/pt/numero-da-semana/2026/' },
      { label: 'Semanas 2027', href: '/pt/numero-da-semana/2027/' },
    ]},
  ],
  de: [
    { cat: 'Alter', items: [
      { label: 'Altersrechner', href: '/de/altersrechner/' },
      { label: 'Chronologisches Alter', href: '/de/chronologisches-alter/' },
      { label: 'Baby-Altersrechner', href: '/de/baby-alter-rechner/' },
      { label: 'Hund Altersrechner', href: '/de/hund-alter-rechner/' },
      { label: 'Katze Altersrechner', href: '/de/katze-alter-rechner/' },
    ]},
    { cat: 'Daten', items: [
      { label: 'Tage zwischen Daten', href: '/de/tage-zwischen-datumen/' },
      { label: 'Datumsrechner', href: '/de/datumsrechner/' },
      { label: 'Welcher Tag ist heute', href: '/de/welcher-tag-ist-heute/' },
      { label: 'Kalenderwoche', href: '/de/kalenderwoche/' },
      { label: 'Arbeitstage Rechner', href: '/de/arbeitstage-rechner/' },
    ]},
    { cat: 'Countdowns', items: [
      { label: 'Weihnachten', href: '/de/tage-bis-weihnachten/' },
      { label: 'Neujahr', href: '/de/tage-bis-neujahr/' },
      { label: 'Halloween', href: '/de/tage-bis-halloween/' },
      { label: 'Ostern', href: '/de/tage-bis-ostern/' },
      { label: 'Countdown-Timer', href: '/de/countdown-timer/' },
    ]},
    { cat: 'Welt', items: [
      { label: 'Zeitzonen-Umrechner', href: '/de/zeitzonen-umrechner/' },
    ]},
    { cat: 'Geboren in', items: [
      { label: 'Geboren 1990', href: '/de/geboren-in-1990/' },
      { label: 'Geboren 1980', href: '/de/geboren-in-1980/' },
      { label: 'Geboren 2000', href: '/de/geboren-in-2000/' },
    ]},
    { cat: 'Jahresrückblick', items: [
      { label: 'Was geschah 2000', href: '/de/was-geschah-2000/' },
      { label: 'Was geschah 1990', href: '/de/was-geschah-1990/' },
      { label: 'Was geschah 1980', href: '/de/was-geschah-1980/' },
    ]},
    { cat: 'Kalender', items: [
      { label: 'KW 2025', href: '/de/kalenderwoche/2025/' },
      { label: 'KW 2026', href: '/de/kalenderwoche/2026/' },
      { label: 'KW 2027', href: '/de/kalenderwoche/2027/' },
    ]},
  ],
  it: [
    { cat: 'Età', items: [
      { label: 'Calcolo Età', href: '/it/calcolo-eta/' },
      { label: 'Età Cronologica', href: '/it/eta-cronologica/' },
      { label: 'Età Neonato', href: '/it/calcolatore-eta-neonato/' },
      { label: 'Età del Cane', href: '/it/calcolatore-eta-cane/' },
      { label: 'Età del Gatto', href: '/it/calcolatore-eta-gatto/' },
    ]},
    { cat: 'Date', items: [
      { label: 'Giorni Tra Date', href: '/it/giorni-tra-date/' },
      { label: 'Calcolatore Data', href: '/it/calcolatore-data/' },
      { label: 'Che Giorno È Oggi', href: '/it/che-giorno-e-oggi/' },
      { label: 'Numero Settimana', href: '/it/numero-settimana/' },
      { label: 'Giorni Lavorativi', href: '/it/calcolatore-giorni-lavorativi/' },
    ]},
    { cat: 'Countdown', items: [
      { label: 'Natale', href: '/it/giorni-a-natale/' },
      { label: 'Capodanno', href: '/it/giorni-a-capodanno/' },
      { label: 'Halloween', href: '/it/giorni-a-halloween/' },
      { label: 'Pasqua', href: '/it/giorni-a-pasqua/' },
      { label: 'Conto alla Rovescia', href: '/it/conto-alla-rovescia/' },
    ]},
    { cat: 'Mondo', items: [
      { label: 'Fuso Orario', href: '/it/convertitore-fuso-orario/' },
    ]},
    { cat: 'Nato nel', items: [
      { label: 'Nato nel 1990', href: '/it/nato-nel-1990/' },
      { label: 'Nato nel 1980', href: '/it/nato-nel-1980/' },
      { label: 'Nato nel 2000', href: '/it/nato-nel-2000/' },
    ]},
    { cat: 'Retrospettiva', items: [
      { label: 'Cosa è successo nel 2000', href: '/it/cosa-e-successo-nel-2000/' },
      { label: 'Cosa è successo nel 1990', href: '/it/cosa-e-successo-nel-1990/' },
      { label: 'Cosa è successo nel 1980', href: '/it/cosa-e-successo-nel-1980/' },
    ]},
    { cat: 'Calendari', items: [
      { label: 'Settimane 2025', href: '/it/numero-settimana/2025/' },
      { label: 'Settimane 2026', href: '/it/numero-settimana/2026/' },
      { label: 'Settimane 2027', href: '/it/numero-settimana/2027/' },
    ]},
  ],
  pl: [
    { cat: 'Wiek', items: [
      { label: 'Kalkulator Wieku', href: '/pl/kalkulator-wieku/' },
      { label: 'Wiek Chronologiczny', href: '/pl/wiek-chronologiczny/' },
      { label: 'Wiek Niemowlęcia', href: '/pl/wiek-niemowlecia/' },
      { label: 'Wiek Psa', href: '/pl/wiek-psa/' },
      { label: 'Wiek Kota', href: '/pl/wiek-kota/' },
    ]},
    { cat: 'Daty', items: [
      { label: 'Dni Między Datami', href: '/pl/dni-miedzy-datami/' },
      { label: 'Kalkulator Daty', href: '/pl/kalkulator-daty/' },
      { label: 'Jaki Dziś Dzień', href: '/pl/jaki-dzis-dzien/' },
      { label: 'Numer Tygodnia', href: '/pl/numer-tygodnia/' },
      { label: 'Dni Robocze', href: '/pl/kalkulator-dni-roboczych/' },
    ]},
    { cat: 'Odliczanie', items: [
      { label: 'Boże Narodzenie', href: '/pl/ile-dni-do-bozego-narodzenia/' },
      { label: 'Nowy Rok', href: '/pl/ile-dni-do-nowego-roku/' },
      { label: 'Halloween', href: '/pl/ile-dni-do-halloween/' },
      { label: 'Wielkanoc', href: '/pl/ile-dni-do-wielkanocy/' },
      { label: 'Odliczanie', href: '/pl/odliczanie/' },
    ]},
    { cat: 'Świat', items: [
      { label: 'Strefy Czasowe', href: '/pl/przelicznik-stref-czasowych/' },
    ]},
    { cat: 'Urodzony w', items: [
      { label: 'Urodzony w 1990', href: '/pl/urodzony-w-1990/' },
      { label: 'Urodzony w 1980', href: '/pl/urodzony-w-1980/' },
      { label: 'Urodzony w 2000', href: '/pl/urodzony-w-2000/' },
    ]},
    { cat: 'Podsumowanie', items: [
      { label: 'Co się wydarzyło w 2000', href: '/pl/co-sie-wydarzylo-w-2000/' },
      { label: 'Co się wydarzyło w 1990', href: '/pl/co-sie-wydarzylo-w-1990/' },
      { label: 'Co się wydarzyło w 1980', href: '/pl/co-sie-wydarzylo-w-1980/' },
    ]},
    { cat: 'Kalendarze', items: [
      { label: 'Tygodnie 2025', href: '/pl/numer-tygodnia/2025/' },
      { label: 'Tygodnie 2026', href: '/pl/numer-tygodnia/2026/' },
      { label: 'Tygodnie 2027', href: '/pl/numer-tygodnia/2027/' },
    ]},
  ],
  ja: [
    { cat: '年齢', items: [
      { label: '年齢計算機', href: '/ja/nenrei-keisanki/' },
      { label: '時系列年齢', href: '/ja/jikan-nenrei/' },
      { label: '赤ちゃん年齢', href: '/ja/akachan-nenrei/' },
      { label: '犬の年齢', href: '/ja/inu-nenrei/' },
      { label: '猫の年齢', href: '/ja/neko-nenrei/' },
    ]},
    { cat: '日付', items: [
      { label: '日付の間の日数', href: '/ja/hidzuke-no-nissuu/' },
      { label: '日付計算機', href: '/ja/hidzuke-keisanki/' },
      { label: '今日は何日', href: '/ja/kyou-wa-nannichi/' },
      { label: '週番号', href: '/ja/shuu-bangou/' },
      { label: '営業日計算機', href: '/ja/eigyounichu/' },
    ]},
    { cat: 'カウントダウン', items: [
      { label: 'クリスマスまで', href: '/ja/kurisumasu-made/' },
      { label: '新年まで', href: '/ja/shinnen-made/' },
      { label: 'ハロウィンまで', href: '/ja/harouin-made/' },
      { label: 'イースターまで', href: '/ja/iisutaa-made/' },
      { label: 'カウントダウン', href: '/ja/kauntodaun/' },
    ]},
    { cat: '世界', items: [
      { label: 'タイムゾーン変換', href: '/ja/taimuzon-henkan/' },
    ]},
    { cat: '生まれ年', items: [
      { label: '1990年生まれ', href: '/ja/umareta-1990/' },
      { label: '1980年生まれ', href: '/ja/umareta-1980/' },
      { label: '2000年生まれ', href: '/ja/umareta-2000/' },
    ]},
    { cat: '年間レビュー', items: [
      { label: '2000年に何があった', href: '/ja/nani-ga-okita-2000/' },
      { label: '1990年に何があった', href: '/ja/nani-ga-okita-1990/' },
      { label: '1980年に何があった', href: '/ja/nani-ga-okita-1980/' },
    ]},
    { cat: 'カレンダー', items: [
      { label: '2025年週番号', href: '/ja/shuu-bangou/2025/' },
      { label: '2026年週番号', href: '/ja/shuu-bangou/2026/' },
      { label: '2027年週番号', href: '/ja/shuu-bangou/2027/' },
    ]},
  ],
  ko: [
    { cat: '나이', items: [
      { label: '나이 계산기', href: '/ko/nai-gyesan-gi/' },
      { label: '시간 나이', href: '/ko/sigan-nai/' },
      { label: '아기 나이', href: '/ko/agi-nai/' },
      { label: '강아지 나이', href: '/ko/gae-nai/' },
      { label: '고양이 나이', href: '/ko/goyang-i-nai/' },
    ]},
    { cat: '날짜', items: [
      { label: '날짜 사이의 일수', href: '/ko/nal-jja-sayi/' },
      { label: '날짜 계산기', href: '/ko/nal-jja-gyesan-gi/' },
      { label: '오늘은 무슨 요일', href: '/ko/oneul-museun-yoil/' },
      { label: '주 번호', href: '/ko/ju-beonho/' },
      { label: '영업일 계산기', href: '/ko/yeongeopil-gyesan-gi/' },
    ]},
    { cat: '카운트다운', items: [
      { label: '크리스마스까지', href: '/ko/keulliseumaseu-kkaji/' },
      { label: '새해까지', href: '/ko/saehae-kkaji/' },
      { label: '할로윈까지', href: '/ko/hallowin-kkaji/' },
      { label: '부활절까지', href: '/ko/buhwarjeol-kkaji/' },
      { label: '카운트다운', href: '/ko/kaunteu-daun/' },
    ]},
    { cat: '세계', items: [
      { label: '시간대 변환기', href: '/ko/sigandag-byeonhwan/' },
    ]},
    { cat: '태어난 해', items: [
      { label: '1990년생', href: '/ko/taeeona-1990/' },
      { label: '1980년생', href: '/ko/taeeona-1980/' },
      { label: '2000년생', href: '/ko/taeeona-2000/' },
    ]},
    { cat: '연간 리뷰', items: [
      { label: '2000년에 무슨 일이', href: '/ko/museun-il-i-2000/' },
      { label: '1990년에 무슨 일이', href: '/ko/museun-il-i-1990/' },
      { label: '1980년에 무슨 일이', href: '/ko/museun-il-i-1980/' },
    ]},
    { cat: '달력', items: [
      { label: '2025년 주 번호', href: '/ko/ju-beonho/2025/' },
      { label: '2026년 주 번호', href: '/ko/ju-beonho/2026/' },
      { label: '2027년 주 번호', href: '/ko/ju-beonho/2027/' },
    ]},
  ],
  nl: [
    { cat: 'Leeftijd', items: [
      { label: 'Leeftijdscalculator', href: '/nl/leeftijdscalculator/' },
      { label: 'Chronologische Leeftijd', href: '/nl/chronologische-leeftijd/' },
      { label: 'Baby Leeftijd', href: '/nl/baby-leeftijd/' },
      { label: 'Hond Leeftijd', href: '/nl/hond-leeftijd/' },
      { label: 'Kat Leeftijd', href: '/nl/kat-leeftijd/' },
    ]},
    { cat: 'Datums', items: [
      { label: 'Dagen Tussen Datums', href: '/nl/dagen-tussen-datums/' },
      { label: 'Datumcalculator', href: '/nl/datum-calculator/' },
      { label: 'Welke Dag Is Het', href: '/nl/welke-dag-is-het/' },
      { label: 'Weeknummer', href: '/nl/weeknummer/' },
      { label: 'Werkdagen Calculator', href: '/nl/werkdagen-calculator/' },
    ]},
    { cat: 'Aftellen', items: [
      { label: 'Kerst', href: '/nl/dagen-tot-kerst/' },
      { label: 'Nieuwjaar', href: '/nl/dagen-tot-nieuwjaar/' },
      { label: 'Halloween', href: '/nl/dagen-tot-halloween/' },
      { label: 'Pasen', href: '/nl/dagen-tot-pasen/' },
      { label: 'Afteltimer', href: '/nl/aftellen/' },
    ]},
    { cat: 'Wereld', items: [
      { label: 'Tijdzone Omzetter', href: '/nl/tijdzone-omzetter/' },
    ]},
    { cat: 'Geboren in', items: [
      { label: 'Geboren in 1990', href: '/nl/geboren-in-1990/' },
      { label: 'Geboren in 1980', href: '/nl/geboren-in-1980/' },
      { label: 'Geboren in 2000', href: '/nl/geboren-in-2000/' },
    ]},
    { cat: 'Terugblik', items: [
      { label: 'Wat gebeurde er in 2000', href: '/nl/wat-gebeurde-er-in-2000/' },
      { label: 'Wat gebeurde er in 1990', href: '/nl/wat-gebeurde-er-in-1990/' },
      { label: 'Wat gebeurde er in 1980', href: '/nl/wat-gebeurde-er-in-1980/' },
    ]},
    { cat: 'Kalenders', items: [
      { label: 'Weeknummers 2025', href: '/nl/weeknummer/2025/' },
      { label: 'Weeknummers 2026', href: '/nl/weeknummer/2026/' },
      { label: 'Weeknummers 2027', href: '/nl/weeknummer/2027/' },
    ]},
  ],
};

const FOOTER = {
  en: 'Free online date &amp; time calculators',
  fr: 'Calculateurs de date et d\'heure gratuits en ligne',
  es: 'Calculadoras de fecha y hora gratuitas en línea',
  pt: 'Calculadoras de data e hora gratuitas online',
  de: 'Kostenlose Online-Datums- und Zeitrechner',
  it: 'Calcolatori di data e ora gratuiti online',
  pl: 'Bezpłatne kalkulatory dat i czasu online',
  ja: '無料オンライン日付・時刻計算機',
  ko: '무료 온라인 날짜 및 시간 계산기',
  nl: 'Gratis online datum- en tijdcalculatoren',
};

const PRIVACY_HREF = { en: '/privacy/', fr: '/fr/confidentialite/', es: '/es/privacidad/', pt: '/pt/privacidade/', de: '/de/datenschutz/', it: '/it/privacy/', pl: '/pl/prywatnosc/', ja: '/ja/privacy/', ko: '/ko/privacy/', nl: '/nl/privacy/' };
const PRIVACY_LBL  = { en: 'Privacy', fr: 'Confidentialité', es: 'Privacidad', pt: 'Privacidade', de: 'Datenschutz', it: 'Privacy', pl: 'Prywatność', ja: 'プライバシー', ko: '개인정보', nl: 'Privacy' };
const ABOUT_HREF = { en: '/about/', fr: '/fr/a-propos/', es: '/es/acerca-de/', pt: '/pt/sobre/', de: '/de/ueber-uns/', it: '/it/chi-siamo/', pl: '/pl/o-nas/', ja: '/ja/about/', ko: '/ko/about/', nl: '/nl/over-ons/' };
const ABOUT_LBL  = { en: 'About', fr: 'À propos', es: 'Acerca de', pt: 'Sobre', de: 'Über uns', it: 'Chi siamo', pl: 'O nas', ja: 'このサイトについて', ko: '소개', nl: 'Over ons' };

const RELATED_ARTICLES_TITLE = {
  en: 'Related articles',
  fr: 'Articles liés',
  es: 'Artículos relacionados',
  pt: 'Artigos relacionados',
  de: 'Verwandte Artikel',
  it: 'Articoli correlati',
  pl: 'Powiązane artykuły',
  ja: '関連記事',
  ko: '관련 기사',
  nl: 'Gerelateerde artikelen',
};

const TOOL_ARTICLES = {
  '': null,
  'age-calculator': {
    en: [
      { href: '/what-generation-am-i/', label: 'What generation am I?' },
      { href: '/how-to-calculate-age-in-months/', label: 'How to calculate age in months' },
      { href: '/legal-drinking-age-by-country/', label: 'Legal drinking age by country' },
      { href: '/how-to-calculate-exact-age/', label: 'How to calculate your exact age' },
    ],
    fr: [
      { href: '/fr/quelle-generation-suis-je/', label: 'Quelle génération suis-je ?' },
      { href: '/fr/calculer-age-en-mois/', label: 'Calculer son âge en mois' },
      { href: '/fr/age-legal-alcool-par-pays/', label: "Âge légal pour l'alcool par pays" },
      { href: '/fr/comment-calculer-son-age-exact/', label: 'Comment calculer son âge exact' },
    ],
    es: [
      { href: '/es/que-generacion-soy/', label: '¿Qué generación soy?' },
      { href: '/es/calcular-edad-en-meses/', label: 'Calcular edad en meses' },
      { href: '/es/edad-legal-alcohol-por-pais/', label: 'Edad legal para el alcohol por país' },
      { href: '/es/como-calcular-edad-exacta/', label: 'Cómo calcular tu edad exacta' },
    ],
    pt: [
      { href: '/pt/que-geracao-sou/', label: 'Que geração sou eu?' },
      { href: '/pt/calcular-idade-em-meses/', label: 'Calcular idade em meses' },
      { href: '/pt/idade-legal-para-beber-por-pais/', label: 'Idade legal para beber por país' },
      { href: '/pt/como-calcular-idade-exata/', label: 'Como calcular sua idade exata' },
    ],
    de: [
      { href: '/de/welche-generation-bin-ich/', label: 'Welcher Generation gehöre ich an?' },
      { href: '/de/alter-in-monaten-berechnen/', label: 'Alter in Monaten berechnen' },
      { href: '/de/legales-trinkalter-nach-land/', label: 'Legales Trinkalter nach Land' },
      { href: '/de/genaues-alter-berechnen/', label: 'Genaues Alter berechnen' },
    ],
    it: [
      { href: '/it/che-generazione-sono/', label: 'Di che generazione sono?' },
      { href: '/it/calcolare-eta-in-mesi/', label: "Calcolare l'età in mesi" },
      { href: '/it/eta-legale-per-bere-per-paese/', label: 'Età legale per bere per paese' },
      { href: '/it/come-calcolare-eta-esatta/', label: 'Come calcolare la tua età esatta' },
    ],
    pl: [
      { href: '/pl/do-jakiego-pokolenia-naleze/', label: 'Do jakiego pokolenia należę?' },
      { href: '/pl/obliczanie-wieku-w-miesiacach/', label: 'Obliczanie wieku w miesiącach' },
      { href: '/pl/legalny-wiek-do-picia-wedlug-kraju/', label: 'Legalny wiek do picia według kraju' },
      { href: '/pl/jak-obliczyc-dokladny-wiek/', label: 'Jak obliczyć dokładny wiek' },
    ],
    ja: [
      { href: '/ja/watashi-no-sedai-wa/', label: '私の世代は？' },
      { href: '/ja/nenrei-wo-tsuki-de-keisan-suru/', label: '年齢を月で計算する' },
      { href: '/ja/kuni-betsu-legal-drinking-age/', label: '国別の飲酒法定年齢' },
      { href: '/ja/seikaku-na-nenrei-no-keisan-hoho/', label: '正確な年齢の計算方法' },
    ],
    ko: [
      { href: '/ko/nae-sedae-neun/', label: '나의 세대는?' },
      { href: '/ko/nayi-reul-dal-ro-gyesan/', label: '나이를 달로 계산' },
      { href: '/ko/nara-byeol-eumju-heogyong-yeonryeong/', label: '나라별 음주 허용 연령' },
      { href: '/ko/jeong-hwa-han-na-yi-gyesan-bang-beob/', label: '정확한 나이 계산 방법' },
    ],
    nl: [
      { href: '/nl/welke-generatie-ben-ik/', label: 'Welke generatie ben ik?' },
      { href: '/nl/leeftijd-berekenen-in-maanden/', label: 'Leeftijd berekenen in maanden' },
      { href: '/nl/legale-drinkleeftijd-per-land/', label: 'Legale drinkleeftijd per land' },
      { href: '/nl/exacte-leeftijd-berekenen/', label: 'Exacte leeftijd berekenen' },
    ],
  },
  'days-between-dates': {
    en: [
      { href: '/how-many-days-in-each-month/', label: 'How many days in each month?' },
      { href: '/business-days-vs-calendar-days/', label: 'Business days vs calendar days' },
      { href: '/how-many-weeks-in-a-year/', label: 'How many weeks in a year?' },
      { href: '/how-to-calculate-days-between-dates/', label: 'How to calculate days between dates' },
    ],
    fr: [
      { href: '/fr/combien-de-jours-par-mois/', label: 'Combien de jours par mois ?' },
      { href: '/fr/jours-ouvrables-vs-jours-calendaires/', label: 'Jours ouvrables vs calendaires' },
      { href: '/fr/combien-de-semaines-dans-une-annee/', label: 'Combien de semaines dans une année ?' },
      { href: '/fr/comment-calculer-jours-entre-deux-dates/', label: 'Comment calculer les jours entre deux dates' },
    ],
    es: [
      { href: '/es/cuantos-dias-tiene-cada-mes/', label: '¿Cuántos días tiene cada mes?' },
      { href: '/es/dias-habiles-vs-dias-calendario/', label: 'Días hábiles vs días calendario' },
      { href: '/es/cuantas-semanas-tiene-un-ano/', label: '¿Cuántas semanas tiene un año?' },
      { href: '/es/como-calcular-dias-entre-dos-fechas/', label: 'Cómo calcular los días entre dos fechas' },
    ],
    pt: [
      { href: '/pt/quantos-dias-tem-cada-mes/', label: 'Quantos dias tem cada mês?' },
      { href: '/pt/dias-uteis-vs-dias-corridos/', label: 'Dias úteis vs dias corridos' },
      { href: '/pt/quantas-semanas-tem-um-ano/', label: 'Quantas semanas tem um ano?' },
      { href: '/pt/como-calcular-dias-entre-duas-datas/', label: 'Como calcular os dias entre duas datas' },
    ],
    de: [
      { href: '/de/wie-viele-tage-hat-jeder-monat/', label: 'Wie viele Tage hat jeder Monat?' },
      { href: '/de/werktage-vs-kalendertage/', label: 'Werktage vs. Kalendertage' },
      { href: '/de/wie-viele-wochen-hat-ein-jahr/', label: 'Wie viele Wochen hat ein Jahr?' },
      { href: '/de/tage-zwischen-zwei-daten-berechnen/', label: 'Tage zwischen zwei Daten berechnen' },
    ],
    it: [
      { href: '/it/quanti-giorni-ha-ogni-mese/', label: 'Quanti giorni ha ogni mese?' },
      { href: '/it/giorni-lavorativi-vs-giorni-calendario/', label: 'Giorni lavorativi vs giorni calendario' },
      { href: '/it/quante-settimane-ha-un-anno/', label: 'Quante settimane ha un anno?' },
      { href: '/it/come-calcolare-giorni-tra-due-date/', label: 'Come calcolare i giorni tra due date' },
    ],
    pl: [
      { href: '/pl/ile-dni-ma-kazdy-miesiac/', label: 'Ile dni ma każdy miesiąc?' },
      { href: '/pl/dni-robocze-vs-dni-kalendarzowe/', label: 'Dni robocze vs dni kalendarzowe' },
      { href: '/pl/ile-tygodni-ma-rok/', label: 'Ile tygodni ma rok?' },
      { href: '/pl/jak-obliczyc-dni-miedzy-datami/', label: 'Jak obliczyć dni między datami' },
    ],
    ja: [
      { href: '/ja/tsuki-goto-no-nichi-su/', label: '月ごとの日数' },
      { href: '/ja/eigyo-bi-vs-karendar-bi/', label: '営業日 vs カレンダー日' },
      { href: '/ja/ichi-nen-no-shu-su/', label: '1年の週数' },
      { href: '/ja/futari-no-hi-zuke-no-aida-no-hi-su/', label: '2つの日付の間の日数' },
    ],
    ko: [
      { href: '/ko/wol-byeol-il-su/', label: '월별 일수' },
      { href: '/ko/yeong-eop-il-vs-dal-ryeok-il/', label: '영업일 vs 달력일' },
      { href: '/ko/il-nyeon-ui-ju-su/', label: '1년의 주수' },
      { href: '/ko/du-nal-jja-sa-i-il-su-gyesan/', label: '두 날짜 사이 일수 계산' },
    ],
    nl: [
      { href: '/nl/hoeveel-dagen-heeft-elke-maand/', label: 'Hoeveel dagen heeft elke maand?' },
      { href: '/nl/werkdagen-vs-kalenderdagen/', label: 'Werkdagen vs kalenderdagen' },
      { href: '/nl/hoeveel-weken-heeft-een-jaar/', label: 'Hoeveel weken heeft een jaar?' },
      { href: '/nl/dagen-berekenen-tussen-twee-datums/', label: 'Dagen berekenen tussen twee datums' },
    ],
  },
  'week-number': {
    en: [
      { href: '/iso-week-number-explained/', label: 'ISO week number explained' },
      { href: '/week-numbers-2025-calendar/', label: 'Week numbers 2025 calendar' },
      { href: '/what-week-number-is-it/', label: 'What week number is it?' },
    ],
    fr: [
      { href: '/fr/explication-numero-semaine-iso/', label: 'Numéro de semaine ISO expliqué' },
      { href: '/fr/calendrier-numeros-semaine-2025/', label: 'Numéros de semaine 2025' },
      { href: '/fr/quel-est-le-numero-de-semaine/', label: 'Quel est le numéro de semaine ?' },
    ],
    es: [
      { href: '/es/explicacion-numero-semana-iso/', label: 'Número de semana ISO explicado' },
      { href: '/es/calendario-numeros-semana-2025/', label: 'Calendario números de semana 2025' },
      { href: '/es/que-numero-de-semana-es/', label: '¿Qué número de semana es?' },
    ],
    pt: [{ href: '/pt/explicacao-numero-semana-iso/', label: 'Número de semana ISO explicado' }, { href: '/pt/calendario-numeros-semana-2025/', label: 'Calendário semanas 2025' }, { href: '/pt/qual-e-o-numero-da-semana/', label: 'Qual é o número da semana?' }],
    de: [{ href: '/de/iso-kalenderwoche-erklaert/', label: 'ISO-Kalenderwoche erklärt' }, { href: '/de/kalenderwochen-2025/', label: 'Kalenderwochen 2025' }, { href: '/de/welche-kalenderwoche-ist-heute/', label: 'Welche Kalenderwoche ist heute?' }],
    it: [{ href: '/it/numero-settimana-iso-spiegato/', label: 'Numero settimana ISO spiegato' }, { href: '/it/calendario-numeri-settimana-2025/', label: 'Numeri settimana 2025' }, { href: '/it/che-numero-di-settimana-e/', label: 'Che numero di settimana è?' }],
    pl: [{ href: '/pl/numer-tygodnia-iso-wyjasniony/', label: 'Numer tygodnia ISO wyjaśniony' }, { href: '/pl/kalendarz-numerow-tygodni-2025/', label: 'Numery tygodni 2025' }, { href: '/pl/ktory-tydzien-roku-jest-teraz/', label: 'Który tydzień roku jest teraz?' }],
    ja: [{ href: '/ja/iso-shu-bango-kaisetsu/', label: 'ISO週番号の解説' }, { href: '/ja/2025-nen-shu-bango/', label: '2025年の週番号' }, { href: '/ja/ima-nan-shu-bango/', label: '今は何週目？' }],
    ko: [{ href: '/ko/iso-ju-beon-ho-seol-myeong/', label: 'ISO 주 번호 설명' }, { href: '/ko/2025-nyeon-ju-beon-ho/', label: '2025년 주 번호' }, { href: '/ko/hyeon-jae-myeot-jju-il-kka/', label: '현재 몇 주일까?' }],
    nl: [{ href: '/nl/iso-weeknummer-uitgelegd/', label: 'ISO-weeknummer uitgelegd' }, { href: '/nl/weeknummers-2025-kalender/', label: 'Weeknummers 2025 kalender' }, { href: '/nl/welk-weeknummer-is-het/', label: 'Welk weeknummer is het?' }],
  },
  'what-day-is-it-today': {
    en: [
      { href: '/what-day-of-the-week-was-i-born/', label: 'What day of the week was I born?' },
      { href: '/days-of-the-week-names-origin/', label: 'Days of the week: name origins' },
      { href: '/does-the-week-start-on-sunday-or-monday/', label: 'Does the week start on Sunday or Monday?' },
    ],
    fr: [
      { href: '/fr/quel-jour-de-la-semaine-suis-je-ne/', label: 'Quel jour de la semaine suis-je né ?' },
      { href: '/fr/origine-noms-jours-de-la-semaine/', label: 'Origine des noms des jours de la semaine' },
      { href: '/fr/la-semaine-commence-dimanche-ou-lundi/', label: 'La semaine commence dimanche ou lundi ?' },
    ],
    es: [
      { href: '/es/que-dia-de-la-semana-naci/', label: '¿Qué día de la semana nací?' },
      { href: '/es/origen-nombres-dias-semana/', label: 'Origen de los nombres de los días' },
      { href: '/es/empieza-la-semana-el-domingo-o-el-lunes/', label: '¿Empieza la semana el domingo o lunes?' },
    ],
    pt: [{ href: '/pt/que-dia-da-semana-nasci/', label: 'Que dia da semana nasci?' }, { href: '/pt/origem-nomes-dias-semana/', label: 'Origem dos nomes dos dias' }, { href: '/pt/a-semana-comeca-no-domingo-ou-segunda/', label: 'A semana começa no domingo ou segunda?' }],
    de: [{ href: '/de/an-welchem-wochentag-bin-ich-geboren/', label: 'An welchem Wochentag bin ich geboren?' }, { href: '/de/herkunft-wochentagsnamen/', label: 'Herkunft der Wochentagsnamen' }, { href: '/de/beginnt-die-woche-am-sonntag-oder-montag/', label: 'Beginnt die Woche am Sonntag oder Montag?' }],
    it: [{ href: '/it/che-giorno-della-settimana-sono-nato/', label: 'Che giorno della settimana sono nato?' }, { href: '/it/origine-nomi-giorni-settimana/', label: 'Origine dei nomi dei giorni' }, { href: '/it/la-settimana-inizia-domenica-o-lunedi/', label: 'La settimana inizia domenica o lunedì?' }],
    pl: [{ href: '/pl/w-jaki-dzien-tygodnia-sie-urodzilam/', label: 'W jaki dzień tygodnia się urodziłam?' }, { href: '/pl/pochodzenie-nazw-dni-tygodnia/', label: 'Pochodzenie nazw dni tygodnia' }, { href: '/pl/czy-tydzien-zaczyna-sie-w-niedziele-czy-poniedzialek/', label: 'Tydzień: niedziela czy poniedziałek?' }],
    ja: [{ href: '/ja/umareta-youbi-wa/', label: '生まれた曜日は？' }, { href: '/ja/youbi-no-namae-no-yurai/', label: '曜日の名前の由来' }, { href: '/ja/isshu-wa-nichiyobi-ka-getsuyobi-ka/', label: '週の始まりは日曜日か月曜日か？' }],
    ko: [{ href: '/ko/nae-saengil-yo-il-eun/', label: '내 생일 요일은?' }, { href: '/ko/yo-il-i-reum-ui-yu-rae/', label: '요일 이름의 유래' }, { href: '/ko/ju-ga-il-yo-il-si-jak-i-il-kka-wol-yo-il-si-jak-i-il-kka/', label: '주는 일요일부터? 월요일부터?' }],
    nl: [{ href: '/nl/op-welke-dag-van-de-week-ben-ik-geboren/', label: 'Op welke dag van de week ben ik geboren?' }, { href: '/nl/oorsprong-namen-dagen-van-de-week/', label: 'Oorsprong namen dagen van de week' }, { href: '/nl/begint-de-week-op-zondag-of-maandag/', label: 'Begint de week op zondag of maandag?' }],
  },
  'days-until-christmas': {
    en: [
      { href: '/how-many-days-until-new-year/', label: "How many days until New Year's?" },
      { href: '/when-is-christmas-2025/', label: 'When is Christmas 2025?' },
      { href: '/christmas-dates-around-the-world/', label: 'Christmas dates around the world' },
    ],
    fr: [
      { href: '/fr/combien-de-jours-avant-le-nouvel-an/', label: 'Combien de jours avant le Nouvel An ?' },
      { href: '/fr/quand-est-noel-2025/', label: 'Quand est Noël 2025 ?' },
      { href: '/fr/dates-de-noel-dans-le-monde/', label: 'Dates de Noël dans le monde' },
    ],
    es: [
      { href: '/es/cuantos-dias-faltan-para-el-ano-nuevo/', label: '¿Cuántos días faltan para Año Nuevo?' },
      { href: '/es/cuando-es-navidad-2025/', label: '¿Cuándo es Navidad 2025?' },
      { href: '/es/fechas-navidad-en-el-mundo/', label: 'Fechas de Navidad en el mundo' },
    ],
    pt: [{ href: '/pt/quantos-dias-faltam-para-o-ano-novo/', label: 'Quantos dias faltam para o Ano Novo?' }, { href: '/pt/quando-e-o-natal-2025/', label: 'Quando é o Natal 2025?' }, { href: '/pt/datas-natal-ao-redor-do-mundo/', label: 'Datas do Natal ao redor do mundo' }],
    de: [{ href: '/de/wie-viele-tage-bis-neujahr/', label: 'Wie viele Tage bis Neujahr?' }, { href: '/de/wann-ist-weihnachten-2025/', label: 'Wann ist Weihnachten 2025?' }, { href: '/de/weihnachtsdaten-weltweit/', label: 'Weihnachtsdaten weltweit' }],
    it: [{ href: '/it/quanti-giorni-mancano-a-capodanno/', label: 'Quanti giorni mancano a Capodanno?' }, { href: '/it/quando-e-natale-2025/', label: 'Quando è Natale 2025?' }, { href: '/it/date-natale-nel-mondo/', label: 'Date del Natale nel mondo' }],
    pl: [{ href: '/pl/ile-dni-do-nowego-roku/', label: 'Ile dni do Nowego Roku?' }, { href: '/pl/kiedy-jest-boze-narodzenie-2025/', label: 'Kiedy jest Boże Narodzenie 2025?' }, { href: '/pl/daty-bozego-narodzenia-na-swiecie/', label: 'Daty Bożego Narodzenia na świecie' }],
    ja: [{ href: '/ja/oshogatsu-made-ato-nan-nichi/', label: 'お正月まであと何日？' }, { href: '/ja/2025-kurisumasu-wa-itsu/', label: '2025年クリスマスはいつ？' }, { href: '/ja/sekai-no-kurisumasu-hi/', label: '世界のクリスマスの日付' }],
    ko: [{ href: '/ko/sae-hae-kka-ji-myeot-il/', label: '새해까지 며칠?' }, { href: '/ko/2025-nyeon-keu-ri-seu-ma-seu-eon-je/', label: '2025년 크리스마스 언제?' }, { href: '/ko/se-gye-keu-ri-seu-ma-seu-nal-jja/', label: '세계 크리스마스 날짜' }],
    nl: [{ href: '/nl/hoeveel-dagen-tot-nieuwjaar/', label: 'Hoeveel dagen tot Nieuwjaar?' }, { href: '/nl/wanneer-is-kerst-2025/', label: 'Wanneer is Kerst 2025?' }, { href: '/nl/kerstdata-over-de-hele-wereld/', label: 'Kerstdata over de hele wereld' }],
  },
  'date-calculator': {
    en: [
      { href: '/gregorian-calendar-adoption-by-country/', label: 'Gregorian calendar adoption by country' },
      { href: '/world-calendar-systems/', label: 'World calendar systems' },
      { href: '/date-time-faq/', label: 'Date & time FAQ' },
    ],
    fr: [
      { href: '/fr/adoption-calendrier-gregorien-par-pays/', label: 'Adoption du calendrier grégorien par pays' },
      { href: '/fr/systemes-de-calendrier-du-monde/', label: 'Systèmes de calendrier du monde' },
      { href: '/fr/faq-date-heure/', label: 'FAQ date et heure' },
    ],
    es: [
      { href: '/es/adopcion-calendario-gregoriano-por-pais/', label: 'Adopción del calendario gregoriano por país' },
      { href: '/es/sistemas-de-calendario-del-mundo/', label: 'Sistemas de calendario del mundo' },
      { href: '/es/preguntas-frecuentes-fecha-hora/', label: 'Preguntas frecuentes fecha y hora' },
    ],
    pt: [{ href: '/pt/adocao-calendario-gregoriano-por-pais/', label: 'Adoção do calendário gregoriano por país' }, { href: '/pt/sistemas-de-calendario-do-mundo/', label: 'Sistemas de calendário do mundo' }, { href: '/pt/perguntas-frequentes-data-hora/', label: 'FAQ data e hora' }],
    de: [{ href: '/de/gregorianischer-kalender-einfuehrung-nach-land/', label: 'Gregorianischer Kalender: Einführung nach Land' }, { href: '/de/kalender-systeme-der-welt/', label: 'Kalendersysteme der Welt' }, { href: '/de/datum-uhrzeit-faq/', label: 'Datum & Uhrzeit FAQ' }],
    it: [{ href: '/it/adozione-calendario-gregoriano-per-paese/', label: 'Adozione calendario gregoriano per paese' }, { href: '/it/sistemi-di-calendario-del-mondo/', label: 'Sistemi di calendario del mondo' }, { href: '/it/domande-frequenti-data-ora/', label: 'FAQ data e ora' }],
    pl: [{ href: '/pl/przyjecie-kalendarza-gregorianskiego-przez-kraje/', label: 'Przyjęcie kalendarza gregoriańskiego' }, { href: '/pl/systemy-kalendarzy-swiata/', label: 'Systemy kalendarzy świata' }, { href: '/pl/czesto-zadawane-pytania-data-czas/', label: 'FAQ data i czas' }],
    ja: [{ href: '/ja/gureguorio-reki-saiyo-kuni-betsu/', label: 'グレゴリオ暦の採用（国別）' }, { href: '/ja/sekai-no-koyomi-shisutemu/', label: '世界の暦システム' }, { href: '/ja/hizuke-jikan-faq/', label: '日付・時間FAQ' }],
    ko: [{ href: '/ko/gregor-ryeok-chae-taek-nara-byeol/', label: '그레고리력 채택 (나라별)' }, { href: '/ko/se-gye-ui-dal-ryeok-che-gye/', label: '세계의 달력 체계' }, { href: '/ko/nal-jja-si-gan-faq/', label: '날짜·시간 FAQ' }],
    nl: [{ href: '/nl/gregoriaanse-kalender-invoering-per-land/', label: 'Gregoriaanse kalender: invoering per land' }, { href: '/nl/kalender-systemen-van-de-wereld/', label: 'Kalendersystemen van de wereld' }, { href: '/nl/datum-tijd-veelgestelde-vragen/', label: 'Datum & tijd: veelgestelde vragen' }],
  },
};

const MASTHEAD_LABEL = {
  en: 'Free date calculator',
  fr: 'Calculateur de dates gratuit',
  es: 'Calculadora de fechas gratuita',
  pt: 'Calculadora de datas gratuita',
  de: 'Kostenloser Datumsrechner',
  it: 'Calcolatore di date gratuito',
  pl: 'Bezpłatny kalkulator dat',
  ja: '無料日付計算機',
  ko: '무료 날짜 계산기',
  nl: 'Gratis datumcalculator',
};

const DATE_LOCALE = { en: 'en-US', fr: 'fr-FR', es: 'es-ES', pt: 'pt-BR', de: 'de-DE', it: 'it-IT', pl: 'pl-PL', ja: 'ja-JP', ko: 'ko-KR', nl: 'nl-NL' };
const OG_LOCALE   = { en: 'en_US', fr: 'fr_FR', es: 'es_ES', pt: 'pt_BR', de: 'de_DE', it: 'it_IT', pl: 'pl_PL', ja: 'ja_JP', ko: 'ko_KR', nl: 'nl_NL' };
const HOME_HREF = { en: '/', fr: '/fr/', es: '/es/', pt: '/pt/', de: '/de/', it: '/it/', pl: '/pl/', ja: '/ja/', ko: '/ko/', nl: '/nl/' };
const BUILD_YEAR = new Date().getFullYear();

const CONSENT = {
  en: { text: 'We use Google AdSense to fund this free service. Do you accept advertising cookies?', accept: 'Accept', decline: 'Continue without' },
  fr: { text: 'Nous utilisons Google AdSense pour financer ce service gratuit. Acceptez-vous les cookies publicitaires\u00a0?', accept: 'Accepter', decline: 'Continuer sans' },
  es: { text: 'Usamos Google AdSense para financiar este servicio gratuito. \u00bfAcepta las cookies publicitarias?', accept: 'Aceptar', decline: 'Continuar sin' },
  pt: { text: 'Usamos Google AdSense para financiar este serviço gratuito. Você aceita cookies de publicidade?', accept: 'Aceitar', decline: 'Continuar sem' },
  de: { text: 'Wir nutzen Google AdSense zur Finanzierung dieses kostenlosen Dienstes. Akzeptierst du Werbe-Cookies?', accept: 'Akzeptieren', decline: 'Weiter ohne' },
  it: { text: 'Utilizziamo Google AdSense per finanziare questo servizio gratuito. Accetti i cookie pubblicitari?', accept: 'Accetta', decline: 'Continua senza' },
  pl: { text: 'Używamy Google AdSense do finansowania tej bezpłatnej usługi. Czy akceptujesz ciasteczka reklamowe?', accept: 'Akceptuj', decline: 'Kontynuuj bez' },
  ja: { text: 'この無料サービスの維持のためGoogle AdSenseを使用しています。広告クッキーを受け入れますか？', accept: '同意する', decline: '同意せずに続ける' },
  ko: { text: '이 무료 서비스를 유지하기 위해 Google AdSense를 사용합니다. 광고 쿠키에 동의하시겠습니까?', accept: '동의', decline: '동의 없이 계속' },
  nl: { text: 'Wij gebruiken Google AdSense om deze gratis service te financieren. Accepteert u advertentiecookies?', accept: 'Accepteren', decline: 'Doorgaan zonder' },
};

// ── LAYOUT ────────────────────────────────────────────────
function renderLayout(data, lang) {
  const { title, metaDesc, canonical, hreflang, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs, source, howto, breadcrumbLD } = data;

  const breadcrumbSchema = breadcrumbLD ? `
<script type="application/ld+json">
${breadcrumbLD}
</script>` : '';

  const sourceBlock = source ? `
  <div class="source-block">
    <span class="source-lbl">Source</span>
    <a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a>
  </div>` : '';

  const relatedArticlesBlock = data.relatedArticles && data.relatedArticles.length ? `
<section class="related-articles" aria-label="Related articles">
  <h2 class="related-articles-title">${data.relatedArticlesTitle || 'Related articles'}</h2>
  <ul class="related-articles-list">
${data.relatedArticles.map(a => `    <li><a href="${a.href}">${a.label}</a></li>`).join('\n')}
  </ul>
</section>` : '';

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

  // Schema.org HowTo (optional, passed from tool)
  const howtoSchema = howto ? `
<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": howto.name,
  "description": howto.description,
  "step": howto.steps.map((s, i) => ({
    "@type": "HowToStep",
    "position": i + 1,
    "name": s.name,
    "text": s.text
  }))
}, null, 2)}
</script>` : '';

  // Schema.org Organization (site-wide)
  const orgSchema = `
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Organization","name":"DateCalc.app","url":"https://datecalc.app","logo":"https://datecalc.app/og.png","contactPoint":{"@type":"ContactPoint","email":"hello@datecalc.app","contactType":"customer support"}}
</script>`;

  const langBtns = LANGS.map(l => {
    const href = hreflang[l];
    const active = l === lang ? ' active' : '';
    return `  <a href="${href}" class="lang-btn${active}">${l.toUpperCase()}</a>`;
  }).join('\n');

  // Fix H1 crawl bug: ensure space before <br> so Google doesn't concat words
  const fixedHeadlineBlock = headlineBlock.replace(/([^\s])<br>/g, '$1 <br>');

  // Inject aria-live="polite" on results container for screen reader announcements
  const liveResultsSection = resultsSection.replace(/id="results"/, 'id="results" aria-live="polite"');

  const navLinks = NAV[lang].map(group => {
    const links = group.items.map((item, i) => {
      const active = item.href === canonical ? ' aria-current="page"' : '';
      const sep = i < group.items.length - 1 ? '<span class="nav-sep">·</span>' : '';
      return `<a href="${item.href}"${active}>${item.label}</a>${sep}`;
    }).join('');
    return `    <div class="nav-group"><span class="nav-cat">${group.cat}</span><div class="nav-links">${links}</div></div>`;
  }).join('\n');


  const footerCols = NAV[lang].map(group => {
    const fLinks = group.items.map(item => `<a href="${item.href}">${item.label}</a>`).join('\n');
    return `<div class="footer-col"><strong>${group.cat}</strong>\n${fLinks}</div>`;
  }).join('\n') + '\n' + hubs.footerExploreBlock(lang);
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="robots" content="${NOINDEX_LANGS.has(lang) ? 'noindex, follow' : 'index, follow'}">
<meta name="description" content="${metaDesc}">
<link rel="canonical" href="https://datecalc.app${canonical}">
${INDEXABLE_LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="https://datecalc.app${hreflang[l]}">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="https://datecalc.app${hreflang.en}">
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${metaDesc}">
<meta property="og:url" content="https://datecalc.app${canonical}">
<meta property="og:site_name" content="DateCalc.app">
<meta property="og:locale" content="${OG_LOCALE[lang]}">
${LANGS.filter(l => l !== lang).map(l => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}">`).join('\n')}
<meta property="og:image" content="https://datecalc.app/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${metaDesc}">
<meta name="twitter:image" content="https://datecalc.app/og.png">
${(lang === 'ja' || lang === 'ko') ? '' : `<link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/playfair-normal-latin.woff2" as="font" type="font/woff2" crossorigin>`}
<link rel="stylesheet" href="/style.css">
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="shortcut icon" href="/favicon.svg">
${faqSchema}${howtoSchema}${appSchema}${orgSchema}${breadcrumbSchema}${navHubs.NAV_CSS}
</head>
<body>

<a class="skip-link" href="#main-content">Skip to main content</a>
<noscript><div style="background:#c8392b;color:#fff;text-align:center;padding:.6rem;font-family:sans-serif;font-size:.9rem">This calculator requires JavaScript. Please enable it in your browser.</div></noscript>

<header>
<div class="masthead">
  <a href="${HOME_HREF[lang]}" class="masthead-brand">DateCalc<span>.</span>app</a>
  <div class="masthead-meta" id="todayMeta"></div>
</div>
</header>

${navHubs.mainNavHTML(lang, canonical)}
<div class="lang-strip">
${langBtns}
</div>

<div class="page">

${fixedHeadlineBlock}

${formGrid}

${liveResultsSection}

  <nav aria-label="Tools">
  <div class="tool-nav">
${navLinks}
  </div>
  </nav>

<main id="main-content">
${seoBlock}
${sourceBlock}
${relatedArticlesBlock}
</main>
  <footer>
  <nav class="footer-nav" aria-label="Site links">
${footerCols}
  </nav>
  <div class="footer-copy">© ${BUILD_YEAR} DateCalc.app — ${FOOTER[lang]} · <a href="${ABOUT_HREF[lang]}">${ABOUT_LBL[lang]}</a> · <a href="${PRIVACY_HREF[lang]}">${PRIVACY_LBL[lang]}</a></div>
  <div class="footer-tagline-wrap">${authors.footerTagline(lang)}</div>
</footer>
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
// Auto-scroll to results when they become visible
(function(){
  var r=document.getElementById('results');
  if(!r||r.classList.contains('auto-show'))return;
  var obs=new MutationObserver(function(){
    if(r.classList.contains('show')){
      r.scrollIntoView({behavior:'smooth',block:'start'});
      obs.disconnect();
    }
  });
  obs.observe(r,{attributes:true,attributeFilter:['class']});
})();
// Enter key submits calculator
(function(){
  var fg=document.querySelector('.form-grid');
  if(!fg)return;
  fg.addEventListener('keydown',function(e){
    if(e.key==='Enter'&&typeof calculate==='function')calculate();
  });
})();
// AdSense: load only with consent
(function(){
  var ADS_SRC='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4020973443671350';
  function loadAds(){
    var s=document.createElement('script');
    s.src=ADS_SRC;s.async=true;s.crossOrigin='anonymous';
    document.head.appendChild(s);
  }
  if(localStorage.getItem('ads-ok')==='1')return loadAds();
  if(localStorage.getItem('ads-ok')==='0')return;
  var b=document.getElementById('consent-banner');
  if(b)b.style.display='flex';
  document.getElementById('consent-accept')&&document.getElementById('consent-accept').addEventListener('click',function(){
    localStorage.setItem('ads-ok','1');b.style.display='none';loadAds();
  });
  document.getElementById('consent-decline')&&document.getElementById('consent-decline').addEventListener('click',function(){
    localStorage.setItem('ads-ok','0');b.style.display='none';
  });
})();
</script>
<script>
${script}
</script>
<div id="consent-banner" style="display:none;position:fixed;bottom:0;left:0;right:0;background:#111111;color:#fff;padding:.9rem 1.4rem;z-index:9999;font-size:.82rem;font-family:sans-serif;align-items:center;gap:.8rem;flex-wrap:wrap">
  <span style="flex:1;min-width:200px">${CONSENT[lang].text}</span>
  <button id="consent-accept" style="background:#c8392b;color:#fff;border:none;padding:.4rem 1rem;cursor:pointer;border-radius:3px;font-size:.82rem">${CONSENT[lang].accept}</button>
  <button id="consent-decline" style="background:transparent;color:#aaa;border:1px solid #555;padding:.4rem 1rem;cursor:pointer;border-radius:3px;font-size:.82rem">${CONSENT[lang].decline}</button>
</div>
</body>
</html>`;
}

// ── ARTICLE LAYOUT ────────────────────────────────────────
function renderArticleLayout(data, lang) {
  const { title, metaDesc, canonical, hreflang, kicker, h1, intro, sections, faqs, pillar, related, breadcrumbLD, extraHead, extraBodyTop } = data;

  const breadcrumbSchema = breadcrumbLD ? `
<script type="application/ld+json">
${breadcrumbLD}
</script>` : '';

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

  const articleSchema = `
<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": h1,
  "description": metaDesc,
  "url": `https://datecalc.app${canonical}`,
  "datePublished": data.datePublished || ARTICLE_DEFAULT_PUBLISHED,
  "dateModified": data.dateModified || ARTICLE_DEFAULT_MODIFIED,
  "author": { "@type": "Person", "name": "Mike", "url": `https://datecalc.app${authors.mikeAboutHref(lang)}` },
  "publisher": { "@type": "Organization", "name": "DateCalc.app", "url": "https://datecalc.app", "logo": { "@type": "ImageObject", "url": "https://datecalc.app/og.png" } },
  "image": "https://datecalc.app/og.png",
  "mainEntityOfPage": { "@type": "WebPage", "@id": `https://datecalc.app${canonical}` }
}, null, 2)}
</script>`;

  const orgSchema = `
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Organization","name":"DateCalc.app","url":"https://datecalc.app","logo":"https://datecalc.app/og.png","contactPoint":{"@type":"ContactPoint","email":"hello@datecalc.app","contactType":"customer support"}}
</script>`;

  const langBtns = LANGS.map(l => {
    const href = hreflang[l];
    const active = l === lang ? ' active' : '';
    return `  <a href="${href}" class="lang-btn${active}">${l.toUpperCase()}</a>`;
  }).join('\n');

  const navLinks = NAV[lang].map(group => {
    const links = group.items.map((item, i) => {
      const active = item.href === canonical ? ' aria-current="page"' : '';
      const sep = i < group.items.length - 1 ? '<span class="nav-sep">·</span>' : '';
      return `<a href="${item.href}"${active}>${item.label}</a>${sep}`;
    }).join('');
    return `    <div class="nav-group"><span class="nav-cat">${group.cat}</span><div class="nav-links">${links}</div></div>`;
  }).join('\n');

  const footerCols = NAV[lang].map(group => {
    const fLinks = group.items.map(item => `<a href="${item.href}">${item.label}</a>`).join('\n');
    return `<div class="footer-col"><strong>${group.cat}</strong>\n${fLinks}</div>`;
  }).join('\n') + '\n' + hubs.footerExploreBlock(lang);

  const sectionsHTML = (sections || []).map(s => {
    const tableBlock = s.table ? `<div class="article-table-wrap">${s.table}</div>` : '';
    return `<section><h2>${s.h2}</h2><div class="article-body">${s.body}</div>${tableBlock}</section>`;
  }).join('\n');

  const faqHTML = faqs && faqs.length ? `<section class="article-faq"><h2>FAQ</h2>${faqs.map(f => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join('')}</section>` : '';

  const relatedHTML = related && related.length ? `<div class="article-related"><strong>Related:</strong> ${related.map(r => `<a href="${r.href}">${r.label}</a>`).join(' · ')}</div>` : '';

  const pillarCTA = pillar ? `<div class="article-cta"><a href="${pillar.href}" class="cta-btn">${pillar.label} →</a></div>` : '';

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="robots" content="${NOINDEX_LANGS.has(lang) ? 'noindex, follow' : 'index, follow'}">
<meta name="description" content="${metaDesc}">
<link rel="canonical" href="https://datecalc.app${canonical}">
${INDEXABLE_LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="https://datecalc.app${hreflang[l]}">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="https://datecalc.app${hreflang.en}">
<meta property="og:type" content="article">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${metaDesc}">
<meta property="og:url" content="https://datecalc.app${canonical}">
<meta property="og:site_name" content="DateCalc.app">
<meta property="og:locale" content="${OG_LOCALE[lang]}">
${LANGS.filter(l => l !== lang).map(l => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}">`).join('\n')}
<meta property="og:image" content="https://datecalc.app/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${metaDesc}">
<meta name="twitter:image" content="https://datecalc.app/og.png">
${(lang === 'ja' || lang === 'ko') ? '' : `<link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/playfair-normal-latin.woff2" as="font" type="font/woff2" crossorigin>`}
<link rel="stylesheet" href="/style.css">
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="shortcut icon" href="/favicon.svg">
${faqSchema}${articleSchema}${orgSchema}${breadcrumbSchema}${navHubs.NAV_CSS}${extraHead || ''}
</head>
<body>
<a class="skip-link" href="#main-content">Skip to main content</a>
<header>
<div class="masthead">
  <a href="${HOME_HREF[lang]}" class="masthead-brand">DateCalc<span>.</span>app</a>
  <div class="masthead-meta" id="todayMeta"></div>
</div>
</header>
${navHubs.mainNavHTML(lang, canonical)}
<div class="lang-strip">
${langBtns}
</div>
<div class="page">
${extraBodyTop || ''}
<div class="headline-block">
  <p class="kicker">${kicker}</p>
  <h1>${h1}</h1>
  <p class="article-intro">${intro}</p>
</div>
<nav aria-label="Tools">
<div class="tool-nav">
${navLinks}
</div>
</nav>
<main id="main-content" class="article-main">
${sectionsHTML}
${faqHTML}
${relatedHTML}
${pillarCTA}
${authors.articleSignature(lang)}
</main>
<footer>
<nav class="footer-nav" aria-label="Site links">
${footerCols}
</nav>
<div class="footer-copy">© ${BUILD_YEAR} DateCalc.app — ${FOOTER[lang]} · <a href="${ABOUT_HREF[lang]}">${ABOUT_LBL[lang]}</a> · <a href="${PRIVACY_HREF[lang]}">${PRIVACY_LBL[lang]}</a></div>
<div class="footer-tagline-wrap">${authors.footerTagline(lang)}</div>
</footer>
</div>
<script>
(function(){
  var now = new Date();
  var opts = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
  document.getElementById('todayMeta').innerHTML =
    now.toLocaleDateString('${DATE_LOCALE[lang]}', opts) + '<br>${MASTHEAD_LABEL[lang]}';
})();
</script>
<div id="consent-banner" style="display:none;position:fixed;bottom:0;left:0;right:0;background:#111111;color:#fff;padding:.9rem 1.4rem;z-index:9999;font-size:.82rem;font-family:sans-serif;align-items:center;gap:.8rem;flex-wrap:wrap">
  <span style="flex:1;min-width:200px">${CONSENT[lang].text}</span>
  <button id="consent-accept" style="background:#c8392b;color:#fff;border:none;padding:.4rem 1rem;cursor:pointer;border-radius:3px;font-size:.82rem">${CONSENT[lang].accept}</button>
  <button id="consent-decline" style="background:transparent;color:#aaa;border:1px solid #555;padding:.4rem 1rem;cursor:pointer;border-radius:3px;font-size:.82rem">${CONSENT[lang].decline}</button>
</div>
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
// Copy self-hosted fonts
const fontSrc = path.join(__dirname, 'src', 'fonts');
const fontDst = path.join(DIST, 'fonts');
ensureDir(fontDst);
for (const f of fs.readdirSync(fontSrc)) {
  fs.copyFileSync(path.join(fontSrc, f), path.join(fontDst, f));
}
console.log('  ✓ /style.css + /fonts/');
// Copy year photos if they exist
const yearPhotosSrc = path.join(__dirname, 'src', 'data', 'year-photos');
if (fs.existsSync(yearPhotosSrc)) {
  const yearPhotosDst = path.join(DIST, 'year-photos');
  ensureDir(yearPhotosDst);
  for (const f of fs.readdirSync(yearPhotosSrc)) {
    fs.copyFileSync(path.join(yearPhotosSrc, f), path.join(yearPhotosDst, f));
  }
  console.log('  ✓ /year-photos/');
}

let count = 0;

for (const tool of tools) {
  for (const page of tool.pages) {
    for (const lang of LANGS) {
      const slug = page.slugs[lang];           // e.g. "fr/calculateur-age"
      const canonical = slug === '' ? '/' : `/${slug}/`;

      const data = tool.render(page.id, lang);
      if (page.isHomepage) {
        data.seoBlock = hubs.homepageBrowseSection(lang) + '\n' + (data.seoBlock || '');
      }
      data.canonical = canonical;
      data.hreflang = {
        en: page.slugs.en === '' ? '/' : `/${page.slugs.en}/`,
        fr: page.slugs.fr === '' ? '/' : `/${page.slugs.fr}/`,
        es: page.slugs.es === '' ? '/' : `/${page.slugs.es}/`,
        pt: page.slugs.pt === '' ? '/' : `/${page.slugs.pt}/`,
        de: page.slugs.de === '' ? '/' : `/${page.slugs.de}/`,
        it: page.slugs.it === '' ? '/' : `/${page.slugs.it}/`,
        pl: page.slugs.pl === '' ? '/' : `/${page.slugs.pl}/`,
        ja: page.slugs.ja === '' ? '/' : `/${page.slugs.ja}/`,
        ko: page.slugs.ko === '' ? '/' : `/${page.slugs.ko}/`,
        nl: page.slugs.nl === '' ? '/' : `/${page.slugs.nl}/`,
      };

      // Inject related articles for matching tool keys
      const enSlug = page.slugs.en === '' ? '' : page.slugs.en.split('/').pop();
      const toolKey = enSlug === '' ? null : (Object.keys(TOOL_ARTICLES).find(k => enSlug === k) ?? null);
      if (toolKey !== null && toolKey !== undefined && TOOL_ARTICLES[toolKey] && TOOL_ARTICLES[toolKey][lang]) {
        data.relatedArticles = TOOL_ARTICLES[toolKey][lang];
        data.relatedArticlesTitle = RELATED_ARTICLES_TITLE[lang];
      }

      const html = renderLayout(data, lang);
      const relPath = slug === '' ? 'index.html' : `${slug}/index.html`;
      writePage(relPath, html);
      count++;

      if (page.isHomepage && lang === 'en') {
        // Inject lang-detect snippet into EN homepage only
        const langDetect = `<script>
(function(){
  if(sessionStorage.getItem('lang-redirected')) return;
  sessionStorage.setItem('lang-redirected','1');
  var l=(navigator.language||navigator.userLanguage||'').toLowerCase();
  if(l.startsWith('fr')) window.location.replace('/fr/');
  else if(l.startsWith('es')) window.location.replace('/es/');
  else if(l.startsWith('pt')) window.location.replace('/pt/');
  else if(l.startsWith('de')) window.location.replace('/de/');
  else if(l.startsWith('it')) window.location.replace('/it/');
  else if(l.startsWith('pl')) window.location.replace('/pl/');
})();
</script>`;
        writePage('index.html', html.replace('</head>', langDetect + '\n</head>'));
      }
    }
  }
}

console.log(`\nBuilt ${count} pages → dist/`);

// ── ARTICLE BUILD ─────────────────────────────────────────
let articleCount = 0;
const ARTICLE_LANGS = ['en', 'fr', 'es', 'pt', 'de', 'it', 'pl', 'ja', 'ko', 'nl'];
for (const cluster of articles) {
  for (const page of cluster.pages) {
    for (const lang of ARTICLE_LANGS) {
      const slug = page.slugs[lang];
      const canonical = `/${slug}/`;
      const data = cluster.render(page.id, lang);
      data.canonical = canonical;
      data.hreflang = {
        en: `/${page.slugs.en}/`,
        fr: `/${page.slugs.fr}/`,
        es: `/${page.slugs.es}/`,
        pt: `/${page.slugs.pt}/`,
        de: `/${page.slugs.de}/`,
        it: `/${page.slugs.it}/`,
        pl: `/${page.slugs.pl}/`,
        ja: `/${page.slugs.ja}/`,
        ko: `/${page.slugs.ko}/`,
        nl: `/${page.slugs.nl}/`,
      };
      const html = renderArticleLayout(data, lang);
      writePage(`${slug}/index.html`, html);
      articleCount++;
    }
  }
}
if (articleCount > 0) console.log(`Built ${articleCount} article pages → dist/`);

// ── HUB PAGES (birth-years, year-in-history) ──────────────
let hubCount = 0;
const HUB_CSS = `
<style>
.hub-decades{display:flex;flex-direction:column;gap:1.4rem;margin:.8rem 0}
.hub-decade-row{display:flex;flex-direction:column;gap:.4rem;border-top:1px solid #e5e5e5;padding-top:.8rem}
.hub-decade-label{font-family:'Playfair Display',serif;font-size:1.05rem;font-weight:600;color:#111}
.hub-year-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:.35rem}
.hub-year{display:inline-block;padding:.4rem .55rem;border:1px solid #ddd;border-radius:3px;text-decoration:none;color:#111;font-family:'Space Mono',monospace;font-size:.88rem;text-align:center;transition:border-color .12s,background .12s}
.hub-year:hover{border-color:var(--accent);background:#fafafa}
.see-all-link{margin:1.2rem 0;font-family:'Space Mono',monospace;font-size:.9rem}
.see-all-link a{color:var(--accent);text-decoration:none;border-bottom:1px solid currentColor}
.browse-by-year{margin:2rem 0}
.browse-by-year h2{font-family:'Playfair Display',serif;font-size:1.4rem;margin-bottom:.8rem}
.browse-by-year-list{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:1fr 1fr;gap:.8rem}
.browse-by-year-list a{display:block;padding:1rem;border:1px solid #ddd;border-radius:4px;text-decoration:none;color:#111;transition:border-color .12s}
.browse-by-year-list a:hover{border-color:var(--accent)}
.browse-by-year-list strong{display:block;font-family:'Playfair Display',serif;font-size:1.05rem;margin-bottom:.2rem}
.browse-by-year-list span{display:block;font-size:.85rem;color:#666}
@media(max-width:600px){.browse-by-year-list{grid-template-columns:1fr}}
</style>`;

for (const hubType of ['birth', 'event']) {
  for (const lang of LANGS) {
    const h = hubs.renderHub(hubType, lang);
    const data = {
      title: h.title,
      metaDesc: h.metaDesc,
      canonical: h.canonical,
      hreflang: h.hreflang,
      kicker: h.kicker,
      h1: h.h1,
      intro: h.intro,
      sections: [
        { h2: h.pickDecade, body: h.decadeGrid },
      ],
      faqs: null,
      pillar: null,
      related: null,
      breadcrumbLD: h.breadcrumbLD,
      extraHead: HUB_CSS,
    };
    const html = renderArticleLayout(data, lang);
    writePage(`${hubs.HUB_SLUGS[hubType][lang]}/index.html`, html);
    hubCount++;
  }
}
console.log(`Built ${hubCount} hub pages → dist/`);

// ── NAV HUBS (/tools/ and /articles/) ─────────────────────
let navHubCount = 0;
for (const lang of LANGS) {
  const toolsData = navHubs.buildToolsHub(lang, NAV);
  toolsData.extraHead = navHubs.NAV_CSS;
  const tHtml = renderArticleLayout(toolsData, lang);
  writePage(`${navHubs.TOOLS_SLUGS[lang]}/index.html`, tHtml);
  navHubCount++;

  const articlesData = navHubs.buildArticlesHub(lang, articles);
  articlesData.extraHead = navHubs.NAV_CSS;
  const aHtml = renderArticleLayout(articlesData, lang);
  writePage(`${navHubs.ARTICLES_SLUGS[lang]}/index.html`, aHtml);
  navHubCount++;
}
console.log(`Built ${navHubCount} nav-hub pages → dist/`);

// ── AUTHOR PAGES (/authors/mike/ + 9 translations) ────────
let authorCount = 0;
for (const lang of LANGS) {
  writePage(`${authors.MIKE_SLUGS[lang]}/index.html`, authors.renderAuthorHTML(lang));
  authorCount++;
}
console.log(`Built ${authorCount} author pages → dist/`);

// ── MY-AGE shareable page (/my-age/?dob=YYYY-MM-DD) ───────
let myAgeCount = 0;
for (const lang of LANGS) {
  writePage(`${myAge.SLUGS[lang]}/index.html`, myAge.renderMyAgeHTML(lang));
  myAgeCount++;
}
console.log(`Built ${myAgeCount} my-age pages → dist/`);

// ── REDIRECTS ─────────────────────────────────────────────
const REDIRECTS = [
  { from: '/how-old-am-i/*',      to: '/age-calculator/' },
  { from: '/fr/quel-age-ai-je/*', to: '/fr/calculateur-age/' },
  { from: '/es/que-edad-tengo/*', to: '/es/calculadora-edad/' },
];

// Cloudflare Pages _redirects file (301 rules first, then catch-all 404 LAST)
const redirectsFile =
  REDIRECTS.map(r => `${r.from} ${r.to} 301`).join('\n') +
  '\n' +
  '/* /404.html 404\n';
fs.writeFileSync(path.join(DIST, '_redirects'), redirectsFile, 'utf8');
console.log('  ✓ /_redirects');

// ── 404 PAGE ──────────────────────────────────────────────
const notFoundHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, follow">
<title>Page not found - DateCalc.app</title>
<link rel="stylesheet" href="/style.css">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="shortcut icon" href="/favicon.svg">
</head>
<body>
<header>
<div class="masthead">
  <a href="/" class="masthead-brand">DateCalc<span>.</span>app</a>
</div>
</header>
<div class="page">
<div class="headline-block">
  <h1>404 &mdash; Page not found</h1>
  <p class="article-intro">The page you were looking for doesn&rsquo;t exist or has moved. Try the homepage to find the calculator you need.</p>
</div>
<main id="main-content" style="text-align:center;padding:2rem 0">
  <p><a href="/" class="cta-btn">Go to homepage</a></p>
</main>
</div>
</body>
</html>`;
fs.writeFileSync(path.join(DIST, '404.html'), notFoundHTML, 'utf8');
console.log('  ✓ /404.html');

// ── HEADERS (Cloudflare Pages _headers) ───────────────────
const headersFile = `/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: interest-cohort=(), geolocation=(), microphone=(), camera=()
`;
fs.writeFileSync(path.join(DIST, '_headers'), headersFile, 'utf8');
console.log('  ✓ /_headers');

// ── ROBOTS.TXT ────────────────────────────────────────────
const robots = `User-agent: *\nAllow: /\nSitemap: https://datecalc.app/sitemap.xml\n`;
fs.writeFileSync(path.join(DIST, 'robots.txt'), robots, 'utf8');
console.log('  ✓ /robots.txt');

// ── ADS.TXT ───────────────────────────────────────────────
const adstxt = `google.com, pub-4020973443671350, DIRECT, f08c47fec0942fa0\n`;
fs.writeFileSync(path.join(DIST, 'ads.txt'), adstxt, 'utf8');
console.log('  ✓ /ads.txt');

// ── OG IMAGE ──────────────────────────────────────────────
(function buildOGImage() {
  const W = 1200, H = 630;

  function crc32(buf) {
    const t = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
      t[n] = c;
    }
    let c = 0xFFFFFFFF;
    for (let i = 0; i < buf.length; i++) c = t[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
  }
  function mkchunk(type, data) {
    const tb = Buffer.from(type, 'ascii');
    const lb = Buffer.allocUnsafe(4); lb.writeUInt32BE(data.length);
    const cd = Buffer.concat([tb, data]);
    const cb = Buffer.allocUnsafe(4); cb.writeUInt32BE(crc32(cd));
    return Buffer.concat([lb, cd, cb]);
  }

  const ihdr = Buffer.allocUnsafe(13);
  ihdr.writeUInt32BE(W, 0); ihdr.writeUInt32BE(H, 4);
  ihdr[8] = 8; ihdr[9] = 2; ihdr[10] = ihdr[11] = ihdr[12] = 0;

  const rowLen = 1 + W * 3;
  const raw = Buffer.allocUnsafe(H * rowLen);
  for (let y = 0; y < H; y++) raw[y * rowLen] = 0; // filter bytes

  function rect(x1, y1, x2, y2, r, g, b) {
    for (let y = y1; y < y2; y++)
      for (let x = x1; x < x2; x++) {
        const o = y * rowLen + 1 + x * 3;
        raw[o] = r; raw[o + 1] = g; raw[o + 2] = b;
      }
  }

  // Cream background
  rect(0, 0, W, H, 0xf5, 0xf2, 0xeb);
  // Red top stripe
  rect(0, 0, W, 72, 0xc8, 0x39, 0x2b);
  // Thin dark separator
  rect(0, 72, W, 76, 0x11, 0x11, 0x11);
  // Calendar: dark border
  rect(344, 148, 856, 486, 0x11, 0x11, 0x11);
  // Calendar: white body
  rect(350, 154, 850, 480, 0xff, 0xff, 0xff);
  // Calendar: red header
  rect(350, 154, 850, 234, 0xc8, 0x39, 0x2b);
  // Calendar: ring left (dark outer, white inner)
  rect(412, 140, 434, 174, 0x11, 0x11, 0x11);
  rect(417, 145, 429, 169, 0xf5, 0xf2, 0xeb);
  // Calendar: ring right
  rect(766, 140, 788, 174, 0x11, 0x11, 0x11);
  rect(771, 145, 783, 169, 0xf5, 0xf2, 0xeb);
  // Grid horizontal lines
  rect(350, 295, 850, 298, 0xde, 0xda, 0xd3);
  rect(350, 356, 850, 359, 0xde, 0xda, 0xd3);
  rect(350, 417, 850, 420, 0xde, 0xda, 0xd3);
  // Grid vertical lines
  rect(433, 234, 436, 480, 0xde, 0xda, 0xd3);
  rect(516, 234, 519, 480, 0xde, 0xda, 0xd3);
  rect(599, 234, 602, 480, 0xde, 0xda, 0xd3);
  rect(682, 234, 685, 480, 0xde, 0xda, 0xd3);
  rect(765, 234, 768, 480, 0xde, 0xda, 0xd3);

  const idat = zlib.deflateSync(raw, { level: 6 });
  const png = Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    mkchunk('IHDR', ihdr), mkchunk('IDAT', idat), mkchunk('IEND', Buffer.alloc(0))
  ]);
  fs.writeFileSync(path.join(DIST, 'og.png'), png);
  console.log('  ✓ /og.png');
})();

// ── PRIVACY POLICY PAGES ──────────────────────────────────
const PRIVACY_PAGES = [
  { lang: 'en', slug: 'privacy',            canonical: 'https://datecalc.app/privacy/' },
  { lang: 'fr', slug: 'fr/confidentialite', canonical: 'https://datecalc.app/fr/confidentialite/' },
  { lang: 'es', slug: 'es/privacidad',      canonical: 'https://datecalc.app/es/privacidad/' },
  { lang: 'pt', slug: 'pt/privacidade',     canonical: 'https://datecalc.app/pt/privacidade/' },
  { lang: 'de', slug: 'de/datenschutz',     canonical: 'https://datecalc.app/de/datenschutz/' },
  { lang: 'it', slug: 'it/privacy',         canonical: 'https://datecalc.app/it/privacy/' },
  { lang: 'pl', slug: 'pl/prywatnosc',      canonical: 'https://datecalc.app/pl/prywatnosc/' },
  { lang: 'ja', slug: 'ja/privacy',         canonical: 'https://datecalc.app/ja/privacy/' },
  { lang: 'ko', slug: 'ko/privacy',         canonical: 'https://datecalc.app/ko/privacy/' },
  { lang: 'nl', slug: 'nl/privacy',         canonical: 'https://datecalc.app/nl/privacy/' },
];
const PRIVACY_CONTENT = {
  en: {
    title: 'Privacy Policy — DateCalc.app',
    h1: 'Privacy Policy',
    updated: 'Last updated: April 19, 2026',
    intro: 'DateCalc.app is a free multilingual date and time calculator. The calculators themselves run entirely in your browser and never transmit your dates to any server — but we do rely on a small number of third-party services (Google AdSense for advertising and Cloudflare Pages for hosting) to keep the site free. This page explains, in plain language, exactly what data is collected, by whom, how you can opt out, and how to contact us to exercise your rights under the GDPR, CCPA, or any equivalent local law.',
    sections: [
      { h: 'Scope of this policy', p: 'This policy applies to every visitor of every page on datecalc.app, regardless of country. EU/EEA visitors are covered by the GDPR, UK visitors by the UK GDPR, California residents by the CCPA, and residents of other jurisdictions (Brazil LGPD, Canada PIPEDA, etc.) benefit from the strongest applicable protection we can reasonably offer. If you are under 16 (or the age of digital consent in your country if higher), do not consent to advertising cookies without the involvement of a parent or guardian.' },
      { h: 'Data we collect directly', p: 'Essentially nothing. DateCalc.app does not run user accounts, logins, forms, analytics, first-party cookies, or any first-party tracker. The dates you enter into the calculators stay in your browser tab and are discarded when you close it. The only direct contact we may have with you is via email, if you choose to write to us, in which case we store the email content until the issue is resolved.' },
      { h: 'Data collected by third parties', p: 'Loading any web page inherently shares some technical data with the infrastructure serving it. On datecalc.app that means: <strong>Cloudflare Pages</strong> (our host) may log your IP address, user-agent, referrer and requested URL for security, abuse prevention and performance, per <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare\'s policy</a>; <strong>Google Fonts</strong> (fonts.gstatic.com) receives a font request that may include your IP, per <a href="https://policies.google.com/privacy">Google\'s policy</a>; <strong>Google AdSense</strong> may set cookies and collect ad-interaction data when ads load (details below).' },
      { h: 'Cookies we use', p: 'We group cookies into three categories. <strong>Strictly necessary</strong>: none set by us; a <code>localStorage</code> flag named <code>ads-ok</code> records your consent choice so we don\'t ask every visit — it never leaves your browser. <strong>Advertising cookies (Google AdSense)</strong>: only set if you click "Accept" on the consent banner; these enable personalized ads and measurement. In the EU/UK they are never set until you consent; outside those regions they may load non-personalized ads by default. <strong>Analytics</strong>: none — DateCalc.app does not run Google Analytics or any equivalent.' },
      { h: 'Google AdSense', p: 'This site is funded by Google AdSense. When ads are loaded, Google and its certified partners may place cookies, use device identifiers, and collect data about your interaction with ads (impressions, clicks, viewability) and — only if you consent — with your browsing across other AdSense-enabled sites, to personalize advertising. You can review and adjust these preferences at any time via your <a href="https://myaccount.google.com/yourdata/ads">Google Ads settings</a>, learn how Google uses data in its <a href="https://policies.google.com/technologies/ads">advertising policy</a>, or opt out via the <a href="https://optout.networkadvertising.org">NAI opt-out</a> (outside the EU) or your CMP preferences (inside the EU).' },
      { h: 'Your rights (GDPR / CCPA / other)', p: 'Because we hold effectively no first-party personal data about you, most GDPR/CCPA rights (access, correction, erasure, portability) are satisfied by the simple fact that we have nothing to access, correct, erase or port. However you can still: <strong>withdraw consent</strong> to advertising cookies at any time (clear the <code>ads-ok</code> flag or use the banner when it reappears); <strong>object</strong> to processing for personalized advertising (use Google\'s opt-outs above); <strong>lodge a complaint</strong> with your local data-protection authority (CNIL in France, BfDI in Germany, ICO in the UK, Garante in Italy, AEPD in Spain, etc.). If you believe we or our processors are mishandling your data, email us first — we investigate promptly.' },
      { h: 'Legal basis (EU / UK visitors)', p: 'Under the GDPR we rely on: <em>Consent</em> (Art. 6.1.a) for advertising cookies and any personalized data processing; <em>Legitimate interest</em> (Art. 6.1.f) for aggregate, non-identifying access logs used to operate and secure the site; <em>Performance of service</em> (Art. 6.1.b) for loading the fonts and static assets required to render the page. You can withdraw consent at any time without affecting the lawfulness of prior processing.' },
      { h: 'Data retention', p: 'Server access logs (Cloudflare): typically 24–72 hours for security. AdSense cookies: retained per Google\'s own schedule (generally up to 13 months for advertising cookies in the EU). Your consent flag in localStorage: kept until you clear it or change your choice. Emails you send us: retained until the issue is resolved, then deleted within 12 months unless needed for a legal obligation.' },
      { h: 'Contact', p: 'For privacy questions, consent withdrawal, or any right you want to exercise, email <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>. We read every message and typically reply within a few business days. For Google-specific data requests (what AdSense stores, deletion of your ad profile), use Google\'s own channels linked above — we cannot modify their records on your behalf.' },
    ],
  },
  fr: {
    title: 'Politique de confidentialité — DateCalc.app',
    h1: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : 19 avril 2026',
    intro: 'DateCalc.app est un calculateur de dates multilingue gratuit. Les calculateurs eux-mêmes s\'exécutent entièrement dans votre navigateur et ne transmettent jamais vos dates à un serveur — mais nous nous appuyons sur quelques services tiers (Google AdSense pour la publicité, Cloudflare Pages pour l\'hébergement) pour maintenir le site gratuit. Cette page explique, sans jargon, quelles données sont collectées, par qui, comment vous pouvez vous y opposer, et comment nous contacter pour exercer vos droits au titre du RGPD, du CCPA ou de toute loi équivalente.',
    sections: [
      { h: 'Champ d\'application', p: 'Cette politique s\'applique à toute personne qui visite une page de datecalc.app, quel que soit son pays. Les visiteurs de l\'UE/EEE sont couverts par le RGPD, ceux du Royaume-Uni par le UK GDPR, les résidents californiens par le CCPA, et les résidents d\'autres juridictions (LGPD au Brésil, PIPEDA au Canada, etc.) bénéficient de la protection la plus forte que nous pouvons raisonnablement offrir. Si vous avez moins de 16 ans (ou l\'âge du consentement numérique dans votre pays s\'il est plus élevé), ne consentez pas aux cookies publicitaires sans l\'accord d\'un parent ou tuteur.' },
      { h: 'Données que nous collectons directement', p: 'Pratiquement aucune. DateCalc.app n\'utilise ni comptes utilisateurs, ni connexions, ni formulaires, ni analytique, ni cookies propriétaires, ni aucun tracker de première main. Les dates que vous saisissez dans les calculateurs restent dans votre onglet et sont effacées à la fermeture. Le seul contact direct que nous pouvons avoir avec vous est par e-mail, si vous choisissez de nous écrire, auquel cas nous conservons le contenu de l\'échange jusqu\'à résolution.' },
      { h: 'Données collectées par des tiers', p: 'Le simple chargement d\'une page web implique le partage de données techniques avec l\'infrastructure qui la sert. Sur datecalc.app cela signifie : <strong>Cloudflare Pages</strong> (notre hébergeur) peut journaliser votre adresse IP, user-agent, referrer et URL demandée à des fins de sécurité, lutte anti-abus et performance, selon <a href="https://www.cloudflare.com/privacypolicy/">la politique Cloudflare</a> ; <strong>Google Fonts</strong> (fonts.gstatic.com) reçoit une requête de police pouvant inclure votre IP, selon <a href="https://policies.google.com/privacy">la politique Google</a> ; <strong>Google AdSense</strong> peut déposer des cookies et collecter des données d\'interaction publicitaire lors du chargement des annonces (détails plus bas).' },
      { h: 'Cookies utilisés sur ce site', p: 'Nous regroupons les cookies en trois catégories. <strong>Strictement nécessaires</strong> : aucun déposé par nous ; un indicateur <code>localStorage</code> nommé <code>ads-ok</code> enregistre votre choix de consentement pour ne pas vous redemander à chaque visite — il ne quitte jamais votre navigateur. <strong>Cookies publicitaires (Google AdSense)</strong> : déposés uniquement si vous cliquez « Accepter » sur la bannière de consentement ; ils permettent la publicité personnalisée et la mesure. Dans l\'UE/UK ils ne sont jamais déposés sans votre consentement. <strong>Analytiques</strong> : aucun — pas de Google Analytics ni équivalent.' },
      { h: 'Google AdSense', p: 'Ce site est financé par Google AdSense. Lors du chargement des annonces, Google et ses partenaires certifiés peuvent déposer des cookies, utiliser des identifiants d\'appareil et collecter des données sur votre interaction avec les annonces (impressions, clics, visibilité) et — uniquement avec votre consentement — sur votre navigation sur d\'autres sites partenaires AdSense, afin de personnaliser la publicité. Vous pouvez consulter et ajuster ces préférences à tout moment dans <a href="https://myaccount.google.com/yourdata/ads">les paramètres Google Ads</a>, consulter <a href="https://policies.google.com/technologies/ads">la politique publicitaire de Google</a> ou vous désinscrire via votre CMP (dans l\'UE) ou <a href="https://optout.networkadvertising.org">la NAI</a> (hors UE).' },
      { h: 'Vos droits (RGPD / CCPA)', p: 'Puisque nous ne détenons en pratique aucune donnée personnelle de première main vous concernant, la plupart des droits RGPD/CCPA (accès, rectification, effacement, portabilité) sont satisfaits par le simple fait que nous n\'avons rien à accéder, rectifier, effacer ni transférer. Vous pouvez néanmoins : <strong>retirer votre consentement</strong> aux cookies publicitaires à tout moment (effacer <code>ads-ok</code> ou utiliser la bannière quand elle réapparaît) ; <strong>vous opposer</strong> au traitement pour publicité personnalisée (voir les opt-outs Google ci-dessus) ; <strong>introduire une réclamation</strong> auprès de l\'autorité compétente (CNIL en France, BfDI en Allemagne, ICO au Royaume-Uni, Garante en Italie, AEPD en Espagne, etc.).' },
      { h: 'Base légale (visiteurs UE / UK)', p: 'Au titre du RGPD nous nous appuyons sur : le <em>consentement</em> (art. 6.1.a) pour les cookies publicitaires et tout traitement personnalisé ; l\'<em>intérêt légitime</em> (art. 6.1.f) pour les journaux d\'accès agrégés servant à exploiter et sécuriser le site ; l\'<em>exécution du service</em> (art. 6.1.b) pour le chargement des polices et actifs statiques nécessaires au rendu. Vous pouvez retirer votre consentement à tout moment sans remettre en cause la licéité du traitement antérieur.' },
      { h: 'Durée de conservation', p: 'Journaux d\'accès serveur (Cloudflare) : généralement 24 à 72 heures, à des fins de sécurité. Cookies AdSense : conservés selon le calendrier Google (en général jusqu\'à 13 mois pour les cookies publicitaires dans l\'UE). Indicateur de consentement dans le localStorage : conservé jusqu\'à ce que vous le supprimiez ou changiez d\'avis. E-mails que vous nous envoyez : conservés jusqu\'à résolution, puis supprimés sous 12 mois sauf obligation légale.' },
      { h: 'Contact', p: 'Pour toute question de confidentialité, retrait de consentement ou exercice d\'un droit, écrivez à <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>. Nous lisons chaque message et répondons en général sous quelques jours ouvrés. Pour les requêtes spécifiques à Google (ce qu\'AdSense stocke, suppression de votre profil publicitaire), utilisez les canaux Google liés ci-dessus — nous ne pouvons pas modifier leurs enregistrements à votre place.' },
    ],
  },
  es: {
    title: 'Política de privacidad — DateCalc.app',
    h1: 'Política de privacidad',
    updated: 'Última actualización: 19 de abril de 2026',
    intro: 'DateCalc.app es una calculadora de fechas y horas multilingüe y gratuita. Las calculadoras se ejecutan enteramente en tu navegador y nunca transmiten tus fechas a ningún servidor — pero dependemos de algunos servicios de terceros (Google AdSense para publicidad y Cloudflare Pages para el alojamiento) para mantener el sitio gratuito. Esta página explica, sin jerga, qué datos se recopilan, por quién, cómo puedes oponerte y cómo contactarnos para ejercer tus derechos bajo el RGPD, la CCPA o cualquier ley equivalente.',
    sections: [
      { h: 'Ámbito de aplicación', p: 'Esta política se aplica a cualquier visitante de cualquier página de datecalc.app, sin importar el país. Los visitantes de la UE/EEE están cubiertos por el RGPD, los del Reino Unido por el UK GDPR, los residentes de California por la CCPA, y los residentes de otras jurisdicciones (LGPD en Brasil, PIPEDA en Canadá, etc.) se benefician de la protección más fuerte que podamos ofrecer razonablemente. Si eres menor de 16 años (o la edad de consentimiento digital en tu país si es mayor), no consientas las cookies publicitarias sin la participación de un padre o tutor.' },
      { h: 'Datos que recopilamos directamente', p: 'Prácticamente ninguno. DateCalc.app no usa cuentas de usuario, inicios de sesión, formularios, analíticas, cookies propias ni ningún rastreador de primera parte. Las fechas que introduces en las calculadoras permanecen en tu pestaña del navegador y se descartan al cerrarla. El único contacto directo que podemos tener contigo es por correo electrónico, si eliges escribirnos, en cuyo caso conservamos el contenido del correo hasta resolver el asunto.' },
      { h: 'Datos recopilados por terceros', p: 'Cargar cualquier página web implica inherentemente compartir datos técnicos con la infraestructura que la sirve. En datecalc.app eso significa: <strong>Cloudflare Pages</strong> (nuestro host) puede registrar tu dirección IP, user-agent, referrer y URL solicitada por motivos de seguridad, prevención de abuso y rendimiento, según <a href="https://www.cloudflare.com/privacypolicy/">la política de Cloudflare</a>; <strong>Google Fonts</strong> (fonts.gstatic.com) recibe una solicitud de fuente que puede incluir tu IP, según <a href="https://policies.google.com/privacy">la política de Google</a>; <strong>Google AdSense</strong> puede establecer cookies y recopilar datos de interacción publicitaria al cargar los anuncios (detalles más abajo).' },
      { h: 'Cookies utilizadas', p: 'Agrupamos las cookies en tres categorías. <strong>Estrictamente necesarias</strong>: ninguna establecida por nosotros; una bandera en <code>localStorage</code> llamada <code>ads-ok</code> registra tu elección de consentimiento para no preguntarte en cada visita — nunca sale de tu navegador. <strong>Cookies publicitarias (Google AdSense)</strong>: solo se establecen si haces clic en "Aceptar" en el banner de consentimiento; permiten anuncios personalizados y medición. En la UE/Reino Unido nunca se establecen sin tu consentimiento. <strong>Analíticas</strong>: ninguna — DateCalc.app no usa Google Analytics ni equivalente.' },
      { h: 'Google AdSense', p: 'Este sitio está financiado por Google AdSense. Al cargarse los anuncios, Google y sus socios certificados pueden colocar cookies, usar identificadores de dispositivo y recopilar datos sobre tu interacción con los anuncios (impresiones, clics, visibilidad) y — solo si consientes — sobre tu navegación en otros sitios con AdSense, para personalizar la publicidad. Puedes revisar y ajustar estas preferencias en cualquier momento desde <a href="https://myaccount.google.com/yourdata/ads">los ajustes de Google Ads</a>, consultar <a href="https://policies.google.com/technologies/ads">la política publicitaria de Google</a>, u optar por no recibir publicidad personalizada a través de tu CMP (en la UE) o <a href="https://optout.networkadvertising.org">NAI</a> (fuera de la UE).' },
      { h: 'Tus derechos (RGPD / CCPA)', p: 'Como no conservamos prácticamente ningún dato personal de primera parte sobre ti, la mayoría de los derechos del RGPD/CCPA (acceso, rectificación, supresión, portabilidad) se satisfacen por el simple hecho de que no tenemos nada a lo que acceder, rectificar, borrar ni portar. No obstante puedes: <strong>retirar el consentimiento</strong> a las cookies publicitarias en cualquier momento (borra <code>ads-ok</code> o usa el banner cuando reaparezca); <strong>oponerte</strong> al tratamiento para publicidad personalizada (usa los opt-outs de Google de arriba); <strong>presentar una reclamación</strong> ante tu autoridad de protección de datos (AEPD en España, CNIL en Francia, BfDI en Alemania, ICO en Reino Unido, etc.).' },
      { h: 'Base legal (visitantes UE / Reino Unido)', p: 'Bajo el RGPD nos basamos en: <em>consentimiento</em> (art. 6.1.a) para las cookies publicitarias y cualquier tratamiento personalizado; <em>interés legítimo</em> (art. 6.1.f) para los registros de acceso agregados que sirven para operar y proteger el sitio; <em>ejecución del servicio</em> (art. 6.1.b) para cargar las fuentes y activos estáticos necesarios para renderizar la página. Puedes retirar el consentimiento en cualquier momento sin que ello afecte la licitud del tratamiento previo.' },
      { h: 'Conservación de datos', p: 'Registros de acceso al servidor (Cloudflare): normalmente de 24 a 72 horas por motivos de seguridad. Cookies de AdSense: conservadas según el calendario de Google (generalmente hasta 13 meses para cookies publicitarias en la UE). Bandera de consentimiento en localStorage: conservada hasta que la borres o cambies de elección. Correos que nos envías: conservados hasta resolver el asunto, y luego eliminados en un plazo de 12 meses salvo obligación legal.' },
      { h: 'Contacto', p: 'Para cualquier consulta sobre privacidad, retirada de consentimiento o ejercicio de un derecho, escribe a <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>. Leemos cada mensaje y solemos responder en pocos días hábiles. Para solicitudes específicas a Google (qué almacena AdSense, eliminación de tu perfil publicitario), usa los canales propios de Google enlazados arriba — nosotros no podemos modificar sus registros en tu nombre.' },
    ],
  },
  pt: {
    title: 'Política de Privacidade — DateCalc.app',
    h1: 'Política de Privacidade',
    updated: 'Última atualização: 19 de abril de 2026',
    intro: 'DateCalc.app é uma calculadora de datas e horas multilíngue e gratuita. As calculadoras rodam inteiramente no seu navegador e nunca transmitem suas datas a qualquer servidor — mas dependemos de alguns serviços de terceiros (Google AdSense para publicidade e Cloudflare Pages para hospedagem) para manter o site gratuito. Esta página explica, sem jargão, quais dados são coletados, por quem, como você pode se opor e como nos contatar para exercer seus direitos sob a LGPD, o RGPD, a CCPA ou qualquer lei equivalente.',
    sections: [
      { h: 'Âmbito de aplicação', p: 'Esta política se aplica a qualquer visitante de qualquer página do datecalc.app, independentemente do país. Visitantes da UE/EEE são cobertos pelo RGPD, visitantes do Reino Unido pelo UK GDPR, residentes da Califórnia pela CCPA, residentes do Brasil pela LGPD e residentes de outras jurisdições (PIPEDA no Canadá, etc.) se beneficiam da proteção mais forte que pudermos razoavelmente oferecer. Se você tem menos de 16 anos (ou a idade de consentimento digital no seu país, se maior), não consinta aos cookies publicitários sem o envolvimento de um responsável.' },
      { h: 'Dados que coletamos diretamente', p: 'Praticamente nenhum. DateCalc.app não usa contas, logins, formulários, analytics, cookies próprios nem nenhum rastreador primário. As datas que você insere nas calculadoras permanecem na sua aba do navegador e são descartadas quando você a fecha. O único contato direto que podemos ter com você é por e-mail, se você optar por nos escrever, caso em que guardamos o conteúdo do e-mail até a resolução do assunto.' },
      { h: 'Dados coletados por terceiros', p: 'Carregar qualquer página web envolve inerentemente o compartilhamento de dados técnicos com a infraestrutura que a serve. No datecalc.app isso significa: <strong>Cloudflare Pages</strong> (nosso host) pode registrar seu IP, user-agent, referrer e URL solicitada para fins de segurança, prevenção de abuso e performance, conforme <a href="https://www.cloudflare.com/privacypolicy/">a política da Cloudflare</a>; <strong>Google Fonts</strong> (fonts.gstatic.com) recebe uma requisição de fonte que pode incluir seu IP, conforme <a href="https://policies.google.com/privacy">a política do Google</a>; <strong>Google AdSense</strong> pode definir cookies e coletar dados de interação com anúncios ao carregar (detalhes abaixo).' },
      { h: 'Cookies utilizados', p: 'Agrupamos os cookies em três categorias. <strong>Estritamente necessários</strong>: nenhum definido por nós; uma flag no <code>localStorage</code> chamada <code>ads-ok</code> registra sua escolha de consentimento para não perguntarmos a cada visita — ela nunca sai do seu navegador. <strong>Cookies publicitários (Google AdSense)</strong>: definidos apenas se você clicar em "Aceitar" no banner de consentimento; habilitam anúncios personalizados e medição. Na UE/Reino Unido nunca são definidos sem consentimento. <strong>Analytics</strong>: nenhum — DateCalc.app não usa Google Analytics nem equivalente.' },
      { h: 'Google AdSense', p: 'Este site é financiado pelo Google AdSense. Quando anúncios são carregados, o Google e seus parceiros certificados podem colocar cookies, usar identificadores de dispositivo e coletar dados sobre sua interação com os anúncios (impressões, cliques, visibilidade) e — apenas mediante consentimento — sobre sua navegação em outros sites com AdSense, para personalizar a publicidade. Você pode revisar e ajustar essas preferências a qualquer momento em <a href="https://myaccount.google.com/yourdata/ads">configurações de anúncios do Google</a>, ler <a href="https://policies.google.com/technologies/ads">a política publicitária do Google</a>, ou optar por sair via seu CMP (na UE) ou <a href="https://optout.networkadvertising.org">NAI</a> (fora da UE).' },
      { h: 'Seus direitos (LGPD / RGPD / CCPA)', p: 'Como não mantemos praticamente nenhum dado pessoal primário sobre você, a maioria dos direitos da LGPD/RGPD/CCPA (acesso, correção, exclusão, portabilidade) é satisfeita pelo simples fato de não termos nada a acessar, corrigir, apagar ou portar. Ainda assim, você pode: <strong>retirar o consentimento</strong> aos cookies publicitários a qualquer momento (apague a flag <code>ads-ok</code> ou use o banner quando reaparecer); <strong>se opor</strong> ao tratamento para publicidade personalizada (use os opt-outs do Google acima); <strong>apresentar reclamação</strong> junto à autoridade competente (ANPD no Brasil, CNIL na França, ICO no Reino Unido, etc.).' },
      { h: 'Base legal (visitantes UE / Reino Unido / Brasil)', p: 'No âmbito da LGPD e do RGPD, baseamo-nos em: <em>consentimento</em> (LGPD art. 7 I / RGPD art. 6.1.a) para cookies publicitários e qualquer tratamento personalizado; <em>legítimo interesse</em> (LGPD art. 7 IX / RGPD art. 6.1.f) para logs de acesso agregados usados para operar e proteger o site; <em>execução do serviço</em> (RGPD art. 6.1.b) para carregar as fontes e ativos estáticos necessários. Você pode retirar o consentimento a qualquer momento sem afetar a legalidade do tratamento anterior.' },
      { h: 'Retenção de dados', p: 'Logs de acesso ao servidor (Cloudflare): geralmente 24 a 72 horas por razões de segurança. Cookies AdSense: retidos conforme o calendário do Google (geralmente até 13 meses para cookies publicitários na UE). Flag de consentimento no localStorage: mantida até você apagá-la ou mudar sua escolha. E-mails que você nos envia: retidos até a resolução, depois excluídos em até 12 meses, salvo obrigação legal.' },
      { h: 'Contato', p: 'Para dúvidas de privacidade, retirada de consentimento ou exercício de qualquer direito, escreva para <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>. Lemos cada mensagem e normalmente respondemos em poucos dias úteis. Para solicitações específicas do Google (o que o AdSense armazena, exclusão do seu perfil publicitário), use os canais do próprio Google linkados acima — não podemos modificar os registros deles em seu nome.' },
    ],
  },
  de: {
    title: 'Datenschutzerklärung — DateCalc.app',
    h1: 'Datenschutzerklärung',
    updated: 'Zuletzt aktualisiert: 19. April 2026',
    intro: 'DateCalc.app ist ein kostenloser, mehrsprachiger Datums- und Zeitrechner. Die Rechner selbst laufen vollständig in deinem Browser und übertragen deine Daten niemals an einen Server — aber wir setzen auf einige Drittanbieter (Google AdSense für Werbung und Cloudflare Pages für Hosting), um die Seite kostenlos zu halten. Diese Seite erklärt in klarer Sprache, welche Daten erhoben werden, von wem, wie du widersprechen kannst und wie du uns erreichst, um deine Rechte nach DSGVO, CCPA oder einer äquivalenten Regelung auszuüben.',
    sections: [
      { h: 'Geltungsbereich', p: 'Diese Richtlinie gilt für jeden Besucher jeder Seite von datecalc.app, unabhängig vom Herkunftsland. Besucher aus der EU/EWR sind durch die DSGVO geschützt, aus dem Vereinigten Königreich durch die UK GDPR, Einwohner Kaliforniens durch den CCPA, und Einwohner anderer Regionen (LGPD Brasilien, PIPEDA Kanada usw.) profitieren vom stärksten anwendbaren Schutz, den wir vernünftigerweise bieten können. Wenn du unter 16 Jahre alt bist (oder unter dem Alter der digitalen Einwilligung in deinem Land, falls höher), stimme Werbe-Cookies nicht ohne Beteiligung eines Elternteils oder Vormunds zu.' },
      { h: 'Daten, die wir direkt erheben', p: 'Praktisch keine. DateCalc.app verwendet keine Benutzerkonten, Logins, Formulare, Analytics, eigenen Cookies oder First-Party-Tracker. Die in die Rechner eingegebenen Daten bleiben in deinem Browser-Tab und werden beim Schließen verworfen. Der einzige direkte Kontakt mit dir ist per E-Mail, falls du uns schreibst; in diesem Fall bewahren wir den Inhalt der E-Mail auf, bis das Anliegen geklärt ist.' },
      { h: 'Daten, die Dritte erheben', p: 'Das bloße Laden einer Webseite teilt zwangsläufig technische Daten mit der dienenden Infrastruktur. Auf datecalc.app heißt das: <strong>Cloudflare Pages</strong> (unser Hoster) kann aus Sicherheits-, Missbrauchs- und Performance-Gründen deine IP, User-Agent, Referrer und die angeforderte URL protokollieren, gemäß <a href="https://www.cloudflare.com/privacypolicy/">Cloudflares Datenschutzerklärung</a>; <strong>Google Fonts</strong> (fonts.gstatic.com) erhält eine Font-Anfrage, die deine IP enthalten kann, gemäß <a href="https://policies.google.com/privacy">Googles Datenschutzerklärung</a>; <strong>Google AdSense</strong> kann beim Laden von Anzeigen Cookies setzen und Interaktionsdaten sammeln (Details unten).' },
      { h: 'Verwendete Cookies', p: 'Wir teilen Cookies in drei Kategorien ein. <strong>Unbedingt erforderlich</strong>: keine von uns gesetzt; ein Flag im <code>localStorage</code> namens <code>ads-ok</code> speichert deine Einwilligung, damit wir nicht bei jedem Besuch erneut fragen — es verlässt nie deinen Browser. <strong>Werbe-Cookies (Google AdSense)</strong>: werden nur gesetzt, wenn du im Consent-Banner auf "Akzeptieren" klickst; sie ermöglichen personalisierte Werbung und Messung. In der EU/UK werden sie niemals ohne deine Einwilligung gesetzt. <strong>Analytics</strong>: keine — DateCalc.app setzt kein Google Analytics oder Äquivalent ein.' },
      { h: 'Google AdSense', p: 'Diese Seite wird über Google AdSense finanziert. Beim Laden von Anzeigen können Google und seine zertifizierten Partner Cookies setzen, Geräte-Identifikatoren verwenden und Daten über deine Interaktion mit Anzeigen (Impressionen, Klicks, Sichtbarkeit) sowie — nur bei Einwilligung — über dein Browsen auf anderen AdSense-Partnerseiten sammeln, um Werbung zu personalisieren. Du kannst diese Einstellungen jederzeit in <a href="https://myaccount.google.com/yourdata/ads">Google Ads-Einstellungen</a> überprüfen, Googles <a href="https://policies.google.com/technologies/ads">Werberichtlinie</a> lesen oder dich per CMP (in der EU) oder <a href="https://optout.networkadvertising.org">NAI</a> (außerhalb der EU) abmelden.' },
      { h: 'Deine Rechte (DSGVO / CCPA)', p: 'Da wir praktisch keine First-Party-Personendaten über dich speichern, sind die meisten DSGVO/CCPA-Rechte (Auskunft, Berichtigung, Löschung, Übertragbarkeit) schlicht dadurch erfüllt, dass wir nichts zum Auskunft-Geben, Berichtigen, Löschen oder Übertragen haben. Du kannst dennoch: deine <strong>Einwilligung widerrufen</strong> (lösche das <code>ads-ok</code>-Flag oder nutze das Banner, wenn es wieder erscheint); der Verarbeitung für personalisierte Werbung <strong>widersprechen</strong> (siehe Googles Opt-outs oben); <strong>Beschwerde einlegen</strong> bei deiner Datenschutzbehörde (z. B. BfDI in Deutschland, LDI NRW, CNIL in Frankreich, ICO im UK, DPC in Irland).' },
      { h: 'Rechtsgrundlage (EU / UK)', p: 'Nach der DSGVO berufen wir uns auf: <em>Einwilligung</em> (Art. 6 Abs. 1 lit. a) für Werbe-Cookies und jede personalisierte Verarbeitung; <em>Berechtigtes Interesse</em> (Art. 6 Abs. 1 lit. f) für aggregierte, nicht-identifizierende Zugriffsprotokolle zum Betrieb und zur Sicherung der Seite; <em>Vertragserfüllung</em> (Art. 6 Abs. 1 lit. b) für das Laden der Schriften und statischen Assets, die für die Darstellung notwendig sind. Du kannst deine Einwilligung jederzeit widerrufen, ohne dass dies die Rechtmäßigkeit der bisherigen Verarbeitung berührt.' },
      { h: 'Speicherdauer', p: 'Server-Zugriffsprotokolle (Cloudflare): üblicherweise 24–72 Stunden aus Sicherheitsgründen. AdSense-Cookies: gemäß Googles eigener Aufbewahrungsplan (in der Regel bis zu 13 Monate für Werbe-Cookies in der EU). Einwilligungs-Flag im localStorage: bleibt, bis du es löschst oder änderst. E-Mails, die du uns schickst: bis zur Klärung aufbewahrt, danach innerhalb von 12 Monaten gelöscht, sofern keine Rechtspflicht besteht.' },
      { h: 'Kontakt', p: 'Für Datenschutzfragen, Widerruf der Einwilligung oder Ausübung eines Rechts schreibe an <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>. Wir lesen jede Nachricht und antworten in der Regel innerhalb weniger Werktage. Für Google-spezifische Anfragen (was AdSense speichert, Löschung deines Werbeprofils) nutze Googles eigene Kanäle oben — wir können ihre Aufzeichnungen nicht in deinem Namen ändern.' },
    ],
  },
  it: {
    title: 'Informativa sulla Privacy — DateCalc.app',
    h1: 'Informativa sulla Privacy',
    updated: 'Ultimo aggiornamento: 19 aprile 2026',
    intro: 'DateCalc.app è un calcolatore di date e orari multilingue e gratuito. I calcolatori girano interamente nel tuo browser e non trasmettono mai le tue date a nessun server — ma ci appoggiamo a qualche servizio di terze parti (Google AdSense per la pubblicità e Cloudflare Pages per l\'hosting) per mantenere il sito gratuito. Questa pagina spiega, senza burocratese, quali dati vengono raccolti, da chi, come puoi opporti e come contattarci per esercitare i tuoi diritti ai sensi del GDPR, del CCPA o di qualsiasi legge equivalente.',
    sections: [
      { h: 'Ambito di applicazione', p: 'Questa policy si applica a chiunque visiti una qualsiasi pagina di datecalc.app, indipendentemente dal paese. I visitatori UE/SEE sono tutelati dal GDPR, i visitatori del Regno Unito dal UK GDPR, i residenti californiani dal CCPA, i residenti di altre giurisdizioni (LGPD Brasile, PIPEDA Canada, ecc.) beneficiano della protezione più forte che possiamo ragionevolmente offrire. Se hai meno di 16 anni (o l\'età del consenso digitale nel tuo paese se superiore), non prestare consenso ai cookie pubblicitari senza il coinvolgimento di un genitore o tutore.' },
      { h: 'Dati che raccogliamo direttamente', p: 'Praticamente nessuno. DateCalc.app non usa account utente, login, moduli, analytics, cookie di prima parte né alcun tracker di prima parte. Le date che inserisci nei calcolatori restano nella tua scheda del browser e vengono scartate alla chiusura. L\'unico contatto diretto con te è via e-mail, se decidi di scriverci; in tal caso conserviamo il contenuto finché la questione non è risolta.' },
      { h: 'Dati raccolti da terze parti', p: 'Il semplice caricamento di una pagina web implica la condivisione di alcuni dati tecnici con l\'infrastruttura che la serve. Su datecalc.app ciò significa: <strong>Cloudflare Pages</strong> (il nostro host) può registrare IP, user-agent, referrer e URL richiesto per sicurezza, prevenzione degli abusi e performance, secondo <a href="https://www.cloudflare.com/privacypolicy/">la policy Cloudflare</a>; <strong>Google Fonts</strong> (fonts.gstatic.com) riceve una richiesta di font che può includere il tuo IP, secondo <a href="https://policies.google.com/privacy">la policy di Google</a>; <strong>Google AdSense</strong> può impostare cookie e raccogliere dati di interazione con gli annunci al loro caricamento (dettagli sotto).' },
      { h: 'Cookie utilizzati', p: 'Raggruppiamo i cookie in tre categorie. <strong>Strettamente necessari</strong>: nessuno impostato da noi; un flag nel <code>localStorage</code> chiamato <code>ads-ok</code> registra la tua scelta di consenso per non richiedertela ogni visita — non lascia mai il tuo browser. <strong>Cookie pubblicitari (Google AdSense)</strong>: impostati solo se clicchi "Accetta" sul banner; abilitano pubblicità personalizzata e misurazione. In UE/UK non vengono mai impostati senza consenso. <strong>Analytics</strong>: nessuno — DateCalc.app non utilizza Google Analytics né equivalenti.' },
      { h: 'Google AdSense', p: 'Questo sito è finanziato da Google AdSense. Al caricamento degli annunci, Google e i suoi partner certificati possono collocare cookie, utilizzare identificatori del dispositivo e raccogliere dati sulla tua interazione con gli annunci (impressioni, click, visibilità) e — solo con il tuo consenso — sulla tua navigazione su altri siti con AdSense, per personalizzare la pubblicità. Puoi rivedere e modificare queste preferenze in qualsiasi momento nelle <a href="https://myaccount.google.com/yourdata/ads">impostazioni pubblicitarie di Google</a>, leggere <a href="https://policies.google.com/technologies/ads">la policy pubblicitaria di Google</a>, o disattivare la pubblicità personalizzata tramite il tuo CMP (in UE) o <a href="https://optout.networkadvertising.org">NAI</a> (fuori UE).' },
      { h: 'I tuoi diritti (GDPR / CCPA)', p: 'Poiché non conserviamo sostanzialmente alcun dato personale di prima parte, la maggior parte dei diritti GDPR/CCPA (accesso, rettifica, cancellazione, portabilità) è soddisfatta dal semplice fatto che non abbiamo nulla a cui accedere, rettificare, cancellare o trasferire. Puoi comunque: <strong>revocare il consenso</strong> ai cookie pubblicitari in qualsiasi momento (cancella <code>ads-ok</code> o usa il banner quando riappare); <strong>opporti</strong> al trattamento per pubblicità personalizzata (usa gli opt-out Google qui sopra); <strong>presentare reclamo</strong> all\'autorità competente (Garante in Italia, CNIL in Francia, BfDI in Germania, ICO nel Regno Unito, ecc.).' },
      { h: 'Base giuridica (visitatori UE / UK)', p: 'Ai sensi del GDPR ci basiamo su: <em>consenso</em> (art. 6.1.a) per i cookie pubblicitari e qualsiasi trattamento personalizzato; <em>legittimo interesse</em> (art. 6.1.f) per i log di accesso aggregati e non identificativi necessari al funzionamento e alla sicurezza del sito; <em>esecuzione del servizio</em> (art. 6.1.b) per il caricamento dei font e degli asset statici necessari a renderizzare la pagina. Puoi revocare il consenso in qualsiasi momento senza pregiudicare la liceità del trattamento precedente.' },
      { h: 'Tempi di conservazione', p: 'Log di accesso server (Cloudflare): generalmente 24–72 ore per motivi di sicurezza. Cookie AdSense: conservati secondo il calendario di Google (di norma fino a 13 mesi per cookie pubblicitari in UE). Flag di consenso nel localStorage: mantenuto finché non lo cancelli o cambi scelta. E-mail che ci invii: conservate fino alla risoluzione, poi eliminate entro 12 mesi salvo obbligo legale.' },
      { h: 'Contatto', p: 'Per domande sulla privacy, revoca del consenso o esercizio di un diritto, scrivi a <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>. Leggiamo ogni messaggio e rispondiamo di solito entro pochi giorni lavorativi. Per richieste specifiche a Google (cosa conserva AdSense, cancellazione del tuo profilo pubblicitario), usa i canali Google linkati sopra — non possiamo modificare i loro dati per tuo conto.' },
    ],
  },
  pl: {
    title: 'Polityka Prywatności — DateCalc.app',
    h1: 'Polityka Prywatności',
    updated: 'Ostatnia aktualizacja: 19 kwietnia 2026',
    intro: 'DateCalc.app to bezpłatny, wielojęzyczny kalkulator dat i czasu. Same kalkulatory działają w całości w Twojej przeglądarce i nigdy nie przesyłają Twoich dat na żaden serwer — ale korzystamy z kilku usług zewnętrznych (Google AdSense do reklam i Cloudflare Pages do hostingu), aby strona pozostała bezpłatna. Ta strona wyjaśnia prostym językiem, jakie dane są zbierane, przez kogo, jak możesz się sprzeciwić oraz jak się z nami skontaktować, aby skorzystać ze swoich praw wynikających z RODO, CCPA lub odpowiedniego prawa lokalnego.',
    sections: [
      { h: 'Zakres polityki', p: 'Polityka ta dotyczy każdej osoby odwiedzającej dowolną stronę datecalc.app, niezależnie od kraju. Odwiedzający z UE/EOG są chronieni przez RODO, z Wielkiej Brytanii przez UK GDPR, mieszkańcy Kalifornii przez CCPA, a mieszkańcy innych jurysdykcji (LGPD w Brazylii, PIPEDA w Kanadzie itp.) korzystają z najsilniejszej ochrony, jaką możemy rozsądnie zaoferować. Jeżeli masz mniej niż 16 lat (lub mniej niż wiek zgody cyfrowej w Twoim kraju, jeśli jest wyższy), nie wyrażaj zgody na cookies reklamowe bez udziału rodzica lub opiekuna.' },
      { h: 'Dane, które zbieramy bezpośrednio', p: 'Praktycznie żadne. DateCalc.app nie używa kont użytkowników, logowań, formularzy, analityki, własnych cookies ani żadnego trackera pierwszej strony. Daty wprowadzone do kalkulatorów pozostają w karcie przeglądarki i są usuwane przy jej zamknięciu. Jedynym bezpośrednim kontaktem z Tobą jest e-mail, jeżeli zdecydujesz się do nas napisać — w takim przypadku przechowujemy treść e-maila do czasu rozstrzygnięcia sprawy.' },
      { h: 'Dane zbierane przez strony trzecie', p: 'Samo wczytanie strony internetowej nieuchronnie dzieli się pewnymi danymi technicznymi z obsługującą ją infrastrukturą. Na datecalc.app oznacza to: <strong>Cloudflare Pages</strong> (nasz host) może rejestrować Twój adres IP, user-agent, referrer i żądany URL do celów bezpieczeństwa, zapobiegania nadużyciom i wydajności, zgodnie z <a href="https://www.cloudflare.com/privacypolicy/">polityką Cloudflare</a>; <strong>Google Fonts</strong> (fonts.gstatic.com) otrzymuje żądanie czcionki mogące zawierać Twój IP, zgodnie z <a href="https://policies.google.com/privacy">polityką Google</a>; <strong>Google AdSense</strong> może ustawić cookies i zbierać dane o interakcji z reklamami podczas ich ładowania (szczegóły poniżej).' },
      { h: 'Używane cookies', p: 'Grupujemy cookies w trzy kategorie. <strong>Ściśle niezbędne</strong>: żadnych ustawionych przez nas; flaga w <code>localStorage</code> o nazwie <code>ads-ok</code> zapisuje Twoją decyzję w sprawie zgody, aby nie pytać przy każdej wizycie — nigdy nie opuszcza Twojej przeglądarki. <strong>Cookies reklamowe (Google AdSense)</strong>: ustawiane tylko gdy klikniesz "Akceptuję" w banerze zgody; umożliwiają spersonalizowane reklamy i pomiar. W UE/UK nigdy nie są ustawiane bez zgody. <strong>Analityka</strong>: żadnej — DateCalc.app nie używa Google Analytics ani odpowiednika.' },
      { h: 'Google AdSense', p: 'Ta strona jest finansowana z Google AdSense. Przy ładowaniu reklam Google i jego certyfikowani partnerzy mogą umieścić cookies, używać identyfikatorów urządzenia i zbierać dane o Twojej interakcji z reklamami (wyświetlenia, kliknięcia, widoczność) oraz — tylko za zgodą — o Twoim poruszaniu się po innych witrynach AdSense, aby personalizować reklamy. Możesz w każdej chwili przejrzeć i dostosować te preferencje w <a href="https://myaccount.google.com/yourdata/ads">ustawieniach reklam Google</a>, przeczytać <a href="https://policies.google.com/technologies/ads">politykę reklamową Google</a> lub zrezygnować z personalizacji przez swój CMP (w UE) albo <a href="https://optout.networkadvertising.org">NAI</a> (poza UE).' },
      { h: 'Twoje prawa (RODO / CCPA)', p: 'Ponieważ nie przechowujemy praktycznie żadnych Twoich danych osobowych pierwszej strony, większość praw z RODO/CCPA (dostęp, sprostowanie, usunięcie, przenoszenie) jest spełniona przez sam fakt, że nie mamy nic do udostępnienia, sprostowania, usunięcia ani przeniesienia. Możesz jednak: <strong>wycofać zgodę</strong> na cookies reklamowe w dowolnym momencie (wyczyść flagę <code>ads-ok</code> lub użyj banera, gdy ponownie się pojawi); <strong>sprzeciwić się</strong> przetwarzaniu do celów reklamy spersonalizowanej (użyj opt-outów Google); <strong>złożyć skargę</strong> do właściwego organu (UODO w Polsce, CNIL we Francji, BfDI w Niemczech, ICO w UK itd.).' },
      { h: 'Podstawa prawna (odwiedzający UE / UK)', p: 'W ramach RODO opieramy się na: <em>zgodzie</em> (art. 6 ust. 1 lit. a) w przypadku cookies reklamowych i każdego spersonalizowanego przetwarzania; <em>uzasadnionym interesie</em> (art. 6 ust. 1 lit. f) dla zbiorczych, nieidentyfikujących logów dostępu służących do obsługi i zabezpieczenia strony; <em>wykonaniu usługi</em> (art. 6 ust. 1 lit. b) dla ładowania czcionek i statycznych zasobów potrzebnych do wyrenderowania strony. Zgodę możesz wycofać w dowolnej chwili, co nie wpływa na zgodność z prawem wcześniejszego przetwarzania.' },
      { h: 'Okres przechowywania', p: 'Logi dostępu serwera (Cloudflare): zwykle 24–72 godziny ze względów bezpieczeństwa. Cookies AdSense: przechowywane zgodnie z harmonogramem Google (zwykle do 13 miesięcy dla cookies reklamowych w UE). Flaga zgody w localStorage: trzymana dopóki jej nie usuniesz lub nie zmienisz wyboru. E-maile, które do nas wysyłasz: przechowywane do czasu rozwiązania sprawy, a następnie usuwane w ciągu 12 miesięcy, chyba że wymaga tego obowiązek prawny.' },
      { h: 'Kontakt', p: 'W sprawach prywatności, wycofania zgody lub skorzystania z dowolnego prawa napisz na <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>. Czytamy każdą wiadomość i zwykle odpowiadamy w ciągu kilku dni roboczych. W przypadku zapytań dotyczących Google (co przechowuje AdSense, usunięcie profilu reklamowego) korzystaj z kanałów Google linkowanych wyżej — nie możemy zmieniać ich rekordów w Twoim imieniu.' },
    ],
  },
  ja: {
    title: 'プライバシーポリシー — DateCalc.app',
    h1: 'プライバシーポリシー',
    updated: '最終更新日：2026年4月19日',
    intro: 'DateCalc.appは無料の多言語対応・日付時刻計算ツールです。計算機自体は完全にお客様のブラウザ内で動作し、入力された日付がサーバーに送信されることはありません — ただし、サイトを無料で提供するため、少数の第三者サービス（広告配信のGoogle AdSense、ホスティングのCloudflare Pages）を利用しています。本ページでは、どのデータが誰によって収集されるのか、どのように同意を撤回できるのか、GDPR・CCPA・日本の個人情報保護法など関連法令に基づくお客様の権利を行使するための連絡先を、平易な言葉で説明します。',
    sections: [
      { h: '本ポリシーの適用範囲', p: '本ポリシーは、国を問わず、datecalc.app上のあらゆるページを訪問するすべての方に適用されます。EU/EEA居住者はGDPR、英国居住者はUK GDPR、カリフォルニア州居住者はCCPA、ブラジル居住者はLGPD、日本居住者は個人情報保護法（APPI）、その他の地域の居住者は当方が合理的に提供できる最も強力な保護の対象となります。16歳未満（またはお住まいの国で定められたデジタル同意年齢がこれより高い場合はその年齢未満）の方は、保護者の関与なしに広告クッキーに同意しないでください。' },
      { h: '当サイトが直接収集するデータ', p: '実質的に何も収集していません。DateCalc.appはユーザーアカウント、ログイン、フォーム、アナリティクス、ファーストパーティCookie、ファーストパーティトラッカーのいずれも使用していません。計算機に入力した日付はブラウザのタブ内にのみ保持され、閉じた時点で破棄されます。お客様との直接のやり取りは、お問い合わせメールをいただいた場合のみであり、その場合はご質問解決までメールの内容を保管します。' },
      { h: '第三者が収集するデータ', p: 'ウェブページの読み込み自体が、ページを配信するインフラに技術的データの共有を伴います。datecalc.appでは具体的に、<strong>Cloudflare Pages</strong>（ホスティング事業者）がセキュリティ、不正利用防止、パフォーマンスの目的で、お客様のIPアドレス・ユーザーエージェント・リファラ・要求URLを記録する場合があります（<a href="https://www.cloudflare.com/privacypolicy/">Cloudflareのポリシー</a>参照）。<strong>Google Fonts</strong>（fonts.gstatic.com）は、フォントのリクエストを受ける際にお客様のIPを一時的に記録する場合があります（<a href="https://policies.google.com/privacy">Googleのポリシー</a>参照）。<strong>Google AdSense</strong>は広告を読み込む際にCookieを設定し、広告との接触データを収集することがあります（詳細は以下）。' },
      { h: '使用するCookie', p: 'Cookieを3つのカテゴリーに分類します。<strong>厳密に必要なCookie</strong>：当サイトが設定するものはありません。<code>localStorage</code>に保存される<code>ads-ok</code>フラグは、毎回の訪問で同意を求めないようお客様の選択を記録するのみで、ブラウザから外部に出ることはありません。<strong>広告Cookie（Google AdSense）</strong>：同意バナーで「同意する」をクリックした場合にのみ設定され、パーソナライズ広告と効果測定を可能にします。EU/UKでは同意なしには設定しません。<strong>アナリティクス</strong>：使用していません — Google Analytics等は一切導入していません。' },
      { h: 'Google AdSense', p: '当サイトはGoogle AdSenseにより運営されています。広告読み込み時に、Googleおよび認定パートナーがCookieを設置し、デバイス識別子を使用し、広告との接触データ（インプレッション、クリック、視認性）を収集します。同意がある場合のみ、他のAdSense対応サイトでの閲覧行動も収集され、広告のパーソナライズに利用されます。これらの設定は<a href="https://myaccount.google.com/yourdata/ads">Google広告設定</a>でいつでも確認・変更でき、<a href="https://policies.google.com/technologies/ads">Googleの広告ポリシー</a>で詳細を確認できます。EU内ではCMPから、EU外では<a href="https://optout.networkadvertising.org">NAI</a>からパーソナライズ広告をオプトアウトできます。' },
      { h: 'お客様の権利（GDPR / CCPA / APPI）', p: '当サイトは実質的にお客様のファーストパーティ個人データを保有していないため、GDPR/CCPA/APPIのほとんどの権利（アクセス、訂正、削除、ポータビリティ）は、そもそも該当データが存在しないことで自然に満たされます。ただし以下の対応は可能です：広告Cookieへの<strong>同意の撤回</strong>（<code>ads-ok</code>フラグを削除するか、再表示された同意バナーを使用）。パーソナライズ広告処理への<strong>異議申し立て</strong>（上記Googleのオプトアウトをご利用ください）。所管監督機関（日本の個人情報保護委員会、フランスのCNIL、英国のICO、ドイツのBfDI等）への<strong>苦情申立</strong>。' },
      { h: '法的根拠（EU / UK訪問者）', p: 'GDPRの下では以下を根拠とします：広告Cookieおよびパーソナライズ処理については<em>同意</em>（第6条1項(a)）。サイトの運営とセキュリティに必要な集約・非識別のアクセスログについては<em>正当な利益</em>（第6条1項(f)）。ページ描画に必要なフォントおよび静的アセットの読み込みについては<em>サービスの履行</em>（第6条1項(b)）。同意はいつでも撤回可能で、撤回以前の処理の適法性には影響しません。' },
      { h: 'データ保持期間', p: 'サーバーアクセスログ（Cloudflare）：セキュリティ目的で通常24〜72時間。AdSense Cookie：Google独自のスケジュール（EUでは広告Cookie通常最大13ヶ月）。localStorageの同意フラグ：お客様が削除または変更するまで保持。お客様から受領したメール：問題解決まで保管し、その後12ヶ月以内に削除（ただし法的義務がある場合を除く）。' },
      { h: 'お問い合わせ', p: 'プライバシーに関するご質問、同意の撤回、権利の行使は <a href="mailto:hello@datecalc.app">hello@datecalc.app</a> までお送りください。すべてのメッセージを読み、通常は数営業日以内にご返信します。Google特有のデータ要求（AdSenseが保存する内容、広告プロファイルの削除など）については、上記リンクのGoogle独自の窓口をご利用ください — 当方から彼らの記録を変更することはできません。' },
    ],
  },
  ko: {
    title: '개인정보 보호정책 — DateCalc.app',
    h1: '개인정보 보호정책',
    updated: '최종 업데이트: 2026년 4월 19일',
    intro: 'DateCalc.app은 무료 다국어 날짜·시간 계산기입니다. 계산기 자체는 전적으로 사용자의 브라우저 안에서 동작하며 입력된 날짜를 어떤 서버로도 전송하지 않습니다 — 다만 사이트를 무료로 유지하기 위해 몇 가지 제3자 서비스(광고용 Google AdSense, 호스팅용 Cloudflare Pages)를 이용합니다. 이 페이지에서는 어떤 데이터가 누구에 의해 수집되는지, 어떻게 이의를 제기할 수 있는지, GDPR·CCPA·한국 개인정보보호법 등 관련 법령에 따른 권리를 행사하기 위한 연락처를 쉽게 설명합니다.',
    sections: [
      { h: '본 정책의 적용 범위', p: '본 정책은 국가에 관계없이 datecalc.app의 모든 페이지를 방문하는 모든 사람에게 적용됩니다. EU/EEA 방문자는 GDPR, 영국 방문자는 UK GDPR, 캘리포니아 거주자는 CCPA, 한국 거주자는 개인정보보호법, 기타 지역 거주자(브라질 LGPD, 캐나다 PIPEDA 등)는 합리적으로 제공할 수 있는 가장 강력한 보호를 받습니다. 만 16세 미만(또는 해당 국가의 디지털 동의 가능 연령이 더 높다면 그 연령 미만)이신 경우, 보호자의 참여 없이는 광고 쿠키에 동의하지 마십시오.' },
      { h: '저희가 직접 수집하는 데이터', p: '사실상 없습니다. DateCalc.app은 사용자 계정, 로그인, 폼, 분석 도구, 자체 쿠키, 1차 추적기 중 어느 것도 사용하지 않습니다. 계산기에 입력한 날짜는 브라우저 탭 안에서만 유지되며, 탭을 닫으면 삭제됩니다. 사용자와의 유일한 직접 접촉은 이메일 문의이며, 그 경우 문제가 해결될 때까지 메일 내용을 보관합니다.' },
      { h: '제3자가 수집하는 데이터', p: '어떤 웹 페이지든 불러오는 것 자체가 서비스 인프라와 일부 기술 데이터를 공유하는 것을 의미합니다. datecalc.app에서는 다음을 의미합니다: <strong>Cloudflare Pages</strong>(호스팅 사업자)는 보안, 남용 방지, 성능 목적으로 사용자의 IP, User-Agent, 레퍼러, 요청 URL을 기록할 수 있습니다(<a href="https://www.cloudflare.com/privacypolicy/">Cloudflare 정책</a> 참조). <strong>Google Fonts</strong>(fonts.gstatic.com)는 폰트 요청을 받을 때 사용자의 IP를 기록할 수 있습니다(<a href="https://policies.google.com/privacy">Google 정책</a> 참조). <strong>Google AdSense</strong>는 광고가 로드될 때 쿠키를 설정하고 광고 상호작용 데이터를 수집할 수 있습니다(아래 상세).' },
      { h: '사용하는 쿠키', p: '쿠키를 세 가지 범주로 분류합니다. <strong>엄격히 필요한 쿠키</strong>: 저희가 설정하는 것은 없습니다. <code>localStorage</code>에 저장되는 <code>ads-ok</code> 플래그는 매번 동의를 묻지 않도록 사용자의 선택을 기록할 뿐, 브라우저를 벗어나지 않습니다. <strong>광고 쿠키(Google AdSense)</strong>: 동의 배너에서 "동의"를 클릭한 경우에만 설정되며, 맞춤 광고와 측정을 가능하게 합니다. EU/영국에서는 동의 없이 설정되지 않습니다. <strong>분석</strong>: 없음 — DateCalc.app은 Google Analytics나 이에 상응하는 도구를 사용하지 않습니다.' },
      { h: 'Google AdSense', p: '이 사이트는 Google AdSense의 수익으로 운영됩니다. 광고가 로드될 때 Google 및 인증된 파트너는 쿠키를 설정하고, 기기 식별자를 사용하며, 광고와의 상호작용 데이터(노출, 클릭, 가시성)를 수집할 수 있습니다. 동의하는 경우에 한해 다른 AdSense 가맹 사이트에서의 브라우징 데이터도 수집하여 광고를 개인화합니다. 이 설정은 <a href="https://myaccount.google.com/yourdata/ads">Google 광고 설정</a>에서 언제든지 확인·조정할 수 있으며, <a href="https://policies.google.com/technologies/ads">Google의 광고 정책</a>을 읽거나 EU 내에서는 CMP, EU 밖에서는 <a href="https://optout.networkadvertising.org">NAI</a>를 통해 맞춤 광고를 거부할 수 있습니다.' },
      { h: '이용자의 권리 (GDPR / CCPA / 개인정보보호법)', p: '저희가 실질적으로 1차 개인정보를 보유하지 않으므로 GDPR/CCPA/개인정보보호법상의 대부분의 권리(열람, 정정, 삭제, 이동)는 해당 데이터 자체가 없다는 점만으로 충족됩니다. 그럼에도 다음은 가능합니다: 광고 쿠키에 대한 <strong>동의 철회</strong>(언제든지 <code>ads-ok</code> 플래그 삭제 또는 배너 재사용); 맞춤 광고 처리에 대한 <strong>이의 제기</strong>(위의 Google 옵트아웃 이용); 소관 감독기관(한국 개인정보보호위원회, 프랑스 CNIL, 영국 ICO, 독일 BfDI 등)에 대한 <strong>불만 제기</strong>.' },
      { h: '법적 근거 (EU / 영국 방문자)', p: 'GDPR에 따라 저희는 다음에 의거합니다: 광고 쿠키 및 모든 맞춤 처리에 대해서는 <em>동의</em>(제6조 1항 (a)); 사이트 운영 및 보안을 위한 집계·비식별 접속 로그에 대해서는 <em>정당한 이익</em>(제6조 1항 (f)); 페이지 렌더링에 필요한 폰트 및 정적 리소스 로드에 대해서는 <em>서비스 이행</em>(제6조 1항 (b)). 동의는 언제든지 철회할 수 있으며, 이전 처리의 적법성에는 영향을 미치지 않습니다.' },
      { h: '데이터 보관 기간', p: '서버 접속 로그(Cloudflare): 일반적으로 보안 목적으로 24〜72시간. AdSense 쿠키: Google 자체 보관 일정에 따름(EU의 광고 쿠키는 일반적으로 최대 13개월). localStorage의 동의 플래그: 사용자가 삭제하거나 선택을 변경할 때까지. 사용자가 보낸 이메일: 문제 해결 시까지 보관 후 12개월 이내에 삭제(법적 의무가 있는 경우 제외).' },
      { h: '문의', p: '개인정보 관련 문의, 동의 철회, 어떤 권리 행사든 <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>로 연락 주십시오. 모든 메시지를 읽으며 보통 며칠 내에 답변 드립니다. Google 관련 요청(AdSense가 저장하는 내용, 광고 프로필 삭제)은 위 링크된 Google 자체 창구를 이용하십시오 — 저희가 그들의 기록을 사용자 대신 수정할 수는 없습니다.' },
    ],
  },
  nl: {
    title: 'Privacybeleid — DateCalc.app',
    h1: 'Privacybeleid',
    updated: 'Laatst bijgewerkt: 19 april 2026',
    intro: 'DateCalc.app is een gratis meertalige datum- en tijdcalculator. De calculators zelf draaien volledig in je browser en versturen je datums nooit naar een server — maar we leunen op enkele externe diensten (Google AdSense voor advertenties, Cloudflare Pages voor hosting) om de site gratis te houden. Deze pagina legt in heldere taal uit welke gegevens worden verzameld, door wie, hoe je bezwaar kunt maken, en hoe je ons bereikt om je rechten onder de AVG, CCPA of gelijkwaardige wetgeving uit te oefenen.',
    sections: [
      { h: 'Toepassingsgebied', p: 'Dit beleid geldt voor iedere bezoeker van iedere pagina op datecalc.app, ongeacht land. EU/EER-bezoekers zijn beschermd door de AVG, Britse bezoekers door de UK GDPR, Californische inwoners door de CCPA, en inwoners van andere jurisdicties (LGPD Brazilië, PIPEDA Canada enz.) krijgen de sterkste bescherming die we redelijkerwijs kunnen bieden. Ben je jonger dan 16 (of jonger dan de digitale toestemmingsleeftijd in jouw land, als die hoger is), stem dan niet in met advertentiecookies zonder betrokkenheid van een ouder of voogd.' },
      { h: 'Gegevens die we zelf verzamelen', p: 'Nagenoeg geen. DateCalc.app gebruikt geen gebruikersaccounts, logins, formulieren, analytics, eigen cookies of first-party trackers. De datums die je in de calculators invoert blijven in je browsertabblad en worden gewist zodra je dat tabblad sluit. Het enige directe contact dat we met jou hebben is via e-mail als je ons schrijft; in dat geval bewaren we de inhoud totdat je vraag is beantwoord.' },
      { h: 'Gegevens verzameld door derden', p: 'Het laden van een webpagina deelt onvermijdelijk enkele technische gegevens met de infrastructuur die de pagina bedient. Op datecalc.app betekent dat: <strong>Cloudflare Pages</strong> (onze host) kan je IP-adres, user-agent, referrer en opgevraagde URL loggen voor beveiliging, misbruikpreventie en prestaties, conform <a href="https://www.cloudflare.com/privacypolicy/">het Cloudflare-beleid</a>; <strong>Google Fonts</strong> (fonts.gstatic.com) ontvangt een font-verzoek dat je IP kan bevatten, conform <a href="https://policies.google.com/privacy">het Google-beleid</a>; <strong>Google AdSense</strong> kan bij het laden van advertenties cookies plaatsen en interactie-gegevens verzamelen (details hieronder).' },
      { h: 'Gebruikte cookies', p: 'We delen cookies in drie categorieën in. <strong>Strikt noodzakelijk</strong>: geen door ons geplaatst; een vlag in <code>localStorage</code> genaamd <code>ads-ok</code> registreert jouw toestemmingskeuze zodat we het niet elk bezoek opnieuw vragen — deze verlaat nooit je browser. <strong>Advertentiecookies (Google AdSense)</strong>: worden alleen geplaatst als je op "Accepteren" klikt in de consentbanner; ze maken gepersonaliseerde advertenties en meting mogelijk. In EU/UK worden ze nooit zonder toestemming geplaatst. <strong>Analytics</strong>: geen — DateCalc.app draait geen Google Analytics of equivalent.' },
      { h: 'Google AdSense', p: 'Deze site wordt gefinancierd door Google AdSense. Bij het laden van advertenties kunnen Google en zijn gecertificeerde partners cookies plaatsen, apparaatidentifiers gebruiken en gegevens verzamelen over jouw interactie met advertenties (impressies, kliks, zichtbaarheid) en — alleen met jouw toestemming — over jouw surfgedrag op andere AdSense-partnersites, om advertenties te personaliseren. Je kunt deze instellingen op elk moment bekijken en aanpassen in <a href="https://myaccount.google.com/yourdata/ads">Google-advertentie-instellingen</a>, <a href="https://policies.google.com/technologies/ads">Googles advertentiebeleid</a> lezen, of je afmelden via je CMP (in de EU) of <a href="https://optout.networkadvertising.org">NAI</a> (buiten de EU).' },
      { h: 'Jouw rechten (AVG / CCPA)', p: 'Omdat we praktisch geen persoonsgegevens van jou als first party bewaren, worden de meeste AVG/CCPA-rechten (inzage, rectificatie, wissing, overdraagbaarheid) vervuld door het simpele feit dat we niets hebben om in te zien, te corrigeren, te wissen of over te dragen. Je kunt echter wel: je <strong>toestemming intrekken</strong> voor advertentiecookies op elk moment (wis <code>ads-ok</code> of gebruik de banner wanneer deze opnieuw verschijnt); <strong>bezwaar maken</strong> tegen verwerking voor gepersonaliseerde advertenties (gebruik de Google-opt-outs hierboven); een <strong>klacht indienen</strong> bij je toezichthouder (AP in Nederland, CBE in België, CNIL in Frankrijk, ICO in het VK enz.).' },
      { h: 'Rechtsgrond (EU / UK bezoekers)', p: 'Onder de AVG baseren we ons op: <em>toestemming</em> (art. 6.1.a) voor advertentiecookies en elke gepersonaliseerde verwerking; <em>gerechtvaardigd belang</em> (art. 6.1.f) voor geaggregeerde, niet-identificerende toegangslogboeken die nodig zijn voor de werking en beveiliging van de site; <em>uitvoering van de dienst</em> (art. 6.1.b) voor het laden van de lettertypes en statische assets die nodig zijn om de pagina weer te geven. Je kunt je toestemming op elk moment intrekken zonder dat dit de rechtmatigheid van eerdere verwerking aantast.' },
      { h: 'Bewaartermijnen', p: 'Server-toegangslogboeken (Cloudflare): doorgaans 24–72 uur om veiligheidsredenen. AdSense-cookies: bewaard volgens Googles eigen schema (meestal tot 13 maanden voor advertentiecookies in de EU). Toestemmingsvlag in localStorage: bewaard totdat je deze wist of je keuze verandert. E-mails die je ons stuurt: bewaard totdat de kwestie is opgelost, daarna binnen 12 maanden verwijderd tenzij een wettelijke plicht dat verhindert.' },
      { h: 'Contact', p: 'Voor privacyvragen, het intrekken van toestemming of het uitoefenen van een recht kun je mailen naar <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>. We lezen elke boodschap en antwoorden meestal binnen een paar werkdagen. Voor Google-specifieke verzoeken (wat AdSense opslaat, verwijdering van je advertentieprofiel) gebruik je de Google-kanalen hierboven — wij kunnen hun registraties niet namens jou aanpassen.' },
    ],
  },
};
const PRIVACY_HREFLANG_HREF = {
  en: 'https://datecalc.app/privacy/',
  fr: 'https://datecalc.app/fr/confidentialite/',
  es: 'https://datecalc.app/es/privacidad/',
  pt: 'https://datecalc.app/pt/privacidade/',
  de: 'https://datecalc.app/de/datenschutz/',
  it: 'https://datecalc.app/it/privacy/',
  pl: 'https://datecalc.app/pl/prywatnosc/',
  ja: 'https://datecalc.app/ja/privacy/',
  ko: 'https://datecalc.app/ko/privacy/',
  nl: 'https://datecalc.app/nl/privacy/',
};
const hreflangPrivacy = [
  ...INDEXABLE_LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="${PRIVACY_HREFLANG_HREF[l]}">`),
  `<link rel="alternate" hreflang="x-default" href="${PRIVACY_HREFLANG_HREF.en}">`,
].join('\n');

for (const { lang, slug, canonical } of PRIVACY_PAGES) {
  const p = PRIVACY_CONTENT[lang];
  const outDir = path.join(DIST, slug);
  fs.mkdirSync(outDir, { recursive: true });
  const sectionsHtml = p.sections.map(s =>
    `<h2>${s.h}</h2><p>${s.p}</p>`).join('\n');
  const html = `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="${NOINDEX_LANGS.has(lang) ? 'noindex, follow' : 'index, follow'}">
<title>${p.title}</title>
<meta name="description" content="${p.intro.slice(0, 155)}">
<link rel="canonical" href="${canonical}">
${hreflangPrivacy}
${(lang === 'ja' || lang === 'ko') ? '' : `<link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/playfair-normal-latin.woff2" as="font" type="font/woff2" crossorigin>`}
<link rel="stylesheet" href="/style.css">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
${navHubs.NAV_CSS}
</head>
<body>
<a class="skip-link" href="#main-content">Skip to main content</a>
<header>
<div class="masthead">
  <a href="${HOME_HREF[lang]}" class="masthead-brand">DateCalc<span>.</span>app</a>
</div>
</header>
${navHubs.mainNavHTML(lang, canonical.replace('https://datecalc.app', ''))}
<div class="page">
<main id="main-content" style="max-width:680px;margin:3rem auto;padding:0 1.5rem">
  <h1 style="font-family:'Playfair Display',serif;font-size:2rem;margin-bottom:.5rem">${p.h1}</h1>
  <p style="color:var(--muted);font-size:.85rem;margin-bottom:2rem">${p.updated}</p>
  <p style="margin-bottom:2rem">${p.intro}</p>
  <div class="privacy-sections">
${sectionsHtml}
  </div>
</main>
<style>
.privacy-sections h2{font-size:1rem;font-weight:600;margin:1.8rem 0 .4rem;text-transform:uppercase;letter-spacing:.05em}
.privacy-sections p{line-height:1.7;color:#333;margin-bottom:.5rem}
.privacy-sections a{color:var(--accent)}
</style>
  <footer>© ${BUILD_YEAR} DateCalc.app · <a href="${ABOUT_HREF[lang]}">${ABOUT_LBL[lang]}</a> · <a href="${PRIVACY_HREF[lang]}">${PRIVACY_LBL[lang]}</a> · <a href="/${hubs.HUB_SLUGS.birth[lang]}/">${hubs.I18N.birth[lang].self}</a> · <a href="/${hubs.HUB_SLUGS.event[lang]}/">${hubs.I18N.event[lang].self}</a></footer>
</div>
</body>
</html>`;
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  console.log(`  ✓ /${slug}/`);
}

// ── ABOUT PAGES ───────────────────────────────────────────
const ABOUT_PAGES = [
  { lang: 'en', slug: 'about',            canonical: 'https://datecalc.app/about/' },
  { lang: 'fr', slug: 'fr/a-propos',      canonical: 'https://datecalc.app/fr/a-propos/' },
  { lang: 'es', slug: 'es/acerca-de',     canonical: 'https://datecalc.app/es/acerca-de/' },
  { lang: 'pt', slug: 'pt/sobre',         canonical: 'https://datecalc.app/pt/sobre/' },
  { lang: 'de', slug: 'de/ueber-uns',     canonical: 'https://datecalc.app/de/ueber-uns/' },
  { lang: 'it', slug: 'it/chi-siamo',     canonical: 'https://datecalc.app/it/chi-siamo/' },
  { lang: 'pl', slug: 'pl/o-nas',         canonical: 'https://datecalc.app/pl/o-nas/' },
  { lang: 'ja', slug: 'ja/about',         canonical: 'https://datecalc.app/ja/about/' },
  { lang: 'ko', slug: 'ko/about',         canonical: 'https://datecalc.app/ko/about/' },
  { lang: 'nl', slug: 'nl/over-ons',      canonical: 'https://datecalc.app/nl/over-ons/' },
];

const ABOUT_CONTENT = {
  en: {
    title: 'About — DateCalc.app',
    h1: 'About DateCalc.app',
    intro: 'DateCalc.app is a small indie project from France. We make the kind of date and time calculators we\'d want to use ourselves — clean, fast, no dark patterns, accurate in the edge cases other sites get wrong. The site is supported by Google AdSense, which keeps it free for everyone; beyond that minimal advertising layer there are no accounts, no newsletters, no upsell.',
    sections: [
      { h: 'What we offer', p: 'Around 265 individual calculator and reference pages covering age (including baby, cat, and dog age), days between dates, business days, countdowns to major holidays, week numbers in every format (ISO, US, JP), time-zone conversion, and year-by-year birth and events hubs — all available in 10 languages: English, French, Spanish, Portuguese, German, Italian, Polish, Japanese, Korean, and Dutch.' },
      { h: 'How it works', p: 'Every calculation runs directly in your browser using plain JavaScript. There is no backend database, no account system, and no network round-trip for the calculation itself. Your date of birth, your target date, the zodiac sign you just looked up — none of it leaves your device. The only things the browser downloads from a server are the static HTML, CSS, a few fonts, and (if you consented) Google AdSense scripts.' },
      { h: 'How we pay for this', p: 'DateCalc.app is supported by Google AdSense. We don\'t love ads either, but they are what makes it realistic to maintain a free site across 10 languages with zero paywalls, zero "pro tier," and zero email capture. Ads are loaded only if you click "Accept" on the consent banner in the EU/UK; outside those regions they load by default but never use personalized targeting without consent. See the <a href="/privacy/">privacy policy</a> for the full breakdown.' },
      { h: 'Who\'s behind this?', p: 'DateCalc is built and maintained by Mike, a developer based in France who obsesses over edge cases — like whether Japanese week numbers should start on Sunday or Monday (spoiler: it depends on the standard you follow — we default to Monday, ISO 8601, with a US/JP toggle on the roadmap), how to handle February 29 birthdays in a non-leap year, or whether the Korean traditional age system should get its own mode for Korean users (also on the roadmap, not shipped yet). Getting the details right across 10 languages is roughly 80% of the work.' },
      { h: 'Contact', p: 'Feedback, bug reports, feature requests, or just hi — <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>. We read every message. Business inquiries (ads, partnerships, licensing): same address, mark the subject "Business".' },
    ],
  },
  fr: {
    title: 'À propos — DateCalc.app',
    h1: 'À propos de DateCalc.app',
    intro: 'DateCalc.app est un petit projet indé français. Nous construisons les calculateurs de dates et d\'heures que nous aimerions utiliser nous-mêmes — sobres, rapides, sans dark patterns, justes dans les cas limites que les autres sites ratent. Le site est financé par Google AdSense, ce qui permet de le maintenir gratuit ; au-delà de cette fine couche publicitaire, il n\'y a ni compte, ni newsletter, ni upsell.',
    sections: [
      { h: 'Ce que nous proposons', p: 'Environ 265 pages de calculateurs et de références couvrant l\'âge (y compris âge bébé, chien, chat), les jours entre dates, les jours ouvrés, les comptes à rebours vers les grandes fêtes, les numéros de semaine dans tous les formats (ISO, US, JP), la conversion de fuseau horaire, et des hubs année par année pour les naissances et les événements — tout cela en 10 langues : anglais, français, espagnol, portugais, allemand, italien, polonais, japonais, coréen et néerlandais.' },
      { h: 'Comment ça fonctionne', p: 'Chaque calcul s\'effectue directement dans votre navigateur en JavaScript. Il n\'y a pas de base de données, pas de comptes, pas d\'aller-retour réseau pour le calcul lui-même. Votre date de naissance, la date cible, le signe astrologique que vous venez de consulter — rien ne quitte votre appareil. Le navigateur télécharge uniquement le HTML statique, le CSS, quelques polices, et (si vous avez consenti) les scripts Google AdSense.' },
      { h: 'Comment on finance ça', p: 'DateCalc.app est financé par Google AdSense. On n\'adore pas les pubs non plus, mais c\'est ce qui rend réaliste la maintenance d\'un site gratuit dans 10 langues, sans paywall, sans « pro tier » et sans collecte d\'e-mails. Les annonces ne sont chargées que si vous cliquez « Accepter » sur la bannière de consentement dans l\'UE/UK ; hors de ces zones elles se chargent par défaut mais sans ciblage personnalisé sans consentement. Voir la <a href="/fr/confidentialite/">politique de confidentialité</a> pour le détail complet.' },
      { h: 'Qui est derrière ?', p: 'DateCalc est développé et maintenu par Mike, un dev basé en France, obsédé par les cas limites — du genre savoir si les numéros de semaine japonais doivent commencer le dimanche ou le lundi (spoiler : ça dépend de la norme suivie — on utilise lundi, ISO 8601, avec un toggle US/JP sur la roadmap), comment gérer les anniversaires du 29 février en année non bissextile, ou si l\'âge coréen traditionnel mériterait un mode dédié pour les utilisateurs coréens (également sur la roadmap, pas encore livré). Soigner les détails dans 10 langues, c\'est environ 80 % du boulot.' },
      { h: 'Contact', p: 'Retours, bugs, idées ou juste un bonjour — <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>. On lit chaque message. Pour les demandes professionnelles (publicité, partenariats, licences) : même adresse, sujet « Business ».' },
    ],
  },
  es: {
    title: 'Acerca de — DateCalc.app',
    h1: 'Acerca de DateCalc.app',
    intro: 'DateCalc.app es un pequeño proyecto indie con sede en Francia. Hacemos el tipo de calculadoras de fecha y hora que nos gustaría usar — limpias, rápidas, sin dark patterns, precisas en los casos límite que otros sitios fallan. El sitio se financia con Google AdSense, lo que permite mantenerlo gratuito; más allá de esa fina capa publicitaria, no hay cuentas, ni newsletters, ni upsell.',
    sections: [
      { h: 'Qué ofrecemos', p: 'Alrededor de 265 páginas de calculadoras y referencias que cubren edad (incluidos bebé, perro, gato), días entre fechas, días hábiles, cuentas regresivas para las grandes fiestas, números de semana en todos los formatos (ISO, US, JP), conversión de zona horaria, y hubs año por año de nacimientos y acontecimientos — todo en 10 idiomas: inglés, francés, español, portugués, alemán, italiano, polaco, japonés, coreano y neerlandés.' },
      { h: 'Cómo funciona', p: 'Cada cálculo se ejecuta directamente en tu navegador con JavaScript plano. No hay base de datos, ni cuentas, ni ida y vuelta de red para el cálculo en sí. Tu fecha de nacimiento, la fecha objetivo, el signo zodiacal que acabas de consultar — nada sale de tu dispositivo. Lo único que el navegador descarga de un servidor es el HTML estático, el CSS, algunas fuentes y (si has consentido) los scripts de Google AdSense.' },
      { h: 'Cómo lo pagamos', p: 'DateCalc.app se financia con Google AdSense. A nosotros tampoco nos encantan los anuncios, pero son lo que hace realista mantener un sitio gratuito en 10 idiomas, sin paywalls, sin "pro tier" y sin captura de correos. Los anuncios solo se cargan si haces clic en "Aceptar" en el banner de consentimiento en la UE/Reino Unido; fuera de esas regiones se cargan por defecto pero nunca usan segmentación personalizada sin consentimiento. Consulta la <a href="/es/privacidad/">política de privacidad</a> para el desglose completo.' },
      { h: '¿Quién está detrás?', p: 'DateCalc está construido y mantenido por Mike, un desarrollador con base en Francia que se obsesiona con los casos límite — como si los números de semana japoneses deben empezar en domingo o lunes (spoiler: depende del estándar que sigas — usamos lunes, ISO 8601, con un toggle US/JP en la hoja de ruta), cómo manejar los cumpleaños del 29 de febrero en años no bisiestos, o si la edad coreana tradicional merecería su propio modo para usuarios coreanos (también en la hoja de ruta, aún no enviado). Acertar en los detalles a través de 10 idiomas es aproximadamente el 80 % del trabajo.' },
      { h: 'Contacto', p: 'Feedback, bugs, sugerencias o simplemente hola — <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>. Leemos cada mensaje. Consultas profesionales (publicidad, partnerships, licencias): misma dirección, pon "Business" en el asunto.' },
    ],
  },
  pt: {
    title: 'Sobre — DateCalc.app',
    h1: 'Sobre o DateCalc.app',
    intro: 'DateCalc.app é um pequeno projeto indie com sede na França. Fazemos o tipo de calculadoras de data e hora que gostaríamos de usar — limpas, rápidas, sem dark patterns, precisas nos casos limite que outros sites erram. O site é financiado pelo Google AdSense, o que o mantém gratuito; além dessa camada mínima de publicidade, não há contas, newsletters nem upsell.',
    sections: [
      { h: 'O que oferecemos', p: 'Cerca de 265 páginas de calculadoras e referências cobrindo idade (incluindo bebês, cães, gatos), dias entre datas, dias úteis, contagens regressivas para os grandes feriados, números de semana em todos os formatos (ISO, US, JP), conversão de fuso horário, e hubs ano a ano de nascimentos e eventos — tudo em 10 idiomas: inglês, francês, espanhol, português, alemão, italiano, polonês, japonês, coreano e holandês.' },
      { h: 'Como funciona', p: 'Cada cálculo é executado diretamente no seu navegador em JavaScript puro. Não existe banco de dados, nem contas, nem ida e volta de rede para o cálculo em si. Sua data de nascimento, a data-alvo, o signo que você acabou de consultar — nada sai do seu aparelho. A única coisa que o navegador baixa de um servidor é o HTML estático, o CSS, algumas fontes e (se você consentiu) os scripts do Google AdSense.' },
      { h: 'Como pagamos por isso', p: 'DateCalc.app é financiado pelo Google AdSense. Nós também não adoramos anúncios, mas são eles que tornam realista manter um site gratuito em 10 idiomas, sem paywalls, sem "pro tier" e sem coleta de e-mails. Os anúncios só são carregados se você clicar em "Aceitar" no banner de consentimento na UE/Reino Unido; fora dessas regiões eles carregam por padrão, mas nunca usam segmentação personalizada sem consentimento. Veja a <a href="/pt/privacidade/">política de privacidade</a> para o detalhamento completo.' },
      { h: 'Quem está por trás disso?', p: 'DateCalc é construído e mantido por Mike, um desenvolvedor baseado na França que é obcecado por casos limite — como saber se os números de semana japoneses devem começar no domingo ou na segunda (spoiler: depende do padrão que você segue — usamos segunda, ISO 8601, com um toggle US/JP no roadmap), como lidar com aniversários de 29 de fevereiro em ano não bissexto, ou se a idade tradicional coreana mereceria um modo próprio para usuários coreanos (também no roadmap, ainda não entregue). Acertar os detalhes em 10 idiomas é cerca de 80% do trabalho.' },
      { h: 'Contato', p: 'Feedback, bugs, ideias ou só um oi — <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>. Lemos cada mensagem. Consultas comerciais (anúncios, parcerias, licenças): mesmo endereço, coloque "Business" no assunto.' },
    ],
  },
  de: {
    title: 'Über uns — DateCalc.app',
    h1: 'Über DateCalc.app',
    intro: 'DateCalc.app ist ein kleines Indie-Projekt aus Frankreich. Wir bauen die Art von Datums- und Zeitrechnern, die wir selbst gern benutzen würden — klar, schnell, ohne Dark Patterns, präzise in den Grenzfällen, die andere Seiten falsch machen. Die Seite wird über Google AdSense finanziert, was sie kostenlos hält; jenseits dieser minimalen Werbeschicht gibt es keine Konten, keine Newsletter und keinen Upsell.',
    sections: [
      { h: 'Was wir anbieten', p: 'Rund 265 einzelne Rechner- und Referenzseiten zu Alter (inklusive Baby-, Hunde-, Katzenalter), Tage zwischen Daten, Werktagen, Countdowns zu großen Feiertagen, Wochennummern in allen Formaten (ISO, US, JP), Zeitzonenkonvertierung und Jahr-für-Jahr-Hubs für Geburten und Ereignisse — alles in 10 Sprachen: Englisch, Französisch, Spanisch, Portugiesisch, Deutsch, Italienisch, Polnisch, Japanisch, Koreanisch und Niederländisch.' },
      { h: 'Wie es funktioniert', p: 'Jede Berechnung läuft direkt in deinem Browser in reinem JavaScript. Es gibt keine Backend-Datenbank, keine Konten und keinen Netzwerk-Roundtrip für die eigentliche Berechnung. Dein Geburtsdatum, das Zieldatum, das Sternzeichen, das du gerade nachgeschlagen hast — nichts verlässt dein Gerät. Das Einzige, was der Browser vom Server lädt, sind das statische HTML, das CSS, einige Schriften und (nach deiner Zustimmung) die Google-AdSense-Skripte.' },
      { h: 'Wie wir das finanzieren', p: 'DateCalc.app wird über Google AdSense finanziert. Wir lieben Werbung auch nicht, aber sie ermöglicht es realistisch, eine kostenlose Seite in 10 Sprachen zu pflegen — ohne Paywalls, ohne „Pro Tier" und ohne E-Mail-Capture. Anzeigen werden in der EU/UK nur geladen, wenn du im Consent-Banner „Akzeptieren" klickst; außerhalb dieser Regionen laden sie standardmäßig, aber ohne personalisierte Ausrichtung ohne Einwilligung. Die vollständige Aufschlüsselung findest du in der <a href="/de/datenschutz/">Datenschutzerklärung</a>.' },
      { h: 'Wer steckt dahinter?', p: 'DateCalc wird von Mike entwickelt und gepflegt, einem Entwickler in Frankreich, der von Grenzfällen besessen ist — etwa, ob japanische Wochennummern am Sonntag oder Montag beginnen sollten (Spoiler: kommt drauf an, welcher Norm du folgst — wir nutzen Montag, ISO 8601, ein US/JP-Toggle steht auf der Roadmap), wie Geburtstage am 29. Februar in einem Nicht-Schaltjahr zu behandeln sind, oder ob das traditionelle koreanische Alter einen eigenen Modus für koreanische Nutzer verdient (ebenfalls auf der Roadmap, noch nicht ausgeliefert). Die Details über 10 Sprachen hinweg richtig hinzukriegen, macht ungefähr 80 % der Arbeit aus.' },
      { h: 'Kontakt', p: 'Feedback, Bugs, Ideen oder einfach Hallo — <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>. Wir lesen jede Nachricht. Geschäftliche Anfragen (Werbung, Partnerschaften, Lizenzen): gleiche Adresse, Betreff „Business".' },
    ],
  },
  it: {
    title: 'Chi siamo — DateCalc.app',
    h1: 'Chi siamo — DateCalc.app',
    intro: 'DateCalc.app è un piccolo progetto indie con sede in Francia. Facciamo il tipo di calcolatori di data e ora che vorremmo usare noi stessi — puliti, veloci, senza dark pattern, precisi nei casi limite che altri siti sbagliano. Il sito è finanziato da Google AdSense, il che lo mantiene gratuito; oltre a quel sottile strato pubblicitario non ci sono account, newsletter né upsell.',
    sections: [
      { h: 'Cosa offriamo', p: 'Circa 265 pagine di calcolatori e riferimenti che coprono età (inclusa età bebè, cane, gatto), giorni tra date, giorni lavorativi, conti alla rovescia per le grandi festività, numeri di settimana in ogni formato (ISO, US, JP), conversione di fuso orario, e hub anno per anno per nascite ed eventi — il tutto in 10 lingue: inglese, francese, spagnolo, portoghese, tedesco, italiano, polacco, giapponese, coreano e olandese.' },
      { h: 'Come funziona', p: 'Ogni calcolo viene eseguito direttamente nel tuo browser in puro JavaScript. Non c\'è database backend, né account, né andata e ritorno di rete per il calcolo stesso. La tua data di nascita, la data target, il segno zodiacale che hai appena consultato — niente esce dal tuo dispositivo. L\'unica cosa che il browser scarica da un server è l\'HTML statico, il CSS, alcuni font e (se hai acconsentito) gli script di Google AdSense.' },
      { h: 'Come lo paghiamo', p: 'DateCalc.app è finanziato da Google AdSense. Non adoriamo le pubblicità nemmeno noi, ma sono ciò che rende realistico mantenere un sito gratuito in 10 lingue, senza paywall, senza "pro tier" e senza raccolta di e-mail. Gli annunci vengono caricati solo se clicchi "Accetta" sul banner di consenso in UE/UK; fuori da queste regioni si caricano di default ma senza targeting personalizzato senza consenso. Vedi l\'<a href="/it/privacy/">informativa sulla privacy</a> per il dettaglio completo.' },
      { h: 'Chi c\'è dietro?', p: 'DateCalc è costruito e mantenuto da Mike, uno sviluppatore in Francia ossessionato dai casi limite — tipo se i numeri di settimana giapponesi debbano iniziare la domenica o il lunedì (spoiler: dipende dallo standard seguito — usiamo lunedì, ISO 8601, con un toggle US/JP in roadmap), come gestire i compleanni del 29 febbraio in un anno non bisestile, o se l\'età coreana tradizionale meriterebbe una propria modalità per gli utenti coreani (anch\'essa in roadmap, non ancora rilasciata). Fare bene i dettagli in 10 lingue è circa l\'80% del lavoro.' },
      { h: 'Contatto', p: 'Feedback, bug, suggerimenti o solo un ciao — <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>. Leggiamo ogni messaggio. Richieste business (pubblicità, partnership, licenze): stesso indirizzo, oggetto "Business".' },
    ],
  },
  pl: {
    title: 'O nas — DateCalc.app',
    h1: 'O DateCalc.app',
    intro: 'DateCalc.app to mały niezależny projekt indie z Francji. Budujemy takie kalkulatory dat i czasu, jakie sami chcielibyśmy używać — czyste, szybkie, bez dark patterns, precyzyjne w przypadkach brzegowych, które inne strony robią źle. Strona jest finansowana przez Google AdSense, dzięki czemu pozostaje bezpłatna; poza tą minimalną warstwą reklamową nie ma kont, newsletterów ani upsellu.',
    sections: [
      { h: 'Co oferujemy', p: 'Około 265 stron kalkulatorów i materiałów referencyjnych obejmujących wiek (w tym wiek niemowlęcy, psi, koci), dni między datami, dni robocze, odliczanie do głównych świąt, numery tygodni we wszystkich formatach (ISO, US, JP), konwersję stref czasowych i huby rok po roku dotyczące urodzeń i wydarzeń — wszystko w 10 językach: angielskim, francuskim, hiszpańskim, portugalskim, niemieckim, włoskim, polskim, japońskim, koreańskim i niderlandzkim.' },
      { h: 'Jak to działa', p: 'Każde obliczenie wykonuje się bezpośrednio w Twojej przeglądarce w zwykłym JavaScript. Nie ma backendowej bazy danych, kont ani komunikacji sieciowej dla samego obliczenia. Twoja data urodzenia, data docelowa, znak zodiaku który właśnie sprawdziłeś — nic nie opuszcza Twojego urządzenia. Jedyne, co przeglądarka pobiera z serwera, to statyczny HTML, CSS, kilka czcionek i (jeśli wyraziłeś zgodę) skrypty Google AdSense.' },
      { h: 'Jak to finansujemy', p: 'DateCalc.app jest finansowany przez Google AdSense. My też nie uwielbiamy reklam, ale to one sprawiają, że utrzymanie bezpłatnej strony w 10 językach jest realne — bez paywalli, bez "pro tier" i bez zbierania maili. Reklamy są ładowane tylko po kliknięciu "Akceptuję" na banerze zgody w UE/UK; poza tymi regionami ładują się domyślnie, ale nigdy nie stosują personalizowanego targetowania bez zgody. Pełne szczegóły znajdziesz w <a href="/pl/prywatnosc/">polityce prywatności</a>.' },
      { h: 'Kto za tym stoi?', p: 'DateCalc jest budowany i utrzymywany przez Mike\'a, programistę z Francji, który ma obsesję na punkcie przypadków brzegowych — np. czy japońskie numery tygodni powinny zaczynać się od niedzieli czy od poniedziałku (spoiler: zależy, którego standardu się trzymasz — domyślnie używamy poniedziałku, ISO 8601, przełącznik US/JP jest w planach), jak obsłużyć urodziny 29 lutego w roku nieprzestępnym, albo czy tradycyjny koreański system wieku zasługuje na osobny tryb dla koreańskich użytkowników (także w planach, jeszcze niezaimplementowany). Dopilnowanie detali w 10 językach to jakieś 80% pracy.' },
      { h: 'Kontakt', p: 'Opinie, błędy, pomysły albo po prostu cześć — <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>. Czytamy każdą wiadomość. Zapytania biznesowe (reklamy, partnerstwa, licencje): ten sam adres, w temacie wpisz "Business".' },
    ],
  },
  ja: {
    title: 'このサイトについて — DateCalc.app',
    h1: 'DateCalc.appについて',
    intro: 'DateCalc.appはフランス発の小さなインディー・プロジェクトです。私たち自身が使いたくなるような日付・時刻計算機 — クリーンで速く、ダークパターンがなく、他サイトが間違えるエッジケースまで正確な — を作っています。サイトはGoogle AdSenseにより無料で維持されています。この最小限の広告層を除けば、アカウント、ニュースレター、アップセルは一切ありません。',
    sections: [
      { h: '提供する内容', p: '年齢（赤ちゃん、犬、猫の年齢を含む）、日数計算、営業日、主要祝日までのカウントダウン、すべての形式（ISO、US、JP）での週番号、タイムゾーン変換、年ごとの誕生日・出来事ハブなど、約265ページの計算機およびリファレンスを提供しています — すべて10言語で利用可能：英語、フランス語、スペイン語、ポルトガル語、ドイツ語、イタリア語、ポーランド語、日本語、韓国語、オランダ語。' },
      { h: '仕組み', p: 'すべての計算は、シンプルなJavaScriptを使ってあなたのブラウザ内で直接実行されます。バックエンドのデータベースも、アカウントシステムも、計算のためのネットワーク通信もありません。生年月日、目標日、今調べた星座 — 何一つあなたのデバイスから外に出ません。ブラウザがサーバーからダウンロードするのは、静的HTML、CSS、いくつかのフォント、そして（同意した場合のみ）Google AdSenseのスクリプトだけです。' },
      { h: '運営費について', p: 'DateCalc.appはGoogle AdSenseによって運営されています。私たちも広告が大好きなわけではありませんが、ペイウォールなし、「Proプラン」なし、メールアドレス取得なしで、10言語の無料サイトを維持するには現実的な選択肢です。EU/UKでは同意バナーで「同意する」を押した場合のみ広告が読み込まれます。それ以外の地域ではデフォルトで読み込まれますが、同意なしのパーソナライズ広告は一切行いません。詳細は<a href="/ja/privacy/">プライバシーポリシー</a>をご覧ください。' },
      { h: '制作者について', p: 'DateCalcはフランス在住の開発者Mikeが制作・運営しています。Mikeはエッジケースにこだわります — 例えば日本の週番号が日曜始まりか月曜始まりか（ネタバレ：どの規格に従うかで変わります。現在はISO 8601の月曜始まりをデフォルトとし、US/JPトグルはロードマップに載せています）、閏年でない年の2月29日生まれの扱い、韓国の伝統的な年齢計算を韓国ユーザー向けに専用モードとして用意すべきか（こちらもロードマップ上、まだ未実装）といった話です。10言語全体で細部を正しく整えることが仕事の約8割を占めます。' },
      { h: 'お問い合わせ', p: 'フィードバック、バグ報告、機能要望、あるいは単なる挨拶でも — <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>。すべてのメッセージに目を通しています。ビジネスに関するお問い合わせ（広告、パートナーシップ、ライセンス）は同じアドレス宛に件名「Business」とご記入ください。' },
    ],
  },
  ko: {
    title: '소개 — DateCalc.app',
    h1: 'DateCalc.app 소개',
    intro: 'DateCalc.app은 프랑스에서 시작된 작은 인디 프로젝트입니다. 우리 자신이 쓰고 싶은 종류의 날짜·시간 계산기 — 깔끔하고 빠르고, 다크 패턴이 없고, 다른 사이트가 틀리는 경계 케이스까지 정확한 것 — 을 만듭니다. 사이트는 Google AdSense로 운영되어 무료로 유지되며, 그 최소한의 광고 레이어를 제외하면 계정, 뉴스레터, 업셀이 일절 없습니다.',
    sections: [
      { h: '제공 내용', p: '나이(아기, 개, 고양이 나이 포함), 날짜 간 일수, 영업일, 주요 공휴일까지의 카운트다운, 모든 형식(ISO, US, JP)의 주 번호, 시간대 변환, 연도별 출생·사건 허브 등을 아우르는 약 265개의 계산기 및 참고 페이지를 제공합니다 — 모두 10개 언어로 이용 가능: 영어, 프랑스어, 스페인어, 포르투갈어, 독일어, 이탈리아어, 폴란드어, 일본어, 한국어, 네덜란드어.' },
      { h: '작동 방식', p: '모든 계산은 일반 JavaScript를 사용하여 사용자의 브라우저에서 직접 실행됩니다. 백엔드 데이터베이스도, 계정 시스템도, 계산 자체를 위한 네트워크 왕복도 없습니다. 생년월일, 목표 날짜, 방금 찾아본 별자리 — 그 어떤 것도 기기를 벗어나지 않습니다. 브라우저가 서버에서 내려받는 것은 정적 HTML, CSS, 몇 가지 폰트, 그리고 (동의한 경우에 한해) Google AdSense 스크립트뿐입니다.' },
      { h: '운영 자금', p: 'DateCalc.app은 Google AdSense로 운영됩니다. 광고를 좋아하지 않는 것은 우리도 마찬가지지만, 페이월 없이, "프로 티어" 없이, 이메일 수집 없이 10개 언어의 무료 사이트를 유지하기 위한 현실적 선택입니다. 광고는 EU/영국에서 동의 배너의 "동의"를 클릭한 경우에만 로드됩니다. 그 외 지역에서는 기본적으로 로드되지만 동의 없이 개인화 타겟팅을 사용하지는 않습니다. 전체 내용은 <a href="/ko/privacy/">개인정보 보호정책</a>을 참조하세요.' },
      { h: '제작자', p: 'DateCalc은 프랑스에 거주하는 개발자 Mike가 제작하고 운영합니다. Mike는 경계 케이스에 집착합니다 — 예를 들어 일본 주 번호가 일요일 시작인지 월요일 시작인지(스포일러: 따르는 표준에 따라 다릅니다. 현재는 ISO 8601의 월요일 시작을 기본으로 하고, US/JP 토글은 로드맵에 올려 두었습니다), 윤년이 아닌 해의 2월 29일 생일 처리, 한국식 전통 나이 계산을 한국 사용자용 전용 모드로 제공할지(이 역시 로드맵에 있고 아직 출시되지 않았습니다) 같은 문제들입니다. 10개 언어에 걸쳐 세부 사항을 제대로 맞추는 것이 일의 약 80%를 차지합니다.' },
      { h: '문의', p: '피드백, 버그 제보, 기능 요청, 혹은 그냥 안부라도 — <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>. 모든 메시지를 읽습니다. 비즈니스 문의(광고, 제휴, 라이선스): 같은 주소, 제목에 "Business"라고 적어 주세요.' },
    ],
  },
  nl: {
    title: 'Over ons — DateCalc.app',
    h1: 'Over DateCalc.app',
    intro: 'DateCalc.app is een klein indie-project uit Frankrijk. We maken precies het soort datum- en tijdcalculators dat we zelf zouden willen gebruiken — strak, snel, zonder dark patterns, accuraat in de edge cases die andere sites fout doen. De site wordt ondersteund door Google AdSense, waardoor hij gratis blijft; voorbij die minimale advertentielaag zijn er geen accounts, geen nieuwsbrieven en geen upsell.',
    sections: [
      { h: 'Wat we bieden', p: 'Zo\'n 265 afzonderlijke rekentools en referentiepagina\'s voor leeftijd (inclusief baby-, honden- en kattenleeftijd), dagen tussen data, werkdagen, aftelklokken naar grote feestdagen, weeknummers in elk formaat (ISO, US, JP), tijdzone-conversie en jaar-voor-jaar hubs voor geboortes en gebeurtenissen — alles beschikbaar in 10 talen: Engels, Frans, Spaans, Portugees, Duits, Italiaans, Pools, Japans, Koreaans en Nederlands.' },
      { h: 'Hoe het werkt', p: 'Elke berekening draait rechtstreeks in je browser in gewoon JavaScript. Er is geen backend-database, geen accountsysteem en geen netwerkverkeer voor de berekening zelf. Je geboortedatum, je doeldatum, het sterrenbeeld dat je net hebt opgezocht — niets verlaat je apparaat. Het enige dat de browser van een server haalt, is de statische HTML, de CSS, een paar lettertypes en (als je toestemming hebt gegeven) de Google-AdSense-scripts.' },
      { h: 'Hoe we dit betalen', p: 'DateCalc.app wordt ondersteund door Google AdSense. Wij zijn ook geen fan van advertenties, maar ze maken het realistisch om een gratis site in 10 talen te onderhouden — zonder paywalls, zonder "pro tier" en zonder het verzamelen van e-mailadressen. Advertenties worden in de EU/UK alleen geladen als je op "Accepteren" klikt in de consent banner; daarbuiten worden ze standaard geladen, maar zonder gepersonaliseerde targeting zonder toestemming. Zie het <a href="/nl/privacy/">privacybeleid</a> voor de volledige uitleg.' },
      { h: 'Wie zit erachter?', p: 'DateCalc wordt gebouwd en onderhouden door Mike, een ontwikkelaar in Frankrijk die geobsedeerd is door edge cases — zoals of Japanse weeknummers op zondag of op maandag moeten beginnen (spoiler: hangt af van welke standaard je volgt — we gebruiken maandag, ISO 8601, en een US/JP-toggle staat op de roadmap), hoe je met 29-februari-verjaardagen in een niet-schrikkeljaar omgaat, of of de traditionele Koreaanse leeftijd een eigen modus verdient voor Koreaanse gebruikers (ook op de roadmap, nog niet uitgerold). De details goed krijgen in 10 talen is zo\'n 80% van het werk.' },
      { h: 'Contact', p: 'Feedback, bugs, ideeën of gewoon hoi — <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>. We lezen elk bericht. Zakelijke aanvragen (advertenties, partnerships, licenties): zelfde adres, zet "Business" in het onderwerp.' },
    ],
  },
};

const ABOUT_HREFLANG_HREF = {
  en: 'https://datecalc.app/about/',
  fr: 'https://datecalc.app/fr/a-propos/',
  es: 'https://datecalc.app/es/acerca-de/',
  pt: 'https://datecalc.app/pt/sobre/',
  de: 'https://datecalc.app/de/ueber-uns/',
  it: 'https://datecalc.app/it/chi-siamo/',
  pl: 'https://datecalc.app/pl/o-nas/',
  ja: 'https://datecalc.app/ja/about/',
  ko: 'https://datecalc.app/ko/about/',
  nl: 'https://datecalc.app/nl/over-ons/',
};
const hreflangAbout = [
  ...INDEXABLE_LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="${ABOUT_HREFLANG_HREF[l]}">`),
  `<link rel="alternate" hreflang="x-default" href="${ABOUT_HREFLANG_HREF.en}">`,
].join('\n');

for (const { lang, slug, canonical } of ABOUT_PAGES) {
  const p = ABOUT_CONTENT[lang];
  const outDir = path.join(DIST, slug);
  fs.mkdirSync(outDir, { recursive: true });
  const sectionsHtml = p.sections.map(s =>
    `<h2>${s.h}</h2><p>${s.p}</p>`).join('\n');
  const html = `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="${NOINDEX_LANGS.has(lang) ? 'noindex, follow' : 'index, follow'}">
<title>${p.title}</title>
<meta name="description" content="${p.intro.slice(0, 155)}">
<link rel="canonical" href="${canonical}">
${hreflangAbout}
${(lang === 'ja' || lang === 'ko') ? '' : `<link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/playfair-normal-latin.woff2" as="font" type="font/woff2" crossorigin>`}
<link rel="stylesheet" href="/style.css">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DateCalc.app",
  "url": "https://datecalc.app/",
  "email": "hello@datecalc.app",
  "foundingLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressCountry": "FR" } },
  "description": "Free multilingual date and time calculators across 10 languages.",
  "sameAs": ["https://datecalc.app/about/"]
}, null, 2)}
</script>
${navHubs.NAV_CSS}
</head>
<body>
<a class="skip-link" href="#main-content">Skip to main content</a>
<header>
<div class="masthead">
  <a href="${HOME_HREF[lang]}" class="masthead-brand">DateCalc<span>.</span>app</a>
</div>
</header>
${navHubs.mainNavHTML(lang, canonical.replace('https://datecalc.app', ''))}
<div class="page">
<main id="main-content" style="max-width:680px;margin:3rem auto;padding:0 1.5rem">
  <h1 style="font-family:'Playfair Display',serif;font-size:2rem;margin-bottom:2rem">${p.h1}</h1>
  <p style="margin-bottom:2rem;line-height:1.7">${p.intro}</p>
  <div class="about-sections">
${sectionsHtml}
  </div>
</main>
<style>
.about-sections h2{font-size:1rem;font-weight:600;margin:1.8rem 0 .4rem;text-transform:uppercase;letter-spacing:.05em}
.about-sections p{line-height:1.7;color:#333;margin-bottom:.5rem}
.about-sections a{color:var(--accent)}
</style>
  <footer>© ${BUILD_YEAR} DateCalc.app · <a href="${ABOUT_HREF[lang]}">${ABOUT_LBL[lang]}</a> · <a href="${PRIVACY_HREF[lang]}">${PRIVACY_LBL[lang]}</a> · <a href="/${hubs.HUB_SLUGS.birth[lang]}/">${hubs.I18N.birth[lang].self}</a> · <a href="/${hubs.HUB_SLUGS.event[lang]}/">${hubs.I18N.event[lang].self}</a></footer>
</div>
</body>
</html>`;
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  console.log(`  ✓ /${slug}/`);
}

// ── SITEMAP (with xhtml:link hreflang alternates) ─────────
// Each group is an array of { lang, path } — siblings are alternates of each other.
// Each group carries a .meta = { category, lastmod, changefreq } for per-group sitemap settings.
const urlGroups = [];
const sitemapToday = new Date().toISOString().split('T')[0];

// Helper: date YYYY-MM-DD of a source file's mtime (or fallback to today)
function mtimeDate(relPath) {
  try {
    const stat = fs.statSync(path.join(__dirname, relPath));
    return stat.mtime.toISOString().split('T')[0];
  } catch (e) {
    return sitemapToday;
  }
}

// Categories: 'home' weekly, 'tool' weekly, 'dynamic' daily, 'article' monthly,
// 'yearpage' monthly, 'hub' monthly, 'static' yearly.
// Dynamic tool IDs (results change daily — the built HTML itself does not, but Google should recrawl frequently)
const DYNAMIC_TOOL_IDS = new Set([
  'what-day', 'what-day-is-it-today', 'countdown-timer', 'days-until-christmas',
  'days-until-new-year', 'days-until-halloween', 'days-until-easter',
  'days-until-thanksgiving',
]);

const BORN_IN_MTIME     = mtimeDate('src/tools/born-in.js');
const YEAR_EVENTS_MTIME = mtimeDate('src/tools/year-events.js');
const STATIC_LASTMOD    = '2026-01-01';

for (const tool of tools) {
  const toolFile = tool.__file || null; // not set; fallback to today for lastmod
  for (const page of tool.pages) {
    const group = [];
    for (const lang of LANGS) {
      const s = page.slugs[lang];
      if (s !== undefined) group.push({ lang, path: s === '' ? '/' : `/${s}/` });
    }
    if (!group.length) continue;

    // Categorize
    let meta;
    if (page.isHomepage) {
      meta = { category: 'home', lastmod: sitemapToday, changefreq: 'weekly', priority: '1.0' };
    } else if (typeof page.id === 'string' && page.id.startsWith('born-in-')) {
      meta = { category: 'yearpage', lastmod: BORN_IN_MTIME, changefreq: 'monthly', priority: '0.7' };
    } else if (typeof page.id === 'string' && page.id.startsWith('what-happened-in-')) {
      meta = { category: 'yearpage', lastmod: YEAR_EVENTS_MTIME, changefreq: 'monthly', priority: '0.7' };
    } else if (DYNAMIC_TOOL_IDS.has(page.id) || (page.id && DYNAMIC_TOOL_IDS.has(page.id.replace(/-\d+$/, '')))) {
      meta = { category: 'dynamic', lastmod: sitemapToday, changefreq: 'daily', priority: '0.9' };
    } else {
      meta = { category: 'tool', lastmod: sitemapToday, changefreq: 'weekly', priority: '0.8' };
    }
    group.meta = meta;
    urlGroups.push(group);
  }
}
for (const cluster of articles) {
  // Try to find the cluster source file mtime — clusters live in src/articles/
  const clusterFile = cluster.__sourceFile || null;
  const articleLastmod = clusterFile ? mtimeDate(clusterFile) : sitemapToday;
  for (const page of cluster.pages) {
    const group = [];
    for (const lang of ARTICLE_LANGS) {
      const s = page.slugs[lang];
      if (s) group.push({ lang, path: `/${s}/` });
    }
    if (!group.length) continue;
    group.meta = { category: 'article', lastmod: articleLastmod, changefreq: 'monthly', priority: '0.6' };
    urlGroups.push(group);
  }
}
{
  const g = ABOUT_PAGES.map(p => ({ lang: p.lang, path: `/${p.slug}/` }));
  g.meta = { category: 'static', lastmod: STATIC_LASTMOD, changefreq: 'yearly', priority: '0.3' };
  urlGroups.push(g);
}
{
  const g = PRIVACY_PAGES.map(p => ({ lang: p.lang, path: `/${p.slug}/` }));
  g.meta = { category: 'static', lastmod: STATIC_LASTMOD, changefreq: 'yearly', priority: '0.3' };
  urlGroups.push(g);
}
// Hub pages (birth-years, year-in-history) — each hub is one group of 10 langs (mutual alternates)
for (const group of hubs.sitemapGroups()) {
  group.meta = { category: 'hub', lastmod: sitemapToday, changefreq: 'monthly', priority: '0.8' };
  urlGroups.push(group);
}
// Nav hubs (/tools/, /articles/) — each hub is one group of 10 langs
for (const group of navHubs.sitemapGroups()) {
  group.meta = { category: 'hub', lastmod: sitemapToday, changefreq: 'weekly', priority: '0.8' };
  urlGroups.push(group);
}
// Author page (/authors/mike/) — one group of 10 langs
{
  const g = authors.sitemapGroup();
  g.meta = { category: 'static', lastmod: STATIC_LASTMOD, changefreq: 'yearly', priority: '0.3' };
  urlGroups.push(g);
}
// My-age shareable page — one group of 10 langs
{
  const g = myAge.sitemapGroup();
  g.meta = { category: 'tool', lastmod: sitemapToday, changefreq: 'weekly', priority: '0.7' };
  urlGroups.push(g);
}

function renderSitemapUrl(url, group) {
  const alternates = group
    .filter(u => !NOINDEX_LANGS.has(u.lang))
    .map(u =>
      `    <xhtml:link rel="alternate" hreflang="${u.lang}" href="https://datecalc.app${u.path}"/>`
    ).join('\n');
  const enUrl = group.find(u => u.lang === 'en');
  const xDefault = enUrl
    ? `\n    <xhtml:link rel="alternate" hreflang="x-default" href="https://datecalc.app${enUrl.path}"/>`
    : '';
  const m = group.meta || { lastmod: sitemapToday, changefreq: 'monthly', priority: '0.8' };
  return `  <url>
    <loc>https://datecalc.app${url.path}</loc>
    <lastmod>${m.lastmod}</lastmod>
    <changefreq>${m.changefreq}</changefreq>
    <priority>${url.path === '/' ? '1.0' : m.priority}</priority>
${alternates}${xDefault}
  </url>`;
}

// Group every URL into its own-language bucket. Each URL still carries the full
// xhtml:link alternate list (pointing to all languages of the same logical page).
// Result: 10 per-language sitemap files + 1 sitemap-index. Enables parallel crawling.
const perLangUrls = Object.fromEntries(LANGS.map(l => [l, []]));
let totalUrlEntries = 0;
for (const group of urlGroups) {
  for (const url of group) {
    if (NOINDEX_LANGS.has(url.lang)) continue;
    if (perLangUrls[url.lang]) {
      perLangUrls[url.lang].push(renderSitemapUrl(url, group));
      totalUrlEntries++;
    }
  }
}

// Drop stale per-language sitemaps for noindex languages so the deploy doesn't
// keep serving an old sitemap-ja.xml etc. that still lists indexable URLs.
for (const lang of NOINDEX_LANGS) {
  const stalePath = path.join(DIST, `sitemap-${lang}.xml`);
  if (fs.existsSync(stalePath)) {
    fs.unlinkSync(stalePath);
    console.log(`  ✗ removed /sitemap-${lang}.xml (lang is noindex)`);
  }
}

for (const lang of LANGS) {
  const entries = perLangUrls[lang];
  if (!entries.length) continue;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`;
  fs.writeFileSync(path.join(DIST, `sitemap-${lang}.xml`), xml, 'utf8');
  console.log(`  ✓ /sitemap-${lang}.xml (${entries.length} URLs)`);
}

// sitemap.xml is now the sitemap-index (same URL → no need to re-submit in GSC).
const indexEntries = LANGS
  .filter(l => perLangUrls[l].length > 0)
  .map(l => `  <sitemap>
    <loc>https://datecalc.app/sitemap-${l}.xml</loc>
    <lastmod>${sitemapToday}</lastmod>
  </sitemap>`).join('\n');
const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexEntries}
</sitemapindex>`;
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemapIndex, 'utf8');
console.log(`  ✓ /sitemap.xml (index → ${LANGS.filter(l => perLangUrls[l].length > 0).length} sub-sitemaps, ${totalUrlEntries} URLs total)`);

// ── HREFLANG VALIDATION ───────────────────────────────────
require('./scripts/validate-hreflang');
