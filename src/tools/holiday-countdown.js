// Holiday Countdowns: New Year, Halloween, Easter

const HOLIDAYS = {
  'new-year': {
    en: {
      title: 'Days Until New Year 2027 – New Year Countdown | Date.tools',
      metaDesc: 'How many days until New Year? Live countdown to January 1 in days, hours, minutes and seconds.',
      kicker: 'New Year Countdown',
      headline: 'Days until<br><em>New Year</em>',
      subhead: 'Live countdown to January 1 — days, hours, minutes, seconds.',
      resultsHeader: 'New Year countdown',
      heroSuffix: 'days',
      weeksLbl: 'weeks', hoursLbl: 'hours', monthsLbl: 'months',
      dateLbl: 'New Year date', dayLbl: 'Day of week', yearLbl: 'Year',
      seoH2a: 'When is New Year\'s Day?',
      seoP1: 'New Year\'s Day is always January 1. The countdown above updates automatically based on today\'s date and counts down to midnight on January 1 of the next year.',
      seoH2b: 'New Year traditions around the world',
      seoP2: 'New Year is celebrated on January 1 in most countries following the Gregorian calendar. Some cultures celebrate the new year on different dates — the Chinese New Year, for example, falls between January 21 and February 20.',
      faqTitle: 'Frequently asked questions',
      faqs: [
        { q: 'How many days until New Year 2027?', a: 'The countdown above shows the exact number of days until January 1, 2027. It updates automatically every time you open the page.' },
        { q: 'What day is New Year 2027?', a: 'New Year\'s Day 2027 (January 1, 2027) is a Friday.' },
        { q: 'How many hours until New Year?', a: 'Multiply the days remaining by 24 to get approximate hours. The live counter above shows the precise hour and minute count.' },
        { q: 'What time does New Year start?', a: 'New Year begins at midnight (00:00) local time on January 1. This calculator counts down to midnight based on your device\'s clock.' },
      ],
      weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    },
    fr: {
      title: 'Jours avant le Nouvel An 2027 – Compte à rebours | Date.tools',
      metaDesc: 'Combien de jours avant le Nouvel An ? Compte à rebours jusqu\'au 1er janvier en jours, heures, minutes et secondes.',
      kicker: 'Compte à rebours Nouvel An',
      headline: 'Jours avant<br><em>le Nouvel An</em>',
      subhead: 'Compte à rebours jusqu\'au 1er janvier — jours, heures, minutes, secondes.',
      resultsHeader: 'Compte à rebours Nouvel An',
      heroSuffix: 'jours',
      weeksLbl: 'semaines', hoursLbl: 'heures', monthsLbl: 'mois',
      dateLbl: 'Date du Nouvel An', dayLbl: 'Jour de la semaine', yearLbl: 'Année',
      seoH2a: 'Quand est le Jour de l\'An ?',
      seoP1: 'Le Jour de l\'An est toujours le 1er janvier. Le compte à rebours ci-dessus se met à jour automatiquement et décompte jusqu\'à minuit le 1er janvier de l\'année suivante.',
      seoH2b: 'Les traditions du Nouvel An dans le monde',
      seoP2: 'Le Nouvel An est célébré le 1er janvier dans la plupart des pays suivant le calendrier grégorien. Certaines cultures le célèbrent à des dates différentes — le Nouvel An chinois tombe entre le 21 janvier et le 20 février.',
      faqTitle: 'Questions fréquentes',
      faqs: [
        { q: 'Combien de jours avant le Nouvel An 2027 ?', a: 'Le compte à rebours ci-dessus affiche le nombre exact de jours jusqu\'au 1er janvier 2027.' },
        { q: 'Quel jour est le 1er janvier 2027 ?', a: 'Le Jour de l\'An 2027 (1er janvier 2027) est un vendredi.' },
        { q: 'Combien d\'heures avant le Nouvel An ?', a: 'Multipliez les jours restants par 24 pour obtenir les heures approximatives. Le compteur en direct affiche les heures et minutes précises.' },
        { q: 'À quelle heure commence le Nouvel An ?', a: 'Le Nouvel An commence à minuit (00:00) heure locale le 1er janvier.' },
      ],
      weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
      months: ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
    },
    es: {
      title: 'Días para Año Nuevo 2027 – Cuenta regresiva | Date.tools',
      metaDesc: '¿Cuántos días faltan para Año Nuevo? Cuenta regresiva hasta el 1 de enero en días, horas, minutos y segundos.',
      kicker: 'Cuenta regresiva Año Nuevo',
      headline: 'Días para<br><em>Año Nuevo</em>',
      subhead: 'Cuenta regresiva hasta el 1 de enero — días, horas, minutos, segundos.',
      resultsHeader: 'Cuenta regresiva Año Nuevo',
      heroSuffix: 'días',
      weeksLbl: 'semanas', hoursLbl: 'horas', monthsLbl: 'meses',
      dateLbl: 'Fecha de Año Nuevo', dayLbl: 'Día de la semana', yearLbl: 'Año',
      seoH2a: '¿Cuándo es el Año Nuevo?',
      seoP1: 'El Día de Año Nuevo es siempre el 1 de enero. La cuenta regresiva anterior se actualiza automáticamente y cuenta hasta la medianoche del 1 de enero del año siguiente.',
      seoH2b: 'Tradiciones de Año Nuevo en todo el mundo',
      seoP2: 'El Año Nuevo se celebra el 1 de enero en la mayoría de países que siguen el calendario gregoriano. Algunas culturas lo celebran en fechas diferentes — el Año Nuevo chino cae entre el 21 de enero y el 20 de febrero.',
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        { q: '¿Cuántos días faltan para Año Nuevo 2027?', a: 'La cuenta regresiva anterior muestra el número exacto de días hasta el 1 de enero de 2027.' },
        { q: '¿Qué día es el 1 de enero de 2027?', a: 'El Día de Año Nuevo 2027 (1 de enero de 2027) es viernes.' },
        { q: '¿Cuántas horas faltan para Año Nuevo?', a: 'Multiplica los días restantes por 24 para obtener las horas aproximadas.' },
        { q: '¿A qué hora empieza el Año Nuevo?', a: 'El Año Nuevo comienza a la medianoche (00:00) hora local el 1 de enero.' },
      ],
      weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
      months: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
    },
  },
  'halloween': {
    en: {
      title: 'Days Until Halloween 2026 – Halloween Countdown | Date.tools',
      metaDesc: 'How many days until Halloween? Live countdown to October 31 in days, hours, minutes and seconds.',
      kicker: 'Halloween Countdown',
      headline: 'Days until<br><em>Halloween</em>',
      subhead: 'Live countdown to October 31 — days, hours, minutes, seconds.',
      resultsHeader: 'Halloween countdown',
      heroSuffix: 'days',
      weeksLbl: 'weeks', hoursLbl: 'hours', monthsLbl: 'months',
      dateLbl: 'Halloween date', dayLbl: 'Day of week', yearLbl: 'Year',
      seoH2a: 'When is Halloween?',
      seoP1: 'Halloween is always October 31. The countdown above updates automatically and counts down to midnight on October 31 of the current or next year.',
      seoH2b: 'Halloween traditions',
      seoP2: 'Halloween originated from the ancient Celtic festival of Samhain. Today it is celebrated in many countries with costumes, trick-or-treating, and jack-o-lanterns. It is especially popular in the USA, Canada, Ireland, and the UK.',
      faqTitle: 'Frequently asked questions',
      faqs: [
        { q: 'How many days until Halloween 2026?', a: 'The countdown above shows the exact number of days until October 31, 2026. It updates automatically every time you open the page.' },
        { q: 'What day is Halloween 2026?', a: 'Halloween 2026 (October 31, 2026) is a Saturday.' },
        { q: 'How many weeks until Halloween?', a: 'Divide the days remaining by 7 to get the approximate weeks. The live counter shows the precise breakdown.' },
        { q: 'What time does Halloween start?', a: 'Halloween is all day on October 31. Trick-or-treating typically happens in the evening, starting around 6 PM.' },
      ],
      weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    },
    fr: {
      title: 'Jours avant Halloween 2026 – Compte à rebours | Date.tools',
      metaDesc: 'Combien de jours avant Halloween ? Compte à rebours jusqu\'au 31 octobre en jours, heures, minutes et secondes.',
      kicker: 'Compte à rebours Halloween',
      headline: 'Jours avant<br><em>Halloween</em>',
      subhead: 'Compte à rebours jusqu\'au 31 octobre — jours, heures, minutes, secondes.',
      resultsHeader: 'Compte à rebours Halloween',
      heroSuffix: 'jours',
      weeksLbl: 'semaines', hoursLbl: 'heures', monthsLbl: 'mois',
      dateLbl: 'Date d\'Halloween', dayLbl: 'Jour de la semaine', yearLbl: 'Année',
      seoH2a: 'Quand est Halloween ?',
      seoP1: 'Halloween est toujours le 31 octobre. Le compte à rebours ci-dessus se met à jour automatiquement et décompte jusqu\'à minuit le 31 octobre.',
      seoH2b: 'Les traditions d\'Halloween',
      seoP2: 'Halloween est originaire de l\'ancienne fête celtique de Samhain. Aujourd\'hui, il est célébré dans de nombreux pays avec des costumes, du trick-or-treating et des citrouilles sculptées.',
      faqTitle: 'Questions fréquentes',
      faqs: [
        { q: 'Combien de jours avant Halloween 2026 ?', a: 'Le compte à rebours ci-dessus affiche le nombre exact de jours jusqu\'au 31 octobre 2026.' },
        { q: 'Quel jour est Halloween 2026 ?', a: 'Halloween 2026 (31 octobre 2026) est un samedi.' },
        { q: 'Combien de semaines avant Halloween ?', a: 'Divisez les jours restants par 7 pour obtenir les semaines approximatives.' },
        { q: 'À quelle heure commence Halloween ?', a: 'Halloween dure toute la journée du 31 octobre. Les distributions de bonbons ont généralement lieu le soir, à partir de 18h.' },
      ],
      weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
      months: ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
    },
    es: {
      title: 'Días para Halloween 2026 – Cuenta regresiva | Date.tools',
      metaDesc: '¿Cuántos días faltan para Halloween? Cuenta regresiva hasta el 31 de octubre en días, horas, minutos y segundos.',
      kicker: 'Cuenta regresiva Halloween',
      headline: 'Días para<br><em>Halloween</em>',
      subhead: 'Cuenta regresiva hasta el 31 de octubre — días, horas, minutos, segundos.',
      resultsHeader: 'Cuenta regresiva Halloween',
      heroSuffix: 'días',
      weeksLbl: 'semanas', hoursLbl: 'horas', monthsLbl: 'meses',
      dateLbl: 'Fecha de Halloween', dayLbl: 'Día de la semana', yearLbl: 'Año',
      seoH2a: '¿Cuándo es Halloween?',
      seoP1: 'Halloween es siempre el 31 de octubre. La cuenta regresiva anterior se actualiza automáticamente y cuenta hasta la medianoche del 31 de octubre.',
      seoH2b: 'Tradiciones de Halloween',
      seoP2: 'Halloween se originó en el antiguo festival celta de Samhain. Hoy se celebra en muchos países con disfraces, trick-or-treating y calabazas talladas.',
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        { q: '¿Cuántos días faltan para Halloween 2026?', a: 'La cuenta regresiva anterior muestra el número exacto de días hasta el 31 de octubre de 2026.' },
        { q: '¿Qué día es Halloween 2026?', a: 'Halloween 2026 (31 de octubre de 2026) es sábado.' },
        { q: '¿Cuántas semanas faltan para Halloween?', a: 'Divide los días restantes entre 7 para obtener las semanas aproximadas.' },
        { q: '¿A qué hora empieza Halloween?', a: 'Halloween dura todo el día el 31 de octubre. El trick-or-treating típicamente ocurre por la tarde, comenzando alrededor de las 6 PM.' },
      ],
      weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
      months: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
    },
  },
  'easter': {
    en: {
      title: 'Days Until Easter 2026 – Easter Countdown | Date.tools',
      metaDesc: 'How many days until Easter? Live countdown to Easter Sunday in days, hours, minutes and seconds. Easter date calculated automatically.',
      kicker: 'Easter Countdown',
      headline: 'Days until<br><em>Easter</em>',
      subhead: 'Live countdown to Easter Sunday — the date is calculated automatically each year.',
      resultsHeader: 'Easter countdown',
      heroSuffix: 'days',
      weeksLbl: 'weeks', hoursLbl: 'hours', monthsLbl: 'months',
      dateLbl: 'Easter date', dayLbl: 'Day of week', yearLbl: 'Year',
      seoH2a: 'When is Easter?',
      seoP1: 'Easter Sunday falls on the first Sunday after the first full moon following the spring equinox (March 21). This means Easter can fall between March 22 and April 25. The date is calculated using the Gregorian algorithm (Meeus/Jones/Butcher).',
      seoH2b: 'How is the Easter date calculated?',
      seoP2: 'The Easter date is determined by ecclesiastical rules established in 325 AD at the Council of Nicaea. The calculation uses a fixed ecclesiastical "full moon" table rather than the actual astronomical full moon, which is why Easter sometimes seems to miss the real full moon.',
      faqTitle: 'Frequently asked questions',
      faqs: [
        { q: 'When is Easter 2026?', a: 'Easter 2026 falls on April 5, 2026. The countdown above updates automatically to show the next upcoming Easter.' },
        { q: 'When is Easter 2027?', a: 'Easter 2027 falls on March 28, 2027.' },
        { q: 'Why does Easter change every year?', a: 'Easter is a moveable feast tied to the lunar calendar. It falls on the first Sunday after the first ecclesiastical full moon on or after March 21.' },
        { q: 'Is Orthodox Easter the same date?', a: 'No. Orthodox Easter (Eastern Christianity) uses the Julian calendar for the calculation, which often results in a different date, typically 1–5 weeks after Western Easter.' },
      ],
      weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    },
    fr: {
      title: 'Jours avant Pâques 2026 – Compte à rebours | Date.tools',
      metaDesc: 'Combien de jours avant Pâques ? Compte à rebours jusqu\'au dimanche de Pâques en jours, heures, minutes et secondes.',
      kicker: 'Compte à rebours Pâques',
      headline: 'Jours avant<br><em>Pâques</em>',
      subhead: 'Compte à rebours jusqu\'au dimanche de Pâques — la date est calculée automatiquement chaque année.',
      resultsHeader: 'Compte à rebours Pâques',
      heroSuffix: 'jours',
      weeksLbl: 'semaines', hoursLbl: 'heures', monthsLbl: 'mois',
      dateLbl: 'Date de Pâques', dayLbl: 'Jour de la semaine', yearLbl: 'Année',
      seoH2a: 'Quand est Pâques ?',
      seoP1: 'Le dimanche de Pâques tombe le premier dimanche après la première pleine lune suivant l\'équinoxe de printemps (21 mars). Cela signifie que Pâques peut tomber entre le 22 mars et le 25 avril.',
      seoH2b: 'Comment la date de Pâques est-elle calculée ?',
      seoP2: 'La date de Pâques est déterminée par des règles ecclésiastiques établies en 325 après J.-C. au Concile de Nicée. Le calcul utilise un tableau de "pleine lune" ecclésiastique fixe plutôt que la vraie pleine lune astronomique.',
      faqTitle: 'Questions fréquentes',
      faqs: [
        { q: 'Quand est Pâques 2026 ?', a: 'Pâques 2026 tombe le 5 avril 2026.' },
        { q: 'Quand est Pâques 2027 ?', a: 'Pâques 2027 tombe le 28 mars 2027.' },
        { q: 'Pourquoi Pâques change-t-il chaque année ?', a: 'Pâques est une fête mobile liée au calendrier lunaire. Il tombe le premier dimanche après la première pleine lune ecclésiastique le ou après le 21 mars.' },
        { q: 'Pâques orthodoxe est-il à la même date ?', a: 'Non. Pâques orthodoxe utilise le calendrier julien, ce qui donne souvent une date différente, généralement 1 à 5 semaines après Pâques occidental.' },
      ],
      weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
      months: ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
    },
    es: {
      title: 'Días para Pascua 2026 – Cuenta regresiva | Date.tools',
      metaDesc: '¿Cuántos días faltan para Pascua? Cuenta regresiva hasta el Domingo de Pascua en días, horas, minutos y segundos.',
      kicker: 'Cuenta regresiva Pascua',
      headline: 'Días para<br><em>Pascua</em>',
      subhead: 'Cuenta regresiva hasta el Domingo de Pascua — la fecha se calcula automáticamente cada año.',
      resultsHeader: 'Cuenta regresiva Pascua',
      heroSuffix: 'días',
      weeksLbl: 'semanas', hoursLbl: 'horas', monthsLbl: 'meses',
      dateLbl: 'Fecha de Pascua', dayLbl: 'Día de la semana', yearLbl: 'Año',
      seoH2a: '¿Cuándo es Pascua?',
      seoP1: 'El Domingo de Pascua cae el primer domingo después de la primera luna llena que sigue al equinoccio de primavera (21 de marzo). Esto significa que Pascua puede caer entre el 22 de marzo y el 25 de abril.',
      seoH2b: '¿Cómo se calcula la fecha de Pascua?',
      seoP2: 'La fecha de Pascua está determinada por reglas eclesiásticas establecidas en el año 325 d.C. en el Concilio de Nicea. El cálculo utiliza una tabla de "luna llena" eclesiástica fija en lugar de la luna llena astronómica real.',
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        { q: '¿Cuándo es Pascua 2026?', a: 'Pascua 2026 cae el 5 de abril de 2026.' },
        { q: '¿Cuándo es Pascua 2027?', a: 'Pascua 2027 cae el 28 de marzo de 2027.' },
        { q: '¿Por qué Pascua cambia cada año?', a: 'Pascua es una fiesta movible vinculada al calendario lunar. Cae el primer domingo después de la primera luna llena eclesiástica el 21 de marzo o después.' },
        { q: '¿Es la Pascua ortodoxa la misma fecha?', a: 'No. La Pascua ortodoxa usa el calendario juliano, lo que a menudo resulta en una fecha diferente, generalmente 1-5 semanas después de la Pascua occidental.' },
      ],
      weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
      months: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
    },
  },
};

