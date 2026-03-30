// Business Days Calculator

const T = {
  en: {
    title: 'Business Days Calculator – Count Working Days | DateCalc.app',
    metaDesc: 'Calculate the number of business days between two dates, or add business days to a date. Excludes weekends.',
    kicker: 'Business Days Calculator',
    headline: 'Count<br><em>working</em> days',
    subhead: 'Calculate business days between dates, or find a date X working days from now.',
    mode1Label: 'Count between two dates',
    mode2Label: 'Add business days to a date',
    startLabel: 'Start date',
    endLabel: 'End date',
    todayBtn: 'Today',
    addLabel: 'Business days to add',
    calcBtn: '→ Calculate',
    tipText: '"Time is money. Count it wisely."',
    examples: ['Count business days this month', 'Add 10 business days to today', '30 working days from today'],
    resultsHeader1: 'Business days',
    resultsHeader2: 'Result date',
    businessDaysLbl: 'business days',
    weekendsLbl: 'weekends',
    totalDaysLbl: 'total days',
    weeksLbl: 'weeks',
    weekdayLbl: 'Day of week',
    startDayLbl: 'Start day',
    endDayLbl: 'End day',
    errInvalid: '→ Invalid date. Please check your input.',
    errOrder: '→ End date must be after start date.',
    errAmount: '→ Please enter a valid number of days.',
    seoH2a: 'What are business days?',
    seoP1: 'Business days — also called working days or weekdays — are Monday through Friday, excluding Saturday and Sunday. They are the standard unit of time used in commerce, banking, legal proceedings, and government administration. When a contract says "payment within 5 business days," it means 5 Monday-through-Friday days, not 5 calendar days. Public and federal holidays are not automatically excluded by this calculator because they vary by country, region, state, and year. For example, the U.S. has 11 federal holidays, but individual states may observe additional ones. The U.S. Department of Labor maintains the official list of federal holidays. For a simple Monday-through-Friday count without holidays, this calculator is perfectly accurate. If you need to exclude specific holidays, subtract them manually from the result.',
    seoH2b: 'How to calculate business days between two dates',
    seoP2: 'To count business days between two dates: list every date in the range from start to end inclusive, then count only those that fall on Monday through Friday. This calculator performs that count automatically and also shows the total calendar days and number of weekend days for context. The "Add business days" mode works in reverse: starting from a date, it advances one weekday at a time until the target count is reached, automatically skipping all Saturdays and Sundays. This is the correct method used in legal and financial contexts when a deadline is defined as "N business days from today."',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://www.dol.gov/general/aboutdol/majorlaws', label: 'U.S. Department of Labor – Federal Holidays' },
    faqs: [
      { q: 'What is a business day?', a: 'A business day is any day that is not a Saturday, Sunday, or public holiday. In most countries this means Monday through Friday. Banks, courts, and government agencies typically operate on business days only. When contracts, regulations, or deadlines refer to "business days," they mean weekdays excluding weekends — and usually excluding official public holidays as well.' },
      { q: 'How many business days are in a month?', a: 'A typical month contains 20–23 business days, depending on the month and year. February in a common year has 20 business days (4 full weeks). Months with 31 days can have up to 23. To get the exact count for any specific month, enter the first and last day of that month in this calculator.' },
      { q: 'How do I add 10 business days to today?', a: 'Select "Add business days to a date," enter today\'s date as the start, enter 10 in the business days field, and click Calculate. The result shows the exact date 10 working days from now, skipping all Saturdays and Sundays. For example, starting on a Monday, 10 business days later is the Monday of the third week (2 calendar weeks later).' },
      { q: 'How do I calculate business days excluding holidays?', a: 'This calculator excludes weekends automatically. To exclude public holidays, first get the business day count, then subtract the number of official holidays that fall within your date range. Most countries have 8–13 public holidays per year. The U.S. has 11 federal holidays; check the Department of Labor website for the current list.' },
      { q: 'What is 5 business days from today?', a: 'Five business days from any Monday is the following Monday. From a Tuesday, it is the following Tuesday, and so on — because 5 weekdays is exactly one working week. However, if the start date is mid-week, the end date will land one week later on the same day. Use the "Add business days" mode and enter 5 to get the exact date.' },
      { q: 'How many calendar days are 30 business days?', a: '30 business days is always 6 calendar weeks (42 days) if there are no holidays, because 5 business days per week × 6 weeks = 30. However, it can be 43–46 calendar days if the start or end of the period falls mid-week and spans additional weekend days. Use the calculator to get the precise calendar date.' },
      { q: 'Does this calculator exclude public holidays?', a: 'No — public holidays vary by country, region, and year. This calculator excludes only weekends (Saturday and Sunday). Subtract the number of relevant holidays from the result manually.' },
      { q: 'What if I need to exclude specific holidays?', a: 'After getting the result, subtract the number of public holidays that fall within the range. Most countries have 8–12 public holidays per year.' },
    ],
    weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  },
  fr: {
    title: 'Calculateur de jours ouvrables – Compter les jours travaillés | DateCalc.app',
    metaDesc: 'Calculez le nombre de jours ouvrables entre deux dates, ou ajoutez des jours ouvrables à une date. Exclut les week-ends.',
    kicker: 'Calculateur de jours ouvrables',
    headline: 'Compter<br>les jours <em>ouvrables</em>',
    subhead: 'Calculez les jours ouvrables entre deux dates, ou trouvez une date X jours ouvrables à partir de maintenant.',
    mode1Label: 'Compter entre deux dates',
    mode2Label: 'Ajouter des jours ouvrables à une date',
    startLabel: 'Date de début',
    endLabel: 'Date de fin',
    todayBtn: 'Aujourd\'hui',
    addLabel: 'Jours ouvrables à ajouter',
    calcBtn: '→ Calculer',
    tipText: '"Le temps c\'est de l\'argent. Comptez-le judicieusement."',
    examples: ['Jours ouvrables ce mois-ci', 'Ajouter 10 jours ouvrables à aujourd\'hui', '30 jours ouvrables à partir d\'aujourd\'hui'],
    resultsHeader1: 'Jours ouvrables',
    resultsHeader2: 'Date résultante',
    businessDaysLbl: 'jours ouvrables',
    weekendsLbl: 'week-ends',
    totalDaysLbl: 'jours au total',
    weeksLbl: 'semaines',
    weekdayLbl: 'Jour de la semaine',
    startDayLbl: 'Jour de début',
    endDayLbl: 'Jour de fin',
    errInvalid: '→ Date invalide. Vérifiez votre saisie.',
    errOrder: '→ La date de fin doit être après la date de début.',
    errAmount: '→ Veuillez entrer un nombre de jours valide.',
    seoH2a: 'Que sont les jours ouvrables ?',
    seoP1: 'Les jours ouvrables — aussi appelés jours travaillés ou jours de semaine — sont du lundi au vendredi, excluant le samedi et le dimanche. Ils constituent l\'unité de temps standard utilisée dans le commerce, la banque, les procédures juridiques et l\'administration gouvernementale. Lorsqu\'un contrat stipule "paiement dans les 5 jours ouvrables", cela signifie 5 jours du lundi au vendredi, pas 5 jours calendaires. Les jours fériés ne sont pas automatiquement exclus par ce calculateur car ils varient selon le pays, la région et l\'année. Pour un simple décompte lundi-vendredi sans jours fériés, ce calculateur est parfaitement précis. Pour exclure des jours fériés spécifiques, soustrayez-les manuellement du résultat.',
    seoH2b: 'Comment calculer les jours ouvrables entre deux dates',
    seoP2: 'Pour compter les jours ouvrables entre deux dates : listez chaque date de la plage du début à la fin inclus, puis ne comptez que celles qui tombent du lundi au vendredi. Ce calculateur effectue ce décompte automatiquement et affiche également le total de jours calendaires et le nombre de jours de week-end. Le mode "Ajouter des jours ouvrables" fonctionne en sens inverse : à partir d\'une date, il avance d\'un jour ouvrable à la fois jusqu\'à atteindre le nombre cible, en sautant automatiquement tous les samedis et dimanches.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://www.dol.gov/general/aboutdol/majorlaws', label: 'Département du Travail des États-Unis – Jours fériés fédéraux' },
    faqs: [
      { q: 'Qu\'est-ce qu\'un jour ouvrable ?', a: 'Un jour ouvrable est tout jour qui n\'est pas un samedi, dimanche ou jour férié. Dans la plupart des pays, cela signifie du lundi au vendredi. Les banques, tribunaux et agences gouvernementales opèrent généralement uniquement les jours ouvrables. Lorsque les contrats ou réglementations mentionnent des "jours ouvrables", ils excluent les week-ends et généralement aussi les jours fériés officiels.' },
      { q: 'Combien de jours ouvrables y a-t-il dans un mois ?', a: 'Un mois typique compte 20 à 23 jours ouvrables, selon le mois et l\'année. Février en année normale compte 20 jours ouvrables (4 semaines complètes). Les mois de 31 jours peuvent en avoir jusqu\'à 23. Pour obtenir le décompte exact d\'un mois spécifique, entrez le premier et le dernier jour de ce mois dans ce calculateur.' },
      { q: 'Comment ajouter 10 jours ouvrables à aujourd\'hui ?', a: 'Sélectionnez "Ajouter des jours ouvrables", entrez la date d\'aujourd\'hui comme début, entrez 10 dans le champ des jours ouvrables et cliquez sur Calculer. Le résultat affiche la date exacte 10 jours ouvrables à partir de maintenant, en sautant tous les samedis et dimanches.' },
      { q: 'Comment calculer les jours ouvrables en excluant les jours fériés ?', a: 'Ce calculateur exclut automatiquement les week-ends. Pour exclure les jours fériés, obtenez d\'abord le décompte des jours ouvrables, puis soustrayez le nombre de jours fériés officiels qui tombent dans votre plage de dates. La plupart des pays ont 8 à 13 jours fériés par an.' },
      { q: 'Quelle est la date dans 5 jours ouvrables ?', a: 'Cinq jours ouvrables à partir d\'un lundi correspondent au lundi suivant. D\'un mardi, au mardi suivant — car 5 jours de semaine équivalent exactement à une semaine de travail. Utilisez le mode "Ajouter des jours ouvrables" et entrez 5 pour obtenir la date exacte.' },
      { q: 'Combien de jours calendaires font 30 jours ouvrables ?', a: '30 jours ouvrables correspondent toujours à 6 semaines calendaires (42 jours) s\'il n\'y a pas de jours fériés, car 5 jours ouvrables × 6 semaines = 30. Cela peut représenter 43 à 46 jours calendaires selon les week-ends qui tombent en début ou fin de période. Utilisez le calculateur pour obtenir la date calendaire précise.' },
      { q: 'Ce calculateur exclut-il les jours fériés ?', a: 'Non — les jours fériés varient selon le pays, la région et l\'année. Ce calculateur exclut uniquement les week-ends (samedi et dimanche). Soustrayez manuellement le nombre de jours fériés pertinents du résultat.' },
      { q: 'Comment exclure des jours fériés spécifiques ?', a: 'Après avoir obtenu le résultat, soustrayez le nombre de jours fériés qui tombent dans la plage. La plupart des pays ont 8 à 12 jours fériés par an.' },
    ],
    weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    months: ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
  },
  es: {
    title: 'Calculadora de días hábiles – Contar días laborables | DateCalc.app',
    metaDesc: 'Calcula el número de días hábiles entre dos fechas, o añade días hábiles a una fecha. Excluye los fines de semana.',
    kicker: 'Calculadora de días hábiles',
    headline: 'Contar<br>días <em>hábiles</em>',
    subhead: 'Calcula los días hábiles entre fechas, o encuentra una fecha X días laborables a partir de ahora.',
    mode1Label: 'Contar entre dos fechas',
    mode2Label: 'Añadir días hábiles a una fecha',
    startLabel: 'Fecha de inicio',
    endLabel: 'Fecha de fin',
    todayBtn: 'Hoy',
    addLabel: 'Días hábiles a añadir',
    calcBtn: '→ Calcular',
    tipText: '"El tiempo es dinero. Cuéntalo sabiamente."',
    examples: ['Días hábiles este mes', 'Añadir 10 días hábiles a hoy', '30 días laborables desde hoy'],
    resultsHeader1: 'Días hábiles',
    resultsHeader2: 'Fecha resultado',
    businessDaysLbl: 'días hábiles',
    weekendsLbl: 'fines de semana',
    totalDaysLbl: 'días totales',
    weeksLbl: 'semanas',
    weekdayLbl: 'Día de la semana',
    startDayLbl: 'Día de inicio',
    endDayLbl: 'Día de fin',
    errInvalid: '→ Fecha no válida. Verifica tu entrada.',
    errOrder: '→ La fecha de fin debe ser posterior a la de inicio.',
    errAmount: '→ Por favor ingresa un número de días válido.',
    seoH2a: '¿Qué son los días hábiles?',
    seoP1: 'Los días hábiles — también llamados días laborables o días de semana — son de lunes a viernes, excluyendo el sábado y el domingo. Son la unidad de tiempo estándar utilizada en el comercio, la banca, los procedimientos legales y la administración gubernamental. Cuando un contrato dice "pago en 5 días hábiles", significa 5 días de lunes a viernes, no 5 días calendario. Los días festivos no son excluidos automáticamente por esta calculadora porque varían por país, región y año. Para un simple conteo de lunes a viernes sin festivos, esta calculadora es perfectamente precisa. Para excluir festivos específicos, réstalos manualmente del resultado.',
    seoH2b: 'Cómo calcular los días hábiles entre dos fechas',
    seoP2: 'Para contar días hábiles entre dos fechas: lista cada fecha del rango desde el inicio hasta el fin inclusive, luego cuenta solo las que caen de lunes a viernes. Esta calculadora realiza ese conteo automáticamente y también muestra el total de días calendario y el número de días de fin de semana. El modo "Añadir días hábiles" funciona al revés: desde una fecha, avanza un día laborable a la vez hasta alcanzar el conteo objetivo, saltando automáticamente todos los sábados y domingos.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://www.dol.gov/general/aboutdol/majorlaws', label: 'Departamento de Trabajo de EE. UU. – Días festivos federales' },
    faqs: [
      { q: '¿Qué es un día hábil?', a: 'Un día hábil es cualquier día que no sea sábado, domingo o día festivo. En la mayoría de los países esto significa de lunes a viernes. Los bancos, tribunales y agencias gubernamentales generalmente operan solo en días hábiles. Cuando los contratos o regulaciones mencionan "días hábiles", excluyen los fines de semana y generalmente también los días festivos oficiales.' },
      { q: '¿Cuántos días hábiles hay en un mes?', a: 'Un mes típico tiene 20–23 días hábiles, dependiendo del mes y el año. Febrero en año común tiene 20 días hábiles (4 semanas completas). Los meses de 31 días pueden tener hasta 23. Para obtener el conteo exacto de un mes específico, ingresa el primer y último día de ese mes en esta calculadora.' },
      { q: '¿Cómo añado 10 días hábiles a hoy?', a: 'Selecciona "Añadir días hábiles", ingresa la fecha de hoy como inicio, ingresa 10 en el campo de días hábiles y haz clic en Calcular. El resultado muestra la fecha exacta 10 días laborables a partir de ahora, saltando todos los sábados y domingos.' },
      { q: '¿Cómo calculo los días hábiles excluyendo días festivos?', a: 'Esta calculadora excluye los fines de semana automáticamente. Para excluir festivos, primero obtén el conteo de días hábiles, luego resta el número de festivos oficiales que caen en tu rango de fechas. La mayoría de los países tienen 8–13 días festivos al año.' },
      { q: '¿Cuál es la fecha en 5 días hábiles?', a: 'Cinco días hábiles desde cualquier lunes corresponden al lunes siguiente. Desde un martes, al martes siguiente — porque 5 días laborables equivalen exactamente a una semana de trabajo. Usa el modo "Añadir días hábiles" e ingresa 5 para obtener la fecha exacta.' },
      { q: '¿Cuántos días calendario son 30 días hábiles?', a: '30 días hábiles siempre son 6 semanas calendario (42 días) si no hay festivos, ya que 5 días hábiles × 6 semanas = 30. Puede ser 43–46 días calendario según los fines de semana que caigan al inicio o final del período. Usa la calculadora para obtener la fecha calendario precisa.' },
      { q: '¿Esta calculadora excluye los días festivos?', a: 'No — los días festivos varían por país, región y año. Esta calculadora excluye solo los fines de semana (sábado y domingo). Resta manualmente el número de días festivos relevantes del resultado.' },
      { q: '¿Qué pasa si necesito excluir días festivos específicos?', a: 'Después de obtener el resultado, resta el número de días festivos que caen dentro del rango. La mayoría de los países tienen 8–12 días festivos por año.' },
    ],
    weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
    months: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
  },
};

