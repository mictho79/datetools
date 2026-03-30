// Week Number Calculator

const T = {
  en: {
    title: 'Week Number – What Week Is It? | DateCalc.app',
    metaDesc: 'Find the ISO week number for today or any date. Shows the first and last day of the week, days left in the year, and more.',
    kicker: 'Week Number',
    headline: 'What <em>week</em><br>is it?',
    subhead: 'Find the ISO week number for any date — or see today\'s week number instantly.',
    dateLabel: 'Date (leave blank for today)',
    calcBtn: '→ Get Week Number',
    tipText: '"A year has 52 or 53 weeks, yet most people cannot say which week they are in without looking it up."',
    resultsHeader: 'Week number',
    heroSuffix: 'of {year}',
    weekStartLbl: 'Week starts', weekEndLbl: 'Week ends',
    doyLbl: 'Day of year', doyLeftLbl: 'Days left in year',
    weekTotal: 'Total weeks in year',
    errInvalid: '→ Invalid date. Please check your input.',
    seoH2a: 'What is an ISO week number?',
    seoP1: 'ISO 8601 defines a standardized system for numbering weeks within a year. Week 1 is the week containing the first Thursday of the year, and weeks always run Monday through Sunday. This rule means that week 1 of a new year can actually begin in late December of the previous year — and conversely, the final days of December may belong to week 1 of the following year. For example, December 28 is always in the last week of its ISO year, while January 1 might be in week 52 or 53 of the prior year. This system is widely used in European business, logistics, manufacturing, and project management to create unambiguous week references that span year boundaries without confusion.',
    seoH2b: 'When does week 1 start?',
    seoP2: 'ISO week 1 starts on the Monday of the week that contains January 4th of the new year. A simpler way to remember it: week 1 is the first week of the year that has at least four days falling in January. Because of this rule, years can have either 52 or 53 ISO weeks. A year has 53 weeks when January 1 falls on a Thursday (or on a Wednesday in a leap year). The week numbering system used in the United States differs from ISO: the US system counts Sunday as the first day of the week and week 1 as the week containing January 1, regardless of which day of the week that falls on.',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://www.iso.org/iso-8601-date-and-time-format.html', label: 'ISO 8601 – Week Numbering Standard' },
    faqs: [
      { q: 'What week number is it this week?', a: 'The calculator shows the current ISO week number automatically when you open the page — no input needed. ISO weeks run Monday to Sunday and there are 52 or 53 per year. You can also enter any date to find its week number.' },
      { q: 'How many weeks are in a year?', a: 'Most years have 52 ISO weeks. Some years have 53 weeks — this happens when January 1 falls on a Thursday, or on a Wednesday in a leap year. The years 2026, 2032, and 2037 are upcoming 53-week years.' },
      { q: 'What is the difference between ISO week numbering and US week numbering?', a: 'ISO 8601 weeks start on Monday, and week 1 contains the year\'s first Thursday. The US system starts weeks on Sunday, and week 1 is simply the week that contains January 1. This means the two systems can differ by up to a week, especially at the start and end of the year. Most international business and European countries use ISO week numbers.' },
      { q: 'When does week 1 start in 2026?', a: 'ISO week 1 of 2026 starts on Monday, December 29, 2025 and ends on Sunday, January 4, 2026. This is because January 1, 2026 falls on a Thursday, which is within that Monday-to-Sunday span.' },
      { q: 'Why does week 1 sometimes start in December?', a: 'ISO 8601 defines week 1 as containing the first Thursday of the year. If January 1 falls on a Friday, Saturday, or Sunday, those days belong to week 52 or 53 of the previous year, and week 1 of the new year starts on the preceding Monday in December.' },
      { q: 'Does every year have 52 weeks?', a: 'Most years have 52 ISO weeks. Years where January 1 falls on Thursday (or Wednesday in leap years) have 53 weeks. You can verify this by entering December 31 of any year into the calculator to see its week number.' },
      { q: 'What week number is it in week-based project planning?', a: 'In project management and manufacturing, week numbers are used to schedule deliveries, sprints, and milestones without specifying exact dates. ISO week numbers are the international standard for this. Enter any project date above to find its week number instantly.' },
      { q: 'What is week number 1 of 2025?', a: 'ISO week 1 of 2025 starts on Monday, December 30, 2024 and ends on Sunday, January 5, 2025. Enter 01/01/2025 in the calculator above to confirm — it will show week 1 of 2025.' },
    ],
    weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  },
  fr: {
    title: 'Numéro de semaine – Quelle semaine sommes-nous ? | DateCalc.app',
    metaDesc: 'Trouvez le numéro de semaine ISO pour aujourd\'hui ou n\'importe quelle date. Affiche le premier et le dernier jour de la semaine, les jours restants dans l\'année.',
    kicker: 'Numéro de semaine',
    headline: 'Quelle <em>semaine</em><br>sommes-nous ?',
    subhead: 'Trouvez le numéro de semaine ISO pour n\'importe quelle date — ou voyez instantanément le numéro de la semaine actuelle.',
    dateLabel: 'Date (laisser vide pour aujourd\'hui)',
    calcBtn: '→ Obtenir le numéro',
    tipText: '"Une année a 52 ou 53 semaines, pourtant la plupart des gens ne savent pas dans quelle semaine ils se trouvent sans le chercher."',
    resultsHeader: 'Numéro de semaine',
    heroSuffix: 'de {year}',
    weekStartLbl: 'Semaine commence', weekEndLbl: 'Semaine se termine',
    doyLbl: 'Jour de l\'année', doyLeftLbl: 'Jours restants dans l\'année',
    weekTotal: 'Semaines totales dans l\'année',
    errInvalid: '→ Date invalide. Vérifiez votre saisie.',
    seoH2a: 'Qu\'est-ce qu\'un numéro de semaine ISO ?',
    seoP1: 'L\'ISO 8601 définit un système standardisé de numérotation des semaines dans une année. La semaine 1 est celle qui contient le premier jeudi de l\'année, et les semaines vont toujours du lundi au dimanche. Cette règle signifie que la semaine 1 d\'une nouvelle année peut commencer fin décembre de l\'année précédente — et à l\'inverse, les derniers jours de décembre peuvent appartenir à la semaine 1 de l\'année suivante. Le 28 décembre est toujours dans la dernière semaine de son année ISO. Ce système est largement utilisé dans les entreprises européennes, la logistique, la fabrication et la gestion de projet pour créer des références de semaines sans ambiguïté.',
    seoH2b: 'Quand commence la semaine 1 ?',
    seoP2: 'La semaine ISO 1 commence le lundi de la semaine qui contient le 4 janvier de la nouvelle année. Pour s\'en souvenir plus facilement : la semaine 1 est la première semaine de l\'année qui a au moins quatre jours tombant en janvier. En raison de cette règle, les années peuvent avoir 52 ou 53 semaines ISO. Une année a 53 semaines lorsque le 1er janvier tombe un jeudi (ou un mercredi en année bissextile). Le système américain diffère de l\'ISO : il compte le dimanche comme premier jour de la semaine et la semaine 1 comme celle contenant le 1er janvier.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://www.iso.org/iso-8601-date-and-time-format.html', label: 'ISO 8601 – Norme de numérotation des semaines' },
    faqs: [
      { q: 'Quel numéro de semaine sommes-nous cette semaine ?', a: 'Le calculateur affiche automatiquement le numéro de semaine ISO actuel à l\'ouverture de la page — sans saisie nécessaire. Les semaines ISO vont du lundi au dimanche et il y en a 52 ou 53 par an. Vous pouvez aussi entrer n\'importe quelle date pour trouver son numéro de semaine.' },
      { q: 'Combien de semaines y a-t-il dans une année ?', a: 'La plupart des années ont 52 semaines ISO. Certaines années en ont 53 — cela se produit quand le 1er janvier tombe un jeudi, ou un mercredi lors d\'une année bissextile. Les années 2026, 2032 et 2037 sont des prochaines années à 53 semaines.' },
      { q: 'Quelle est la différence entre la numérotation des semaines ISO et américaine ?', a: 'Les semaines ISO 8601 commencent le lundi, et la semaine 1 contient le premier jeudi de l\'année. Le système américain commence les semaines le dimanche, et la semaine 1 est simplement celle qui contient le 1er janvier. Les deux systèmes peuvent différer jusqu\'à une semaine, surtout en début et fin d\'année. La plupart des pays européens et des entreprises internationales utilisent les numéros de semaine ISO.' },
      { q: 'Quand commence la semaine 1 en 2026 ?', a: 'La semaine ISO 1 de 2026 commence le lundi 29 décembre 2025 et se termine le dimanche 4 janvier 2026. C\'est parce que le 1er janvier 2026 tombe un jeudi, qui est dans cette période du lundi au dimanche.' },
      { q: 'Pourquoi la semaine 1 commence-t-elle parfois en décembre ?', a: 'L\'ISO 8601 définit la semaine 1 comme celle contenant le premier jeudi de l\'année. Si le 1er janvier tombe un vendredi, samedi ou dimanche, ces jours appartiennent à la semaine 52 ou 53 de l\'année précédente, et la semaine 1 de la nouvelle année commence le lundi précédent en décembre.' },
      { q: 'Chaque année a-t-elle 52 semaines ?', a: 'La plupart des années ont 52 semaines ISO. Les années où le 1er janvier tombe un jeudi (ou mercredi en années bissextiles) ont 53 semaines. Vous pouvez le vérifier en entrant le 31 décembre de n\'importe quelle année dans le calculateur.' },
      { q: 'Quel numéro de semaine utiliser dans la planification de projet ?', a: 'En gestion de projet et fabrication, les numéros de semaine servent à planifier des livraisons, des sprints et des jalons sans préciser de dates exactes. Les numéros de semaine ISO sont la norme internationale pour cela. Entrez n\'importe quelle date de projet ci-dessus pour trouver son numéro de semaine.' },
      { q: 'Quel est le numéro de semaine 1 de 2025 ?', a: 'La semaine ISO 1 de 2025 commence le lundi 30 décembre 2024 et se termine le dimanche 5 janvier 2025. Entrez 01/01/2025 dans le calculateur ci-dessus pour confirmer — il affichera la semaine 1 de 2025.' },
    ],
    weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    months: ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
  },
  es: {
    title: 'Número de semana – ¿En qué semana estamos? | DateCalc.app',
    metaDesc: 'Encuentra el número de semana ISO para hoy o cualquier fecha. Muestra el primer y último día de la semana, días restantes en el año y más.',
    kicker: 'Número de semana',
    headline: '¿Qué <em>semana</em><br>es esta?',
    subhead: 'Encuentra el número de semana ISO para cualquier fecha — o ve el número de semana de hoy al instante.',
    dateLabel: 'Fecha (dejar en blanco para hoy)',
    calcBtn: '→ Ver número de semana',
    tipText: '"Un año tiene 52 o 53 semanas, sin embargo la mayoría de personas no puede decir en qué semana está sin buscarlo."',
    resultsHeader: 'Número de semana',
    heroSuffix: 'de {year}',
    weekStartLbl: 'Semana comienza', weekEndLbl: 'Semana termina',
    doyLbl: 'Día del año', doyLeftLbl: 'Días restantes en el año',
    weekTotal: 'Semanas totales en el año',
    errInvalid: '→ Fecha no válida. Verifica tu entrada.',
    seoH2a: '¿Qué es un número de semana ISO?',
    seoP1: 'ISO 8601 define un sistema estandarizado para numerar las semanas dentro de un año. La semana 1 es la que contiene el primer jueves del año, y las semanas siempre van de lunes a domingo. Esta regla significa que la semana 1 de un año nuevo puede comenzar a finales de diciembre del año anterior — e inversamente, los últimos días de diciembre pueden pertenecer a la semana 1 del año siguiente. El 28 de diciembre siempre está en la última semana de su año ISO. Este sistema es ampliamente usado en empresas europeas, logística, manufactura y gestión de proyectos para crear referencias de semana sin ambigüedad.',
    seoH2b: '¿Cuándo comienza la semana 1?',
    seoP2: 'La semana ISO 1 comienza el lunes de la semana que contiene el 4 de enero del nuevo año. Una forma más sencilla de recordarlo: la semana 1 es la primera semana del año que tiene al menos cuatro días cayendo en enero. Debido a esta regla, los años pueden tener 52 o 53 semanas ISO. Un año tiene 53 semanas cuando el 1 de enero cae en jueves (o en miércoles en año bisiesto). El sistema de numeración de semanas usado en Estados Unidos difiere del ISO: el sistema estadounidense cuenta el domingo como el primer día de la semana y la semana 1 como la que contiene el 1 de enero.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://www.iso.org/iso-8601-date-and-time-format.html', label: 'ISO 8601 – Estándar de numeración de semanas' },
    faqs: [
      { q: '¿En qué número de semana estamos esta semana?', a: 'La calculadora muestra automáticamente el número de semana ISO actual al abrir la página — sin necesidad de ingresar datos. Las semanas ISO van de lunes a domingo y hay 52 o 53 por año. También puedes ingresar cualquier fecha para encontrar su número de semana.' },
      { q: '¿Cuántas semanas tiene un año?', a: 'La mayoría de años tienen 52 semanas ISO. Algunos años tienen 53 semanas — esto ocurre cuando el 1 de enero cae en jueves, o en miércoles en un año bisiesto. Los años 2026, 2032 y 2037 son próximos años con 53 semanas.' },
      { q: '¿Cuál es la diferencia entre la numeración de semanas ISO y la estadounidense?', a: 'Las semanas ISO 8601 comienzan el lunes, y la semana 1 contiene el primer jueves del año. El sistema estadounidense comienza las semanas el domingo, y la semana 1 es simplemente la que contiene el 1 de enero. Los dos sistemas pueden diferir hasta en una semana, especialmente al inicio y final del año. La mayoría de países europeos y empresas internacionales usan números de semana ISO.' },
      { q: '¿Cuándo comienza la semana 1 en 2026?', a: 'La semana ISO 1 de 2026 comienza el lunes 29 de diciembre de 2025 y termina el domingo 4 de enero de 2026. Esto se debe a que el 1 de enero de 2026 cae en jueves, que está dentro de ese período de lunes a domingo.' },
      { q: '¿Por qué la semana 1 a veces comienza en diciembre?', a: 'ISO 8601 define la semana 1 como la que contiene el primer jueves del año. Si el 1 de enero cae en viernes, sábado o domingo, esos días pertenecen a la semana 52 o 53 del año anterior, y la semana 1 del nuevo año comienza el lunes anterior en diciembre.' },
      { q: '¿Todos los años tienen 52 semanas?', a: 'La mayoría de años tienen 52 semanas ISO. Los años en que el 1 de enero cae en jueves (o miércoles en años bisiestos) tienen 53 semanas. Puedes verificarlo ingresando el 31 de diciembre de cualquier año en la calculadora.' },
      { q: '¿Qué número de semana usar en la planificación de proyectos?', a: 'En gestión de proyectos y manufactura, los números de semana se usan para programar entregas, sprints e hitos sin especificar fechas exactas. Los números de semana ISO son el estándar internacional para esto. Ingresa cualquier fecha de proyecto arriba para encontrar su número de semana al instante.' },
      { q: '¿Cuál es el número de semana 1 de 2025?', a: 'La semana ISO 1 de 2025 comienza el lunes 30 de diciembre de 2024 y termina el domingo 5 de enero de 2025. Ingresa 01/01/2025 en la calculadora de arriba para confirmar — mostrará la semana 1 de 2025.' },
    ],
    weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
    months: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
  },
};

