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
const articles = [
  require('./src/articles/age-cluster'),
  require('./src/articles/born-in-cluster'),
  require('./src/articles/days-cluster'),
];

const LANGS = ['en', 'fr', 'es', 'pt', 'de', 'it', 'pl', 'ja', 'ko', 'nl'];
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
  const { title, metaDesc, canonical, hreflang, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs, source, howto } = data;

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
<link rel="alternate" hreflang="pt" href="https://datecalc.app${hreflang.pt}">
<link rel="alternate" hreflang="de" href="https://datecalc.app${hreflang.de}">
<link rel="alternate" hreflang="it" href="https://datecalc.app${hreflang.it}">
<link rel="alternate" hreflang="pl" href="https://datecalc.app${hreflang.pl}">
<link rel="alternate" hreflang="ja" href="https://datecalc.app${hreflang.ja}">
<link rel="alternate" hreflang="ko" href="https://datecalc.app${hreflang.ko}">
<link rel="alternate" hreflang="nl" href="https://datecalc.app${hreflang.nl}">
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
<link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/playfair-normal-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/style.css">
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="shortcut icon" href="/favicon.svg">
${faqSchema}${howtoSchema}${appSchema}${orgSchema}
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
</main>
  <footer>
  <nav class="footer-nav" aria-label="Site links">
