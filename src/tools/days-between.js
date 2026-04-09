// Days Between Dates

const T = {
  en: {
    title: 'Days Between Dates – Calculate the Difference | DateCalc.app',
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
    title: 'Jours entre deux dates – Calculer la différence | DateCalc.app',
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
    title: 'Días entre fechas – Calcular la diferencia | DateCalc.app',
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
  pt: {
    title: 'Calculadora de Dias Entre Datas 2026 – Grátis e Instantâneo',
    metaDesc: 'Calcule o número exato de dias entre duas datas. Mostra também semanas, meses e anos — grátis, sem cadastro, resultado imediato.',
    kicker: 'Dias Entre Datas',
    headline: 'Quantos dias<br>entre<br><em>duas datas?</em>',
    subhead: 'Calcule a diferença exata entre duas datas',
    startLabel: 'Data inicial',
    endLabel: 'Data final',
    todayBtn: 'Hoje',
    calcBtn: '→ CALCULAR',
    tipText: '"Cada dia é uma página do livro. Quantas páginas você escreveu entre dois capítulos?"',
    examples: ['1 jan 2000 → Hoje', 'Seu aniversário → Hoje', 'Início do ano → Hoje'],
    resultsHeader: 'Diferença',
    heroSuffix: 'dias',
    weeks: 'semanas', months: 'meses', years: 'anos',
    startDay: 'Dia inicial', endDay: 'Dia final', weekendsLbl: 'Fins de semana', workdaysLbl: 'Dias úteis',
    errInvalid: '→ Data inválida. Verifique sua entrada.',
    errOrder: '→ A data final deve ser posterior à data inicial.',
    seoH2a: 'Como calcular dias entre duas datas?',
    seoP1: 'Para calcular o número de dias entre duas datas, subtraia a data mais antiga da mais recente. Esta calculadora faz isso automaticamente e também mostra o resultado em semanas, meses e anos.',
    seoH2b: 'Para que serve calcular dias entre datas?',
    seoP2: 'Calcular dias entre datas é útil para: prazo de contratos, duração de projetos, contagem regressiva para eventos, cálculo de idade, vencimento de documentos e muito mais.',
    faqTitle: 'Perguntas frequentes',
    source: null,
    faqs: [
      { q: 'Quantos dias há em um ano?', a: 'Um ano comum tem 365 dias. Um ano bissexto tem 366 dias. Em média, considerando os anos bissextos, um ano tem 365,25 dias.' },
      { q: 'Como calcular semanas entre duas datas?', a: 'Divida o número de dias por 7. Por exemplo, 100 dias = 14 semanas e 2 dias. Esta calculadora mostra automaticamente semanas e dias.' },
      { q: 'A calculadora conta o dia inicial ou final?', a: 'A calculadora conta os dias completos entre as datas, não incluindo o dia inicial. Se quiser incluir o primeiro e o último dia, adicione 1 ao resultado.' },
    ],
    weekDays: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
  },
  de: {
    title: 'Tage Zwischen Zwei Daten 2026 – Kostenlos & Sofort',
    metaDesc: 'Berechne die genaue Anzahl der Tage zwischen zwei Daten. Zeigt auch Wochen, Monate und Jahre — kostenlos, ohne Anmeldung.',
    kicker: 'Tage zwischen zwei Daten',
    headline: 'Tage <em>zwischen</em><br>zwei Daten',
    subhead: 'Gib ein Start- und Enddatum ein — erhalte die genaue Differenz in Tagen, Wochen, Monaten und Jahren.',
    startLabel: 'Startdatum',
    endLabel: 'Enddatum',
    todayBtn: 'Heute',
    calcBtn: '→ BERECHNEN',
    tipText: '"Jeder Tag ist eine Seite im Buch. Wie viele Seiten hast du zwischen zwei Kapiteln geschrieben?"',
    examples: ['1. Jan 2000 → Heute', 'Dein Geburtstag → Heute', 'Jahresbeginn → Heute'],
    resultsHeader: 'Datumsdifferenz',
    heroSuffix: 'Tage',
    weeks: 'Wochen', months: 'Monate', years: 'Jahre',
    startDay: 'Starttag', endDay: 'Endtag', weekendsLbl: 'Wochenenden', workdaysLbl: 'Werktage',
    errInvalid: '→ Ungültiges Datum. Bitte überprüfe deine Eingabe.',
    errOrder: '→ Das Enddatum muss nach dem Startdatum liegen.',
    seoH2a: 'Wie zählt man Tage zwischen zwei Daten?',
    seoP1: 'Um Tage zwischen zwei Daten zu zählen, subtrahiere das frühere Datum vom späteren — jede volle 24-Stunden-Periode zählt als ein Tag. Die Berechnung ist für kurze Zeitspannen einfach, wird aber schnell kompliziert, wenn man Monats- oder Jahresgrenzen überschreitet. Februar hat 28 oder 29 Tage, Monate haben 28 bis 31 Tage, und Schaltjahre fügen alle vier Jahre einen zusätzlichen Tag hinzu. Dieser Rechner erledigt all diese Komplexität automatisch: Gib dein Start- und Enddatum ein und erhalte sofort die genaue Tagesanzahl sowie das Äquivalent in Wochen, Monaten und Jahren.',
    seoH2b: 'Häufige Verwendungen für die Datumsberechnung',
    seoP2: 'Tage zwischen Daten zu zählen ist eine der häufigsten Datums-Rechenaufgaben. Projektmanager nutzen es zur Berechnung von Dauern und Überprüfung von Meilensteinabständen. HR-Teams zählen Beschäftigungstage für Leistungsansprüche oder Kündigungsfristen. Studenten zählen Tage bis zu Prüfungen oder Bewerbungsfristen. Juristen und Buchhalter verfolgen vertragliche Fristen. Reisende berechnen, wie viele Tage sie für Visa oder steuerliche Zwecke im Ausland sind. Egal was dein Grund ist, dieser Rechner gibt dir die genaue Zahl in Sekunden.',
    faqTitle: 'Häufig gestellte Fragen',
    source: { url: 'https://www.timeanddate.com/date/duration.html', label: 'Time and Date – Datumsunterschied-Rechner' },
    faqs: [
      { q: 'Wie viele Tage zwischen zwei Daten?', a: 'Gib dein Startdatum und Enddatum in die obigen Felder ein und klicke auf Berechnen. Das Ergebnis zeigt die genaue Anzahl der Kalendertage zwischen den beiden Daten sowie das Äquivalent in Wochen, Monaten und Jahren.' },
      { q: 'Wie viele Tage zwischen Geburtstagen?', a: 'Gib deinen letzten Geburtstag als Startdatum und deinen nächsten Geburtstag als Enddatum ein. Für eine wiederkehrende Zählung setze den Start auf den diesjährigen Geburtstag und das Ende auf den nächstjährigen — die Antwort ist immer 365 (oder 366 in einem Schaltjahr).' },
      { q: 'Was ist der Unterschied zwischen Werktagen und Kalendertagen?', a: 'Kalendertage zählen jeden Tag einschließlich Wochenenden und Feiertagen. Werktage zählen nur Montag bis Freitag. Dieser Rechner zeigt beides: die Gesamtanzahl der Kalendertage und die Anzahl der Werktage, die Samstage und Sonntage ausschließt.' },
      { q: 'Wie viele Tage bis zu meiner Deadline?', a: 'Gib das heutige Datum als Start und dein Fälligkeitsdatum als Ende ein, dann klicke auf Berechnen. Das Ergebnis sagt dir genau, wie viele Tage du noch hast — sowohl in Kalendertagen als auch in Werktagen.' },
      { q: 'Schließt der Rechner das Start-/Enddatum ein oder aus?', a: 'Der Rechner zählt volle 24-Stunden-Tage zwischen den beiden Daten. 1. Januar bis 3. Januar = 2 Tage. Wenn du beide Endpunkte einbeziehen möchtest (inklusive Zählung), addiere 1 zum Ergebnis.' },
      { q: 'Wie viele Tage zwischen zwei bestimmten Jahren?', a: 'Gib einfach den 1. Januar des ersten Jahres als Start und den 31. Dezember des letzten Jahres als Ende ein, dann addiere 1 für eine inklusive Zählung. Zum Beispiel umfasst der 1. Januar 2000 bis zum 31. Dezember 2024 9.131 Tage (inklusiv).' },
      { q: 'Welche maximale Datumsrange wird unterstützt?', a: 'Dieser Rechner unterstützt jedes Datum von 1900 bis 2100, was eine Spanne von mehr als 73.000 Tagen ergibt.' },
      { q: 'Wie zähle ich nur Werktage?', a: 'Der "Werktage"-Wert in den Ergebnissen schließt Samstage und Sonntage aus. Für einen Rechner, der auch Feiertage ausschließt, verwende unseren Werktage-Rechner.' },
    ],
    weekDays: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
  },
  it: {
    title: 'Giorni Tra Due Date 2026 – Calcolo Gratuito e Immediato',
    metaDesc: 'Calcola il numero esatto di giorni tra due date. Mostra anche settimane, mesi e anni — gratis, senza registrazione.',
    kicker: 'Giorni tra due date',
    headline: 'Giorni <em>tra</em><br>due date',
    subhead: 'Inserisci una data di inizio e una di fine — ottieni la differenza esatta in giorni, settimane, mesi e anni.',
    startLabel: 'Data di inizio',
    endLabel: 'Data di fine',
    todayBtn: 'Oggi',
    calcBtn: '→ CALCOLA',
    tipText: '"Ogni giorno è una pagina del libro. Quante pagine hai scritto tra due capitoli?"',
    examples: ['1 gen 2000 → Oggi', 'Il tuo compleanno → Oggi', 'Inizio anno → Oggi'],
    resultsHeader: 'Differenza di date',
    heroSuffix: 'giorni',
    weeks: 'settimane', months: 'mesi', years: 'anni',
    startDay: 'Giorno iniziale', endDay: 'Giorno finale', weekendsLbl: 'Fine settimana', workdaysLbl: 'Giorni lavorativi',
    errInvalid: '→ Data non valida. Controlla il tuo input.',
    errOrder: '→ La data di fine deve essere successiva a quella di inizio.',
    seoH2a: 'Come contare i giorni tra due date',
    seoP1: 'Per contare i giorni tra due date, sottrai la data precedente da quella successiva — ogni periodo di 24 ore conta come un giorno. Il calcolo è semplice per brevi intervalli, ma diventa complicato quando si attraversano confini di mese o anno. Febbraio ha 28 o 29 giorni, i mesi variano da 28 a 31 giorni, e gli anni bisestili aggiungono un giorno extra ogni quattro anni. Questo calcolatore gestisce automaticamente tutta questa complessità: inserisci le tue date di inizio e fine e ottieni immediatamente il conteggio esatto dei giorni insieme all\'equivalente in settimane, mesi e anni.',
    seoH2b: 'Usi comuni per il calcolo della differenza di date',
    seoP2: 'Contare i giorni tra le date è uno dei compiti di calcolo più comuni. I project manager lo usano per calcolare le durate e verificare i gap tra le milestone. I team HR contano i giorni di impiego per l\'idoneità ai benefit. Gli studenti contano i giorni fino agli esami o alle scadenze di candidatura. I legali e i contabili tracciano le scadenze contrattuali. I viaggiatori calcolano quanti giorni saranno all\'estero per i visti o la residenza fiscale. Qualunque sia il tuo motivo, questo calcolatore ti dà il conteggio preciso in pochi secondi.',
    faqTitle: 'Domande frequenti',
    source: { url: 'https://www.timeanddate.com/date/duration.html', label: 'Time and Date – Calcolatore di durata date' },
    faqs: [
      { q: 'Quanti giorni tra due date?', a: 'Inserisci la data di inizio e la data di fine nei campi sopra e clicca su Calcola. Il risultato mostra il numero esatto di giorni calendario tra le due date, insieme all\'equivalente in settimane, mesi e anni.' },
      { q: 'Quanti giorni tra compleanni?', a: 'Inserisci il tuo compleanno più recente come data di inizio e il prossimo come data di fine. Per un conteggio ricorrente, imposta l\'inizio al compleanno di quest\'anno e la fine a quello dell\'anno prossimo — la risposta sarà sempre 365 (o 366 in un anno bisestile).' },
      { q: 'Qual è la differenza tra giorni lavorativi e giorni calendario?', a: 'I giorni calendario contano ogni giorno inclusi i fine settimana e le festività. I giorni lavorativi contano solo da lunedì a venerdì. Questo calcolatore mostra entrambi: il totale dei giorni calendario e il conteggio dei giorni lavorativi, che esclude sabati e domeniche.' },
      { q: 'Quanti giorni mancano alla mia scadenza?', a: 'Inserisci la data di oggi come inizio e la tua data di scadenza come fine, poi clicca su Calcola. Il risultato ti dice esattamente quanti giorni ti restano — sia in giorni calendario totali che in giorni lavorativi.' },
      { q: 'Il calcolatore include o esclude le date di inizio/fine?', a: 'Il calcolatore conta i giorni interi di 24 ore tra le due date. Dal 1° al 3 gennaio = 2 giorni. Se vuoi includere entrambi gli estremi (conteggio inclusivo), aggiungi 1 al risultato.' },
      { q: 'Quanti giorni tra due anni specifici?', a: 'Inserisci il 1° gennaio del primo anno come inizio e il 31 dicembre dell\'ultimo come fine, poi aggiungi 1 per un conteggio inclusivo. Per esempio, dal 1° gennaio 2000 al 31 dicembre 2024 ci sono 9.131 giorni (inclusivo).' },
      { q: 'Qual è l\'intervallo massimo di date supportato?', a: 'Questo calcolatore supporta qualsiasi data dal 1900 al 2100, con un intervallo di oltre 73.000 giorni.' },
      { q: 'Come conto solo i giorni lavorativi?', a: 'Il campo "Giorni lavorativi" nei risultati esclude sabati e domeniche. Per un calcolatore che esclude anche le festività, usa il nostro calcolatore di giorni lavorativi.' },
    ],
    weekDays: ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],
  },
  pl: {
    title: 'Dni Między Datami 2026 – Kalkulator Dni Za Darmo',
    metaDesc: 'Oblicz dokładną liczbę dni między dwiema datami. Pokazuje też tygodnie, miesiące i lata — za darmo, bez rejestracji.',
    kicker: 'Dni między datami',
    headline: 'Dni <em>między</em><br>dwiema datami',
    subhead: 'Wpisz datę początkową i końcową — uzyskaj dokładną różnicę w dniach, tygodniach, miesiącach i latach.',
    startLabel: 'Data początkowa',
    endLabel: 'Data końcowa',
    todayBtn: 'Dziś',
    calcBtn: '→ OBLICZ',
    tipText: '"Każdy dzień to strona w księdze. Ile stron napisałeś między dwoma rozdziałami?"',
    examples: ['1 sty 2000 → Dziś', 'Twoje urodziny → Dziś', 'Początek roku → Dziś'],
    resultsHeader: 'Różnica dat',
    heroSuffix: 'dni',
    weeks: 'tygodnie', months: 'miesiące', years: 'lata',
    startDay: 'Dzień początkowy', endDay: 'Dzień końcowy', weekendsLbl: 'Weekendy', workdaysLbl: 'Dni robocze',
    errInvalid: '→ Nieprawidłowa data. Sprawdź swój wpis.',
    errOrder: '→ Data końcowa musi być późniejsza niż data początkowa.',
    seoH2a: 'Jak liczyć dni między dwiema datami?',
    seoP1: 'Aby policzyć dni między dwiema datami, odejmij wcześniejszą datę od późniejszej — każdy pełny okres 24 godzin liczy się jako jeden dzień. Obliczenie jest proste dla krótkich przedziałów, ale staje się skomplikowane przy przekraczaniu granic miesięcy lub lat. Luty ma 28 lub 29 dni, miesiące mają od 28 do 31 dni, a lata przestępne dodają dodatkowy dzień co cztery lata. Ten kalkulator automatycznie radzi sobie z całą tą złożonością: wpisz daty początkową i końcową i natychmiast uzyskaj dokładną liczbę dni wraz z odpowiednikiem w tygodniach, miesiącach i latach.',
    seoH2b: 'Typowe zastosowania kalkulatora różnicy dat',
    seoP2: 'Liczenie dni między datami jest jednym z najczęstszych zadań związanych z obliczeniami dat. Kierownicy projektów używają tego do obliczania czasów trwania i weryfikacji odstępów między kamieniami milowymi. Zespoły HR liczą dni zatrudnienia dla uprawnień do świadczeń lub okresów wypowiedzenia. Studenci liczą dni do egzaminów lub terminów składania wniosków. Prawnicy i księgowi śledzą terminy umowne. Podróżnicy obliczają, ile dni będą za granicą dla wiz lub rezydencji podatkowej. Niezależnie od powodu, ten kalkulator daje ci dokładną liczbę w kilka sekund.',
    faqTitle: 'Często zadawane pytania',
    source: { url: 'https://www.timeanddate.com/date/duration.html', label: 'Time and Date – Kalkulator różnicy dat' },
    faqs: [
      { q: 'Ile dni między dwiema datami?', a: 'Wpisz datę początkową i końcową w pola powyżej i kliknij Oblicz. Wynik pokazuje dokładną liczbę dni kalendarzowych między dwiema datami wraz z odpowiednikiem w tygodniach, miesiącach i latach.' },
      { q: 'Ile dni między urodzinami?', a: 'Wpisz swoje ostatnie urodziny jako datę początkową, a następne jako datę końcową. Dla cyklicznego liczenia, ustaw początek na urodziny w tym roku, a koniec na urodziny w następnym roku — odpowiedź zawsze wyniesie 365 (lub 366 w roku przestępnym).' },
      { q: 'Jaka jest różnica między dniami roboczymi a dniami kalendarzowymi?', a: 'Dni kalendarzowe liczą każdy dzień łącznie z weekendami i świętami. Dni robocze liczą tylko poniedziałek do piątku. Ten kalkulator pokazuje oba: łączną liczbę dni kalendarzowych i liczbę dni roboczych, które wykluczają soboty i niedziele.' },
      { q: 'Ile dni do mojego terminu?', a: 'Wpisz dzisiejszą datę jako początek i datę terminu jako koniec, następnie kliknij Oblicz. Wynik powie ci dokładnie, ile dni ci pozostało — zarówno w łącznych dniach kalendarzowych, jak i w dniach roboczych.' },
      { q: 'Czy kalkulator uwzględnia datę początkową/końcową?', a: 'Kalkulator liczy pełne 24-godzinne dni między dwiema datami. Od 1 do 3 stycznia = 2 dni. Jeśli chcesz uwzględnić oba punkty końcowe (liczenie włącznie), dodaj 1 do wyniku.' },
      { q: 'Ile dni między dwoma konkretnymi latami?', a: 'Wpisz 1 stycznia pierwszego roku jako początek i 31 grudnia ostatniego roku jako koniec, a następnie dodaj 1 dla liczenia włącznego. Na przykład od 1 stycznia 2000 do 31 grudnia 2024 mija 9131 dni (włącznie).' },
      { q: 'Jaki jest maksymalny obsługiwany zakres dat?', a: 'Ten kalkulator obsługuje dowolną datę od 1900 do 2100, co daje zakres ponad 73 000 dni.' },
      { q: 'Jak liczyć tylko dni robocze?', a: 'Pole "Dni robocze" w wynikach wyklucza soboty i niedziele. Dla kalkulatora wykluczającego również święta, użyj naszego kalkulatora dni roboczych.' },
    ],
    weekDays: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
  },
  ja: {
    title: '日付の日数計算 2026 – 無料の日数計算ツール',
    metaDesc: '2つの日付の間の正確な日数を計算します。週、月、年も表示 — 無料、登録不要。',
    kicker: '日付の日数',
    headline: '2つの日付の<em>間の</em><br>日数',
    subhead: '開始日と終了日を入力すると、日数・週数・月数・年数の正確な差が即座にわかります。',
    startLabel: '開始日',
    endLabel: '終了日',
    todayBtn: '今日',
    calcBtn: '→ 計算する',
    tipText: '"人生は2つの日付の間にあるものだ。その間に何ページ書いたか？"',
    examples: ['2000年1月1日 → 今日', '誕生日 → 今日', '年始 → 今日'],
    resultsHeader: '日付の差',
    heroSuffix: '日',
    weeks: '週', months: 'ヶ月', years: '年',
    startDay: '開始日（曜日）', endDay: '終了日（曜日）', weekendsLbl: '週末', workdaysLbl: '平日',
    errInvalid: '→ 無効な日付です。入力を確認してください。',
    errOrder: '→ 終了日は開始日より後にしてください。',
    seoH2a: '2つの日付の間の日数はどう計算しますか？',
    seoP1: '2つの日付の間の日数を計算するには、早い日付を遅い日付から引きます。24時間ごとに1日としてカウントします。短い期間では単純ですが、月の境目や年をまたぐ場合は複雑になります。2月は28日または29日、月によって28〜31日があり、4年ごとに閏年が1日追加されます。この計算ツールはそれらを自動で処理します。開始日と終了日を入力するだけで、日数・週数・月数・年数の正確な差が表示されます。',
    seoH2b: '日付差計算ツールの一般的な用途',
    seoP2: '日数計算は最も一般的な日付計算の一つです。プロジェクトマネージャーは期間の計算やマイルストーン間の間隔確認に使用します。人事部門は給付資格や退職期間のために在職日数を計算します。学生は試験や出願期限までの日数を数えます。弁護士や会計士は契約上の締め切りを追跡します。旅行者はビザや税務上の居住確認のために海外滞在日数を計算します。',
    faqTitle: 'よくある質問',
    source: { url: 'https://www.timeanddate.com/date/duration.html', label: 'Time and Date – 日付差計算ツール' },
    faqs: [
      { q: '2つの日付の間は何日ですか？', a: '上のフィールドに開始日と終了日を入力して「計算する」をクリックしてください。結果には週数・月数・年数の換算とともに、2つの日付間の正確な暦日数が表示されます。' },
      { q: '誕生日まで何日ありますか？', a: '最後の誕生日を開始日、次の誕生日を終了日として入力してください。毎年の計算には今年の誕生日を開始日、来年の誕生日を終了日にすると、結果は常に365日（閏年は366日）になります。' },
      { q: '平日と暦日の違いは何ですか？', a: '暦日は週末と祝日を含むすべての日を数えます。平日は月〜金のみを数えます。この計算ツールは両方を表示します。' },
      { q: '締め切りまで何日ありますか？', a: '今日を開始日、締め切りを終了日として入力し「計算する」をクリックしてください。暦日数と平日数の両方が表示されます。' },
      { q: '計算ツールは開始日・終了日を含みますか？', a: '計算ツールは2つの日付間の完全な24時間の日数を数えます。1月1日〜3日は2日です。両端を含む場合は結果に1を足してください。' },
      { q: '特定の2年間は何日ですか？', a: '最初の年の1月1日を開始日、最後の年の12月31日を終了日として入力し、包括的なカウントのために1を加えてください。' },
      { q: 'サポートされる最大の日付範囲は何ですか？', a: 'この計算ツールは1900年〜2100年の任意の日付をサポートし、73,000日以上の範囲に対応します。' },
      { q: '平日のみを数えるにはどうすればよいですか？', a: '結果の「平日」フィールドは土日を除外します。祝日も除外するには、当社の平日計算ツールをご利用ください。' },
    ],
    weekDays: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
  },
  ko: {
    title: '날짜 사이의 일수 계산 2026 – 무료 일수 계산기',
    metaDesc: '두 날짜 사이의 정확한 일수를 계산합니다. 주, 월, 년도 표시 — 무료, 회원가입 불필요.',
    kicker: '날짜 사이 일수',
    headline: '두 날짜<em>사이의</em><br>일수',
    subhead: '시작 날짜와 종료 날짜를 입력하면 일수, 주수, 월수, 년수의 정확한 차이를 즉시 알 수 있습니다.',
    startLabel: '시작 날짜',
    endLabel: '종료 날짜',
    todayBtn: '오늘',
    calcBtn: '→ 계산하기',
    tipText: '"모든 날은 한 페이지입니다. 두 챕터 사이에 몇 페이지를 썼나요?"',
    examples: ['2000년 1월 1일 → 오늘', '생일 → 오늘', '연초 → 오늘'],
    resultsHeader: '날짜 차이',
    heroSuffix: '일',
    weeks: '주', months: '개월', years: '년',
    startDay: '시작 요일', endDay: '종료 요일', weekendsLbl: '주말', workdaysLbl: '평일',
    errInvalid: '→ 유효하지 않은 날짜입니다. 입력을 확인하세요.',
    errOrder: '→ 종료 날짜는 시작 날짜보다 이후여야 합니다.',
    seoH2a: '두 날짜 사이의 일수는 어떻게 계산하나요?',
    seoP1: '두 날짜 사이의 일수를 계산하려면 이른 날짜를 늦은 날짜에서 빼면 됩니다. 24시간마다 1일로 계산합니다. 짧은 기간에는 간단하지만 월 경계나 연도를 넘을 때는 복잡해집니다. 2월은 28일 또는 29일, 월마다 28~31일이 있으며 4년마다 윤년으로 하루가 추가됩니다. 이 계산기는 이 모든 것을 자동으로 처리합니다.',
    seoH2b: '날짜 차이 계산기의 일반적인 용도',
    seoP2: '날짜 계산은 가장 일반적인 날짜 계산 작업 중 하나입니다. 프로젝트 관리자는 기간 계산 및 마일스톤 간격 확인에 사용합니다. 인사팀은 혜택 자격이나 퇴직 기간을 위해 근무 일수를 계산합니다. 학생들은 시험이나 원서 마감일까지의 일수를 셉니다. 변호사와 회계사는 계약 기한을 추적합니다.',
    faqTitle: '자주 묻는 질문',
    source: { url: 'https://www.timeanddate.com/date/duration.html', label: 'Time and Date – 날짜 차이 계산기' },
    faqs: [
      { q: '두 날짜 사이는 며칠입니까?', a: '위의 필드에 시작 날짜와 종료 날짜를 입력하고 "계산하기"를 클릭하세요. 결과에는 주수, 월수, 년수 환산과 함께 두 날짜 사이의 정확한 달력 일수가 표시됩니다.' },
      { q: '생일까지 며칠 남았나요?', a: '마지막 생일을 시작 날짜로, 다음 생일을 종료 날짜로 입력하세요. 매년 계산하려면 올해 생일을 시작 날짜로, 내년 생일을 종료 날짜로 설정하면 항상 365일(윤년은 366일)이 됩니다.' },
      { q: '평일과 달력 일수의 차이는 무엇인가요?', a: '달력 일수는 주말과 공휴일을 포함한 모든 날을 셉니다. 평일은 월~금만 셉니다. 이 계산기는 두 가지 모두 표시합니다.' },
      { q: '마감일까지 며칠 남았나요?', a: '오늘을 시작 날짜로, 마감일을 종료 날짜로 입력하고 "계산하기"를 클릭하세요. 달력 일수와 평일 수가 모두 표시됩니다.' },
      { q: '계산기는 시작일/종료일을 포함하나요?', a: '계산기는 두 날짜 사이의 완전한 24시간 일수를 셉니다. 1월 1일~3일은 2일입니다. 양쪽 끝을 포함하려면 결과에 1을 더하세요.' },
      { q: '특정 두 해 사이는 며칠인가요?', a: '첫 번째 해의 1월 1일을 시작 날짜로, 마지막 해의 12월 31일을 종료 날짜로 입력하고 포괄적인 계산을 위해 1을 더하세요.' },
      { q: '지원되는 최대 날짜 범위는 얼마인가요?', a: '이 계산기는 1900년~2100년의 모든 날짜를 지원하며, 73,000일 이상의 범위를 커버합니다.' },
      { q: '평일만 계산하려면 어떻게 하나요?', a: '결과의 "평일" 필드는 토요일과 일요일을 제외합니다. 공휴일도 제외하려면 평일 계산기를 사용하세요.' },
    ],
    weekDays: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
  },
  nl: {
    title: 'Dagen Tussen Datums 2026 – Gratis Dagenberekening',
    metaDesc: 'Bereken het exacte aantal dagen tussen twee datums. Toont ook weken, maanden en jaren — gratis, geen registratie.',
    kicker: 'Dagen tussen datums',
    headline: 'Dagen <em>tussen</em><br>twee datums',
    subhead: 'Voer een begin- en einddatum in en krijg direct het exacte verschil in dagen, weken, maanden en jaren.',
    startLabel: 'Begindatum',
    endLabel: 'Einddatum',
    todayBtn: 'Vandaag',
    calcBtn: '→ BEREKEN',
    tipText: '"Elke dag is een pagina in het boek. Hoeveel pagina\'s heb je geschreven tussen twee hoofdstukken?"',
    examples: ['1 jan 2000 → Vandaag', 'Jouw verjaardag → Vandaag', 'Begin van het jaar → Vandaag'],
    resultsHeader: 'Datumverschil',
    heroSuffix: 'dagen',
    weeks: 'weken', months: 'maanden', years: 'jaren',
    startDay: 'Begindag', endDay: 'Einddag', weekendsLbl: 'Weekenden', workdaysLbl: 'Werkdagen',
    errInvalid: '→ Ongeldige datum. Controleer je invoer.',
    errOrder: '→ De einddatum moet na de begindatum liggen.',
    seoH2a: 'Hoe tel je dagen tussen twee datums?',
    seoP1: 'Om het aantal dagen tussen twee datums te berekenen, trek je de vroegste datum af van de latere — elk volledig tijdsbestek van 24 uur telt als één dag. De berekening is eenvoudig voor korte periodes, maar wordt ingewikkeld bij maand- of jaargrenzen. Februari heeft 28 of 29 dagen, maanden hebben 28 tot 31 dagen, en schrikkeljaren voegen elke vier jaar een dag toe. Deze calculator verwerkt al die complexiteit automatisch.',
    seoH2b: 'Veelvoorkomende toepassingen van de datumverschilcalculator',
    seoP2: 'Het tellen van dagen tussen datums is een van de meest voorkomende datumberekeningsopdrachten. Projectmanagers gebruiken het om looptijden te berekenen en tussenpozen tussen mijlpalen te controleren. HR-teams tellen dienstdagen voor uitkeringsrechten of opzegtermijnen. Studenten tellen dagen tot examens of aanmelddeadlines. Juristen en accountants houden contracttermijnen bij. Reizigers berekenen hoeveel dagen ze in het buitenland zijn voor visa of fiscale verblijfsstatus.',
    faqTitle: 'Veelgestelde vragen',
    source: { url: 'https://www.timeanddate.com/date/duration.html', label: 'Time and Date – Datumverschilcalculator' },
    faqs: [
      { q: 'Hoeveel dagen zitten er tussen twee datums?', a: 'Voer de begin- en einddatum in de velden hierboven in en klik op Berekenen. Het resultaat toont het exacte aantal kalenderdagen tussen de twee datums, samen met de omrekening in weken, maanden en jaren.' },
      { q: 'Hoeveel dagen zijn er tot mijn verjaardag?', a: 'Voer je laatste verjaardag in als begindatum en de volgende als einddatum. Voor een jaarlijkse berekening stel je het begin in op je verjaardag dit jaar en het einde op je verjaardag volgend jaar — het antwoord is altijd 365 (of 366 in een schrikkeljaar).' },
      { q: 'Wat is het verschil tussen werkdagen en kalenderdagen?', a: 'Kalenderdagen tellen elke dag inclusief weekenden en feestdagen. Werkdagen tellen alleen maandag tot vrijdag. Deze calculator toont beide: het totale aantal kalenderdagen en het aantal werkdagen.' },
      { q: 'Hoeveel dagen tot mijn deadline?', a: 'Voer de datum van vandaag in als begin en de deadlinedatum als einde, klik dan op Berekenen. Het resultaat vertelt je precies hoeveel dagen je nog hebt.' },
      { q: 'Telt de calculator de begin- en einddatum mee?', a: 'De calculator telt volledige 24-uursdagen tussen twee datums. Van 1 tot 3 januari = 2 dagen. Als je beide eindpunten wilt meetellen, tel dan 1 op bij het resultaat.' },
      { q: 'Hoeveel dagen zitten er tussen twee specifieke jaren?', a: 'Voer 1 januari van het eerste jaar in als begin en 31 december van het laatste jaar als einde, en tel dan 1 op voor inclusief tellen.' },
      { q: 'Wat is de maximale ondersteunde datumreeks?', a: 'Deze calculator ondersteunt elke datum van 1900 tot 2100, wat een bereik van meer dan 73.000 dagen geeft.' },
      { q: 'Hoe tel ik alleen werkdagen?', a: 'Het veld "Werkdagen" in de resultaten sluit zaterdagen en zondagen uit. Gebruik onze werkdagencalculator voor een calculator die ook feestdagen uitsluit.' },
    ],
    weekDays: ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'],
  },
};

module.exports = {
  pages: [
    { id: 'days-between-dates', slugs: { en: 'days-between-dates', fr: 'fr/jours-entre-deux-dates', es: 'es/dias-entre-fechas', pt: 'pt/dias-entre-datas', de: 'de/tage-zwischen-datumen', it: 'it/giorni-tra-date', pl: 'pl/dni-miedzy-datami', ja: 'ja/hidzuke-no-nissuu', ko: 'ko/nal-jja-sayi', nl: 'nl/dagen-tussen-datums' } },
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
