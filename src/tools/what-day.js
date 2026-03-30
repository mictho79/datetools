// What Day Is It Today

const T = {
  en: {
    title: 'What Day Is It Today? – Day of Week for Any Date | Date.tools',
    metaDesc: 'Find out what day it is today, or look up the day of the week for any date. Shows day number, week number, and days remaining in the year.',
    kicker: 'What Day Is It Today?',
    headline: 'What <em>day</em><br>is it?',
    subhead: 'See today\'s day instantly, or look up the day of the week for any date.',
    dateLabel: 'Date (leave blank for today)',
    calcBtn: '→ Check Date',
    tipText: '"Monday is a state of mind. But at least now you know which one you\'re in."',
    resultsHeader: 'Day information',
    dayLbl: 'Day of week', dateLbl: 'Full date',
    doyLbl: 'Day of year', weekNumLbl: 'Week number',
    doyLeftLbl: 'Days left in year', leapLbl: 'Leap year',
    yes: 'Yes', no: 'No',
    errInvalid: '→ Invalid date. Please check your input.',
    seoH2a: 'What day of the week is a given date?',
    seoP1: 'To find the day of the week for any date, mathematicians have developed several elegant algorithms. Zeller\'s congruence uses modular arithmetic to compute the day directly from the day, month, and year values. The Doomsday algorithm, invented by mathematician John Conway, exploits the fact that certain memorable dates (4/4, 6/6, 8/8, 10/10, 12/12, and others) always fall on the same day of the week within a given year — making mental calendar calculations possible. For everyday use, our calculator does all of this automatically: just enter any date from 1900 to 2100 and instantly see which day of the week it falls on, along with the ISO week number, the day of the year, and how many days remain in the year.',
    seoH2b: 'How many days are in each month?',
    seoP2: 'January, March, May, July, August, October, and December have 31 days. April, June, September, and November have 30 days. February has 28 days in a regular year and 29 days in a leap year. A leap year occurs in every year divisible by 4, except for century years (divisible by 100) which must also be divisible by 400 to be leap years. So 2000 was a leap year, but 1900 was not. This cycle means the day-of-week pattern for any given date shifts by one or two days each year, which is why the same date falls on a different weekday year after year.',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://en.wikipedia.org/wiki/Gregorian_calendar', label: 'Wikipedia – Gregorian Calendar' },
    faqs: [
      { q: 'What day is it today?', a: 'Open this page to see today\'s day of the week displayed automatically. The date shown is based on your local time zone. No input is needed — the result updates instantly when you load the page.' },
      { q: 'What day was January 1, 2000?', a: 'January 1, 2000 was a Saturday. This was also the first day of the new millennium (or, by strict counting, the second-to-last year of the 20th century). You can verify this by entering 01/01/2000 in the date field above.' },
      { q: 'What day of the week is my birthday?', a: 'Enter your birth date in the field above and the calculator will tell you which day of the week you were born. You can also check what day your next birthday will fall on by entering the upcoming year with your birth month and day.' },
      { q: 'What day will it be in 100 days?', a: 'For that calculation, use our Date Calculator tool which lets you add days to a date. Enter today\'s date, choose "Add 100 days", and get the exact future date along with its day of the week.' },
      { q: 'What is the Doomsday algorithm?', a: 'The Doomsday algorithm is a mental math method invented by John Conway that lets you calculate the day of the week for any date in your head. It works by memorizing that certain anchor dates in each year (called Doomsdays) always fall on the same weekday. For 2026, the Doomsday is Monday. Once you know the Doomsday, you can compute any other date relative to it.' },
      { q: 'What day will Christmas be in 2026?', a: 'Christmas 2026 (December 25, 2026) falls on a Friday. Enter 25/12/2026 above to confirm. Christmas falls on a Friday in 2026, then on a Saturday in 2027, and on a Monday in 2028 (a leap year).' },
      { q: 'What day was a date in the past?', a: 'Enter any historical date between January 1, 1900 and December 31, 2100 in the date field above. The calculator uses the Gregorian calendar for all dates in that range and returns the correct day of the week instantly.' },
      { q: 'What day of the week is my next birthday?', a: 'Enter your upcoming birthday (current year and your birth month and day) in the date field. The result shows the exact day of the week. For example, if your birthday is June 15, enter 15/06/2026 to see it falls on a Monday.' },
    ],
    weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  },
  fr: {
    title: 'Quel jour sommes-nous ? – Jour de la semaine pour n\'importe quelle date | Date.tools',
    metaDesc: 'Découvrez quel jour nous sommes aujourd\'hui, ou trouvez le jour de la semaine pour n\'importe quelle date.',
    kicker: 'Quel jour sommes-nous ?',
    headline: 'Quel <em>jour</em><br>sommes-nous ?',
    subhead: 'Voyez instantanément le jour d\'aujourd\'hui, ou trouvez le jour de la semaine pour n\'importe quelle date.',
    dateLabel: 'Date (laisser vide pour aujourd\'hui)',
    calcBtn: '→ Vérifier',
    tipText: '"Lundi est un état d\'esprit. Mais au moins maintenant vous savez dans lequel vous vous trouvez."',
    resultsHeader: 'Information sur la date',
    dayLbl: 'Jour de la semaine', dateLbl: 'Date complète',
    doyLbl: 'Jour de l\'année', weekNumLbl: 'Numéro de semaine',
    doyLeftLbl: 'Jours restants dans l\'année', leapLbl: 'Année bissextile',
    yes: 'Oui', no: 'Non',
    errInvalid: '→ Date invalide. Vérifiez votre saisie.',
    seoH2a: 'Quel jour de la semaine est une date donnée ?',
    seoP1: 'Pour trouver le jour de la semaine d\'une date, les mathématiciens ont développé plusieurs algorithmes élégants. La congruence de Zeller utilise l\'arithmétique modulaire pour calculer le jour directement à partir du jour, du mois et de l\'année. L\'algorithme du Jugement Dernier, inventé par le mathématicien John Conway, exploite le fait que certaines dates mémorables (4/4, 6/6, 8/8, 10/10, 12/12, et d\'autres) tombent toujours le même jour de la semaine dans une année donnée. Pour un usage quotidien, notre calculateur fait tout cela automatiquement : entrez n\'importe quelle date de 1900 à 2100 et voyez instantanément quel jour de la semaine elle tombe.',
    seoH2b: 'Combien de jours y a-t-il dans chaque mois ?',
    seoP2: 'Janvier, mars, mai, juillet, août, octobre et décembre ont 31 jours. Avril, juin, septembre et novembre ont 30 jours. Février a 28 jours en année ordinaire et 29 jours en année bissextile. Une année bissextile survient tous les 4 ans, sauf les années séculaires (divisibles par 100) qui doivent aussi être divisibles par 400. Ainsi 2000 était bissextile, mais 1900 ne l\'était pas. Ce cycle fait que le motif jour-semaine d\'une date donnée se décale d\'un ou deux jours chaque année.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://en.wikipedia.org/wiki/Gregorian_calendar', label: 'Wikipédia – Calendrier grégorien' },
    faqs: [
      { q: 'Quel jour sommes-nous aujourd\'hui ?', a: 'Ouvrez cette page pour voir automatiquement le jour de la semaine actuel. La date affichée est basée sur votre fuseau horaire local. Aucune saisie n\'est nécessaire — le résultat s\'affiche instantanément au chargement de la page.' },
      { q: 'Quel jour était le 1er janvier 2000 ?', a: 'Le 1er janvier 2000 était un samedi. C\'était aussi le premier jour du nouveau millénaire (ou, au sens strict, l\'avant-dernier jour du 20e siècle). Vous pouvez le vérifier en entrant 01/01/2000 dans le champ ci-dessus.' },
      { q: 'Quel jour de la semaine suis-je né ?', a: 'Entrez votre date de naissance dans le champ ci-dessus et le calculateur vous dira quel jour de la semaine vous êtes né. Vous pouvez aussi vérifier quel jour tombera votre prochain anniversaire en entrant l\'année à venir avec votre mois et jour de naissance.' },
      { q: 'Quel jour sera-ce dans 100 jours ?', a: 'Pour ce calcul, utilisez notre outil Calculateur de date qui vous permet d\'ajouter des jours à une date. Entrez la date d\'aujourd\'hui, choisissez "Ajouter 100 jours" et obtenez la date future exacte avec son jour de la semaine.' },
      { q: 'Qu\'est-ce que l\'algorithme du Jugement Dernier ?', a: 'L\'algorithme du Jugement Dernier est une méthode de calcul mental inventée par John Conway qui permet de calculer le jour de la semaine de n\'importe quelle date mentalement. Il fonctionne en mémorisant que certaines dates d\'ancrage dans chaque année tombent toujours le même jour de la semaine. Pour 2026, le Jugement Dernier est le lundi.' },
      { q: 'Quel jour sera Noël en 2026 ?', a: 'Noël 2026 (25 décembre 2026) tombe un vendredi. Entrez 25/12/2026 ci-dessus pour confirmer. Noël tombe un vendredi en 2026, puis un samedi en 2027 et un lundi en 2028 (année bissextile).' },
      { q: 'Quel jour était une date dans le passé ?', a: 'Entrez n\'importe quelle date historique entre le 1er janvier 1900 et le 31 décembre 2100 dans le champ ci-dessus. Le calculateur utilise le calendrier grégorien pour toutes les dates dans cette plage et retourne instantanément le jour de la semaine correct.' },
      { q: 'Quel jour de la semaine est mon prochain anniversaire ?', a: 'Entrez votre prochain anniversaire (année en cours et votre mois et jour de naissance) dans le champ de date. Le résultat affiche le jour exact de la semaine. Par exemple, si votre anniversaire est le 15 juin, entrez 15/06/2026 pour voir que c\'est un lundi.' },
    ],
    weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    months: ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
  },
  es: {
    title: '¿Qué día es hoy? – Día de la semana para cualquier fecha | Date.tools',
    metaDesc: 'Descubre qué día es hoy, o busca el día de la semana para cualquier fecha. Muestra número del día, semana y días restantes en el año.',
    kicker: '¿Qué día es hoy?',
    headline: '¿Qué <em>día</em><br>es hoy?',
    subhead: 'Ve el día de hoy al instante, o busca el día de la semana para cualquier fecha.',
    dateLabel: 'Fecha (dejar en blanco para hoy)',
    calcBtn: '→ Verificar',
    tipText: '"El lunes es un estado mental. Pero al menos ahora sabes en cuál estás."',
    resultsHeader: 'Información de fecha',
    dayLbl: 'Día de la semana', dateLbl: 'Fecha completa',
    doyLbl: 'Día del año', weekNumLbl: 'Número de semana',
    doyLeftLbl: 'Días restantes en el año', leapLbl: 'Año bisiesto',
    yes: 'Sí', no: 'No',
    errInvalid: '→ Fecha no válida. Verifica tu entrada.',
    seoH2a: '¿Qué día de la semana es una fecha dada?',
    seoP1: 'Para encontrar el día de la semana de cualquier fecha, los matemáticos han desarrollado varios algoritmos elegantes. La congruencia de Zeller usa aritmética modular para calcular el día directamente a partir del día, mes y año. El algoritmo del Día del Juicio, inventado por el matemático John Conway, aprovecha que ciertas fechas memorables (4/4, 6/6, 8/8, 10/10, 12/12, y otras) siempre caen en el mismo día de la semana dentro de un año dado. Para uso cotidiano, nuestra calculadora hace todo esto automáticamente: ingresa cualquier fecha de 1900 a 2100 y ve instantáneamente qué día de la semana cae, junto con el número de semana ISO, el día del año y cuántos días quedan en el año.',
    seoH2b: '¿Cuántos días tiene cada mes?',
    seoP2: 'Enero, marzo, mayo, julio, agosto, octubre y diciembre tienen 31 días. Abril, junio, septiembre y noviembre tienen 30 días. Febrero tiene 28 días en un año ordinario y 29 días en un año bisiesto. Un año bisiesto ocurre en cada año divisible por 4, excepto los años de siglo (divisibles por 100) que también deben ser divisibles por 400. Así 2000 fue bisiesto, pero 1900 no. Este ciclo hace que el patrón de día-semana de una fecha dada se desplace uno o dos días cada año.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://en.wikipedia.org/wiki/Gregorian_calendar', label: 'Wikipedia – Calendario Gregoriano' },
    faqs: [
      { q: '¿Qué día es hoy?', a: 'Abre esta página para ver automáticamente el día de la semana actual. La fecha mostrada se basa en tu zona horaria local. No se necesita ninguna entrada — el resultado se actualiza al instante al cargar la página.' },
      { q: '¿Qué día fue el 1 de enero de 2000?', a: 'El 1 de enero de 2000 fue sábado. También fue el primer día del nuevo milenio (o, en sentido estricto, el penúltimo año del siglo XX). Puedes verificarlo ingresando 01/01/2000 en el campo de arriba.' },
      { q: '¿En qué día de la semana nací?', a: 'Ingresa tu fecha de nacimiento en el campo de arriba y la calculadora te dirá qué día de la semana naciste. También puedes verificar en qué día caerá tu próximo cumpleaños ingresando el año próximo con tu mes y día de nacimiento.' },
      { q: '¿Qué día será en 100 días?', a: 'Para ese cálculo, usa nuestra herramienta Calculadora de fechas que te permite sumar días a una fecha. Ingresa la fecha de hoy, elige "Sumar 100 días" y obtén la fecha futura exacta junto con su día de la semana.' },
      { q: '¿Qué es el algoritmo del Día del Juicio?', a: 'El algoritmo del Día del Juicio es un método de cálculo mental inventado por John Conway que permite calcular el día de la semana de cualquier fecha mentalmente. Funciona memorizando que ciertas fechas ancla en cada año siempre caen en el mismo día de la semana. Para 2026, el Día del Juicio es el lunes.' },
      { q: '¿Qué día será la Navidad en 2026?', a: 'La Navidad de 2026 (25 de diciembre de 2026) cae en viernes. Ingresa 25/12/2026 arriba para confirmar. La Navidad cae en viernes en 2026, luego en sábado en 2027 y en lunes en 2028 (año bisiesto).' },
      { q: '¿Qué día fue una fecha en el pasado?', a: 'Ingresa cualquier fecha histórica entre el 1 de enero de 1900 y el 31 de diciembre de 2100 en el campo de fecha de arriba. La calculadora usa el calendario gregoriano para todas las fechas en ese rango y devuelve instantáneamente el día de la semana correcto.' },
      { q: '¿Qué día de la semana es mi próximo cumpleaños?', a: 'Ingresa tu próximo cumpleaños (año actual y tu mes y día de nacimiento) en el campo de fecha. El resultado muestra el día exacto de la semana. Por ejemplo, si tu cumpleaños es el 15 de junio, ingresa 15/06/2026 para ver que cae en lunes.' },
    ],
    weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
    months: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
  },
};

