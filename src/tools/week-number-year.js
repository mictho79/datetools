// Week Numbers by Year — Full ISO Week Calendar

const YEARS = [2023, 2024, 2025, 2026, 2027, 2028];

const T = {
  en: {
    titleTpl: 'Week Numbers {year} – All {weeks} ISO Weeks with Dates',
    metaDescTpl: 'Complete list of ISO week numbers for {year}. All {weeks} weeks with start and end dates. Find any week number instantly — free ISO calendar.',
    kicker: 'Week Calendar',
    headlineTpl: 'Week numbers<br><em>{year}</em>',
    subheadTpl: 'All {weeks} ISO weeks of {year} — with start and end dates for each week.',
    weekLabel: 'Week',
    fromLabel: 'From (Monday)',
    toLabel: 'To (Sunday)',
    monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    dayNames: ['Mo','Tu','We','Th','Fr','Sa','Su'],
    currentWeekLabel: 'Current week',
    totalWeeksLabel: 'Total ISO weeks',
    weeksInYear: 'weeks',
    seoH2a: 'What are ISO week numbers?',
    seoP1: 'ISO week numbers are a standardized system defined by ISO 8601 for identifying weeks within a calendar year. Under this system, every week begins on Monday and ends on Sunday, and Week 1 is defined as the week containing the first Thursday of the year. This rule has an important consequence: the first days of January can belong to the last ISO week of the previous year, and the last days of December can belong to ISO Week 1 of the following year. For example, if January 1 falls on a Friday, Saturday, or Sunday, those days are counted as part of the final week of the preceding year. ISO week numbering is the international standard used across Europe, in international manufacturing, logistics, payroll, and project scheduling. Businesses in Germany, France, the Netherlands, and Scandinavia routinely reference weeks by their ISO number in contracts, delivery schedules, and production plans. The system eliminates ambiguity when communicating across month and year boundaries. A year contains either 52 or 53 ISO weeks: most years have 52, but a year gains a 53rd week when January 1 falls on Thursday, or on Wednesday in a leap year. The week-based year (sometimes called the ISO year or ISOWeekYear) can differ by up to three days from the Gregorian calendar year.',
    seoH2b: 'How to use week numbers in {year}',
    seoP2Tpl: 'Week numbers in {year} are especially useful for scheduling, planning, and compliance tasks. Project managers use ISO week numbers to assign sprint numbers, milestone dates, and delivery windows without ambiguity — saying "deliver by W14 {year}" is clearer than citing a date that may shift based on holidays. In the European Union, employment law in many member states uses ISO week numbers for shift planning, overtime calculation, and statutory rest periods. Fiscal calendars in retail and manufacturing often divide the year into 13 four-week periods aligned to ISO weeks. For {year}, you can use the calendar grid above to instantly look up which week any given date falls in, and the week table below gives you the precise Monday–Sunday range for each of the {weeks} weeks. If you are coordinating across teams in different countries, ISO week numbers provide a single shared reference that works regardless of local holiday differences. Whether you are planning a product launch, scheduling deliveries, preparing payroll, or running a multi-week marketing campaign, the ISO week calendar for {year} on this page gives you a complete, printable reference.',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://www.iso.org/iso-8601-date-and-time-format.html', label: 'ISO 8601 – Date and Time Format Standard' },
    faqsTpl: [
      { q: 'How many weeks are in {year}?', a: '{year} has {weeks} ISO weeks. ISO weeks run Monday to Sunday, and the count of weeks in a year is 52 or 53 depending on what day January 1 falls on. A year has 53 weeks when January 1 is a Thursday, or a Wednesday in a leap year.' },
      { q: 'What is ISO week 1 of {year}?', a: 'ISO Week 1 of {year} is the week containing the first Thursday of {year}. It starts on {w1startFull} and ends on {w1endFull}. Week 1 is defined this way by ISO 8601 so that the majority of days in Week 1 always fall within the new year.' },
      { q: 'What week number is it today?', a: 'You can find today\'s ISO week number by using the week number calculator on this site. If you are viewing the {year} calendar, the current week row is highlighted automatically in the table below.' },
      { q: 'How are ISO week numbers calculated?', a: 'To calculate the ISO week number for a date: (1) find the Thursday of the same ISO week by adjusting the date if necessary; (2) compute the ordinal day of that Thursday within its calendar year; (3) divide by 7 and round up. The ISO year of a date may differ from its Gregorian year for dates in late December or early January.' },
      { q: 'What is the difference between ISO weeks and US weeks?', a: 'ISO weeks start on Monday and Week 1 contains the first Thursday of the year. US weeks start on Sunday, and Week 1 is simply the week containing January 1. This means the two systems can disagree by one week, especially in late December and early January. Most of Europe and international business uses ISO week numbers.' },
      { q: 'When does week 1 of {year} start?', a: 'ISO Week 1 of {year} starts on {w1startFull}. This is the Monday of the week that contains the first Thursday of {year}, as specified by ISO 8601.' },
    ],
  },
  fr: {
    titleTpl: 'Numéros de semaine {year} – Calendrier ISO complet',
    metaDescTpl: 'Liste complète des numéros de semaine ISO pour {year}. Toutes les {weeks} semaines avec dates de début et de fin. Calendrier ISO gratuit.',
    kicker: 'Calendrier des semaines',
    headlineTpl: 'Numéros de semaine<br><em>{year}</em>',
    subheadTpl: 'Toutes les {weeks} semaines ISO de {year} — avec les dates de début et de fin de chaque semaine.',
    weekLabel: 'Semaine',
    fromLabel: 'Du (lundi)',
    toLabel: 'Au (dimanche)',
    monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    dayNames: ['Lu','Ma','Me','Je','Ve','Sa','Di'],
    currentWeekLabel: 'Semaine en cours',
    totalWeeksLabel: 'Semaines ISO totales',
    weeksInYear: 'semaines',
    seoH2a: 'Que sont les numéros de semaine ISO ?',
    seoP1: 'Les numéros de semaine ISO sont un système standardisé défini par la norme ISO 8601 pour identifier les semaines au sein d\'une année civile. Dans ce système, chaque semaine commence le lundi et se termine le dimanche. La semaine 1 est définie comme la semaine contenant le premier jeudi de l\'année. Cette règle a une conséquence importante : les premiers jours de janvier peuvent appartenir à la dernière semaine ISO de l\'année précédente, et les derniers jours de décembre peuvent appartenir à la semaine ISO 1 de l\'année suivante. Par exemple, si le 1er janvier tombe un vendredi, samedi ou dimanche, ces jours sont comptabilisés dans la dernière semaine de l\'année précédente. La numérotation des semaines ISO est la norme internationale utilisée dans toute l\'Europe, dans la fabrication internationale, la logistique, la paie et la planification de projets. Les entreprises en Allemagne, France, Pays-Bas et Scandinavie référencent régulièrement les semaines par leur numéro ISO dans les contrats, les calendriers de livraison et les plans de production. Le système élimine toute ambiguïté lors des communications autour des fins de mois et d\'année. Une année contient 52 ou 53 semaines ISO : la plupart des années en ont 52, mais une année gagne une 53e semaine quand le 1er janvier tombe un jeudi, ou un mercredi lors d\'une année bissextile.',
    seoH2b: 'Comment utiliser les numéros de semaine en {year}',
    seoP2Tpl: 'Les numéros de semaine en {year} sont particulièrement utiles pour la planification, l\'organisation et les tâches de conformité. Les chefs de projet utilisent les numéros de semaine ISO pour attribuer des numéros de sprint, des dates de jalons et des fenêtres de livraison sans ambiguïté — dire "livrer avant la S14 {year}" est plus clair que citer une date qui peut évoluer selon les jours fériés. Dans l\'Union européenne, le droit du travail de nombreux États membres utilise les numéros de semaine ISO pour la planification des horaires, le calcul des heures supplémentaires et les périodes de repos légales. Les calendriers fiscaux dans le commerce de détail et la fabrication divisent souvent l\'année en 13 périodes de quatre semaines alignées sur les semaines ISO. Pour {year}, vous pouvez utiliser la grille du calendrier ci-dessus pour trouver instantanément dans quelle semaine tombe une date donnée, et le tableau des semaines ci-dessous vous donne la plage précise du lundi au dimanche pour chacune des {weeks} semaines. Que vous planifiiez un lancement de produit, des livraisons, la paie ou une campagne marketing multi-semaines, le calendrier ISO des semaines de {year} sur cette page vous offre une référence complète.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://www.iso.org/iso-8601-date-and-time-format.html', label: 'ISO 8601 – Norme de format de date et d\'heure' },
    faqsTpl: [
      { q: 'Combien de semaines y a-t-il en {year} ?', a: '{year} a {weeks} semaines ISO. Les semaines ISO vont du lundi au dimanche, et le nombre de semaines dans une année est 52 ou 53 selon le jour où tombe le 1er janvier. Une année a 53 semaines lorsque le 1er janvier est un jeudi, ou un mercredi lors d\'une année bissextile.' },
      { q: 'Quelle est la semaine ISO 1 de {year} ?', a: 'La semaine ISO 1 de {year} est la semaine contenant le premier jeudi de {year}. Elle commence le {w1startFull} et se termine le {w1endFull}. La semaine 1 est définie ainsi par l\'ISO 8601 afin que la majorité des jours de la semaine 1 tombent toujours dans la nouvelle année.' },
      { q: 'Quel numéro de semaine sommes-nous aujourd\'hui ?', a: 'Vous pouvez trouver le numéro de semaine ISO actuel en utilisant le calculateur de numéro de semaine sur ce site. Si vous consultez le calendrier {year}, la ligne de la semaine en cours est automatiquement mise en évidence dans le tableau ci-dessous.' },
      { q: 'Comment les numéros de semaine ISO sont-ils calculés ?', a: 'Pour calculer le numéro de semaine ISO d\'une date : (1) trouvez le jeudi de la même semaine ISO en ajustant la date si nécessaire ; (2) calculez le jour ordinal de ce jeudi dans son année civile ; (3) divisez par 7 et arrondissez. L\'année ISO d\'une date peut différer de son année grégorienne pour les dates fin décembre ou début janvier.' },
      { q: 'Quelle est la différence entre les semaines ISO et les semaines américaines ?', a: 'Les semaines ISO commencent le lundi et la semaine 1 contient le premier jeudi de l\'année. Les semaines américaines commencent le dimanche, et la semaine 1 est simplement la semaine contenant le 1er janvier. Cela signifie que les deux systèmes peuvent différer d\'une semaine, notamment fin décembre et début janvier. La plupart de l\'Europe et des entreprises internationales utilisent les numéros de semaine ISO.' },
      { q: 'Quand commence la semaine 1 de {year} ?', a: 'La semaine ISO 1 de {year} commence le {w1startFull}. C\'est le lundi de la semaine contenant le premier jeudi de {year}, tel que spécifié par l\'ISO 8601.' },
    ],
  },
  es: {
    titleTpl: 'Números de semana {year} – Calendario ISO completo | DateCalc.app',
    metaDescTpl: 'Lista completa de números de semana ISO para {year}. Ver las {weeks} semanas con fechas de inicio y fin. Semana {w1start} a semana {w1end}.',
    kicker: 'Calendario de semanas',
    headlineTpl: 'Números de semana<br><em>{year}</em>',
    subheadTpl: 'Todas las {weeks} semanas ISO de {year} — con fechas de inicio y fin de cada semana.',
    weekLabel: 'Semana',
    fromLabel: 'Desde (lunes)',
    toLabel: 'Hasta (domingo)',
    monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    dayNames: ['Lu','Ma','Mi','Ju','Vi','Sá','Do'],
    currentWeekLabel: 'Semana actual',
    totalWeeksLabel: 'Semanas ISO totales',
    weeksInYear: 'semanas',
    seoH2a: '¿Qué son los números de semana ISO?',
    seoP1: 'Los números de semana ISO son un sistema estandarizado definido por la norma ISO 8601 para identificar las semanas dentro de un año calendario. En este sistema, cada semana comienza el lunes y termina el domingo. La semana 1 se define como la semana que contiene el primer jueves del año. Esta regla tiene una consecuencia importante: los primeros días de enero pueden pertenecer a la última semana ISO del año anterior, y los últimos días de diciembre pueden pertenecer a la semana ISO 1 del año siguiente. Por ejemplo, si el 1 de enero cae en viernes, sábado o domingo, esos días se cuentan como parte de la última semana del año anterior. La numeración de semanas ISO es el estándar internacional utilizado en toda Europa, en la fabricación internacional, la logística, la nómina y la programación de proyectos. Las empresas en Alemania, Francia, Países Bajos y Escandinavia rutinariamente hacen referencia a las semanas por su número ISO en contratos, calendarios de entrega y planes de producción. El sistema elimina la ambigüedad al comunicarse a través de los límites de mes y año. Un año contiene 52 o 53 semanas ISO: la mayoría de los años tienen 52, pero un año gana una semana 53 cuando el 1 de enero cae en jueves, o en miércoles en un año bisiesto.',
    seoH2b: 'Cómo usar los números de semana en {year}',
    seoP2Tpl: 'Los números de semana en {year} son especialmente útiles para programación, planificación y tareas de cumplimiento. Los gerentes de proyecto usan los números de semana ISO para asignar números de sprint, fechas de hitos y ventanas de entrega sin ambigüedad — decir "entregar antes de la S14 {year}" es más claro que citar una fecha que puede cambiar según los días festivos. En la Unión Europea, la legislación laboral en muchos estados miembros utiliza los números de semana ISO para la planificación de turnos, el cálculo de horas extras y los períodos de descanso legales. Los calendarios fiscales en el comercio minorista y la manufactura a menudo dividen el año en 13 períodos de cuatro semanas alineados con las semanas ISO. Para {year}, puede usar la cuadrícula del calendario de arriba para buscar instantáneamente en qué semana cae cualquier fecha, y la tabla de semanas de abajo le da el rango preciso de lunes a domingo para cada una de las {weeks} semanas. Ya sea que esté planificando un lanzamiento de producto, programando entregas, preparando nóminas o ejecutando una campaña de marketing de varias semanas, el calendario ISO de semanas de {year} en esta página le ofrece una referencia completa e imprimible.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://www.iso.org/iso-8601-date-and-time-format.html', label: 'ISO 8601 – Estándar de formato de fecha y hora' },
    faqsTpl: [
      { q: '¿Cuántas semanas tiene {year}?', a: '{year} tiene {weeks} semanas ISO. Las semanas ISO van de lunes a domingo, y el número de semanas en un año es 52 o 53 dependiendo del día en que cae el 1 de enero. Un año tiene 53 semanas cuando el 1 de enero es jueves, o miércoles en un año bisiesto.' },
      { q: '¿Qué es la semana ISO 1 de {year}?', a: 'La semana ISO 1 de {year} es la semana que contiene el primer jueves de {year}. Comienza el {w1startFull} y termina el {w1endFull}. La semana 1 se define así por ISO 8601 para que la mayoría de los días de la semana 1 siempre caigan en el nuevo año.' },
      { q: '¿Qué número de semana es hoy?', a: 'Puede encontrar el número de semana ISO de hoy usando la calculadora de número de semana en este sitio. Si está viendo el calendario de {year}, la fila de la semana actual se resalta automáticamente en la tabla de abajo.' },
      { q: '¿Cómo se calculan los números de semana ISO?', a: 'Para calcular el número de semana ISO de una fecha: (1) encuentre el jueves de la misma semana ISO ajustando la fecha si es necesario; (2) calcule el día ordinal de ese jueves dentro de su año calendario; (3) divida entre 7 y redondee hacia arriba. El año ISO de una fecha puede diferir de su año gregoriano para fechas a finales de diciembre o principios de enero.' },
      { q: '¿Cuál es la diferencia entre las semanas ISO y las semanas de EE. UU.?', a: 'Las semanas ISO comienzan el lunes y la semana 1 contiene el primer jueves del año. Las semanas de EE. UU. comienzan el domingo, y la semana 1 es simplemente la semana que contiene el 1 de enero. Esto significa que los dos sistemas pueden diferir en una semana, especialmente a finales de diciembre y principios de enero. La mayoría de Europa y los negocios internacionales usan números de semana ISO.' },
      { q: '¿Cuándo comienza la semana 1 de {year}?', a: 'La semana ISO 1 de {year} comienza el {w1startFull}. Es el lunes de la semana que contiene el primer jueves de {year}, según lo especificado por ISO 8601.' },
    ],
  },
  pt: {
    titleTpl: 'Números da Semana {year} – Calendário ISO Completo | DateCalc',
    metaDescTpl: 'Lista completa dos números de semana ISO para {year}. Todas as {weeks} semanas com datas de início e fim. Calendário ISO gratuito.',
    kicker: 'Calendário de Semanas',
    headlineTpl: 'Semanas<br><em>{year}</em>',
    subheadTpl: 'Todos os números de semana ISO para {year}',
    weekLabel: 'Semana',
    fromLabel: 'De',
    toLabel: 'Até',
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    dayNames: ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
    currentWeekLabel: 'Semana atual',
    totalWeeksLabel: 'Semanas ISO totais',
    weeksInYear: 'semanas',
    seoH2a: 'O que são números de semana ISO?',
    seoP1: 'Os números de semana ISO 8601 numeriam as semanas de 1 a 52 (ou 53) a cada ano. A semana começa na segunda-feira e a primeira semana do ano é aquela que contém a primeira quinta-feira.',
    seoH2b: 'Como usar o calendário de semanas?',
    seoP2Tpl: 'Use este calendário para planejar projetos, verificar prazos, calcular períodos fiscais ou qualquer situação que exija referência a semanas numeradas.',
    faqTitle: 'Perguntas frequentes',
    source: null,
    faqsTpl: [
      { q: 'Quantas semanas tem o ano {year}?', a: '{year} tem {weeks} semanas segundo o calendário ISO 8601.' },
      { q: 'Quando começa a semana 1 de {year}?', a: 'A semana 1 de {year} começa em {w1startFull}.' },
    ],
  },
  de: {
    titleTpl: 'Kalenderwochen {year} – Vollständiger ISO-Kalender | DateCalc',
    metaDescTpl: 'Vollständige Liste der ISO-Kalenderwochen für {year}. Alle {weeks} Wochen mit Start- und Enddaten. Kostenloser ISO-Kalender.',
    kicker: 'Wochenkalender',
    headlineTpl: 'KW-Kalender<br><em>{year}</em>',
    subheadTpl: 'Alle ISO-Kalenderwochen für {year}',
    thWeek: 'KW', thFrom: 'Von', thTo: 'Bis',
    weekLabel: 'KW',
    fromLabel: 'Von',
    toLabel: 'Bis',
    monthNames: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
    dayNames: ['Mo','Di','Mi','Do','Fr','Sa','So'],
    currentWeekLabel: 'Aktuelle Woche',
    totalWeeksLabel: 'ISO-Wochen gesamt',
    weeksInYear: 'Wochen',
    seoH2a: 'Was sind ISO-Kalenderwochen?',
    seoP1: 'ISO 8601-Kalenderwochen nummerieren die Wochen von 1 bis 52 (oder 53) pro Jahr. Die Woche beginnt am Montag und die erste Woche des Jahres ist die, die den ersten Donnerstag enthält.',
    seoH2b: 'Wie verwendet man den Wochenkalender?',
    seoP2Tpl: 'Verwende diesen Kalender zur Projektplanung, Fristüberprüfung, Berechnung von Geschäftsquartalen oder für alle Situationen, die nummerierte Wochen erfordern.',
    faqTitle: 'Häufig gestellte Fragen',
    source: null,
    faqsTpl: [
      { q: 'Wie viele Wochen hat das Jahr {year}?', a: '{year} hat {weeks} Wochen gemäß ISO 8601-Kalender.' },
      { q: 'Wann beginnt Woche 1 des Jahres {year}?', a: 'Woche 1 des Jahres {year} beginnt am {w1startFull}.' },
    ],
  },
  it: {
    titleTpl: 'Numeri di Settimana {year} – Calendario ISO Completo | DateCalc',
    metaDescTpl: 'Lista completa dei numeri di settimana ISO per il {year}. Tutte le {weeks} settimane con date di inizio e fine. Calendario ISO gratuito.',
    kicker: 'Calendario Settimanale',
    headlineTpl: 'Calendario<br><em>{year}</em>',
    subheadTpl: 'Tutti i numeri di settimana ISO per il {year}',
    thWeek: 'Sett.', thFrom: 'Da', thTo: 'A',
    weekLabel: 'Sett.',
    fromLabel: 'Da',
    toLabel: 'A',
    monthNames: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
    dayNames: ['Lu','Ma','Me','Gi','Ve','Sa','Do'],
    currentWeekLabel: 'Settimana corrente',
    totalWeeksLabel: 'Settimane ISO totali',
    weeksInYear: 'settimane',
    seoH2a: 'Cosa sono i numeri di settimana ISO?',
    seoP1: 'I numeri di settimana ISO 8601 numerano le settimane da 1 a 52 (o 53) ogni anno. La settimana inizia il lunedì e la prima settimana dell\'anno è quella che contiene il primo giovedì.',
    seoH2b: 'Come usare il calendario settimanale?',
    seoP2Tpl: 'Usa questo calendario per pianificare progetti, verificare scadenze, calcolare trimestri fiscali o qualsiasi situazione che richieda settimane numerate.',
    faqTitle: 'Domande frequenti',
    source: null,
    faqsTpl: [
      { q: 'Quante settimane ha l\'anno {year}?', a: 'Il {year} ha {weeks} settimane secondo il calendario ISO 8601.' },
      { q: 'Quando inizia la settimana 1 del {year}?', a: 'La settimana 1 del {year} inizia il {w1startFull}.' },
    ],
  },
  pl: {
    titleTpl: 'Numery Tygodni {year} – Pełny Kalendarz ISO | DateCalc',
    metaDescTpl: 'Pełna lista numerów tygodni ISO dla roku {year}. Wszystkie {weeks} tygodnie z datami początku i końca. Bezpłatny kalendarz ISO.',
    kicker: 'Kalendarz Tygodniowy',
    headlineTpl: 'Kalendarz<br><em>{year}</em>',
    subheadTpl: 'Wszystkie numery tygodni ISO dla roku {year}',
    thWeek: 'Tydz.', thFrom: 'Od', thTo: 'Do',
    weekLabel: 'Tydz.',
    fromLabel: 'Od',
    toLabel: 'Do',
    monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
    dayNames: ['Pn','Wt','Śr','Cz','Pt','So','Nd'],
    currentWeekLabel: 'Bieżący tydzień',
    totalWeeksLabel: 'Łączna liczba tygodni ISO',
    weeksInYear: 'tygodni',
    seoH2a: 'Co to są numery tygodni ISO?',
    seoP1: 'Numery tygodni ISO 8601 numerują tygodnie od 1 do 52 (lub 53) w każdym roku. Tydzień zaczyna się w poniedziałek, a pierwszy tydzień roku to ten, który zawiera pierwszy czwartek.',
    seoH2b: 'Jak używać kalendarza tygodniowego?',
    seoP2Tpl: 'Używaj tego kalendarza do planowania projektów, sprawdzania terminów, obliczania kwartałów fiskalnych lub w każdej sytuacji wymagającej numerowanych tygodni.',
    faqTitle: 'Często zadawane pytania',
    source: null,
    faqsTpl: [
      { q: 'Ile tygodni ma rok {year}?', a: 'Rok {year} ma {weeks} tygodni według kalendarza ISO 8601.' },
      { q: 'Kiedy zaczyna się tydzień 1 roku {year}?', a: 'Tydzień 1 roku {year} zaczyna się {w1startFull}.' },
    ],
  },
};

