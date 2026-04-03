// Date Calculator (add/subtract from a date)

const T = {
  en: {
    title: 'Date Calculator – Add or Subtract Days from a Date | DateCalc.app',
    metaDesc: 'Add or subtract days, weeks, months, or years from any date. Find out what date it will be in X days. Free online date calculator.',
    kicker: 'Date Calculator',
    headline: 'What <em>date</em><br>will it be?',
    subhead: 'Add or subtract days, weeks, months, or years from any start date.',
    dateLabel: 'Start date',
    opLabel: 'Operation',
    add: 'Add', sub: 'Subtract',
    unitDays: 'days', unitWeeks: 'weeks', unitMonths: 'months', unitYears: 'years',
    calcBtn: '→ Calculate',
    tipText: '"Time flows in one direction, but curiosity lets us look forward and back."',
    examples: ['Today + 100 days', 'Today − 90 days', 'Today + 1 year'],
    resultsHeader: 'Result date',
    weekdayLbl: 'Day of week', dayOfYearLbl: 'Day of year', weekNumLbl: 'Week number', leapLbl: 'Leap year',
    yes: 'Yes', no: 'No',
    errInvalid: '→ Invalid date. Please check your input.',
    errAmount: '→ Please enter a valid amount.',
    seoH2a: 'How to add days to a date',
    seoP1: 'Adding days to a date seems simple — count forward from the start — but month boundaries make it tricky. If you add 30 days to January 15, you land on February 14 in a regular year (and the same in a leap year). Add 30 days to January 31 and you land on March 2 (or March 1 in a leap year). This calculator handles all those edge cases automatically, including month-length variations, year rollovers, and the extra day in February during leap years. It supports days, weeks, months, and years as units, and works equally well for adding time forward or subtracting time backward from any date between 1900 and 2100.',
    seoH2b: 'Practical uses for date arithmetic',
    seoP2: 'Date arithmetic is used constantly in professional and personal life. Businesses calculate payment due dates (net-30, net-60 terms), subscription renewal dates, trial period end dates, and warranty expirations. Healthcare providers track medication schedules, prenatal milestones, and follow-up appointment windows. Legal teams compute statutory deadlines and filing windows. Project managers find milestone dates by adding sprint lengths to start dates. Students work out when assignments are due. Anyone planning a trip counts forward to find departure and return dates. This calculator handles the math so you don\'t have to count on your fingers.',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://www.iso.org/iso-8601-date-and-time-format.html', label: 'ISO 8601 – Date and Time Format' },
    faqs: [
      { q: 'What date is 30 days from today?', a: 'Enter today\'s date as start, choose "Add" and "30 days", then click Calculate. The result will be the exact date 30 days from now, accounting for varying month lengths. For example, 30 days from March 15 is April 14.' },
      { q: 'What date is 90 days from today?', a: 'Use the same method with 90 days. This is a common business calculation — many contracts and warranties have 90-day terms. Because months vary in length, 90 days is not exactly 3 months; the calculator gives you the precise calendar date.' },
      { q: 'How do I add 30 days to a specific date?', a: 'Enter your target date as the start date, select "Add" and enter 30 in the amount field with "days" as the unit, then click Calculate. The exact result date is shown immediately along with its day of the week and week number.' },
      { q: 'What date is 90 days from a given date?', a: 'Enter your start date, select "Add", enter 90, and choose "days". The calculator correctly handles month boundaries — 90 days from January 1 is April 1 in a non-leap year and March 31 in a leap year.' },
      { q: 'How do I subtract months from a date?', a: 'Select "Subtract" from the operation dropdown, enter the number of months, and choose "months" as the unit. The calculator handles edge cases like subtracting 1 month from March 31, which correctly gives February 28 (or 29 in a leap year).' },
      { q: 'How do I calculate a project deadline?', a: 'Enter your project start date, select "Add", enter the project duration, and choose the appropriate unit (days, weeks, or months). The result shows the deadline date along with the day of the week — useful for spotting if a deadline falls on a weekend.' },
      { q: 'What date is 100 days from today?', a: 'Use the same method with 100 days. Because months have different lengths, you cannot simply count 3 months — the calculator gives you the precise date. 100 days from January 1 lands on April 11 in a regular year.' },
      { q: 'What date is 6 months from now?', a: 'Enter today as start, choose "Add" and "6 months". The result correctly handles cases like adding 6 months to August 31 (the result is February 28/29 in the following year) and other end-of-month edge cases.' },
    ],
    weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
  },
  fr: {
    title: 'Calculateur de date – Ajouter ou soustraire des jours | DateCalc.app',
    metaDesc: 'Ajoutez ou soustrayez des jours, semaines, mois ou années à n\'importe quelle date. Calculateur de date en ligne gratuit.',
    kicker: 'Calculateur de date',
    headline: 'Quelle <em>date</em><br>sera-ce ?',
    subhead: 'Ajoutez ou soustrayez des jours, semaines, mois ou années à partir d\'une date de début.',
    dateLabel: 'Date de départ',
    opLabel: 'Opération',
    add: 'Ajouter', sub: 'Soustraire',
    unitDays: 'jours', unitWeeks: 'semaines', unitMonths: 'mois', unitYears: 'années',
    calcBtn: '→ Calculer',
    tipText: '"Le temps coule dans un sens, mais la curiosité nous permet de regarder en avant et en arrière."',
    examples: ['Aujourd\'hui + 100 jours', 'Aujourd\'hui − 90 jours', 'Aujourd\'hui + 1 an'],
    resultsHeader: 'Date résultante',
    weekdayLbl: 'Jour de la semaine', dayOfYearLbl: 'Jour de l\'année', weekNumLbl: 'Semaine', leapLbl: 'Année bissextile',
    yes: 'Oui', no: 'Non',
    errInvalid: '→ Date invalide. Vérifiez votre saisie.',
    errAmount: '→ Veuillez entrer un montant valide.',
    seoH2a: 'Comment ajouter des jours à une date',
    seoP1: 'Ajouter des jours à une date semble simple — comptez en avant depuis le début — mais les fins de mois compliquent les choses. Si vous ajoutez 30 jours au 15 janvier, vous arrivez au 14 février en année ordinaire. Ajoutez 30 jours au 31 janvier et vous arrivez au 2 mars (ou 1er mars une année bissextile). Ce calculateur gère automatiquement tous ces cas particuliers, y compris les variations de longueur des mois, les changements d\'année et le jour supplémentaire de février lors des années bissextiles. Il prend en charge les jours, semaines, mois et années comme unités, et fonctionne aussi bien pour ajouter du temps en avant que pour en soustraire en arrière.',
    seoH2b: 'Utilisations pratiques du calcul de dates',
    seoP2: 'Le calcul de dates est utilisé constamment dans la vie professionnelle et personnelle. Les entreprises calculent les dates d\'échéance de paiement (conditions net-30, net-60), les dates de renouvellement d\'abonnement, les fins de périodes d\'essai et les expirations de garantie. Les professionnels de santé suivent les calendriers de médication, les jalons prénataux et les fenêtres de rendez-vous de suivi. Les équipes juridiques calculent les délais légaux. Les chefs de projet trouvent les dates de jalons en ajoutant des durées de sprint aux dates de début. Ce calculateur fait les maths pour vous.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://www.iso.org/iso-8601-date-and-time-format.html', label: 'ISO 8601 – Format de date et d\'heure' },
    faqs: [
      { q: 'Quelle date est dans 30 jours ?', a: 'Entrez la date d\'aujourd\'hui comme début, choisissez "Ajouter" et "30 jours", puis cliquez sur Calculer. Le résultat sera la date exacte dans 30 jours. Par exemple, 30 jours après le 15 mars donne le 14 avril.' },
      { q: 'Quelle date est dans 90 jours ?', a: 'Utilisez la même méthode avec 90 jours. C\'est un calcul commercial courant — de nombreux contrats et garanties ont des durées de 90 jours. Comme les mois varient en longueur, 90 jours ne correspond pas exactement à 3 mois.' },
      { q: 'Comment ajouter 30 jours à une date spécifique ?', a: 'Entrez votre date cible comme date de départ, sélectionnez "Ajouter" et entrez 30 dans le champ de quantité avec "jours" comme unité, puis cliquez sur Calculer. La date résultante exacte s\'affiche immédiatement avec le jour de la semaine et le numéro de semaine.' },
      { q: 'Quelle date est à 90 jours d\'une date donnée ?', a: 'Entrez votre date de départ, sélectionnez "Ajouter", entrez 90 et choisissez "jours". Le calculateur gère correctement les fins de mois — 90 jours après le 1er janvier donne le 1er avril en année ordinaire.' },
      { q: 'Comment soustraire des mois d\'une date ?', a: 'Sélectionnez "Soustraire" dans le menu déroulant des opérations, entrez le nombre de mois et choisissez "mois" comme unité. Le calculateur gère les cas limites comme soustraire 1 mois du 31 mars, ce qui donne correctement le 28 février (ou 29 en année bissextile).' },
      { q: 'Comment calculer une échéance de projet ?', a: 'Entrez la date de début de votre projet, sélectionnez "Ajouter", entrez la durée du projet et choisissez l\'unité appropriée (jours, semaines ou mois). Le résultat affiche la date d\'échéance avec le jour de la semaine — utile pour détecter si une échéance tombe un week-end.' },
      { q: 'Quelle date est dans 100 jours ?', a: 'Utilisez la même méthode avec 100 jours. Comme les mois ont des longueurs différentes, vous ne pouvez pas simplement compter 3 mois. 100 jours après le 1er janvier donne le 11 avril en année ordinaire.' },
      { q: 'Quelle date est dans 6 mois ?', a: 'Entrez aujourd\'hui comme début, choisissez "Ajouter" et "6 mois". Le résultat gère correctement les cas limites comme ajouter 6 mois au 31 août (le résultat est le 28/29 février de l\'année suivante).' },
    ],
    weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  },
  es: {
    title: 'Calculadora de fechas – Sumar o restar días | DateCalc.app',
    metaDesc: 'Suma o resta días, semanas, meses o años a cualquier fecha. Descubre qué fecha será en X días. Calculadora de fechas gratuita.',
    kicker: 'Calculadora de fechas',
    headline: '¿Qué <em>fecha</em><br>será?',
    subhead: 'Suma o resta días, semanas, meses o años a partir de cualquier fecha de inicio.',
    dateLabel: 'Fecha de inicio',
    opLabel: 'Operación',
    add: 'Sumar', sub: 'Restar',
    unitDays: 'días', unitWeeks: 'semanas', unitMonths: 'meses', unitYears: 'años',
    calcBtn: '→ Calcular',
    tipText: '"El tiempo fluye en una dirección, pero la curiosidad nos permite mirar hacia adelante y hacia atrás."',
    examples: ['Hoy + 100 días', 'Hoy − 90 días', 'Hoy + 1 año'],
    resultsHeader: 'Fecha resultante',
    weekdayLbl: 'Día de la semana', dayOfYearLbl: 'Día del año', weekNumLbl: 'Semana', leapLbl: 'Año bisiesto',
    yes: 'Sí', no: 'No',
    errInvalid: '→ Fecha no válida. Verifica tu entrada.',
    errAmount: '→ Por favor ingresa una cantidad válida.',
    seoH2a: 'Cómo sumar días a una fecha',
    seoP1: 'Sumar días a una fecha parece sencillo — cuenta hacia adelante desde el inicio — pero los límites de mes lo complican. Si sumas 30 días al 15 de enero, llegas al 14 de febrero en un año ordinario. Suma 30 días al 31 de enero y llegas al 2 de marzo (o 1 de marzo en año bisiesto). Esta calculadora maneja automáticamente todos esos casos límite, incluidas las variaciones en la longitud de los meses, los cambios de año y el día extra de febrero en años bisiestos. Admite días, semanas, meses y años como unidades, y funciona igual de bien para sumar tiempo hacia adelante o restar tiempo hacia atrás desde cualquier fecha entre 1900 y 2100.',
    seoH2b: 'Usos prácticos del cálculo de fechas',
    seoP2: 'El cálculo de fechas se usa constantemente en la vida profesional y personal. Las empresas calculan fechas de vencimiento de pagos (términos neto-30, neto-60), fechas de renovación de suscripciones, fechas de fin de períodos de prueba y vencimientos de garantías. Los profesionales de la salud rastrean calendarios de medicación, hitos prenatales y ventanas de citas de seguimiento. Los equipos legales calculan plazos estatutarios. Los gestores de proyectos encuentran fechas de hitos sumando duraciones de sprint a fechas de inicio. Esta calculadora hace las matemáticas por ti.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://www.iso.org/iso-8601-date-and-time-format.html', label: 'ISO 8601 – Formato de fecha y hora' },
    faqs: [
      { q: '¿Qué fecha es en 30 días?', a: 'Ingresa la fecha de hoy como inicio, elige "Sumar" y "30 días", luego haz clic en Calcular. El resultado será la fecha exacta en 30 días. Por ejemplo, 30 días después del 15 de marzo es el 14 de abril.' },
      { q: '¿Qué fecha es en 90 días?', a: 'Usa el mismo método con 90 días. Este es un cálculo comercial común — muchos contratos y garantías tienen términos de 90 días. Como los meses varían en longitud, 90 días no equivale exactamente a 3 meses; la calculadora te da la fecha calendario precisa.' },
      { q: '¿Cómo sumo 30 días a una fecha específica?', a: 'Ingresa tu fecha objetivo como fecha de inicio, selecciona "Sumar" e ingresa 30 en el campo de cantidad con "días" como unidad, luego haz clic en Calcular. La fecha resultante exacta se muestra inmediatamente junto con el día de la semana y el número de semana.' },
      { q: '¿Qué fecha es 90 días después de una fecha dada?', a: 'Ingresa tu fecha de inicio, selecciona "Sumar", ingresa 90 y elige "días". La calculadora maneja correctamente los límites de mes — 90 días desde el 1 de enero da el 1 de abril en un año no bisiesto.' },
      { q: '¿Cómo resto meses a una fecha?', a: 'Selecciona "Restar" en el menú desplegable de operaciones, ingresa el número de meses y elige "meses" como unidad. La calculadora maneja casos límite como restar 1 mes al 31 de marzo, lo que da correctamente el 28 de febrero (o 29 en año bisiesto).' },
      { q: '¿Cómo calculo una fecha límite de proyecto?', a: 'Ingresa la fecha de inicio de tu proyecto, selecciona "Sumar", ingresa la duración del proyecto y elige la unidad apropiada (días, semanas o meses). El resultado muestra la fecha límite junto con el día de la semana — útil para detectar si un plazo cae en fin de semana.' },
      { q: '¿Qué fecha es en 100 días?', a: 'Usa el mismo método con 100 días. Como los meses tienen diferentes longitudes, no puedes simplemente contar 3 meses. 100 días desde el 1 de enero da el 11 de abril en un año ordinario.' },
      { q: '¿Qué fecha es en 6 meses?', a: 'Ingresa hoy como inicio, elige "Sumar" y "6 meses". El resultado maneja correctamente los casos límite como sumar 6 meses al 31 de agosto (el resultado es el 28/29 de febrero del año siguiente).' },
    ],
    weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
  },
  pt: {
    title: 'Calculadora de Data 2026 – Adicionar ou Subtrair Dias | Grátis',
    metaDesc: 'Adicione ou subtraia dias, semanas, meses ou anos a qualquer data. Descubra qual será a data daqui a N dias — grátis e instantâneo.',
    kicker: 'Calculadora de Data',
    headline: 'Calcule uma<br><em>data futura<br>ou passada</em>',
    subhead: 'Adicione ou subtraia um período a qualquer data',
    dateLabel: 'Data inicial',
    opLabel: 'Operação',
    add: 'Adicionar', sub: 'Subtrair',
    unitDays: 'Dias', unitWeeks: 'Semanas', unitMonths: 'Meses', unitYears: 'Anos',
    calcBtn: '→ CALCULAR',
    tipText: '"O tempo flui em uma direção, mas a curiosidade nos permite olhar para frente e para trás."',
    examples: ['Hoje + 100 dias', 'Hoje − 90 dias', 'Hoje + 1 ano'],
    resultsHeader: 'Data calculada',
    weekdayLbl: 'Dia da semana', dayOfYearLbl: 'Dia do ano', weekNumLbl: 'Semana', leapLbl: 'Ano bissexto',
    yes: 'Sim', no: 'Não',
    errInvalid: '→ Data inválida. Verifique sua entrada.',
    errAmount: '→ Por favor insira uma quantidade válida.',
    seoH2a: 'Como adicionar dias a uma data?',
    seoP1: 'Para adicionar dias a uma data, some o número de dias desejado à data inicial. Esta calculadora lida automaticamente com meses de comprimentos diferentes e anos bissextos.',
    seoH2b: 'Exemplos de uso da calculadora de data',
    seoP2: 'Use esta calculadora para: calcular a data de entrega de um projeto, descobrir quando vence um prazo de 30 ou 90 dias, calcular a data de término de um contrato, ou descobrir que dia da semana será uma data futura.',
    faqTitle: 'Perguntas frequentes',
    source: null,
    faqs: [
      { q: 'Qual será a data daqui a 30 dias?', a: 'Use esta calculadora: insira a data de hoje, escolha "Adicionar" e coloque 30 dias. O resultado mostrará a data exata daqui a 30 dias.' },
      { q: 'Como calcular 90 dias a partir de hoje?', a: 'Insira a data atual, selecione "Adicionar" e coloque 90 dias. A calculadora retorna a data exata, considerando meses com diferentes números de dias.' },
      { q: 'A calculadora considera anos bissextos?', a: 'Sim. A calculadora leva em conta anos bissextos automaticamente ao calcular datas.' },
    ],
    weekDays: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
  },
};

