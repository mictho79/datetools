// Time Zone Converter

const ZONES = [
  { id: 'Pacific/Honolulu',     label: 'Honolulu (HST)' },
  { id: 'America/Anchorage',    label: 'Anchorage (AKST)' },
  { id: 'America/Los_Angeles',  label: 'Los Angeles (PST/PDT)' },
  { id: 'America/Denver',       label: 'Denver (MST/MDT)' },
  { id: 'America/Chicago',      label: 'Chicago (CST/CDT)' },
  { id: 'America/New_York',     label: 'New York (EST/EDT)' },
  { id: 'America/Sao_Paulo',    label: 'São Paulo (BRT)' },
  { id: 'America/Argentina/Buenos_Aires', label: 'Buenos Aires (ART)' },
  { id: 'Atlantic/Azores',      label: 'Azores (AZOT)' },
  { id: 'Europe/London',        label: 'London (GMT/BST)' },
  { id: 'Europe/Paris',         label: 'Paris (CET/CEST)' },
  { id: 'Europe/Berlin',        label: 'Berlin (CET/CEST)' },
  { id: 'Europe/Helsinki',      label: 'Helsinki (EET/EEST)' },
  { id: 'Europe/Istanbul',      label: 'Istanbul (TRT)' },
  { id: 'Asia/Dubai',           label: 'Dubai (GST)' },
  { id: 'Asia/Karachi',         label: 'Karachi (PKT)' },
  { id: 'Asia/Kolkata',         label: 'India (IST)' },
  { id: 'Asia/Dhaka',           label: 'Dhaka (BST)' },
  { id: 'Asia/Bangkok',         label: 'Bangkok (ICT)' },
  { id: 'Asia/Singapore',       label: 'Singapore (SGT)' },
  { id: 'Asia/Shanghai',        label: 'Beijing/Shanghai (CST)' },
  { id: 'Asia/Tokyo',           label: 'Tokyo (JST)' },
  { id: 'Australia/Adelaide',   label: 'Adelaide (ACST)' },
  { id: 'Australia/Sydney',     label: 'Sydney (AEST/AEDT)' },
  { id: 'Pacific/Auckland',     label: 'Auckland (NZST/NZDT)' },
  { id: 'UTC',                  label: 'UTC' },
];

const zonesJson = JSON.stringify(ZONES);