// ── ISO week helpers ───────────────────────────────────────────────────────────

function getISOWeek(date) {
  var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  var day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return { week: Math.ceil((((d - yearStart) / 86400000) + 1) / 7), isoYear: d.getUTCFullYear() };
}

function weeksInISOYear(y) {
  // Dec 28 is always in the last ISO week of its year
  return getISOWeek(new Date(y, 11, 28)).week;
}

// Returns the Monday (local time) that starts ISO week 1 of the given year
function isoWeek1Monday(y) {
  // Jan 4 is always in ISO week 1
  var jan4 = new Date(y, 0, 4);
  var dow = (jan4.getDay() + 6) % 7; // 0=Mon … 6=Sun
  var mon = new Date(jan4);
  mon.setDate(jan4.getDate() - dow);
  return mon;
}

// Format as "D MonthName" using the t.monthNames array
function fmtDate(date, monthNames) {
  return date.getDate() + ' ' + monthNames[date.getMonth()];
}

// Format as "D MonthName YYYY"
function fmtDateFull(date, monthNames) {
  return date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
}

// ── Calendar HTML builder ──────────────────────────────────────────────────────

function buildCalendarHTML(year, t) {
  var totalWeeks = weeksInISOYear(year);

  // ── 1. Build week data array ────────────────────────────────────────────────
  // Each entry: { week, isoYear, mon, sun, primaryMonth }
  var weeks = [];
  var w1mon = isoWeek1Monday(year);
  for (var w = 1; w <= totalWeeks; w++) {
    var mon = new Date(w1mon);
    mon.setDate(w1mon.getDate() + (w - 1) * 7);
    var sun = new Date(mon);
    sun.setDate(mon.getDate() + 6);
    // Primary month = month of Thursday (middle of week)
    var thu = new Date(mon);
    thu.setDate(mon.getDate() + 3);
    weeks.push({ week: w, mon: mon, sun: sun, primaryMonth: thu.getMonth() });
  }

  // ── 2. Build mini-month calendars ───────────────────────────────────────────
  var monthHTMLs = [];
  for (var m = 0; m < 12; m++) {
    monthHTMLs.push(buildMiniMonth(year, m, t));
  }

  var calendarGrid = '<div class="year-calendar">\n' +
    monthHTMLs.join('\n') +
    '\n</div>';

  // ── 3. Build week table ─────────────────────────────────────────────────────
  var tableRows = weeks.map(function(wk) {
    return '    <tr data-week="' + wk.week + '">\n' +
      '      <td>' + wk.week + '</td>\n' +
      '      <td>' + fmtDateFull(wk.mon, t.monthNames) + '</td>\n' +
      '      <td>' + fmtDateFull(wk.sun, t.monthNames) + '</td>\n' +
      '      <td>' + t.monthNames[wk.primaryMonth] + '</td>\n' +
      '    </tr>';
  }).join('\n');

  var weekTable = '<table class="week-table">\n' +
    '  <thead><tr>' +
    '<th>' + t.weekLabel + '</th>' +
    '<th>' + t.fromLabel + '</th>' +
    '<th>' + t.toLabel + '</th>' +
    '<th></th>' +
    '</tr></thead>\n' +
    '  <tbody>\n' + tableRows + '\n  </tbody>\n' +
    '</table>';

  return calendarGrid + '\n' + weekTable;
}

