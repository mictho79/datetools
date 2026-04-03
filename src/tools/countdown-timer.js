// Countdown Timer

const T = {
  en: {
    title: 'Countdown Timer – Count Down to Any Date | DateCalc.app',
    metaDesc: 'Free online countdown timer. Enter any future date and get a live countdown in days, hours, minutes and seconds.',
    kicker: 'Countdown Timer',
    headline: 'Count<em>down</em><br>to any date',
    subhead: 'Enter a target date — watch the live countdown tick in real time.',
    targetLabel: 'Target date',
    labelLabel: 'Event name (optional)',
    calcBtn: '→ Start Countdown',
    tipText: '"The anticipation is part of the joy."',
    examples: ['New Year\'s Eve', 'Next birthday', 'Project deadline'],
    resultsHeader: 'Countdown',
    heroSuffix: 'days',
    hoursLbl: 'hours', minsLbl: 'minutes', secsLbl: 'seconds',
    weeksLbl: 'weeks', totalHoursLbl: 'total hours', totalMinsLbl: 'total minutes',
    eventLbl: 'Event', dateLbl: 'Target date', dayLbl: 'Day of week',
    errInvalid: '→ Invalid date. Please check your input.',
    errPast: '→ Target date must be in the future.',
    reachedMsg: '🎉 The date has been reached!',
    seoH2a: 'How to use the countdown timer',
    seoP1: 'Enter any future date and click "Start Countdown." The timer immediately shows you the exact number of days, hours, minutes, and seconds remaining until midnight on that date, and it updates live every second without any page refresh. You can also add an event name — like "My Wedding" or "Paris Trip" — to personalize your countdown display. The calculator supports any date up to December 31, 2099, giving you a maximum countdown horizon of over 70 years. Common uses include counting down to birthdays, holidays, vacations, exam dates, product launches, sporting events, and retirement. Research in psychology suggests that visualizing a concrete time-to-event reduces anxiety and improves preparation, which is one reason countdown timers have become a popular productivity and motivation tool.',
    seoH2b: 'Common uses for countdown timers',
    seoP2: 'Countdown timers serve dozens of real-world purposes. Personal milestones: how many days until my birthday, how many days until Christmas, countdown to my wedding day, days until summer vacation. Academic and professional: days until exam, project deadline countdown, days until graduation, contract expiry countdown. Travel and events: days until flight, countdown to sports championship, festival or concert countdown. The "days until" format is the most searched countdown query — followed by hours, then weeks. This calculator shows all four simultaneously so you always have the view you need. Knowing exactly how many days remain creates a concrete sense of urgency that vague "soon" or "next month" language simply cannot provide.',
    faqTitle: 'Frequently asked questions',
    source: { url: 'https://en.wikipedia.org/wiki/Countdown', label: 'Wikipedia – Countdown' },
    faqs: [
      { q: 'How do I use a free online countdown timer?', a: 'Enter your target date (day, month, year) in the fields above, optionally type an event name, and click "Start Countdown." The timer instantly shows the exact days, hours, minutes, and seconds remaining, updating every second. It works on any device — desktop, tablet, or mobile — with no app or account required.' },
      { q: 'How many days until my birthday?', a: 'Enter your next birthday date above and click Start Countdown. The timer will show the exact number of days, hours, minutes, and seconds until midnight on your birthday. For the current year\'s birthday, use the current year if it hasn\'t passed yet, or next year if it has.' },
      { q: 'How do I create a countdown to my wedding day?', a: 'Enter your wedding date in the target date fields, type "Our Wedding" or any custom name in the event name field, and click Start Countdown. The live timer shows days, hours, minutes, and seconds. Bookmark the page to return to your countdown anytime.' },
      { q: 'How many days until my vacation?', a: 'Enter your vacation departure date as the target, give it a name like "Beach Trip," and start the countdown. The calculator shows both total days remaining and the breakdown in weeks, hours, and minutes — useful for planning packing, travel documents, and pre-trip tasks.' },
      { q: 'How do I count days until graduation?', a: 'Enter your graduation ceremony date, label it "Graduation Day," and click Start Countdown. The live countdown will update second by second. You can also note the total hours or weeks remaining for a different perspective on how much time you have to prepare.' },
      { q: 'How many days until [a specific date]?', a: 'Simply enter any future date in the calculator above and the timer immediately shows the exact number of days remaining. The result also includes total hours, total minutes, and total seconds for the most precise answer. Dates up to December 31, 2099 are supported.' },
      { q: 'Does the countdown update in real time?', a: 'Yes. The seconds, minutes, and hours update every second automatically. No need to refresh the page.' },
      { q: 'What is the maximum date I can count down to?', a: 'The calculator supports dates up to December 31, 2099 — giving you a maximum countdown of over 73 years.' },
    ],
    weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  },
  fr: {
    title: 'Compte à rebours – Décompter jusqu\'à n\'importe quelle date | DateCalc.app',
    metaDesc: 'Compte à rebours en ligne gratuit. Entrez n\'importe quelle date future et obtenez un décompte en direct en jours, heures, minutes et secondes.',
    kicker: 'Compte à rebours',
    headline: 'Compte<em>-à-rebours</em><br>jusqu\'à une date',
    subhead: 'Entrez une date cible — regardez le décompte en direct en temps réel.',
    targetLabel: 'Date cible',
    labelLabel: 'Nom de l\'événement (facultatif)',
    calcBtn: '→ Lancer le compte à rebours',
    tipText: '"L\'anticipation fait partie de la joie."',
    examples: ['Saint-Sylvestre', 'Prochain anniversaire', 'Délai du projet'],
    resultsHeader: 'Compte à rebours',
    heroSuffix: 'jours',
    hoursLbl: 'heures', minsLbl: 'minutes', secsLbl: 'secondes',
    weeksLbl: 'semaines', totalHoursLbl: 'heures totales', totalMinsLbl: 'minutes totales',
    eventLbl: 'Événement', dateLbl: 'Date cible', dayLbl: 'Jour de la semaine',
    errInvalid: '→ Date invalide. Vérifiez votre saisie.',
    errPast: '→ La date cible doit être dans le futur.',
    reachedMsg: '🎉 La date est arrivée !',
    seoH2a: 'Comment utiliser le compte à rebours',
    seoP1: 'Entrez n\'importe quelle date future et cliquez sur "Lancer". Le minuteur affiche immédiatement le nombre exact de jours, heures, minutes et secondes restants jusqu\'à minuit à cette date, et se met à jour en direct chaque seconde sans rechargement de page. Vous pouvez ajouter un nom d\'événement — comme "Mon mariage" ou "Voyage à Paris" — pour personnaliser votre compte à rebours. Le calculateur prend en charge toutes les dates jusqu\'au 31 décembre 2099, offrant un horizon de compte à rebours maximum de plus de 70 ans. Les utilisations courantes incluent les comptes à rebours pour les anniversaires, les vacances, les examens, les lancements de produits et les événements sportifs.',
    seoH2b: 'Utilisations courantes des comptes à rebours',
    seoP2: 'Les comptes à rebours servent à de nombreuses fins pratiques. Jalons personnels : combien de jours avant mon anniversaire, combien de jours avant Noël, compte à rebours pour mon mariage, jours avant les vacances d\'été. Académique et professionnel : jours avant un examen, compte à rebours pour une date limite de projet, jours avant la remise des diplômes. Voyage et événements : jours avant un vol, compte à rebours pour un championnat sportif, festival ou concert. Le format "jours avant" est la requête de compte à rebours la plus recherchée. Cette calculatrice affiche simultanément jours, heures, minutes et secondes pour toujours avoir la vue dont vous avez besoin.',
    faqTitle: 'Questions fréquentes',
    source: { url: 'https://en.wikipedia.org/wiki/Countdown', label: 'Wikipédia – Compte à rebours' },
    faqs: [
      { q: 'Comment utiliser un compte à rebours en ligne gratuit ?', a: 'Entrez votre date cible (jour, mois, année) dans les champs ci-dessus, tapez optionnellement un nom d\'événement et cliquez sur "Lancer le compte à rebours". Le minuteur affiche instantanément les jours, heures, minutes et secondes exacts restants, se mettant à jour chaque seconde. Fonctionne sur tout appareil sans application ni compte requis.' },
      { q: 'Combien de jours avant mon anniversaire ?', a: 'Entrez la date de votre prochain anniversaire ci-dessus et cliquez sur Lancer. Le minuteur affiche le nombre exact de jours, heures, minutes et secondes jusqu\'à minuit le jour de votre anniversaire. Utilisez l\'année en cours si l\'anniversaire n\'est pas encore passé, sinon l\'année prochaine.' },
      { q: 'Comment créer un compte à rebours pour mon mariage ?', a: 'Entrez la date de votre mariage dans les champs de date cible, tapez "Notre mariage" ou un nom personnalisé dans le champ du nom d\'événement et cliquez sur Lancer. Le minuteur en direct affiche jours, heures, minutes et secondes. Mettez la page en signet pour y revenir à tout moment.' },
      { q: 'Combien de jours avant mes vacances ?', a: 'Entrez la date de départ de vos vacances comme cible, donnez-lui un nom et lancez le compte à rebours. Le calculateur affiche à la fois le nombre total de jours restants et la décomposition en semaines, heures et minutes — utile pour planifier la valise, les documents de voyage et les tâches pré-voyage.' },
      { q: 'Comment compter les jours avant la remise des diplômes ?', a: 'Entrez la date de la cérémonie de remise des diplômes, nommez-la "Remise des diplômes" et cliquez sur Lancer. Le compte à rebours en direct se met à jour seconde par seconde. Vous pouvez également noter le total d\'heures ou de semaines restantes pour une perspective différente.' },
      { q: 'Combien de jours avant une date spécifique ?', a: 'Entrez simplement n\'importe quelle date future dans le calculateur ci-dessus et le minuteur affiche immédiatement le nombre exact de jours restants. Le résultat inclut également le total d\'heures, de minutes et de secondes. Les dates jusqu\'au 31 décembre 2099 sont prises en charge.' },
      { q: 'Le compte à rebours se met-il à jour en temps réel ?', a: 'Oui. Les secondes, minutes et heures se mettent à jour automatiquement chaque seconde. Pas besoin de rafraîchir la page.' },
      { q: 'Quelle est la date maximale prise en charge ?', a: 'Le calculateur prend en charge les dates jusqu\'au 31 décembre 2099, soit un compte à rebours maximum de plus de 73 ans.' },
    ],
    weekDays: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    months: ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
  },
  es: {
    title: 'Cuenta regresiva – Cuenta atrás hasta cualquier fecha | DateCalc.app',
    metaDesc: 'Temporizador de cuenta regresiva gratuito. Ingresa cualquier fecha futura y obtén una cuenta atrás en vivo en días, horas, minutos y segundos.',
    kicker: 'Cuenta Regresiva',
    headline: 'Cuenta<em>-regresiva</em><br>hasta cualquier fecha',
    subhead: 'Ingresa una fecha objetivo — mira la cuenta regresiva en tiempo real.',
    targetLabel: 'Fecha objetivo',
    labelLabel: 'Nombre del evento (opcional)',
    calcBtn: '→ Iniciar cuenta regresiva',
    tipText: '"La anticipación es parte de la alegría."',
    examples: ['Nochevieja', 'Próximo cumpleaños', 'Plazo del proyecto'],
    resultsHeader: 'Cuenta regresiva',
    heroSuffix: 'días',
    hoursLbl: 'horas', minsLbl: 'minutos', secsLbl: 'segundos',
    weeksLbl: 'semanas', totalHoursLbl: 'horas totales', totalMinsLbl: 'minutos totales',
    eventLbl: 'Evento', dateLbl: 'Fecha objetivo', dayLbl: 'Día de la semana',
    errInvalid: '→ Fecha no válida. Verifica tu entrada.',
    errPast: '→ La fecha objetivo debe ser en el futuro.',
    reachedMsg: '🎉 ¡La fecha ha llegado!',
    seoH2a: 'Cómo usar el temporizador de cuenta regresiva',
    seoP1: 'Ingresa cualquier fecha futura y haz clic en "Iniciar". El temporizador muestra inmediatamente el número exacto de días, horas, minutos y segundos restantes hasta la medianoche de esa fecha, y se actualiza en vivo cada segundo sin recargar la página. También puedes agregar un nombre de evento — como "Mi boda" o "Viaje a París" — para personalizar tu cuenta regresiva. La calculadora admite cualquier fecha hasta el 31 de diciembre de 2099, dando un horizonte máximo de más de 70 años. Los usos comunes incluyen contar los días hasta cumpleaños, vacaciones, exámenes, lanzamientos de productos y eventos deportivos.',
    seoH2b: 'Usos comunes de los temporizadores de cuenta regresiva',
    seoP2: 'Los temporizadores de cuenta regresiva sirven para docenas de propósitos prácticos. Hitos personales: cuántos días hasta mi cumpleaños, cuántos días hasta Navidad, cuenta regresiva para mi boda, días hasta las vacaciones de verano. Académico y profesional: días hasta el examen, cuenta regresiva para la fecha límite del proyecto, días hasta la graduación. Viajes y eventos: días hasta el vuelo, cuenta regresiva para un campeonato deportivo, festival o concierto. El formato "días hasta" es la consulta de cuenta regresiva más buscada. Esta calculadora muestra simultáneamente días, horas, minutos y segundos para tener siempre la vista que necesitas.',
    faqTitle: 'Preguntas frecuentes',
    source: { url: 'https://en.wikipedia.org/wiki/Countdown', label: 'Wikipedia – Cuenta regresiva' },
    faqs: [
      { q: '¿Cómo uso un temporizador de cuenta regresiva gratuito en línea?', a: 'Ingresa tu fecha objetivo (día, mes, año) en los campos de arriba, escribe opcionalmente un nombre de evento y haz clic en "Iniciar cuenta regresiva". El temporizador muestra instantáneamente los días, horas, minutos y segundos exactos restantes, actualizándose cada segundo. Funciona en cualquier dispositivo sin aplicación ni cuenta requerida.' },
      { q: '¿Cuántos días hasta mi cumpleaños?', a: 'Ingresa la fecha de tu próximo cumpleaños arriba y haz clic en Iniciar. El temporizador mostrará el número exacto de días, horas, minutos y segundos hasta la medianoche de tu cumpleaños. Usa el año actual si el cumpleaños aún no ha pasado, o el próximo año si ya pasó.' },
      { q: '¿Cómo creo una cuenta regresiva para el día de mi boda?', a: 'Ingresa la fecha de tu boda en los campos de fecha objetivo, escribe "Nuestra boda" o cualquier nombre personalizado en el campo del nombre del evento y haz clic en Iniciar. El temporizador en vivo muestra días, horas, minutos y segundos. Añade la página a favoritos para volver a tu cuenta regresiva cuando quieras.' },
      { q: '¿Cuántos días hasta mis vacaciones?', a: 'Ingresa tu fecha de salida de vacaciones como objetivo, dale un nombre y comienza la cuenta regresiva. La calculadora muestra tanto el total de días restantes como el desglose en semanas, horas y minutos — útil para planificar el equipaje, documentos de viaje y tareas previas al viaje.' },
      { q: '¿Cómo cuento los días hasta la graduación?', a: 'Ingresa la fecha de tu ceremonia de graduación, etiquétala "Día de graduación" y haz clic en Iniciar. La cuenta regresiva en vivo se actualiza segundo a segundo. También puedes anotar el total de horas o semanas restantes para una perspectiva diferente.' },
      { q: '¿Cuántos días hasta una fecha específica?', a: 'Simplemente ingresa cualquier fecha futura en la calculadora de arriba y el temporizador muestra inmediatamente el número exacto de días restantes. El resultado también incluye el total de horas, minutos y segundos. Se admiten fechas hasta el 31 de diciembre de 2099.' },
      { q: '¿La cuenta regresiva se actualiza en tiempo real?', a: 'Sí. Los segundos, minutos y horas se actualizan automáticamente cada segundo. No es necesario actualizar la página.' },
      { q: '¿Cuál es la fecha máxima admitida?', a: 'La calculadora admite fechas hasta el 31 de diciembre de 2099, dando una cuenta regresiva máxima de más de 73 años.' },
    ],
    weekDays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
    months: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
  },
  pt: {
    title: 'Temporizador Regressivo – Contagem Regressiva para Qualquer Data',
    metaDesc: 'Crie uma contagem regressiva para qualquer data ou evento. Mostra dias, horas, minutos e segundos em tempo real — grátis.',
    kicker: 'Temporizador Regressivo',
    headline: 'Contagem<br><em>regressiva</em><br>para qualquer data',
    subhead: 'Crie uma contagem regressiva personalizada para qualquer evento',
    targetLabel: 'Data alvo',
    labelLabel: 'Nome do evento (opcional)',
    calcBtn: '→ INICIAR',
    tipText: '"A antecipação é parte da alegria."',
    examples: ['Réveillon', 'Próximo aniversário', 'Prazo do projeto'],
    resultsHeader: 'Tempo restante',
    heroSuffix: 'dias',
    hoursLbl: 'horas', minsLbl: 'minutos', secsLbl: 'segundos',
    weeksLbl: 'semanas', totalHoursLbl: 'horas totais', totalMinsLbl: 'minutos totais',
    eventLbl: 'Evento', dateLbl: 'Data alvo', dayLbl: 'Dia da semana',
    errInvalid: '→ Data inválida. Verifique sua entrada.',
    errPast: '→ A data selecionada já passou.',
    reachedMsg: '🎉 A data chegou!',
    seoH2a: 'Como criar uma contagem regressiva?',
    seoP1: 'Insira a data do evento no formulário acima e clique em Iniciar. A contagem regressiva será exibida em dias, horas, minutos e segundos, atualizando em tempo real.',
    seoH2b: 'Para que serve um temporizador regressivo?',
    seoP2: 'Use para contar os dias até férias, casamentos, formaturas, datas comemorativas, lançamentos de produtos ou qualquer evento especial.',
    faqTitle: 'Perguntas frequentes',
    source: null,
    faqs: [
      { q: 'Como criar uma contagem regressiva para meu aniversário?', a: 'Insira a data do seu próximo aniversário no formulário e clique em Iniciar. A contagem mostrará exatamente quantos dias, horas, minutos e segundos faltam.' },
      { q: 'A contagem regressiva atualiza automaticamente?', a: 'Sim. O contador é atualizado a cada segundo enquanto a página estiver aberta.' },
      { q: 'Posso usar para datas passadas?', a: 'Não. O temporizador funciona apenas para datas futuras. Para calcular dias entre datas passadas, use a calculadora de dias entre datas.' },
    ],
    weekDays: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
    months: ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'],
  },
  de: {
    title: 'Countdown-Timer – Zähle bis zu einem beliebigen Datum | DateCalc.app',
    metaDesc: 'Kostenloser Online-Countdown-Timer. Gib ein beliebiges zukünftiges Datum ein und erhalte einen Live-Countdown in Tagen, Stunden, Minuten und Sekunden.',
    kicker: 'Countdown-Timer',
    headline: 'Countdown<em>-Timer</em><br>bis zu einem Datum',
    subhead: 'Gib ein Zieldatum ein — sieh den Live-Countdown in Echtzeit.',
    targetLabel: 'Zieldatum',
    labelLabel: 'Ereignisname (optional)',
    calcBtn: '→ Countdown starten',
    tipText: '"Die Vorfreude ist Teil der Freude."',
    examples: ['Silvester', 'Nächster Geburtstag', 'Projektdeadline'],
    resultsHeader: 'Countdown',
    heroSuffix: 'Tage',
    hoursLbl: 'Stunden', minsLbl: 'Minuten', secsLbl: 'Sekunden',
    weeksLbl: 'Wochen', totalHoursLbl: 'Gesamtstunden', totalMinsLbl: 'Gesamtminuten',
    eventLbl: 'Ereignis', dateLbl: 'Zieldatum', dayLbl: 'Wochentag',
    errInvalid: '→ Ungültiges Datum. Bitte überprüfe deine Eingabe.',
    errPast: '→ Das Zieldatum muss in der Zukunft liegen.',
    reachedMsg: 'Das Ereignis ist bereits vergangen.',
    seoH2a: 'Wie verwendet man den Countdown-Timer?',
    seoP1: 'Gib ein beliebiges zukünftiges Datum ein und klicke auf "Countdown starten". Der Timer zeigt sofort die genaue Anzahl der verbleibenden Tage, Stunden, Minuten und Sekunden bis Mitternacht an diesem Datum an und aktualisiert sich jede Sekunde live ohne Seitenaktualisierung. Du kannst auch einen Ereignisnamen hinzufügen — wie "Meine Hochzeit" oder "Reise nach Paris" — um deinen Countdown zu personalisieren. Der Rechner unterstützt jedes Datum bis zum 31. Dezember 2099.',
    seoH2b: 'Häufige Verwendungen für Countdown-Timer',
    seoP2: 'Countdown-Timer dienen vielen praktischen Zwecken. Persönliche Meilensteine: wie viele Tage bis zu meinem Geburtstag, wie viele Tage bis Weihnachten, Countdown bis zu meiner Hochzeit, Tage bis zum Sommerurlaub. Akademisch und beruflich: Tage bis zur Prüfung, Countdown für Projektdeadline, Tage bis zum Abschluss. Reisen und Events: Tage bis zum Abflug, Countdown für eine Sportmeisterschaft, Festival oder Konzert.',
    faqTitle: 'Häufig gestellte Fragen',
    source: { url: 'https://en.wikipedia.org/wiki/Countdown', label: 'Wikipedia – Countdown' },
    faqs: [
      { q: 'Wie verwende ich einen kostenlosen Online-Countdown-Timer?', a: 'Gib dein Zieldatum (Tag, Monat, Jahr) in die obigen Felder ein, tippe optional einen Ereignisnamen und klicke auf "Countdown starten". Der Timer zeigt sofort die genauen verbleibenden Tage, Stunden, Minuten und Sekunden an, die sich jede Sekunde aktualisieren. Funktioniert auf jedem Gerät ohne App oder Konto.' },
      { q: 'Wie viele Tage bis zu meinem Geburtstag?', a: 'Gib dein nächstes Geburtsdatum oben ein und klicke auf Countdown starten. Der Timer zeigt die genaue Anzahl der Tage, Stunden, Minuten und Sekunden bis Mitternacht an deinem Geburtstag.' },
      { q: 'Wie erstelle ich einen Countdown bis zu meinem Hochzeitstag?', a: 'Gib dein Hochzeitsdatum in die Zieldatumsfelder ein, tippe "Unsere Hochzeit" oder einen beliebigen Namen in das Ereignisnamenfeld und klicke auf Countdown starten.' },
      { q: 'Wie viele Tage bis zu meinem Urlaub?', a: 'Gib dein Urlaubsabreisedatum als Ziel ein, gib ihm einen Namen und starte den Countdown. Der Rechner zeigt sowohl die Gesamtzahl der verbleibenden Tage als auch die Aufschlüsselung in Wochen, Stunden und Minuten.' },
      { q: 'Wie zähle ich Tage bis zum Abschluss?', a: 'Gib das Datum deiner Abschlussfeier ein, benenne sie "Abschlusstag" und klicke auf Countdown starten. Der Live-Countdown aktualisiert sich Sekunde für Sekunde.' },
      { q: 'Wie viele Tage bis zu einem bestimmten Datum?', a: 'Gib einfach ein beliebiges zukünftiges Datum in den Rechner oben ein und der Timer zeigt sofort die genaue Anzahl der verbleibenden Tage. Daten bis zum 31. Dezember 2099 werden unterstützt.' },
      { q: 'Aktualisiert sich der Countdown in Echtzeit?', a: 'Ja. Sekunden, Minuten und Stunden aktualisieren sich automatisch jede Sekunde. Kein Seitenaktualisierung erforderlich.' },
      { q: 'Was ist das maximale unterstützte Datum?', a: 'Der Rechner unterstützt Daten bis zum 31. Dezember 2099 — was einen maximalen Countdown von über 73 Jahren ergibt.' },
    ],
    weekDays: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
    months: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
  },
  it: {
    title: 'Conto alla Rovescia – Conta fino a Qualsiasi Data | DateCalc.app',
    metaDesc: 'Timer conto alla rovescia gratuito online. Inserisci qualsiasi data futura e ottieni un conto alla rovescia in diretta in giorni, ore, minuti e secondi.',
    kicker: 'Conto alla Rovescia',
    headline: 'Conto<em>-alla-rovescia</em><br>fino a una data',
    subhead: 'Inserisci una data target — guarda il conto alla rovescia in tempo reale.',
    targetLabel: 'Data target',
    labelLabel: 'Nome evento (opzionale)',
    calcBtn: '→ Avvia conto alla rovescia',
    tipText: '"L\'anticipazione è parte della gioia."',
    examples: ['Capodanno', 'Prossimo compleanno', 'Scadenza progetto'],
    resultsHeader: 'Conto alla rovescia',
    heroSuffix: 'giorni',
    hoursLbl: 'ore', minsLbl: 'minuti', secsLbl: 'secondi',
    weeksLbl: 'settimane', totalHoursLbl: 'ore totali', totalMinsLbl: 'minuti totali',
    eventLbl: 'Evento', dateLbl: 'Data target', dayLbl: 'Giorno della settimana',
    errInvalid: '→ Data non valida. Controlla il tuo input.',
    errPast: '→ La data target deve essere nel futuro.',
    reachedMsg: 'L\'evento è già passato.',
    seoH2a: 'Come usare il conto alla rovescia',
    seoP1: 'Inserisci qualsiasi data futura e clicca su "Avvia". Il timer mostra immediatamente il numero esatto di giorni, ore, minuti e secondi rimanenti fino a mezzanotte in quella data, e si aggiorna in diretta ogni secondo senza ricaricare la pagina. Puoi anche aggiungere un nome evento — come "Il mio matrimonio" o "Viaggio a Roma" — per personalizzare il tuo conto alla rovescia. Il calcolatore supporta qualsiasi data fino al 31 dicembre 2099.',
    seoH2b: 'Usi comuni dei timer conto alla rovescia',
    seoP2: 'I timer conto alla rovescia servono a molti scopi pratici. Traguardi personali: quanti giorni al mio compleanno, quanti giorni a Natale, conto alla rovescia per il mio matrimonio, giorni fino alle vacanze estive. Accademico e professionale: giorni fino all\'esame, conto alla rovescia per la scadenza del progetto, giorni fino alla laurea. Viaggi ed eventi: giorni fino al volo, conto alla rovescia per un campionato sportivo, festival o concerto.',
    faqTitle: 'Domande frequenti',
    source: { url: 'https://en.wikipedia.org/wiki/Countdown', label: 'Wikipedia – Conto alla rovescia' },
    faqs: [
      { q: 'Come uso un timer conto alla rovescia gratuito online?', a: 'Inserisci la tua data target (giorno, mese, anno) nei campi sopra, digita opzionalmente un nome evento e clicca su "Avvia conto alla rovescia". Il timer mostra istantaneamente i giorni, ore, minuti e secondi esatti rimanenti, aggiornandosi ogni secondo. Funziona su qualsiasi dispositivo senza app o account richiesti.' },
      { q: 'Quanti giorni al mio compleanno?', a: 'Inserisci la data del tuo prossimo compleanno sopra e clicca su Avvia. Il timer mostrerà il numero esatto di giorni, ore, minuti e secondi fino a mezzanotte del tuo compleanno.' },
      { q: 'Come creo un conto alla rovescia per il mio giorno di nozze?', a: 'Inserisci la data del tuo matrimonio nei campi della data target, digita "Il nostro matrimonio" o qualsiasi nome personalizzato nel campo del nome evento e clicca su Avvia.' },
      { q: 'Quanti giorni alle mie vacanze?', a: 'Inserisci la data di partenza delle tue vacanze come target, dagli un nome e avvia il conto alla rovescia. Il calcolatore mostra sia il totale dei giorni rimanenti sia la scomposizione in settimane, ore e minuti.' },
      { q: 'Come conto i giorni fino alla laurea?', a: 'Inserisci la data della cerimonia di laurea, etichettala "Giorno della laurea" e clicca su Avvia. Il conto alla rovescia in diretta si aggiorna secondo per secondo.' },
      { q: 'Quanti giorni fino a una data specifica?', a: 'Inserisci semplicemente qualsiasi data futura nel calcolatore sopra e il timer mostra immediatamente il numero esatto di giorni rimanenti. Sono supportate date fino al 31 dicembre 2099.' },
      { q: 'Il conto alla rovescia si aggiorna in tempo reale?', a: 'Sì. Secondi, minuti e ore si aggiornano automaticamente ogni secondo. Non è necessario ricaricare la pagina.' },
      { q: 'Qual è la data massima supportata?', a: 'Il calcolatore supporta date fino al 31 dicembre 2099, dando un conto alla rovescia massimo di oltre 73 anni.' },
    ],
    weekDays: ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],
    months: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
  },
  pl: {
    title: 'Odliczanie – Licz do Dowolnej Daty | DateCalc.app',
    metaDesc: 'Bezpłatny timer odliczania online. Wpisz dowolną przyszłą datę i uzyskaj odliczanie na żywo w dniach, godzinach, minutach i sekundach.',
    kicker: 'Odliczanie',
    headline: 'Odliczanie<br>do dowolnej<em> daty</em>',
    subhead: 'Wpisz datę docelową — obserwuj odliczanie na żywo w czasie rzeczywistym.',
    targetLabel: 'Data docelowa',
    labelLabel: 'Nazwa wydarzenia (opcjonalnie)',
    calcBtn: '→ Rozpocznij odliczanie',
    tipText: '"Oczekiwanie jest częścią radości."',
    examples: ['Sylwester', 'Następne urodziny', 'Termin projektu'],
    resultsHeader: 'Odliczanie',
    heroSuffix: 'dni',
    hoursLbl: 'godziny', minsLbl: 'minuty', secsLbl: 'sekundy',
    weeksLbl: 'tygodnie', totalHoursLbl: 'łączne godziny', totalMinsLbl: 'łączne minuty',
    eventLbl: 'Wydarzenie', dateLbl: 'Data docelowa', dayLbl: 'Dzień tygodnia',
    errInvalid: '→ Nieprawidłowa data. Sprawdź swój wpis.',
    errPast: '→ Data docelowa musi być w przyszłości.',
    reachedMsg: 'To wydarzenie już minęło.',
    seoH2a: 'Jak używać timera odliczania?',
    seoP1: 'Wpisz dowolną przyszłą datę i kliknij "Rozpocznij odliczanie". Timer natychmiast pokazuje dokładną liczbę pozostałych dni, godzin, minut i sekund do północy w tej dacie, i aktualizuje się na żywo co sekundę bez odświeżania strony. Możesz też dodać nazwę wydarzenia — jak "Mój ślub" lub "Wycieczka do Paryża" — aby spersonalizować odliczanie. Kalkulator obsługuje dowolną datę do 31 grudnia 2099.',
    seoH2b: 'Typowe zastosowania timerów odliczania',
    seoP2: 'Timery odliczania służą wielu praktycznym celom. Osobiste kamienie milowe: ile dni do moich urodzin, ile dni do Bożego Narodzenia, odliczanie do mojego ślubu, dni do letnich wakacji. Akademickie i zawodowe: dni do egzaminu, odliczanie do terminu projektu, dni do ukończenia studiów. Podróże i wydarzenia: dni do lotu, odliczanie do mistrzostw sportowych, festiwalu lub koncertu.',
    faqTitle: 'Często zadawane pytania',
    source: { url: 'https://en.wikipedia.org/wiki/Countdown', label: 'Wikipedia – Odliczanie' },
    faqs: [
      { q: 'Jak używać bezpłatnego timera odliczania online?', a: 'Wpisz swoją datę docelową (dzień, miesiąc, rok) w pola powyżej, opcjonalnie wpisz nazwę wydarzenia i kliknij "Rozpocznij odliczanie". Timer natychmiast pokazuje dokładne pozostałe dni, godziny, minuty i sekundy, aktualizując się co sekundę. Działa na dowolnym urządzeniu bez aplikacji ani konta.' },
      { q: 'Ile dni do moich urodzin?', a: 'Wpisz datę swoich następnych urodzin powyżej i kliknij Rozpocznij odliczanie. Timer pokaże dokładną liczbę dni, godzin, minut i sekund do północy w dniu twoich urodzin.' },
      { q: 'Jak stworzyć odliczanie do dnia ślubu?', a: 'Wpisz datę ślubu w pola daty docelowej, wpisz "Nasz Ślub" lub dowolną niestandardową nazwę w polu nazwy wydarzenia i kliknij Rozpocznij odliczanie.' },
      { q: 'Ile dni do moich wakacji?', a: 'Wpisz datę wyjazdu na wakacje jako cel, nadaj mu nazwę i rozpocznij odliczanie. Kalkulator pokazuje zarówno łączną liczbę pozostałych dni, jak i rozbicie na tygodnie, godziny i minuty.' },
      { q: 'Jak liczyć dni do ukończenia studiów?', a: 'Wpisz datę ceremonii ukończenia studiów, nazwij ją "Dzień ukończenia studiów" i kliknij Rozpocznij odliczanie. Odliczanie na żywo aktualizuje się sekunda po sekundzie.' },
      { q: 'Ile dni do konkretnej daty?', a: 'Po prostu wpisz dowolną przyszłą datę do kalkulatora powyżej, a timer natychmiast pokaże dokładną liczbę pozostałych dni. Obsługiwane są daty do 31 grudnia 2099.' },
      { q: 'Czy odliczanie aktualizuje się w czasie rzeczywistym?', a: 'Tak. Sekundy, minuty i godziny aktualizują się automatycznie co sekundę. Nie trzeba odświeżać strony.' },
      { q: 'Jaka jest maksymalna obsługiwana data?', a: 'Kalkulator obsługuje daty do 31 grudnia 2099, co daje maksymalne odliczanie wynoszące ponad 73 lata.' },
    ],
    weekDays: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
    months: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
  },
};