${footerCols}
  </nav>
  <div class="footer-copy">© ${BUILD_YEAR} DateCalc.app — ${FOOTER[lang]} · <a href="${ABOUT_HREF[lang]}">${ABOUT_LBL[lang]}</a> · <a href="${PRIVACY_HREF[lang]}">${PRIVACY_LBL[lang]}</a></div>
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
  const { title, metaDesc, canonical, hreflang, kicker, h1, intro, sections, faqs, pillar, related } = data;

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
  "publisher": { "@type": "Organization", "name": "DateCalc.app", "url": "https://datecalc.app" }
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
  }).join('\n');

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
<meta name="robots" content="index, follow">
<meta name="description" content="${metaDesc}">
<link rel="canonical" href="https://datecalc.app${canonical}">
<link rel="alternate" hreflang="en" href="https://datecalc.app${hreflang.en}">
<link rel="alternate" hreflang="fr" href="https://datecalc.app${hreflang.fr}">
<link rel="alternate" hreflang="es" href="https://datecalc.app${hreflang.es}">
<link rel="alternate" hreflang="pt" href="https://datecalc.app${hreflang.pt}">
<link rel="alternate" hreflang="de" href="https://datecalc.app${hreflang.de}">
<link rel="alternate" hreflang="it" href="https://datecalc.app${hreflang.it}">
<link rel="alternate" hreflang="pl" href="https://datecalc.app${hreflang.pl}">
<link rel="alternate" hreflang="ja" href="https://datecalc.app${hreflang.ja}">
<link rel="alternate" hreflang="ko" href="https://datecalc.app${hreflang.ko}">
<link rel="alternate" hreflang="nl" href="https://datecalc.app${hreflang.nl}">
<link rel="alternate" hreflang="x-default" href="https://datecalc.app${hreflang.en}">
<meta property="og:type" content="article">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${metaDesc}">
<meta property="og:url" content="https://datecalc.app${canonical}">
<meta property="og:site_name" content="DateCalc.app">
<meta property="og:image" content="https://datecalc.app/og.png">
<link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/playfair-normal-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/style.css">
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="shortcut icon" href="/favicon.svg">
${faqSchema}${articleSchema}${orgSchema}
</head>
<body>
<a class="skip-link" href="#main-content">Skip to main content</a>
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
</main>
<footer>
<nav class="footer-nav" aria-label="Site links">
${footerCols}
</nav>
<div class="footer-copy">© ${BUILD_YEAR} DateCalc.app — ${FOOTER[lang]} · <a href="${ABOUT_HREF[lang]}">${ABOUT_LBL[lang]}</a> · <a href="${PRIVACY_HREF[lang]}">${PRIVACY_LBL[lang]}</a></div>
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
const ARTICLE_LANGS = ['en', 'fr', 'es'];
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
        pt: `/${page.slugs.en}/`,
        de: `/${page.slugs.en}/`,
        it: `/${page.slugs.en}/`,
        pl: `/${page.slugs.en}/`,
        ja: `/${page.slugs.en}/`,
        ko: `/${page.slugs.en}/`,
        nl: `/${page.slugs.en}/`,
      };
      const html = renderArticleLayout(data, lang);
      writePage(`${slug}/index.html`, html);
      articleCount++;
    }
  }
}
if (articleCount > 0) console.log(`Built ${articleCount} article pages → dist/`);

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
      const s = page.slugs[lang];
      allSlugs.push(s === '' ? '/' : `/${s}/`);
    }
  }
}

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
];
const PRIVACY_CONTENT = {
  en: {
    title: 'Privacy Policy — DateCalc.app',
    h1: 'Privacy Policy',
    updated: 'Last updated: January 1, 2026',
    intro: 'DateCalc.app is a free, client-side date calculator. All calculations happen in your browser. We do not collect, store, or sell any personal data.',
    sections: [
      { h: 'Data we collect', p: 'None. No account, no login, no form submission is ever sent to our servers. The dates you enter never leave your device.' },
      { h: 'Google Fonts', p: 'We load fonts (Playfair Display, Space Mono, Inter) from Google Fonts. This causes your browser to make a request to Google\'s servers, which may log your IP address. See <a href="https://policies.google.com/privacy">Google\'s Privacy Policy</a>.' },
      { h: 'Hosting (Cloudflare Pages)', p: 'This site is hosted on Cloudflare Pages. Cloudflare may process standard server access logs (IP address, browser type, page requested) for security and performance purposes. See <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare\'s Privacy Policy</a>.' },
      { h: 'Cookies &amp; tracking', p: 'We do not use cookies, analytics, advertising trackers, or any form of cross-site tracking.' },
      { h: 'Your rights', p: 'Since we hold no personal data about you, there is nothing to access, correct, or delete. If you have questions, contact us at <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>.' },
    ],
  },
  fr: {
    title: 'Politique de confidentialité — DateCalc.app',
    h1: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : 1er janvier 2026',
    intro: 'DateCalc.app est une calculatrice de dates gratuite, entièrement côté client. Tous les calculs s\'effectuent dans votre navigateur. Nous ne collectons, stockons ni vendons aucune donnée personnelle.',
    sections: [
      { h: 'Données collectées', p: 'Aucune. Aucun compte, aucune connexion, aucune soumission de formulaire n\'est envoyée à nos serveurs. Les dates que vous saisissez ne quittent jamais votre appareil.' },
      { h: 'Google Fonts', p: 'Nous chargeons des polices (Playfair Display, Space Mono, Inter) depuis Google Fonts. Cela entraîne une requête de votre navigateur vers les serveurs de Google, qui peut enregistrer votre adresse IP. Voir la <a href="https://policies.google.com/privacy">politique de confidentialité de Google</a>.' },
      { h: 'Hébergement (Cloudflare Pages)', p: 'Ce site est hébergé sur Cloudflare Pages. Cloudflare peut traiter des journaux d\'accès standard (adresse IP, type de navigateur, page demandée) à des fins de sécurité et de performance. Voir la <a href="https://www.cloudflare.com/privacypolicy/">politique de confidentialité de Cloudflare</a>.' },
      { h: 'Cookies &amp; traçage', p: 'Nous n\'utilisons pas de cookies, d\'analytiques, de trackers publicitaires ni aucune forme de traçage intersites.' },
      { h: 'Vos droits (RGPD)', p: 'Nous ne détenons aucune donnée personnelle vous concernant. Il n\'y a donc rien à accéder, corriger ou supprimer. Pour toute question : <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>.' },
    ],
  },
  es: {
    title: 'Política de privacidad — DateCalc.app',
    h1: 'Política de privacidad',
    updated: 'Última actualización: 1 de enero de 2026',
    intro: 'DateCalc.app es una calculadora de fechas gratuita, completamente del lado del cliente. Todos los cálculos ocurren en tu navegador. No recopilamos, almacenamos ni vendemos ningún dato personal.',
    sections: [
      { h: 'Datos que recopilamos', p: 'Ninguno. Ninguna cuenta, inicio de sesión ni envío de formulario se envía a nuestros servidores. Las fechas que ingresas nunca salen de tu dispositivo.' },
      { h: 'Google Fonts', p: 'Cargamos fuentes (Playfair Display, Space Mono, Inter) desde Google Fonts. Esto provoca que tu navegador haga una solicitud a los servidores de Google, que pueden registrar tu dirección IP. Ver la <a href="https://policies.google.com/privacy">política de privacidad de Google</a>.' },
      { h: 'Alojamiento (Cloudflare Pages)', p: 'Este sitio está alojado en Cloudflare Pages. Cloudflare puede procesar registros de acceso estándar (dirección IP, tipo de navegador, página solicitada) con fines de seguridad y rendimiento. Ver la <a href="https://www.cloudflare.com/privacypolicy/">política de privacidad de Cloudflare</a>.' },
      { h: 'Cookies y rastreo', p: 'No utilizamos cookies, análisis, rastreadores publicitarios ni ninguna forma de seguimiento entre sitios.' },
      { h: 'Tus derechos', p: 'No conservamos ningún dato personal tuyo, por lo que no hay nada que acceder, corregir ni eliminar. Para preguntas: <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>.' },
    ],
  },
  pt: {
    title: 'Política de Privacidade — DateCalc.app',
    h1: 'Política de Privacidade',
    updated: 'Última atualização: 1º de janeiro de 2026',
    intro: 'DateCalc.app é uma calculadora de datas gratuita, totalmente do lado do cliente. Todos os cálculos acontecem no seu navegador. Não coletamos, armazenamos nem vendemos nenhum dado pessoal.',
    sections: [
      { h: 'Dados que coletamos', p: 'Nenhum. Nenhuma conta, login ou envio de formulário é enviado aos nossos servidores. As datas que você insere nunca saem do seu dispositivo.' },
      { h: 'Google Fonts', p: 'Carregamos fontes (Playfair Display, Space Mono, Inter) do Google Fonts. Isso faz com que seu navegador faça uma solicitação aos servidores do Google, que podem registrar seu endereço IP. Veja a <a href="https://policies.google.com/privacy">política de privacidade do Google</a>.' },
      { h: 'Hospedagem (Cloudflare Pages)', p: 'Este site é hospedado no Cloudflare Pages. O Cloudflare pode processar logs de acesso padrão (endereço IP, tipo de navegador, página solicitada) para fins de segurança e desempenho. Veja a <a href="https://www.cloudflare.com/privacypolicy/">política de privacidade do Cloudflare</a>.' },
      { h: 'Cookies e rastreamento', p: 'Não usamos cookies, análises, rastreadores de publicidade ou qualquer forma de rastreamento entre sites.' },
      { h: 'Seus direitos (LGPD)', p: 'Não mantemos nenhum dado pessoal seu, portanto não há nada a acessar, corrigir ou excluir. Para dúvidas: <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>.' },
    ],
  },
  de: {
    title: 'Datenschutzerklärung — DateCalc.app',
    h1: 'Datenschutzerklärung',
    updated: 'Zuletzt aktualisiert: 1. Januar 2026',
    intro: 'DateCalc.app ist ein kostenloser, clientseitiger Datumsrechner. Alle Berechnungen finden in deinem Browser statt. Wir sammeln, speichern oder verkaufen keine personenbezogenen Daten.',
    sections: [
      { h: 'Daten, die wir erheben', p: 'Keine. Kein Konto, keine Anmeldung, kein Formular wird an unsere Server gesendet. Die eingegebenen Daten verlassen nie dein Gerät.' },
      { h: 'Google Fonts', p: 'Wir laden Schriften von Google Fonts. Dies führt zu einer Anfrage an Google-Server, die deine IP-Adresse protokollieren können. Siehe <a href="https://policies.google.com/privacy">Googles Datenschutzerklärung</a>.' },
      { h: 'Hosting (Cloudflare Pages)', p: 'Diese Seite wird auf Cloudflare Pages gehostet. Cloudflare kann Standard-Zugriffsprotokolle verarbeiten. Siehe <a href="https://www.cloudflare.com/privacypolicy/">Cloudflares Datenschutzerklärung</a>.' },
      { h: 'Cookies &amp; Tracking', p: 'Wir verwenden keine Cookies, Analytics, Werbe-Tracker oder Cross-Site-Tracking.' },
      { h: 'Deine Rechte (DSGVO)', p: 'Da wir keine personenbezogenen Daten über dich speichern, gibt es nichts zu berichtigen oder zu löschen. Fragen: <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>.' },
    ],
  },
  it: {
    title: 'Informativa sulla Privacy — DateCalc.app',
    h1: 'Informativa sulla Privacy',
    updated: 'Ultimo aggiornamento: 1° gennaio 2026',
    intro: 'DateCalc.app è un calcolatore di date gratuito, completamente lato client. Tutti i calcoli avvengono nel tuo browser. Non raccogliamo, archiviamo né vendiamo dati personali.',
    sections: [
      { h: 'Dati che raccogliamo', p: 'Nessuno. Nessun account, login o invio di moduli viene trasmesso ai nostri server. Le date inserite non lasciano mai il tuo dispositivo.' },
      { h: 'Google Fonts', p: 'Carichiamo font da Google Fonts. Il tuo browser farà una richiesta ai server Google che possono registrare il tuo indirizzo IP. Vedi la <a href="https://policies.google.com/privacy">privacy policy di Google</a>.' },
      { h: 'Hosting (Cloudflare Pages)', p: 'Questo sito è ospitato su Cloudflare Pages. Cloudflare può elaborare log di accesso standard. Vedi la <a href="https://www.cloudflare.com/privacypolicy/">privacy policy di Cloudflare</a>.' },
      { h: 'Cookie e tracciamento', p: 'Non utilizziamo cookie, analytics, tracker pubblicitari né alcuna forma di tracciamento cross-site.' },
      { h: 'I tuoi diritti (GDPR)', p: 'Non conserviamo dati personali su di te, quindi non c\'è nulla da accedere, correggere o eliminare. Per domande: <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>.' },
    ],
  },
  pl: {
    title: 'Polityka Prywatności — DateCalc.app',
    h1: 'Polityka Prywatności',
    updated: 'Ostatnia aktualizacja: 1 stycznia 2026',
    intro: 'DateCalc.app to bezpłatny kalkulator dat, działający wyłącznie po stronie klienta. Wszystkie obliczenia odbywają się w Twojej przeglądarce. Nie zbieramy, nie przechowujemy ani nie sprzedajemy żadnych danych osobowych.',
    sections: [
      { h: 'Dane, które zbieramy', p: 'Żadnych. Żadne konto, login ani przesłanie formularza nie jest wysyłane na nasze serwery. Wprowadzone daty nigdy nie opuszczają Twojego urządzenia.' },
      { h: 'Google Fonts', p: 'Ładujemy czcionki z Google Fonts. Powoduje to żądanie do serwerów Google, które mogą rejestrować Twój adres IP. Zobacz <a href="https://policies.google.com/privacy">politykę prywatności Google</a>.' },
      { h: 'Hosting (Cloudflare Pages)', p: 'Ta strona jest hostowana na Cloudflare Pages. Cloudflare może przetwarzać standardowe logi dostępu. Zobacz <a href="https://www.cloudflare.com/privacypolicy/">politykę prywatności Cloudflare</a>.' },
      { h: 'Pliki cookie i śledzenie', p: 'Nie używamy plików cookie, analityki, trackerów reklamowych ani żadnej formy śledzenia między witrynami.' },
      { h: 'Twoje prawa (RODO)', p: 'Nie przechowujemy żadnych Twoich danych osobowych, więc nie ma nic do uzyskania dostępu, poprawienia ani usunięcia. W razie pytań: <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>.' },
    ],
  },
};
const hreflangPrivacy = [
  '<link rel="alternate" hreflang="en" href="https://datecalc.app/privacy/">',
  '<link rel="alternate" hreflang="fr" href="https://datecalc.app/fr/confidentialite/">',
  '<link rel="alternate" hreflang="es" href="https://datecalc.app/es/privacidad/">',
  '<link rel="alternate" hreflang="pt" href="https://datecalc.app/pt/privacidade/">',
  '<link rel="alternate" hreflang="de" href="https://datecalc.app/de/datenschutz/">',
  '<link rel="alternate" hreflang="it" href="https://datecalc.app/it/privacy/">',
  '<link rel="alternate" hreflang="pl" href="https://datecalc.app/pl/prywatnosc/">',
  '<link rel="alternate" hreflang="x-default" href="https://datecalc.app/privacy/">',
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
<meta name="robots" content="index, follow">
<title>${p.title}</title>
<meta name="description" content="${p.intro.slice(0, 155)}">
<link rel="canonical" href="${canonical}">
${hreflangPrivacy}
<link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/playfair-normal-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/style.css">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
</head>
<body>
<a class="skip-link" href="#main-content">Skip to main content</a>
<header>
<div class="masthead">
  <a href="${HOME_HREF[lang]}" class="masthead-brand">DateCalc<span>.</span>app</a>
</div>
</header>
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
  <footer>© ${BUILD_YEAR} DateCalc.app · <a href="${ABOUT_HREF[lang]}">${ABOUT_LBL[lang]}</a> · <a href="${PRIVACY_HREF[lang]}">${PRIVACY_LBL[lang]}</a></footer>
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
];