module.exports = {
  pages: [
    { id: 'what-day-is-it-today', slugs: { en: 'what-day-is-it-today', fr: 'fr/quel-jour-sommes-nous', es: 'es/que-dia-es-hoy' } },
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
      <div class="field-label">${t.dateLabel}</div>
      <div class="date-row">
        <input type="number" id="day" placeholder="DD" min="1" max="31" inputmode="numeric" oninput="clamp(this,1,31)">
        <span>/</span>
        <input type="number" id="month" placeholder="MM" min="1" max="12" inputmode="numeric" oninput="clamp(this,1,12)">
        <span>/</span>
        <input type="number" id="year" placeholder="YYYY" min="1900" max="2100" inputmode="numeric" oninput="clamp(this,1900,2100)">
      </div>
      <div class="error-line" id="errorLine"></div>
      <button class="calc-btn" onclick="calculate()">${t.calcBtn}</button>
    </div>
    <div class="form-col auto-info">
      <p class="tip-text">${t.tipText}</p>
    </div>
  </div>`;

    const resultsSection = `  <div class="results-section auto-show" id="results">
    <div class="results-header">${t.resultsHeader}</div>
    <div class="age-display">
      <span class="age-number" id="heroDay" style="font-size:clamp(2.5rem,10vw,5rem)">—</span>
    </div>
    <div class="facts-row">
      <div class="fact-item"><div class="fact-key">${t.dateLbl}</div><div class="fact-val" id="ffDate">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.doyLbl}</div><div class="fact-val" id="ffDoy">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.weekNumLbl}</div><div class="fact-val" id="ffWeek">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.doyLeftLbl}</div><div class="fact-val" id="ffLeft">—</div></div>
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

    const data = JSON.stringify({ errInvalid: t.errInvalid, weekDays: t.weekDays, months: t.months, yes: t.yes, no: t.no });

    const script = `
var D = ${data};

function getWeekNum(d){
  var date=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));
  var day=date.getUTCDay()||7;
  date.setUTCDate(date.getUTCDate()+4-day);
  var yearStart=new Date(Date.UTC(date.getUTCFullYear(),0,1));
  return Math.ceil((((date-yearStart)/86400000)+1)/7);
}

function getDoy(d){ return Math.floor((d-new Date(d.getFullYear(),0,0))/86400000); }
function daysInYear(y){ return ((y%4===0&&y%100!==0)||y%400===0)?366:365; }
function isLeap(y){ return (y%4===0&&y%100!==0)||y%400===0; }

function fmtDate(d){
  return d.getDate()+' '+D.months[d.getMonth()]+' '+d.getFullYear();
}

function calculate(){
  var dv=parseInt(document.getElementById('day').value);
  var mv=parseInt(document.getElementById('month').value);
  var yv=parseInt(document.getElementById('year').value);
  var err=document.getElementById('errorLine');
  err.classList.remove('show');

  var date;
  if(!dv&&!mv&&!yv){
    date=new Date(); date.setHours(0,0,0,0);
  } else {
    if(!dv||!mv||!yv||dv<1||dv>31||mv<1||mv>12){err.textContent=D.errInvalid; err.classList.add('show'); return;}
    date=new Date(yv,mv-1,dv);
    if(date.getDate()!==dv){err.textContent=D.errInvalid; err.classList.add('show'); return;}
  }

  var doy=getDoy(date);
  var diy=daysInYear(date.getFullYear());
  document.getElementById('heroDay').textContent=D.weekDays[date.getDay()];
  document.getElementById('ffDate').textContent=fmtDate(date);
  document.getElementById('ffDoy').textContent=doy+' / '+diy;
  document.getElementById('ffWeek').textContent=getWeekNum(date);
  document.getElementById('ffLeft').textContent=diy-doy;
}

calculate();
document.addEventListener('keydown',function(e){if(e.key==='Enter') calculate();});
`;

    return { title: t.title, metaDesc: t.metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs: t.faqs, source: t.source };
  },
};