module.exports = {
  pages: [
    { id: 'week-number', slugs: { en: 'week-number', fr: 'fr/numero-semaine', es: 'es/numero-semana' } },
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
      <span class="age-number" id="heroWeek">—</span>
      <span class="age-suffix" id="heroSuffix"></span>
    </div>
    <div class="facts-row">
      <div class="fact-item"><div class="fact-key">${t.weekStartLbl}</div><div class="fact-val" id="ffStart">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.weekEndLbl}</div><div class="fact-val" id="ffEnd">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.doyLbl}</div><div class="fact-val" id="ffDoy">—</div></div>
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

    const data = JSON.stringify({ errInvalid: t.errInvalid, weekDays: t.weekDays, months: t.months, heroSuffix: t.heroSuffix });

    const script = `
var D = ${data};
function fmt(n){return n.toLocaleString();}

function getWeekNum(d){
  var date=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));
  var day=date.getUTCDay()||7;
  date.setUTCDate(date.getUTCDate()+4-day);
  var yearStart=new Date(Date.UTC(date.getUTCFullYear(),0,1));
  return {week:Math.ceil((((date-yearStart)/86400000)+1)/7), isoYear:date.getUTCFullYear()};
}

function weeksInYear(y){
  var d31dec=new Date(y,11,31);
  return getWeekNum(d31dec).week;
}

function getDoy(d){
  return Math.floor((d-new Date(d.getFullYear(),0,0))/86400000);
}

function daysInYear(y){ return ((y%4===0&&y%100!==0)||y%400===0)?366:365; }

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

  var wn=getWeekNum(date);
  var doy=getDoy(date);
  var diy=daysInYear(date.getFullYear());
  var left=diy-doy;

  // Monday of this week
  var dow=(date.getDay()+6)%7; // 0=Mon
  var weekStart=new Date(date); weekStart.setDate(date.getDate()-dow);
  var weekEnd=new Date(weekStart); weekEnd.setDate(weekStart.getDate()+6);

  document.getElementById('heroWeek').textContent=wn.week;
  document.getElementById('heroSuffix').textContent=D.heroSuffix.replace('{year}',wn.isoYear);
  document.getElementById('ffStart').textContent=fmtDate(weekStart);
  document.getElementById('ffEnd').textContent=fmtDate(weekEnd);
  document.getElementById('ffDoy').textContent=doy;
  document.getElementById('ffLeft').textContent=left;
}

calculate();
document.addEventListener('keydown',function(e){if(e.key==='Enter') calculate();});
`;

    return { title: t.title, metaDesc: t.metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs: t.faqs, source: t.source };
  },
};