module.exports = {
  pages: [
    { id: 'business-days-calculator', slugs: { en: 'business-days-calculator', fr: 'fr/calculateur-jours-ouvrables', es: 'es/calculadora-dias-habiles' } },
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
      <div class="mode-row" style="display:flex;gap:1.2rem;margin-bottom:1.4rem;flex-wrap:wrap;">
        <label style="display:flex;align-items:center;gap:.4rem;cursor:pointer;font-size:.85rem;letter-spacing:.04em;text-transform:uppercase;">
          <input type="radio" name="bdMode" id="mode1" value="1" checked onchange="switchMode(1)" style="accent-color:var(--accent);">
          ${t.mode1Label}
        </label>
        <label style="display:flex;align-items:center;gap:.4rem;cursor:pointer;font-size:.85rem;letter-spacing:.04em;text-transform:uppercase;">
          <input type="radio" name="bdMode" id="mode2" value="2" onchange="switchMode(2)" style="accent-color:var(--accent);">
          ${t.mode2Label}
        </label>
      </div>
      <div class="field-label">${t.startLabel} <button type="button" onclick="setToday('start')" style="background:none;border:none;font-family:'Space Mono',monospace;font-size:.6rem;color:var(--accent);cursor:pointer;letter-spacing:.05em;text-transform:uppercase;padding:0 .4rem">${t.todayBtn}</button></div>
      <div class="date-row">
        <input type="number" id="d1" placeholder="DD" min="1" max="31" inputmode="numeric" oninput="clamp(this,1,31)">
        <span>/</span>
        <input type="number" id="m1" placeholder="MM" min="1" max="12" inputmode="numeric" oninput="clamp(this,1,12)">
        <span>/</span>
        <input type="number" id="y1" placeholder="YYYY" min="1900" max="2100" inputmode="numeric" oninput="clamp(this,1900,2100)">
      </div>
      <div id="endDateBlock">
        <div class="field-label" style="margin-top:1.5rem">${t.endLabel} <button type="button" onclick="setToday('end')" style="background:none;border:none;font-family:'Space Mono',monospace;font-size:.6rem;color:var(--accent);cursor:pointer;letter-spacing:.05em;text-transform:uppercase;padding:0 .4rem">${t.todayBtn}</button></div>
        <div class="date-row">
          <input type="number" id="d2" placeholder="DD" min="1" max="31" inputmode="numeric" oninput="clamp(this,1,31)">
          <span>/</span>
          <input type="number" id="m2" placeholder="MM" min="1" max="12" inputmode="numeric" oninput="clamp(this,1,12)">
          <span>/</span>
          <input type="number" id="y2" placeholder="YYYY" min="1900" max="2100" inputmode="numeric" oninput="clamp(this,1900,2100)">
        </div>
      </div>
      <div id="addDaysBlock" style="display:none">
        <div class="field-label" style="margin-top:1.5rem">${t.addLabel}</div>
        <div class="op-row">
          <input type="number" id="addAmount" placeholder="0" min="1" max="9999" inputmode="numeric" style="width:5ch" oninput="clamp(this,1,9999)">
        </div>
      </div>
      <div class="error-line" id="errorLine"></div>
      <button class="calc-btn" onclick="calculate()">${t.calcBtn}</button>
    </div>
    <div class="form-col">
      <p class="tip-text">${t.tipText}</p>
      <ul class="example-list">
        ${t.examples.map((ex, i) => `<li onclick="fillExample(${i})">${ex} →</li>`).join('\n        ')}
      </ul>
    </div>
  </div>`;

    const resultsSection = `  <div class="results-section" id="results">
    <div class="results-header" id="resultsHeader">${t.resultsHeader1}</div>
    <div id="heroMode1">
      <div class="age-display">
        <span class="age-number" id="heroBizDays">—</span>
        <span class="age-suffix">${t.businessDaysLbl}</span>
      </div>
      <div class="stats-strip cols-3">
        <div class="stat-item"><div class="stat-num" id="statWeekends">—</div><div class="stat-lbl">${t.weekendsLbl}</div></div>
        <div class="stat-item"><div class="stat-num" id="statTotalDays">—</div><div class="stat-lbl">${t.totalDaysLbl}</div></div>
        <div class="stat-item"><div class="stat-num" id="statWeeks">—</div><div class="stat-lbl">${t.weeksLbl}</div></div>
      </div>
      <div class="facts-row">
        <div class="fact-item"><div class="fact-key">${t.startDayLbl}</div><div class="fact-val" id="ffStartDay">—</div></div>
        <div class="fact-item"><div class="fact-key">${t.endDayLbl}</div><div class="fact-val" id="ffEndDay">—</div></div>
      </div>
    </div>
    <div id="heroMode2" style="display:none">
      <div class="result-date" id="resultDate">—</div>
      <div class="result-date-sub" id="resultSub"></div>
      <div class="facts-row">
        <div class="fact-item"><div class="fact-key">${t.weekdayLbl}</div><div class="fact-val" id="ffResultDay">—</div></div>
        <div class="fact-item"><div class="fact-key">${t.startDayLbl}</div><div class="fact-val" id="ffResultStart">—</div></div>
        <div class="fact-item"><div class="fact-key">${t.totalDaysLbl}</div><div class="fact-val" id="ffResultTotal">—</div></div>
        <div class="fact-item"><div class="fact-key">${t.weeksLbl}</div><div class="fact-val" id="ffResultWeeks">—</div></div>
      </div>
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

    const data = JSON.stringify({
      errInvalid: t.errInvalid,
      errOrder: t.errOrder,
      errAmount: t.errAmount,
      resultsHeader1: t.resultsHeader1,
      resultsHeader2: t.resultsHeader2,
      weekDays: t.weekDays,
      months: t.months,
      businessDaysLbl: t.businessDaysLbl,
    });

    const script = `
var D = ${data};
var _currentMode = 1;
function fmt(n){return n.toLocaleString();}

function switchMode(mode){
  _currentMode = mode;
  document.getElementById('endDateBlock').style.display = mode===1?'':'none';
  document.getElementById('addDaysBlock').style.display = mode===2?'':'none';
  document.getElementById('results').classList.remove('show');
}

function setToday(which){
  var now = new Date();
  var suffix = which==='start'?'1':'2';
  document.getElementById('d'+suffix).value = now.getDate();
  document.getElementById('m'+suffix).value = now.getMonth()+1;
  document.getElementById('y'+suffix).value = now.getFullYear();
}

function parseDate(d,m,y){
  if(!d||!m||!y) return null;
  var dt = new Date(y,m-1,d);
  return (dt.getDate()===d)?dt:null;
}

function countBusiness(d1, d2){
  var count = 0, cur = new Date(d1);
  while(cur <= d2){
    var day = cur.getDay();
    if(day !== 0 && day !== 6) count++;
    cur.setDate(cur.getDate()+1);
  }
  return count;
}

function addBusinessDays(date, n){
  var result = new Date(date);
  var added = 0;
  while(added < n){
    result.setDate(result.getDate()+1);
    var day = result.getDay();
    if(day !== 0 && day !== 6) added++;
  }
  return result;
}

function fillExample(idx){
  var now = new Date();
  if(idx===0){
    // Count business days this month
    document.getElementById('mode1').checked = true; switchMode(1);
    document.getElementById('d1').value=1;
    document.getElementById('m1').value=now.getMonth()+1;
    document.getElementById('y1').value=now.getFullYear();
    var lastDay = new Date(now.getFullYear(), now.getMonth()+1, 0);
    document.getElementById('d2').value=lastDay.getDate();
    document.getElementById('m2').value=now.getMonth()+1;
    document.getElementById('y2').value=now.getFullYear();
  } else if(idx===1){
    // Add 10 business days to today
    document.getElementById('mode2').checked = true; switchMode(2);
    document.getElementById('d1').value=now.getDate();
    document.getElementById('m1').value=now.getMonth()+1;
    document.getElementById('y1').value=now.getFullYear();
    document.getElementById('addAmount').value=10;
  } else {
    // 30 working days from today
    document.getElementById('mode2').checked = true; switchMode(2);
    document.getElementById('d1').value=now.getDate();
    document.getElementById('m1').value=now.getMonth()+1;
    document.getElementById('y1').value=now.getFullYear();
    document.getElementById('addAmount').value=30;
  }
  calculate();
}

function calculate(){
  var d1=parseInt(document.getElementById('d1').value);
  var m1=parseInt(document.getElementById('m1').value);
  var y1=parseInt(document.getElementById('y1').value);
  var err=document.getElementById('errorLine');
  var res=document.getElementById('results');
  err.classList.remove('show'); res.classList.remove('show');

  var date1=parseDate(d1,m1,y1);
  if(!date1){err.textContent=D.errInvalid; err.classList.add('show'); return;}

  if(_currentMode===1){
    var d2=parseInt(document.getElementById('d2').value);
    var m2=parseInt(document.getElementById('m2').value);
    var y2=parseInt(document.getElementById('y2').value);
    var date2=parseDate(d2,m2,y2);
    if(!date2){err.textContent=D.errInvalid; err.classList.add('show'); return;}
    if(date2<date1){err.textContent=D.errOrder; err.classList.add('show'); return;}

    var bizDays=countBusiness(date1,date2);
    var totalDays=Math.round((date2-date1)/86400000)+1;
    var weekends=totalDays-bizDays;
    var weeks=Math.floor(totalDays/7);

    document.getElementById('resultsHeader').textContent=D.resultsHeader1;
    document.getElementById('heroMode1').style.display='';
    document.getElementById('heroMode2').style.display='none';
    document.getElementById('heroBizDays').textContent=fmt(bizDays);
    document.getElementById('statWeekends').textContent=fmt(weekends);
    document.getElementById('statTotalDays').textContent=fmt(totalDays);
    document.getElementById('statWeeks').textContent=fmt(weeks);
    document.getElementById('ffStartDay').textContent=D.weekDays[date1.getDay()];
    document.getElementById('ffEndDay').textContent=D.weekDays[date2.getDay()];
  } else {
    var amount=parseInt(document.getElementById('addAmount').value);
    if(isNaN(amount)||amount<1){err.textContent=D.errAmount; err.classList.add('show'); return;}

    var result=addBusinessDays(date1,amount);
    var totalCalDays=Math.round((result-date1)/86400000);
    var calWeeks=Math.floor(totalCalDays/7);
    var dateStr=result.getDate()+' '+D.months[result.getMonth()]+' '+result.getFullYear();

    document.getElementById('resultsHeader').textContent=D.resultsHeader2;
    document.getElementById('heroMode1').style.display='none';
    document.getElementById('heroMode2').style.display='';
    document.getElementById('resultDate').textContent=dateStr;
    document.getElementById('resultSub').textContent='+ '+amount+' '+D.businessDaysLbl;
    document.getElementById('ffResultDay').textContent=D.weekDays[result.getDay()];
    document.getElementById('ffResultStart').textContent=D.weekDays[date1.getDay()];
    document.getElementById('ffResultTotal').textContent=fmt(totalCalDays);
    document.getElementById('ffResultWeeks').textContent=fmt(calWeeks);
  }

  res.classList.add('show');
  res.scrollIntoView({behavior:'smooth',block:'start'});
}

// Pre-fill start with today
(function(){
  var now = new Date();
  document.getElementById('d1').value=now.getDate();
  document.getElementById('m1').value=now.getMonth()+1;
  document.getElementById('y1').value=now.getFullYear();
})();

document.addEventListener('keydown',function(e){if(e.key==='Enter') calculate();});
`;

    return { title: t.title, metaDesc: t.metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs: t.faqs, source: t.source };
  },
};