module.exports = {
  pages: [
    { id: 'countdown-timer', slugs: { en: 'countdown-timer', fr: 'fr/compte-a-rebours', es: 'es/cuenta-regresiva', pt: 'pt/temporizador-regressivo', de: 'de/countdown-timer', it: 'it/conto-alla-rovescia', pl: 'pl/odliczanie' } },
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
      <div class="field-label">${t.targetLabel}</div>
      <div class="date-row">
        <input type="number" id="day" placeholder="DD" min="1" max="31" inputmode="numeric" oninput="clamp(this,1,31)">
        <span>/</span>
        <input type="number" id="month" placeholder="MM" min="1" max="12" inputmode="numeric" oninput="clamp(this,1,12)">
        <span>/</span>
        <input type="number" id="year" placeholder="YYYY" min="2024" max="2099" inputmode="numeric" oninput="clamp(this,2024,2099)">
      </div>
      <div class="field-label" style="margin-top:1.2rem">${t.labelLabel}</div>
      <input type="text" id="eventLabel" placeholder="e.g. My Birthday" maxlength="40" style="background:none;border:none;border-bottom:2px solid var(--ink);font-family:'Inter',sans-serif;font-size:1rem;color:var(--ink);width:100%;padding:.2rem 0;outline:none;">
      <div class="error-line" id="errorLine"></div>
      <button class="calc-btn" onclick="calculate()">${t.calcBtn}</button>
    </div>
    <div class="form-col">
      <p class="tip-text">${t.tipText}</p>
      <ul class="example-list">
        ${t.examples.map(ex => `<li>${ex}</li>`).join('\n        ')}
      </ul>
    </div>
  </div>`;

    const resultsSection = `  <div class="results-section" id="results">
    <div class="results-header" id="resultsHeader">${t.resultsHeader}</div>
    <div class="age-display">
      <span class="age-number" id="heroDays">—</span>
      <span class="age-suffix">${t.heroSuffix}</span>
    </div>
    <div class="precise-age" id="liveHMS"></div>
    <div class="stats-strip">
      <div class="stat-item"><div class="stat-num" id="statWeeks">—</div><div class="stat-lbl">${t.weeksLbl}</div></div>
      <div class="stat-item"><div class="stat-num" id="statTotalH">—</div><div class="stat-lbl">${t.totalHoursLbl}</div></div>
      <div class="stat-item"><div class="stat-num" id="statTotalM">—</div><div class="stat-lbl">${t.totalMinsLbl}</div></div>
      <div class="stat-item"><div class="stat-num" id="statSecs">—</div><div class="stat-lbl">${t.secsLbl}</div></div>
    </div>
    <div class="facts-row">
      <div class="fact-item"><div class="fact-key">${t.dateLbl}</div><div class="fact-val" id="ffDate">—</div></div>
      <div class="fact-item"><div class="fact-key">${t.dayLbl}</div><div class="fact-val" id="ffDay">—</div></div>
    </div>
    <div class="bday-banner" id="doneBanner"></div>
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
      errInvalid: t.errInvalid, errPast: t.errPast, reachedMsg: t.reachedMsg,
      weekDays: t.weekDays, months: t.months,
    });

    const script = `
var D = ${data};
var _target = null;
var _timer = null;
function fmt(n){return n.toLocaleString();}
function pad2(n){return n<10?'0'+n:''+n;}

function tick(){
  if(!_target) return;
  var now = new Date();
  var diff = _target - now;
  if(diff <= 0){
    document.getElementById('heroDays').textContent = '0';
    document.getElementById('liveHMS').textContent = '00h · 00min · 00s';
    document.getElementById('statWeeks').textContent = '0';
    document.getElementById('statTotalH').textContent = '0';
    document.getElementById('statTotalM').textContent = '0';
    document.getElementById('statSecs').textContent = '0';
    document.getElementById('doneBanner').textContent = D.reachedMsg;
    return;
  }
  var totalSec = Math.floor(diff/1000);
  var s = totalSec%60, totalMin = Math.floor(totalSec/60);
  var min = totalMin%60, totalH = Math.floor(totalMin/60);
  var h = totalH%24, days = Math.floor(totalH/24);
  document.getElementById('heroDays').textContent = fmt(days);
  document.getElementById('liveHMS').textContent = pad2(h)+'h · '+pad2(min)+'min · '+pad2(s)+'s';
  document.getElementById('statWeeks').textContent = fmt(Math.floor(days/7));
  document.getElementById('statTotalH').textContent = fmt(totalH);
  document.getElementById('statTotalM').textContent = fmt(totalMin);
  document.getElementById('statSecs').textContent = fmt(totalSec);
}

function calculate(){
  var d = parseInt(document.getElementById('day').value);
  var m = parseInt(document.getElementById('month').value);
  var y = parseInt(document.getElementById('year').value);
  var label = document.getElementById('eventLabel').value.trim();
  var err = document.getElementById('errorLine');
  var res = document.getElementById('results');
  err.classList.remove('show'); res.classList.remove('show');
  if(_timer){clearInterval(_timer); _timer=null;}

  if(!d||!m||!y||d<1||d>31||m<1||m>12||y<2024||y>2099){err.textContent=D.errInvalid; err.classList.add('show'); return;}
  var target = new Date(y, m-1, d);
  if(target.getDate()!==d){err.textContent=D.errInvalid; err.classList.add('show'); return;}
  if(target <= new Date()){err.textContent=D.errPast; err.classList.add('show'); return;}

  _target = target;
  document.getElementById('resultsHeader').textContent = label || '${t.resultsHeader}';
  document.getElementById('ffDate').textContent = target.getDate()+' '+D.months[target.getMonth()]+' '+target.getFullYear();
  document.getElementById('ffDay').textContent = D.weekDays[target.getDay()];
  document.getElementById('doneBanner').textContent = '';
  res.classList.add('show');
  res.scrollIntoView({behavior:'smooth',block:'start'});
  tick();
  _timer = setInterval(tick, 1000);
}

document.addEventListener('keydown', function(e){if(e.key==='Enter') calculate();});
`;

    return { title: t.title, metaDesc: t.metaDesc, headlineBlock, formGrid, resultsSection, seoBlock, script, faqs: t.faqs, source: t.source };
  },
};
