// Days Between Dates

const T = {
  en: {
    title: 'Days Between Dates – Calculate the Difference | Date.tools',
    metaDesc: 'Calculate the exact number of days between two dates. Also shows weeks, months, and years. Free online date difference calculator.',
    kicker: 'Days Between Dates',
    headline: 'Days <em>between</em><br>two dates',
    subhead: 'Enter a start and end date — get the exact difference in days, weeks, months, and years.',
    startLabel: 'Start date',
    endLabel: 'End date',
    todayBtn: 'Use today',
    calcBtn: '→ Calculate',
    tipText: '"Every day is a page in the book. How many pages have you written between two chapters?"',
    examples: ['Jan 1 2000 → Today', 'Your birthday → Today', 'Start of year → Today'],
    resultsHeader: 'Date difference',
    heroSuffix: 'days',
    weeks: 'weeks', months: 'months', years: 'years',
    startDay: 'Start day', endDay: 'End day', weekendsLbl: 'Weekends', workdaysLbl: 'Workdays',
    errInvalid: '→ Invalid date. Please check your input.',
    errOrder: '→ End date must be after start date.',
    seoH2a: 'How to count days between two dates',
    seoP1: 'To count days between two dates, subtract the earlier date from the later date — each full 24-hour period counts as one day. The math is straightforward for short spans, but quickly gets tricky once you cross month or year boundaries. February has 28 or 29 days, months range from 28 to 31 days, and leap years add an extra day every four years (with exceptions for century years). This calculator handles all that complexity automatically: enter your start and end dates and instantly get the exact day count along with the equivalent in weeks, months, and years. It also breaks the span down into weekdays versus weekend days, which is useful for project planning.',
    seoH2b: 'Common uses for date difference calculation',
    seoP2: 'Counting days between dates is one of the most common date math tasks people face. Project managers use it to calculate durations and verify milestone gaps. HR teams count days of employment for benefit eligibility or notice periods. Students count days until exams or application deadlines. Lawyers and accountants track contractual deadlines and statute-of-limitations windows. Parents count how many days until a child\'s birthday. Travelers calculate how many days they will be abroad for visa or tax residency purposes. Whatever your reason, this calculator gives you the precise count in seconds.',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://www.timeanddate.com/date/duration.html', label: 'Time and Date – Date Duration Calculator' },
    faqs: [
      { q: 'How many days between two dates?', a: 'Enter your start date and end date in the fields above and click Calculate. The result shows the exact number of calendar days between the two dates, along with the equivalent in weeks, months, and years.' },
      { q: 'How many days between birthdays?', a: 'Enter your most recent birthday as the start date and your next birthday as the end date. For a recurring count, just set the start to this year\'s birthday and the end to next year\'s — the answer will always be 365 (or 366 in a leap year).' },
      { q: 'What is the difference between working days and calendar days?', a: 'Calendar days count every day including weekends and holidays. Working days (also called business days) count only Monday through Friday. This calculator shows both: the total calendar day count and the workday count, which excludes Saturdays and Sundays. For calculations that also exclude public holidays, you would need a dedicated business day calculator.' },
      { q: 'How many days until my deadline?', a: 'Enter today\'s date as the start and your deadline date as the end, then click Calculate. The result tells you exactly how many days you have left — both in total calendar days and in working days, so you can plan your schedule accurately.' },
      { q: 'Does the calculator include or exclude the start/end date?', a: 'The calculator counts full 24-hour days between the two dates. January 1 to January 3 = 2 days. If you need to include both endpoints (inclusive count), add 1 to the result.' },
      { q: 'How many days between two specific years?', a: 'Simply enter January 1 of the first year as start, and December 31 of the last year as end, then add 1 for an inclusive count. For example, January 1, 2000 to December 31, 2024 spans 9,131 days (inclusive).' },
      { q: 'What is the maximum date range supported?', a: 'This calculator supports any date from 1900 to 2100, giving you a range of up to 73,000+ days. That covers historical research, long-term planning, and virtually any real-world use case.' },
      { q: 'How do I count only business days?', a: 'The "Workdays" figure in the results excludes Saturdays and Sundays. For a calculator that also excludes public holidays, use our Business Days Calculator. Note that public holidays vary by country and region, so those are handled separately.' },
    ],
    weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
  },
  fr: {
    title: 'Jours entre deux dates – Calculer la différence | Date.tools',
    metaDesc: 'Calculez le nombre exact de jours entre deux dates. Affiche aussi les semaines, mois et années. Calculateur de différence de dates gratuit.',
    kicker: 'Jours entre deux dates',
    headline: 'Jours <em>entre</em><br>deux dates',
    subhead: 'Entrez une date de début et une date de fin — obtenez la différence exacte en jours, semaines, mois et années.',
    startLabel: 'Date de début',
    endLabel: 'Date de fin',
    todayBtn: 'Aujourd\'hui',
    calcBtn: '→ Calculer',
    tipText: '"Chaque jour est une page du livre. Combien de pages avez-vous écrit entre deux chapitres ?"',
    examples: ['1er jan 2000 → Aujourd\'hui', 'Votre anniversaire → Aujourd\'hui', 'Début d\'année → Aujourd\'hui'],
    resultsHeader: 'Différence de dates',
    heroSuffix: 'jours',
    weeks: 'semaines', months: 'mois', years: 'années',
    startDay: 'Jour de début', endDay: 'Jour de fin', weekendsLbl: 'Week-ends', workdaysLbl: 'Jours ouvrés',
    errInvalid: '→ Date invalide. Vérifiez votre saisie.',
    errOrder: '→ La date de fin doit être après la date de début.',
    seoH2a: 'Comment compter les jours entre deux dates',
    seoP1: 'Pour compter les jours entre deux dates, soustrayez la date antérieure de la date ultérieure — chaque période de 24 heures compte comme un jour. Le calcul est simple pour de courtes périodes, mais devient vite délicat dès qu\'on franchit des limites de mois ou d\'années. Février a 28 ou 29 jours, les mois vont de 28 à 31 jours, et les années bissextiles ajoutent un jour tous les quatre ans. Ce calculateur gère automatiquement toute cette complexité : entrez vos dates de début et de fin et obtenez instantanément le nombre exact de jours ainsi que l\'équivalent en semaines, mois et années. Il décompose aussi la période en jours de semaine et jours de week-end, utile pour la planification de projets.',
    seoH2b: 'Utilisations courantes du calcul de différence de dates',
    seoP2: 'Compter les jours entre deux dates est l\'une des tâches de calcul de dates les plus courantes. Les chefs de projet l\'utilisent pour calculer des durées et vérifier les écarts entre jalons. Les équipes RH comptent les jours d\'ancienneté pour l\'éligibilité aux avantages sociaux ou les périodes de préavis. Les étudiants comptent les jours jusqu\'aux examens ou aux dates limites de candidature. Les juristes et comptables suivent les délais contractuels et les fenêtres de prescription. Quel que soit votre besoin, ce calculateur vous donne le décompte précis en quelques secondes.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://www.timeanddate.com/date/duration.html', label: 'Time and Date – Calculateur de durée de dates' },
    faqs: [
      { q: 'Combien de jours entre deux dates ?', a: 'Entrez votre date de début et votre date de fin dans les champs ci-dessus et cliquez sur Calculer. Le résultat affiche le nombre exact de jours calendaires entre les deux dates, ainsi que l\'équivalent en semaines, mois et années.' },
      { q: 'Combien de jours entre deux anniversaires ?', a: 'Entrez votre dernier anniversaire comme date de début et le prochain comme date de fin. Pour un comptage récurrent, définissez le début sur l\'anniversaire de cette année et la fin sur celui de l\'année prochaine — la réponse sera toujours 365 (ou 366 les années bissextiles).' },
      { q: 'Quelle est la différence entre les jours ouvrés et les jours calendaires ?', a: 'Les jours calendaires comptent tous les jours y compris les week-ends et jours fériés. Les jours ouvrés ne comptent que du lundi au vendredi. Ce calculateur affiche les deux : le total de jours calendaires et le nombre de jours ouvrés, qui exclut samedis et dimanches. Pour exclure aussi les jours fériés, utilisez un calculateur de jours ouvrés dédié.' },
      { q: 'Combien de jours avant mon échéance ?', a: 'Entrez la date d\'aujourd\'hui comme début et votre date d\'échéance comme fin, puis cliquez sur Calculer. Le résultat vous indique exactement combien de jours il vous reste — en jours calendaires et en jours ouvrés — pour planifier votre agenda avec précision.' },
      { q: 'Le calculateur inclut-il ou exclut-il les dates de début/fin ?', a: 'Le calculateur compte les jours entiers de 24 heures entre les deux dates. Du 1er au 3 janvier = 2 jours. Pour inclure les deux extrémités (comptage inclusif), ajoutez 1 au résultat.' },
      { q: 'Combien de jours entre deux années spécifiques ?', a: 'Entrez le 1er janvier de la première année comme début et le 31 décembre de la dernière comme fin, puis ajoutez 1 pour un compte inclusif. Par exemple, du 1er janvier 2000 au 31 décembre 2024, il y a 9 131 jours (inclusif).' },
      { q: 'Quelle est la plage de dates maximale supportée ?', a: 'Ce calculateur supporte toute date de 1900 à 2100, soit une plage de plus de 73 000 jours. Cela couvre la recherche historique, la planification à long terme et pratiquement tous les cas d\'usage réels.' },
      { q: 'Comment compter uniquement les jours ouvrés ?', a: 'Le champ "Jours ouvrés" dans les résultats exclut les samedis et dimanches. Pour un calculateur excluant aussi les jours fériés, utilisez notre calculateur de jours ouvrés. Notez que les jours fériés varient selon les pays et régions.' },
    ],
    weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  },
  es: {
    title: 'Días entre fechas – Calcular la diferencia | Date.tools',
    metaDesc: 'Calcula el número exacto de días entre dos fechas. También muestra semanas, meses y años. Calculadora de diferencia de fechas gratuita.',
    kicker: 'Días entre fechas',
    headline: 'Días <em>entre</em><br>dos fechas',
    subhead: 'Ingresa una fecha de inicio y una fecha de fin — obtén la diferencia exacta en días, semanas, meses y años.',
    startLabel: 'Fecha de inicio',
    endLabel: 'Fecha de fin',
    todayBtn: 'Hoy',
    calcBtn: '→ Calcular',
    tipText: '"Cada día es una página del libro. ¿Cuántas páginas has escrito entre dos capítulos?"',
    examples: ['1 ene 2000 → Hoy', 'Tu cumpleaños → Hoy', 'Inicio de año → Hoy'],
    resultsHeader: 'Diferencia de fechas',
    heroSuffix: 'días',
    weeks: 'semanas', months: 'meses', years: 'años',
    startDay: 'Día de inicio', endDay: 'Día de fin', weekendsLbl: 'Fines de semana', workdaysLbl: 'Días laborables',
    errInvalid: '→ Fecha no válida. Verifica tu entrada.',
    errOrder: '→ La fecha de fin debe ser posterior a la de inicio.',
    seoH2a: 'Cómo contar días entre dos fechas',
    seoP1: 'Para contar los días entre dos fechas, resta la fecha anterior de la posterior — cada período de 24 horas cuenta como un día. El cálculo es sencillo para períodos cortos, pero se complica al cruzar límites de mes o año. Febrero tiene 28 o 29 días, los meses van de 28 a 31 días, y los años bisiestos añaden un día extra cada cuatro años. Esta calculadora maneja toda esa complejidad automáticamente: ingresa tus fechas de inicio y fin y obtén al instante el número exacto de días junto con el equivalente en semanas, meses y años. También desglosa el período en días laborables y días de fin de semana, útil para la planificación de proyectos.',
    seoH2b: 'Usos comunes del cálculo de diferencia de fechas',
    seoP2: 'Contar días entre fechas es una de las tareas de cálculo de fechas más comunes. Los gestores de proyectos la usan para calcular duraciones y verificar brechas entre hitos. Los equipos de RRHH cuentan días de empleo para la elegibilidad de beneficios o períodos de preaviso. Los estudiantes cuentan días hasta exámenes o fechas límite de solicitud. Los abogados y contadores rastrean plazos contractuales y ventanas de prescripción. Viajeros calculan cuántos días estarán en el extranjero para visas o residencia fiscal. Sea cual sea tu motivo, esta calculadora te da el conteo preciso en segundos.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://www.timeanddate.com/date/duration.html', label: 'Time and Date – Calculadora de duración de fechas' },
    faqs: [
      { q: '¿Cuántos días hay entre dos fechas?', a: 'Ingresa tu fecha de inicio y fecha de fin en los campos de arriba y haz clic en Calcular. El resultado muestra el número exacto de días calendario entre las dos fechas, junto con el equivalente en semanas, meses y años.' },
      { q: '¿Cuántos días hay entre cumpleaños?', a: 'Ingresa tu cumpleaños más reciente como fecha de inicio y el próximo como fecha de fin. Para un conteo recurrente, establece el inicio en el cumpleaños de este año y el fin en el del próximo año — la respuesta siempre será 365 (o 366 en año bisiesto).' },
      { q: '¿Cuál es la diferencia entre días laborables y días calendario?', a: 'Los días calendario cuentan todos los días incluyendo fines de semana y festivos. Los días laborables cuentan solo de lunes a viernes. Esta calculadora muestra ambos: el total de días calendario y el conteo de días laborables, que excluye sábados y domingos. Para excluir también los festivos, necesitarías una calculadora de días hábiles dedicada.' },
      { q: '¿Cuántos días faltan para mi plazo?', a: 'Ingresa la fecha de hoy como inicio y tu fecha límite como fin, luego haz clic en Calcular. El resultado te indica exactamente cuántos días te quedan — tanto en días calendario totales como en días laborables — para que puedas planificar tu agenda con precisión.' },
      { q: '¿La calculadora incluye o excluye las fechas de inicio/fin?', a: 'La calculadora cuenta días completos de 24 horas entre las dos fechas. Del 1 al 3 de enero = 2 días. Para incluir ambos extremos (conteo inclusivo), suma 1 al resultado.' },
      { q: '¿Cuántos días hay entre dos años específicos?', a: 'Ingresa el 1 de enero del primer año como inicio y el 31 de diciembre del último como fin, luego suma 1 para un conteo inclusivo. Por ejemplo, del 1 de enero de 2000 al 31 de diciembre de 2024 hay 9.131 días (inclusivo).' },
      { q: '¿Cuál es el rango de fechas máximo soportado?', a: 'Esta calculadora soporta cualquier fecha de 1900 a 2100, con un rango de más de 73.000 días. Eso cubre investigación histórica, planificación a largo plazo y prácticamente cualquier caso de uso real.' },
      { q: '¿Cómo cuento solo los días laborables?', a: 'El campo "Días laborables" en los resultados excluye sábados y domingos. Para una calculadora que también excluya festivos, usa nuestra calculadora de días hábiles. Ten en cuenta que los festivos varían según el país y la región.' },
    ],
    weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
  },
};

