// What Day Is It Today

const T = {
  en: {
    title: 'What Day Is It Today? – Day of Week for Any Date | DateCalc.app',
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
    title: 'Quel jour sommes-nous ? – Jour de la semaine pour n\'importe quelle date | DateCalc.app',
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
    title: '¿Qué día es hoy? – Día de la semana para cualquier fecha | DateCalc.app',
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
  pt: {
    title: 'Que Dia É Hoje? Data e Hora Atual 2026 | DateCalc',
    metaDesc: 'Descubra que dia é hoje — data completa, dia da semana, número da semana ISO e horário atual. Atualizado em tempo real.',
    kicker: 'Que Dia É Hoje',
    headline: 'Que dia<br>é<br><em>hoje?</em>',
    subhead: 'Data, dia da semana e número da semana atuais',
    dateLabel: 'Data (deixe em branco para hoje)',
    calcBtn: '→ Verificar',
    tipText: '"Segunda-feira é um estado mental. Mas pelo menos agora você sabe em qual está."',
    resultsHeader: 'Hoje',
    dayLbl: 'Dia da semana', dateLbl: 'Data completa',
    doyLbl: 'Dia do ano', weekNumLbl: 'Número da semana',
    doyLeftLbl: 'Dias restantes no ano', leapLbl: 'Ano bissexto',
    yes: 'Sim', no: 'Não',
    errInvalid: '→ Data inválida. Verifique sua entrada.',
    seoH2a: 'Que dia é hoje?',
    seoP1: 'Esta página mostra a data de hoje em tempo real, incluindo o dia da semana, o número da semana ISO e a hora atual no seu fuso horário local.',
    seoH2b: 'Como funciona o cálculo do dia da semana?',
    seoP2: 'O dia da semana é calculado com base na data atual do seu dispositivo. O número da semana segue o padrão ISO 8601, onde a semana começa na segunda-feira.',
    faqTitle: 'Perguntas frequentes',
    source: null,
    faqs: [
      { q: 'Que dia é hoje?', a: 'Esta página mostra a data de hoje em tempo real. Acesse-a para ver a data atual, o dia da semana e o número da semana ISO.' },
      { q: 'Como saber em que semana do ano estamos?', a: 'O número da semana ISO é mostrado automaticamente nesta página. Ele é calculado conforme o padrão ISO 8601.' },
      { q: 'A hora mostrada é a hora local?', a: 'Sim. A hora exibida é baseada no fuso horário configurado no seu dispositivo.' },
    ],
    weekDays: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
    months: ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'],
  },
  de: {
    title: 'Welcher Tag Ist Heute? – Wochentag für jedes Datum | DateCalc.app',
    metaDesc: 'Finde heraus, welcher Tag heute ist, oder suche den Wochentag für ein beliebiges Datum. Zeigt Tagnummer, Wochennummer und verbleibende Tage im Jahr.',
    kicker: 'Welcher Tag ist heute?',
    headline: 'Welcher <em>Tag</em><br>ist heute?',
    subhead: 'Sieh sofort den heutigen Tag, oder finde den Wochentag für ein beliebiges Datum.',
    dateLabel: 'Datum (leer lassen für heute)',
    calcBtn: '→ Datum prüfen',
    tipText: '"Montag ist ein Geisteszustand. Aber jetzt weißt du wenigstens, in welchem du dich befindest."',
    resultsHeader: 'Datum-Informationen',
    dayLbl: 'Wochentag', dateLbl: 'Vollständiges Datum',
    doyLbl: 'Tag des Jahres', weekNumLbl: 'Wochennummer',
    doyLeftLbl: 'Verbleibende Tage im Jahr', leapLbl: 'Schaltjahr',
    yes: 'Ja', no: 'Nein',
    errInvalid: '→ Ungültiges Datum. Bitte überprüfe deine Eingabe.',
    seoH2a: 'Welcher Wochentag ist ein bestimmtes Datum?',
    seoP1: 'Um den Wochentag eines beliebigen Datums zu finden, haben Mathematiker mehrere elegante Algorithmen entwickelt. Zellers Kongruenz verwendet modulare Arithmetik, um den Tag direkt aus Tag-, Monats- und Jahreswerten zu berechnen. Der Doomsday-Algorithmus, erfunden von Mathematiker John Conway, nutzt die Tatsache, dass bestimmte einprägsame Daten (4/4, 6/6, 8/8, 10/10, 12/12 und andere) immer auf denselben Wochentag in einem bestimmten Jahr fallen. Für den täglichen Gebrauch erledigt unser Rechner all das automatisch: Gib ein beliebiges Datum von 1900 bis 2100 ein und sieh sofort, auf welchen Wochentag es fällt.',
    seoH2b: 'Wie viele Tage hat jeder Monat?',
    seoP2: 'Januar, März, Mai, Juli, August, Oktober und Dezember haben 31 Tage. April, Juni, September und November haben 30 Tage. Februar hat 28 Tage in einem normalen Jahr und 29 Tage in einem Schaltjahr. Ein Schaltjahr tritt in jedem durch 4 teilbaren Jahr auf, außer bei Jahrhundertjahren (durch 100 teilbar), die auch durch 400 teilbar sein müssen. So war 2000 ein Schaltjahr, aber 1900 nicht.',
    faqTitle: 'Häufig gestellte Fragen',
    source: { url: 'https://en.wikipedia.org/wiki/Gregorian_calendar', label: 'Wikipedia – Gregorianischer Kalender' },
    faqs: [
      { q: 'Welcher Tag ist heute?', a: 'Öffne diese Seite, um den heutigen Wochentag automatisch angezeigt zu bekommen. Das angezeigte Datum basiert auf deiner lokalen Zeitzone. Keine Eingabe erforderlich — das Ergebnis wird sofort beim Laden der Seite angezeigt.' },
      { q: 'Welcher Tag war der 1. Januar 2000?', a: 'Der 1. Januar 2000 war ein Samstag. Dies war auch der erste Tag des neuen Millenniums. Du kannst dies überprüfen, indem du 01/01/2000 in das Datumsfeld oben eingibst.' },
      { q: 'An welchem Wochentag wurde ich geboren?', a: 'Gib dein Geburtsdatum in das Feld oben ein und der Rechner sagt dir, an welchem Wochentag du geboren wurdest. Du kannst auch prüfen, auf welchen Tag dein nächster Geburtstag fällt.' },
      { q: 'Welcher Tag wird es in 100 Tagen sein?', a: 'Für diese Berechnung verwende unseren Datumsrechner, der es dir ermöglicht, Tage zu einem Datum zu addieren.' },
      { q: 'Was ist der Doomsday-Algorithmus?', a: 'Der Doomsday-Algorithmus ist eine mentale Rechenmethode, die von John Conway erfunden wurde und es ermöglicht, den Wochentag eines beliebigen Datums im Kopf zu berechnen. Für 2026 ist der Doomsday Montag.' },
      { q: 'Auf welchen Tag fällt Weihnachten 2026?', a: 'Weihnachten 2026 (25. Dezember 2026) fällt auf einen Freitag. Gib 25/12/2026 oben ein, um es zu bestätigen.' },
      { q: 'Welcher Tag war ein Datum in der Vergangenheit?', a: 'Gib ein beliebiges historisches Datum zwischen dem 1. Januar 1900 und dem 31. Dezember 2100 in das Datumsfeld oben ein.' },
      { q: 'Auf welchen Wochentag fällt mein nächster Geburtstag?', a: 'Gib deinen nächsten Geburtstag in das Datumsfeld ein. Das Ergebnis zeigt den genauen Wochentag an. Wenn dein Geburtstag zum Beispiel der 15. Juni ist, gib 15/06/2026 ein, um zu sehen, dass es ein Montag ist.' },
    ],
    weekDays: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
    months: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
  },
  it: {
    title: 'Che Giorno È Oggi? – Giorno della Settimana per Qualsiasi Data | DateCalc.app',
    metaDesc: 'Scopri che giorno è oggi, o cerca il giorno della settimana per qualsiasi data. Mostra numero del giorno, settimana e giorni rimanenti nell\'anno.',
    kicker: 'Che giorno è oggi?',
    headline: 'Che <em>giorno</em><br>è oggi?',
    subhead: 'Vedi subito il giorno di oggi, o cerca il giorno della settimana per qualsiasi data.',
    dateLabel: 'Data (lascia vuoto per oggi)',
    calcBtn: '→ Controlla data',
    tipText: '"Lunedì è uno stato mentale. Ma almeno ora sai in quale ti trovi."',
    resultsHeader: 'Informazioni data',
    dayLbl: 'Giorno della settimana', dateLbl: 'Data completa',
    doyLbl: 'Giorno dell\'anno', weekNumLbl: 'Numero settimana',
    doyLeftLbl: 'Giorni rimanenti nell\'anno', leapLbl: 'Anno bisestile',
    yes: 'Sì', no: 'No',
    errInvalid: '→ Data non valida. Controlla il tuo input.',
    seoH2a: 'Che giorno della settimana è una data?',
    seoP1: 'Per trovare il giorno della settimana di qualsiasi data, i matematici hanno sviluppato diversi algoritmi eleganti. La congruenza di Zeller usa l\'aritmetica modulare per calcolare il giorno direttamente dai valori di giorno, mese e anno. L\'algoritmo del Giorno del Giudizio, inventato dal matematico John Conway, sfrutta il fatto che certe date memorabili (4/4, 6/6, 8/8, 10/10, 12/12 e altre) cadono sempre nello stesso giorno della settimana in un dato anno. Per uso quotidiano, il nostro calcolatore fa tutto questo automaticamente: inserisci qualsiasi data dal 1900 al 2100 e vedi immediatamente in quale giorno della settimana cade.',
    seoH2b: 'Quanti giorni ha ogni mese?',
    seoP2: 'Gennaio, marzo, maggio, luglio, agosto, ottobre e dicembre hanno 31 giorni. Aprile, giugno, settembre e novembre hanno 30 giorni. Febbraio ha 28 giorni in un anno normale e 29 giorni in un anno bisestile. Un anno bisestile si verifica ogni anno divisibile per 4, tranne i secoli (divisibili per 100) che devono anche essere divisibili per 400. Così il 2000 fu bisestile, ma il 1900 no.',
    faqTitle: 'Domande frequenti',
    source: { url: 'https://en.wikipedia.org/wiki/Gregorian_calendar', label: 'Wikipedia – Calendario Gregoriano' },
    faqs: [
      { q: 'Che giorno è oggi?', a: 'Apri questa pagina per vedere automaticamente il giorno della settimana di oggi. La data mostrata si basa sul tuo fuso orario locale. Non è necessario alcun input — il risultato si aggiorna istantaneamente al caricamento della pagina.' },
      { q: 'Che giorno era il 1° gennaio 2000?', a: 'Il 1° gennaio 2000 era un sabato. Era anche il primo giorno del nuovo millennio. Puoi verificarlo inserendo 01/01/2000 nel campo della data sopra.' },
      { q: 'In che giorno della settimana sono nato?', a: 'Inserisci la tua data di nascita nel campo sopra e il calcolatore ti dirà in che giorno della settimana sei nato. Puoi anche controllare in che giorno cadrà il tuo prossimo compleanno.' },
      { q: 'Che giorno sarà tra 100 giorni?', a: 'Per quel calcolo, usa il nostro strumento Calcolatore di Date che ti permette di aggiungere giorni a una data.' },
      { q: 'Cos\'è l\'algoritmo del Giorno del Giudizio?', a: 'L\'algoritmo del Giorno del Giudizio è un metodo di calcolo mentale inventato da John Conway che permette di calcolare il giorno della settimana di qualsiasi data a mente. Per il 2026, il Giorno del Giudizio è lunedì.' },
      { q: 'Che giorno sarà Natale nel 2026?', a: 'Il Natale 2026 (25 dicembre 2026) cade di venerdì. Inserisci 25/12/2026 sopra per confermare.' },
      { q: 'Che giorno era una data nel passato?', a: 'Inserisci qualsiasi data storica tra il 1° gennaio 1900 e il 31 dicembre 2100 nel campo della data sopra.' },
      { q: 'In che giorno della settimana cade il mio prossimo compleanno?', a: 'Inserisci il tuo prossimo compleanno nel campo della data. Il risultato mostra il giorno esatto della settimana. Per esempio, se il tuo compleanno è il 15 giugno, inserisci 15/06/2026 per vedere che cade di lunedì.' },
    ],
    weekDays: ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],
    months: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
  },
  pl: {
    title: 'Jaki Dziś Dzień? – Dzień Tygodnia dla Dowolnej Daty | DateCalc.app',
    metaDesc: 'Sprawdź, jaki dziś jest dzień, lub znajdź dzień tygodnia dla dowolnej daty. Pokazuje numer dnia, tygodnia i dni pozostałych w roku.',
    kicker: 'Jaki dziś dzień?',
    headline: 'Jaki <em>dzień</em><br>jest dziś?',
    subhead: 'Zobacz dzisiejszy dzień od razu lub znajdź dzień tygodnia dla dowolnej daty.',
    dateLabel: 'Data (zostaw puste dla dzisiaj)',
    calcBtn: '→ Sprawdź datę',
    tipText: '"Poniedziałek to stan umysłu. Ale przynajmniej teraz wiesz, w którym jesteś."',
    resultsHeader: 'Informacje o dacie',
    dayLbl: 'Dzień tygodnia', dateLbl: 'Pełna data',
    doyLbl: 'Dzień roku', weekNumLbl: 'Numer tygodnia',
    doyLeftLbl: 'Pozostałe dni w roku', leapLbl: 'Rok przestępny',
    yes: 'Tak', no: 'Nie',
    errInvalid: '→ Nieprawidłowa data. Sprawdź swój wpis.',
    seoH2a: 'Jaki dzień tygodnia to dana data?',
    seoP1: 'Aby znaleźć dzień tygodnia dla dowolnej daty, matematycy opracowali kilka eleganckich algorytmów. Kongruencja Zellera używa arytmetyki modularnej do obliczenia dnia bezpośrednio z wartości dnia, miesiąca i roku. Algorytm Doomsday, wynaleziony przez matematyka Johna Conwaya, wykorzystuje fakt, że pewne pamiętne daty (4/4, 6/6, 8/8, 10/10, 12/12 i inne) zawsze przypadają na ten sam dzień tygodnia w danym roku. Do codziennego użytku nasz kalkulator robi to wszystko automatycznie: wpisz dowolną datę od 1900 do 2100 i natychmiast sprawdź, na jaki dzień tygodnia przypada.',
    seoH2b: 'Ile dni ma każdy miesiąc?',
    seoP2: 'Styczeń, marzec, maj, lipiec, sierpień, październik i grudzień mają 31 dni. Kwiecień, czerwiec, wrzesień i listopad mają 30 dni. Luty ma 28 dni w zwykłym roku i 29 dni w roku przestępnym. Rok przestępny występuje w każdym roku podzielnym przez 4, z wyjątkiem lat stuletnich (podzielnych przez 100), które muszą być też podzielne przez 400. Tak więc 2000 był rokiem przestępnym, ale 1900 nie.',
    faqTitle: 'Często zadawane pytania',
    source: { url: 'https://en.wikipedia.org/wiki/Gregorian_calendar', label: 'Wikipedia – Kalendarz gregoriański' },
    faqs: [
      { q: 'Jaki dziś jest dzień?', a: 'Otwórz tę stronę, aby automatycznie zobaczyć dzisiejszy dzień tygodnia. Wyświetlana data jest oparta na twoim lokalnym strefie czasowej. Nie jest potrzebne żadne wprowadzanie danych — wynik aktualizuje się natychmiast po załadowaniu strony.' },
      { q: 'Jaki dzień był 1 stycznia 2000?', a: '1 stycznia 2000 roku był sobotą. Był to również pierwszy dzień nowego milenium. Możesz to sprawdzić wpisując 01/01/2000 w pole daty powyżej.' },
      { q: 'W jakim dniu tygodnia się urodziłem?', a: 'Wpisz swoją datę urodzenia w pole powyżej, a kalkulator powie ci, w jakim dniu tygodnia się urodziłeś. Możesz też sprawdzić, w jaki dzień przypadną twoje następne urodziny.' },
      { q: 'Jaki dzień będzie za 100 dni?', a: 'Do tego obliczenia użyj naszego Kalkulatora Daty, który pozwala dodawać dni do daty.' },
      { q: 'Co to jest algorytm Doomsday?', a: 'Algorytm Doomsday to metoda obliczeń w pamięci wynaleziona przez Johna Conwaya, która pozwala obliczyć dzień tygodnia dla dowolnej daty w głowie. Dla roku 2026 dniem Doomsday jest poniedziałek.' },
      { q: 'Jaki dzień przypada Boże Narodzenie w 2026 roku?', a: 'Boże Narodzenie 2026 (25 grudnia 2026) przypada w piątek. Wpisz 25/12/2026 powyżej, aby potwierdzić.' },
      { q: 'Jaki dzień był w przeszłości?', a: 'Wpisz dowolną datę historyczną między 1 stycznia 1900 a 31 grudnia 2100 w pole daty powyżej.' },
      { q: 'W jaki dzień tygodnia przypadają moje następne urodziny?', a: 'Wpisz swoje nadchodzące urodziny w pole daty. Wynik pokazuje dokładny dzień tygodnia. Na przykład, jeśli twoje urodziny są 15 czerwca, wpisz 15/06/2026, aby zobaczyć, że to poniedziałek.' },
    ],
    weekDays: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
    months: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
  },
};

module.exports = {
  pages: [
    { id: 'what-day-is-it-today', slugs: { en: 'what-day-is-it-today', fr: 'fr/quel-jour-sommes-nous', es: 'es/que-dia-es-hoy', pt: 'pt/que-dia-e-hoje', de: 'de/welcher-tag-ist-heute', it: 'it/che-giorno-e-oggi', pl: 'pl/jaki-dzis-dzien' } },
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