const T = {
  en: {
    title: 'Time Zone Converter – Convert Time Between Any Two Time Zones | DateCalc.app',
    metaDesc: 'Convert time between any two time zones instantly. Supports 25+ zones including UTC. Shows local time, UTC offset, and time difference.',
    kicker: 'Time Zone Converter',
    headline: 'Convert<br><em>time zones</em>',
    subhead: 'Convert any date and time between 25+ time zones instantly.',
    fromLabel: 'From time zone',
    toLabel: 'To time zone',
    dateLabel: 'Date',
    timeLabel: 'Time',
    swapBtn: '⇄ Swap zones',
    calcBtn: '→ Convert',
    tipText: '"The world runs on 24 different clocks. This tool lets you read them all."',
    resultsHeader: 'Converted time',
    fromTimeLbl: 'Original time', toTimeLbl: 'Converted time',
    fromOffsetLbl: 'UTC offset (from)', toOffsetLbl: 'UTC offset (to)',
    diffLbl: 'Time difference',
    errInvalid: '→ Invalid date or time. Please check your input.',
    seoH2a: 'How do time zones work?',
    seoP1: 'The world is divided into 24 primary time zones, each roughly 15 degrees of longitude apart — the angular distance the Earth rotates in one hour. Most zones are offset from Coordinated Universal Time (UTC) by a whole number of hours, but some countries use fractional offsets: India is UTC+5:30, Nepal is UTC+5:45, and Iran is UTC+3:30. The IANA Time Zone Database (also called the tz database or zoneinfo) is the authoritative global standard for time zone definitions, maintained by the Internet Assigned Numbers Authority. It covers every historical and current time zone rule change for every region on Earth. When you convert a time using this tool, the correct UTC offset for the specific date you enter is used — meaning daylight saving time transitions are handled automatically. DST shifts clocks forward by one hour in spring and back in autumn in over 70 countries, though the exact dates vary by region.',
    seoH2b: 'What is UTC offset?',
    seoP2: 'UTC offset is the signed difference between a specific time zone and Coordinated Universal Time (UTC), the successor to Greenwich Mean Time (GMT). For example, New York in winter is UTC−5 (Eastern Standard Time), meaning clocks there read 5 hours behind UTC. During daylight saving time it becomes UTC−4 (Eastern Daylight Time). London in winter is UTC+0 (GMT) and UTC+1 in summer (BST). Paris is UTC+1 in winter (CET) and UTC+2 in summer (CEST). The key difference between UTC and GMT is that UTC is a time standard based on atomic clocks and is never adjusted for daylight saving, while GMT is technically a time zone. In everyday use, UTC and GMT are effectively identical. This converter always uses the DST-aware UTC offset for the exact date you enter.',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://www.iana.org/time-zones', label: 'IANA Time Zone Database' },
    faqs: [
      { q: 'What time is it in New York right now?', a: 'New York uses Eastern Time: UTC−5 in winter (EST, from the first Sunday in November to the second Sunday in March) and UTC−4 in summer (EDT). To see the current New York time, select "New York (EST/EDT)" as your target zone and convert from your local time. This converter uses DST-aware offsets so the result is always correct.' },
      { q: 'What is the difference between UTC and GMT?', a: 'UTC (Coordinated Universal Time) is the international time standard based on atomic clocks. GMT (Greenwich Mean Time) is a time zone centered on the Prime Meridian in London. In everyday use they are the same — both read UTC+0 — but technically UTC never adjusts for daylight saving time while the UK does observe BST in summer. For all practical conversion purposes, UTC and GMT are interchangeable.' },
      { q: 'How many time zones are there in the world?', a: 'There are 24 standard time zones based on 15-degree longitude bands, but the actual number of civil time zones in use worldwide is around 38–40, because many countries use non-standard half-hour or quarter-hour offsets (India UTC+5:30, Nepal UTC+5:45, Iran UTC+3:30) and some territories straddle multiple zones.' },
      { q: 'How does daylight saving time work?', a: 'Daylight saving time (DST) is the practice of advancing clocks by one hour in spring so that evenings have more daylight. Most of the United States, Canada, and Europe observe DST, but dates differ: the U.S. starts DST on the second Sunday in March and ends on the first Sunday in November. The EU transitions on the last Sunday of March and October. Countries near the equator and in Asia and Africa generally do not observe DST.' },
      { q: 'How do I convert EST to CET?', a: 'Eastern Standard Time (EST) is UTC−5. Central European Time (CET) is UTC+1. The difference is 6 hours: when it is noon EST, it is 6 PM CET. In summer, EST becomes EDT (UTC−4) and CET becomes CEST (UTC+2), so the difference remains 6 hours. Use this converter — select New York as the source and Paris or Berlin as the target — to get the exact converted time including DST adjustments.' },
      { q: 'What is the time difference between cities?', a: 'Common time differences (standard time, no DST): New York to London = 5 hours. New York to Paris = 6 hours. London to Tokyo = 9 hours. Los Angeles to New York = 3 hours. Los Angeles to London = 8 hours. These differences shift by 1 hour when one or both regions observes daylight saving time. Use this converter to get the exact difference for any specific date.' },
      { q: 'How do I convert time zones?', a: 'Enter the date and time in your source time zone, select both zones, and click Convert. The result shows the equivalent time in the target zone, accounting for daylight saving time.' },
      { q: 'What is UTC?', a: 'UTC (Coordinated Universal Time) is the primary time standard by which the world regulates clocks. It does not observe daylight saving time and is used as the reference point for all other time zones.' },
    ],
  },
  fr: {
    title: 'Convertisseur de fuseaux horaires – Convertir l\'heure entre n\'importe quels fuseaux | DateCalc.app',
    metaDesc: 'Convertissez l\'heure entre n\'importe quels fuseaux horaires instantanément. Prend en charge 25+ fuseaux dont UTC. Affiche l\'heure locale, le décalage UTC et la différence.',
    kicker: 'Convertisseur de fuseaux horaires',
    headline: 'Convertir les<br><em>fuseaux horaires</em>',
    subhead: 'Convertissez n\'importe quelle date et heure entre 25+ fuseaux horaires instantanément.',
    fromLabel: 'Fuseau source',
    toLabel: 'Fuseau cible',
    dateLabel: 'Date',
    timeLabel: 'Heure',
    swapBtn: '⇄ Inverser',
    calcBtn: '→ Convertir',
    tipText: '"Le monde tourne sur 24 horloges différentes. Cet outil vous permet de les lire toutes."',
    resultsHeader: 'Heure convertie',
    fromTimeLbl: 'Heure d\'origine', toTimeLbl: 'Heure convertie',
    fromOffsetLbl: 'Décalage UTC (source)', toOffsetLbl: 'Décalage UTC (cible)',
    diffLbl: 'Différence horaire',
    errInvalid: '→ Date ou heure invalide. Vérifiez votre saisie.',
    seoH2a: 'Comment fonctionnent les fuseaux horaires ?',
    seoP1: 'Le monde est divisé en 24 fuseaux horaires principaux, chacun espacé d\'environ 15 degrés de longitude — la distance angulaire que la Terre tourne en une heure. La plupart des fuseaux sont décalés par rapport au Temps Universel Coordonné (UTC) d\'un nombre entier d\'heures, mais certains pays utilisent des décalages fractionnaires : l\'Inde est UTC+5:30, le Népal UTC+5:45 et l\'Iran UTC+3:30. La base de données des fuseaux horaires IANA (aussi appelée base de données tz) est la référence mondiale pour les définitions de fuseaux horaires. Lorsque vous convertissez une heure avec cet outil, le bon décalage UTC pour la date spécifique que vous entrez est utilisé, ce qui signifie que les transitions d\'heure d\'été sont gérées automatiquement.',
    seoH2b: 'Qu\'est-ce que le décalage UTC ?',
    seoP2: 'Le décalage UTC est la différence signée entre un fuseau horaire spécifique et le Temps Universel Coordonné (UTC), le successeur du Temps Moyen de Greenwich (GMT). New York en hiver est UTC−5 (EST) et UTC−4 en été (EDT). Paris est UTC+1 en hiver (CET) et UTC+2 en été (CEST). La principale différence entre UTC et GMT est qu\'UTC est un standard de temps basé sur des horloges atomiques et n\'est jamais ajusté pour l\'heure d\'été, tandis que GMT est techniquement un fuseau horaire. Ce convertisseur utilise toujours le décalage UTC tenant compte de l\'heure d\'été pour la date exacte que vous entrez.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://www.iana.org/time-zones', label: 'Base de données des fuseaux horaires IANA' },
    faqs: [
      { q: 'Quelle heure est-il à New York maintenant ?', a: 'New York utilise l\'heure de l\'Est : UTC−5 en hiver (EST, du premier dimanche de novembre au deuxième dimanche de mars) et UTC−4 en été (EDT). Pour voir l\'heure actuelle à New York, sélectionnez "New York (EST/EDT)" comme fuseau cible et convertissez depuis votre heure locale. Ce convertisseur utilise des décalages tenant compte de l\'heure d\'été.' },
      { q: 'Quelle est la différence entre UTC et GMT ?', a: 'UTC (Temps Universel Coordonné) est le standard de temps international basé sur des horloges atomiques. GMT (Temps Moyen de Greenwich) est un fuseau horaire centré sur le méridien d\'origine à Londres. En usage quotidien, ils sont identiques — tous deux lisent UTC+0 — mais techniquement UTC ne s\'ajuste jamais pour l\'heure d\'été tandis que le Royaume-Uni observe l\'heure BST en été.' },
      { q: 'Combien de fuseaux horaires y a-t-il dans le monde ?', a: 'Il y a 24 fuseaux horaires standard basés sur des bandes de 15 degrés de longitude, mais le nombre réel de fuseaux civils utilisés dans le monde est d\'environ 38 à 40, car de nombreux pays utilisent des décalages non standard de demi-heure ou quart d\'heure (Inde UTC+5:30, Népal UTC+5:45, Iran UTC+3:30).' },
      { q: 'Comment fonctionne l\'heure d\'été ?', a: 'L\'heure d\'été (DST) consiste à avancer les horloges d\'une heure au printemps pour que les soirées aient plus de lumière du jour. La plupart des États-Unis, du Canada et de l\'Europe observent l\'heure d\'été, mais les dates diffèrent. Les pays proches de l\'équateur et en Asie et Afrique n\'observent généralement pas l\'heure d\'été.' },
      { q: 'Comment convertir EST en CET ?', a: 'L\'heure normale de l\'Est (EST) est UTC−5. L\'heure d\'Europe centrale (CET) est UTC+1. La différence est de 6 heures : quand il est midi EST, il est 18h CET. En été, EST devient EDT (UTC−4) et CET devient CEST (UTC+2), la différence reste donc de 6 heures. Utilisez ce convertisseur en sélectionnant New York comme source et Paris ou Berlin comme cible.' },
      { q: 'Quelle est la différence horaire entre les villes ?', a: 'Différences courantes (heure standard, sans heure d\'été) : New York — Londres = 5 heures. New York — Paris = 6 heures. Londres — Tokyo = 9 heures. Los Angeles — New York = 3 heures. Ces différences changent d\'1 heure quand l\'une ou les deux régions observe l\'heure d\'été. Utilisez ce convertisseur pour obtenir la différence exacte pour une date spécifique.' },
      { q: 'Comment convertir les fuseaux horaires ?', a: 'Entrez la date et l\'heure dans votre fuseau source, sélectionnez les deux fuseaux et cliquez sur Convertir. Le résultat affiche l\'heure équivalente dans le fuseau cible, tenant compte de l\'heure d\'été.' },
      { q: 'Qu\'est-ce que l\'UTC ?', a: 'L\'UTC (Temps Universel Coordonné) est la norme de temps principale par laquelle le monde réglemente les horloges. Il ne respecte pas l\'heure d\'été et sert de référence pour tous les autres fuseaux.' },
    ],
  },
  es: {
    title: 'Conversor de zona horaria – Convertir hora entre zonas horarias | DateCalc.app',
    metaDesc: 'Convierte la hora entre cualquier zona horaria al instante. Compatible con 25+ zonas incluyendo UTC. Muestra hora local, desplazamiento UTC y diferencia horaria.',
    kicker: 'Conversor de zona horaria',
    headline: 'Convertir<br><em>zonas horarias</em>',
    subhead: 'Convierte cualquier fecha y hora entre 25+ zonas horarias al instante.',
    fromLabel: 'Zona horaria origen',
    toLabel: 'Zona horaria destino',
    dateLabel: 'Fecha',
    timeLabel: 'Hora',
    swapBtn: '⇄ Intercambiar',
    calcBtn: '→ Convertir',
    tipText: '"El mundo funciona con 24 relojes diferentes. Esta herramienta te permite leerlos todos."',
    resultsHeader: 'Hora convertida',
    fromTimeLbl: 'Hora original', toTimeLbl: 'Hora convertida',
    fromOffsetLbl: 'Desplazamiento UTC (origen)', toOffsetLbl: 'Desplazamiento UTC (destino)',
    diffLbl: 'Diferencia horaria',
    errInvalid: '→ Fecha u hora no válida. Verifica tu entrada.',
    seoH2a: '¿Cómo funcionan las zonas horarias?',
    seoP1: 'El mundo está dividido en 24 zonas horarias principales, cada una separada aproximadamente 15 grados de longitud — la distancia angular que la Tierra rota en una hora. La mayoría de las zonas se desfasan del Tiempo Universal Coordinado (UTC) por un número entero de horas, pero algunos países usan desplazamientos fraccionarios: India es UTC+5:30, Nepal UTC+5:45 e Irán UTC+3:30. La base de datos de zonas horarias IANA (también llamada base de datos tz) es el estándar global autoritativo para las definiciones de zonas horarias, mantenida por la Autoridad de Números Asignados de Internet. Cuando conviertes una hora con esta herramienta, se usa el desplazamiento UTC correcto para la fecha específica que ingresas, lo que significa que las transiciones de horario de verano se manejan automáticamente.',
    seoH2b: '¿Qué es el desplazamiento UTC?',
    seoP2: 'El desplazamiento UTC es la diferencia con signo entre una zona horaria específica y el Tiempo Universal Coordinado (UTC), el sucesor del Tiempo Medio de Greenwich (GMT). Nueva York en invierno es UTC−5 (EST) y UTC−4 en verano (EDT). París es UTC+1 en invierno (CET) y UTC+2 en verano (CEST). La principal diferencia entre UTC y GMT es que UTC es un estándar de tiempo basado en relojes atómicos y nunca se ajusta por horario de verano, mientras que GMT es técnicamente una zona horaria. Este conversor siempre usa el desplazamiento UTC con horario de verano para la fecha exacta que ingresas.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://www.iana.org/time-zones', label: 'Base de datos de zonas horarias IANA' },
    faqs: [
      { q: '¿Qué hora es en Nueva York ahora mismo?', a: 'Nueva York usa la Hora del Este: UTC−5 en invierno (EST, desde el primer domingo de noviembre hasta el segundo domingo de marzo) y UTC−4 en verano (EDT). Para ver la hora actual en Nueva York, selecciona "New York (EST/EDT)" como zona destino y convierte desde tu hora local. Este conversor usa desplazamientos con horario de verano.' },
      { q: '¿Cuál es la diferencia entre UTC y GMT?', a: 'UTC (Tiempo Universal Coordinado) es el estándar de tiempo internacional basado en relojes atómicos. GMT (Tiempo Medio de Greenwich) es una zona horaria centrada en el Meridiano Principal en Londres. En uso cotidiano son idénticos — ambos leen UTC+0 — pero técnicamente UTC nunca se ajusta por horario de verano mientras que el Reino Unido observa BST en verano.' },
      { q: '¿Cuántas zonas horarias hay en el mundo?', a: 'Hay 24 zonas horarias estándar basadas en bandas de 15 grados de longitud, pero el número real de zonas civiles en uso en todo el mundo es de alrededor de 38 a 40, porque muchos países usan desplazamientos no estándar de media hora o cuarto de hora (India UTC+5:30, Nepal UTC+5:45, Irán UTC+3:30).' },
      { q: '¿Cómo funciona el horario de verano?', a: 'El horario de verano (DST) es la práctica de adelantar los relojes una hora en primavera para que las tardes tengan más luz. La mayor parte de Estados Unidos, Canadá y Europa observan el horario de verano, pero las fechas difieren. Los países cerca del ecuador y en Asia y África generalmente no observan el horario de verano.' },
      { q: '¿Cómo convierto EST a CET?', a: 'La Hora Estándar del Este (EST) es UTC−5. La Hora Central Europea (CET) es UTC+1. La diferencia es de 6 horas: cuando son las 12:00 EST, son las 18:00 CET. En verano, EST se convierte en EDT (UTC−4) y CET en CEST (UTC+2), la diferencia sigue siendo de 6 horas. Usa este conversor seleccionando Nueva York como origen y París o Berlín como destino.' },
      { q: '¿Cuál es la diferencia horaria entre ciudades?', a: 'Diferencias comunes (hora estándar, sin horario de verano): Nueva York — Londres = 5 horas. Nueva York — París = 6 horas. Londres — Tokio = 9 horas. Los Ángeles — Nueva York = 3 horas. Estas diferencias cambian 1 hora cuando una o ambas regiones observan el horario de verano. Usa este conversor para la diferencia exacta en una fecha específica.' },
      { q: '¿Cómo convierto zonas horarias?', a: 'Ingresa la fecha y hora en tu zona horaria origen, selecciona ambas zonas y haz clic en Convertir. El resultado muestra la hora equivalente en la zona destino, teniendo en cuenta el horario de verano.' },
      { q: '¿Qué es UTC?', a: 'UTC (Tiempo Universal Coordinado) es el estándar de tiempo principal por el que el mundo regula los relojes. No observa el horario de verano y se usa como referencia para todas las demás zonas horarias.' },
    ],
  },
};

