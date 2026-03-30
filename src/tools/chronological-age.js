// Chronological Age Calculator

const T = {
  en: {
    title: 'Chronological Age Calculator – Exact Age in Years, Months & Days | DateCalc.app',
    metaDesc: 'Calculate chronological age from date of birth to any reference date. Get exact age in years, months, weeks, days and hours — used in medical, educational and developmental contexts.',
    kicker: 'Chronological Age Calculator',
    headline: 'Chronological<br><em>age</em>',
    subhead: 'Calculate the exact chronological age between any two dates — years, months, weeks, and days.',
    dobLabel: 'Date of birth',
    refLabel: 'Reference date (leave blank for today)',
    calcBtn: '→ Calculate',
    tipText: '"Chronological age is the number of years, months and days since birth — the most precise measure of time lived."',
    examples: ['Assessment date: today', 'School enrollment check', 'Medical form calculation'],
    resultsHeader: 'Chronological age',
    heroSuffix: 'years',
    months: 'months', weeks: 'weeks', days: 'days', hours: 'hours',
    zodiacLbl: 'Zodiac', genLbl: 'Generation', dayLbl: 'Day born', leapLbl: 'Leap years lived',
    errInvalid: '→ Invalid date. Please check your input.',
    errFuture: '→ Date of birth cannot be after the reference date.',
    nextBdayIn: 'Next birthday in',
    nextBdayToday: '🎉 Happy Birthday!',
    dayWord: ['day', 'days'],
    pY: 'y', pM: 'mo', pD: 'd',
    zodiacSigns: ['Capricorn','Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn'],
    weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    gens: [{y:1928,n:'Silent Generation'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Generation X'},{y:1981,n:'Millennial'},{y:1997,n:'Generation Z'},{y:2013,n:'Generation Alpha'}],
    seoH2a: 'What is chronological age?',
    seoP1: 'Chronological age is the precise amount of time that has elapsed since a person\'s birth, expressed in years, months, and days. It is the most objective measure of age because it is based purely on elapsed calendar time, with no inference about physical condition, cognitive ability, or maturity. Chronological age is used across many contexts: pediatricians use it to compare a child\'s development against standard milestone charts; schools use it to determine enrollment eligibility (for example, many states require a child to be 5 years old by September 1 to start kindergarten); psychologists use it as the denominator when calculating IQ ratios; insurers use it to determine risk categories and premium rates; and legal systems use it to define majority, consent, and criminal responsibility. Unlike biological age or mental age, chronological age is entirely objective and universally agreed upon.',
    seoH2b: 'How to calculate chronological age',
    seoP2: 'To calculate chronological age accurately, subtract the date of birth from the reference date using a three-step process. First, subtract the birth day from the reference day — if the result is negative, borrow days from the previous month. Second, subtract the birth month from the reference month — if negative, borrow 12 months and subtract 1 from the year. Third, subtract the birth year. For example: a child born March 15, 2018, assessed October 20, 2025. Days: 20 − 15 = 5 days. Months: 10 − 3 = 7 months. Years: 2025 − 2018 = 7 years. Result: 7 years, 7 months, 5 days. This calculator handles all edge cases automatically, including month-end borrowing, leap years, and any reference date from the past, present, or future.',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://www.apa.org/topics/cognitive-development', label: 'American Psychological Association – Cognitive Development' },
    faqs: [
      { q: 'What is chronological age in psychology?', a: 'In psychology, chronological age (CA) is the actual elapsed time since birth, used as a baseline for comparing developmental, cognitive, and behavioral measures. The classic IQ formula divides mental age by chronological age and multiplies by 100. Modern IQ tests have moved away from this formula, but chronological age remains central to developmental assessments, milestone tracking, and educational placement decisions.' },
      { q: 'What is the difference between chronological age and mental age?', a: 'Chronological age (CA) is the actual time elapsed since birth — purely objective. Mental age (MA) is a measure of cognitive ability relative to what is typical for a given chronological age. A 10-year-old who scores as well as an average 13-year-old on cognitive tests has a mental age of 13 but a chronological age of 10. The two can differ significantly in both directions.' },
      { q: 'How do I calculate chronological age for school enrollment?', a: 'Most schools calculate chronological age by comparing the child\'s date of birth against a cutoff date (e.g., September 1). The child must have turned the required age (typically 5 for kindergarten) on or before that date. Enter the birth date and the enrollment cutoff date into this calculator to get the exact age at enrollment.' },
      { q: 'What is the chronological age formula?', a: 'The formula is: CA = Reference Date − Date of Birth, expressed in years, months, and days. The calculation requires careful handling of month-end borrowing and leap years. This calculator applies the formula correctly for any two dates, including past and future reference dates.' },
      { q: 'How is chronological age used for insurance?', a: 'Insurance companies use chronological age to determine risk categories, set premium rates, and define policy eligibility. Life insurance premiums typically increase with each birthday. Health insurance plans often have age-based pricing bands (e.g., 18–29, 30–39). Many policies also have age cutoffs for enrollment or coverage. The exact age in years and months can affect which tier applies.' },
      { q: 'How is chronological age used for standardized tests?', a: 'Most standardized psychological and educational tests are norm-referenced by age group. A test-taker\'s raw score is compared against the scores of others in the same chronological age bracket (typically defined in years and months) to produce a standard score or percentile rank. Using an incorrect chronological age — even by a few months — can shift a score into a different normative group and significantly affect the result.' },
      { q: 'What is chronological age used for?', a: 'Chronological age is used in pediatric assessments, school enrollment eligibility, developmental milestone tracking, insurance calculations, and standardized test score interpretation.' },
      { q: 'Can I calculate chronological age for a past date?', a: 'Yes. Enter the date of birth and any reference date — past, present, or future. The calculator will compute the exact chronological age between those two dates.' },
    ],
  },
  fr: {
    title: 'Calculateur d\'âge chronologique – Âge exact en années, mois et jours | DateCalc.app',
    metaDesc: 'Calculez l\'âge chronologique de la date de naissance à n\'importe quelle date de référence. Utilisé en contexte médical, éducatif et développemental.',
    kicker: 'Âge chronologique',
    headline: 'Âge<br><em>chronologique</em>',
    subhead: 'Calculez l\'âge chronologique exact entre deux dates — années, mois, semaines et jours.',
    dobLabel: 'Date de naissance',
    refLabel: 'Date de référence (laisser vide pour aujourd\'hui)',
    calcBtn: '→ Calculer',
    tipText: '"L\'âge chronologique est le nombre d\'années, de mois et de jours depuis la naissance — la mesure la plus précise du temps vécu."',
    examples: ['Date d\'évaluation : aujourd\'hui', 'Vérification d\'inscription scolaire', 'Calcul pour formulaire médical'],
    resultsHeader: 'Âge chronologique',
    heroSuffix: 'ans',
    months: 'mois', weeks: 'semaines', days: 'jours', hours: 'heures',
    zodiacLbl: 'Zodiaque', genLbl: 'Génération', dayLbl: 'Jour de naissance', leapLbl: 'Années bissextiles vécues',
    errInvalid: '→ Date invalide. Vérifiez votre saisie.',
    errFuture: '→ La date de naissance ne peut pas être après la date de référence.',
    nextBdayIn: 'Prochain anniversaire dans',
    nextBdayToday: '🎉 Joyeux anniversaire !',
    dayWord: ['jour', 'jours'],
    pY: 'a', pM: 'mo', pD: 'j',
    zodiacSigns: ['Capricorne','Verseau','Poissons','Bélier','Taureau','Gémeaux','Cancer','Lion','Vierge','Balance','Scorpion','Sagittaire','Capricorne'],
    weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    gens: [{y:1928,n:'Génération Silencieuse'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Génération X'},{y:1981,n:'Millénial'},{y:1997,n:'Génération Z'},{y:2013,n:'Génération Alpha'}],
    seoH2a: 'Qu\'est-ce que l\'âge chronologique ?',
    seoP1: 'L\'âge chronologique est la mesure précise du temps écoulé depuis la naissance d\'une personne, exprimé en années, mois et jours. C\'est la mesure d\'âge la plus objective car elle est basée uniquement sur le temps calendaire écoulé, sans inférence sur l\'état physique, les capacités cognitives ou la maturité. L\'âge chronologique est utilisé dans de nombreux contextes : les pédiatres l\'utilisent pour comparer le développement d\'un enfant aux tableaux de jalons standard ; les écoles l\'utilisent pour déterminer l\'éligibilité à l\'inscription ; les psychologues l\'utilisent pour calculer les ratios de QI ; les assureurs l\'utilisent pour définir les catégories de risque et les taux de prime. Contrairement à l\'âge biologique ou mental, l\'âge chronologique est entièrement objectif.',
    seoH2b: 'Comment calculer l\'âge chronologique ?',
    seoP2: 'Pour calculer l\'âge chronologique avec précision, soustrayez la date de naissance de la date de référence en trois étapes. D\'abord, soustrayez le jour de naissance du jour de référence — si le résultat est négatif, empruntez des jours du mois précédent. Ensuite, soustrayez le mois de naissance — si négatif, empruntez 12 mois. Enfin, soustrayez l\'année. Par exemple : enfant né le 15 mars 2018, évalué le 20 octobre 2025. Résultat : 7 ans, 7 mois, 5 jours. Ce calculateur gère automatiquement tous les cas particuliers.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://www.apa.org/topics/cognitive-development', label: 'American Psychological Association – Développement cognitif' },
    faqs: [
      { q: 'Qu\'est-ce que l\'âge chronologique en psychologie ?', a: 'En psychologie, l\'âge chronologique (AC) est le temps réel écoulé depuis la naissance, utilisé comme référence pour comparer les mesures développementales, cognitives et comportementales. La formule classique du QI divise l\'âge mental par l\'âge chronologique et multiplie par 100. L\'âge chronologique reste central dans les évaluations développementales et les décisions de placement éducatif.' },
      { q: 'Quelle est la différence entre âge chronologique et âge mental ?', a: 'L\'âge chronologique (AC) est le temps réel écoulé depuis la naissance — purement objectif. L\'âge mental (AM) est une mesure des capacités cognitives par rapport à ce qui est typique pour un âge chronologique donné. Un enfant de 10 ans qui obtient les résultats d\'un enfant de 13 ans a un âge mental de 13 ans mais un âge chronologique de 10 ans.' },
      { q: 'Comment calculer l\'âge chronologique pour l\'inscription scolaire ?', a: 'La plupart des écoles calculent l\'âge chronologique en comparant la date de naissance de l\'enfant à une date limite (par exemple le 1er septembre). L\'enfant doit avoir atteint l\'âge requis à cette date. Entrez la date de naissance et la date limite dans ce calculateur pour obtenir l\'âge exact à l\'inscription.' },
      { q: 'Quelle est la formule de l\'âge chronologique ?', a: 'La formule est : AC = Date de référence − Date de naissance, exprimé en années, mois et jours. Le calcul nécessite une gestion correcte des emprunts de fin de mois et des années bissextiles. Ce calculateur applique la formule correctement pour toutes les dates.' },
      { q: 'Comment l\'âge chronologique est-il utilisé pour les assurances ?', a: 'Les compagnies d\'assurance utilisent l\'âge chronologique pour déterminer les catégories de risque, fixer les taux de prime et définir l\'éligibilité aux polices. Les primes d\'assurance-vie augmentent généralement à chaque anniversaire. Les plans d\'assurance maladie ont souvent des tranches de tarification par âge. L\'âge exact en années et mois peut déterminer quelle tranche s\'applique.' },
      { q: 'Comment l\'âge chronologique est-il utilisé pour les tests standardisés ?', a: 'La plupart des tests psychologiques et éducatifs standardisés sont normés par groupe d\'âge. Le score brut est comparé aux scores d\'autres personnes dans la même tranche d\'âge chronologique (définie en années et mois) pour produire un score standard ou un rang percentile. Utiliser un âge chronologique incorrect peut déplacer un score dans un groupe normatif différent.' },
      { q: 'À quoi sert l\'âge chronologique ?', a: 'L\'âge chronologique est utilisé dans les évaluations pédiatriques, l\'éligibilité scolaire, le suivi des étapes développementales, les calculs d\'assurance et l\'interprétation des tests standardisés.' },
      { q: 'Puis-je calculer l\'âge chronologique pour une date passée ?', a: 'Oui. Entrez la date de naissance et toute date de référence — passée, présente ou future. Le calculateur calculera l\'âge chronologique exact entre ces deux dates.' },
    ],
  },
  es: {
    title: 'Calculadora de edad cronológica – Edad exacta en años, meses y días | DateCalc.app',
    metaDesc: 'Calcula la edad cronológica desde la fecha de nacimiento hasta cualquier fecha de referencia. Usado en contextos médicos, educativos y de desarrollo.',
    kicker: 'Edad cronológica',
    headline: 'Edad<br><em>cronológica</em>',
    subhead: 'Calcula la edad cronológica exacta entre dos fechas — años, meses, semanas y días.',
    dobLabel: 'Fecha de nacimiento',
    refLabel: 'Fecha de referencia (dejar en blanco para hoy)',
    calcBtn: '→ Calcular',
    tipText: '"La edad cronológica es el número de años, meses y días desde el nacimiento — la medida más precisa del tiempo vivido."',
    examples: ['Fecha de evaluación: hoy', 'Verificación de matrícula escolar', 'Cálculo para formulario médico'],
    resultsHeader: 'Edad cronológica',
    heroSuffix: 'años',
    months: 'meses', weeks: 'semanas', days: 'días', hours: 'horas',
    zodiacLbl: 'Zodiaco', genLbl: 'Generación', dayLbl: 'Día de nacimiento', leapLbl: 'Años bisiestos vividos',
    errInvalid: '→ Fecha no válida. Verifica tu entrada.',
    errFuture: '→ La fecha de nacimiento no puede ser posterior a la fecha de referencia.',
    nextBdayIn: 'Próximo cumpleaños en',
    nextBdayToday: '🎉 ¡Feliz cumpleaños!',
    dayWord: ['día', 'días'],
    pY: 'a', pM: 'me', pD: 'd',
    zodiacSigns: ['Capricornio','Acuario','Piscis','Aries','Tauro','Géminis','Cáncer','Leo','Virgo','Libra','Escorpio','Sagitario','Capricornio'],
    weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
    gens: [{y:1928,n:'Generación Silenciosa'},{y:1946,n:'Baby Boomer'},{y:1965,n:'Generación X'},{y:1981,n:'Millennial'},{y:1997,n:'Generación Z'},{y:2013,n:'Generación Alfa'}],
    seoH2a: '¿Qué es la edad cronológica?',
    seoP1: 'La edad cronológica es la medida precisa del tiempo transcurrido desde el nacimiento de una persona, expresada en años, meses y días. Es la medida de edad más objetiva porque se basa puramente en el tiempo calendario transcurrido, sin inferencia sobre condición física, capacidad cognitiva o madurez. La edad cronológica se usa en muchos contextos: los pediatras la usan para comparar el desarrollo de un niño con las tablas de hitos estándar; las escuelas la usan para determinar la elegibilidad de inscripción; los psicólogos la usan para calcular cocientes de inteligencia; las aseguradoras la usan para definir categorías de riesgo y tarifas de primas. A diferencia de la edad biológica o mental, la edad cronológica es completamente objetiva.',
    seoH2b: 'Cómo calcular la edad cronológica',
    seoP2: 'Para calcular la edad cronológica con precisión, resta la fecha de nacimiento de la fecha de referencia en tres pasos. Primero, resta el día de nacimiento del día de referencia — si el resultado es negativo, toma prestados días del mes anterior. Segundo, resta el mes de nacimiento — si es negativo, toma prestados 12 meses. Tercero, resta el año. Por ejemplo: un niño nacido el 15 de marzo de 2018, evaluado el 20 de octubre de 2025. Resultado: 7 años, 7 meses, 5 días. Esta calculadora maneja automáticamente todos los casos especiales.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://www.apa.org/topics/cognitive-development', label: 'American Psychological Association – Desarrollo cognitivo' },
    faqs: [
      { q: '¿Qué es la edad cronológica en psicología?', a: 'En psicología, la edad cronológica (EC) es el tiempo real transcurrido desde el nacimiento, usado como línea base para comparar medidas del desarrollo, cognitivas y conductuales. La fórmula clásica del CI divide la edad mental entre la edad cronológica y multiplica por 100. La edad cronológica sigue siendo central en evaluaciones del desarrollo y decisiones de colocación educativa.' },
      { q: '¿Cuál es la diferencia entre edad cronológica y edad mental?', a: 'La edad cronológica (EC) es el tiempo real transcurrido desde el nacimiento — puramente objetiva. La edad mental (EM) es una medida de la capacidad cognitiva en relación con lo que es típico para una edad cronológica dada. Un niño de 10 años que obtiene los resultados de un niño de 13 tiene una edad mental de 13 pero una edad cronológica de 10.' },
      { q: '¿Cómo calculo la edad cronológica para la inscripción escolar?', a: 'La mayoría de las escuelas calculan la edad cronológica comparando la fecha de nacimiento del niño con una fecha límite (por ejemplo, el 1 de septiembre). El niño debe haber cumplido la edad requerida en esa fecha. Ingresa la fecha de nacimiento y la fecha límite en esta calculadora para obtener la edad exacta en la inscripción.' },
      { q: '¿Cuál es la fórmula de la edad cronológica?', a: 'La fórmula es: EC = Fecha de referencia − Fecha de nacimiento, expresada en años, meses y días. El cálculo requiere el manejo correcto del préstamo de fin de mes y los años bisiestos. Esta calculadora aplica la fórmula correctamente para cualquier par de fechas.' },
      { q: '¿Cómo se usa la edad cronológica para seguros?', a: 'Las aseguradoras usan la edad cronológica para determinar categorías de riesgo, fijar tarifas de primas y definir la elegibilidad de pólizas. Las primas de seguro de vida típicamente aumentan con cada cumpleaños. Los planes de salud a menudo tienen bandas de precios basadas en edad. La edad exacta en años y meses puede determinar qué nivel aplica.' },
      { q: '¿Cómo se usa la edad cronológica en pruebas estandarizadas?', a: 'La mayoría de las pruebas psicológicas y educativas estandarizadas están normadas por grupo de edad cronológica. La puntuación bruta se compara con las de otros en el mismo rango de edad cronológica (definido en años y meses) para producir una puntuación estándar o rango percentil. Usar una edad cronológica incorrecta puede desplazar una puntuación a un grupo normativo diferente.' },
      { q: '¿Para qué se usa la edad cronológica?', a: 'La edad cronológica se usa en evaluaciones pediátricas, elegibilidad escolar, seguimiento de hitos del desarrollo, cálculos de seguros e interpretación de pruebas estandarizadas.' },
      { q: '¿Puedo calcular la edad cronológica para una fecha pasada?', a: 'Sí. Ingresa la fecha de nacimiento y cualquier fecha de referencia — pasada, presente o futura. La calculadora calculará la edad cronológica exacta entre esas dos fechas.' },
    ],
  },
};

module.exports = {
  pages: [
    { id: 'chronological-age-calculator', slugs: { en: 'chronological-age-calculator', fr: 'fr/age-chronologique', es: 'es/edad-cronologica' } },
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
        <input type="number" id="day" placeholder="DD" min="1" max="31" inputmode="numeric" oninput="clamp(this,1,31)">
        <span>/</span>
        <input type="number" id="month" placeholder="MM" min="1" max="12" inputmode="numeric" oninput="clamp(this,1,12)">
        <span>/</span>
        <input type="number" id="year" placeholder="YYYY" min="1900" max="2025" inputmode="numeric" oninput="clamp(this,1900,2025)">
      </div>
      <div class="field-label" style="margin-top:1rem">${t.refLabel}</div>
      <div class="date-row">
        <input type="number" id="rDay" placeholder="DD" min="1" max="31" inputmode="numeric" oninput="clamp(this,1,31)">
        <span>/</span>
        <input type="number" id="rMonth" placeholder="MM" min="1" max="12" inputmode="numeric" oninput="clamp(this,1,12)">
        <span>/</span>
        <input type="number" id="rYear" placeholder="YYYY" min="1900" max="2100" inputmode="numeric" oninput="clamp(this,1900,2100)">
      </div>
      <div class="error-line" id="errorLine"></div>
      <button class="calc-btn" onclick="calculate()">${t.calcBtn}</button>
    </div>
    <div class="form-col">
      <p class="tip-text">${t.tipText}</p>
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
    });

    const script = `
var D = ${data};

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

function calculate(){
  var d=parseInt(document.getElementById('day').value);
  var m=parseInt(document.getElementById('month').value);
  var y=parseInt(document.getElementById('year').value);
  var err=document.getElementById('errorLine');
  var res=document.getElementById('results');
  err.classList.remove('show');
  res.classList.remove('show');
  document.getElementById('preciseAge').textContent='';

  if(!d||!m||!y||d<1||d>31||m<1||m>12||y<1900||y>2025){
    err.textContent=D.errInvalid; err.classList.add('show'); return;
  }
  var bday=new Date(y,m-1,d);
  if(isNaN(bday)||bday.getDate()!==d){
    err.textContent=D.errInvalid; err.classList.add('show'); return;
  }

  var rd=parseInt(document.getElementById('rDay').value);
  var rm=parseInt(document.getElementById('rMonth').value);
  var ry=parseInt(document.getElementById('rYear').value);
  var ref;
  if(rd&&rm&&ry){
    ref=new Date(ry,rm-1,rd);
    if(isNaN(ref)||ref.getDate()!==rd){err.textContent=D.errInvalid; err.classList.add('show'); return;}
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

  // Show precise breakdown
  var parts=[];
  if(ageY>0) parts.push(ageY+D.pY);
  if(ageM>0) parts.push(ageM+D.pM);
  if(ageD2>0) parts.push(ageD2+D.pD);
  document.getElementById('preciseAge').textContent=parts.join(' · ');

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

  res.classList.add('show');
  res.scrollIntoView({behavior:'smooth',block:'start'});
}

document.addEventListener('keydown',function(e){if(e.key==='Enter') calculate();});
`;

    return { title: t.title, metaDesc: t.metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs: t.faqs, source: t.source };
  },
};
