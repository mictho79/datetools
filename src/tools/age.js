// Age Calculator (live precise counter — updates every second)

const EVENTS = require('../data/events.json');
const EVENTS_FR = require('../data/events_fr.json');
const EVENTS_ES = require('../data/events_es.json');

const T = {
  en: {
    title: 'Age Calculator – Find Your Exact Age | DateCalc.app',
    metaDesc: 'Free age calculator. Enter your date of birth and instantly get your exact age in years, months, weeks, days, and hours — with a live second-by-second counter.',
    kicker: 'Age Calculator',
    headline: 'How <em>old</em><br>am I?',
    subhead: 'Enter your date of birth — get your exact age, live to the second.',
    dobLabel: 'Date of birth',
    refToggleLabel: 'Calculate for a specific date',
    refLabel: 'Reference date',
    calcBtn: '→ Calculate',
    ariaDay: 'Day', ariaMonth: 'Month', ariaYear: 'Year',
    tipText: '"Knowing your exact age, down to the second, is stranger and more beautiful than you think."',
    examples: ['Born July 15, 1990', 'Born January 1, 2000', 'Born December 25, 1985'],
    resultsHeader: 'Your exact age',
    heroSuffix: 'years old',
    months: 'months', weeks: 'weeks', days: 'days', hours: 'hours',
    zodiacLbl: 'Zodiac', genLbl: 'Generation', dayLbl: 'Day born', leapLbl: 'Leap years lived',
    errInvalid: '→ Invalid date. Please check your input.',
    errFuture: '→ Date of birth cannot be in the future.',
    nextBdayIn: 'Next birthday in',
    nextBdayToday: '🎉 Happy Birthday!',
    dayWord: ['day', 'days'],
    pY: 'y', pM: 'mo', pD: 'd',
    zodiacSigns: ['Capricorn','Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn'],
    weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    gens: [{y:1928,n:'Silent Generation'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Generation X'},{y:1981,n:'Millennial'},{y:1997,n:'Generation Z'},{y:2013,n:'Generation Alpha'}],
    wTitle: 'The World When You Were Born',
    wLblEvents: 'Events', wLblMusic: 'Music', wLblFilm: 'Film', wLblTech: 'Tech', wLblPrices: 'Prices',
    wLblBread: 'Bread', wLblGas: 'Gas', wLblHouse: 'House',
    seoH2a: 'How is age calculated?',
    seoP1: 'Your age is calculated by subtracting your birth date from today\'s date, taking into account the varying lengths of each month and the extra day added during leap years. The calculation works in three steps: first it finds the number of full years elapsed, then the remaining months, and finally the remaining days. For example, someone born on July 15, 1990 turns 35 in July 2025, but before that birthday they are still 34 years, 11 months, and some days old. This tool handles all those edge cases automatically — including February 29 birthdays — and displays the result as a live counter that updates every second, reflecting the relentless passage of time.',
    seoH2b: 'Why calculate age to the second?',
    seoP2: 'Knowing your exact age in days, hours, or even seconds has real practical value beyond curiosity. Medical professionals use age in days for pediatric dosing calculations. Legal systems worldwide tie rights and obligations to precise age thresholds — voting at 18, retirement benefits at 62 or 65, pension eligibility, and more. Insurance underwriters use age-in-months for premium calculations. Genealogists verify historical records by cross-checking reported ages against census dates. The live second-by-second counter is also a powerful reminder that your life is always in motion — a perspective that many people find unexpectedly moving.',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'U.S. Social Security Administration – Life Expectancy' },
    faqs: [
      { q: 'How old am I if I was born in 1980?', a: 'If you were born in 1980, you turned 46 in 2026 (or will turn 46 later in the year, depending on your birthday). Enter your exact birth date above for a precise answer including months, weeks, and days.' },
      { q: 'How old am I if I was born in 1990?', a: 'If you were born in 1990, you are 35 or 36 years old in 2026, depending on whether your birthday has passed. Use the calculator above with your exact date to get your age to the day.' },
      { q: 'How old am I if I was born in 2000?', a: 'If you were born in 2000, you turned 26 in 2026. People born in 2000 are part of Generation Z. Enter your full birth date to see your exact age in months, weeks, and days.' },
      { q: 'How do I calculate my exact age in days?', a: 'Subtract your birth date from today\'s date. There are about 365.25 days per year on average, accounting for leap years. This tool does the math instantly — just enter your birthday and the "Days" figure is shown directly in the results.' },
      { q: 'What is my age if I was born in a leap year?', a: 'If you were born on February 29, your birthday officially falls on March 1 in non-leap years for legal purposes in most countries. Our calculator handles this correctly and still counts your age accurately every year.' },
      { q: 'Can I use this as an age calculator for retirement?', a: 'Yes. Use the "Calculate for a specific date" option and enter your planned retirement date. The tool will show exactly how old you will be on that day — useful for comparing against Social Security eligibility ages (62, 67, or 70 in the US).' },
      { q: 'Can I calculate my age on a future date?', a: 'Yes. Check the "On a specific date" option and enter any reference date in the future to see what age you will be on that day. This is useful for planning milestones like school enrollment, retirement, or insurance renewals.' },
      { q: 'How do I find my age in months?', a: 'Your age in months is your total number of completed years multiplied by 12, plus the remaining complete months. For example, a person who is 35 years and 4 months old is 424 months old. This calculator shows the exact month count in the results strip.' },
    ],
  },
  fr: {
    title: 'Calculateur d\'âge – Trouvez votre âge exact | DateCalc.app',
    metaDesc: 'Calculateur d\'âge gratuit. Entrez votre date de naissance et obtenez votre âge exact en années, mois, semaines, jours et heures — avec un compteur en temps réel.',
    kicker: 'Calculateur d\'âge',
    headline: 'Quel <em>âge</em><br>ai-je ?',
    subhead: 'Entrez votre date de naissance — obtenez votre âge exact, en direct à la seconde.',
    dobLabel: 'Date de naissance',
    refToggleLabel: 'Calculer à une date précise',
    refLabel: 'Date de référence',
    calcBtn: '→ Calculer',
    ariaDay: 'Jour', ariaMonth: 'Mois', ariaYear: 'Année',
    tipText: '"Connaître son âge exact, à la seconde près, est plus étrange et plus beau qu\'on ne le croit."',
    examples: ['Né le 15 juillet 1990', 'Né le 1er janvier 2000', 'Né le 25 décembre 1985'],
    resultsHeader: 'Votre âge exact',
    heroSuffix: 'ans',
    months: 'mois', weeks: 'semaines', days: 'jours', hours: 'heures',
    zodiacLbl: 'Zodiaque', genLbl: 'Génération', dayLbl: 'Jour de naissance', leapLbl: 'Années bissextiles vécues',
    errInvalid: '→ Date invalide. Vérifiez votre saisie.',
    errFuture: '→ La date de naissance ne peut pas être dans le futur.',
    nextBdayIn: 'Prochain anniversaire dans',
    nextBdayToday: '🎉 Joyeux anniversaire !',
    dayWord: ['jour', 'jours'],
    pY: 'a', pM: 'mo', pD: 'j',
    zodiacSigns: ['Capricorne','Verseau','Poissons','Bélier','Taureau','Gémeaux','Cancer','Lion','Vierge','Balance','Scorpion','Sagittaire','Capricorne'],
    weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    gens: [{y:1928,n:'Génération Silencieuse'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Génération X'},{y:1981,n:'Millénial'},{y:1997,n:'Génération Z'},{y:2013,n:'Génération Alpha'}],
    wTitle: 'Le monde quand vous êtes né',
    wLblEvents: 'Événements', wLblMusic: 'Musique', wLblFilm: 'Film', wLblTech: 'Tech', wLblPrices: 'Prix',
    wLblBread: 'Pain', wLblGas: 'Essence', wLblHouse: 'Maison',
    seoH2a: 'Comment calcule-t-on son âge ?',
    seoP1: 'L\'âge se calcule en soustrayant la date de naissance de la date actuelle, en tenant compte de la longueur variable de chaque mois et du jour supplémentaire des années bissextiles. Le calcul se fait en trois étapes : d\'abord le nombre d\'années complètes écoulées, puis les mois restants, et enfin les jours restants. Par exemple, une personne née le 15 juillet 1990 fête ses 35 ans en juillet 2025, mais avant cet anniversaire elle a encore 34 ans, 11 mois et quelques jours. Cet outil gère tous ces cas particuliers automatiquement — y compris les anniversaires du 29 février — et affiche le résultat sous forme de compteur en direct mis à jour chaque seconde.',
    seoH2b: 'Pourquoi calculer son âge à la seconde ?',
    seoP2: 'Connaître son âge exact en jours, heures ou même en secondes a une vraie valeur pratique au-delà de la simple curiosité. Les médecins utilisent l\'âge en jours pour les calculs pédiatriques. Les systèmes juridiques lient les droits à des seuils d\'âge précis — vote à 18 ans, retraite à 62 ou 65 ans, éligibilité aux pensions. Les assureurs utilisent l\'âge en mois pour calculer les primes. Les généalogistes vérifient les archives historiques en croisant les âges déclarés avec les dates de recensement. Le compteur seconde par seconde rappelle aussi que la vie est toujours en mouvement.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'Administration de la sécurité sociale américaine – Espérance de vie' },
    faqs: [
      { q: 'Quel âge ai-je si je suis né en 1980 ?', a: 'Si vous êtes né en 1980, vous avez eu 46 ans en 2026 (ou vous les aurez plus tard dans l\'année selon votre date d\'anniversaire). Entrez votre date de naissance exacte ci-dessus pour un résultat précis en mois, semaines et jours.' },
      { q: 'Quel âge ai-je si je suis né en 1990 ?', a: 'Si vous êtes né en 1990, vous avez 35 ou 36 ans en 2026, selon que votre anniversaire est passé ou non. Utilisez le calculateur avec votre date exacte pour connaître votre âge au jour près.' },
      { q: 'Quel âge ai-je si je suis né en 2000 ?', a: 'Si vous êtes né en 2000, vous avez eu 26 ans en 2026. Les personnes nées en 2000 appartiennent à la Génération Z. Entrez votre date de naissance complète pour voir votre âge en mois, semaines et jours.' },
      { q: 'Comment calculer mon âge exact en jours ?', a: 'Soustrayez votre date de naissance d\'aujourd\'hui. Il y a environ 365,25 jours par an en moyenne. Cet outil fait le calcul instantanément — entrez votre anniversaire et le nombre de jours apparaît directement dans les résultats.' },
      { q: 'Quel est mon âge si je suis né une année bissextile ?', a: 'Si vous êtes né le 29 février, votre anniversaire tombe officiellement le 1er mars les années non bissextiles dans la plupart des pays. Notre calculateur gère cela correctement et compte votre âge avec précision chaque année.' },
      { q: 'Puis-je utiliser cet outil comme calculateur d\'âge pour la retraite ?', a: 'Oui. Utilisez l\'option "Calculer à une date précise" et entrez votre date de départ à la retraite prévue. L\'outil affichera exactement quel âge vous aurez ce jour-là, utile pour comparer avec les seuils d\'éligibilité aux pensions.' },
      { q: 'Puis-je calculer mon âge à une date future ?', a: 'Oui. Cochez "À une date précise" et entrez une date future pour connaître votre âge ce jour-là. Très utile pour planifier des jalons comme l\'inscription scolaire, la retraite ou les renouvellements d\'assurance.' },
      { q: 'Comment trouver mon âge en mois ?', a: 'Votre âge en mois est le nombre total d\'années complètes multiplié par 12, plus les mois complets restants. Par exemple, une personne de 35 ans et 4 mois a 424 mois. Ce calculateur affiche le nombre exact de mois dans la barre de résultats.' },
    ],
  },
  es: {
    title: 'Calculadora de edad – Encuentra tu edad exacta | DateCalc.app',
    metaDesc: 'Calculadora de edad gratuita. Ingresa tu fecha de nacimiento y obtén tu edad exacta en años, meses, semanas, días y horas — con contador en tiempo real.',
    kicker: 'Calculadora de edad',
    headline: '¿Cuántos <em>años</em><br>tengo?',
    subhead: 'Ingresa tu fecha de nacimiento — obtén tu edad exacta, en vivo al segundo.',
    dobLabel: 'Fecha de nacimiento',
    refToggleLabel: 'Calcular en una fecha específica',
    refLabel: 'Fecha de referencia',
    calcBtn: '→ Calcular',
    ariaDay: 'Día', ariaMonth: 'Mes', ariaYear: 'Año',
    tipText: '"Conocer tu edad exacta, al segundo, es más extraño y más hermoso de lo que crees."',
    examples: ['Nacido el 15 jul 1990', 'Nacido el 1 ene 2000', 'Nacido el 25 dic 1985'],
    resultsHeader: 'Tu edad exacta',
    heroSuffix: 'años',
    months: 'meses', weeks: 'semanas', days: 'días', hours: 'horas',
    zodiacLbl: 'Zodiaco', genLbl: 'Generación', dayLbl: 'Día de nacimiento', leapLbl: 'Años bisiestos vividos',
    errInvalid: '→ Fecha no válida. Verifica tu entrada.',
    errFuture: '→ La fecha de nacimiento no puede ser futura.',
    nextBdayIn: 'Próximo cumpleaños en',
    nextBdayToday: '🎉 ¡Feliz cumpleaños!',
    dayWord: ['día', 'días'],
    pY: 'a', pM: 'me', pD: 'd',
    zodiacSigns: ['Capricornio','Acuario','Piscis','Aries','Tauro','Géminis','Cáncer','Leo','Virgo','Libra','Escorpio','Sagitario','Capricornio'],
    weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
    gens: [{y:1928,n:'Generación Silenciosa'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Generación X'},{y:1981,n:'Millennial'},{y:1997,n:'Generación Z'},{y:2013,n:'Generación Alfa'}],
    wTitle: 'El mundo cuando naciste',
    wLblEvents: 'Eventos', wLblMusic: 'Música', wLblFilm: 'Película', wLblTech: 'Tecnología', wLblPrices: 'Precios',
    wLblBread: 'Pan', wLblGas: 'Gasolina', wLblHouse: 'Casa',
    seoH2a: '¿Cómo se calcula la edad?',
    seoP1: 'La edad se calcula restando la fecha de nacimiento a la fecha actual, teniendo en cuenta la longitud variable de cada mes y el día extra de los años bisiestos. El cálculo se realiza en tres pasos: primero se encuentran los años completos transcurridos, luego los meses restantes y finalmente los días restantes. Por ejemplo, alguien nacido el 15 de julio de 1990 cumple 35 años en julio de 2025, pero antes de ese cumpleaños tiene 34 años, 11 meses y algunos días. Esta herramienta maneja todos esos casos de borde automáticamente, incluidos los cumpleaños del 29 de febrero, y muestra el resultado como un contador en vivo que se actualiza cada segundo.',
    seoH2b: '¿Por qué calcular la edad al segundo?',
    seoP2: 'Conocer tu edad exacta en días, horas o incluso segundos tiene un valor práctico real más allá de la curiosidad. Los profesionales médicos usan la edad en días para cálculos de dosificación pediátrica. Los sistemas legales vinculan derechos y obligaciones a umbrales de edad precisos: votar a los 18, jubilación a los 62 o 65, elegibilidad para pensiones. Las aseguradoras usan la edad en meses para cálculos de primas. Los genealogistas verifican registros históricos cruzando edades declaradas con fechas de censo. El contador segundo a segundo también recuerda que tu vida siempre está en movimiento.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://www.ssa.gov/oact/population/longevity.html', label: 'Administración del Seguro Social de EE. UU. – Esperanza de vida' },
    faqs: [
      { q: '¿Cuántos años tengo si nací en 1980?', a: 'Si naciste en 1980, cumpliste 46 años en 2026 (o los cumplirás más adelante en el año según tu fecha de nacimiento). Ingresa tu fecha exacta arriba para obtener un resultado preciso en meses, semanas y días.' },
      { q: '¿Cuántos años tengo si nací en 1990?', a: 'Si naciste en 1990, tienes 35 o 36 años en 2026, dependiendo de si ya pasó tu cumpleaños. Usa la calculadora con tu fecha exacta para conocer tu edad al día.' },
      { q: '¿Cuántos años tengo si nací en 2000?', a: 'Si naciste en 2000, cumpliste 26 años en 2026. Las personas nacidas en 2000 pertenecen a la Generación Z. Ingresa tu fecha de nacimiento completa para ver tu edad en meses, semanas y días.' },
      { q: '¿Cómo calculo mi edad exacta en días?', a: 'Resta tu fecha de nacimiento de la fecha de hoy. Hay aproximadamente 365,25 días por año en promedio. Esta herramienta hace el cálculo al instante — ingresa tu cumpleaños y el número de días aparece directamente en los resultados.' },
      { q: '¿Cuál es mi edad si nací en un año bisiesto?', a: 'Si naciste el 29 de febrero, tu cumpleaños cae oficialmente el 1 de marzo en los años no bisiestos en la mayoría de países. Nuestra calculadora maneja esto correctamente y cuenta tu edad con precisión cada año.' },
      { q: '¿Puedo usar esto como calculadora de edad para la jubilación?', a: 'Sí. Usa la opción "Calcular en una fecha específica" e ingresa tu fecha de jubilación planificada. La herramienta mostrará exactamente qué edad tendrás ese día, útil para comparar con los umbrales de elegibilidad para pensiones.' },
      { q: '¿Puedo calcular mi edad en una fecha futura?', a: 'Sí. Marca "En una fecha específica" e ingresa una fecha futura para saber qué edad tendrás ese día. Muy útil para planificar hitos como la inscripción escolar, la jubilación o las renovaciones de seguro.' },
      { q: '¿Cómo encuentro mi edad en meses?', a: 'Tu edad en meses es el número total de años completos multiplicado por 12, más los meses completos restantes. Por ejemplo, una persona de 35 años y 4 meses tiene 424 meses. Esta calculadora muestra el conteo exacto de meses en la barra de resultados.' },
    ],
  },
};

module.exports = {
  pages: [
    {
      id: 'age-calculator',
      isHomepage: true,
      slugs: { en: 'age-calculator', fr: 'fr/calculateur-age', es: 'es/calculadora-edad' },
    },
  ],

  render(pageId, lang) {
    const t = T[lang];

    const headlineBlock = `  <div class="headline-block">
    <div class="kicker">${t.kicker}</div>
    <h1 class="headline">${t.headline}</h1>
    <p class="subhead">${t.subhead}</p>
  </div>`;

    const formGrid = `  <div class="form-grid">
    <div class="form-col">
      <div class="field-label">${t.dobLabel}</div>
      <div class="date-row">
        <input type="number" id="day" placeholder="DD" min="1" max="31" inputmode="numeric" oninput="clamp(this,1,31)" aria-label="${t.ariaDay}">
        <span>/</span>
        <input type="number" id="month" placeholder="MM" min="1" max="12" inputmode="numeric" oninput="clamp(this,1,12)" aria-label="${t.ariaMonth}">
        <span>/</span>
        <input type="number" id="year" placeholder="YYYY" min="1905" max="2026" inputmode="numeric" oninput="clamp(this,1905,2026)" aria-label="${t.ariaYear}">
      </div>
      <label class="ref-toggle-row">
        <input type="checkbox" id="refToggle" onchange="toggleRef()">
        <span>${t.refToggleLabel}</span>
      </label>
      <div class="ref-fields" id="refFields">
        <div class="field-label" style="margin-top:.8rem">${t.refLabel}</div>
        <div class="date-row">
          <input type="number" id="rDay" placeholder="DD" min="1" max="31" inputmode="numeric" oninput="clamp(this,1,31)" aria-label="${t.ariaDay}">
          <span>/</span>
          <input type="number" id="rMonth" placeholder="MM" min="1" max="12" inputmode="numeric" oninput="clamp(this,1,12)" aria-label="${t.ariaMonth}">
          <span>/</span>
          <input type="number" id="rYear" placeholder="YYYY" min="1900" max="2100" inputmode="numeric" oninput="clamp(this,1900,2100)" aria-label="${t.ariaYear}">
        </div>
      </div>
      <div class="error-line" id="errorLine"></div>
      <button class="calc-btn" onclick="calculate()">${t.calcBtn}</button>
    </div>
    <div class="form-col">
      <p class="tip-text">${t.tipText}</p>
      <ul class="example-list">
        ${t.examples.map((ex, i) => {
          const args = [[1990,7,15],[2000,1,1],[1985,12,25]][i];
          return `<li onclick="fillExample(${args[0]},${args[1]},${args[2]})">${ex} →</li>`;
        }).join('\n        ')}
      </ul>
    </div>
  </div>`;

    const resultsSection = `  <div class="results-section" id="results">
    <div class="results-header">${t.resultsHeader}</div>
    <div class="age-display">
      <span class="age-number" id="heroAge">—</span>
      <span class="age-suffix">${t.heroSuffix}</span>
    </div>
    <div class="precise-age" id="preciseAge"></div>
    <div class="stats-strip">
      <div class="stat-item"><div class="stat-num" id="statMonths">—</div><div class="stat-lbl">${t.months}</div></div>
      <div class="stat-item"><div class="stat-num" id="statWeeks">—</div><div class="stat-lbl">${t.weeks}</div></div>
      <div class="stat-item"><div class="stat-num" id="statDays">—</div><div class="stat-lbl">${t.days}</div></div>
      <div class="stat-item"><div class="stat-num" id="statHours">—</div><div class="stat-lbl">${t.hours}</div></div>
    </div>
    <div class="facts-row">
      <div class="fact-item"><div class="fact-key">${t.zodiacLbl}</div><div class="fact-val" id="ffZodiac">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.genLbl}</div><div class="fact-val" id="ffGen">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.dayLbl}</div><div class="fact-val" id="ffDay">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.leapLbl}</div><div class="fact-val" id="ffLeap">—</div></div>
    </div>
    <div class="bday-banner" id="bdayBanner"></div>
    <div class="world-when" id="worldWhen"></div>
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

    // Build a merged events object: periods+tech from translated source, music/film/prices always from EN
    const evSrc = lang === 'fr' ? EVENTS_FR : lang === 'es' ? EVENTS_ES : null;
    let mergedEvents = EVENTS;
    if (evSrc) {
      mergedEvents = {};
      for (const yr of Object.keys(EVENTS)) {
        const enEv = EVENTS[yr];
        const trEv = evSrc[yr];
        if (trEv) {
          mergedEvents[yr] = {
            periods: trEv.periods || enEv.periods,
            tech: trEv.tech || enEv.tech,
            music: enEv.music,
            film: enEv.film,
            prices: enEv.prices,
          };
        } else {
          mergedEvents[yr] = enEv;
        }
      }
    }

    const data = JSON.stringify({
      zodiacSigns: t.zodiacSigns,
      weekDays: t.weekDays,
      gens: t.gens,
      errInvalid: t.errInvalid,
      errFuture: t.errFuture,
      nextBdayIn: t.nextBdayIn,
      nextBdayToday: t.nextBdayToday,
      dayWord: t.dayWord,
      pY: t.pY, pM: t.pM, pD: t.pD,
      wTitle: t.wTitle,
      wLblEvents: t.wLblEvents, wLblMusic: t.wLblMusic, wLblFilm: t.wLblFilm,
      wLblTech: t.wLblTech, wLblPrices: t.wLblPrices,
      wLblBread: t.wLblBread, wLblGas: t.wLblGas, wLblHouse: t.wLblHouse,
      events: mergedEvents,
    });

    const script = `
var D = ${data};
var _liveRef = null;
var _liveTimer = null;

function fmt(n){return n.toLocaleString();}
function pad2(n){return n<10?'0'+n:''+n;}

function getZodiac(d,m){
  var b=[20,19,20,20,21,21,22,22,22,22,21,21];
  var idx=(m===1&&d<=b[0])||(m===12&&d>b[11])?0:d<=b[m-1]?m-1:m;
  return D.zodiacSigns[idx];
}

function getGen(y){
  var gs=D.gens;
  for(var i=gs.length-1;i>=0;i--) if(y>=gs[i].y) return gs[i].n;
  return gs[0].n;
}

function leapCount(from,to){
  var c=0;
  for(var y=from;y<=to;y++) if((y%4===0&&y%100!==0)||y%400===0) c++;
  return c;
}

function updatePrecise(){
  if(!_liveRef) return;
  var now=new Date();
  var ageY=now.getFullYear()-_liveRef.getFullYear();
  var ageM=now.getMonth()-_liveRef.getMonth();
  var ageD=now.getDate()-_liveRef.getDate();
  var h=now.getHours(), min=now.getMinutes(), s=now.getSeconds();
  // borrow if day not yet reached
  if(ageD<0){ ageM--; ageD+=new Date(now.getFullYear(),now.getMonth(),0).getDate(); }
  if(ageM<0){ ageY--; ageM+=12; }
  var parts=[];
  if(ageY>0) parts.push(ageY+D.pY);
  if(ageM>0) parts.push(ageM+D.pM);
  if(ageD>0) parts.push(ageD+D.pD);
  parts.push(pad2(h)+'h '+pad2(min)+'min '+pad2(s)+'s');
  document.getElementById('preciseAge').textContent=parts.join(' · ');
}

function getWorldEvents(year, month){
  var el=document.getElementById('worldWhen');
  var e=D.events[String(year)];
  if(!e){el.innerHTML='';return;}
  var period=month<=4?'1':month<=8?'2':'3';
  var worldArr=(e.periods&&e.periods[period])||e.world||[];
  var rows=[
    ['🌍',D.wLblEvents,worldArr.join(' · ')],
    ['🎵',D.wLblMusic,e.music],
    ['🎬',D.wLblFilm,e.film],
    ['💻',D.wLblTech,e.tech],
    ['🛒',D.wLblPrices,D.wLblBread+' '+e.prices.bread+' · '+D.wLblGas+' '+e.prices.gas+' · '+D.wLblHouse+' '+e.prices.house],
  ];
  var h='<div class="world-when-title">'+D.wTitle+'</div>';
  rows.forEach(function(r){
    h+='<div class="world-row"><span class="world-icon">'+r[0]+'</span><span class="world-lbl">'+r[1]+'</span><span class="world-val">'+r[2]+'</span></div>';
  });
  el.innerHTML=h;
}

function stopLive(){
  if(_liveTimer){clearInterval(_liveTimer); _liveTimer=null;}
  _liveRef=null;
  document.getElementById('preciseAge').textContent='';
  document.getElementById('worldWhen').innerHTML='';
}

function toggleRef(){
  document.getElementById('refFields').classList.toggle('show', document.getElementById('refToggle').checked);
}

function fillExample(y,m,d){
  document.getElementById('day').value=d;
  document.getElementById('month').value=m;
  document.getElementById('year').value=y;
  calculate();
}

function calculate(){
  var d=parseInt(document.getElementById('day').value);
  var m=parseInt(document.getElementById('month').value);
  var y=parseInt(document.getElementById('year').value);
  var err=document.getElementById('errorLine');
  var res=document.getElementById('results');
  err.classList.remove('show');
  res.classList.remove('show');
  stopLive();

  if(!d||!m||!y||d<1||d>31||m<1||m>12||y<1905||y>2026){
    err.textContent=D.errInvalid; err.classList.add('show'); return;
  }
  var bday=new Date(y,m-1,d);
  if(isNaN(bday)||bday.getDate()!==d){
    err.textContent=D.errInvalid; err.classList.add('show'); return;
  }

  var useRefDate=document.getElementById('refToggle').checked;
  var ref;
  if(useRefDate){
    ref=new Date(
      parseInt(document.getElementById('rYear').value),
      parseInt(document.getElementById('rMonth').value)-1,
      parseInt(document.getElementById('rDay').value)
    );
  } else {
    ref=new Date(); ref.setHours(0,0,0,0);
  }

  if(bday>ref){err.textContent=D.errFuture; err.classList.add('show'); return;}

  var ageY=ref.getFullYear()-bday.getFullYear();
  var ageM=ref.getMonth()-bday.getMonth();
  var ageD2=ref.getDate()-bday.getDate();
  if(ageD2<0){ageM--; ageD2+=new Date(ref.getFullYear(),ref.getMonth(),0).getDate();}
  if(ageM<0){ageY--; ageM+=12;}

  var totalDays=Math.floor((ref-bday)/86400000);
  var totalWeeks=Math.floor(totalDays/7);
  var totalMonths=ageY*12+ageM;
  var totalHours=totalDays*24;
  var leaps=leapCount(y, ref.getFullYear());

  var next=new Date(ref.getFullYear(),m-1,d);
  if(next<=ref) next.setFullYear(next.getFullYear()+1);
  var daysNext=Math.ceil((next-ref)/86400000);

  document.getElementById('heroAge').textContent=ageY;
  document.getElementById('statMonths').textContent=fmt(totalMonths);
  document.getElementById('statWeeks').textContent=fmt(totalWeeks);
  document.getElementById('statDays').textContent=fmt(totalDays);
  document.getElementById('statHours').textContent=fmt(totalHours);
  document.getElementById('ffZodiac').textContent=getZodiac(d,m);
  document.getElementById('ffGen').textContent=getGen(y);
  document.getElementById('ffDay').textContent=D.weekDays[bday.getDay()];
  document.getElementById('ffLeap').textContent=leaps;

  var banner=document.getElementById('bdayBanner');
  if(daysNext===0){
    banner.textContent=D.nextBdayToday;
  } else {
    var dw=daysNext===1?D.dayWord[0]:D.dayWord[1];
    banner.textContent=D.nextBdayIn+' '+daysNext+' '+dw;
  }

  getWorldEvents(y, m);

  res.classList.add('show');
  res.scrollIntoView({behavior:'smooth',block:'start'});

  // Start live counter only when using today (not a custom ref date)
  if(!useRefDate){
    _liveRef=bday;
    updatePrecise();
    _liveTimer=setInterval(updatePrecise,1000);
  }
}

document.addEventListener('keydown',function(e){if(e.key==='Enter') calculate();});
`;

    return { title: t.title, metaDesc: t.metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs: t.faqs, source: t.source };
  },
};