const ABOUT_CONTENT = {
  en: {
    title: 'About — DateCalc.app',
    h1: 'About DateCalc.app',
    intro: 'DateCalc.app is a collection of free, instant date and time calculators. No sign-up, no ads, no tracking — just fast, accurate tools that work entirely in your browser.',
    sections: [
      { h: 'What we offer', p: 'Age calculators, baby age trackers, dog & cat age converters, day counters, week numbers, business day calculators, holiday countdowns, and historical year tools — all available in 7 languages: English, French, Spanish, Portuguese, German, Italian, and Polish.' },
      { h: 'How it works', p: 'Every calculation runs directly in your browser using JavaScript. No data is ever sent to a server. The dates you enter stay on your device.' },
      { h: 'Who made this', p: 'DateCalc.app is an independent project built to provide reliable, fast date tools to everyone, for free. We believe useful utilities should be accessible without paywalls or forced accounts.' },
      { h: 'Contact', p: 'Questions, suggestions, or feedback? Reach us at <a href="mailto:hello@datecalc.app">hello@datecalc.app</a> — we read every message.' },
    ],
  },
  fr: {
    title: 'À propos — DateCalc.app',
    h1: 'À propos de DateCalc.app',
    intro: 'DateCalc.app est une collection de calculateurs de date et d\'heure gratuits et instantanés. Sans inscription, sans pub, sans tracking — des outils rapides et précis qui fonctionnent entièrement dans votre navigateur.',
    sections: [
      { h: 'Ce que nous proposons', p: 'Calculateurs d\'âge, suivi de l\'âge bébé, convertisseurs d\'âge pour chiens et chats, compteurs de jours, numéros de semaine, calculateurs de jours ouvrés, comptes à rebours des fêtes, et outils d\'histoire par année — disponibles en 7 langues : anglais, français, espagnol, portugais, allemand, italien et polonais.' },
      { h: 'Comment ça fonctionne', p: 'Chaque calcul s\'effectue directement dans votre navigateur via JavaScript. Aucune donnée n\'est envoyée à un serveur. Les dates que vous saisissez restent sur votre appareil.' },
      { h: 'Qui a créé ce site', p: 'DateCalc.app est un projet indépendant conçu pour offrir des outils de date fiables et rapides à tous, gratuitement. Nous pensons que les outils utiles doivent être accessibles sans abonnement ni compte obligatoire.' },
      { h: 'Contact', p: 'Questions, suggestions ou retours ? Écrivez-nous à <a href="mailto:hello@datecalc.app">hello@datecalc.app</a> — nous lisons chaque message.' },
    ],
  },
  es: {
    title: 'Acerca de — DateCalc.app',
    h1: 'Acerca de DateCalc.app',
    intro: 'DateCalc.app es una colección de calculadoras de fecha y hora gratuitas e instantáneas. Sin registro, sin anuncios, sin rastreo — solo herramientas rápidas y precisas que funcionan completamente en tu navegador.',
    sections: [
      { h: 'Qué ofrecemos', p: 'Calculadoras de edad, seguimiento de edad de bebés, conversores de edad para perros y gatos, contadores de días, números de semana, calculadoras de días hábiles, cuentas regresivas de fiestas y herramientas históricas por año — disponibles en 7 idiomas: inglés, francés, español, portugués, alemán, italiano y polaco.' },
      { h: 'Cómo funciona', p: 'Cada cálculo se ejecuta directamente en tu navegador con JavaScript. Ningún dato se envía a un servidor. Las fechas que introduces permanecen en tu dispositivo.' },
      { h: 'Quién lo creó', p: 'DateCalc.app es un proyecto independiente creado para ofrecer herramientas de fecha confiables y rápidas a todos, de forma gratuita. Creemos que las utilidades útiles deben ser accesibles sin suscripciones ni cuentas obligatorias.' },
      { h: 'Contacto', p: '¿Preguntas, sugerencias o comentarios? Escríbenos a <a href="mailto:hello@datecalc.app">hello@datecalc.app</a> — leemos cada mensaje.' },
    ],
  },
  pt: {
    title: 'Sobre — DateCalc.app',
    h1: 'Sobre o DateCalc.app',
    intro: 'DateCalc.app é uma coleção de calculadoras de data e hora gratuitas e instantâneas. Sem cadastro, sem anúncios, sem rastreamento — apenas ferramentas rápidas e precisas que funcionam inteiramente no seu navegador.',
    sections: [
      { h: 'O que oferecemos', p: 'Calculadoras de idade, rastreador de idade de bebês, conversores de idade para cães e gatos, contadores de dias, números de semana, calculadoras de dias úteis, contagens regressivas de feriados e ferramentas históricas por ano — disponíveis em 7 idiomas: inglês, francês, espanhol, português, alemão, italiano e polonês.' },
      { h: 'Como funciona', p: 'Cada cálculo é executado diretamente no seu navegador usando JavaScript. Nenhum dado é enviado a um servidor. As datas que você insere ficam no seu dispositivo.' },
      { h: 'Quem criou', p: 'DateCalc.app é um projeto independente criado para oferecer ferramentas de data confiáveis e rápidas a todos, gratuitamente. Acreditamos que utilitários úteis devem ser acessíveis sem assinaturas ou contas obrigatórias.' },
      { h: 'Contato', p: 'Dúvidas, sugestões ou comentários? Escreva para <a href="mailto:hello@datecalc.app">hello@datecalc.app</a> — lemos cada mensagem.' },
    ],
  },
  de: {
    title: 'Über uns — DateCalc.app',
    h1: 'Über DateCalc.app',
    intro: 'DateCalc.app ist eine Sammlung kostenloser und sofortiger Datums- und Zeitrechner. Keine Anmeldung, keine Werbung, kein Tracking — nur schnelle, präzise Werkzeuge, die vollständig in deinem Browser funktionieren.',
    sections: [
      { h: 'Was wir anbieten', p: 'Altersrechner, Baby-Alters-Tracker, Hunde- und Katzenalter-Konverter, Tageszähler, Wochennummern, Arbeitstage-Rechner, Feiertags-Countdowns und historische Jahres-Tools — in 7 Sprachen verfügbar: Englisch, Französisch, Spanisch, Portugiesisch, Deutsch, Italienisch und Polnisch.' },
      { h: 'Wie es funktioniert', p: 'Jede Berechnung läuft direkt in deinem Browser mit JavaScript. Es werden keine Daten an einen Server gesendet. Die eingegebenen Daten bleiben auf deinem Gerät.' },
      { h: 'Wer dahintersteckt', p: 'DateCalc.app ist ein unabhängiges Projekt, das entwickelt wurde, um zuverlässige und schnelle Datums-Tools für alle kostenlos bereitzustellen. Wir glauben, dass nützliche Werkzeuge ohne Abonnements oder Pflichtkonten zugänglich sein sollten.' },
      { h: 'Kontakt', p: 'Fragen, Vorschläge oder Feedback? Schreib uns an <a href="mailto:hello@datecalc.app">hello@datecalc.app</a> — wir lesen jede Nachricht.' },
    ],
  },
  it: {
    title: 'Chi siamo — DateCalc.app',
    h1: 'Chi siamo — DateCalc.app',
    intro: 'DateCalc.app è una raccolta di calcolatori di data e ora gratuiti e istantanei. Senza registrazione, senza pubblicità, senza tracciamento — solo strumenti veloci e precisi che funzionano interamente nel tuo browser.',
    sections: [
      { h: 'Cosa offriamo', p: 'Calcolatori di età, tracker dell\'età del bambino, convertitori di età per cani e gatti, contatori di giorni, numeri di settimana, calcolatori di giorni lavorativi, conto alla rovescia delle festività e strumenti storici per anno — disponibili in 7 lingue: inglese, francese, spagnolo, portoghese, tedesco, italiano e polacco.' },
      { h: 'Come funziona', p: 'Ogni calcolo viene eseguito direttamente nel tuo browser tramite JavaScript. Nessun dato viene inviato a un server. Le date che inserisci rimangono sul tuo dispositivo.' },
      { h: 'Chi lo ha creato', p: 'DateCalc.app è un progetto indipendente creato per offrire strumenti di data affidabili e veloci a tutti, gratuitamente. Crediamo che le utility utili debbano essere accessibili senza abbonamenti o account obbligatori.' },
      { h: 'Contatto', p: 'Domande, suggerimenti o feedback? Scrivici a <a href="mailto:hello@datecalc.app">hello@datecalc.app</a> — leggiamo ogni messaggio.' },
    ],
  },
  pl: {
    title: 'O nas — DateCalc.app',
    h1: 'O DateCalc.app',
    intro: 'DateCalc.app to kolekcja bezpłatnych i natychmiastowych kalkulatorów daty i czasu. Bez rejestracji, bez reklam, bez śledzenia — tylko szybkie i dokładne narzędzia działające całkowicie w Twojej przeglądarce.',
    sections: [
      { h: 'Co oferujemy', p: 'Kalkulatory wieku, tracker wieku niemowląt, konwertery wieku psów i kotów, liczniki dni, numery tygodni, kalkulatory dni roboczych, odliczanie do świąt i narzędzia historyczne według roku — dostępne w 7 językach: angielskim, francuskim, hiszpańskim, portugalskim, niemieckim, włoskim i polskim.' },
      { h: 'Jak to działa', p: 'Każde obliczenie jest wykonywane bezpośrednio w Twojej przeglądarce za pomocą JavaScript. Żadne dane nie są wysyłane na serwer. Wprowadzone daty pozostają na Twoim urządzeniu.' },
      { h: 'Kto to stworzył', p: 'DateCalc.app to niezależny projekt stworzony, aby zapewnić niezawodne i szybkie narzędzia do dat dla wszystkich, bezpłatnie. Wierzymy, że przydatne narzędzia powinny być dostępne bez subskrypcji ani obowiązkowych kont.' },
      { h: 'Kontakt', p: 'Pytania, sugestie lub opinie? Napisz do nas na <a href="mailto:hello@datecalc.app">hello@datecalc.app</a> — czytamy każdą wiadomość.' },
    ],
  },
  ja: {
    title: 'このサイトについて — DateCalc.app',
    h1: 'DateCalc.appについて',
    intro: 'DateCalc.appは、無料で即時に使える日付・時刻計算機のコレクションです。登録不要、広告なし、トラッキングなし — ブラウザ上で完全に動作する、高速で正確なツールです。',
    sections: [
      { h: '提供するツール', p: '年齢計算機、赤ちゃん年齢トラッカー、犬・猫の年齢変換、日数カウンター、週番号、営業日計算機、祝日カウントダウン、過去の年間レビュー — 10言語で利用可能：英語、フランス語、スペイン語、ポルトガル語、ドイツ語、イタリア語、ポーランド語、日本語、韓国語、オランダ語。' },
      { h: '仕組み', p: 'すべての計算はJavaScriptを使用してブラウザ上で直接実行されます。データはサーバーに送信されません。入力した日付はお使いのデバイスに保存されます。' },
      { h: '制作者について', p: 'DateCalc.appは、誰もが無料で使える信頼性の高い日付ツールを提供するために作られた独立プロジェクトです。有料会員登録なしで利用できることを大切にしています。' },
      { h: 'お問い合わせ', p: 'ご質問、ご提案、フィードバックは <a href="mailto:hello@datecalc.app">hello@datecalc.app</a> までどうぞ — すべてのメッセージを読んでいます。' },
    ],
  },
  ko: {
    title: '소개 — DateCalc.app',
    h1: 'DateCalc.app 소개',
    intro: 'DateCalc.app은 무료로 즉시 사용할 수 있는 날짜 및 시간 계산기 모음입니다. 회원가입 불필요, 광고 없음, 추적 없음 — 브라우저에서 완전히 작동하는 빠르고 정확한 도구입니다.',
    sections: [
      { h: '제공 도구', p: '나이 계산기, 아기 나이 추적기, 강아지·고양이 나이 변환기, 일수 카운터, 주 번호, 영업일 계산기, 공휴일 카운트다운, 연간 회고 도구 — 10개 언어로 이용 가능: 영어, 프랑스어, 스페인어, 포르투갈어, 독일어, 이탈리아어, 폴란드어, 일본어, 한국어, 네덜란드어.' },
      { h: '작동 방식', p: '모든 계산은 JavaScript를 사용하여 브라우저에서 직접 실행됩니다. 데이터는 서버로 전송되지 않습니다. 입력한 날짜는 사용자의 기기에 남습니다.' },
      { h: '제작자', p: 'DateCalc.app은 모든 사람에게 무료로 신뢰할 수 있는 날짜 도구를 제공하기 위해 만들어진 독립 프로젝트입니다. 유료 구독이나 필수 계정 없이 누구나 사용할 수 있어야 한다고 믿습니다.' },
      { h: '문의', p: '질문, 제안 또는 피드백이 있으신가요? <a href="mailto:hello@datecalc.app">hello@datecalc.app</a>으로 연락주세요 — 모든 메시지를 읽고 있습니다.' },
    ],
  },
  nl: {
    title: 'Over ons — DateCalc.app',
    h1: 'Over DateCalc.app',
    intro: 'DateCalc.app is een verzameling gratis en directe datum- en tijdcalculatoren. Geen registratie, geen advertenties, geen tracking — alleen snelle, nauwkeurige tools die volledig in uw browser werken.',
    sections: [
      { h: 'Wat wij bieden', p: 'Leeftijdscalculatoren, baby-leeftijdstracker, honden- en kattenleeftijdconverters, dagentellers, weeknummers, werkdagencalculatoren, feestdagaftellers en historische jaarstools — beschikbaar in 10 talen: Engels, Frans, Spaans, Portugees, Duits, Italiaans, Pools, Japans, Koreaans en Nederlands.' },
      { h: 'Hoe het werkt', p: 'Elke berekening wordt direct in uw browser uitgevoerd met JavaScript. Er worden geen gegevens naar een server verzonden. De ingevoerde datums blijven op uw apparaat.' },
      { h: 'Wie dit heeft gemaakt', p: 'DateCalc.app is een onafhankelijk project, gebouwd om betrouwbare en snelle datumtools voor iedereen gratis beschikbaar te stellen. Wij geloven dat nuttige hulpmiddelen toegankelijk moeten zijn zonder abonnementen of verplichte accounts.' },
      { h: 'Contact', p: 'Vragen, suggesties of feedback? Stuur ons een bericht op <a href="mailto:hello@datecalc.app">hello@datecalc.app</a> — we lezen elk bericht.' },
    ],
  },
};