function buildMiniMonth(year, month, t) {
  // Find first day of month
  var firstDay = new Date(year, month, 1);
  // Day-of-week of first day: 0=Mon … 6=Sun (ISO)
  var firstDow = (firstDay.getDay() + 6) % 7;
  // Total days in month
  var daysInMonth = new Date(year, month + 1, 0).getDate();

  // Build rows: each row is [weekNum, d1, d2, d3, d4, d5, d6, d7]
  // where null means empty cell (day from prev/next month)
  var rows = [];
  var dayPtr = 1 - firstDow; // can be negative (days from prev month shown as empty)

  while (dayPtr <= daysInMonth) {
    var row = [];
    for (var col = 0; col < 7; col++) {
      if (dayPtr < 1 || dayPtr > daysInMonth) {
        row.push(null);
      } else {
        row.push(dayPtr);
      }
      dayPtr++;
    }
    // Determine ISO week number for this row: use the first non-null day
    var firstInRow = null;
    for (var i = 0; i < 7; i++) {
      if (row[i] !== null) { firstInRow = row[i]; break; }
    }
    // If row starts with nulls, use day 1 offset backwards
    var sampleDate;
    if (firstInRow !== null) {
      sampleDate = new Date(year, month, firstInRow);
    } else {
      sampleDate = new Date(year, month, 1);
    }
    var wkInfo = getISOWeek(sampleDate);
    rows.push({ weekNum: wkInfo.week, days: row });
  }

  // Build header row: "MONTHNAME YEAR"
  var headerText = t.monthNames[month].toUpperCase() + ' ' + year;

  // Build table HTML
  var thCells = t.dayNames.map(function(d) { return '<th>' + d + '</th>'; }).join('');
  var tbodyRows = rows.map(function(r) {
    var dayCells = r.days.map(function(d) {
      if (d === null) return '<td class="other-month"></td>';
      return '<td>' + d + '</td>';
    }).join('');
    return '<tr><td class="wk-num">' + r.weekNum + '</td>' + dayCells + '</tr>';
  }).join('\n');

  return '<div class="mini-cal">' +
    '<div class="mini-cal-header">' + headerText + '</div>' +
    '<table>' +
    '<thead><tr><th></th>' + thCells + '</tr></thead>' +
    '<tbody>\n' + tbodyRows + '\n</tbody>' +
    '</table>' +
    '</div>';
}

