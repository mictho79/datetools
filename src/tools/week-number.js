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
  pt: {
    title: 'Número da Semana Atual 2026 – Qual Semana ISO É Hoje?',
    metaDesc: 'Descubra o número da semana atual segundo o padrão ISO 8601. Mostra também as datas de início e fim da semana — grátis.',
    kicker: 'Número da Semana',
    headline: 'Qual é o número<br>da semana<br><em>de hoje?</em>',
    subhead: 'Semana atual segundo o padrão ISO 8601',
    dateLabel: 'Data (deixe em branco para hoje)',
    calcBtn: '→ Ver número da semana',
    tipText: '"Um ano tem 52 ou 53 semanas, mas a maioria das pessoas não sabe em qual semana está sem procurar."',
    resultsHeader: 'Semana atual',
    heroSuffix: 'de {year}',
    weekStartLbl: 'Semana começa', weekEndLbl: 'Semana termina',
    doyLbl: 'Dia do ano', doyLeftLbl: 'Dias restantes no ano',
    weekTotal: 'Semanas totais no ano',
    errInvalid: '→ Data inválida. Verifique sua entrada.',
    seoH2a: 'O que é número da semana ISO?',
    seoP1: 'O número da semana ISO 8601 é um sistema internacional que numera as semanas de 1 a 52 (ou 53) a partir do início do ano. A semana começa na segunda-feira e a primeira semana do ano é a que contém a primeira quinta-feira.',
    seoH2b: 'Como o número da semana é calculado?',
    seoP2: 'Segundo a norma ISO 8601, a semana 1 é a primeira semana com maioria dos dias no novo ano — ou seja, a semana que contém a primeira quinta-feira de janeiro. As semanas vão de segunda a domingo.',
    faqTitle: 'Perguntas frequentes',
    source: null,
    faqs: [
      { q: 'Quantas semanas tem um ano?', a: 'A maioria dos anos tem 52 semanas. Alguns anos têm 53 semanas — isso acontece quando o ano começa em quinta-feira, ou quando é bissexto e começa em quarta ou quinta-feira.' },
      { q: 'Em que dia começa a semana no padrão ISO?', a: 'No padrão ISO 8601, a semana começa na segunda-feira e termina no domingo.' },
      { q: 'Qual é o número da semana hoje?', a: 'Use esta calculadora — ela mostra o número da semana atual baseado na data de hoje, atualizado automaticamente.' },
    ],
    weekDays: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
    months: ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'],
  },
  de: {
    title: 'Aktuelle Kalenderwoche 2026 – Welche KW ist heute?',
    metaDesc: 'Aktuelle Kalenderwoche nach ISO 8601. Zeigt auch Start- und Enddatum der Woche — kostenlos.',
    kicker: 'Kalenderwoche',
    headline: 'Welche <em>Woche</em><br>ist heute?',
    subhead: 'Finde die ISO-Wochennummer für ein beliebiges Datum — oder sieh sofort die Wochennummer von heute.',
    dateLabel: 'Datum (leer lassen für heute)',
    calcBtn: '→ Wochennummer anzeigen',
    tipText: '"Ein Jahr hat 52 oder 53 Wochen, doch die meisten Menschen können nicht sagen, in welcher Woche sie sind, ohne nachzuschauen."',
    resultsHeader: 'Wochennummer',
    heroSuffix: 'von {year}',
    weekStartLbl: 'Woche beginnt', weekEndLbl: 'Woche endet',
    doyLbl: 'Tag des Jahres', doyLeftLbl: 'Verbleibende Tage im Jahr',
    weekTotal: 'Gesamtwochen im Jahr',
    errInvalid: '→ Ungültiges Datum. Bitte überprüfe deine Eingabe.',
    seoH2a: 'Was ist eine ISO-Wochennummer?',
    seoP1: 'ISO 8601 definiert ein standardisiertes System zur Nummerierung von Wochen innerhalb eines Jahres. Woche 1 ist die Woche, die den ersten Donnerstag des Jahres enthält, und Wochen laufen immer von Montag bis Sonntag. Diese Regel bedeutet, dass Woche 1 eines neuen Jahres tatsächlich Ende Dezember des Vorjahres beginnen kann — und umgekehrt können die letzten Dezembertage zur Woche 1 des folgenden Jahres gehören. Der 28. Dezember liegt immer in der letzten Woche seines ISO-Jahres. Dieses System wird in europäischen Unternehmen, Logistik, Produktion und Projektmanagement weit verbreitet eingesetzt.',
    seoH2b: 'Wann beginnt Woche 1?',
    seoP2: 'Die ISO-Woche 1 beginnt am Montag der Woche, die den 4. Januar des neuen Jahres enthält. Eine einfachere Merkregel: Woche 1 ist die erste Woche des Jahres, die mindestens vier Tage im Januar hat. Aufgrund dieser Regel können Jahre entweder 52 oder 53 ISO-Wochen haben. Ein Jahr hat 53 Wochen, wenn der 1. Januar auf einen Donnerstag fällt (oder auf einen Mittwoch in einem Schaltjahr). Das in den USA verwendete Wochen-Nummerierungssystem unterscheidet sich vom ISO-System.',
    faqTitle: 'Häufig gestellte Fragen',
    source: { url: 'https://www.iso.org/iso-8601-date-and-time-format.html', label: 'ISO 8601 – Wochennummerierungsstandard' },
    faqs: [
      { q: 'Welche Wochennummer haben wir diese Woche?', a: 'Der Rechner zeigt beim Öffnen der Seite automatisch die aktuelle ISO-Wochennummer an — keine Eingabe erforderlich. ISO-Wochen laufen von Montag bis Sonntag und es gibt 52 oder 53 pro Jahr. Du kannst auch ein beliebiges Datum eingeben, um dessen Wochennummer zu finden.' },
      { q: 'Wie viele Wochen hat ein Jahr?', a: 'Die meisten Jahre haben 52 ISO-Wochen. Manche Jahre haben 53 Wochen — das passiert, wenn der 1. Januar auf einen Donnerstag fällt oder auf einen Mittwoch in einem Schaltjahr. Die Jahre 2026, 2032 und 2037 sind kommende 53-Wochen-Jahre.' },
      { q: 'Was ist der Unterschied zwischen ISO- und US-Wochennummerierung?', a: 'ISO 8601-Wochen beginnen am Montag, und Woche 1 enthält den ersten Donnerstag des Jahres. Das US-System beginnt Wochen am Sonntag, und Woche 1 ist einfach die Woche, die den 1. Januar enthält. Die beiden Systeme können um bis zu einer Woche abweichen, besonders am Anfang und Ende des Jahres.' },
      { q: 'Wann beginnt Woche 1 im Jahr 2026?', a: 'ISO-Woche 1 von 2026 beginnt am Montag, dem 29. Dezember 2025 und endet am Sonntag, dem 4. Januar 2026. Das liegt daran, dass der 1. Januar 2026 auf einen Donnerstag fällt.' },
      { q: 'Warum beginnt Woche 1 manchmal im Dezember?', a: 'ISO 8601 definiert Woche 1 als die Woche, die den ersten Donnerstag des Jahres enthält. Wenn der 1. Januar auf einen Freitag, Samstag oder Sonntag fällt, gehören diese Tage zur Woche 52 oder 53 des Vorjahres.' },
      { q: 'Hat jedes Jahr 52 Wochen?', a: 'Die meisten Jahre haben 52 ISO-Wochen. Jahre, in denen der 1. Januar auf einen Donnerstag fällt (oder Mittwoch in Schaltjahren), haben 53 Wochen.' },
      { q: 'Welche Wochennummer für die Projektplanung?', a: 'In Projektmanagement und Produktion werden Wochennummern verwendet, um Lieferungen, Sprints und Meilensteine zu planen, ohne genaue Daten anzugeben. ISO-Wochennummern sind der internationale Standard dafür.' },
      { q: 'Was ist Woche 1 des Jahres 2025?', a: 'ISO-Woche 1 von 2025 beginnt am Montag, dem 30. Dezember 2024 und endet am Sonntag, dem 5. Januar 2025.' },
    ],
    weekDays: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
    months: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
  },
  it: {
    title: 'Numero Settimana Attuale 2026 – Che Settimana ISO È Oggi?',
    metaDesc: 'Scopri il numero della settimana corrente secondo lo standard ISO 8601. Mostra anche le date di inizio e fine settimana — gratis.',
    kicker: 'Numero Settimana',
    headline: 'Che <em>settimana</em><br>è oggi?',
    subhead: 'Trova il numero della settimana ISO per qualsiasi data — o vedi subito il numero della settimana di oggi.',
    dateLabel: 'Data (lascia vuoto per oggi)',
    calcBtn: '→ Vedi numero settimana',
    tipText: '"Un anno ha 52 o 53 settimane, eppure la maggior parte delle persone non sa in quale settimana si trova senza cercarlo."',
    resultsHeader: 'Numero settimana',
    heroSuffix: 'di {year}',
    weekStartLbl: 'Settimana inizia', weekEndLbl: 'Settimana finisce',
    doyLbl: 'Giorno dell\'anno', doyLeftLbl: 'Giorni rimanenti nell\'anno',
    weekTotal: 'Settimane totali nell\'anno',
    errInvalid: '→ Data non valida. Controlla il tuo input.',
    seoH2a: 'Cos\'è un numero di settimana ISO?',
    seoP1: 'ISO 8601 definisce un sistema standardizzato per numerare le settimane all\'interno di un anno. La settimana 1 è quella che contiene il primo giovedì dell\'anno, e le settimane vanno sempre da lunedì a domenica. Questa regola significa che la settimana 1 di un nuovo anno può iniziare a fine dicembre dell\'anno precedente — e viceversa, gli ultimi giorni di dicembre possono appartenere alla settimana 1 dell\'anno successivo. Il 28 dicembre è sempre nell\'ultima settimana del suo anno ISO. Questo sistema è ampiamente usato nelle aziende europee, logistica, produzione e gestione dei progetti.',
    seoH2b: 'Quando inizia la settimana 1?',
    seoP2: 'La settimana ISO 1 inizia il lunedì della settimana che contiene il 4 gennaio del nuovo anno. Un modo più semplice per ricordarlo: la settimana 1 è la prima settimana dell\'anno che ha almeno quattro giorni cadenti a gennaio. A causa di questa regola, gli anni possono avere 52 o 53 settimane ISO. Un anno ha 53 settimane quando il 1° gennaio cade di giovedì (o di mercoledì in un anno bisestile). Il sistema di numerazione delle settimane usato negli Stati Uniti differisce dall\'ISO.',
    faqTitle: 'Domande frequenti',
    source: { url: 'https://www.iso.org/iso-8601-date-and-time-format.html', label: 'ISO 8601 – Standard di numerazione settimane' },
    faqs: [
      { q: 'Qual è il numero della settimana questa settimana?', a: 'Il calcolatore mostra automaticamente il numero della settimana ISO corrente all\'apertura della pagina — nessun input necessario. Le settimane ISO vanno da lunedì a domenica e ce ne sono 52 o 53 per anno. Puoi anche inserire qualsiasi data per trovarne il numero della settimana.' },
      { q: 'Quante settimane ha un anno?', a: 'La maggior parte degli anni ha 52 settimane ISO. Alcuni anni ne hanno 53 — questo accade quando il 1° gennaio cade di giovedì, o di mercoledì in un anno bisestile. Gli anni 2026, 2032 e 2037 sono prossimi anni con 53 settimane.' },
      { q: 'Qual è la differenza tra la numerazione delle settimane ISO e quella americana?', a: 'Le settimane ISO 8601 iniziano il lunedì, e la settimana 1 contiene il primo giovedì dell\'anno. Il sistema americano inizia le settimane di domenica, e la settimana 1 è semplicemente quella che contiene il 1° gennaio. I due sistemi possono differire di una settimana, specialmente all\'inizio e alla fine dell\'anno.' },
      { q: 'Quando inizia la settimana 1 nel 2026?', a: 'La settimana ISO 1 del 2026 inizia lunedì 29 dicembre 2025 e finisce domenica 4 gennaio 2026. Questo perché il 1° gennaio 2026 cade di giovedì.' },
      { q: 'Perché la settimana 1 a volte inizia a dicembre?', a: 'ISO 8601 definisce la settimana 1 come quella che contiene il primo giovedì dell\'anno. Se il 1° gennaio cade di venerdì, sabato o domenica, quei giorni appartengono alla settimana 52 o 53 dell\'anno precedente.' },
      { q: 'Ogni anno ha 52 settimane?', a: 'La maggior parte degli anni ha 52 settimane ISO. Gli anni in cui il 1° gennaio cade di giovedì (o mercoledì negli anni bisestili) hanno 53 settimane.' },
      { q: 'Quale numero di settimana usare nella pianificazione di progetto?', a: 'Nella gestione dei progetti e nella produzione, i numeri delle settimane vengono usati per pianificare consegne, sprint e milestone senza specificare date esatte. I numeri delle settimane ISO sono lo standard internazionale per questo.' },
      { q: 'Qual è la settimana 1 del 2025?', a: 'La settimana ISO 1 del 2025 inizia lunedì 30 dicembre 2024 e finisce domenica 5 gennaio 2025.' },
    ],
    weekDays: ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],
    months: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
  },
  pl: {
    title: 'Aktualny Numer Tygodnia 2026 – Który Tydzień ISO Jest Dziś?',
    metaDesc: 'Sprawdź aktualny numer tygodnia według normy ISO 8601. Pokazuje też daty początku i końca tygodnia — za darmo.',
    kicker: 'Numer Tygodnia',
    headline: 'Który <em>tydzień</em><br>jest dziś?',
    subhead: 'Znajdź numer tygodnia ISO dla dowolnej daty — lub zobacz numer tygodnia z dzisiaj od razu.',
    dateLabel: 'Data (zostaw puste dla dzisiaj)',
    calcBtn: '→ Pokaż numer tygodnia',
    tipText: '"Rok ma 52 lub 53 tygodnie, a jednak większość ludzi nie wie, w którym tygodniu jest, bez sprawdzenia."',
    resultsHeader: 'Numer tygodnia',
    heroSuffix: 'z {year}',
    weekStartLbl: 'Tydzień zaczyna się', weekEndLbl: 'Tydzień kończy się',
    doyLbl: 'Dzień roku', doyLeftLbl: 'Pozostałe dni w roku',
    weekTotal: 'Łączna liczba tygodni w roku',
    errInvalid: '→ Nieprawidłowa data. Sprawdź swój wpis.',
    seoH2a: 'Co to jest numer tygodnia ISO?',
    seoP1: 'ISO 8601 definiuje znormalizowany system numerowania tygodni w roku. Tydzień 1 to tydzień zawierający pierwszy czwartek roku, a tygodnie zawsze biegną od poniedziałku do niedzieli. Reguła ta oznacza, że tydzień 1 nowego roku może faktycznie zaczynać się pod koniec grudnia poprzedniego roku — i odwrotnie, ostatnie dni grudnia mogą należeć do tygodnia 1 następnego roku. 28 grudnia zawsze leży w ostatnim tygodniu swojego roku ISO. System ten jest powszechnie stosowany w europejskich przedsiębiorstwach, logistyce, produkcji i zarządzaniu projektami.',
    seoH2b: 'Kiedy zaczyna się tydzień 1?',
    seoP2: 'Tydzień ISO 1 zaczyna się w poniedziałek tygodnia zawierającego 4 stycznia nowego roku. Prostszy sposób zapamiętania: tydzień 1 to pierwszy tydzień roku, który ma co najmniej cztery dni przypadające w styczniu. Ze względu na tę regułę lata mogą mieć 52 lub 53 tygodnie ISO. Rok ma 53 tygodnie, gdy 1 stycznia przypada na czwartek (lub na środę w roku przestępnym). System numerowania tygodni stosowany w Stanach Zjednoczonych różni się od ISO.',
    faqTitle: 'Często zadawane pytania',
    source: { url: 'https://www.iso.org/iso-8601-date-and-time-format.html', label: 'ISO 8601 – Standard numerowania tygodni' },
    faqs: [
      { q: 'Jaki numer tygodnia mamy w tym tygodniu?', a: 'Kalkulator automatycznie pokazuje aktualny numer tygodnia ISO po otwarciu strony — nie trzeba nic wpisywać. Tygodnie ISO biegną od poniedziałku do niedzieli i jest ich 52 lub 53 w roku. Możesz też wpisać dowolną datę, aby znaleźć jej numer tygodnia.' },
      { q: 'Ile tygodni ma rok?', a: 'Większość lat ma 52 tygodnie ISO. Niektóre lata mają 53 tygodnie — dzieje się to, gdy 1 stycznia przypada na czwartek lub na środę w roku przestępnym. Lata 2026, 2032 i 2037 to nadchodzące lata z 53 tygodniami.' },
      { q: 'Jaka jest różnica między numeracją tygodni ISO a amerykańską?', a: 'Tygodnie ISO 8601 zaczynają się w poniedziałek, a tydzień 1 zawiera pierwszy czwartek roku. System amerykański zaczyna tygodnie od niedzieli, a tydzień 1 to po prostu tydzień zawierający 1 stycznia. Oba systemy mogą różnić się o tydzień, szczególnie na początku i końcu roku.' },
      { q: 'Kiedy zaczyna się tydzień 1 w 2026 roku?', a: 'Tydzień ISO 1 roku 2026 zaczyna się w poniedziałek 29 grudnia 2025 i kończy w niedzielę 4 stycznia 2026. Dzieje się tak, ponieważ 1 stycznia 2026 przypada na czwartek.' },
      { q: 'Dlaczego tydzień 1 czasami zaczyna się w grudniu?', a: 'ISO 8601 definiuje tydzień 1 jako tydzień zawierający pierwszy czwartek roku. Jeśli 1 stycznia wypada w piątek, sobotę lub niedzielę, te dni należą do tygodnia 52 lub 53 poprzedniego roku.' },
      { q: 'Czy każdy rok ma 52 tygodnie?', a: 'Większość lat ma 52 tygodnie ISO. Lata, w których 1 stycznia przypada na czwartek (lub środę w latach przestępnych), mają 53 tygodnie.' },
      { q: 'Jaki numer tygodnia stosować w planowaniu projektów?', a: 'W zarządzaniu projektami i produkcji numery tygodni są używane do planowania dostaw, sprintów i kamieni milowych bez podawania dokładnych dat. Numery tygodni ISO są międzynarodowym standardem w tym zakresie.' },
      { q: 'Co to jest tydzień 1 roku 2025?', a: 'Tydzień ISO 1 roku 2025 zaczyna się w poniedziałek 30 grudnia 2024 i kończy w niedzielę 5 stycznia 2025.' },
    ],
    weekDays: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
    months: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
  },
  ja: {
    title: '今週の週番号 2026 – 今日はISO何週目？',
    metaDesc: 'ISO 8601規格に基づく今週の週番号を確認できます。週の開始日と終了日も表示 — 無料。',
    kicker: '週番号',
    headline: '今日は<em>第何週</em><br>ですか？',
    subhead: '任意の日付のISO週番号を検索、または今日の週番号を即座に確認できます。',
    dateLabel: '日付（空白の場合は今日）',
    calcBtn: '→ 週番号を表示',
    tipText: '"1年は52週または53週ありますが、確認しなければ今が何週目かわからない人が大半です。"',
    resultsHeader: '週番号',
    heroSuffix: '{year}年の',
    weekStartLbl: '週の開始日', weekEndLbl: '週の終了日',
    doyLbl: '年間通算日', doyLeftLbl: '年間残り日数',
    weekTotal: '年間総週数',
    errInvalid: '→ 無効な日付です。入力を確認してください。',
    seoH2a: 'ISO週番号とは何ですか？',
    seoP1: 'ISO 8601は標準化された週番号システムを定義しています。第1週はその年の最初の木曜日を含む週で、週は常に月曜日から日曜日です。このルールにより、新年の第1週は前年の12月末から始まることがあります。また逆に、12月末の数日が翌年の第1週に属することもあります。12月28日は常にそのISO年の最終週に含まれます。このシステムはヨーロッパのビジネス、物流、製造業、プロジェクト管理で広く使用されています。',
    seoH2b: '第1週はいつ始まりますか？',
    seoP2: 'ISO第1週は新年の1月4日を含む週の月曜日から始まります。覚え方の簡単なルール：第1週は1月に少なくとも4日含まれる最初の週です。このルールにより、年によって52週または53週となります。1月1日が木曜日（閏年は水曜日）の場合は53週になります。',
    faqTitle: 'よくある質問',
    source: { url: 'https://www.iso.org/iso-8601-date-and-time-format.html', label: 'ISO 8601 – 週番号規格' },
    faqs: [
      { q: '今週は第何週ですか？', a: 'ページを開くと自動的に現在のISO週番号が表示されます。ISO週は月曜日から日曜日で、1年に52週または53週あります。任意の日付を入力してその週番号を確認することもできます。' },
      { q: '1年は何週ありますか？', a: 'ほとんどの年はISO週が52週あります。一部の年には53週があります。1月1日が木曜日、または閏年で水曜日の場合です。2026年、2032年、2037年が今後53週になる年です。' },
      { q: 'ISO週番号とアメリカの週番号の違いは？', a: 'ISO 8601の週は月曜日から始まり、第1週は最初の木曜日を含む週です。アメリカのシステムは日曜日から週が始まり、第1週は1月1日を含む週です。両システムは特に年の始まりと終わりに1週ずれることがあります。' },
      { q: '2026年の第1週はいつ始まりますか？', a: '2026年のISO第1週は2025年12月29日（月曜日）から始まり2026年1月4日（日曜日）に終わります。2026年1月1日が木曜日のためです。' },
      { q: 'なぜ第1週が12月から始まることがあるのですか？', a: 'ISO 8601は第1週をその年の最初の木曜日を含む週と定義しています。1月1日が金曜日、土曜日、または日曜日の場合、それらの日は前年の第52週または第53週に属します。' },
      { q: '毎年52週ありますか？', a: 'ほとんどの年はISO週52週があります。1月1日が木曜日（または閏年で水曜日）の年は53週になります。' },
      { q: 'プロジェクト計画で使う週番号は？', a: 'プロジェクト管理や製造業では、正確な日付を指定せずに納期、スプリント、マイルストーンを計画するために週番号が使われます。ISO週番号はその国際標準です。' },
      { q: '2025年の第1週とは？', a: '2025年のISO第1週は2024年12月30日（月曜日）から2025年1月5日（日曜日）まで続きます。' },
    ],
    weekDays: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
    months: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  },
  ko: {
    title: '이번 주 주 번호 2026 – 오늘은 ISO 몇 주차?',
    metaDesc: 'ISO 8601 기준에 따른 이번 주의 주 번호를 확인하세요. 주의 시작일과 종료일도 표시 — 무료.',
    kicker: '주 번호',
    headline: '오늘은 <em>몇 주차</em><br>인가요?',
    subhead: '임의의 날짜의 ISO 주 번호를 검색하거나, 오늘의 주 번호를 즉시 확인하세요.',
    dateLabel: '날짜 (비워두면 오늘)',
    calcBtn: '→ 주 번호 표시',
    tipText: '"1년은 52주 또는 53주이지만, 확인하지 않으면 몇 주차인지 모르는 사람이 대부분입니다."',
    resultsHeader: '주 번호',
    heroSuffix: '{year}년의',
    weekStartLbl: '주 시작일', weekEndLbl: '주 종료일',
    doyLbl: '연간 통산 일수', doyLeftLbl: '연간 남은 일수',
    weekTotal: '연간 총 주 수',
    errInvalid: '→ 유효하지 않은 날짜입니다. 입력을 확인하세요.',
    seoH2a: 'ISO 주 번호란 무엇인가요?',
    seoP1: 'ISO 8601은 표준화된 주 번호 시스템을 정의합니다. 제1주는 그 해의 첫 번째 목요일을 포함하는 주이며, 주는 항상 월요일부터 일요일입니다. 이 규칙으로 인해 새해 제1주는 전년도 12월 말부터 시작될 수 있습니다. 12월 28일은 항상 그 ISO 연도의 마지막 주에 포함됩니다. 이 시스템은 유럽의 비즈니스, 물류, 제조업, 프로젝트 관리에서 널리 사용됩니다.',
    seoH2b: '제1주는 언제 시작하나요?',
    seoP2: 'ISO 제1주는 새해 1월 4일을 포함하는 주의 월요일부터 시작합니다. 기억하기 쉬운 규칙: 제1주는 1월에 최소 4일이 포함되는 첫 번째 주입니다. 이 규칙으로 인해 연도에 따라 52주 또는 53주가 됩니다.',
    faqTitle: '자주 묻는 질문',
    source: { url: 'https://www.iso.org/iso-8601-date-and-time-format.html', label: 'ISO 8601 – 주 번호 표준' },
    faqs: [
      { q: '이번 주는 몇 주차인가요?', a: '페이지를 열면 자동으로 현재 ISO 주 번호가 표시됩니다. ISO 주는 월요일부터 일요일이며 1년에 52주 또는 53주입니다. 임의의 날짜를 입력하여 해당 주 번호를 확인할 수도 있습니다.' },
      { q: '1년은 몇 주인가요?', a: '대부분의 해는 ISO 주가 52주입니다. 1월 1일이 목요일이거나 윤년의 수요일인 경우 53주가 됩니다. 2026년, 2032년, 2037년이 53주인 해입니다.' },
      { q: 'ISO 주 번호와 미국 주 번호의 차이는?', a: 'ISO 8601 주는 월요일부터 시작하고 제1주는 첫 번째 목요일을 포함하는 주입니다. 미국 시스템은 일요일부터 시작하고 제1주는 1월 1일을 포함하는 주입니다. 두 시스템은 특히 연초와 연말에 1주 차이날 수 있습니다.' },
      { q: '2026년 제1주는 언제 시작하나요?', a: '2026년 ISO 제1주는 2025년 12월 29일(월요일)부터 시작하여 2026년 1월 4일(일요일)에 끝납니다. 2026년 1월 1일이 목요일이기 때문입니다.' },
      { q: '왜 제1주가 12월부터 시작되는 경우가 있나요?', a: 'ISO 8601은 제1주를 그 해의 첫 번째 목요일을 포함하는 주로 정의합니다. 1월 1일이 금요일, 토요일 또는 일요일인 경우, 그 날들은 전년도의 제52주 또는 제53주에 속합니다.' },
      { q: '매년 52주인가요?', a: '대부분의 해는 ISO 주가 52주입니다. 1월 1일이 목요일(또는 윤년의 수요일)인 해는 53주가 됩니다.' },
      { q: '프로젝트 계획에서 주 번호를 사용하는 방법은?', a: '프로젝트 관리와 제조업에서는 정확한 날짜를 지정하지 않고 납기, 스프린트, 마일스톤을 계획하기 위해 주 번호를 사용합니다.' },
      { q: '2025년 제1주란?', a: '2025년 ISO 제1주는 2024년 12월 30일(월요일)부터 2025년 1월 5일(일요일)까지입니다.' },
    ],
    weekDays: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
    months: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
  },
  nl: {
    title: 'Huidig Weeknummer 2026 – Welke ISO-week Is Het Vandaag?',
    metaDesc: 'Controleer het huidige weeknummer volgens ISO 8601. Toont ook begin- en einddatum van de week — gratis.',
    kicker: 'Weeknummer',
    headline: 'Welke <em>week</em><br>is het vandaag?',
    subhead: 'Vind het ISO-weeknummer voor een willekeurige datum — of bekijk het weeknummer van vandaag direct.',
    dateLabel: 'Datum (leeg laten voor vandaag)',
    calcBtn: '→ Weeknummer tonen',
    tipText: '"Een jaar heeft 52 of 53 weken, maar de meeste mensen weten niet in welke week ze zitten zonder het te controleren."',
    resultsHeader: 'Weeknummer',
    heroSuffix: 'van {year}',
    weekStartLbl: 'Week begint op', weekEndLbl: 'Week eindigt op',
    doyLbl: 'Dag van het jaar', doyLeftLbl: 'Resterende dagen in het jaar',
    weekTotal: 'Totaal aantal weken in het jaar',
    errInvalid: '→ Ongeldige datum. Controleer je invoer.',
    seoH2a: 'Wat is een ISO-weeknummer?',
    seoP1: 'ISO 8601 definieert een gestandaardiseerd systeem voor weeknummering in een jaar. Week 1 is de week met de eerste donderdag van het jaar, en weken lopen altijd van maandag tot zondag. Deze regel betekent dat week 1 van het nieuwe jaar feitelijk in december van het vorige jaar kan beginnen — en omgekeerd kunnen de laatste dagen van december tot week 1 van het volgende jaar behoren. 28 december valt altijd in de laatste week van zijn ISO-jaar. Dit systeem wordt veel gebruikt in Europese bedrijven, logistiek, productie en projectbeheer.',
    seoH2b: 'Wanneer begint week 1?',
    seoP2: 'ISO-week 1 begint op de maandag van de week die 4 januari van het nieuwe jaar bevat. Een eenvoudigere manier om het te onthouden: week 1 is de eerste week van het jaar met minstens vier dagen in januari. Door deze regel kunnen jaren 52 of 53 ISO-weken hebben. Een jaar heeft 53 weken wanneer 1 januari op een donderdag valt (of op een woensdag in een schrikkeljaar).',
    faqTitle: 'Veelgestelde vragen',
    source: { url: 'https://www.iso.org/iso-8601-date-and-time-format.html', label: 'ISO 8601 – Weeknummerstandaard' },
    faqs: [
      { q: 'Welk weeknummer is het deze week?', a: 'De calculator toont automatisch het huidige ISO-weeknummer zodra je de pagina opent — je hoeft niets in te voeren. ISO-weken lopen van maandag tot zondag en er zijn 52 of 53 per jaar. Je kunt ook een datum invoeren om het weeknummer te vinden.' },
      { q: 'Hoeveel weken heeft een jaar?', a: 'De meeste jaren hebben 52 ISO-weken. Sommige jaren hebben 53 weken — dit gebeurt wanneer 1 januari op een donderdag valt of op een woensdag in een schrikkeljaar. 2026, 2032 en 2037 zijn komende jaren met 53 weken.' },
      { q: 'Wat is het verschil tussen ISO- en Amerikaanse weeknummering?', a: 'ISO 8601-weken beginnen op maandag, en week 1 bevat de eerste donderdag van het jaar. Het Amerikaanse systeem begint weken op zondag, en week 1 is gewoon de week met 1 januari. Beide systemen kunnen een week verschillen, met name aan het begin en einde van het jaar.' },
      { q: 'Wanneer begint week 1 in 2026?', a: 'ISO-week 1 van 2026 begint op maandag 29 december 2025 en eindigt op zondag 4 januari 2026. Dat komt omdat 1 januari 2026 op een donderdag valt.' },
      { q: 'Waarom begint week 1 soms in december?', a: 'ISO 8601 definieert week 1 als de week met de eerste donderdag van het jaar. Als 1 januari op een vrijdag, zaterdag of zondag valt, behoren die dagen tot week 52 of 53 van het vorige jaar.' },
      { q: 'Heeft elk jaar 52 weken?', a: 'De meeste jaren hebben 52 ISO-weken. Jaren waarbij 1 januari op een donderdag (of woensdag in schrikkeljaren) valt, hebben 53 weken.' },
      { q: 'Welk weeknummer gebruik je bij projectplanning?', a: 'In projectbeheer en productie worden weeknummers gebruikt om leveringen, sprints en mijlpalen te plannen zonder exacte datums te geven. ISO-weeknummers zijn daarvoor de internationale standaard.' },
      { q: 'Wat is week 1 van 2025?', a: 'ISO-week 1 van 2025 begint op maandag 30 december 2024 en eindigt op zondag 5 januari 2025.' },
    ],
    weekDays: ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'],
    months: ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'],
  },
};

module.exports = {
  pages: [
    { id: 'week-number', slugs: { en: 'week-number', fr: 'fr/numero-semaine', es: 'es/numero-semana', pt: 'pt/numero-da-semana', de: 'de/kalenderwoche', it: 'it/numero-settimana', pl: 'pl/numer-tygodnia', ja: 'ja/shuu-bangou', ko: 'ko/ju-beonho', nl: 'nl/weeknummer' } },
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