const hreflangAbout = [
  '<link rel="alternate" hreflang="en" href="https://datecalc.app/about/">',
  '<link rel="alternate" hreflang="fr" href="https://datecalc.app/fr/a-propos/">',
  '<link rel="alternate" hreflang="es" href="https://datecalc.app/es/acerca-de/">',
  '<link rel="alternate" hreflang="pt" href="https://datecalc.app/pt/sobre/">',
  '<link rel="alternate" hreflang="de" href="https://datecalc.app/de/ueber-uns/">',
  '<link rel="alternate" hreflang="it" href="https://datecalc.app/it/chi-siamo/">',
  '<link rel="alternate" hreflang="pl" href="https://datecalc.app/pl/o-nas/">',
  '<link rel="alternate" hreflang="ja" href="https://datecalc.app/ja/about/">',
  '<link rel="alternate" hreflang="ko" href="https://datecalc.app/ko/about/">',
  '<link rel="alternate" hreflang="nl" href="https://datecalc.app/nl/over-ons/">',
  '<link rel="alternate" hreflang="x-default" href="https://datecalc.app/about/">',
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
<meta name="robots" content="index, follow">
<title>${p.title}</title>
<meta name="description" content="${p.intro.slice(0, 155)}">
<link rel="canonical" href="${canonical}">
${hreflangAbout}
<link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/playfair-normal-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/style.css">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
</head>
<body>
<a class="skip-link" href="#main-content">Skip to main content</a>
<header>
<div class="masthead">
  <a href="${HOME_HREF[lang]}" class="masthead-brand">DateCalc<span>.</span>app</a>
</div>
</header>
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
  <footer>© ${BUILD_YEAR} DateCalc.app · <a href="${ABOUT_HREF[lang]}">${ABOUT_LBL[lang]}</a> · <a href="${PRIVACY_HREF[lang]}">${PRIVACY_LBL[lang]}</a></footer>
</div>
</body>
</html>`;
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  console.log(`  ✓ /${slug}/`);
}