module.exports = {
  pages: [
    { id: 'time-zone-converter', slugs: { en: 'time-zone-converter', fr: 'fr/convertisseur-fuseaux-horaires', es: 'es/conversor-zona-horaria' } },
  ],

  render(pageId, lang) {
    const t = T[lang];

    // Build zone options HTML
    const zoneOptions = ZONES.map(z => `<option value="${z.id}">${z.label}</option>`).join('\n        ');

    // Default from = New York (index 5), default to = London (index 9), UTC (index 25)
    const defaultFrom = 'America/New_York';
    const defaultTo = 'Europe/London';

    const headlineBlock = `  <div class="headline-block">
    <div class="kicker">${t.kicker}</div>
    <h1 class="headline">${t.headline}</h1>
    <p class="subhead">${t.subhead}</p>
  </div>`;

    const formGrid = `  <div class="form-grid">
    <div class="form-col">
      <div class="field-label">${t.fromLabel}</div>
      <select id="fromZone" class="calc-select">
        ${zoneOptions}
      </select>
      <div class="field-label" style="margin-top:1rem">${t.toLabel}</div>
      <select id="toZone" class="calc-select">
        ${zoneOptions}
      </select>
      <button class="swap-btn" onclick="swapZones()" style="margin-top:.8rem;background:none;border:1px solid var(--accent);color:var(--accent);padding:.4rem 1rem;cursor:pointer;font-family:inherit;font-size:.9rem">${t.swapBtn}</button>
      <div class="field-label" style="margin-top:1rem">${t.dateLabel}</div>
      <div class="date-row">
        <input type="number" id="day" placeholder="DD" min="1" max="31" inputmode="numeric" oninput="clamp(this,1,31)">
        <span>/</span>
        <input type="number" id="month" placeholder="MM" min="1" max="12" inputmode="numeric" oninput="clamp(this,1,12)">
        <span>/</span>
        <input type="number" id="year" placeholder="YYYY" min="1900" max="2100" inputmode="numeric" oninput="clamp(this,1900,2100)">
      </div>
      <div class="field-label" style="margin-top:.8rem">${t.timeLabel}</div>
      <div class="date-row">
        <input type="number" id="hour" placeholder="HH" min="0" max="23" inputmode="numeric" oninput="clamp(this,0,23)">
        <span>:</span>
        <input type="number" id="minute" placeholder="MM" min="0" max="59" inputmode="numeric" oninput="clamp(this,0,59)">
      </div>
      <div class="error-line" id="errorLine"></div>
      <button class="calc-btn" onclick="calculate()">${t.calcBtn}</button>
    </div>
    <div class="form-col auto-info">
      <p class="tip-text">${t.tipText}</p>
    </div>
  </div>`;

    const resultsSection = `  <div class="results-section" id="results">
    <div class="results-header">${t.resultsHeader}</div>
    <div class="age-display">
      <span class="age-number" id="heroTime" style="font-size:clamp(2rem,8vw,4rem)">—</span>
    </div>
    <div class="facts-row">
      <div class="fact-item"><div class="fact-key">${t.fromTimeLbl}</div><div class="fact-val" id="ffFrom">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.toTimeLbl}</div><div class="fact-val" id="ffTo">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.fromOffsetLbl}</div><div class="fact-val" id="ffFromOff">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.toOffsetLbl}</div><div class="fact-val" id="ffToOff">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.diffLbl}</div><div class="fact-val" id="ffDiff">—</div></div>
    </div>
  </div>`;

    const faqHTML = t.faqs.map(f =>
      `    <div class="faq-item"><h3>${f.q}</h3><p>${f.a}</p></div>`
    ).join('\n');

    const seoBlock = `  <div class="seo-block">
    <div><h2>${t.seoH2a}</h2><p>${t.seoP1}</p></div>
    <div><h2>${t.seoH2b}</h2><p>${t.seoP2}</p></div>
  </div>
  <div class="faq-block">
    <h2>${t.faqTitle}</h2>
${faqHTML}
  </div>`;

    const data = JSON.stringify({ errInvalid: t.errInvalid, defaultFrom, defaultTo });

    const script = `
var D = ${data};

// Pre-select default zones
document.getElementById('fromZone').value = D.defaultFrom;
document.getElementById('toZone').value = D.defaultTo;

// Pre-fill current date/time
(function(){
  var now = new Date();
  document.getElementById('day').value = now.getDate();
  document.getElementById('month').value = now.getMonth()+1;
  document.getElementById('year').value = now.getFullYear();
  document.getElementById('hour').value = now.getHours();
  document.getElementById('minute').value = now.getMinutes();
})();

function swapZones(){
  var f = document.getElementById('fromZone').value;
  var t = document.getElementById('toZone').value;
  document.getElementById('fromZone').value = t;
  document.getElementById('toZone').value = f;
}

function getUtcOffset(tzId, date){
  // Get UTC offset in minutes for tzId at given Date
  var utcStr = date.toLocaleString('en-US', {timeZone:'UTC', hour12:false,
    year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'});
  var tzStr  = date.toLocaleString('en-US', {timeZone:tzId,  hour12:false,
    year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'});
  function parse(s){
    var m=s.match(/(\\d+)\\/(\\d+)\\/(\\d+),\\s*(\\d+):(\\d+):(\\d+)/);
    if(!m) return NaN;
    return Date.UTC(+m[3],+m[1]-1,+m[2],+m[4]===24?0:+m[4],+m[5],+m[6]);
  }
  return (parse(tzStr)-parse(utcStr))/60000;
}

function fmtOffset(mins){
  var sign = mins>=0?'+':'-';
  var abs=Math.abs(mins);
  var h=Math.floor(abs/60);
  var m=abs%60;
  return 'UTC'+sign+pad2(h)+(m?':'+pad2(m):'');
}

function pad2(n){return n<10?'0'+n:''+n;}

function fmtTimeInZone(date, tzId){
  return date.toLocaleString('en-GB', {
    timeZone: tzId,
    year:'numeric', month:'short', day:'numeric',
    hour:'2-digit', minute:'2-digit', hour12:false
  });
}

function fmtDiff(diffMin){
  var abs=Math.abs(diffMin);
  var h=Math.floor(abs/60);
  var m=abs%60;
  var sign=diffMin>=0?'+':'-';
  if(m) return sign+h+'h '+pad2(m)+'min';
  return sign+h+'h';
}

function calculate(){
  var dv=parseInt(document.getElementById('day').value);
  var mv=parseInt(document.getElementById('month').value);
  var yv=parseInt(document.getElementById('year').value);
  var hv=parseInt(document.getElementById('hour').value);
  var minv=parseInt(document.getElementById('minute').value||'0');
  var fromZone=document.getElementById('fromZone').value;
  var toZone=document.getElementById('toZone').value;
  var err=document.getElementById('errorLine');
  var res=document.getElementById('results');
  err.classList.remove('show');
  res.classList.remove('show');

  if(!dv||!mv||!yv||isNaN(hv)||hv<0||hv>23||minv<0||minv>59){
    err.textContent=D.errInvalid; err.classList.add('show'); return;
  }

  // Build a UTC timestamp for the given local time in fromZone
  // Strategy: find the UTC time such that in fromZone it reads yv/mv/dv hv:minv
  // Approximation: use offset at noon on that day
  var approx=new Date(Date.UTC(yv,mv-1,dv,12,0,0));
  var fromOff=getUtcOffset(fromZone, approx);
  var utcMs=Date.UTC(yv,mv-1,dv,hv,minv,0) - fromOff*60000;
  var utcDate=new Date(utcMs);

  var fromOffFinal=getUtcOffset(fromZone, utcDate);
  var toOffFinal=getUtcOffset(toZone, utcDate);
  var diff=toOffFinal-fromOffFinal;

  var toTimeStr=fmtTimeInZone(utcDate, toZone);
  var fromTimeStr=fmtTimeInZone(utcDate, fromZone);

  // Hero: just the time portion in target zone
  var heroStr=utcDate.toLocaleString('en-GB',{timeZone:toZone,hour:'2-digit',minute:'2-digit',hour12:false});

  document.getElementById('heroTime').textContent=heroStr;
  document.getElementById('ffFrom').textContent=fromTimeStr;
  document.getElementById('ffTo').textContent=toTimeStr;
  document.getElementById('ffFromOff').textContent=fmtOffset(fromOffFinal);
  document.getElementById('ffToOff').textContent=fmtOffset(toOffFinal);
  document.getElementById('ffDiff').textContent=fmtDiff(diff);

  res.classList.add('show');
  res.scrollIntoView({behavior:'smooth',block:'start'});
}

document.addEventListener('keydown',function(e){if(e.key==='Enter') calculate();});
calculate();
`;

    return { title: t.title, metaDesc: t.metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs: t.faqs, source: t.source };
  },
};