// Get holiday date for a given id and year
function getHolidayDate(id, year) {
  if (id === 'new-year') return new Date(year, 0, 1);
  if (id === 'halloween') return new Date(year, 9, 31);
  if (id === 'easter') return computeEaster(year);
  return null;
}

// Meeus/Jones/Butcher Easter algorithm
function computeEasterJS() {
  return `
function computeEaster(year) {
  var a=year%19, b=Math.floor(year/100), c=year%100;
  var d=Math.floor(b/4), e=b%4;
  var f=Math.floor((b+8)/25), g=Math.floor((b-f+1)/3);
  var h=(19*a+b-d-g+15)%30;
  var i=Math.floor(c/4), k=c%4;
  var l=(32+2*e+2*i-h-k)%7;
  var m=Math.floor((a+11*h+22*l)/451);
  var month=Math.floor((h+l-7*m+114)/31)-1;
  var day=((h+l-7*m+114)%31)+1;
  return new Date(year, month, day);
}`;
}

function renderHoliday(id, lang) {
  const t = HOLIDAYS[id][lang];

  const headlineBlock = `  <div class="headline-block">
    <div class="kicker">${t.kicker}</div>
    <h1 class="headline">${t.headline}</h1>
    <p class="subhead">${t.subhead}</p>
  </div>`;

  const formGrid = '';

  const resultsSection = `  <div class="results-section auto-show" id="results">
    <div class="results-header">${t.resultsHeader}</div>
    <div class="age-display">
      <span class="age-number" id="heroDays">—</span>
      <span class="age-suffix">${t.heroSuffix}</span>
    </div>
    <div class="precise-age" id="liveTime"></div>
    <div class="stats-strip cols-3">
      <div class="stat-item"><div class="stat-num" id="statWeeks">—</div><div class="stat-lbl">${t.weeksLbl}</div></div>
      <div class="stat-item"><div class="stat-num" id="statHours">—</div><div class="stat-lbl">${t.hoursLbl}</div></div>
      <div class="stat-item"><div class="stat-num" id="statMonths">—</div><div class="stat-lbl">${t.monthsLbl}</div></div>
    </div>
    <div class="facts-row">
      <div class="fact-item"><div class="fact-key">${t.dateLbl}</div><div class="fact-val" id="ffDate">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.dayLbl}</div><div class="fact-val" id="ffDay">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.yearLbl}</div><div class="fact-val" id="ffYear">—</div></div>
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

  const easterFn = id === 'easter' ? computeEasterJS() : '';
  const getTargetFn = id === 'new-year'
    ? `function getTarget(){var now=new Date();var y=now.getFullYear();var t=new Date(y,0,1);if(t<=now)t=new Date(y+1,0,1);return t;}`
    : id === 'halloween'
    ? `function getTarget(){var now=new Date();var y=now.getFullYear();var t=new Date(y,9,31);if(t<=now)t=new Date(y+1,9,31);return t;}`
    : `function getTarget(){${easterFn}var now=new Date();var y=now.getFullYear();var t=computeEaster(y);if(t<=now)t=computeEaster(y+1);return t;}`;

  const data = JSON.stringify({ weekDays: t.weekDays, months: t.months });

  const script = `
var D = ${data};
function fmt(n){return n.toLocaleString();}
function pad2(n){return n<10?'0'+n:''+n;}

${id === 'easter' ? computeEasterJS() : ''}
${getTargetFn.replace(easterFn, '')}

(function(){
  var target=getTarget();
  document.getElementById('ffDate').textContent=target.getDate()+' '+D.months[target.getMonth()]+' '+target.getFullYear();
  document.getElementById('ffDay').textContent=D.weekDays[target.getDay()];
  document.getElementById('ffYear').textContent=target.getFullYear();
})();

function tick(){
  var now=new Date();
  var target=getTarget();
  var diff=target-now;
  if(diff<0) diff=0;
  var totalSec=Math.floor(diff/1000);
  var s=totalSec%60, totalMin=Math.floor(totalSec/60);
  var min=totalMin%60, totalH=Math.floor(totalMin/60);
  var h=totalH%24, days=Math.floor(totalH/24);
  document.getElementById('heroDays').textContent=fmt(days);
  document.getElementById('liveTime').textContent=pad2(h)+'h · '+pad2(min)+'min · '+pad2(s)+'s';
  document.getElementById('statWeeks').textContent=fmt(Math.floor(days/7));
  document.getElementById('statHours').textContent=fmt(Math.floor(diff/3600000));
  document.getElementById('statMonths').textContent=Math.floor(days/30.44*10)/10;
}
tick();
setInterval(tick,1000);
`;

  return { title: t.title, metaDesc: t.metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs: t.faqs, source: t.source };
}

module.exports = {
  pages: [
    { id: 'new-year',  slugs: { en: 'days-until-new-year',  fr: 'fr/jours-avant-nouvel-an', es: 'es/dias-para-ano-nuevo' } },
    { id: 'halloween', slugs: { en: 'days-until-halloween',  fr: 'fr/jours-avant-halloween',  es: 'es/dias-para-halloween'  } },
    { id: 'easter',    slugs: { en: 'days-until-easter',     fr: 'fr/jours-avant-paques',     es: 'es/dias-para-pascua'    } },
  ],
  render(pageId, lang) {
    return renderHoliday(pageId, lang);
  },
};