module.exports = {
  pages: [
    { id: 'days-between-dates', slugs: { en: 'days-between-dates', fr: 'fr/jours-entre-deux-dates', es: 'es/dias-entre-fechas' } },
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
      <div class="field-label">${t.startLabel}</div>
      <div class="date-row">
        <input type="number" id="d1" placeholder="DD" min="1" max="31" inputmode="numeric" oninput="clamp(this,1,31)">
        <span>/</span>
        <input type="number" id="m1" placeholder="MM" min="1" max="12" inputmode="numeric" oninput="clamp(this,1,12)">
        <span>/</span>
        <input type="number" id="y1" placeholder="YYYY" min="1900" max="2100" inputmode="numeric" oninput="clamp(this,1900,2100)">
      </div>
      <div class="field-label" style="margin-top:1.5rem">${t.endLabel} <button type="button" onclick="setToday()" style="background:none;border:none;font-family:'Space Mono',monospace;font-size:.6rem;color:var(--accent);cursor:pointer;letter-spacing:.05em;text-transform:uppercase;padding:0 .4rem">${t.todayBtn}</button></div>
      <div class="date-row">
        <input type="number" id="d2" placeholder="DD" min="1" max="31" inputmode="numeric" oninput="clamp(this,1,31)">
        <span>/</span>
        <input type="number" id="m2" placeholder="MM" min="1" max="12" inputmode="numeric" oninput="clamp(this,1,12)">
        <span>/</span>
        <input type="number" id="y2" placeholder="YYYY" min="1900" max="2100" inputmode="numeric" oninput="clamp(this,1900,2100)">
      </div>
      <div class="error-line" id="errorLine"></div>
      <button class="calc-btn" onclick="calculate()">${t.calcBtn}</button>
    </div>
    <div class="form-col">
      <p class="tip-text">${t.tipText}</p>
      <ul class="example-list">
        ${t.examples.map((ex, i) => {
          const args = [[[2000,1,1],[0,0,0]], [[1990,6,15],[0,0,0]], [[0,0,1],[0,0,0]]];
          return `<li onclick="fillExample(${i})">${ex} →</li>`;
        }).join('\n        ')}
      </ul>
    </div>
  </div>`;

    const resultsSection = `  <div class="results-section" id="results">
    <div class="results-header">${t.resultsHeader}</div>
    <div class="age-display">
      <span class="age-number" id="heroDays">—</span>
      <span class="age-suffix">${t.heroSuffix}</span>
    </div>
    <div class="stats-strip cols-3">
      <div class="stat-item"><div class="stat-num" id="statWeeks">—</div><div class="stat-lbl">${t.weeks}</div></div>
      <div class="stat-item"><div class="stat-num" id="statMonths">—</div><div class="stat-lbl">${t.months}</div></div>
      <div class="stat-item"><div class="stat-num" id="statYears">—</div><div class="stat-lbl">${t.years}</div></div>
    </div>
    <div class="facts-row">
      <div class="fact-item"><div class="fact-key">${t.startDay}</div><div class="fact-val" id="ffStart">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.endDay}</div><div class="fact-val" id="ffEnd">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.weekendsLbl}</div><div class="fact-val" id="ffWeekends">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.workdaysLbl}</div><div class="fact-val" id="ffWorkdays">—</div></div>
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

    const data = JSON.stringify({ errInvalid: t.errInvalid, errOrder: t.errOrder, weekDays: t.weekDays });

    const script = `
var D = ${data};
function fmt(n){return n.toLocaleString();}

function setToday(){
  var now=new Date();
  document.getElementById('d2').value=now.getDate();
  document.getElementById('m2').value=now.getMonth()+1;
  document.getElementById('y2').value=now.getFullYear();
}

function fillExample(idx){
  var now=new Date();
  if(idx===0){
    document.getElementById('d1').value=1; document.getElementById('m1').value=1; document.getElementById('y1').value=2000;
  } else if(idx===1){
    document.getElementById('d1').value=15; document.getElementById('m1').value=6; document.getElementById('y1').value=1990;
  } else {
    document.getElementById('d1').value=1; document.getElementById('m1').value=1; document.getElementById('y1').value=now.getFullYear();
  }
  setToday(); calculate();
}

function parseDate(d,m,y){
  if(!d||!m||!y) return null;
  var dt=new Date(y,m-1,d);
  return (dt.getDate()===d)?dt:null;
}

function calculate(){
  var d1=parseInt(document.getElementById('d1').value);
  var m1=parseInt(document.getElementById('m1').value);
  var y1=parseInt(document.getElementById('y1').value);
  var d2=parseInt(document.getElementById('d2').value);
  var m2=parseInt(document.getElementById('m2').value);
  var y2=parseInt(document.getElementById('y2').value);
  var err=document.getElementById('errorLine');
  var res=document.getElementById('results');
  err.classList.remove('show'); res.classList.remove('show');

  var date1=parseDate(d1,m1,y1);
  var date2=parseDate(d2,m2,y2);
  if(!date1||!date2){err.textContent=D.errInvalid; err.classList.add('show'); return;}
  if(date2<date1){err.textContent=D.errOrder; err.classList.add('show'); return;}

  var totalDays=Math.round((date2-date1)/86400000);
  var totalWeeks=Math.floor(totalDays/7);

  // months diff
  var mDiff=(date2.getFullYear()-date1.getFullYear())*12+(date2.getMonth()-date1.getMonth());
  if(date2.getDate()<date1.getDate()) mDiff--;
  var yDiff=Math.floor(mDiff/12);

  // weekends & workdays
  var weekends=0, workdays=0;
  var cur=new Date(date1);
  while(cur<=date2){
    var day=cur.getDay();
    if(day===0||day===6) weekends++; else workdays++;
    cur.setDate(cur.getDate()+1);
  }

  document.getElementById('heroDays').textContent=fmt(totalDays);
  document.getElementById('statWeeks').textContent=fmt(totalWeeks);
  document.getElementById('statMonths').textContent=fmt(mDiff);
  document.getElementById('statYears').textContent=fmt(yDiff);
  document.getElementById('ffStart').textContent=D.weekDays[date1.getDay()];
  document.getElementById('ffEnd').textContent=D.weekDays[date2.getDay()];
  document.getElementById('ffWeekends').textContent=fmt(weekends);
  document.getElementById('ffWorkdays').textContent=fmt(workdays);
  res.classList.add('show');
  res.scrollIntoView({behavior:'smooth',block:'start'});
}

document.addEventListener('keydown',function(e){if(e.key==='Enter') calculate();});
// Pre-fill end date with today
setToday();
`;

    return { title: t.title, metaDesc: t.metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs: t.faqs, source: t.source };
  },
};