// ── CSS styles ─────────────────────────────────────────────────────────────────

const CALENDAR_STYLES = `<style>
.year-calendar { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin: 1.5rem 0; }
.mini-cal { font-family: 'Space Mono', monospace; font-size: .72rem; }
.mini-cal-header { font-weight: bold; text-transform: uppercase; letter-spacing: .08em; margin-bottom: .5rem; color: var(--ink); font-size: .7rem; }
.mini-cal table { border-collapse: collapse; width: 100%; }
.mini-cal th { color: var(--muted); font-weight: normal; text-align: center; padding: .1rem .15rem; }
.mini-cal td { text-align: center; padding: .1rem .15rem; color: var(--ink); }
.mini-cal td.other-month { color: #ccc; }
.mini-cal td.wk-num { color: var(--accent); font-size: .65rem; text-align: right; padding-right: .3rem; border-right: 1px solid #eee; }
.week-table { width: 100%; border-collapse: collapse; margin-top: 1.5rem; font-size: .85rem; }
.week-table th { font-family: 'Space Mono', monospace; font-size: .6rem; letter-spacing: .1em; text-transform: uppercase; padding: .4rem .6rem; border-bottom: 2px solid var(--ink); text-align: left; }
.week-table td { padding: .35rem .6rem; border-bottom: 1px solid #eee; }
.week-table tr.current-week td { background: #fff8f0; font-weight: 600; }
.week-table tr.current-week td:first-child { color: var(--accent); }
@media(max-width:600px){ .year-calendar { grid-template-columns: 1fr; } }
</style>`;