module.exports = {
  pages: [
    { id: 'date-calculator', slugs: { en: 'date-calculator', fr: 'fr/calculateur-date', es: 'es/calculadora-fechas', pt: 'pt/calculadora-de-data' } },
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
      <div class="field-label" style="margin-top:1.5rem">${t.opLabel}</div>
      <div class="op-row">
        <select id="opSign">
          <option value="add">+ ${t.add}</option>
          <option value="sub">− ${t.sub}</option>
        </select>
        <input type="number" id="opAmount" placeholder="0" min="0" max="9999" inputmode="numeric" style="width:4ch" oninput="clamp(this,0,9999)">
        <select id="opUnit">
          <option value="days">${t.unitDays}</option>
          <option value="weeks">${t.unitWeeks}</option>
          <option value="months">${t.unitMonths}</option>
          <option value="years">${t.unitYears}</option>
        </select>
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
    <div class="results-header">${t.resultsHeader}</div>
    <div class="result-date" id="resultDate">—</div>
    <div class="result-date-sub" id="resultSub"></div>
    <div class="facts-row">
      <div class="fact-item"><div class="fact-key">${t.weekdayLbl}</div><div class="fact-val" id="ffWeekday">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.dayOfYearLbl}</div><div class="fact-val" id="ffDoy">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.weekNumLbl}</div><div class="fact-val" id="ffWeek">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.leapLbl}</div><div class="fact-val" id="ffLeap">—</div></div>
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

    const months = { en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
      fr: ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
      es: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
      pt: ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'] };

    const data = JSON.stringify({
      errInvalid: t.errInvalid, errAmount: t.errAmount,
      weekDays: t.weekDays, months: months[lang],
      yes: t.yes, no: t.no,
    });

    const script = `
var D = ${data};
function fmt(n){return n.toLocaleString();}

function getWeekNum(d){
  var date=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));
  var day=date.getUTCDay()||7;
  date.setUTCDate(date.getUTCDate()+4-day);
  var yearStart=new Date(Date.UTC(date.getUTCFullYear(),0,1));
  return Math.ceil((((date-yearStart)/86400000)+1)/7);
}

function getDoy(d){
  var start=new Date(d.getFullYear(),0,0);
  return Math.floor((d-start)/86400000);
}

function isLeap(y){ return (y%4===0&&y%100!==0)||y%400===0; }

function addToDate(date, amount, unit){
  var r=new Date(date);
  if(unit==='days') r.setDate(r.getDate()+amount);
  else if(unit==='weeks') r.setDate(r.getDate()+amount*7);
  else if(unit==='months'){
    var m=r.getMonth()+amount;
    var y=r.getFullYear()+Math.floor(m/12);
    m=((m%12)+12)%12;
    var lastDay=new Date(y,m+1,0).getDate();
    r.setFullYear(y,m,Math.min(r.getDate(),lastDay));
  } else {
    r.setFullYear(r.getFullYear()+amount);
  }
  return r;
}

function fillExample(idx){
  var now=new Date();
  document.getElementById('day').value=now.getDate();
  document.getElementById('month').value=now.getMonth()+1;
  document.getElementById('year').value=now.getFullYear();
  if(idx===0){ document.getElementById('opSign').value='add'; document.getElementById('opAmount').value=100; document.getElementById('opUnit').value='days'; }
  else if(idx===1){ document.getElementById('opSign').value='sub'; document.getElementById('opAmount').value=90; document.getElementById('opUnit').value='days'; }
  else { document.getElementById('opSign').value='add'; document.getElementById('opAmount').value=1; document.getElementById('opUnit').value='years'; }
  calculate();
}

function calculate(){
  var d=parseInt(document.getElementById('day').value);
  var m=parseInt(document.getElementById('month').value);
  var y=parseInt(document.getElementById('year').value);
  var amount=parseInt(document.getElementById('opAmount').value);
  var sign=document.getElementById('opSign').value;
  var unit=document.getElementById('opUnit').value;
  var err=document.getElementById('errorLine');
  var res=document.getElementById('results');
  err.classList.remove('show'); res.classList.remove('show');

  if(!d||!m||!y||d<1||d>31||m<1||m>12){err.textContent=D.errInvalid; err.classList.add('show'); return;}
  var start=new Date(y,m-1,d);
  if(start.getDate()!==d){err.textContent=D.errInvalid; err.classList.add('show'); return;}
  if(isNaN(amount)||amount<0){err.textContent=D.errAmount; err.classList.add('show'); return;}

  var delta=sign==='add'?amount:-amount;
  var result=addToDate(start,delta,unit);

  var dateStr=result.getDate()+' '+D.months[result.getMonth()]+' '+result.getFullYear();
  document.getElementById('resultDate').textContent=dateStr;
  document.getElementById('resultSub').textContent=(sign==='add'?'+ ':'\u2212 ')+amount+' '+unit;
  document.getElementById('ffWeekday').textContent=D.weekDays[result.getDay()];
  document.getElementById('ffDoy').textContent=getDoy(result);
  document.getElementById('ffWeek').textContent=getWeekNum(result);
  document.getElementById('ffLeap').textContent=isLeap(result.getFullYear())?D.yes:D.no;
  res.classList.add('show');
  res.scrollIntoView({behavior:'smooth',block:'start'});
}

// Pre-fill today
(function(){
  var now=new Date();
  document.getElementById('day').value=now.getDate();
  document.getElementById('month').value=now.getMonth()+1;
  document.getElementById('year').value=now.getFullYear();
})();

document.addEventListener('keydown',function(e){if(e.key==='Enter') calculate();});
`;

    return { title: t.title, metaDesc: t.metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs: t.faqs, source: t.source };
  },
};