// ── Main export ────────────────────────────────────────────────────────────────

module.exports = {
  pages: YEARS.map(function(y) {
    return {
      id: 'week-number-' + y,
      year: y,
      slugs: {
        en: 'week-number/' + y,
        fr: 'fr/numero-semaine/' + y,
        es: 'es/numero-semana/' + y,
        pt: 'pt/numero-da-semana/' + y,
        de: 'de/kalenderwoche/' + y,
        it: 'it/numero-settimana/' + y,
        pl: 'pl/numer-tygodnia/' + y,
      },
    };
  }),

  render(pageId, lang) {
    const year = parseInt(pageId.replace('week-number-', ''), 10);
    const t = T[lang];

    // ── Compute key values ──────────────────────────────────────────────────
    const totalWeeks = weeksInISOYear(year);
    const w1mon = isoWeek1Monday(year);
    const w1sun = new Date(w1mon); w1sun.setDate(w1mon.getDate() + 6);

    // Last week Monday/Sunday
    const lastMon = new Date(w1mon);
    lastMon.setDate(w1mon.getDate() + (totalWeeks - 1) * 7);
    const lastSun = new Date(lastMon);
    lastSun.setDate(lastMon.getDate() + 6);

    const w1startShort = fmtDate(w1mon, t.monthNames);      // e.g. "29 December"
    const w1endShort   = fmtDate(w1sun, t.monthNames);      // e.g. "4 January"
    const w1startFull  = fmtDateFull(w1mon, t.monthNames);  // e.g. "29 December 2025"
    const w1endFull    = fmtDateFull(w1sun, t.monthNames);  // e.g. "4 January 2026"
    const lastWeekEnd  = fmtDateFull(lastSun, t.monthNames);

    function tpl(str) {
      return str
        .replace(/\{year\}/g, year)
        .replace(/\{weeks\}/g, totalWeeks)
        .replace(/\{w1start\}/g, w1startShort)
        .replace(/\{w1end\}/g, w1endShort)
        .replace(/\{w1startFull\}/g, w1startFull)
        .replace(/\{w1endFull\}/g, w1endFull);
    }

    // ── Headline block ──────────────────────────────────────────────────────
    const headlineBlock = `  <div class="headline-block">
    <div class="kicker">${t.kicker}</div>
    <h1 class="headline">${tpl(t.headlineTpl)}</h1>
    <p class="subhead">${tpl(t.subheadTpl)}</p>
  </div>`;

    // ── No form ─────────────────────────────────────────────────────────────
    const formGrid = '';

    // ── Results section ─────────────────────────────────────────────────────
    const calendarHTML = buildCalendarHTML(year, t);

    const resultsSection = `  <div class="results-section auto-show" id="results">
${CALENDAR_STYLES}
    <div class="results-header">${t.weekLabel} — ${year}</div>
    <div class="facts-row">
      <div class="fact-item"><div class="fact-key">${t.totalWeeksLabel}</div><div class="fact-val">${totalWeeks} ${t.weeksInYear}</div></div>
      <div class="fact-item"><div class="fact-key">ISO ${t.weekLabel} 1</div><div class="fact-val">${w1startFull}</div></div>
      <div class="fact-item"><div class="fact-key">ISO ${t.weekLabel} ${totalWeeks}</div><div class="fact-val">${lastWeekEnd}</div></div>
    </div>
    ${calendarHTML}
  </div>`;

    // ── SEO block ───────────────────────────────────────────────────────────
    const computedFaqs = t.faqsTpl.map(function(f) {
      return { q: tpl(f.q), a: tpl(f.a) };
    });

    const faqHTML = computedFaqs.map(function(f) {
      return '    <div class="faq-item"><h3>' + f.q + '</h3><p>' + f.a + '</p></div>';
    }).join('\n');

    const seoBlock = `  <div class="seo-block">
    <div><h2>${t.seoH2a}</h2><p>${t.seoP1}</p></div>
    <div><h2>${tpl(t.seoH2b)}</h2><p>${tpl(t.seoP2Tpl)}</p></div>
  </div>
  <div class="faq-block">
    <h2>${t.faqTitle}</h2>
${faqHTML}
  </div>`;

    // ── Inline script (client-side: highlight current week) ─────────────────
    const script = `
(function(){
  var now = new Date();
  var pageYear = ${year};
  if(now.getFullYear() !== pageYear) return;
  var d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  var day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  var wn = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  var rows = document.querySelectorAll('.week-table tbody tr');
  rows.forEach(function(row){ if(parseInt(row.dataset.week) === wn) row.classList.add('current-week'); });
})();
`;

    // ── Title and meta ──────────────────────────────────────────────────────
    const title = tpl(t.titleTpl);
    const metaDesc = tpl(t.metaDescTpl);

    return {
      title,
      metaDesc,
      headlineBlock,
      formGrid,
      resultsSection,
      seoBlock,
      script,
      faqs: computedFaqs,
      source: t.source,
    };
  },
};
